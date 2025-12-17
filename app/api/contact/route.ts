import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const company = String(form.get("company") || "");
    const message = String(form.get("message") || "");

    const resend = new Resend(process.env.RESEND_API_KEY);

    const to = process.env.CONTACT_TO_EMAIL || "bazang@gmail.com"; //contacto@neuralcraft.com.ar
    const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    await resend.emails.send({
      from,
      to,
      subject: `Nuevo contacto web - NeuralCraft (${name})`,
      replyTo: email,
      text:
        `Nuevo lead desde la web\n\n` +
        `Nombre: ${name}\n` +
        `Email: ${email}\n` +
        `Organización: ${company}\n\n` +
        `Mensaje:\n${message}\n`,
    });

    // Redirige a página de éxito para tracking
    return NextResponse.redirect(new URL("/success", req.url), { status: 303 });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar el mensaje." },
      { status: 500 }
    );
  }
}