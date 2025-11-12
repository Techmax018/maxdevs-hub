import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Welcome to MaxDevs! I can help you find the right solution. Do you need a New Website, a Quick Update/Fix for an existing site, or a Complete Redesign?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { type: "user", text: input }]);
    
    // Simple bot response logic
    setTimeout(() => {
      let response = "Thanks for your message! Our team will get back to you soon.";
      
      if (input.toLowerCase().includes("update") || input.toLowerCase().includes("fix")) {
        response = "For minor fixes on a small business site, the Basic Update Package at KSh 12,000 is usually ideal. Would you like to learn more?";
      } else if (input.toLowerCase().includes("new") || input.toLowerCase().includes("website")) {
        response = "Great! For new websites, we have packages starting at KSh 20,000. What type of business are you building for?";
      } else if (input.toLowerCase().includes("redesign")) {
        response = "For a complete redesign, we recommend starting with our Initial Site Audit at KSh 10,000. This is credited toward your final project cost.";
      }
      
      setMessages((prev) => [...prev, { type: "bot", text: response }]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-accent text-accent-foreground p-4 rounded-full shadow-large hover:scale-110 transition-transform"
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[90vw] max-w-md bg-card border border-border rounded-lg shadow-large transition-all duration-300",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <div className="p-4 border-b border-border bg-gradient-hero text-primary-foreground rounded-t-lg">
          <h3 className="font-semibold">MaxDevs Assistant</h3>
          <p className="text-sm text-primary-foreground/80">We're here to help!</p>
        </div>

        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "p-3 rounded-lg max-w-[85%]",
                message.type === "bot"
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-gradient-accent text-accent-foreground ml-auto"
              )}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-border flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon" className="bg-gradient-accent">
            <Send size={18} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
