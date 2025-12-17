import Navbar from "../components/Navbar";
import Section from "../components/Section";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function Page() {
  return (
    <main id="top">
      <Navbar />
      <WhatsAppFloat />

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm text-neutral-300">IA • Smart Cities • Software</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              NeuralCraft: ingeniería aplicada a la inteligencia artificial
            </h1>
            <p className="mt-4 max-w-xl text-neutral-300">
              Diseñamos soluciones modernas y escalables para organizaciones y ciudades:
              automatización inteligente, analítica avanzada, plataformas digitales y software a medida.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#servicios"
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-950 hover:bg-neutral-200"
              >
                Ver servicios
              </a>
              <a
                href="#contacto"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
              >
                Pedir una reunión
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xl font-semibold">20+ años</div>
                <div className="text-xs text-neutral-300">Experiencia</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xl font-semibold">IA aplicada</div>
                <div className="text-xs text-neutral-300">Impacto real</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xl font-semibold">Escalable</div>
                <div className="text-xs text-neutral-300">Cloud-ready</div>
              </div>
            </div>
          </div>

          {/* Bloque visual */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-8">
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-5">
                <div className="text-sm font-semibold">IA & Automatización</div>
                <p className="mt-2 text-sm text-neutral-300">
                  Asistentes inteligentes, generación de contenido, clasificación, extracción y flujos automatizados.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-5">
                <div className="text-sm font-semibold">Smart Cities</div>
                <p className="mt-2 text-sm text-neutral-300">
                  Analítica urbana, tableros de gestión, integración de datos y mejora de servicios al ciudadano.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-5">
                <div className="text-sm font-semibold">Software a medida</div>
                <p className="mt-2 text-sm text-neutral-300">
                  Web apps, APIs, integraciones, modernización de sistemas, observabilidad y seguridad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <Section
        id="servicios"
        title="Servicios"
        subtitle="Empezá con un MVP rápido y escalá a una plataforma robusta con arquitectura moderna."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              t: "IA Generativa",
              d: "Asistentes, automatización documental, búsqueda inteligente, resumen, clasificación y agentes.",
            },
            {
              t: "Analítica & BI",
              d: "Modelos predictivos, tableros ejecutivos, KPIs, data pipelines y gobierno de datos.",
            },
            {
              t: "Smart Cities",
              d: "Plataformas de gestión, integraciones, interoperabilidad y servicios al ciudadano.",
            },
            {
              t: "Desarrollo de Software",
              d: "Web/mobile, APIs, integraciones, sistemas a medida y modernización de legado.",
            },
            {
              t: "Cloud & DevOps",
              d: "CI/CD, contenedores, observabilidad, performance y escalabilidad.",
            },
            {
              t: "Ciberseguridad",
              d: "Hardening, monitoreo, auditorías, IAM, y buenas prácticas.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
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
        subtitle="Dos socios ingenieros con más de 20 años de experiencia en sistemas. Nos gustan los desafíos y emprender."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Qué nos diferencia</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-300">
              <li>Ingeniería-first: calidad, seguridad y escalabilidad.</li>
              <li>Orientación a resultados: eficiencia y adopción real.</li>
              <li>Integración con sistemas existentes.</li>
              <li>Experiencia en contextos exigentes (público y privado).</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Staff</h3>
            <p className="mt-2 text-sm text-neutral-300">
              Guillermo & Mauro (Ingenieros). Armamos células según proyecto: data, backend, frontend y devops.
            </p>
          </div>
        </div>
      </Section>

      {/* CLIENTES */}
      <Section
        id="clientes"
        title="Clientes / Referencias"
        subtitle="Podés empezar con referencias generales y luego sumar logos y casos públicos cuando lo decidan."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {["Sector público", "Industria y logística", "Salud y servicios"].map((x) => (
            <div key={x} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold">{x}</div>
              <p className="mt-2 text-sm text-neutral-300">
                Casos de uso: automatización, tableros, modernización, IA aplicada y optimización operativa.
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACTO */}
      <Section
        id="contacto"
        title="Contacto"
        subtitle="Contanos tu necesidad. Respondemos rápido y con una propuesta concreta."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Datos</h3>
            <p className="mt-2 text-sm text-neutral-300">Sitio: www.neuralcraft.com.ar</p>
            <p className="text-sm text-neutral-300">Email: contacto@neuralcraft.com.ar</p>
            <p className="text-sm text-neutral-300">WhatsApp: (botón flotante)</p>
            <p className="mt-4 text-xs text-neutral-400">
              Luego podemos sumar mapa, redes sociales y tracking avanzado.
            </p>
          </div>

          <form
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
            action="/api/contact"
            method="post"
          >
            <div className="grid gap-3">
              <input
                name="name"
                required
                placeholder="Nombre y apellido"
                className="rounded-xl border border-white/10 bg-neutral-950/40 px-4 py-3 text-sm outline-none focus:border-white/30"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="rounded-xl border border-white/10 bg-neutral-950/40 px-4 py-3 text-sm outline-none focus:border-white/30"
              />
              <input
                name="company"
                placeholder="Organización (opcional)"
                className="rounded-xl border border-white/10 bg-neutral-950/40 px-4 py-3 text-sm outline-none focus:border-white/30"
              />
              <textarea
                name="message"
                required
                placeholder="Contanos qué necesitás"
                rows={5}
                className="rounded-xl border border-white/10 bg-neutral-950/40 px-4 py-3 text-sm outline-none focus:border-white/30"
              />
              <button
                className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-200"
                type="submit"
              >
                Enviar
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
