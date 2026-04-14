<p align="center">
  <a href="https://docs.coregit.dev"><img src="https://img.shields.io/badge/Live-docs.coregit.dev-green" alt="Docs" /></a>
  <a href="https://github.com/coregit-inc/coregit-docs/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-AGPL--3.0-blue" alt="License" /></a>
</p>

# Coregit Docs

Documentation for [Coregit](https://github.com/coregit-inc/coregit-api) — the serverless Git API for AI agents.

Live at **[docs.coregit.dev](https://docs.coregit.dev)**

## What's Inside

| Section | Pages | Covers |
|---------|-------|--------|
| **Getting Started** | 4 | Quick start, authentication, agent onboarding, TypeScript SDK |
| **API Reference** | 23 | Repos, commits, branches, search, semantic search, code graph, LFS, webhooks, and more |
| **Git Protocol** | 4 | Clone, fetch, push, LFS over Smart HTTP |
| **Guides** | 8 | AI agent workflows, security, custom domains, LLM Wiki, benchmarks |

## Stack

- [Next.js 16](https://nextjs.org) + React 19
- [Fumadocs](https://fumadocs.vercel.app) for documentation UI
- [Tailwind CSS 4](https://tailwindcss.com)
- MDX content in `content/docs/`

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contributing

Edit or add MDX files in `content/docs/`. The site rebuilds automatically in dev mode.

```
content/docs/
  getting-started/    # Onboarding & setup
  api-reference/      # REST API endpoints
  git-protocol/       # Git Smart HTTP
  guides/             # Workflows & best practices
```

## License

[AGPL-3.0](LICENSE) — same as [coregit-api](https://github.com/coregit-inc/coregit-api).
