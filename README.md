# El Mehdi Chouham Portfolio

Static one-page portfolio built with Astro and deployed with GitHub Pages.

## Local development

```bash
pnpm install
pnpm dev
```

## Build and preview

```bash
pnpm build
pnpm preview
```

## Edit content

Update the data model in:

- `src/data/profile.ts`

This file drives all homepage sections.

## CV file

The downloadable CV is served from:

- `public/cv/El-Mehdi-CHOUHAM-9-enpfe.pdf`

## GitHub Pages deployment

Deployment is automated via:

- `.github/workflows/deploy.yml`

### First-time setup in GitHub

1. Push this project to a GitHub repository.
2. In repository settings, open **Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` to trigger deployment.

The workflow sets:

- `SITE=https://<owner>.github.io`
- `BASE=/<repo>/`

so project pages are served from the correct subpath automatically.
