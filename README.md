# Ishan Chaudhary — Portfolio

Personal portfolio site. Static, dependency-free, deployed to GitHub Pages.

**Live:** https://ishan2oo1.github.io

## Structure

```
index.html      markup + content (all copy lives here)
styles.css      all styling, including responsive + print + reduced-motion
script.js       nav toggle, scroll reveal, project preview panels
preview.png     1200x630 social sharing card (og:image)
sitemap.xml     single-page sitemap
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

- **Projects** — the four `<article class="project-card">` blocks in `index.html`.
  Each has a title, description, `.tags`, a repository link, and an optional
  `.project-demo` panel whose text comes from `demoOutputs` in `script.js`.
- **Research** — the `<article class="research-card">` blocks.
- **Contact / About** — the `#about` and `#contact` sections.
- **Colors** — the CSS custom properties in `:root` at the top of `styles.css`.

## Custom domain

1. Add a `CNAME` file at the repo root containing the bare domain, e.g. `ishanchaudhary.com`.
2. At your registrar, point an `ALIAS`/`ANAME` record for the apex at `ishan2oo1.github.io`,
   or four `A` records at `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
3. In **Settings → Pages**, set the custom domain and enable *Enforce HTTPS*.
4. Update the `og:url`, `canonical`, `robots.txt` and `sitemap.xml` URLs to the new domain.
