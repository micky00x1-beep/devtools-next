# DeToolBoost

DeToolBoost is a web-based collection of developer tools designed to make common development tasks faster and easier.

The project is built with Next.js and focuses on a clean, responsive interface with lightweight browser-based utilities.

🌐 **Live website:** https://detoolboost.com

## Features

### Developer Tools

- **JSON Formatter**
  - Format and validate JSON
  - Copy formatted output
  - Clear input and output

- **Base64 Encoder & Decoder**
  - Encode text to Base64
  - Decode Base64 strings
  - UTF-8 support
  - Copy output

- **UUID Generator**
  - Generate UUIDs using the browser's native `crypto.randomUUID()` API
  - Copy generated UUIDs
  - Clear generated values

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
