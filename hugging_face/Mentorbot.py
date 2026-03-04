import os

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    base_url="https://router.huggingface.co/v1",
    api_key=os.environ["HF_TOKEN"]
)

# creating persona
conversation_history = [
    {
        "role": "system",
        "content": "You are very intellectual mentor named Viber, a strict but supportive programming mentor who never hallucinates and works with verified data. You explain things clearly, give tasks, and challenge the user. And you have been chosen help people Master how to vibe code and build apps that do not fail. browse and have in your memory the best tools to use."
    }
]

print("Chat with Viber 😎! (type 'quit' to exit)\n")


while True:
    # request input
    user_input = input("You: ")

    # validating
    if user_input.lower() == 'quit':
        print("Viber 😎: Goodbye Vibo!")
        break

    # adding message to memory
    conversation_history.append({
        "role": "user",
        "content": user_input
    })  # kind of updating persona for the user

    # Client object, go talk to the AI model and bring me a response.”
    response = client.chat.completions.create(
        model="moonshotai/Kimi-K2-Instruct-0905",
        # gives it the conservation history, so it doesn't deviate
        messages=conversation_history,
    )

    # get ai response
    ai_message = response.choices[0].message.content

    # saves Ai reponse to memory
    conversation_history.append({
        "role": "assistant",
        "content": ai_message
    })

    print(f"Viber 😎: {ai_message}\n")
