# Nuni V Vijay Sai — Portfolio

A clean, modern, and interactive portfolio website for showcasing AI/ML skills, projects, experience, and achievements.

## Demo (Local)

```bash
npm install
npm run dev
```

Dev server: http://localhost:5173

## Tech Stack

- React + Vite
- TailwindCSS (dark theme, electric blue accents)
- Framer Motion (animations)
- EmailJS (contact form)

## Features

- Hero with animated gradient, profile photo, and quick actions
- Resume download with file-existence check
- About, Skills, Projects, Experience, Education, Certifications
- Contact form (EmailJS) + direct email/phone/location
- Smooth scroll, fade-in animations, responsive layout

## Project Structure

```
portfolio/
├── public/
│   └── assets/
│       ├── Nuni_V_Vijay_Sai_Resume.pdf
│       └── profile.jpg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── ... (components/sections live inside App.jsx for simplicity)
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── .env (optional for EmailJS)
```

## Getting Started

1) Install dependencies

```bash
npm install
```

2) Start dev server

```bash
npm run dev
```

3) Add your assets

- Resume: `public/assets/Nuni_V_Vijay_Sai_Resume.pdf`
- Profile photo: `public/assets/profile.jpg`

The Resume buttons will download `Nuni_V_Vijay_Sai_Resume.pdf`. The code also includes a fallback for a spaced filename.

## Scripts

- `npm run dev` — start local development
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build

## Environment (optional for EmailJS)

Copy `.env.example` to `.env` and fill:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Fields expected by the EmailJS template: `from_name`, `reply_to`, `message`.

## Customization

- Colors/accents: `tailwind.config.js` and utility classes in `src/index.css`
- Content: edit sections in `src/App.jsx`
- Social links: navbar and hero buttons in `src/App.jsx`

## Deploy to Vercel

1) Push this repo to GitHub
2) Create a new Vercel project and import the repo
3) Build command: `npm run build`
4) Output directory: `dist`
5) Environment variables (optional): EmailJS keys

## License

This project is provided as-is for personal portfolio use.
