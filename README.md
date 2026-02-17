# Portfolio Website (HTML + SCSS + JavaScript + Bootstrap)

This is a static, mobile-first portfolio website for an Angular/Frontend/UI Developer.

## Run locally

```bash
python3 -m http.server 4173
```

Then open:

- http://localhost:4173

## Test checklist

### 1) JavaScript syntax check

```bash
node --check assets/js/main.js
```

Expected result: no output and exit code `0`.

### 2) Verify CSS file is present and linked

```bash
test -f assets/css/style.css && echo "CSS exists"
```

Expected result: prints `CSS exists`.

### 3) Smoke test site availability

Run server in one terminal, then in another:

```bash
curl -I http://localhost:4173
```

Expected result: `HTTP/1.0 200 OK` (or `HTTP/1.1 200 OK`).

### 4) Manual UI/UX validation

Check the following in browser (desktop + mobile device toolbar):

- Navbar opens/collapses on small screens.
- Clicking nav links scrolls to corresponding sections.
- Hero, skills cards, timeline, projects, and contact sections are readable at mobile widths (320px+).
- Buttons and contact links (`mailto`, `tel`, LinkedIn) are clickable.
- Footer year shows current year dynamically.

### 5) Responsive breakpoints

Recommended widths to test:

- `320px` (small mobile)
- `375px` (standard mobile)
- `768px` (tablet)
- `1024px` (small laptop)
- `1440px` (desktop)

### 6) Optional production-style check

If you have Docker, you can run an Nginx container to simulate static hosting:

```bash
docker run --rm -p 8080:80 -v "$PWD":/usr/share/nginx/html:ro nginx:alpine
```

Then open:

- http://localhost:8080

## Notes

- `assets/scss/style.scss` is the SCSS source.
- `assets/css/style.css` is the compiled stylesheet currently referenced by `index.html`.

## Deploy to GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

### One-time setup in GitHub

1. Push this repository to GitHub.
2. In repository settings, open **Pages**.
3. Under **Build and deployment**, choose **Source: GitHub Actions**.
4. Ensure your default branch is `main` (or update the workflow branch trigger).

### Trigger deployment

- Push to `main`, or
- Run the workflow manually from **Actions → Deploy static portfolio to GitHub Pages**.

After workflow success, your live URL will be:

- `https://<your-github-username>.github.io/<repository-name>/`

If you use a user/organization site repository named `<your-github-username>.github.io`, then URL will be:

- `https://<your-github-username>.github.io/`
