# Unforget — Landing Page

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main page — assembles all sections
│   └── globals.css         # Global styles, CSS variables, animations
├── components/
│   ├── layout/
│   │   ├── Nav.tsx         # Fixed nav with logo + links + CTA
│   │   └── Footer.tsx      # Footer with links
│   ├── sections/
│   │   ├── Hero.tsx        # Hero with product card mockup
│   │   ├── LogosStrip.tsx  # "Used by teams at" strip
│   │   ├── HowItWorks.tsx  # 3-step explainer
│   │   ├── Features.tsx    # Bento grid feature cards
│   │   ├── Privacy.tsx     # Privacy section with stats
│   │   ├── Testimonials.tsx # 3-column testimonials
│   │   └── Waitlist.tsx    # Email capture CTA
│   └── ui/
│       ├── Divider.tsx              # Section divider
│       └── ScrollRevealProvider.tsx # Scroll animation initialiser
├── hooks/
│   └── useReveal.ts        # Scroll reveal hook
└── lib/
    └── utils.ts            # cn() class merge utility
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Build for production

```bash
npm run build
npm start
```

## Design Tokens

All colours are defined as CSS variables in `globals.css` and Tailwind tokens in `tailwind.config.ts`:

| Token | Value | Use |
|---|---|---|
| `--volt` | `#CEFF00` | Primary accent |
| `--volt-lt` | `#DAFF40` | Hover state |
| `--volt-dim` | `rgba(206,255,0,0.12)` | Backgrounds, tags |
| `--bg` | `#0A0A0A` | Page background |
| `--surface` | `#141414` | Card backgrounds |
| `--ink` | `#FFFFFF` | Primary text |
| `--ink-dim` | `rgba(255,255,255,0.5)` | Secondary text |
| `--border` | `rgba(255,255,255,0.08)` | Subtle borders |
| `--border-md` | `rgba(255,255,255,0.15)` | Medium borders |

## Adding New Sections

1. Create `src/components/sections/YourSection.tsx`
2. Add `"use client"` at top if using state or browser APIs
3. Import and add to `src/app/page.tsx`
4. Add `className="reveal"` to elements you want to animate in on scroll

## Fonts

Loaded via Google Fonts in `globals.css`:
- **Plus Jakarta Sans** — headings and body
- **Space Mono** — labels, tags, monospace UI

To self-host fonts for production performance, use `next/font/google` in `layout.tsx`.
