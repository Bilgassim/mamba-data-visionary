import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Received contact email request");
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    console.log(`Processing email from: ${name} (${email})`);

    // Send email to you (the website owner)
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Change this to your verified domain
      to: ["boulkassoum2002@gmail.com"], // Your email
      replyTo: email, // Visitor's email for easy reply
      subject: `[Portfolio Contact] ${subject}`,
      html: `
        <h2>Nouveau message depuis votre portfolio</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to visitor
    await resend.emails.send({
      from: "Mohamed Boulkassoum <onboarding@resend.dev>",
      to: [email],
      subject: "Message reçu - Mohamed Boulkassoum",
      html: `
        <h2>Merci pour votre message, ${name}!</h2>
        <p>J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais.</p>
        <hr />
        <p><em>Votre message:</em></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr />
        <p>Cordialement,<br>Mohamed Boulkassoum</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
