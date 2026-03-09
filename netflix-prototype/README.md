#  EVFLIX — Netflix Clone

> A fully functional Netflix-inspired streaming UI built with React, Vite, and the HuggingFace AI API.  
> **Live Demo → [evflix.vercel.app](https://evfix-seven.vercel.app/)**

---

##  Why I Built This

I'm Makuochukwu (Evelyn), a CS student at EPITA Paris teaching myself AI engineering from scratch.

This project is part of my 12-month AI engineering roadmap. The goal wasn't to copy Netflix — it was to prove I could build a production-quality frontend from zero, wire it to real data, and integrate an AI layer on top of it. Every line of code here was written by hand.

---

## ✨ Features

-  **Landing page** — hero background, email CTA, sign-in flow
-  **Browse page** — 40 movies across 6 genres in horizontal scrollable rows
-  **Modal** — click any tile to see the movie banner, synopsis, rating, and duration
-  **Player page** — YouTube trailer embedded per movie, full metadata display
-  **AI Chatbot** *(coming soon)* — mood-based movie recommender powered by HuggingFace
-  **Skeleton loaders** — smooth loading states while images fetch
-  **Responsive** — works on desktop and mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19 + Vite 7 |
| Routing | React Router v7 |
| State | React Context API + custom hooks |
| Styling | Inline styles + CSS-in-JS |
| Data | Static `movies.json` (40 films, 6 genres) |
| Video | YouTube Embed API (trailers) |
| Images | TMDB poster API |
| AI (soon) | HuggingFace Inference API |
| Deployment | Vercel |

---
## 📊 Lighthouse Scores (Live)

| Metric | Score |
|---|---|
| Performance | 54 |
| Accessibility | 100 ✅ |
| Best Practices | 77 |
| SEO | 90 |

## 📁 Project Structure

```
netflix-prototype/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Fixed top nav with EVFLIX branding
│   │   ├── Row.jsx          # Horizontal scrollable genre row
│   │   ├── Tile.jsx         # Movie card with hover effect
│   │   ├── Modal.jsx        # Movie detail overlay
│   │   └── Skeleton.jsx     # Loading placeholder
│   ├── pages/
│   │   ├── Landing.jsx      # Hero page with email CTA
│   │   ├── Browse.jsx       # Main browse page + hero banner
│   │   └── Player.jsx       # YouTube trailer player
│   ├── context/
│   │   └── MovieContext.jsx # Global state for movies + modal
│   ├── hooks/
│   │   └── useModalToggle.js # Custom hook for modal open/close
│   └── data/
│       └── movies.json      # 40 movies, 6 genres, full metadata
```

---

##  Run Locally

```bash
# Clone the repo
git clone https://github.com/Evelynval-w/ai-engineering.git
cd ai-engineering/netflix-prototype

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🗺️ Roadmap

- [x] Landing page
- [x] Browse page with genre rows
- [x] Movie modal
- [x] Player page with YouTube trailers
- [x] Skeleton loaders
- [x] Deploy to Vercel
- [ ] AI chatbot — mood-based recommender (HuggingFace)
- [ ] Search filter
- [ ] My List (localStorage)
- [ ] Auth (Firebase)

---

## 👤 About Me

**Makuochukwu Okoene** — CS Student @ EPITA Paris  
Building toward an AI engineering internship in Paris (June 2026)

- 🐙 GitHub: [github.com/Evelynval-w](https://github.com/Evelynval-w)
- 💼 LinkedIn: [okoene-makuo](https://www.linkedin.com/in/okoene-makuo-56932b259)
- 🤗 HuggingFace: [huggingface.co/Jane](https://huggingface.co/Jane)

---

*Part of my AI Engineering Journey — started March 2026, targeting June 2026 internship.*




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
