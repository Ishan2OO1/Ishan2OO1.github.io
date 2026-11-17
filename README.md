# Ishan Chaudhary — Portfolio

Personal portfolio site. Static, dependency-free, deployed to GitHub Pages.

**Live:** https://ishan2oo1.github.io

## Structure

```
index.html      home page: hero, highlights, experience, projects, research, skills, about, contact
resume.html     one-page résumé; prints to a single US Letter page (Print / Save as PDF)
education.html  degrees, coursework, certifications
styles.css      all styling, shared by both pages
script.js       nav toggle, scroll reveal
profile.jpg     portrait, 800x800 (profile-sm.jpg is the 400x400 srcset variant)
preview.png     1200x630 social sharing card (og:image)
sitemap.xml     sitemap for the three pages
robots.txt      crawler directives
.nojekyll       tells Pages to serve files as-is
```

`source/` is an earlier single-file draft kept locally for reference; it is
gitignored and is **not** part of the live site.

## Local preview

```bash
python -m http.server 8000
# then open http://localhost:8000
```

Any static server works — there is no build step.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which publishes the
repository root to GitHub Pages. No manual steps after the first setup.

## Editing content

- **Hero / highlights** — the `.hero-v2` section and the `.proof` strip in `index.html`.
- **Experience** — the `<article class="research-card exp-card">` blocks in `index.html`.
  Keep `resume.html` in sync when a role changes.
- **Projects** — the six `<article class="project-card">` blocks in `index.html`
  (one `project-featured`, two `project-half`, three `project-third`).
- **Résumé** — `resume.html` is self-contained (its own inline CSS). After editing,
  check the print preview still fits one page.
- **Research** — the `<article class="research-card">` blocks.
- **Contact / About** — the `#about` and `#contact` sections.
- **Education page** — `education.html`: degrees in `.edu-card` blocks,
  certifications in `.cert-card` blocks.
- **Portrait** — replace `profile.jpg` (800x800) and `profile-sm.jpg` (400x400).
  Both are square; the CSS crops to fit, so any square image works.
- **Colors** — the CSS custom properties in `:root` at the top of `styles.css`.

## Custom domain

1. Add a `CNAME` file at the repo root containing the bare domain, e.g. `ishanchaudhary.com`.
2. At your registrar, point an `ALIAS`/`ANAME` record for the apex at `ishan2oo1.github.io`,
   or four `A` records at `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
3. In **Settings → Pages**, set the custom domain and enable *Enforce HTTPS*.
4. Update the `og:url`, `canonical`, `robots.txt` and `sitemap.xml` URLs to the new domain.
