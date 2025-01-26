import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getAIResponse } from '../api/openrouter';
import { CHARACTER_PROFILES } from '../api/characters';

const ChatWindow = () => {
  const { character } = useParams();
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesContainerRef = useRef(null);

  // Normalize character name and handle missing profiles
  const normalizedCharacter = character.toLowerCase().replace(/\s/g, '');
  const characterProfile = CHARACTER_PROFILES[normalizedCharacter] || {
    name: 'Assistant',
    prompt: 'You are a helpful assistant.'
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Set initial message from character
  useEffect(() => {
    setMessages([{
      text: `${characterProfile.name}: Hello! How can I help you today?`,
      isBot: true,
      timestamp: new Date().toISOString()
    }]);
  }, [characterProfile.name]);

  const handleSend = async () => {
    if (!inputMessage.trim() || isLoading) return;

    // Add user message to chat
    const userMessage = {
      text: `You: ${inputMessage}`,
      isBot: false,
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Prepare messages for API (last 6 messages for context)
      const apiMessages = messages
        .slice(-6)
        .filter(m => m.isBot)
        .map(m => ({
          role: 'assistant',
          content: m.text.replace(`${characterProfile.name}: `, '')
        }))
        .concat({
          role: 'user',
          content: inputMessage
        });

      // Get AI response
      const aiResponse = await getAIResponse(apiMessages, normalizedCharacter);
      
      // Add bot response
      const botMessage = {
        text: `${characterProfile.name}: ${aiResponse}`,
        isBot: true,
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      const errorMessage = {
        text: `System: ${error.message || 'Failed to get response'}`,
        isBot: true,
        timestamp: new Date().toISOString(),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gray-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">
            Chatting with {characterProfile.name}
          </h1>
          <button
            onClick={() => window.close()}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Close Chat
          </button>
        </div>

        {/* Messages Container */}
        <div 
          ref={messagesContainerRef}
          className="flex-1 bg-gray-800 rounded-lg p-4 mb-4 overflow-y-auto"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${message.isBot ? 'text-left' : 'text-right'}`}
            >
              <div
                className={`inline-block max-w-[80%] p-3 rounded-lg ${
                  message.isBot
                    ? 'bg-gray-700 text-gray-100'
                    : 'bg-blue-600 text-white'
                } ${message.isError ? 'bg-red-800 text-red-100' : ''}`}
              >
                <p className="break-words">{message.text}</p>
                <p className="text-xs mt-1 opacity-70">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="text-center text-gray-400">
              <div className="animate-pulse">⌛ {characterProfile.name} is typing...</div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="flex gap-2">
          <input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-600 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;