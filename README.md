# 🌟 Drishti Chauhan — Portfolio

A modern, dark-themed personal portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   └── profile.jpg          ← ADD YOUR PHOTO HERE
│   │   ├── certificates/
│   │   │   ├── w3grads_certificate.jpg   ← ADD CERT IMAGES HERE
│   │   │   ├── nptel_social_networks.jpg
│   │   │   └── coursera_network.jpg
│   │   └── resume.pdf               ← ADD YOUR RESUME HERE
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certificates.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🖼️ Adding Your Assets

### 1. Profile Photo
- Place your photo at: `src/assets/images/profile.jpg`
- In `Hero.jsx`, uncomment line 3:
  ```js
  import profilePhoto from '../assets/images/profile.jpg'
  ```
- Replace the placeholder `<div>` with:
  ```jsx
  <img src={profilePhoto} alt="Drishti Chauhan" className="w-full h-full object-cover" />
  ```

### 2. Resume PDF
- Place your resume at: `src/assets/resume.pdf`
- In `Hero.jsx`, uncomment:
  ```js
  import resume from '../assets/resume.pdf'
  ```
  And remove the `const resume = '#'` line.
- Do the same in `Resume.jsx`.

### 3. Certificate Images
- Place certificate images/screenshots in: `src/assets/certificates/`
  - `w3grads_certificate.jpg` — W3Grads MERN + Gen AI cert
  - `nptel_social_networks.jpg` — NPTEL Social Networks cert
  - `coursera_network.jpg` — Coursera Network Communication cert
- In `Certificates.jsx`, add imports at the top:
  ```js
  import certW3 from '../assets/certificates/w3grads_certificate.jpg'
  import certNptel from '../assets/certificates/nptel_social_networks.jpg'
  import certCoursera from '../assets/certificates/coursera_network.jpg'
  ```
- Then in the `certificates` array, replace `image: null` with the imported variable:
  ```js
  { id: 1, ..., image: certW3 },
  { id: 2, ..., image: certNptel },
  { id: 3, ..., image: certCoursera },
  ```

### 4. Project Screenshots
- Place project preview images in: `src/assets/projects/`
  - `foodfit.png` — FoodFit AI screenshot
  - `admission-saathi.png` — Admission Saathi screenshot
  - `flavor-fiesta.png` — Flavor Fiesta screenshot
- In `Projects.jsx`, add imports at top:
  ```js
  import foodfitImg from '../assets/projects/foodfit.png'
  import admissionImg from '../assets/projects/admission-saathi.png'
  import flavorImg from '../assets/projects/flavor-fiesta.png'
  ```
- Then in the `projects` array, set `image: foodfitImg` etc.

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Font | Playfair Display (serif) |
| Body Font | DM Sans |
| Mono Font | JetBrains Mono |
| Background | `#0c0a09` |
| Accent Gold | `#e8b020` |
| Card BG | `#1a1613` |
| Border | `#2a2118` |

---

## 🔧 Customization

- **Personal info** — Update name, bio, links in each component
- **Projects** — Edit the `projects` array in `Projects.jsx`
- **Skills** — Edit `skillGroups` in `Skills.jsx`
- **Certificates** — Edit `certificates` array in `Certificates.jsx`
- **Social links** — Search for `drishcodes` / `drishti-chauhan` to update all at once
- **Colors** — Edit CSS variables in `src/index.css` and `tailwind.config.js`

---

## 📦 Tech Stack

- ⚡ **Vite** — Lightning fast build tool
- ⚛️ **React 18** — Functional components + hooks
- 🎨 **Tailwind CSS** — Utility-first styling
- 🎭 **Framer Motion** — Smooth animations
- ✍️ **react-type-animation** — Typewriter effect
- 🎯 **react-icons** — Icon library

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the dist/ folder to Netlify
```

---

Built with ❤️ for Drishti Chauhan
