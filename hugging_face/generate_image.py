import os
from dotenv import load_dotenv
from huggingface_hub import InferenceClient

load_dotenv()

client = InferenceClient(
    provider="hf-inference",
    api_key=os.environ["HF_TOKEN"],
)

image = client.text_to_image(
    "A dragon flying over a medieval castle",
    model="stabilityai/stable-diffusion-xl-base-1.0",  # ← updated model
)

image.save("dragon_castle.png")
print("Image saved! Check your hugging_face folder.")