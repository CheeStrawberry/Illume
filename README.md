# Illume · clickable prototype

Find what lights you up. A student growth platform for Grades 10–12: Explore, Reflect, Grow.

Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Structure

```
index.html        page shell, loads the files below in order
css/style.css     design tokens (dark and light), components, animations
js/content.js     fields, exercises and student stories
js/core.js        icons, logo, buttons, chips and other shared pieces
js/data.js        field metadata, colours, progress helpers
js/screens1.js    onboarding, home, explore, field page, exercise flow
js/screens2.js    growth, journal, stories, profile and settings
js/app.js         router, state (localStorage), theme, transitions
```

## Run locally

Open `index.html` in a browser, or run a static server:

```
npx serve .
```

## Deploy on Vercel

1. Push this folder to a GitHub repo.
2. In Vercel choose Add New, then Project, and import the repo.
3. Framework Preset: Other. Leave Build Command and Output Directory empty.
4. Deploy.

State is stored in the visitor's own browser (localStorage key `illume.proto.v3`).
