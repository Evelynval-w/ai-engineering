from PIL import Image, ImageDraw
import os

BG = "#1a1a2e"
ACCENT = "#4f8ef7"
WHITE = "#ffffff"
LIGHT = "#ccddff"
GRAY = "#888888"
GREEN = "#4ade80"

def make_image(filename, title, subtitle, stack, highlights, right_content_type, output):

    canvas = Image.new("RGB", (1200, 630), color=BG)
    draw = ImageDraw.Draw(canvas)

    # Left accent bar
    draw.rectangle([0, 0, 6, 630], fill=ACCENT)

    # Title
    draw.text((40, 40), title, fill=ACCENT)
    draw.text((40, 80), subtitle, fill=WHITE)

    # Divider line
    draw.line([40, 110, 560, 110], fill=ACCENT, width=1)

    # Stack pills
    x = 40
    for tech in stack:
        w = len(tech) * 8 + 20
        draw.rectangle([x, 125, x+w, 150], fill="#2a2a4e")
        draw.rectangle([x, 125, x+w, 150], outline=ACCENT, width=1)
        draw.text((x+10, 129), tech, fill=ACCENT)
        x += w + 10

    # Highlights
    y = 175
    for point in highlights:
        draw.text((40, y), "▸  " + point, fill=LIGHT)
        y += 35

    # Right panel background
    draw.rectangle([620, 0, 1200, 630], fill="#0d0d1a")
    draw.line([620, 0, 620, 630], fill=ACCENT, width=2)

    # Right panel content
    if right_content_type == "poem":
        draw.text((650, 40), "[ LIVE OUTPUT ]", fill=GREEN)
        draw.line([650, 65, 1160, 65], fill="#2a2a4e", width=1)
        lines = [
            "$ python3 generate_peom.py",
            "",
            "The Sea Keeps Its Own Name",
            "",
            '"The tide wrote my name backward',
            ' in foam and erased it before',
            ' I could read the anagram..."',
            "",
            '"Even the stars, when they fall,',
            ' are only practicing to become',
            ' the small change of its dark purse"',
            "",
            "Model: moonshotai/Kimi-K2",
            "Status: SUCCESS ✓",
        ]
        y = 85
        for line in lines:
            col = GREEN if line.startswith("$") else LIGHT if line.startswith('"') else WHITE if line else GRAY
            draw.text((650, y), line, fill=col)
            y += 36

    elif right_content_type == "ml":
        draw.text((650, 40), "[ MODEL RESULTS ]", fill=GREEN)
        draw.line([650, 65, 1160, 65], fill="#2a2a4e", width=1)
        metrics = [
            ("Accuracy",      0.87, "87%"),
            ("Precision",     0.83, "83%"),
            ("Recall",        0.79, "79%"),
            ("F1 Score",      0.81, "81%"),
            ("ROC-AUC",       0.91, "91%"),
        ]
        y = 90
        for label, pct, val in metrics:
            draw.text((650, y), label, fill=LIGHT)
            draw.rectangle([800, y+2, 1100, y+18], fill="#2a2a4e")
            draw.rectangle([800, y+2, int(800 + 300*pct), y+18], fill=ACCENT)
            draw.text((1110, y), val, fill=WHITE)
            y += 50
        draw.text((650, y+10), "Dataset: Credit Risk", fill=GRAY)
        draw.text((650, y+35), "Algorithm: Random Forest + XGBoost", fill=GRAY)

    elif right_content_type == "arch":
        draw.text((650, 40), "[ ARCHITECTURE ]", fill=GREEN)
        draw.line([650, 65, 1160, 65], fill="#2a2a4e", width=1)
        # Microservices diagram
        services = [
            (670, 100, "Flask Service", "#4f8ef7"),
            (670, 200, "Django Service", "#a78bfa"),
            (670, 300, "Story Engine", "#34d399"),
            (670, 400, "Database", "#fb923c"),
        ]
        for sx, sy, sname, scol in services:
            draw.rectangle([sx, sy, sx+200, sy+50], fill="#1a1a2e")
            draw.rectangle([sx, sy, sx+200, sy+50], outline=scol, width=2)
            draw.text((sx+15, sy+16), sname, fill=scol)
            # Arrow
            if sy < 400:
                draw.line([sx+100, sy+50, sx+100, sy+90], fill=scol, width=2)
                draw.polygon([sx+95, sy+88, sx+105, sy+88, sx+100, sy+98], fill=scol)

        draw.text((900, 130), "Design Patterns:", fill=WHITE)
        for i, p in enumerate(["Strategy", "Observer", "Factory"]):
            draw.text((900, 165 + i*35), "✓  " + p, fill=GREEN)
        draw.text((900, 290), "Stack:", fill=WHITE)
        for i, s in enumerate(["Django", "Flask", "Python", "SQLite"]):
            draw.text((900, 325 + i*35), "→  " + s, fill=LIGHT)

    # Bottom bar
    draw.rectangle([0, 590, 1200, 630], fill="#0a0a18")
    draw.text((40, 605), "github.com/Evelynval-w/ai-engineering", fill=ACCENT)
    draw.text((850, 605), "Makuochukwu Okoene  |  EPITA Paris 2027", fill=GRAY)

    canvas.save(output)
    print(f"Saved: {output}")


# PROJECT 1 — LLM Text & Image Generation
make_image(
    filename="portfolio_1.png",
    title="AI Text & Image Generation",
    subtitle="LLM-powered content generation using HuggingFace Inference API",
    stack=["Python", "HuggingFace", "LLM", "Stable Diffusion", "Pillow"],
    highlights=[
        "Called Kimi-K2 LLM API to generate creative text",
        "Generated AI images from text prompts",
        "Secure API key management with python-dotenv",
        "Deployed & tested end-to-end from VS Code",
    ],
    right_content_type="poem",
    output="portfolio_1.png"
)

# PROJECT 2 — Credit Risk ML Model
make_image(
    filename="portfolio_2.png",
    title="Credit Risk ML Model",
    subtitle="Machine learning model to predict credit default probability",
    stack=["Python", "Scikit-learn", "Pandas", "NumPy", "ML"],
    highlights=[
        "Built classification model for credit default prediction",
        "Feature engineering & data preprocessing pipeline",
        "Model evaluation: accuracy, precision, recall, F1",
        "Applicable to banking & fintech use cases",
    ],
    right_content_type="ml",
    output="portfolio_2.png"
)

# PROJECT 3 — NAHB Platform
make_image(
    filename="portfolio_3.png",
    title="NAHB - Interactive Story Platform",
    subtitle="Microservices storytelling platform with design patterns",
    stack=["Django", "Flask", "Python", "Microservices", "REST API"],
    highlights=[
        "Full-stack microservices architecture",
        "Strategy, Observer & Factory design patterns",
        "Django + Flask services communicating via REST",
        "Academic project - EPITA Paris 2026",
    ],
    right_content_type="arch",
    output="portfolio_3.png"
)

print("\nAll 3 portfolio images ready!")
print("Upload them to Malt portfolio section!")