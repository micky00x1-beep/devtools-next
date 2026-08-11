import fs from "node:fs";

const toolsPath = "src/data/tools.ts";
const readmePath = "README.md";

const toolsFile = fs.readFileSync(toolsPath, "utf8");
const readme = fs.readFileSync(readmePath, "utf8");

const toolMatches = [
  ...toolsFile.matchAll(
    /title:\s*"([^"]+)"[\s\S]*?description:\s*"([^"]+)"[\s\S]*?href:\s*"([^"]+)"/g
  ),
];

const toolsMarkdown = toolMatches
  .map(([, title, description]) => `- **${title}**\n\n  - ${description}`)
  .join("\n\n");

const startMarker = "<!-- TOOLS:START -->";
const endMarker = "<!-- TOOLS:END -->";

const startIndex = readme.indexOf(startMarker);
const endIndex = readme.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
  throw new Error("README tools markers were not found.");
}

const before = readme.slice(0, startIndex + startMarker.length);
const after = readme.slice(endIndex);

const updatedReadme = `${before}\n\n${toolsMarkdown}\n\n${after}`;

fs.writeFileSync(readmePath, updatedReadme, "utf8");

console.log(`README updated with ${toolMatches.length} developer tools.`);
