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
- HuggingFace: [Jane](https://huggingface.co/Jane)
- Twitter: [@EvelynvalMakuo](https://twitter.com/EvelynvalMakuo)

---

*Started: March 2026 | Goal: AI Engineer in Paris by March 2027*


---

## hugging_face/README.md

# 🐍 HuggingFace AI Projects

This folder is where I made my first AI API calls ever. March 2nd, 2026 — Day 1.

It felt impossible at first. Wrong Python versions, broken virtual environments, packages installing in the wrong place. But eventually the poem came through in the terminal and honestly it felt like magic.

Here's everything that lives here and how to use it.

---

### Setup (Do This First)

```bash
# From the hugging_face folder
python3.13 -m venv venv
source venv/bin/activate
pip install openai huggingface_hub python-dotenv Pillow
```

Then create a `.env` file:
```
HF_TOKEN=your_huggingface_token_here
```

Get your token at huggingface.co → Settings → Access Tokens. Make sure to check "Make calls to Inference Providers" when creating it.

---

### Projects

#### 📝 Poem Generator (`generate_poem.py`)
My very first LLM call. It uses the Kimi-K2 model via HuggingFace's router to generate creative poetry from a prompt.

```bash
python3 generate_poem.py
```

The first poem it generated was about the sea. Still one of my favourite outputs.

---

#### 🎨 Image Generator (`generate_image.py`)
Text-to-image generation using Stable Diffusion XL. Give it a prompt, it saves a PNG to your folder.

```bash
python3 generate_image.py
```

First image: a dragon flying over a medieval castle. Saved as `dragon_castle.png`.

---

#### 💬 Eva Chatbot (`chatbot.py`)
A conversational AI called Eva. What makes her different from a basic API call is the conversation history — she actually remembers what you said earlier in the session.

```bash
python3 chatbot.py
# Type 'quit' to exit
```

Eva gave me a full 10-step plan for building a Netflix prototype when I asked her. That's when I knew this was actually useful.

---

#### 🎯 Viber Mentorbot (`Mentorbot.py`)
My personal AI mentor. Viber is set up with a system prompt that keeps conversations focused and technical. Built this after Eva to practice customising AI behaviour with system prompts.

```bash
python3 Mentorbot.py
# Type 'quit' to exit
```

---

#### 🖼️ Portfolio Image Generator (`make_porfolio.py`)
Generates three professional portfolio showcase images for my Malt freelance profile. Each image shows a project with a dark theme, tech stack pills, and live output previews.

```bash
python3 make_porfolio.py
# Generates: portfolio_1.png, portfolio_2.png, portfolio_3.png
```

---

### What I Learned Here

- How virtual environments actually work (the hard way)
- The difference between system Python and venv Python
- Secure API key management with `.env` files
- How LLMs use conversation history to "remember"
- How to customise AI behaviour with system prompts

---

### What's Next

Moving into LangChain and RAG systems in Phase 2. The goal is to build a document Q&A tool that can answer questions about any PDF — starting with financial reports and legal contracts.
