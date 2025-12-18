import Navbar from "../components/Navbar";
import Section from "../components/Section";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function Page() {
  const card =
  "rounded-2xl border border-white/10 bg-white/5 shadow-sm backdrop-blur";
  const cardHover =
  "rounded-2xl border border-white/10 bg-white/5 shadow-sm backdrop-blur transition hover:bg-white/7 hover:border-white/20 hover:-translate-y-1 hover:shadow-lg";
  const input =
    "rounded-xl border border-white/10 bg-neutral-950/40 px-4 py-3 text-sm outline-none focus:border-white/30 focus:ring-2 focus:ring-white/10 transition";

  return (
    <main id="top">
      <Navbar />
      <WhatsAppFloat />

{/*       <div className="p-6 text-4xl font-bold text-white">
        Tailwind OK
      </div>
 */}

      {/* HERO */}
      <section className="relative border-b border-white/10 overflow-hidden">
        {/* glows */}
        <div className="pointer-events-none absolute -top-24 left-[-120px] h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute top-10 right-[-160px] h-96 w-96 rounded-full bg-white/5 blur-3xl" />

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-200">
              <span className="h-2 w-2 rounded-full bg-white/60" />
              IA • Smart Cities • Software
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Ingeniería aplicada a la Inteligencia Artificial
            </h1>

            <p className="mt-4 max-w-xl text-neutral-300">
              Diseñamos y desarrollamos soluciones tecnológicas que integran
              inteligencia artificial, analítica avanzada y software a medida
              para organizaciones y ciudades.
            </p>

            <p className="mt-4 max-w-xl text-neutral-300">
              En NeuralCraft combinamos experiencia en ingeniería, visión
              estratégica y tecnología moderna para resolver problemas reales,
              optimizar procesos y generar impacto medible.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#servicios"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-200 transition shadow-sm"
              >
                Ver servicios
              </a>
              <a
                href="#contacto"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Solicitar reunión
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-center">
              <div className={`${card} p-4`}>
                <div className="text-xl font-semibold">20+ años</div>
                <div className="text-xs text-neutral-300">Experiencia</div>
              </div>
              <div className={`${card} p-4`}>
                <div className="text-xl font-semibold">Enfoque</div>
                <div className="text-xs text-neutral-300">Resultados</div>
              </div>
              <div className={`${card} p-4`}>
                <div className="text-xl font-semibold">Arquitectura</div>
                <div className="text-xs text-neutral-300">Escalable</div>
              </div>
            </div>
          </div>

          {/* BLOQUE VISUAL */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-white/10 to-transparent blur-2xl" />

            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-8 shadow-sm backdrop-blur">
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-5 transition hover:border-white/20">
                  <div className="text-sm font-semibold">IA & Automatización</div>
                  <p className="mt-2 text-sm text-neutral-300">
                    Asistentes inteligentes, automatización documental,
                    clasificación de información y generación de contenido con IA.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-5 transition hover:border-white/20">
                  <div className="text-sm font-semibold">Analítica & BI</div>
                  <p className="mt-2 text-sm text-neutral-300">
                    Tableros ejecutivos, KPIs, modelos predictivos y pipelines de
                    datos para toma de decisiones.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-5 transition hover:border-white/20">
                  <div className="text-sm font-semibold">
                    Smart Cities & Software
                  </div>
                  <p className="mt-2 text-sm text-neutral-300">
                    Plataformas digitales, integraciones, servicios al ciudadano
                    y desarrollo a medida con foco en calidad y seguridad.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["MVP rápido", "Escalable", "Seguro", "Integrable"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <Section
        id="servicios"
        title="Nuestros servicios"
        subtitle="Soluciones modulares, escalables y alineadas a las necesidades de cada organización."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              t: "IA Generativa",
              d: "Implementación de asistentes inteligentes, automatización documental, clasificación de información y generación de contenido mediante modelos de IA.",
            },
            {
              t: "Analítica & BI",
              d: "Desarrollo de tableros ejecutivos, indicadores clave, modelos predictivos y pipelines de datos para la toma de decisiones.",
            },
            {
              t: "Smart Cities",
              d: "Plataformas de gestión urbana, interoperabilidad de sistemas, analítica territorial y mejora de servicios al ciudadano.",
            },
            {
              t: "Desarrollo de Software",
              d: "Diseño y desarrollo de aplicaciones web y móviles, APIs, integraciones y modernización de sistemas existentes.",
            },
            {
              t: "Cloud & DevOps",
              d: "Arquitecturas escalables, automatización de despliegues, monitoreo, rendimiento y optimización de costos.",
            },
            {
              t: "Ciberseguridad",
              d: "Evaluaciones de seguridad, monitoreo, hardening, control de accesos y adopción de buenas prácticas.",
            },
          ].map((c) => (
            <div key={c.t} className={`${cardHover} p-6`}>
              <h3 className="text-base font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-neutral-300">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* NOSOTROS */}
      <Section
        id="nosotros"
        title="Acerca de NeuralCraft"
        subtitle="Una empresa tecnológica con foco en ingeniería, calidad y resultados."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className={`${card} p-6`}>
            <p className="text-sm text-neutral-300">
              NeuralCraft es una empresa tecnológica fundada por ingenieros con
              más de 20 años de experiencia en sistemas, gestión de proyectos y
              transformación digital, tanto en el sector público como privado.
            </p>
            <p className="mt-3 text-sm text-neutral-300">
              Trabajamos con un enfoque práctico y orientado a resultados,
              acompañando a las organizaciones desde la definición del problema
              hasta la implementación de soluciones sostenibles y escalables.
            </p>
          </div>

          <div className={`${card} p-6`}>
            <h3 className="font-semibold">Diferenciales</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-300">
              <li>Enfoque en ingeniería y calidad.</li>
              <li>Experiencia en contextos complejos y regulados.</li>
              <li>Integración con sistemas existentes.</li>
              <li>Visión estratégica + ejecución técnica.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CLIENTES */}
      <Section
        id="clientes"
        title="Clientes y referencias"
        subtitle="Experiencia en proyectos para organismos públicos, empresas de servicios e industria."
      >
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
            <div key={x.t} className={`${cardHover} p-6`}>
              <div className="text-sm font-semibold">{x.t}</div>
              <p className="mt-2 text-sm text-neutral-300">{x.d}</p>
              <p className="mt-3 text-xs text-neutral-400">
                * Algunos proyectos se presentan de forma referencial por
                confidencialidad.
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACTO */}
      <Section
        id="contacto"
        title="Contacto"
        subtitle="Contanos tu necesidad y evaluamos juntos la mejor solución tecnológica para tu organización."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className={`${card} p-6`}>
            <h3 className="font-semibold">Datos</h3>
            <p className="mt-2 text-sm text-neutral-300">
              Sitio: www.neuralcraft.com.ar
            </p>
            <p className="text-sm text-neutral-300">
              Email: contacto@neuralcraft.com.ar
            </p>
            <p className="text-sm text-neutral-300">
              WhatsApp: (botón flotante)
            </p>
            <p className="mt-4 text-xs text-neutral-400">
              Si necesitás una propuesta formal, indicá alcance, plazos y
              contexto.
            </p>
          </div>

          <form
            className={`${card} p-6`}
            action="/api/contact"
            method="post"
          >
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
                className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-200 transition shadow-sm"
                type="submit"
              >
                Enviar consulta
              </button>

              <p className="text-xs text-neutral-400">
                Al enviar, serás redirigido a una página de éxito para tracking.
              </p>
            </div>
          </form>
        </div>
      </Section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} NeuralCraft</span>
          <span>IA • Smart Cities • Software</span>
        </div>
      </footer>
    </main>
  );
}
