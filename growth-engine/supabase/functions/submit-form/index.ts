const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface FormSubmission {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: FormSubmission = await req.json();
    console.log('Received form submission:', formData);

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    const GOOGLE_SHEETS_WEBHOOK_URL = Deno.env.get('GOOGLE_SHEETS_WEBHOOK_URL');

    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    // Send email via Resend API
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'MaxDevs <onboarding@resend.dev>',
        to: ['underworldhacker7@gmail.com'],
        subject: `New Quote Request from ${formData.name}`,
        html: `
          <h1>New Quote Request</h1>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'N/A'}</p>
          <p><strong>Company:</strong> ${formData.company || 'N/A'}</p>
          <p><strong>Service:</strong> ${formData.service}</p>
          <p><strong>Budget:</strong> ${formData.budget || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('Resend API error:', errorText);
      throw new Error('Failed to send email');
    }

    console.log('Email sent successfully');

    // Log to Google Sheets if webhook URL is configured
    if (GOOGLE_SHEETS_WEBHOOK_URL) {
      const sheetsResponse = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || '',
          company: formData.company || '',
          service: formData.service,
          budget: formData.budget || '',
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (sheetsResponse.ok) {
        console.log('Successfully logged to Google Sheets');
      } else {
        console.error('Failed to log to Google Sheets:', await sheetsResponse.text());
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Your request is now in review. We\'ll contact you within 24 hours!'
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in submit-form function:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
