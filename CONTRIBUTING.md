# Contributing to Coregit Docs

Thanks for helping improve the documentation!

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview changes.

## Structure

Documentation lives in `content/docs/`:

```
content/docs/
├── api-reference/     # REST API endpoint docs
├── getting-started/   # Onboarding guides
├── git-protocol/      # Git Smart HTTP docs
├── guides/            # How-to guides
├── index.mdx          # Landing page
└── meta.json          # Navigation order
```

Each page is an `.mdx` file with frontmatter:

```mdx
---
title: Page Title
description: One-line description for SEO
---

Content here...
```

## What to Contribute

- Fix typos, broken links, or outdated examples
- Improve explanations or add missing context
- Add code examples (SDK, CLI, cURL)
- Translate error messages or edge cases you've hit

## Guidelines

- Keep language concise and direct
- Include working code examples where possible
- Use `@coregit/sdk` for TypeScript examples, `cgt` for CLI examples, `curl` for HTTP examples
- Test code examples before submitting
- One topic per PR

## Built With

- [Fumadocs](https://fumadocs.vercel.app/) (Next.js docs framework)
- MDX for content

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
