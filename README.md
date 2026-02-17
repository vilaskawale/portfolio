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
4. Ensure your default branch is `main` (this workflow deploys on pushes to `main`).

### Trigger deployment

- Push to `main`, or
- Run the workflow manually from **Actions → Deploy static portfolio to GitHub Pages**.

After workflow success, your live URL will be:

- `https://<your-github-username>.github.io/<repository-name>/`

If you use a user/organization site repository named `<your-github-username>.github.io`, then URL will be:

- `https://<your-github-username>.github.io/`


## GitHub Pages not deploying? (Common fixes)

If deployment is not happening, check these in order:

1. **Branch trigger mismatch**
   - This workflow deploys on push to `main`.
   - If you push to any other branch, deployment will not auto-run.

2. **Pages source must be GitHub Actions**
   - Go to **Settings → Pages → Build and deployment**.
   - Set **Source** to **GitHub Actions**.

3. **Actions permissions**
   - Go to **Settings → Actions → General → Workflow permissions**.
   - Select **Read and write permissions**.
   - Save.

4. **Actions policy**
   - In **Settings → Actions → General**, ensure Actions are allowed (for example, allow all actions or at least GitHub-owned actions).

5. **Repository visibility and Pages availability**
   - For free plans, user/org Pages from public repos always works.
   - Private repo Pages may require a plan that supports private Pages.

6. **First run approval / environment checks**
   - Open **Actions** tab and check the workflow run logs.
   - If the `github-pages` environment requires approval, approve it.

7. **Workflow file path**
   - Ensure the file exists exactly at `.github/workflows/deploy-pages.yml` on the branch being pushed.

8. **Expected URL**
   - Project repo URL: `https://<username>.github.io/<repo>/`
   - User site repo (`<username>.github.io`) URL: `https://<username>.github.io/`
