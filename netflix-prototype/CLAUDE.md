# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

## Project Overview

A Netflix UI prototype built from scratch over 3 days as part of an AI engineering self-study roadmap. The project follows a strict 10-step anti-hallucination plan (see below) to avoid scope creep and keep builds clean. Built by Makuochukwu Okoene (EPITA Paris, L2) — github.com/Evelynval-w.

The end goal is a full Netflix clone with an **AI movie recommender chatbot** built in — powered by the HuggingFace Inference API (same stack as the other projects in this repo).

---

## Commands

```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

No test suite is configured yet.

---

## Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 19 |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS v4 (via @tailwindcss/vite — no tailwind.config.js needed) |
| Routing | React Router v7 |
| State | React Context API (useContext) |
| Data | Static movies.json (40 movies, 6 genres) |
| AI Layer | HuggingFace Inference API (Kimi-K2 LLM) — coming in Step 11 |

---

## Architecture

### Routing (`src/App.jsx`)
Three routes via React Router v7:
- `/` → `Landing` — Netflix-style hero landing with sign-in CTA
- `/browse` → `Browse` — Main home screen with genre rows
- `/player/:id` → `Player` — Full-screen video player (reads movie `id` from URL params)

`App.jsx` wraps everything in `<MovieProvider>` so all components have access to movie state without prop drilling.

### Data (`src/data/movies.json`)
Static JSON — 40 movies across 6 genres: Sci-Fi, Action, Drama, Horror, Comedy, Animation.

Each movie object has:
```json
{
  "id": 1,
  "title": "Inception",
  "genre": "Sci-Fi",
  "img": "https://image.tmdb.org/t/p/w300/...",
  "banner": "https://image.tmdb.org/t/p/original/...",
  "desc": "A thief who steals corporate secrets...",
  "maturityRating": "PG-13",
  "duration": "2h 28min",
  "videoURL": "https://www.youtube.com/embed/..."
}
```

Poster images come from TMDB (w300). Banner images from TMDB (original). Video URLs are YouTube embed links for trailers.

### State Management (`src/context/MovieContext.jsx`)
Single context handles all movie state:
- `movies` — full list from movies.json
- `genres` — deduplicated genre list
- `selectedMovie` — currently clicked movie
- `showModal` — modal open/close boolean
- `openModal(movie)` — sets selectedMovie and opens modal
- `closeModal()` — resets both
- `getByGenre(genre)` — filters movies by genre

Access anywhere with: `const { openModal, selectedMovie } = useMovies()`

### Components

| File | Status | What it does |
|------|--------|-------------|
| `Navbar.jsx` | ✅ Built | Fixed top nav with NETFIX logo, nav links, avatar |
| `Tile.jsx` | ✅ Built | Movie card with hover scale + lazy load image |
| `Row.jsx` | ✅ Built | Horizontal scrollable row of Tiles, grouped by genre |
| `Modal.jsx` | 🔄 In progress | Movie detail overlay with banner, synopsis, Play button |
| `ChatBot.jsx` | ⏳ Pending | AI movie recommender (Step 11 — HuggingFace API) |

### Pages

| File | Status | What it does |
|------|--------|-------------|
| `Landing.jsx` | 🔄 In progress | Hero page with background, logo, email sign-up CTA |
| `Browse.jsx` | 🔄 In progress | Main browse page — Navbar + genre Rows + Modal |
| `Player.jsx` | ⏳ Pending | Full-screen YouTube iframe player |

### Hooks (`src/hooks/useModalToggle.js`)
Custom hook that wraps the modal open/close logic from MovieContext. Keeps components clean.

---

## The 10-Step Build Plan

This project follows a strict plan to avoid scope creep. Steps are ticked off before moving to the next one. No new features are added mid-step.

```
✅ Step 1  — Project skeleton (Vite + React + Tailwind + folder structure)
✅ Step 2  — movies.json (40 movies, 6 genres, validated)
✅ Step 3  — Routing (Landing, Browse, Player — all smoke-tested)
🔄 Step 4  — Components (Navbar, Tile, Row — in progress)
⏳ Step 5  — Landing page (hero, gradient, CTA)
⏳ Step 6  — Browse page (full genre rows + modal)
⏳ Step 7  — Modal (banner, synopsis, Play button)
⏳ Step 8  — Player page (YouTube iframe, back button)
⏳ Step 9  — Polish (skeleton loaders, keyboard nav, lazy images)
⏳ Step 10 — Deploy to Vercel (live URL for Malt portfolio)
⏳ Step 11 — AI chatbot (HuggingFace Kimi-K2 movie recommender)
```

Parked for later (do not add until Step 10 is done):
- Firebase auth
- My List feature
- Search/filter
- Admin panel

---

## Styling Notes

Tailwind v4 is loaded via the `@tailwindcss/vite` plugin. No config file needed.

Key colour tokens used throughout:
```
Netflix black:  #141414
Netflix red:    #E50914
Overlay dark:   rgba(0,0,0,0.7)
```

`src/index.css` has the global reset and body background. `src/App.css` is leftover Vite scaffold — can be cleaned up.

---

## AI Layer (Step 11 — Upcoming)

The `ChatBot.jsx` component will connect to the HuggingFace Inference API using the same pattern from `../hugging_face/chatbot.py`. The user types their mood or preferences and the AI recommends movies from movies.json.

The API token will be loaded from a `.env` file as `VITE_HF_TOKEN`. Never commit the `.env` file.

```
VITE_HF_TOKEN=your_huggingface_token_here
```

---

## Git Workflow

This project lives on the `feature/netflix-prototype` branch. Each step gets its own commit before merging to main.

```bash
git checkout feature/netflix-prototype   # always work here
git add .
git commit -m "feat: description of what was built"
git push
```

Merge to main only when a full step is complete and tested.