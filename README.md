# Jeremiah Oluwakoya — Portfolio

Personal portfolio website for **Jeremiah Oluwakoya** (Jedi of JavaScript / jriffs).

## Features
- Dark & Light theme toggle (persists preference)
- Fully responsive
- Smooth scrolling navigation
- Featured projects with focus on VoisaScript
- Ready for GitHub Pages

## Structure
```
portfolio/
├── index.html
├── css/style.css
├── js/main.js
├── assets/
│   ├── images/          # add your avatar here
│   └── resume.pdf       # add your resume here
└── README.md
```

## Setup & Deploy (GitHub Pages)

1. Create a new repository named `jriffs.github.io` (or any name and enable Pages from the `main` branch / `/docs` or root).
2. Upload the contents of this `portfolio` folder to the root of the repo.
3. Add your professional avatar:
   - Place the image in `assets/images/`
   - Replace the avatar placeholder in `index.html` with:
     ```html
     <img src="assets/images/your-avatar.jpg" alt="Jeremiah Oluwakoya" />
     ```
4. Add your resume as `assets/resume.pdf`
5. Go to **Settings → Pages** and set the source to the branch containing the files (usually `main` / root).
6. Your site will be live at `https://jriffs.github.io` (or the custom URL if configured).

## Local Preview
Just open `index.html` in a browser, or use a simple local server:

```bash
npx serve .
```

---

Built with pure HTML, CSS & vanilla JavaScript.
