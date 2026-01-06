import React from "react";
import Reveal from "./Reveal";

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
  const words = title.trim().split(/\s+/);
  const first = words[0] ?? "";
  const rest = words.slice(1).join(" ");

  return (
    <section id={id} className="relative py-8 md:py-14 scroll-mt-10 section-divider">
      {/* Separador suave (modo claro con acento azul) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(59,130,246,0.18)] to-transparent" />

      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-950">
          <span className="text-[rgb(var(--accent))]">{first}</span>{" "}
          <span>{rest}</span>
        </h2>

        {subtitle ? (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-700">
            {subtitle}
          </p>
        ) : null}


        <Reveal className="mt-10">{children}</Reveal>
      </div>
    </section>
  );
}
