import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2, Bot, User, AlertTriangle } from 'lucide-react';

// --- Configuration ---
const GEMINI_MODEL = "gemini-2.5-flash-preview-09-2025";
const API_KEY = ""; // Provided by the Canvas environment

// System prompt instructing the AI how to behave and what data to use (KSh pricing)
const systemInstruction = {
  parts: [{
    text: `You are Max, the friendly and professional lead qualification bot for MaxDevs. Your primary goal is to guide clients to the correct service package using the provided KSh pricing and detailed product information.

### CONVERSATIONAL RULES:
1. **Initial Greeting:** Always start by warmly confirming the three main options: "New Website, Quick Update/Fix, or Complete Redesign." (This is already handled by initialBotMessage in the component).
2. **Qualification/Recommendation:** When the user selects a service category, immediately provide the specific package recommendations and pricing from the reference data below.
    - **If 'Quick Update/Fix':** Recommend the **Basic Update Package** (**KSh 12,000**) as the starting point. Clarify that these updates top out at **KSh 40,000**.
    - **If 'New Website':** Ask for the user's business type (e.g., informational, e-commerce) to recommend the appropriate package: **Startup** (**KSh 20,000**), **Professional** (**KSh 45,000**), or **Enterprise** (Starts at **KSh 80,000**).
    - **If 'Complete Redesign':** Immediately recommend the mandatory **Initial Site Audit** (**KSh 10,000**), emphasizing that it is credited toward the final project.
3. **Complex Projects:** If the user mentions "e-commerce," "custom API," or a "complex system," guide them toward the **Enterprise** package or the custom project range of **KSh 40,000 to KSh 120,000**.
4. **General Questions (Payment/Roadmap):** Retrieve information directly from the reference sections (e.g., Payment Terms from Section 5).

### MAXDEVS REFERENCE DATA (KSh Pricing):
1. Quick Update/Fix: Starts at **KSh 12,000** (Basic Update Package, max KSh 40,000).
2. New Website Packages:
    - **Startup Package:** **KSh 20,000** (Ideal for basic informational sites).
    - **Professional Package:** **KSh 45,000** (Ideal for growing SMBs with CMS/Blog).
    - **Enterprise/E-commerce:** Starts at **KSh 80,000** (For complex features, payments, APIs).
3. Redesign/Complex Systems Range: **KSh 40,000 to KSh 120,000**.
4. Audit: Initial Site Audit: **KSh 10,000** (Mandatory for redesigns, credited to final project).
5. Payment Terms: Standard: 50% Upfront, 25% Milestone, 25% Launch. Installment plans available for projects over **KSh 100,000**.
6. System Roadmap: Mention the 5-phase methodology (Discovery, Design, Development, QA, Launch) for projects over KSh 40,000.

Always use clear, professional, and encouraging language. Use markdown for bolding key package names and prices.`
  }]
};

// --- Tailwind Configuration & Utility Functions ---

