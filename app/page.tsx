import Navbar from "../components/Navbar";
import Section from "../components/Section";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Reveal from "../components/Reveal";
import Stagger from "../components/Stagger";

const MODE: "startup" | "institucional" = "institucional";

const copy = {
  institucional: {
    heroTitle: "Ingeniería aplicada a la Inteligencia Artificial",
    heroP1:
      "Desarrollamos soluciones tecnológicas que integran inteligencia artificial, analítica avanzada y software a medida para mejorar procesos, trazabilidad y toma de decisiones en organizaciones y organismos públicos.",
    heroP2:
      "Trabajamos con criterios de calidad, seguridad y escalabilidad, facilitando la integración con sistemas existentes y garantizando continuidad operativa.",
    ctaPrimary: "Conocer servicios",
    ctaSecondary: "Solicitar reunión",
    ctaTercero: "Experiencia",
    contactSubtitle:
      "Describí tu necesidad y te proponemos un enfoque de trabajo con alcance, hitos y plazos.",
  },

  startup: {
    heroTitle: "Construimos soluciones de IA listas para producción",
    heroP1:
      "Diseñamos y desarrollamos productos digitales que integran IA, analítica y software a medida para acelerar resultados.",
    heroP2:
      "Combinamos ingeniería, ejecución rápida y tecnología moderna para pasar de idea a MVP y de MVP a escala.",
    ctaPrimary: "Ver servicios",
    ctaSecondary: "Agendar reunión",
    ctaTercero: "Experiencia",
    contactSubtitle:
      "Contanos tu desafío y te respondemos con una propuesta clara y accionable.",
  },
};

