import Image from "next/image";

export default function Navbar() {
  const links = [
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Acerca" },
    { href: "#clientes", label: "Clientes" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-md shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/Logo_neuralcraft.png"     // o /logo.png
            alt="NeuralCraft"
            width={70}
            height={55}
            priority
          />
          <span className="font-semibold tracking-tight">
            NeuralCraft
          </span>
        </a>
        
        {/* <a href="#top" className="font-semibold tracking-tight">
          NeuralCraft
        </a> */}

        <div className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-neutral-200 transition hover:text-[rgb(var(--accent))]"
            >
              {l.label}
            </a>
          ))}
        </div>


        <a
          href="#contacto"
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-950 hover:bg-neutral-200"
        >
          Hablemos
        </a>
      </nav>
    </header>
  );
}
