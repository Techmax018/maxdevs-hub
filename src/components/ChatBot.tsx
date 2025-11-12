import React, { useState, useEffect, useRef } from 'react';

// --- CONFIGURATION ---
const SYSTEM_INSTRUCTION = `
You are 'Max', a helpful and friendly chatbot for MaxDevs, a web development agency.
Your role is to engage users in a conversation about their project ideas.
Keep your responses concise, welcoming, and focused on gathering basic information (what they need, goal, and timeline).
Your first message should be a friendly greeting and a soft question about their project.
`;

const API_KEY = "AIzaSyA2mI7pdYX1dbzgZ3joYFTmezlCTWU3Bnc" // If you want to use models other than gemini-2.5-flash-preview-09-2025, provide an API key here. Otherwise, leave this as-is
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${API_KEY}`;


// --- REACT COMPONENT ---

const App = () => {
    // New State for visibility: starts hidden
    const [isOpen, setIsOpen] = useState(false);
    
    // Only essential chat state
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    // Ref for auto-scrolling
    const messagesEndRef = useRef(null);
    
    // Auto-scroll effect
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Initial Greeting Effect (only triggers when the chat is opened for the first time)
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([{ 
                role: 'bot', 
                text: "Hello! I'm Max from MaxDevs. How can I help you scope out your web project today?",
            }]);
        }
    }, [isOpen]);

    const sendMessage = async () => {
        const userMessage = input.trim();
        if (!userMessage || isLoading) return;

        setError(null);
        setIsLoading(true);
        setInput('');

        // 1. Add user message to chat history
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);

        // 2. Prepare simple API payload
        const chatHistory = messages.slice(1).map(msg => ({ // Exclude initial greeting from history payload
            role: msg.role === 'bot' ? 'model' : 'user',
            parts: [{ text: msg.text }]
        }));
        
        chatHistory.push({ role: 'user', parts: [{ text: userMessage }] });

        const payload = {
            contents: chatHistory,
            systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
            tools: [{ "google_search": {} }],
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorBody = await response.text();
                throw new Error(`API call failed: ${response.status} - ${errorBody}`);
            }

            const result = await response.json();
            const botText = result.candidates?.[0]?.content?.parts?.[0]?.text;

            if (botText) {
                // 3. Add bot message to chat history
                setMessages(prev => [...prev, { role: 'bot', text: botText }]);
            } else {
                throw new Error('Received an empty response from the model.');
            }

        } catch (err) {
            console.error('Gemini API Error:', err);
            setError('There was an issue connecting to the service. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="font-inter">
            <script src="https://cdn.tailwindcss.com"></script>
            
            {/* Floating Chat Bubble Icon */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-transform duration-300 transform 
                            hover:scale-105 active:scale-100 text-white 
                            ${isOpen ? 'bg-rose-500' : 'bg-teal-600 animate-pulse-subtle'}`}
                aria-label={isOpen ? "Close Chat" : "Open Chat"}
            >
                {/* Icon logic: X when open, new Speech Bubble path when closed */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {isOpen ? (
                        // Close (X) icon
                        <>
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </>
                    ) : (
                        // Message Circle icon (updated with user's path)
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    )}
                </svg>
            </button>
            
            {/* Main Chatbot Container (Conditional Visibility & Blur Effect) */}
            <div className={`
                fixed bottom-[90px] right-6 z-40 
                w-full max-w-sm sm:max-w-md bg-white/80 backdrop-blur-lg 
                shadow-2xl rounded-xl flex flex-col 
                h-[600px] transition-all duration-300 
                ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}
            `}>
                
                {/* Header (Teal Background) */}
                <div className="p-4 border-b border-gray-100 bg-teal-600 text-white rounded-t-xl">
                    <h1 className="text-xl font-bold">Max AI Assistance</h1>
                    <p className="text-teal-200 text-sm">A direct and friendly conversation interface.</p>
                </div>

                {/* Chat Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] p-3 rounded-xl shadow-md ${
                                msg.role === 'user' 
                                    ? 'bg-sky-500 text-white rounded-br-none' // Sky Blue for User
                                    : 'bg-gray-100 text-gray-800 rounded-tl-none' // Neutral for Bot
                            }`}>
                                <p className="whitespace-pre-wrap">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="max-w-[85%] p-3 rounded-xl shadow-md bg-gray-100 text-gray-800 rounded-tl-none">
                                <div className="dot-flashing"></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input and Error Area */}
                <div className="p-4 border-t border-gray-100 bg-white/70 rounded-b-xl">
                    {error && (
                        <div className="p-2 mb-2 text-sm font-medium text-red-800 bg-red-100 rounded-lg">
                            {error}
                        </div>
                    )}
                    <div className="flex space-x-3">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                            placeholder="Type your message..."
                            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition duration-150"
                            disabled={isLoading}
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50"
                            disabled={isLoading || !input.trim()}
                        >
                            {isLoading ? 'Send' : 'Send'}
                        </button>
                    </div>
                </div>
            </div>
            
            {/* CSS for custom animations and font */}
            <style>{`
                /* Custom animation for the subtle pulse effect */
                .animate-pulse-subtle {
                    animation: pulse-subtle 2s ease-in-out infinite;
                }
                
                @keyframes pulse-subtle {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }

                /* Existing loading animation and font styles */
                .dot-flashing {
                    position: relative;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background-color: #3f51b5;
                    color: #3f51b5;
                    animation: dotFlashing 1s infinite linear alternate;
                    animation-delay: 0.5s;
                }
                .dot-flashing::before, .dot-flashing::after {
                    content: '';
                    display: inline-block;
                    position: absolute;
                    top: 0;
                }
                .dot-flashing::before {
                    left: -9px;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background-color: #3f51b5;
                    color: #3f51b5;
                    animation: dotFlashing 1s infinite alternate;
                    animation-delay: 0s;
                }
                .dot-flashing::after {
                    left: 9px;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background-color: #3f51b5;
                    color: #3f51b5;
                    animation: dotFlashing 1s infinite alternate;
                    animation-delay: 1s;
                }
                @keyframes dotFlashing {
                    0% { opacity: 0; }
                    50%, 100% { opacity: 1; }
                }
                .font-inter {
                    font-family: 'Inter', sans-serif;
                }
            `}</style>
        </div>
    );
};

export default App;
