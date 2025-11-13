import { serve } from 'std/server';

interface RequestBody {
  message: string;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const packages = [
  { name: 'Startup Package', price: '$1,800', description: '5 pages, mobile responsive, basic SEO' },
  { name: 'Professional Package', price: '$4,500', description: '10 pages, advanced features, analytics' },
  { name: 'Enterprise Package', price: 'Custom', description: 'Unlimited pages, e-commerce, custom features' }
];

const getSimulatedResponse = (input: string): string => {
  const message = input.toLowerCase();

  if (message.includes('package') || message.includes('price') || message.includes('cost')) {
    return `Great question! We offer three main packages:\n\n${packages.map(p => `• ${p.name} - ${p.price}\n  ${p.description}`).join('\n\n')}\n\nWhich package interests you most?`;
  }

  if (message.includes('service') || message.includes('what do you do')) {
    return "We specialize in:\n• Custom website development\n• E-commerce solutions\n• Website redesign & optimization\n• Responsive mobile-first design\n• SEO and performance optimization\n\nWhat type of project do you have in mind?";
  }

  if (message.includes('timeline') || message.includes('how long')) {
    return "Typical timelines:\n• Startup Package: 2-3 weeks\n• Professional Package: 4-6 weeks\n• Enterprise Package: 6-12 weeks\n\nWe can discuss expedited options for urgent projects. Would you like to get started?";
  }

  if (message.includes('contact') || message.includes('quote') || message.includes('start')) {
    return "Perfect! I'd be happy to connect you with our team. You can:\n1. Fill out our contact form\n2. Call us at +1 (555) 123-4567\n3. Email us at hello@maxdevs.com\n\nWould you like me to direct you to the quote form?";
  }

  if (message.includes('support') || message.includes('help')) {
    return "I'm here to help! Our support includes:\n• 24/7 emergency support\n• Post-launch bug fixes (30-90 days)\n• Ongoing maintenance plans available\n\nWhat specific support do you need?";
  }

  if (message.includes('portfolio') || message.includes('example')) {
    return "Check out our portfolio to see:\n• 45% reduction in bounce rates\n• 60% improvement in conversion rates\n• Award-winning designs\n\nWould you like a specific type of example?";
  }

  if (message.includes('about') || message.includes('company')) {
    return "MaxDevs is a full-service web development agency focused on delivering results-driven solutions. Our team specializes in React, responsive design, and conversion optimization.";
  }

  if (message.includes('ecommerce') || message.includes('shop')) {
    return "We build powerful e-commerce solutions! Our Enterprise package includes catalog management, secure payments, inventory, shopping cart, and customer accounts. Would you like to discuss your e-commerce needs?";
  }

  return "Thanks for your message! I'd love to help you find the perfect solution for your project. Could you tell me more about your website type, timeline, or budget?";
};

serve(async (req) => {
  try {
    const { message }: RequestBody = await req.json();

    if (!message || !message.trim()) {
      return new Response(JSON.stringify({ error: 'No message provided' }), { status: 400 });
    }

    const reply = getSimulatedResponse(message);

    return new Response(JSON.stringify({ reply }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    });
  } catch (err) {
    console.error('Error in chat function:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
});
