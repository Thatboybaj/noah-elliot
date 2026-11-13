# Noah Elliot

A Next.js rebuild of the **Noah Elliot** Framer portfolio template (reference: https://noahelliot.framer.website), built for a single personal project under a Craftwork licence. Not for redistribution or resale as a template.

## Stack

- Next.js 16 (App Router, Cache Components), React 19, TypeScript
- Tailwind CSS v4 (tokens in `app/globals.css`)
- Motion (`motion/react`) for every animation
- Inter Tight (variable), self-hosted through `next/font/local`

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

| Path | What it is |
| --- | --- |
| `lib/content.ts` | All copy, links and images as typed data. Edit this to make the site yours. |
| `lib/motion.ts` | Shared motion tokens (easing, durations, in-view threshold). |
| `app/globals.css` | Color tokens, breakpoints, type styles (`.t-*`), link styles. |
| `components/` | One file per section. |
| `app/page.tsx` | Home: hero, statement, project stack, about, services, footer. |
| `app/project/page.tsx` | Projects index. |
| `app/project/[slug]/page.tsx` | Case study (statically generated for each project). |
| `app/contact/page.tsx` | Contact. |

Breakpoints match the template: phone < 810 px, tablet 810–1023, laptop 1024–1439, desktop ≥ 1440.

## Motion inventory

| Where | What moves | Trigger | Values | Built with |
| --- | --- | --- | --- | --- |
| Page heroes (H1, aside, CTA) | opacity 0→1, y 40→0 (CTA y 15) | page load | 0.8 s, delay 0.2 s, `cubic-bezier(0.8, 0, 0.56, 1)` | `Reveal trigger="appear"` |
| Hero intro + wordmark | opacity, y 40 / 20 | scroll into view | 0.6 s, delay 0.1 s, same curve | `Reveal` |
| Statement | words go from 50 % to 100 % white, one by one | scroll position (block top at 40 % of viewport → bottom at 40 %) | per-word color transition 0.3 s ease-out | `Statement` (`useScroll`) |
| Project cards | whole stack fades/slides up; cards stick at top and stack | in view; scroll | y 40, 0.8 s; `position: sticky` | `Reveal` + CSS |
| Project cards (mouse) | 120 px "View Project" disc follows the cursor | hover | follows pointer 1:1, offset −60 px | `ProjectStack` (motion values) |
| About | portrait y 40, each paragraph y 20 | in view | 0.8 s | `Reveal` |
| Services | each item y 40 | in view | 0.8 s | `Reveal` |
| Footer | CTA, link row, wordmark y 40 | in view | 0.8 s | `Reveal` |
| Nav / footer links | opacity 1→0.6 | hover | 0.3 s | `.link-dim` |
| Underlined links | underline fades out | hover | 0.3 s | `.link-underline` |
| Mobile menu | bar darkens, panel unclips, links stagger in, burger → ✕ | click | 0.45 s, 60 ms stagger | `Nav` |

All animation uses transform, opacity, color or clip-path. With `prefers-reduced-motion`, Motion drops the movement and keeps the fades. Without JavaScript, a `<noscript>` rule shows everything.

## Before going live

- **Images** still load from Framer's CDN (`framerusercontent.com`, allowed in `next.config.ts`). Replace them with your own files in `public/` and update `lib/content.ts`.
- **Links**: socials, phone, email and "Live Preview" are placeholders in `lib/content.ts`.
