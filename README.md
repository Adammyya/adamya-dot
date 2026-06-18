# Adamya Pandey — Portfolio

A recruiter-focused personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Stack

- **React 18** + **Vite 5** — app shell and build tooling
- **Tailwind CSS 3** — styling, with a custom design-token theme (see `tailwind.config.js`)
- **Framer Motion** — scroll reveals, hover states, the hero boot sequence
- **React Icons** — iconography (Feather set)
- Live **GitHub REST API** call (no auth, no backend) for the GitHub stats section

## Project structure

```
adamya-portfolio/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── ASSETS_TODO.md        # what to drop in before you deploy
├── src/
│   ├── components/
│   │   ├── ui/                # shared primitives: Section, GlassCard, Tag, NodeGraph, TerminalBoot
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── GithubStats.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js   # ← all content lives here (edit this, not the components)
│   ├── hooks/
│   │   ├── useBootSequence.js
│   │   └── useGithubStats.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Before you deploy — edit these

Everything content-related lives in **`src/data/portfolioData.js`**. Search that
file for `PLACEHOLDER` and fill in:

- `profile.email`, `profile.linkedin` — currently dummy values
- `education.duration`, `education.institution`
- `experience[0].duration`
- `projects[*].github` / `.demo` — currently all point at your GitHub profile;
  swap in the actual repo URLs once they're public
- `achievements` — four placeholder cards (hackathons, certifications,
  research, competitions) ready for you to fill in as you earn them

Then check `public/ASSETS_TODO.md` for the optional photo/resume/social-image
files.

## Local development

Requires Node.js 18+.

```bash
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build      # production build → /dist
npm run preview    # preview the production build locally
```

## Design notes

- **Color system**: two accent colors are used deliberately, not decoratively.
  Cyan (`signal`) marks backend/systems/engineering content; violet
  (`synapse`) marks AI/ML content. You'll see this in the skills bars, project
  tags, and timeline dots.
- **Hero signature**: the node-graph background and terminal boot sequence are
  the one bold visual choice on the page — everything else stays quiet and
  disciplined on purpose. It reads as a neural network or a systems diagram
  depending on how you look at it, which fits both halves of the "AI & ML
  student / backend developer" identity.
- **Reduced motion**: all animation is disabled site-wide when the visitor's
  OS has `prefers-reduced-motion` set, via `src/index.css`.
- **GitHub stats**: fetched client-side from the public GitHub REST API
  (no token, no server). If GitHub's anonymous rate limit (60 req/hr per IP)
  is hit, the section fails gracefully and links out to the GitHub profile
  instead of showing broken data.

## Deploying to Vercel

**Option A — via the Vercel dashboard (no CLI needed)**

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import that repository.
3. Vercel auto-detects Vite. Confirm the defaults:
   - Build command: `npm run build` (or `vite build`)
   - Output directory: `dist`
4. Click **Deploy**. You'll get a live URL in under a minute.
5. Optional: add a custom domain under Project → Settings → Domains.

**Option B — via the Vercel CLI**

```bash
npm install -g vercel
vercel login
vercel          # first deploy — answer the prompts (framework: Vite)
vercel --prod   # promote to production
```

Every subsequent `git push` to your connected branch triggers an automatic
redeploy if you used Option A.

## SEO & performance notes already baked in

- Meta description, Open Graph, and Twitter card tags in `index.html`
- `robots.txt` with a sitemap stub (add a real sitemap if you want search
  engines crawling deep links)
- Semantic landmarks (`header`, `main`, `footer`, `section` with `id`s) so the
  nav links and any in-page anchors are crawlable
- No render-blocking custom fonts beyond the three Google Fonts weights
  actually used; `preconnect` hints are set for them
- Images (contribution chart, avatar) are lazy by nature of being below the
  fold or conditionally rendered

## License

This code is yours to use, modify, and deploy as your personal portfolio.
