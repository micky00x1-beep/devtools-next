import type { Tool } from "@/types/tool";

export const tools: Tool[] = [
  {
    title: "JSON Formatter",
    description: "Format and validate JSON files.",
    href: "/tools/json-formatter",
    seoTitle: "JSON Formatter Online | Free JSON Formatter",
    seoDescription:
      "Format, validate and beautify JSON online for free with DeToolBoost.",
    seoContent: {
      intro:
        "Format and validate JSON directly in your browser with this free online JSON formatter.",
      whatIs:
        "A JSON formatter organizes JSON data with consistent indentation and structure, making it easier to read, inspect and troubleshoot.",
      howTo: [
        "Paste your JSON into the formatter.",
        "Format the JSON to make its structure easier to read.",
        "Review the result and check for syntax errors.",
      ],
      useCases: [
        "Reading minified JSON responses from APIs.",
        "Checking JSON syntax during development.",
        "Making configuration files easier to inspect.",
      ],
      faq: [
        {
          question: "What is a JSON formatter?",
          answer:
            "A JSON formatter organizes JSON data with consistent indentation and formatting so it is easier to read and inspect.",
        },
        {
          question: "Can I format JSON online for free?",
          answer:
            "Yes. DeToolBoost provides a free JSON formatter that runs directly in your browser.",
        },
      ],
    },
  },
  {
    title: "Base64 Encoder",
    description: "Encode and decode Base64 strings.",
    href: "/tools/base64",
    seoTitle: "Base64 Encoder & Decoder Online | Free Tool",
    seoDescription:
      "Encode and decode Base64 strings online with this fast and free Base64 encoder and decoder.",
    seoContent: {
      intro:
        "Encode text to Base64 or decode Base64 strings directly in your browser.",
      whatIs:
        "Base64 is an encoding method commonly used to represent binary or text data as ASCII characters. It is useful when data needs to be transported through systems that expect text.",
      howTo: [
        "Enter the text or Base64 string you want to process.",
        "Choose whether to encode or decode the value.",
        "Copy the resulting output.",
      ],
      useCases: [
        "Encoding text for data transmission.",
        "Inspecting Base64-encoded values.",
        "Working with APIs and web development tasks.",
      ],
      faq: [
        {
          question: "What is Base64 encoding?",
          answer:
            "Base64 converts data into a text representation using a defined set of ASCII characters.",
        },
        {
          question: "Does Base64 encrypt data?",
          answer:
            "No. Base64 is an encoding format, not an encryption method. Encoded data should not be treated as secret.",
        },
      ],
    },
  },
  {
    title: "UUID Generator",
    description: "Generate secure UUIDs instantly.",
    href: "/tools/uuid",
    seoTitle: "UUID Generator Online | Free UUID v4 Generator",
    seoDescription:
      "Generate UUIDs instantly with this free online UUID generator from DeToolBoost.",
    seoContent: {
      intro:
        "Generate UUIDs instantly in your browser for development, testing and applications.",
      whatIs:
        "A UUID is a universally unique identifier commonly used to identify records, resources and objects in software systems.",
      howTo: [
        "Open the UUID generator.",
        "Generate a new UUID.",
        "Copy the generated identifier and use it in your project.",
      ],
      useCases: [
        "Creating unique identifiers for database records.",
        "Generating IDs during development and testing.",
        "Creating identifiers for application resources.",
      ],
      faq: [
        {
          question: "What is a UUID?",
          answer:
            "A UUID is a standardized identifier designed to provide a very large space of unique values.",
        },
        {
          question: "What can I use a generated UUID for?",
          answer:
            "UUIDs can be used for identifiers in applications, databases, APIs and development projects.",
        },
      ],
    },
  },
  {
    title: "JWT Decoder",
    description: "Decode JSON Web Tokens and inspect their contents.",
    href: "/tools/jwt-decoder",
    seoTitle: "JWT Decoder Online | Decode JSON Web Tokens",
    seoDescription:
      "Decode and inspect JSON Web Tokens online with this free JWT decoder.",
    seoContent: {
      intro:
        "Decode a JSON Web Token and inspect its header and payload directly in your browser.",
      whatIs:
        "A JWT, or JSON Web Token, is a compact token format commonly used to transmit claims between systems and applications.",
      howTo: [
        "Paste a JWT into the decoder.",
        "Inspect the decoded header and payload.",
        "Review the token claims and structure.",
      ],
      useCases: [
        "Inspecting authentication tokens during development.",
        "Debugging JWT-based APIs.",
        "Understanding token headers and claims.",
      ],
      faq: [
        {
          question: "Can a JWT be decoded without the secret key?",
          answer:
            "The header and payload of a JWT can generally be decoded without the signing secret. Decoding does not verify the token's signature.",
        },
        {
          question: "Is decoding a JWT the same as verifying it?",
          answer:
            "No. Decoding reveals the encoded contents, while verification checks whether the token has a valid signature.",
        },
      ],
    },
  },
  {
    title: "URL Encoder & Decoder",
    description: "Encode and decode URLs and text.",
    href: "/tools/url-encoder",
    seoTitle: "URL Encoder & Decoder Online | Free URL Tool",
    seoDescription:
      "Encode and decode URLs and text online with this free URL encoding tool.",
    seoContent: {
      intro:
        "Encode special characters for URLs or decode URL-encoded text directly in your browser.",
      whatIs:
        "URL encoding converts characters that have special meanings in URLs into a representation that can be safely included in a URL.",
      howTo: [
        "Enter the URL or text you want to process.",
        "Choose encoding or decoding.",
        "Copy the resulting value.",
      ],
      useCases: [
        "Preparing query parameters for web requests.",
        "Decoding URL parameters during debugging.",
        "Working with URLs in frontend and backend applications.",
      ],
      faq: [
        {
          question: "What is URL encoding?",
          answer:
            "URL encoding represents characters using percent-encoded values so they can be safely transported as part of a URL.",
        },
        {
          question: "When should I decode a URL?",
          answer:
            "Decoding is useful when inspecting URL parameters or text that contains percent-encoded characters.",
        },
      ],
    },
  },
  {
    title: "Unix Timestamp Converter",
    description: "Convert Unix timestamps and UTC dates.",
    href: "/tools/timestamp",
    seoTitle: "Unix Timestamp Converter | Epoch Time Converter",
    seoDescription:
      "Convert Unix timestamps to readable dates and convert dates to Unix time online.",
    seoContent: {
      intro:
        "Convert Unix timestamps and UTC dates quickly with this free online timestamp converter.",
      whatIs:
        "A Unix timestamp represents a point in time as the number of seconds elapsed since January 1, 1970 UTC.",
      howTo: [
        "Enter a Unix timestamp or date.",
        "Choose the conversion you need.",
        "Copy the resulting timestamp or formatted date.",
      ],
      useCases: [
        "Debugging timestamps returned by APIs.",
        "Converting database timestamps.",
        "Checking dates used in software systems.",
      ],
      faq: [
        {
          question: "What is a Unix timestamp?",
          answer:
            "A Unix timestamp is a numerical representation of time measured from January 1, 1970 UTC.",
        },
        {
          question: "What is epoch time?",
          answer:
            "Epoch time is another common name for Unix time, referring to the same basic timestamp convention.",
        },
      ],
    },
  },
  {
    title: "Regex Tester",
    description: "Test regular expressions against text.",
    href: "/tools/regex-tester",
    seoTitle: "Regex Tester Online | Test Regular Expressions",
    seoDescription:
      "Test regular expressions against text with this free online regex tester.",
    seoContent: {
      intro:
        "Test regular expressions against sample text and quickly inspect whether your pattern matches.",
      whatIs:
        "A regular expression, or regex, is a pattern used to search, match and manipulate text according to defined rules.",
      howTo: [
        "Enter your regular expression.",
        "Add the text you want to test.",
        "Review the matches produced by the pattern.",
      ],
      useCases: [
        "Testing validation patterns.",
        "Debugging search expressions.",
        "Building text-processing features.",
      ],
      faq: [
        {
          question: "What is a regex?",
          answer:
            "A regex is a pattern that describes a set of text strings and can be used for searching, matching and text manipulation.",
        },
        {
          question: "Can I test regex patterns before using them in code?",
          answer:
            "Yes. A regex tester is useful for checking how a pattern behaves against representative input before adding it to an application.",
        },
      ],
    },
  },
  {
    title: "Hash Generator",
    description: "Generate secure SHA hashes from text.",
    href: "/tools/hash-generator",
    seoTitle: "Hash Generator Online | SHA Hash Generator",
    seoDescription:
      "Generate SHA hashes from text online with this free hash generator.",
    seoContent: {
      intro:
        "Generate cryptographic hashes from text directly in your browser.",
      whatIs:
        "A cryptographic hash function converts input data into a fixed-length value. Hashes are commonly used for integrity checks and other security-related operations.",
      howTo: [
        "Enter the text you want to hash.",
        "Select the available hashing algorithm.",
        "Generate and copy the resulting hash.",
      ],
      useCases: [
        "Checking data integrity.",
        "Testing cryptographic workflows.",
        "Working with hashes in development projects.",
      ],
      faq: [
        {
          question: "What is a hash?",
          answer:
            "A hash is a fixed-length value generated from input data by a hashing algorithm.",
        },
        {
          question: "Is hashing the same as encryption?",
          answer:
            "No. Hashing is generally designed as a one-way transformation, while encryption is designed to allow data to be recovered with the appropriate key.",
        },
      ],
    },
  },
  {
    title: "XML Formatter",
    description: "Format and validate XML files.",
    href: "/tools/xml-formatter",
    seoTitle: "XML Formatter Online | Free XML Formatter",
    seoDescription:
      "Format and validate XML online with this free XML formatter from DeToolBoost.",
    seoContent: {
      intro:
        "Format XML documents into a readable structure and make XML easier to inspect.",
      whatIs:
        "XML is a markup language used to structure and transport data. Formatting XML adds indentation and organization without changing its intended structure.",
      howTo: [
        "Paste your XML document into the formatter.",
        "Format the document.",
        "Review the structured output and any validation feedback.",
      ],
      useCases: [
        "Inspecting XML API responses.",
        "Debugging XML documents.",
        "Making configuration files easier to read.",
      ],
      faq: [
        {
          question: "What does an XML formatter do?",
          answer:
            "An XML formatter adds consistent indentation and structure to make XML documents easier to read.",
        },
        {
          question: "Can formatted XML be used in a project?",
          answer:
            "Yes. Formatting changes the presentation of the document rather than its intended data structure.",
        },
      ],
    },
  },
  {
    title: "Markdown Previewer",
    description: "Write and preview Markdown instantly.",
    href: "/tools/markdown-previewer",
    seoTitle: "Markdown Previewer Online | Free Markdown Tool",
    seoDescription:
      "Write Markdown and preview the rendered result instantly with this free online Markdown previewer.",
    seoContent: {
      intro:
        "Write Markdown and see the rendered result instantly while you work.",
      whatIs:
        "Markdown is a lightweight markup syntax used to format text with headings, lists, links, code and other elements.",
      howTo: [
        "Write or paste Markdown into the editor.",
        "Review the rendered preview.",
        "Adjust your Markdown until the result matches your needs.",
      ],
      useCases: [
        "Previewing README files.",
        "Writing technical documentation.",
        "Checking Markdown formatting before publishing.",
      ],
      faq: [
        {
          question: "What is Markdown?",
          answer:
            "Markdown is a lightweight markup language that uses simple text syntax to create formatted documents.",
        },
        {
          question: "Where is Markdown commonly used?",
          answer:
            "Markdown is widely used for documentation, README files, notes, technical content and developer platforms.",
        },
      ],
    },
  },
  {
    title: "HTML Formatter",
    description: "Format and validate HTML files.",
    href: "/tools/html-formatter",
    seoTitle: "HTML Formatter Online | Free HTML Formatter",
    seoDescription:
      "Format HTML online and make your markup easier to read with this free HTML formatter.",
    seoContent: {
      intro:
        "Format HTML markup directly in your browser to make its structure easier to read and inspect.",
      whatIs:
        "An HTML formatter organizes markup using indentation and consistent structure, making nested elements easier to understand.",
      howTo: [
        "Paste your HTML markup into the formatter.",
        "Format the document.",
        "Review the resulting structure.",
      ],
      useCases: [
        "Cleaning up HTML during development.",
        "Inspecting generated markup.",
        "Making HTML documents easier to maintain.",
      ],
      faq: [
        {
          question: "What is an HTML formatter?",
          answer:
            "An HTML formatter organizes HTML markup with consistent indentation and structure.",
        },
        {
          question: "Does formatting change the purpose of HTML?",
          answer:
            "Formatting primarily changes how the markup is presented and organized, not the intended structure of the document.",
        },
      ],
    },
  },
  {
    title: "URL Parser",
    description: "Parse URLs and inspect their components.",
    href: "/tools/url-parser",
    seoTitle: "URL Parser Online | Analyze URL Components",
    seoDescription:
      "Parse a URL online and inspect its protocol, host, path, query parameters and other components.",
    seoContent: {
      intro:
        "Analyze a URL and inspect its individual components directly in your browser.",
      whatIs:
        "A URL parser separates a web address into components such as protocol, hostname, port, path, query string and fragment.",
      howTo: [
        "Enter the URL you want to inspect.",
        "Run the parser.",
        "Review the individual URL components.",
      ],
      useCases: [
        "Debugging API endpoints.",
        "Inspecting query parameters.",
        "Understanding complex URLs during development.",
      ],
      faq: [
        {
          question: "What is a URL parser?",
          answer:
            "A URL parser breaks a URL into its individual components so they can be inspected separately.",
        },
        {
          question: "Which URL components can be inspected?",
          answer:
            "Depending on the URL, components can include the protocol, hostname, port, path, query parameters and fragment.",
        },
      ],
    },
  },
  {
    title: "JSON ↔ CSV Converter",
    description: "Convert JSON and CSV data between formats.",
    href: "/tools/json-csv",
    seoTitle: "JSON to CSV Converter | CSV to JSON Online",
    seoDescription:
      "Convert JSON to CSV and CSV to JSON online with this free data conversion tool.",
    seoContent: {
      intro:
        "Convert structured data between JSON and CSV formats directly in your browser.",
      whatIs:
        "JSON and CSV are common data formats used for storing and exchanging information. Converting between them can help move data between different tools and workflows.",
      howTo: [
        "Enter or paste your JSON or CSV data.",
        "Choose the conversion direction.",
        "Review and copy the converted result.",
      ],
      useCases: [
        "Preparing API data for spreadsheet workflows.",
        "Converting tabular CSV data into JSON.",
        "Moving structured data between development tools.",
      ],
      faq: [
        {
          question: "What is the difference between JSON and CSV?",
          answer:
            "JSON represents structured data using objects and arrays, while CSV represents tabular data using rows and columns.",
        },
        {
          question: "Can JSON be converted to CSV?",
          answer:
            "Yes, JSON containing suitable structured records can be converted into a tabular CSV representation.",
        },
      ],
    },
  },
  {
    title: "Color Converter",
    description: "Convert colors between HEX, RGB and HSL.",
    href: "/tools/color-converter",
    seoTitle: "Color Converter | HEX, RGB & HSL Converter",
    seoDescription:
      "Convert colors between HEX, RGB and HSL values with this free online color converter.",
    seoContent: {
      intro:
        "Convert color values between HEX, RGB and HSL formats quickly in your browser.",
      whatIs:
        "HEX, RGB and HSL are different ways of representing colors. Converting between these formats is useful when working with CSS and digital interfaces.",
      howTo: [
        "Enter a supported color value.",
        "Review the equivalent HEX, RGB and HSL values.",
        "Copy the format you need for your project.",
      ],
      useCases: [
        "Working with CSS colors.",
        "Converting design values for frontend development.",
        "Checking equivalent color representations.",
      ],
      faq: [
        {
          question: "What is a HEX color?",
          answer:
            "A HEX color represents RGB color channels using hexadecimal notation, commonly written as six hexadecimal digits.",
        },
        {
          question: "What is HSL?",
          answer: "HSL represents a color using hue, saturation and lightness.",
        },
      ],
    },
  },
];
