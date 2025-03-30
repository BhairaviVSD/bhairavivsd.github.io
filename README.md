
# 💼 Bhairavi Sawantdesai – Portfolio

Personal portfolio website built with **React** and **Vite**, highlighting my work in software engineering, AI/ML, embedded systems, and cloud-native development.

## 🚀 Tech Stack

- **Frontend**: React + Vite, CSS Modules  
- **Features**: Responsive design, resume download, smooth scrolling, animations, contact form  
- **Deployment**: GitHub Pages + Google Analytics

## 📁 Structure

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

## 🔧 Scripts

```bash
npm install     # Install deps
npm run dev     # Dev server
npm run build   # Build for production
npm run preview # Preview build
```

## 📦 Deploying

Update `vite.config.js`:

```js
export default defineConfig({
  base: '/bhairavivsd.github.io/',
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
