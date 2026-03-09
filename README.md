# 🤖 AI Engineering Journey

Hey! This is where I'm documenting everything I'm building as I learn AI engineering from scratch. I started this on March 2nd, 2026 — and the goal is simple: by March 2027, I want to be a working AI engineer in Paris.

Every folder here is a real project I built with my own hands. No copy-paste tutorials, no shortcuts. Just me, Python, and a lot of terminal errors that eventually got fixed.

---

## What's Inside

### 🐍 `hugging_face/`
This is where it all started. My first ever AI API calls, image generation, and chatbots — all built in one day using HuggingFace's Inference API.

| File | What it does |
|------|-------------|
| `generate_poem.py` | Calls Kimi-K2 LLM to write creative poetry. This was my first ever LLM call. |
| `generate_image.py` | Generates AI images from text prompts using Stable Diffusion XL. |
| `chatbot.py` | A conversational chatbot called Eva with full memory of the conversation. |
| `Mentorbot.py` | My personal AI mentor bot called Viber — built to keep me focused and on track. |
| `make_porfolio.py` | Generates portfolio showcase images for my Malt freelance profile. |

### 🎬 `netflix-prototype/`
A full Netflix UI clone built with React + Vite + Tailwind, with an AI movie recommender chatbot built in. You can browse movies by genre, open a detail modal, and ask the AI to recommend something based on your mood.

Stack: React, Vite, Tailwind CSS, HuggingFace API

---

## How to Run the AI Scripts

```bash
# Go into the hugging_face folder
cd hugging_face

# Create and activate virtual environment
python3.13 -m venv venv
source venv/bin/activate

# Install dependencies
pip install openai huggingface_hub python-dotenv Pillow

# Create your .env file
echo "HF_TOKEN=your_token_here" > .env

# Run any script
python3 generate_poem.py
python3 generate_image.py
python3 chatbot.py
```

## How to Run the Netflix App

```bash
cd netflix-prototype
npm install
npm run dev
# Open http://localhost:5173
```

---

## The 12-Month Plan

This repo is growing with me. Here's what's coming:

- ✅ **Phase 1 (Now):** LLM calls, image generation, chatbots
- 🔄 **Phase 2 (Months 3-4):** LangChain, RAG systems, document Q&A
- ⏳ **Phase 3 (Months 5-7):** Contract analyzer, financial AI, credit risk upgrade
- ⏳ **Phase 4 (Months 8-9):** FastAPI, Docker, cloud deployment

---

## About Me

I'm Makuochukwu — a CS student at EPITA Paris building toward an AI engineering internship in June 2026. I'm interested in AI applications for finance, healthcare, and legal tech.

Find me here:
- GitHub: [Evelynval-w](https://github.com/Evelynval-w)
- HuggingFace: [Evelynval-w](https://huggingface.co/Jane)
- Twitter: [@EvelynvalMakuo](https://twitter.com/EvelynvalMakuo)

---

*Started: March 2026 | Goal: AI Engineer in Paris by March 2027*

