from PIL import Image, ImageDraw, ImageFont
import os

# Open the dragon image
dragon = Image.open("dragon_castle.png")
dragon = dragon.resize((600, 400))

# Create a blank canvas
canvas = Image.new("RGB", (1200, 500), color="#1a1a2e")

# Paste dragon on the right
canvas.paste(dragon, (600, 50))

# Draw text on the left (the poem excerpt)
draw = ImageDraw.Draw(canvas)

# Title
draw.text((40, 40), "AI Text & Image Generation", fill="#4f8ef7")

# Poem excerpt
poem_lines = [
    "Generated poem excerpt:",
    "",
    '"The tide wrote my name backward in foam',
    'and erased it before I could read',
    'the anagram..."',
    "",
    "Model: Kimi-K2 via HuggingFace",
    "Image: Stable Diffusion XL",
    "Stack: Python • HuggingFace • Pillow",
]

y = 100
for line in poem_lines:
    draw.text((40, y), line, fill="#ccddff")
    y += 30

# Save
canvas.save("portfolio_project1.png")
print("Portfolio image saved!")