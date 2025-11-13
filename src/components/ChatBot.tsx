import { useState, useEffect, useRef } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';

interface Message {
  role: 'user' | 'assistant' | 'typing';
  content: string;
}

const packages = [
  { name: 'Startup Package', price: '$1,800', description: '5 pages, mobile responsive, basic SEO' },
  { name: 'Professional Package', price: '$4,500', description: '10 pages, advanced features, analytics' },
  { name: 'Enterprise Package', price: 'Custom', description: 'Unlimited pages, e-commerce, custom features' }
];

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const [typingDots, setTypingDots] = useState('');
  const [typingMessage, setTypingMessage] = useState('');

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typingMessage]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        role: 'assistant',
        content: "Hi! I'm Max from MaxDevs. 👋 I'm here to help you with your web development project. What type of website or app are you looking to build?"
      }]);
    }
  }, [isOpen, messages.length]);

  const getSimulatedResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    if (input.includes('package') || input.includes('price') || input.includes('cost') || input.includes('pricing')) {
      return `Great question! We offer three main packages:\n\n${packages.map(p => `• ${p.name} - ${p.price}\n  ${p.description}`).join('\n\n')}\n\nWhich package interests you most?`;
    }
    if (input.includes('service') || input.includes('what do you do') || input.includes('help with')) {
      return "We specialize in:\n• Custom website development\n• E-commerce solutions\n• Website redesign & optimization\n• Responsive mobile-first design\n• SEO and performance optimization\n\nWhat type of project do you have in mind?";
    }
    if (input.includes('how long') || input.includes('timeline') || input.includes('time') || input.includes('when')) {
      return "Typical timelines:\n• Startup Package: 2-3 weeks\n• Professional Package: 4-6 weeks\n• Enterprise Package: 6-12 weeks\n\nWe can discuss expedited options for urgent projects. Would you like to get started?";
    }
    if (input.includes('contact') || input.includes('quote') || input.includes('start') || input.includes('get started')) {
      return "Perfect! I'd be happy to connect you with our team. You can:\n1. Fill out our contact form for a detailed quote\n2. Call us at +1 (555) 123-4567\n3. Email us at hello@maxdevs.com\n\nWould you like me to direct you to the quote form?";
    }
    if (input.includes('support') || input.includes('help') || input.includes('issue') || input.includes('problem')) {
      return "I'm here to help! Our support includes:\n• 24/7 emergency support for critical issues\n• 30-90 days post-launch bug fixes (depending on package)\n• Ongoing maintenance plans available\n\nWhat specific support do you need?";
    }
    if (input.includes('portfolio') || input.includes('example') || input.includes('work') || input.includes('previous')) {
      return "We've delivered excellent results for our clients! Check out our portfolio to see:\n• 45% average reduction in bounce rates\n• 60% improvement in conversion rates\n• Award-winning designs\n\nVisit our Portfolio page to see detailed case studies. Would you like a specific type of example?";
    }
    if (input.includes('about') || input.includes('who are you') || input.includes('company')) {
      return "MaxDevs is a full-service web development agency focused on delivering results-driven solutions. We've helped dozens of businesses transform their online presence with modern, high-performance websites.\n\nOur team specializes in React, responsive design, and conversion optimization. What else would you like to know?";
    }
    if (input.includes('ecommerce') || input.includes('e-commerce') || input.includes('shop') || input.includes('store')) {
      return "We build powerful e-commerce solutions! Our Enterprise package includes:\n• Product catalog management\n• Secure payment processing\n• Inventory management\n• Shopping cart & checkout\n• Customer accounts\n\nWould you like to discuss your e-commerce needs?";
    }
    return "Thanks for your message! I'd love to help you find the perfect solution for your project. Could you tell me more about:\n• What type of website you need\n• Your timeline\n• Your budget range\n\nOr feel free to ask about our packages, services, or anything else!";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Typing dots
    setTypingMessage('Typing');
    let dotCount = 0;
    const dotsInterval = setInterval(() => {
      dotCount = (dotCount + 1) % 4;
      setTypingDots('.'.repeat(dotCount));
    }, 500);

    // After 3 seconds, show message with typewriter effect
    setTimeout(() => {
      clearInterval(dotsInterval);
      setTypingMessage('');
      const response = getSimulatedResponse(input);

      let index = 0;
      const typeInterval = setInterval(() => {
        index++;
        setMessages(prev => [
          ...prev.filter(msg => msg.role !== 'assistant' || msg.content !== response.slice(0, index-1)),
          { role: 'assistant', content: response.slice(0, index) }
        ]);
        if (index >= response.length) clearInterval(typeInterval);
      }, 30);
    }, 3000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[90vw] max-w-md sm:w-80 md:w-96 h-[70vh] sm:h-[600px] bg-background border border-border rounded-2xl shadow-2xl flex flex-col z-50 animate-scale-in">
          <div className="bg-primary text-primary-foreground p-4 rounded-t-2xl flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">Max - MaxDevs Assistant</h3>
              <p className="text-sm opacity-90">Usually replies instantly</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-sm'
                        : 'bg-foreground/5 text-foreground rounded-bl-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">
                      {msg.role === 'assistant' && typingMessage === 'Typing' ? `Typing${typingDots}` : msg.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button
                onClick={sendMessage}
                disabled={!input.trim()}
                size="icon"
                className="bg-primary hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
