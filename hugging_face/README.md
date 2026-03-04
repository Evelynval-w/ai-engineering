

## hugging_face/README.md


# 🐍 HuggingFace AI Projects


This folder is where I made my first AI API calls ever. March 
2nd, 2026 — Day 1.


It felt impossible at first. Wrong Python versions, broken 
virtual environments, packages installing in the wrong place. 
But eventually the poem came through in the terminal and 
honestly it felt like magic.


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


Get your token at huggingface.co → Settings → Access Tokens. 
Make sure to check "Make calls to Inference Providers" when 
creating it.


---


### Projects


#### 📝 Poem Generator (`generate_poem.py`)
My very first LLM call. It uses the Kimi-K2 model via 
HuggingFace's router to generate creative poetry from a prompt.


```bash
python3 generate_poem.py
```


The first poem it generated was about the sea. Still one of my 
favourite outputs.


---


#### 🎨 Image Generator (`generate_image.py`)
Text-to-image generation using Stable Diffusion XL. Give it a 
prompt, it saves a PNG to your folder.


```bash
python3 generate_image.py
```


First image: a dragon flying over a medieval castle. Saved as 
`dragon_castle.png`.


---


#### 💬 Eva Chatbot (`chatbot.py`)
A conversational AI called Eva. What makes her different from 
a basic API call is the conversation history — she actually 
remembers what you said earlier in the session.


```bash
python3 chatbot.py
# Type 'quit' to exit
```


Eva gave me a full 10-step plan for building a Netflix 
prototype when I asked her. That's when I knew this was 
actually useful.


---


#### 🎯 Viber Mentorbot (`Mentorbot.py`)
My personal AI mentor. Viber is set up with a system prompt 
that keeps conversations focused and technical. Built this 
after Eva to practice customising AI behaviour with system 
prompts.


```bash
python3 Mentorbot.py
# Type 'quit' to exit
```


---


#### 🖼️ Portfolio Image Generator (`make_porfolio.py`)
Generates three professional portfolio showcase images for my 
Malt freelance profile. Each image shows a project with a dark 
theme, tech stack pills, and live output previews.


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


Moving into LangChain and RAG systems in Phase 2. The goal is 
to build a document Q&A tool that can answer questions about 
any PDF — starting with financial reports and legal contracts.

