# 🌐 Adaika Portfolio Website

A modern, responsive personal portfolio website built with **React (Vite)** to showcase my skills, projects, and contact information.

---

## 🚀 Live Preview

_(Add your deployed link here later)_
👉 https://your-portfolio-link.com

---

## 📌 Features

- 🔥 Clean and modern UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance using Vite
- 🧭 Smooth scrolling navigation
- 🎯 Sections:
  - Hero (Introduction)
  - About Me
  - Skills
  - Projects
  - Contact

- 🔗 External links (GitHub, LinkedIn, Resume)
- 📊 Google Analytics integration (visitor tracking)

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Styling:** CSS3
- **Version Control:** Git & GitHub
- **Deployment:** _(Netlify / Vercel / GitHub Pages — add later)_

---

## 📂 Project Structure

```
my-portfolio/
│
├── public/
│   ├── my-photo.jpeg
│   ├── resume.pdf
│   ├── portfolio-image.png
│   ├── soc-dashboard.png
│   └── real-time-systems.jpeg
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/
│   │   └── Home.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the repository

```
git clone https://github.com/adaika23/my-portfolio.git
cd my-portfolio
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Start development server

```
npm run dev
```

### 4️⃣ Open in browser

```
http://localhost:5173/
```

---

## 📊 Google Analytics Setup (Optional)

1. Create a Google Analytics account
2. Get your **Measurement ID (G-XXXXXXXXXX)**
3. Add this inside `<head>` in `index.html`:

```html
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

---

## ✏️ Customization

You can easily update:

- **Profile Image:** `/public/my-photo.jpeg`
- **Resume:** `/public/resume.pdf`
- **Projects:** `Projects.jsx`
- **Skills:** `Skills.jsx`
- **About Me:** `About.jsx`
- **Contact Info:** `Contact.jsx`

---

## 📬 Contact

- 📧 Email: [ochaladaika@gmail.com](mailto:ochaladaika@gmail.com)
- 💻 GitHub: https://github.com/Adaika23
- 🔗 LinkedIn: https://linkedin.com/in/adaika-obub-771b9a108/

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 🙌 Acknowledgements

Built with ❤️ using React and modern web technologies.

Build By Adaika OBUb
