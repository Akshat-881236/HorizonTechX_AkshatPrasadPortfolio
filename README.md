# Akshat Prasad | Frontend Developer Portfolio

> A modern, highly responsive, and SEO-optimized personal portfolio built to showcase frontend engineering projects and technical capabilities.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/Akshat-881236/HorizonTechX_AkshatPrasadPortfolio/blob/main/index.html)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://github.com/Akshat-881236/HorizonTechX_AkshatPrasadPortfolio/blob/main/styles.css)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://github.com/Akshat-881236/HorizonTechX_AkshatPrasadPortfolio/blob/main/script.js)

This repository contains the source code for my official portfolio website. Designed with a focus on fluid user experiences, component-driven aesthetics (using Glassmorphism), and clean architecture, this site serves as the central hub for the Akshat Network ecosystem.

🔗 **Live Site:** [akshat-881236.github.io/HorizonTechX_AkshatPrasadPortfolio/](https://akshat-881236.github.io/HorizonTechX_AkshatPrasadPortfolio/)

## 🚀 Key Features

* **Dynamic Data Rendering:** Project case studies are not hardcoded. The UI fetches and dynamically renders project cards from a local `db.json` file using the native JavaScript Fetch API.
* **SEO & Accessibility Optimized:** Implements robust meta tags, Open Graph (OG) tags for social sharing, Twitter cards, and structured JSON-LD Schema data for optimal search engine indexing.
* **Custom CSS Architecture:** Built purely with CSS3 (no heavy UI frameworks). Utilizes CSS custom properties (variables) for theme management, CSS Grid/Flexbox for responsive layouts, and keyframe animations for a polished feel.
* **Glassmorphism UI:** Modern, translucent interface elements layered over a dynamic, animated gradient background.
* **Zero Dependencies:** Core functionality relies purely on Vanilla JavaScript, ensuring fast load times and no external library bloat (excluding Bootstrap Icons for lightweight SVG icons).

## 🛠️ Tech Stack

* **Markup:** HTML5
* **Styling:** CSS3 (Variables, Grid, Flexbox, Animations)
* **Logic:** Vanilla JavaScript (ES6+, Async/Await, DOM Manipulation)
* **Assets:** Bootstrap Icons

## 📂 Project Structure

```text
├── index.html       # Main entry point containing semantic markup and SEO meta tags
├── akshat.jpg       # Profile image asset
├── anh_laptop.png   # Hero section conceptual image asset
├── preview.png      # Open Graph image for social link previews
├── db.json          # Data layer containing project details (Required for JS to render projects)
└── sitemap.xml      # XML sitemap for search engine crawlers

```

## 💻 Local Development Setup

To run this project locally and modify the code, follow these steps:

1. **Clone the repository:**
```bash
git clone [https://github.com/Akshat-881236/HorizonTechX_AkshatPrasadPortfolio.git](https://github.com/Akshat-881236/HorizonTechX_AkshatPrasadPortfolio.git)

```


2. **Navigate to the directory:**
```bash
cd HorizonTechX_AkshatPrasadPortfolio

```


3. **Serve the project locally:**
*Because this project uses the `fetch()` API to load projects from `db.json`, simply opening `index.html` in a browser will result in a CORS error. You must use a local web server.*
*If you have VS Code, use the **Live Server** extension.*
*Alternatively, if you have Python installed, run:*
```bash
python -m http.server 8000

```


*Then navigate to `http://localhost:8000` in your browser.*

## 📝 Updating Projects (`db.json`)

To add or modify the projects displayed in the "Featured Projects" section, simply update the `db.json` file. The JavaScript logic handles data validation and sanitization (XSS prevention) automatically.

Expected schema for `db.json`:

```json
{
  "projects": [
    {
      "project_title": "Project Name",
      "project_logo_path": "path/to/icon.svg",
      "start_at": "MM/DD/YYYY",
      "end_at": "MM/DD/YYYY",
      "project_description": "Brief explanation of the project and challenges solved.",
      "project_url": "[https://live-demo-link.com](https://live-demo-link.com)",
      "git_repo_url": "[https://github.com/your-repo](https://github.com/your-repo)"
    }
  ]
}

```

## 📫 Let's Connect

I am a BCA student deeply engaged in problem-solving and technical continuous learning, actively building the Akshat Network Hub.

* **GitHub:** [@Akshat-881236](https://github.com/Akshat-881236)
* **LinkedIn:** [Akshat Prasad](https://www.linkedin.com/in/akshat-prasad-b539363)
* **X / Twitter:** [@akshatpsd2005](https://x.com/akshatpsd2005)

---

*Designed & Developed by Akshat Prasad*
