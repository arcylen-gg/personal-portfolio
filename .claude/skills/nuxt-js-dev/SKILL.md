---
name: nuxt-portfolio
description: >
  Scaffolds and builds a professional Nuxt.js developer portfolio deployable to Netlify's free tier.
  Use this skill whenever the user wants to create a personal portfolio site, showcase their projects,
  set up a developer profile page, or deploy a static/SSG site to Netlify — even if they don't
  explicitly say "Nuxt" or "portfolio". Covers full setup from `nuxt init` to live Netlify URL,
  including content, SEO, theming, and CI/CD via Git.
---

# Nuxt.js Portfolio — Netlify Deployment Skill

A skill for scaffolding a professional developer portfolio using Nuxt.js (v3), styled with
Tailwind CSS, statically generated (SSG), and deployed for free on Netlify.

---

## Stack Decisions (defaults — ask if the user wants to change any)

| Concern       | Choice                          | Why                                          |
|---------------|---------------------------------|----------------------------------------------|
| Framework     | Nuxt 3 (`nuxi init`)            | SSG support, file-based routing, Vue 3       |
| Styling       | Tailwind CSS + `@nuxtjs/color-mode` | Fast, utility-first, dark mode built-in  |
| Content       | Nuxt Content v2 (Markdown)      | Write projects/blog posts as `.md` files     |
| Icons         | `nuxt-icon` or `lucide-vue-next`| Lightweight, tree-shakeable                  |
| Hosting       | Netlify (free tier, SSG)        | Free custom domain, CI/CD from Git, no cold starts |
| Deploy target | `nitro` preset: `static`        | Fully pre-rendered, zero server cost         |

---

## Capture Intent

Before generating anything, confirm:

1. **What sections does the user want?** Common ones: Hero, About, Skills/Stack, Projects, Experience, Contact. Ask which to include.
2. **Do they have content ready?** (bio, project list, links) — or should placeholder content be used?
3. **Do they have a GitHub repo / Netlify account set up?** If not, walk them through it.
4. **Any design preferences?** (dark/light default, accent color, minimal vs. rich)

Defaults if unspecified: Hero + About + Projects + Skills + Contact, dark mode default, slate/indigo palette, placeholder content.

---

## Project Structure

```
my-portfolio/
├── nuxt.config.ts
├── tailwind.config.ts
├── netlify.toml
├── content/
│   └── projects/
│       └── project-1.md
├── pages/
│   ├── index.vue          ← single-page with anchor sections OR
│   └── projects/
│       └── [slug].vue     ← individual project pages
├── components/
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   ├── sections/
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── SkillsSection.vue
│   │   └── ContactSection.vue
│   └── ui/
│       ├── ProjectCard.vue
│       └── SkillBadge.vue
└── public/
    └── og-image.png
```

---

## Step-by-Step Build Process

### 1. Scaffold

```bash
npx nuxi@latest init my-portfolio
cd my-portfolio
npm install
```

Install dependencies:

```bash
npm install -D tailwindcss @nuxtjs/tailwindcss @nuxtjs/color-mode @nuxt/content nuxt-icon
```

### 2. `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    'nuxt-icon',
  ],
  colorMode: { classSuffix: '' },
  content: { highlight: { theme: 'github-dark' } },
  nitro: { preset: 'static' },
  app: {
    head: {
      title: 'Your Name — Developer',
      meta: [{ name: 'description', content: 'Portfolio of ...' }],
    },
  },
})
```

### 3. `netlify.toml`

```toml
[build]
  command = "npm run generate"
  publish = ".output/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 4. Tailwind + Dark Mode

`tailwind.config.ts`:
```ts
export default {
  darkMode: 'class',
  content: ['./components/**/*.vue', './pages/**/*.vue', './app.vue'],
  theme: { extend: { fontFamily: { sans: ['Inter', 'sans-serif'] } } },
}
```

### 5. Content Model

Each project is a Markdown file in `content/projects/`:

```md
---
title: My Project
description: Short summary
tech: [Vue, Node.js, MySQL]
url: https://example.com
github: https://github.com/...
featured: true
---

Longer description here...
```

Fetch with:
```ts
const { data: projects } = await useAsyncData('projects',
  () => queryContent('projects').where({ featured: true }).find()
)
```

---

## Sections Guide

### Hero
- Name, title/tagline, CTA buttons (View Work, Contact Me)
- Subtle animated gradient or particle background (optional, keep it tasteful)
- Social links: GitHub, LinkedIn, email

### About
- Short bio (2–3 sentences)
- Profile photo (place in `public/`)
- Key facts: location, years of experience, current role

### Projects
- Card grid from `content/projects/`
- Each card: title, description, tech stack badges, links
- "View all" if more than 4–6 projects

### Skills / Stack
- Group by category: Frontend, Backend, DevOps, Tools
- Use `SkillBadge` component with icon + label

### Contact
- Email link or simple `mailto:` CTA
- **Avoid forms with server logic** — use Netlify Forms (add `netlify` attribute to `<form>`) or link to Calendly/email instead. This keeps the deploy fully static.

---

## Netlify Deployment

### Option A — Via Netlify UI (recommended for first deploy)
1. Push repo to GitHub
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import from Git"
3. Build command: `npm run generate`
4. Publish directory: `.output/public`
5. Deploy — Netlify auto-deploys on every push to `main`

### Option B — Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init
npm run generate
netlify deploy --prod --dir=.output/public
```

### Free Tier Limits (as of 2024)
- 100 GB bandwidth/month
- 300 build minutes/month
- 1 concurrent build
- Free SSL + custom domain

These are generous for a portfolio — you won't hit them.

---

## SEO & Meta

Use `useHead()` or `useSeoMeta()` per page:

```ts
useSeoMeta({
  title: 'Arcy — Full-Stack Developer',
  description: 'Portfolio of a WordPress/WooCommerce and Vue.js developer.',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
})
```

Generate an OG image (1200×630px) and place it in `public/`.

---

## Performance Checklist

- [ ] `nuxt generate` produces fully static HTML — no JS required for initial render
- [ ] Images: use `<NuxtImg>` with `loading="lazy"` (install `@nuxt/image`)
- [ ] Fonts: self-host via `fontsource` or use `@nuxtjs/google-fonts`
- [ ] Keep bundle lean — avoid heavy animation libraries unless genuinely needed
- [ ] Run `npx nuxt analyze` to spot large chunks before deploying

---

## Common Pitfalls

| Problem | Fix |
|---|---|
| Blank page on Netlify | Check publish dir is `.output/public`, not `dist` |
| 404 on page refresh | Add the `[[redirects]]` block in `netlify.toml` |
| Dark mode flicker | Ensure `colorMode.classSuffix: ''` and Tailwind `darkMode: 'class'` |
| Content not updating | Run `npm run generate` again; content is baked at build time |
| Form submissions not working | Add `netlify` attribute to `<form>` and enable in Netlify UI |

---

## Iteration Prompts (test these after scaffolding)

1. "Add a featured projects section with cards linking to individual project pages"
2. "Set up dark/light mode toggle in the header"
3. "Add a contact form using Netlify Forms"
4. "Optimize the portfolio for Lighthouse score above 95"
5. "Add an animated hero section with a typing effect for the tagline"