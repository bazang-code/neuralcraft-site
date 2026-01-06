"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const links = [
    { href: "#servicios", label: "Servicios", id: "servicios" },
    { href: "#nosotros", label: "Acerca", id: "nosotros" },
    { href: "#experiencia", label: "Áreas de Experiencia", id: "experiencia" },
    { href: "#contacto", label: "Contacto", id: "contacto" },
  ];

  const [active, setActive] = useState<string>("");

  useEffect(() => {
  const ids = links.map((l) => l.href.replace("#", ""));

  const sections = ids
    .map((id) => document.getElementById(id))
    .filter(Boolean) as HTMLElement[];

  if (!sections.length) return;

  const onScroll = () => {
    const nav = document.querySelector("header") as HTMLElement | null;
    const navH = nav?.offsetHeight ?? 80;
    const guideY = navH + 24; // justo debajo del navbar

    let current = sections[0].id;
    let minDistance = Number.POSITIVE_INFINITY;

    for (const sec of sections) {
      const rect = sec.getBoundingClientRect();
      const distance = Math.abs(rect.top - guideY);

      // solo consideramos secciones cercanas al viewport
      if (rect.top <= guideY + 120 && distance < minDistance) {
        minDistance = distance;
        current = sec.id;
      }
    }

    setActive(current);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/70 transition-colors hover:border-[rgba(59,130,246,0.35)] ">
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-3">
          <div className="rounded-xl bg-white/80 p-1 ring-1 ring-slate-200 overflow-hidden">
            <Image
              src="/Logo_neuralcraft.png"
              alt="NeuralCraft"
              width={70}
              height={55}
              priority
              className="rounded-lg"
            />
          </div>
          <span className="font-semibold tracking-tight text-slate-950">
            NeuralCraft
          </span>
        </a>

        <div className="hidden gap-6 md:flex">
          {links.map((l) => {
            const isActive = active === l.id;

            return (
              <a
                key={l.href}
                href={l.href}
                className={[
                  "relative text-sm font-medium transition-colors",
                  // línea inferior
                  "after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0",
                  "after:bg-[rgb(var(--accent))] after:transition-all after:duration-300 after:-translate-x-1/2",
                  // hover
                  "hover:text-[rgb(var(--accent))] hover:after:w-full",
                  // activo vs normal
                  isActive
                    ? "text-[rgb(var(--accent))] after:w-full"
                    : "text-slate-700",
                ].join(" ")}
              >
                {l.label}
              </a>

            );
          })}
        </div>

        <a
          href="#contacto"
          className="
            rounded-full btn-primary-light px-4 py-2 text-sm font-semibold
            ring-1 ring-transparent
            hover:ring-[rgba(59,130,246,0.35)]
            transition shadow-sm
          "
        >
          Hablemos
        </a>

      </nav>
    </header>
  );
}
