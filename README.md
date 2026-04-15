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
npm install
# Set up PostgreSQL (see main branch README for Docker instructions)
node src/index.js
```

## Your Task

Use AI-assisted modernisation techniques to transform this codebase:

1. **Assess** — identify and prioritise the technical debt
2. **Write characterisation tests** — capture current behaviour before changing anything
3. **Transform** — apply pattern transformations one at a time (callbacks → async/await, add types, extract responsibilities)
4. **Verify** — ensure behaviour is preserved after each transformation

See Module 2, Lesson 3 for the full modernisation workflow.
