const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');

    if (!OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY is not configured');
      throw new Error('OpenAI API key is not configured. Please add it in the secrets.');
    }

    if (!messages || !Array.isArray(messages)) {
      throw new Error('Invalid messages format');
    }

    console.log('Received chat request with', messages.length, 'messages');
    console.log('Using API key starting with:', OPENAI_API_KEY.substring(0, 7) + '...');

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are Max, a friendly and professional customer assistant for MaxDevs, a web development agency. Your role is to:

1. Greet visitors warmly and professionally
2. Ask about their web project goals (website, app, eCommerce, etc.)
3. Gather key information:
   - Project type and main goals
   - Required functionality
   - Timeline expectations
   - Budget range (refer to our packages: Startup £1,500-£2,500, Professional £3,000-£5,000, Enterprise/E-commerce £6,000+)

Keep responses concise (2-3 sentences max), friendly, and focused. Guide the conversation naturally toward understanding their needs. Always be helpful and never pushy.`
          },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      
      if (response.status === 401) {
        throw new Error('Invalid OpenAI API key. Please check your OPENAI_API_KEY secret.');
      } else if (response.status === 429) {
        throw new Error('OpenAI rate limit exceeded. Please try again later.');
      } else if (response.status === 500) {
        throw new Error('OpenAI service error. This may be due to an invalid API key or service issue. Please verify your API key.');
      }
      
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('OpenAI response received');

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error occurred' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
