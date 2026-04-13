# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Festa Events** — a professional events website (French-language, luxury events brand) built from a Figma Make export. The original Figma design is at `https://www.figma.com/design/aHiIasIwWMmGwUTHTQxzk7/Site-web-professionnel-Festa-Events`.

## Commands

```bash
pnpm install   # Install dependencies (or: npm i)
npm run dev    # Start Vite development server
npm run build  # Production build
```

No test runner is configured.

## Architecture

**Entry point:** `index.html` → `src/main.tsx` → `src/App.tsx`

`src/App.tsx` owns the shell: it renders `<Navbar>`, a `<Routes>` block with all five pages, `<Footer>`, and a `ScrollToTop` component that resets scroll position on navigation.

**Routes** (all defined in `src/App.tsx`):

| Path | Component |
|------|-----------|
| `/` | `src/pages/Home.tsx` |
| `/services` | `src/pages/Services.tsx` |
| `/galerie` | `src/pages/Gallery.tsx` |
| `/a-propos` | `src/pages/About.tsx` |
| `/contact` | `src/pages/Contact.tsx` |

**Component structure:**
- `src/components/layout/` — `Navbar.tsx`, `Footer.tsx` (shared across all pages)
- `src/components/home/` — section components composed into `Home.tsx` (`Hero`, `AboutPreview`, `ServicesSection`, `GalleryPreview`, `ContactCTA`)
- `src/components/ui/` — shared UI primitives (e.g. `PageBanner.tsx`)
- `src/hooks/` — `useScrollReveal.ts` (IntersectionObserver-based `.reveal` class toggling), `useMobileMenu.ts`
- `src/utils/cn.ts` — standard `cn()` helper (`clsx` + `tailwind-merge`)

**Styling — two CSS token systems coexist:**
1. `src/index.css` — project design tokens (`--gold`, `--dark`, `--font-serif`, etc.) + all utility/component classes (`.btn`, `.btn-gold`, `.container`, `.section`, `.reveal`, etc.). Tailwind v4 is imported here via `@import "tailwindcss"`.
2. `default_shadcn_theme.css` — shadcn/ui tokens (`--background`, `--primary`, `--radius`, etc.) with `.dark` class variants. Not imported in `index.css`; only relevant if shadcn components are used.

Use the project tokens from `index.css` (e.g. `var(--gold)`, `var(--font-serif)`) for all custom UI. The Figma-derived utility classes (`.btn-gold`, `.section-header`, `.card-hover`, `.img-overlay`, `.reveal`) should be preferred over one-off inline styles.

**Scroll animations:** Apply the `.reveal` CSS class to elements; `useScrollReveal` adds `.revealed` via IntersectionObserver which triggers the transition defined in `index.css`.

**Build:** Vite 6 + `@vitejs/plugin-react` + `@tailwindcss/vite` — both plugins are required and must not be removed. Path alias `@` → `./src`.

## Key dependency notes

- `react` and `react-dom` are **peer dependencies** — they must be installed separately or present in the environment
- Raw SVG and CSV imports are supported via `assetsInclude` in `vite.config.ts`; do not add `.css`, `.tsx`, or `.ts` files there
- Available but not yet heavily used: MUI (`@mui/material`), `recharts`, `embla-carousel-react`, `react-dnd`, `motion`, `react-responsive-masonry`