export default function Page() {
  // ✅ Cards para fondo claro
  const card = "rounded-2xl card-light";
  const cardHover =
    "rounded-2xl card-light transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(15,23,42,0.10)]";


  // ✅ Inputs para fondo claro
  const input =
    "rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-[rgba(59,130,246,0.18)] transition";

  return (
    <main id="top">
      <Navbar />
      <WhatsAppFloat />

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* glows */}
        <div className="pointer-events-none absolute -top-24 left-[-120px] h-80 w-80 rounded-full bg-[rgba(59,130,246,0.18)] blur-3xl" />
        <div className="pointer-events-none absolute top-10 right-[-160px] h-96 w-96 rounded-full bg-[rgba(14,165,233,0.12)] blur-3xl" />

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          {/* COLUMNA IZQUIERDA */}
          <div>
            {/* chip */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700 hover:border-slate-300 transition">
              <span className="h-2 w-2 rounded-full accent-bg" />
              IA • Desarrollo de Software • Consultorías Informáticas • Smart Cities • Servicio IT
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              {copy[MODE].heroTitle}
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700">
              {copy[MODE].heroP1}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700">
              {copy[MODE].heroP2}
            </p>


            {/* CTAs */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#servicios"
                className="rounded-full hero-link px-5 py-3 text-sm font-semibold transition"
              >
                {copy[MODE].ctaPrimary}
              </a>

              <a
                href="#contacto"
                className="rounded-full hero-link px-5 py-3 text-sm font-semibold transition"
              >
                {copy[MODE].ctaSecondary}
              </a>

              <a
                href="#experiencia"
                className="rounded-full hero-link px-5 py-3 text-sm font-semibold transition"
              >
                {copy[MODE].ctaTercero}
              </a>
            </div>


            {/* stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 text-center">
              <div className={`${card} p-4`}>
                <div className="text-xl font-semibold text-slate-950">
                  +20 años
                </div>
                <div className="text-xs text-slate-600">
                  Experiencia en sistemas
                </div>
              </div>

              <div className={`${card} p-4`}>
                <div className="text-xl font-semibold text-slate-950">
                  Gestión
                </div>
                <div className="text-xs text-slate-600">Procesos y control</div>
              </div>

              <div className={`${card} p-4`}>
                <div className="text-xl font-semibold text-slate-950">
                  Arquitectura
                </div>
                <div className="text-xs text-slate-600">Escalable y segura</div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA (REVEAL) */}
          <Reveal className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-[rgba(59,130,246,0.10)] blur-2xl" />

            <div className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur">
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 transition hover:border-slate-300">
                  <div className="text-sm font-semibold text-slate-950">
                    IA & Automatización
                  </div>
                  <p className="mt-2 text-sm text-slate-700">
                    Asistentes inteligentes, automatización documental,
                    clasificación de información y generación de contenido con
                    IA.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 transition hover:border-slate-300">
                  <div className="text-sm font-semibold text-slate-950">
                    Analítica & BI
                  </div>
                  <p className="mt-2 text-sm text-slate-700">
                    Tableros ejecutivos, KPIs, modelos predictivos y pipelines
                    de datos para toma de decisiones.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 transition hover:border-slate-300">
                  <div className="text-sm font-semibold text-slate-950">
                    Smart Cities & Software
                  </div>
                  <p className="mt-2 text-sm text-slate-700">
                    Plataformas digitales, integraciones, servicios al ciudadano
                    y desarrollo a medida con foco en calidad y seguridad.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["MVP rápido", "Escalable", "Seguro", "Integrable"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICIOS */}
      <Section
        id="servicios"
        title="Nuestros servicios"
        subtitle="Soluciones modulares, escalables y alineadas a las necesidades de cada organización."
      >
        <div className="section-light rounded-3xl p-6 md:p-10">
          <Stagger className="grid gap-4 md:grid-cols-3">
            {[
              {
                t: "IA Generativa",
                d: "Asistentes inteligentes, automatización documental, clasificación de información, búsqueda semántica y generación de respuestas con criterios de trazabilidad.",
              },
              {
                t: "Analítica & BI",
                d: "Tableros ejecutivos, indicadores de gestión, modelos predictivos y pipelines de datos para la toma de decisiones basada en evidencia.",
              },
              {
                t: "Smart Cities",
                d: "Plataformas de gestión urbana, interoperabilidad de sistemas, analítica territorial y optimización de servicios al ciudadano.",
              },
              {
                t: "Desarrollo de Software",
                d: "Diseño y desarrollo de aplicaciones web y móviles, APIs e integraciones. Modernización y evolución de sistemas existentes.",
              },
              {
                t: "Cloud & DevOps",
                d: "Arquitecturas escalables, automatización de despliegues, monitoreo, rendimiento y optimización de recursos.",
              },
              {
                t: "Ciberseguridad",
                d: "Evaluaciones de seguridad, control de accesos, hardening de sistemas y adopción de buenas prácticas.",
              },
            ].map((c) => (
              <div key={c.t} className={`${cardHover} card-accent p-7`}>
                <h3 className="pt-4 text-lg font-semibold text-slate-950">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{c.d}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* NOSOTROS */}
      <Section
        id="nosotros"
        title="Acerca de NeuralCraft"
        subtitle="Una empresa tecnológica con foco en ingeniería, calidad y resultados."
      >
        <div className="section-light rounded-3xl p-6 md:p-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className={`${card} p-6`}>
              <p className="text-sm text-slate-700">
                NeuralCraft es una empresa tecnológica fundada por ingenieros con
                más de 20 años de experiencia en sistemas, gestión de proyectos
                y modernización tecnológica, tanto en el sector público como
                privado.
              </p>
              <p className="mt-3 text-sm text-slate-700">
                Acompañamos a las organizaciones desde el diagnóstico hasta la
                implementación, priorizando continuidad operativa, seguridad,
                integración con sistemas existentes y resultados medibles.
              </p>
            </div>

            <div className={`${card} p-6`}>
              <h3 className="font-semibold text-slate-950">Diferenciales</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>Enfoque en ingeniería y calidad.</li>
                <li>Experiencia en contextos complejos y regulados.</li>
                <li>Integración con sistemas y datos existentes.</li>
                <li>Escalabilidad y continuidad operativa.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* EXPERIENCIA */}
      <Section
        id="experiencia"
        title="Áreas de experiencia y referencias"
        subtitle="Experiencia en proyectos de modernización, analítica y desarrollo para organismos y organizaciones."
      >
        <div className="section-light rounded-3xl p-6 md:p-10">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                t: "Organismos públicos",
                d: "Soluciones para modernización, analítica y automatización de procesos, con foco en continuidad y seguridad.",
              },
              {
                t: "Empresas e industria",
                d: "Plataformas digitales, tableros ejecutivos e integración de sistemas para eficiencia operativa.",
              },
              {
                t: "Servicios y organizaciones",
                d: "Soluciones escalables orientadas a mejorar atención, procesos internos y toma de decisiones.",
              },
            ].map((x) => (
              <div key={x.t} className={`${cardHover} card-accent p-7`}>
                <div className="pt-4 text-lg font-semibold text-slate-950">{x.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{x.d}</p>
                <p className="mt-3 text-xs text-slate-500">
                  * Algunos proyectos se presentan de forma referencial por confidencialidad.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTACTO */}
      <Section id="contacto" title="Contacto" subtitle={copy[MODE].contactSubtitle}>
        <div className="section-light rounded-3xl p-6 md:p-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className={`${card} p-6`}>
              <h3 className="font-semibold text-slate-950">Datos</h3>
              <p className="mt-2 text-sm text-slate-700">
                Sitio: www.neuralcraft.com.ar
              </p>
              <p className="text-sm text-slate-700">
                Email: contacto@neuralcraft.com.ar
              </p>
              <p className="text-sm text-slate-700">WhatsApp: (botón flotante)</p>
              <p className="mt-4 text-xs text-slate-500">
                Si necesitás una propuesta formal, indicá alcance, plazos y
                contexto.
              </p>
              <p className="mt-3 text-xs text-slate-500">
                Tiempo de respuesta estimado: 24 a 48 hs hábiles.
              </p>
            </div>

            <form className={`${card} p-6`} action="/api/contact" method="post">
              <div className="grid gap-3">
                <input
                  name="name"
                  required
                  placeholder="Nombre y apellido"
                  className={input}
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className={input}
                />
                <input
                  name="company"
                  placeholder="Organización (opcional)"
                  className={input}
                />
                <textarea
                  name="message"
                  required
                  placeholder="Contanos qué necesitás"
                  rows={5}
                  className={input}
                />
                <button
                  className="rounded-xl btn-primary-light px-4 py-3 text-sm font-semibold transition shadow-sm"
                  type="submit"
                >
                  Enviar consulta
                </button>

                <p className="text-xs text-slate-500">
                  Al enviar, serás redirigido a una página de éxito para tracking.
                </p>
              </div>
            </form>
          </div>
        </div>
      </Section>

      <footer className="mt-10 border-t border-slate-200 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-medium text-slate-700">
              © {new Date().getFullYear()} NeuralCraft
            </span>
            <span className="text-xs text-slate-500">
              IA • Desarrollo de Software • Consultoría • Smart Cities • Servicios IT
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <a className="text-slate-600 hover:text-[rgb(var(--accent))] transition" href="#servicios">
              Servicios
            </a>
            <a className="text-slate-600 hover:text-[rgb(var(--accent))] transition" href="#nosotros">
              Acerca
            </a>
            <a className="text-slate-600 hover:text-[rgb(var(--accent))] transition" href="#experiencia">
              Experiencia
            </a>
            <a className="text-slate-600 hover:text-[rgb(var(--accent))] transition" href="#contacto">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
