# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single **Next.js 16 (App Router) + React 19 + Tailwind v4** static landing page ("Cursor Workshop Quito"). There is one service and no backend, database, or external dependencies. Standard commands live in `package.json` (`dev`, `build`, `start`, `lint`); run/setup docs are in `README.md`.

- **Node version gotcha:** The project requires Node `>=24` (see `engines` in `package.json`), but the VM's default `node` on `PATH` (`/exec-daemon/node`) is Node 22 and shadows nvm. Node 24 is installed via nvm and prepended to `PATH` in `~/.bashrc`, so run commands from a login shell (`bash -l`) to pick up Node 24. Verify with `node --version` (should be `v24.x`). If you ever get an engine/version error, the wrong `node` is being resolved.
- **Dev server:** `npm run dev` (Next.js + Turbopack) serves on `http://localhost:3000`. Hot module reload works — editing `app/page.tsx` updates the browser live without a full refresh.
- **Tests:** There is no test framework or test script. Validate changes via `npm run lint`, `npm run build`, and manual browser testing of the page.
- **Fonts:** `app/layout.tsx` loads Google Fonts (Outfit, Syne) via `next/font/google`, which needs network access during dev/build.
