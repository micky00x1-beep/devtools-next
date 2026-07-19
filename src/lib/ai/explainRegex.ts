export async function explainRegex(regex: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return `This regular expression matches:

${regex}

This is currently a simulated AI response.

In the next version, DeToolBoost AI will explain each part of the regular expression step by step.`;
}
