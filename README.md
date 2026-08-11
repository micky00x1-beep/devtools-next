# DeToolBoost

DeToolBoost is a web-based collection of developer tools designed to make common development tasks faster and easier.

The project is built with Next.js and focuses on a clean, responsive interface with lightweight browser-based utilities.

🌐 **Live website:** https://detoolboost.com

## Features

### Developer Tools

<!-- TOOLS:START -->

- **JSON Formatter**

  - Format and validate JSON files.

- **Base64 Encoder**

  - Encode and decode Base64 strings.

- **UUID Generator**

  - Generate secure UUIDs instantly.

- **JWT Decoder**

  - Decode JSON Web Tokens and inspect their contents.

- **URL Encoder & Decoder**

  - Encode and decode URLs and text.

- **Unix Timestamp Converter**

  - Convert Unix timestamps and UTC dates.

- **Regex Tester**

  - Test regular expressions against text.

- **Hash Generator**

  - Generate secure SHA hashes from text.

- **XML Formatter**

  - Format and validate XML files.

- **Markdown Previewer**

  - Write and preview Markdown instantly.

- **HTML Formatter**

  - Format and validate HTML files.

- **URL Parser**

  - Parse URLs and inspect their components.

- **JSON ↔ CSV Converter**

  - Convert JSON and CSV data between formats.

- **Color Converter**

  - Convert colors between HEX, RGB and HSL.

<!-- TOOLS:END -->

### AI Tools

DeToolBoost also includes an AI tools section currently under development.

The current interface includes:

- Explain Code
- Commit Generator
- Regex Explainer
- SQL Assistant

These tools are currently presented as **Coming Soon** while their AI functionality is being developed.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React
- Vercel
- Vercel Analytics

## Project Structure

```text
src/
├── app/
│   ├── ai/
│   │   ├── commit-generator/
│   │   ├── explain-code/
│   │   ├── regex-explainer/
│   │   └── sql-assistant/
│   │
│   ├── tools/
│   │   ├── base64/
│   │   ├── json-formatter/
│   │   └── uuid/
│   │
│   └── about/
│
├── components/
│   ├── ai/
│   ├── common/
│   └── layout/
│
├── lib/
│   └── ai/
│
└── types/
```
