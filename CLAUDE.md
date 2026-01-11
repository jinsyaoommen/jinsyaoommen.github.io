# Project Context for Claude

## Overview
Personal website for Jinsy Oommen built with Astro. Deployed to GitHub Pages at **thegoodoommen.com**.

## Tech Stack
- **Framework**: Astro 5.x with React integration
- **Styling**: Scoped CSS in Astro components
- **Search**: Pagefind (static search, runs after build)
- **Hosting**: GitHub Pages with custom domain
- **DNS**: Cloudflare

## Key Commands
```bash
npm run dev      # Start dev server
npm run build    # Build site + generate Pagefind index
npm run preview  # Preview production build
```

## Deployment
Push to `main` branch triggers GitHub Actions deployment. Changes are live within a few minutes.

```bash
git add -A && git commit -m "message" && git push
```

## Project Structure
```
src/
├── layouts/
│   └── Layout.astro          # Main layout with nav
├── components/
│   └── Navigation.tsx        # React nav component
├── pages/
│   ├── index.astro           # Homepage with hero + recent posts
│   ├── about.astro           # About page
│   ├── reflections/
│   │   ├── index.astro       # Reflections listing (with search + year nav)
│   │   ├── [...slug].astro   # Individual post pages
│   │   └── tags/
│   │       └── [tag].astro   # Tag filter pages
│   └── favorites/
│       ├── index.astro       # Favorites landing page
│       ├── quotes.astro      # Under construction
│       ├── books.astro       # Under construction
│       ├── products.astro    # Under construction
│       └── places.astro      # Under construction (has card grid + modal)
└── content/
    └── blog/                 # Markdown blog posts
public/
├── CNAME                     # Custom domain config
├── profile.jpg               # Profile photo
└── pagefind/                 # Generated search index (after build)
```

## Naming Conventions
- Blog section is called **"Reflections"** (not "Blog")
- Navigation shows: Home, Reflections, Favorites, About

## Design Decisions
- Minimal, clean aesthetic with muted colors
- Primary accent color: `#7c9eb2` (blue-gray)
- Text colors: `#2d2d2d` (headings), `#666` (body), `#888` (muted)
- Background: `#fafafa` (hero), `#f9f9f9` (cards)
- Circular profile photo on homepage with gradient backdrop
- No emojis unless requested

## Features Implemented
- Blog with year grouping and sticky sidebar navigation
- Clickable tags that filter posts
- Pagefind search on Reflections page
- Places page with card grid and modal for details
- Responsive design (mobile-friendly)

## Favorites Pages Status
All marked "Under construction" with yellow banner. Places has placeholder cards for:
- Machu Picchu, Kerala, Bangalore, Singapore (Changi Airport)
- Yellowstone, Crater Lake, Redwood, Mt Hood

## Content
Blog posts are in `src/content/blog/` as Markdown with frontmatter:
```yaml
---
title: "Post Title"
description: "Brief description"
pubDate: 2025-02-15
tags: ["tag1", "tag2"]
draft: false
---
```

## Common Tasks
- **Add blog post**: Create `.md` file in `src/content/blog/`
- **Deploy changes**: `git add -A && git commit -m "message" && git push`
- **Update favorites**: Edit respective file in `src/pages/favorites/`
