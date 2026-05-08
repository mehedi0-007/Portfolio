# Portfolio — Vite + React + TypeScript

A clean, maintainable TypeScript rewrite of the portfolio site.

## Getting Started

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # production build
npm run preview    # preview production build
```

## Project Structure

```
src/
├── main.tsx              # Entry point
├── App.tsx               # Root component — wires everything together
├── styles/
│   └── globals.css       # All CSS (variables, animations, components)
├── types/
│   └── index.ts          # TypeScript interfaces for all data shapes
├── data/                 # ← Edit your content here
│   ├── projects.ts       # Projects / bento cards
│   ├── skills.ts         # Skill groups + tags
│   ├── research.ts       # Research papers
│   ├── timeline.ts       # Career / education timeline
│   └── terminal.ts       # Terminal command responses
├── hooks/
│   ├── useScrollReveal.ts # Intersection Observer reveal animations
│   └── useCursorGlow.ts   # Cursor glow + nav scroll behavior
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Skills.tsx
    ├── Projects.tsx
    ├── Research.tsx
    ├── Timeline.tsx
    ├── Terminal.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## Customizing Your Content

All personal data is in `src/data/`. You never need to touch the components
to update content — just edit the data files:

| File | What to change |
|------|----------------|
| `data/projects.ts` | Add/remove/edit project cards |
| `data/skills.ts` | Update skill tags per category |
| `data/research.ts` | Add papers and links |
| `data/timeline.ts` | Update career history |
| `data/terminal.ts` | Customize terminal command responses |

### Updating personal info

- **Name, links, email** — search for `Mehedi Hassan` / `yourusername` etc. across components
- **Hero text** — edit `src/components/Hero.tsx`
- **About copy** — edit `src/components/About.tsx`
- **Contact links** — edit `src/components/Contact.tsx`
- **Footer** — edit `src/components/Footer.tsx`

### Adding a new project

In `src/data/projects.ts`, add a new object following the `Project` type from `src/types/index.ts`:

```ts
{
  id: 'my-new-project',
  category: 'Backend · Go',
  status: 'live',          // 'live' | 'research' | 'wip'
  title: 'My New Project',
  description: '...',
  tags: ['Go', 'Redis'],
  accentColor: 'rgba(56, 189, 248, 0.15)',
  glowColor: 'rgba(56, 189, 248, 0.12)',
  layout: 'normal',        // 'normal' | 'wide' | 'tall'
  link: 'https://github.com/...',
}
```

## Theming

All design tokens live in `src/styles/globals.css` under `:root`:

```css
:root {
  --accent: #38bdf8;    /* primary accent (sky blue) */
  --accent-2: #a78bfa;  /* secondary accent (violet) */
  --accent-3: #34d399;  /* tertiary accent (emerald) */
  --bg: #070709;        /* page background */
  /* ... */
}
```
