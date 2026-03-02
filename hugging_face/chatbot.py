import os. # imports python built_in os
from dotenv import load_dotenv # this helps load .env variables
from openai import OpenAI # This is the SDK object used to talk to AI models via API.

"""
SDK object simply means:

An object created from an SDK 
(Software Development Kit) that lets your 
code talk to an external service easily.
"""



load_dotenv()  # Reads the .env file


"""
    What this does:

Creates an AI client object ( An AI client object is a Python object that acts as a bridge between your code and an AI service (model/API).
)

Connects to HuggingFace’s AI router instead of OpenAI directly

Uses your secret token securely

 Meaning:

“Create a connection to HuggingFace AI using my secret API key”

    """
  
# OpenAI → SDK class
#client → SDK object (instance of that class)  

client = OpenAI(
    base_url="https://router.huggingface.co/v1",
    api_key=os.environ["HF_TOKEN"],
)



# This list is the AI's memory( Creates a list that stores chat memory )
conversation_history = [
    {
        "role": "system",
        "content": "You are a helpful assistant named Eva. Be friendly and concise."
    }
]

"""
    This is the system prompt:

It defines:

Personality

Behaviour

Identity

Style

This tells the AI:

"Your name is Eva, you're helpful, friendly, and concise."
"""


print("Chat with Eva! (type 'quit' to exit)\n")
# Displays startup message in terminal

while True:  # Keeps the chat running forever until you break it manually.
    # Get user input
    user_input = input("You: ")  # Takes user input from the terminal
    
    if user_input.lower() == "quit":  # Checks if user typed "quit" (case insensitive)
        print("Eva: Goodbye! 👋")
        break # ends the program
    
    # Add user message to memory
    conversation_history.append({
        "role": "user",
        "content": user_input
    }) 
    # Saves the user's message into memory
# So the AI can remember previous messages
    
    # This is the brain of the bot. -- “Client object, go talk to the AI model and bring me a response.”
    # Send full conversation to AI
    response = client.chat.completions.create(
        model="moonshotai/Kimi-K2-Instruct-0905",
        messages=conversation_history, # This is what gives it memory & context
    )
    
    # Get AI response
    ai_message = response.choices[0].message.content # Extracts the AI’s reply from the response object
    
    
        # Saves AI reply into memory
# So future messages remember past replies
    # Add AI response to memory
    conversation_history.append({
        "role": "assistant",
        "content": ai_message
    })

    
    print(f"Eva: {ai_message}\n")