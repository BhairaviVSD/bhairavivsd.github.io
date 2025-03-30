```markdown
# 💼 Bhairavi Sawantdesai – Developer Portfolio

This is my personal portfolio website built using **React** and **Vite**. It showcases my work in software engineering, machine learning, embedded systems, and cloud-native development.


## 🚀 Tech Stack

- **Frontend**: React, Vite
- **Styling**: CSS Modules, Responsive Design
- **Deployment**: GitHub Pages
- **Analytics**: Google Analytics v4
- **Icons**: Font Awesome

## 📁 Folder Structure

```
src/
├── assets/              # Static images and assets
├── components/          # Reusable components (Hero, About, Projects, etc.)
│   ├── Hero.jsx / Hero.module.css
│   ├── About.jsx / About.module.css
│   ├── Projects.jsx / Projects.module.css
│   ├── Experience.jsx / Experience.module.css
│   ├── Contact.jsx / Contact.module.css
│   ├── Navbar.jsx / Navbar.module.css
│   └── Footer.jsx / Footer.module.css
├── App.jsx              # Root component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## 🛠 Features

- ⚡ Built with React + Vite for fast dev and build times
- 🎨 Responsive and mobile-first UI
- 🌐 Custom domain support
- 🧾 Downloadable resume
- 📬 Contact form with mailto integration
- 🎯 Smooth scrolling & animations
- 📈 Visitor analytics using Google Analytics
- 🧮 GitHub visitor counter (optional fallback using CountAPI)

## 🔧 Scripts

```bash
npm install     # Install dependencies
npm run dev     # Start development server
npm run build   # Create production build
npm run preview # Preview production build
```

## 📦 Deployment

Deployed via **GitHub Pages** using the `vite.config.js` base path and GitHub Actions.

Make sure to update `vite.config.js`:

```js
export default defineConfig({
  base: '/<your-repo-name>/', // example: '/bhairavivsd.github.io/'
  plugins: [react()],
});
```

Then run:

```bash
npm run build
npx gh-pages -d dist
```

## 📬 Contact

- 📧 bhairavi.s@nyu.edu
- 🌐 [LinkedIn](https://linkedin.com/in/bhairavi-sawantdesai)
- 💻 [GitHub](https://github.com/BhairaviVSD)
