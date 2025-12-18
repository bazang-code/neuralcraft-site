import React from "react";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-20">
      {/* Separador suave */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>

        {subtitle ? (
          <p className="mt-2 max-w-2xl text-neutral-300">{subtitle}</p>
        ) : null}

        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
