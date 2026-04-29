# TundraBoard (Legacy Branch)

> **This branch contains a deliberately messy JavaScript codebase for Module 2
> modernisation exercises.** The code has intentional anti-patterns that you
> will modernise using AI-assisted development techniques.

## Anti-Patterns Present

This codebase includes the following issues for you to identify and fix:

- Callback-based async (no async/await)
- No TypeScript types (plain JavaScript)
- God-class service file handling multiple responsibilities
- Hardcoded database credentials
- SQL queries built with string concatenation
- Inconsistent error handling
- No input validation
- No tests
- `var` instead of `let`/`const`
- CommonJS `require()` instead of ES modules

## Running Locally

```bash
# Install dependencies (respects the lockfile exactly)
npm ci

# Check for known vulnerabilities and verify package signatures
npm audit
npm audit signatures

# Set up PostgreSQL (see main branch README for Docker instructions)
node src/index.js
```

> The repo sets `ignore-scripts=true` in `.npmrc` to block postinstall execution during `npm ci`. If you add a native dependency that needs a build step, run `npm rebuild` after install to trigger it manually.

## Your Task

Use AI-assisted modernisation techniques to transform this codebase:

1. **Assess** — identify and prioritise the technical debt
2. **Write characterisation tests** — capture current behaviour before changing anything
3. **Transform** — apply pattern transformations one at a time (callbacks → async/await, add types, extract responsibilities)
4. **Verify** — ensure behaviour is preserved after each transformation

See Module 2, Lesson 3 for the full modernisation workflow.
