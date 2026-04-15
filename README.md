# Samuel Andryasian Portfolio

This is a Next.js portfolio site for Samuel Andryasian with:

- Home, Projects, Resume, and Contact pages
- Shared editable portfolio data in `data/site.ts`
- Downloadable resume link at `public/resume.pdf`
- Open Graph metadata and generated social preview image

## Deploy to GitHub Pages

The repository is configured for GitHub Pages deployment through `.github/workflows/deploy.yml`.
For the default repository URL, the workflow builds with `NEXT_PUBLIC_BASE_PATH=/PortfolioAndryas`
so the site is served correctly at `https://samuelandryas.github.io/PortfolioAndryas/`.

If you later attach a custom domain, set `NEXT_PUBLIC_BASE_PATH` to an empty value in the workflow
and add a `CNAME` file with your real domain.

## Run locally

1. Install Node.js.
2. Install dependencies with `npm install`.
3. Start the dev server with `npm run dev`.

## Customize

- Update contact links in `data/site.ts`
- Replace `public/resume.pdf` with your real resume PDF
- Edit projects, skills, and page copy in `data/site.ts`
