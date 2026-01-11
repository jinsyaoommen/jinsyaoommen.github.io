# How to Maintain This Site

A guide for making changes without AI assistance.

## Quick Reference

| Task | Difficulty | Where |
|------|------------|-------|
| Add a blog post | Easy | `src/content/blog/` |
| Edit a blog post | Easy | `src/content/blog/` |
| Change page text | Easy | `src/pages/` |
| Update styles | Medium | `<style>` section in `.astro` files |
| Add a new page | Medium | `src/pages/` |
| Update navigation | Medium | `src/components/Navigation.tsx` |

---

## Adding a Blog Post

1. Create a new file in `src/content/blog/` with a descriptive name:
   ```
   src/content/blog/my-new-post.md
   ```

2. Add this frontmatter at the top:
   ```yaml
   ---
   title: "Your Post Title"
   description: "A brief description for SEO and previews"
   pubDate: 2025-03-15
   tags: ["tag1", "tag2"]
   ---
   ```

3. Write your content in Markdown below the frontmatter:
   ```markdown
   This is my first paragraph.

   ## A Heading

   More content here.

   - Bullet point
   - Another point

   [A link](https://example.com)
   ```

4. Deploy (see Deploying Changes below)

---

## Editing a Blog Post

1. Find the file in `src/content/blog/`
2. Edit the Markdown content
3. Deploy

---

## Changing Page Text

Pages are in `src/pages/`. Open the file and look for the text you want to change.

**Example: Changing the homepage hero text**

1. Open `src/pages/index.astro`
2. Find the text between `<h1>` tags or in `<p>` tags
3. Change it
4. Deploy

---

## Changing Styles

Styles are in `<style>` sections at the bottom of `.astro` files.

**Example: Changing a color**

1. Open the relevant `.astro` file
2. Scroll to the `<style>` section
3. Find the color (e.g., `#7c9eb2` is the blue accent color)
4. Change it
5. Deploy

**Common colors in this site:**
- `#7c9eb2` - Blue accent (links, highlights)
- `#2d2d2d` - Dark text (headings)
- `#666` - Body text
- `#888` - Muted text
- `#f9f9f9` - Light gray background (cards)
- `#fafafa` - Lighter gray background (hero)

---

## Adding a New Page

1. Create a new file in `src/pages/`:
   ```
   src/pages/my-page.astro
   ```

2. Use this template:
   ```astro
   ---
   import Layout from '../layouts/Layout.astro';
   ---

   <Layout title="Page Title | Jinsy Oommen">
     <section style="padding: 4rem 0; min-height: calc(100vh - 64px);">
       <div style="max-width: 700px; margin: 0 auto; padding: 0 2rem;">
         <h1>Page Title</h1>
         <p>Your content here.</p>
       </div>
     </section>
   </Layout>
   ```

3. The page will be available at `thegoodoommen.com/my-page`

---

## Updating Navigation

Edit `src/components/Navigation.tsx`

Find the section with the nav links (around line 35-44) and add/edit links:

```tsx
<a href="/my-page" style={{ textDecoration: 'none', color: 'white', fontSize: '0.875rem' }}>
  My Page
</a>
```

---

## Deploying Changes

**Option 1: Using Terminal**
```bash
git add -A
git commit -m "Describe your change"
git push
```

**Option 2: Using GitHub Desktop**
1. Open GitHub Desktop
2. See your changes in the left panel
3. Write a commit message
4. Click "Commit to main"
5. Click "Push origin"

**Option 3: Using VS Code**
1. Click the Source Control icon (branch icon) in the sidebar
2. Stage your changes (+ button)
3. Write a commit message
4. Click the checkmark to commit
5. Click "Sync Changes" to push

Changes go live in 2-3 minutes after pushing.

---

## Running Locally (Optional)

If you want to preview changes before deploying:

1. Open Terminal in the project folder
2. Run:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:4321` in your browser
4. Changes update automatically as you edit

Stop the server with `Ctrl+C`.

---

## File Structure Cheat Sheet

```
src/
├── content/blog/          ← Blog posts (Markdown)
├── pages/
│   ├── index.astro        ← Homepage
│   ├── about.astro        ← About page
│   ├── reflections/       ← Blog listing & posts
│   ├── favorites/         ← Favorites pages
│   └── writing/           ← Secret book project
├── layouts/
│   └── Layout.astro       ← Main template (nav, SEO tags)
└── components/
    └── Navigation.tsx     ← Top navigation bar
```

---

## Common Issues

**"I changed something but don't see it on the site"**
- Make sure you pushed to GitHub (not just committed)
- Wait 2-3 minutes for GitHub Actions to deploy
- Hard refresh your browser (Cmd+Shift+R on Mac)

**"The site won't build"**
- Check for typos in frontmatter (YAML is picky about formatting)
- Make sure dates are in `YYYY-MM-DD` format
- Check that tags are in array format: `["tag1", "tag2"]`

**"I want to undo a change"**
- In GitHub Desktop: right-click the commit → "Revert Changes in Commit"
- In Terminal: `git revert HEAD` then `git push`

---

## Getting Help

- **Astro docs**: https://docs.astro.build
- **Markdown guide**: https://www.markdownguide.org
- **GitHub Pages docs**: https://docs.github.com/en/pages

Or just ask Claude to help you with the specific change you want to make.
