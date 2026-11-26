# Ibrahim El Shorbagy: Personal Website

A simple personal website made of plain HTML, CSS and JavaScript. It has no build step, needs no installs and no server. You can open it by double-clicking a file, and it deploys to Netlify as-is.

```
your-project-folder/
├── index.html      ← all the words on the site live here
├── styles.css      ← colours, fonts, layout
├── script.js       ← small extras (mobile menu, fade-in, nav highlight)
├── README.md       ← this guide
└── images/
    ├── portrait.jpg     ← your photo
    ├── karpos.svg       ← project illustrations
    ├── bain.svg
    ├── medical.svg
    ├── og-image.jpg     ← preview image for LinkedIn/WhatsApp links
    └── favicon.svg      ← the small icon in the browser tab
```

---

## 1. Open the site on your computer

1. Find the project folder in Finder (Mac) or File Explorer (Windows).
2. Double-click **`index.html`**. It opens in your web browser.
3. After you edit a file and save it, go back to the browser and refresh (**Cmd+R** on Mac, **Ctrl+R** on Windows) to see the change.

It works offline because it only uses fonts that are already on your computer.

> The site uses a black and gold theme for every visitor, whatever their system setting.

---

## 2. Put the project on GitHub

You only do this once. These steps use GitHub's website, so you don't need to install anything.

### Option A: Upload through the browser (easiest)

1. Sign in at <https://github.com>.
2. Click the **+** in the top-right corner and choose **New repository**.
3. Name it something like `personal-website`. Leave **Public** selected. **Don't** tick "Add a README" (you already have one).
4. Click **Create repository**.
5. On the next page, click the link **"uploading an existing file"**.
6. Drag in **everything inside** your project folder: `index.html`, `styles.css`, `script.js`, `README.md` **and the whole `images` folder**.
   Make sure `index.html` ends up at the top level of the repository, not inside a subfolder.
7. Scroll down and click **Commit changes**.

To update the site later, open the repository, click **Add file → Upload files**, drag in the changed files and commit. If a file has the same name, it gets replaced.

### Option B: Use the command line (if you have Git installed)

Open Terminal (Mac) or Git Bash (Windows) **inside the project folder**, then run:

```bash
git init
git add .
git commit -m "First version of my website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/Personal-portfolio.git
git push -u origin main
```

(Create the empty repository on GitHub first, as in steps 1–4 above, and replace `YOUR-USERNAME` with your GitHub username.)

To push changes later:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

---

## 3. Deploy on Netlify (with automatic updates)

1. Go to <https://app.netlify.com> and sign up or log in. **Continue with GitHub** is easiest.
2. Click **Add new project**, then **Import an existing project**.
3. Choose **GitHub**, and approve the permission request if one appears.
4. Pick your `personal-website` repository from the list.
5. On the settings screen:
   - **Branch to deploy:** `main`
   - **Build command:** leave it **empty**
   - **Publish directory:** leave it **empty** (or type `.`). This means "the project root".
6. Click **Deploy**. After a few seconds you get a live address like `https://random-name-123.netlify.app`.
7. Optional: under **Domain management** (or **Site configuration → Change site name**), rename it to something like `ibrahim-elshorbagy.netlify.app`, or connect your own domain.

**From now on, every time you push to GitHub (Option A or B), Netlify redeploys the site automatically**, usually within a minute.

### After your first deploy: fix the social preview

Link previews on LinkedIn, WhatsApp and Slack need a **full** web address for the image. Open `index.html`, find the lines near the top marked `EDIT ME`, and replace every `https://YOUR-SITE.netlify.app` with your real Netlify address. Then push again.

---

## 4. Edit your text and swap in your images

### Text

Everything is in **`index.html`**. Open it in any text editor. [VS Code](https://code.visualstudio.com) is free and makes this easier, but TextEdit or Notepad also work.

Search the file (**Cmd+F** / **Ctrl+F**) for:

| Search for | What it marks |
|---|---|
| `EDIT ME` | Text you should rewrite: title, tagline, bio, skills, experience, email, links |
| `SWAP IMAGE` | Places where an image is used |
| `[` | Placeholder text in square brackets, e.g. `[Project name]`, `[20XX]` |

The page is split into clearly labelled blocks: `HERO`, `ABOUT`, `PROJECTS`, `EXPERIENCE`, `CONTACT`.

- **Add a project:** copy one whole `<li class="reveal"> … </li>` block inside the Projects section, paste it below, and change the text, image and link.
- **Add a job or degree:** do the same with a `<li class="timeline-item reveal"> … </li>` block.
- **Project links:** replace `href="#"` with the real URL, e.g. `href="https://example.com"`.
- **Email:** change it in **both** places on the line: `href="mailto:you@example.com"` and the visible text.

### Images

1. Put your image files into the `images` folder. Recommended sizes:
   - **Portrait:** square, about 800 × 800 px
   - **Project screenshots:** 16:10, about 1200 × 750 px
   - **Social preview (`og-image.jpg`):** exactly 1200 × 630 px
2. In `index.html`, change the filename to match your file. For example:
   `src="images/portrait.svg"` → `src="images/portrait.jpg"`
   Then delete the old placeholder `.svg` from the `images` folder. (`og-image.jpg` is already a `.jpg`, so just overwrite it with a file of the same name.)
3. Update the `alt="..."` text next to each image so it describes the picture. Screen readers read this aloud.
4. Keep images small (ideally under 300 KB each) so the site loads fast. <https://squoosh.app> compresses them for free.

> Filenames are **case-sensitive** on Netlify: `Portrait.JPG` and `portrait.jpg` are different files. Stick to lowercase with no spaces.

### Colours and fonts

Open **`styles.css`**. All the colours are at the top under `:root`. Change `--accent` (and `--gold-gradient`) to restyle buttons, links and highlights in one place.

The site uses fonts already on every computer, so it works offline. If you'd like a custom font, download its `.woff2` files (Google Fonts lets you download them), put them in a `fonts` folder, and ask me to wire them up.
