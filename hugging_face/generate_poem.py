
# Your first LLM call
# Here we are going to make your first inference request to an LLM using moonshotai/Kimi-K2-Instruct-0905.
import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    base_url="https://router.huggingface.co/v1",
    api_key=os.environ["HF_TOKEN"],
)

completion = client.chat.completions.create(
    model="moonshotai/Kimi-K2-Instruct-0905",
    messages=[
        {
            "role": "user",
            "content": "Generate a poem about the sea."
        }
    ],
)

print(completion.choices[0].message.content)