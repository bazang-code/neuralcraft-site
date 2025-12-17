"use client";

import { useEffect } from "react";

export default function Success() {
  useEffect(() => {
    // Evento GA4: lead
    // @ts-ignore
    window.gtag?.("event", "generate_lead", {
      method: "contact_form",
      page: "/success",
    });
  }, []);

  return (
    <main className="mx-auto max-w-2xl px-4 py-24">
      <h1 className="text-3xl font-semibold">¡Gracias!</h1>
      <p className="mt-3 text-neutral-300">
        Recibimos tu mensaje. En breve nos ponemos en contacto.
      </p>

      <a
        href="/#contacto"
        className="mt-8 inline-block rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-950 hover:bg-neutral-200"
      >
        Volver al sitio
      </a>
    </main>
  );
}

