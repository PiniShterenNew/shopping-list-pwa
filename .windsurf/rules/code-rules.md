---
trigger: always_on
---

# AGENTS.md

## Project Overview

This project is a modern, collaborative shopping-list Progressive Web App, with the following stack and conventions:

- **Framework:** Next.js 14 (`app/` directory, App Router)
- **TypeScript:** All code and components are in TypeScript
- **UI:** Tailwind CSS v3 (utility-first, mobile-first design)
- **State Management:** Zustand
- **Real-time:** Socket.io-client (for later phases)
- **API/Requests:** REST, using fetch or axios
- **Code Structure:** All source code is under `/src`
- **Import Alias:** Use `@/` as the import alias root

---

## Project Structure

- `/src/app/` — Next.js App Router routes and layouts
- `/src/components/` — Reusable React UI components (PascalCase)
- `/src/features/` — Business logic features (auth, lists, items, shopping)
- `/src/stores/` — Zustand state stores (camelCase)
- `/src/types/` — TypeScript shared types and interfaces
- `/src/lib/` — Utilities, API clients, helpers
- `/src/styles/` — Global style files (only for Tailwind/base)
- `/public/` — Static files, images, favicon, manifest
- `/tests/` — Unit/integration tests (mirroring src structure)

---

## Coding Guidelines

- Only functional React components with hooks
- All new files and code in **TypeScript** (`.tsx`/`.ts`)
- Use Tailwind CSS utility classes for all styling (no external CSS/SASS)
- Always type component props (using `type` or `interface`)
- Use Zustand for global state management
- Use absolute imports from `@/` (no relative imports for project-internal code)
- Filename conventions:
  - Components: `PascalCase.tsx`
  - Stores/hooks/libs: `camelCase.ts`
  - Tests: `[ComponentName].test.tsx`
- Do not commit `.env*` files or any secrets
- Comments in English only

---

## UI/UX Standards

- Clean, minimalist, accessible (WCAG 2.1 AA)
- Responsive and mobile-first
- Light/dark mode toggle (system default)
- Use Headless UI (Dialog, Menu, etc.) when needed
- Animations with Framer Motion or CSS transitions only
- SVG/Heroicons for all icons
- Floating Action Button (FAB) for primary actions

---

## API & Auth

- REST API endpoints under `/api/`
- All requests from the app use fetch or axios (no GraphQL)
- Use JWT Bearer token for authentication (to be implemented in later phase)
- Error responses: `{ error: string }` JSON with relevant HTTP status
- Never leak stack traces or sensitive info to client

---

## Testing

- All core features/components must have Jest + React Testing Library tests
- Unit tests go in `/tests` (mirroring src structure)
- Aim for at least 80% coverage on business logic
- Use MSW for mocking API requests in tests
- Use Playwright or Cypress for E2E (optional, not required for MVP)

- All unit and integration tests are in `/tests`, mirroring the `/src` structure.
- Uses Jest and React Testing Library.
- Jest config is in `jest.config.js`; setup in `jest.setup.js`.
- All new features/components must include at least one test file.
- Use MSW for mocking API requests.
- For E2E, use Playwright or Cypress with their respective configs.

---

## Quality & CI/CD

- Code must pass ESLint (with Next.js rules) and Prettier formatting
- Use Husky for pre-commit lint/test hooks (if set up)
- Semantic commit messages (`feat:`, `fix:`, `chore:` etc.)
- All pull requests must include a description and testing instructions
- Each feature/bugfix branch is based off latest main

---

## Documentation

- `/README.md` covers setup, usage, and main features
- Each `/src/features/[feature]/` folder can include a `README.md` for specifics
- All API endpoints should be documented with request/response and error example
- Keep this `AGENTS.md` up to date as conventions change

---

## Miscellaneous

- Do not use `any` unless absolutely necessary (and explain in comment)
- Remove all unused code before making a PR
- Do not access the database directly from client code (use API only)
- All project discussions, issues, and comments in English
- Never hard-code secrets, keys, or tokens

---

# End of AGENTS.md
