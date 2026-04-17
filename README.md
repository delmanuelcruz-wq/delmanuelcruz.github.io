# Del Manuel Cruz — Portfolio

Multi-page interactive portfolio. Static HTML, CSS, and vanilla JS. No build step, no framework, no server required. Charts run via Chart.js from CDN.

## What's in this folder

```
portfolio/
├── index.html          ← Home (positioning, work, demos, about, skills, contact)
├── fustech.html        ← Case study: B2B SaaS build
├── neo-lighting.html   ← Case study: revenue protection + 833-firm DB
├── pharmsource.html    ← Case study: account ops in NetSuite
├── coop.html           ← Case study: data analytics fellowship
├── dashboards.html     ← Interactive NYC specifier dashboard (filters, charts, sortable table)
├── sql-projects.html   ← Three SQL case studies with queries + representative results
├── styles.css          ← Shared design system
├── interactions.js     ← Scroll reveals, animated counters, nav state, etc.
└── README.md           ← This file
```

## View it locally

Open `index.html` in any modern browser. That's it.

Optional — run a tiny local server so fonts and scripts load cleanly:

```bash
# If you have Python installed (macOS usually does)
cd portfolio
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Host it on GitHub Pages — step by step

The fastest way to put this online with a URL you can paste into your resume header and LinkedIn featured section.

### 1. Create a free GitHub account

If you don't already have one: [github.com/signup](https://github.com/signup). Use a username you'd be comfortable seeing on your resume — `delmanuelcruz` is probably the right move.

### 2. Create a new repository

1. Top-right `+` icon → **New repository**
2. Repository name: **`delmanuelcruz.github.io`** (this exact name is what makes the next step work — GitHub treats any repo named `<username>.github.io` as an automatically-hosted site).
3. Public.
4. Don't add a README (you already have one).
5. **Create repository.**

### 3. Upload the portfolio files

Easiest path (no git install needed):

1. On your new repo's main page, click **"uploading an existing file"** (it's in the middle of the empty-repo screen).
2. Drag every file inside the `portfolio/` folder into the upload zone (the *contents* of the folder, not the folder itself).
3. Scroll down. Commit message: `Initial portfolio deploy`.
4. Click **Commit changes**.

### 4. Turn on GitHub Pages

1. In your repo, go to **Settings** (top menu).
2. Left sidebar → **Pages**.
3. Under **Source**, pick **Deploy from a branch**.
4. **Branch**: `main`. **Folder**: `/ (root)`. Click **Save**.
5. GitHub takes 30–90 seconds to build.

### 5. Visit your site

Your portfolio is live at:

```
https://delmanuelcruz.github.io/
```

That URL goes straight on your resume, LinkedIn, and every cover letter.

---

## Using a custom domain (recommended within 30 days)

A custom domain signals seriousness to hiring managers in about 2 seconds. Worth the ~$12/year.

### Step 1. Buy the domain
Namecheap, Cloudflare, or Google/Squarespace Domains. Recommended pattern:

- `delmanuelcruz.com` ← first choice
- `delcruz.dev` ← backup (reads as technical)
- `delmanuelcruz.co` ← backup

Avoid `.io` unless you're targeting startup/tech roles specifically.

### Step 2. Point DNS at GitHub Pages
At your domain registrar, add these DNS records on the root domain (`@`):

```
Type   Name   Value
A      @      185.199.108.153
A      @      185.199.109.153
A      @      185.199.110.153
A      @      185.199.111.153
CNAME  www    delmanuelcruz.github.io
```

### Step 3. Configure GitHub
1. In your repo → **Settings** → **Pages**.
2. Under **Custom domain**, enter `delmanuelcruz.com`.
3. Check **Enforce HTTPS** once it's available (usually 10–60 minutes later).

Your portfolio now lives at `https://delmanuelcruz.com`.

---

## Updating content later

Every file in this folder is a plain text file you can edit in any editor (VS Code, Notepad, GitHub's web UI, anything).

- Fix a typo or add a new role? Edit the HTML and push.
- New case study? Duplicate one of the existing `*.html` files, change the copy, and add it to the `index.html` work list + nav.
- New dashboard? Duplicate `dashboards.html` and update the data object at the top of the inline `<script>` block.

Commit and push. GitHub Pages redeploys in about a minute.

---

## What to do the day you publish

1. Add the URL to the header of your resume, right below your name — replace the plain-text location line with it.
2. Add it to the top of your LinkedIn "About" section and pin it to the "Featured" section.
3. Send it in the first outreach message to any recruiter or hiring manager. It makes "tell me about your experience" a 5-second demo instead of a 5-minute pitch.
4. Add it to your email signature.

---

## Stack

- **HTML / CSS / vanilla JS** — no framework, no build step.
- **Chart.js 4.x** — loaded from jsDelivr CDN for the interactive dashboard.
- **Google Fonts** — Fraunces (display serif), Inter (body), JetBrains Mono (data).
- **No tracking** — no analytics, no cookies, no third-party scripts beyond Chart.js and Google Fonts.

## License

© 2026 Del Manuel Cruz. All rights reserved.
