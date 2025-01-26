import { CHARACTER_PROFILES } from './characters';

export const getAIResponse = async (messages, character) => {
  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: CHARACTER_PROFILES[character]?.prompt || "You are helpful."
          },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 150
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'API request failed');
    }

    return data.choices[0].message.content;
    
  } catch (error) {
    console.error("API Error:", error.message);
    return "Sorry, I'm having trouble responding right now.";
  }
};