// Custom class name utility (cn) to conditionally join class strings
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Define a simple Button component using Tailwind classes
const Button = ({ onClick, children, className, size = 'default', disabled = false }) => {
  const baseClasses = "rounded-xl font-semibold transition-all duration-200 shadow-md active:scale-[0.98]";

  const sizeClasses = {
    default: "px-4 py-2 text-sm",
    icon: "w-10 h-10 flex items-center justify-center",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        baseClasses,
        sizeClasses[size],
        // NOTE: We rely on the parent application defining these custom CSS variables
        'bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// Define a simple Input component using Tailwind classes
const Input = ({ value, onChange, onKeyPress, placeholder, className, type = 'text', disabled = false }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      disabled={disabled}
      className={cn(
        "flex h-10 w-full rounded-xl border border-gray-300 bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 transition-colors",
        className
      )}
    />
  );
};

// --- Gemini API Handler ---

const getGeminiResponse = async (chatHistory) => {
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${API_KEY}`;

  // Format history for the API (role: user/model)
  const contents = chatHistory.map(msg => ({
    role: msg.type === 'user' ? 'user' : 'model',
    parts: [{ text: msg.text }],
  }));

  const payload = {
    contents: contents,
    systemInstruction: systemInstruction,
  };

  let attempt = 0;
  const maxRetries = 5;

  while (attempt < maxRetries) {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorBody = await response.json();
        console.error("API Call Response Error:", errorBody);

        // Specific check for the 403 error from the API response (API Key issue)
        if (errorBody.error?.code === 403) {
             return "API Key Missing or Invalid. Please ensure the environment provides the necessary authentication.";
        }

        throw new Error(`API error: ${response.statusText}`);
      }

      const result = await response.json();
      const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (text) {
        return text;
      } else {
        return "Sorry, I ran into an issue finding the right answer. Please try phrasing your question differently.";
      }
    } catch (error) {
      attempt++;
      if (attempt >= maxRetries) {
        console.error("Max Bot: Max retries reached. API call failed.", error);
        return error.message.includes('API Key Missing')
          ? error.message // Pass the specific API key error
          : "I'm currently unable to connect to our intelligent assistant. Please try again in a moment.";
      }
      // Exponential backoff
      const delay = Math.pow(2, attempt) * 1000 + Math.random() * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};


// --- ChatBot Component ---

export default function ChatBot() {
  // Initial message is defined here
  const initialBotMessage = "Hi, I'm **Max**, your assistant! Welcome to MaxDevs. I can help you find the right solution. Do you need a **New Website**, a **Quick Update/Fix** for an existing site, or a **Complete Redesign**?";

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: initialBotMessage, id: Date.now() },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatError, setChatError] = useState(null);
  const chatWindowRef = useRef(null);

  const handleSend = async () => {
    const userMessage = input.trim();
    if (!userMessage || isLoading || chatError) return;

    // 1. Add user message
    setMessages((prev) => [...prev, { type: "user", text: userMessage, id: Date.now() }]);
    setInput("");
    setIsLoading(true);

    try {
      // 2. Call Gemini API with history
      const historyToSend = [
        ...messages,
        { type: "user", text: userMessage, id: Date.now() }
      ];

      setChatError(null); // Clear previous errors before attempt
      const responseText = await getGeminiResponse(historyToSend);

      // Check for error messages returned as text (from getGeminiResponse)
      if (responseText.includes("API Key Missing or Invalid") || responseText.includes("I'm currently unable to connect")) {
          setChatError(responseText);
          // Restore input for user to re-read, as the message wasn't processed by AI
          setInput(userMessage);
          return;
      }

      // 3. Add bot response
      setMessages((prev) => [...prev, { type: "bot", text: responseText, id: Date.now() + 1 }]);

    } catch (error) {
      console.error("Critical Network/Fetch Error:", error);
      setMessages((prev) => [...prev, { type: "bot", text: "A critical network error occurred. Please check your connection and try again.", id: Date.now() + 1 }]);
      setChatError("A critical network error occurred. Check your console for details.");
    } finally {
      // 4. End loading
      setIsLoading(false);
    }
  };

  // Scroll to bottom of chat window when messages or loading state change
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const toggleChat = () => setIsOpen(!isOpen);

  // Animated loading dots for a more engaging feel
  const LoadingDots = () => (
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
    </div>
  );

  return (
    <>
      {/* Custom styles for the bot to ensure proper colors and animation */}
      <style>
        {`
        /* Custom Tailwind Colors (Must be defined in the main app's CSS, but repeated here for completeness) */
        :root {
          --color-primary: #007bff; /* A clean blue for professionalism */
          --color-secondary: #e6f0ff; /* Light blue for backgrounds (bot messages) */
          --color-accent: #10b981; /* Green for key elements/CTAs/User messages */
          --color-primary-foreground: #ffffff;
          --color-secondary-foreground: #1f2937;
          --color-accent-foreground: #ffffff;
        }

        .bg-primary { background-color: var(--color-primary); }
        .text-primary-foreground { color: var(--color-primary-foreground); }
        .bg-secondary { background-color: var(--color-secondary); }
        .text-secondary-foreground { color: var(--color-secondary-foreground); }
        .bg-accent { background-color: var(--color-accent); }
        .text-accent-foreground { color: var(--color-accent-foreground); }

        /* Custom Pulse for Bot Button */
        @keyframes pulse-subtle {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          50% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 3s infinite;
        }
        .shadow-3xl { box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2); }
        `}
      </style>

      {/* Chat Button with subtle pulse effect when closed */}
      <button
        onClick={toggleChat}
        className={cn(
          "fixed bottom-6 right-6 z-50 bg-accent text-accent-foreground p-4 rounded-full shadow-2xl transition-transform duration-300 transform",
          "hover:scale-105 active:scale-100",
          !isOpen && "animate-pulse-subtle" // Custom pulse for engagement when closed
        )}
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[90vw] max-w-md bg-white border border-gray-200 rounded-xl shadow-3xl transition-all duration-300 overflow-hidden flex flex-col",
          // Responsiveness adjustment: move window up slightly on mobile
          "sm:bottom-24 sm:right-6",
          "xs:bottom-16 xs:right-4",
          isOpen ? "opacity-100 translate-y-0 h-[500px]" : "opacity-0 translate-y-4 pointer-events-none h-0"
        )}
      >
        <div className="p-4 border-b border-gray-100 bg-primary text-primary-foreground rounded-t-xl flex justify-between items-center">
          <h3 className="font-bold text-lg">Max (AI Assistant)</h3>
          <button onClick={toggleChat} className="text-primary-foreground/80 hover:text-primary-foreground">
            <X size={20} />
          </button>
        </div>

        <div ref={chatWindowRef} id="chat-window" className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {/* Error Display Banner */}
          {chatError && (
            <div className="p-3 bg-red-100 text-red-700 rounded-lg border border-red-300 flex items-start">
              <AlertTriangle size={18} className="mr-2 mt-0.5 flex-shrink-0" />
              <div className='flex-1'>
                 <strong>AI Connection Error:</strong> {chatError}
              </div>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "p-3 rounded-xl max-w-[85%] text-sm shadow-md flex items-start",
                message.type === "bot"
                  ? "bg-secondary text-secondary-foreground rounded-tl-none mr-auto"
                  : "bg-accent text-accent-foreground ml-auto rounded-br-none flex-row-reverse" // Use flex-row-reverse for user messages
              )}
            >
              {/* Icon (always placed at the start/end of the flex row) */}
              <div className={cn('flex-shrink-0', message.type === 'bot' ? 'mr-2' : 'ml-2', 'pt-1')}>
                {message.type === 'bot' ? <Bot size={16} className="text-primary" /> : <User size={16} className="text-accent-foreground" />}
              </div>

              {/* Content Wrapper (Name + Message) */}
              <div className='flex-1 flex flex-col'>
                {/* Sender Name (Updated to Max) */}
                <div className={cn(
                    "text-xs font-semibold mb-1",
                    message.type === 'bot' ? 'text-primary' : 'text-accent-foreground/90 text-right'
                )}>
                    {message.type === 'bot' ? 'Max' : 'Client'}
                </div>

                {/* Message Content */}
                <p dangerouslySetInnerHTML={{ __html: message.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </div>
            </div>
          ))}
          {/* Typing Indicator */}
          {isLoading && (
            <div className="p-3 rounded-xl max-w-[85%] text-sm shadow-md bg-secondary text-secondary-foreground rounded-tl-none flex items-center">
              <Bot size={16} className="text-primary mr-2" />
              <LoadingDots />
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-200 bg-white flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder={isLoading ? "Please wait for a response..." : (chatError ? "Cannot chat due to API error" : "Ask MaxDevs a question...")}
            className="flex-1 border-gray-300 focus:border-primary"
            disabled={isLoading || !!chatError}
          />
          <Button
            onClick={handleSend}
            size="icon"
            className="bg-primary hover:bg-primary/90"
            disabled={isLoading || !input.trim() || !!chatError}
          >
            {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
          </Button>
        </div>
      </div>
    </>
  );
}
