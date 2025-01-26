// src/api/openrouter.js
import { CHARACTER_PROFILES } from './characters';

export const getAIResponse = async (messages, character) => {
  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_OPENROUTER_API_KEY}`,
        'HTTP-Referer': window.location.href,
        'X-Title': 'Character Chat App',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "google/palm-2-chat-bison", // Free model
        messages: [
          {
            role: "system",
            content: CHARACTER_PROFILES[character]?.prompt || "You are a helpful assistant."
          },
          ...messages
        ],
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;

  } catch (error) {
    console.error("API Request Failed:", error);
    return "Sorry, I'm having trouble responding right now.";
  }
};