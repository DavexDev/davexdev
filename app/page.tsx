export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl text-center space-y-8 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Deyvi Xol
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
            Desarrollador Web enfocado en construir software con criterio,
            arquitectura limpia y evolución técnica constante.
          </p>

          <div className="flex justify-center gap-6 pt-4">
            <a
              href="#evolution"
              className="px-6 py-3 border border-white text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black"
            >
              Evolución
            </a>

            <a
              href="#projects"
              className="px-6 py-3 border border-neutral-600 text-xs uppercase tracking-widest transition-all duration-300 hover:border-white"
            >
              Proyectos
            </a>
          </div>
        </div>
      </section>

      {/* ================= EVOLUCIÓN ================= */}
      <section
        id="evolution"
        className="py-32 px-6 border-t border-neutral-800"
      >
        <div className="max-w-4xl mx-auto space-y-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold">
            Evolución
          </h2>

          <div className="space-y-12">
            {[
              ["Inicio", "Fundamentos de programación",
                "Bases sólidas en lógica, estructuras de control y pensamiento computacional, priorizando entender el porqué del código."],
              ["Crecimiento", "Desarrollo web aplicado",
                "HTML, CSS, JavaScript y backend aplicados a proyectos reales, cuidando orden, legibilidad y escalabilidad."],
              ["Actual", "Arquitectura moderna",
                "Uso de frameworks modernos, control de versiones y buenas prácticas como base de productos profesionales."],
              ["Siguiente nivel", "Escalabilidad y calidad",
                "Profundización en TypeScript, testing, optimización y automatización de procesos."]
            ].map(([stage, title, desc]) => (
              <div
                key={stage}
                className="transition-transform duration-300 hover:translate-x-1"
              >
                <span className="text-xs uppercase tracking-widest text-neutral-500">
                  {stage}
                </span>
                <h3 className="text-xl font-semibold mt-2">
                  {title}
                </h3>
                <p className="text-neutral-400 mt-3 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STACK ================= */}
      <section
        id="stack"
        className="py-32 px-6 border-t border-neutral-800"
      >
        <div className="max-w-4xl mx-auto space-y-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold">
            Stack técnico
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              ["Next.js",
                "Framework principal para construir aplicaciones modernas, priorizando estructura clara, rendimiento y escalabilidad."],
              ["JavaScript / TypeScript",
                "Uso consciente del lenguaje, con transición progresiva a TypeScript para mayor robustez y mantenibilidad."],
              ["Tailwind CSS",
                "Estilos utilitarios para interfaces limpias, consistentes y fáciles de escalar sin sobrecargar el diseño."],
              ["Git & control de versiones",
                "Commits con intención, historial claro y flujo de trabajo ordenado como base de cualquier proyecto serio."]
            ].map(([title, desc]) => (
              <div
                key={title}
                className="transition-transform duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROYECTOS ================= */}
      <section
        id="projects"
        className="py-32 px-6 border-t border-neutral-800"
      >
        <div className="max-w-4xl mx-auto space-y-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold">
            Proyectos
          </h2>

          <div className="border border-neutral-800 p-8 space-y-6 transition-all duration-300 hover:border-white">
            <h3 className="text-2xl font-semibold">
              Digital Care
            </h3>

            <p className="text-neutral-400 leading-relaxed">
              Sistema web desarrollado como producto real para la gestión
              administrativa de servicios tecnológicos, aplicando
              arquitectura limpia y control de versiones.
            </p>

            <ul className="text-neutral-500 text-sm space-y-2">
              <li>• Separación clara entre frontend y backend</li>
              <li>• CRUD completo y autenticación</li>
              <li>• Enfoque escalable</li>
              <li>• Producto en evolución constante</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CONTACTO ================= */}
      <section
        id="contact"
        className="py-32 px-6 border-t border-neutral-800"
      >
        <div className="max-w-3xl mx-auto text-center space-y-10 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold">
            Contacto
          </h2>

          <p className="text-neutral-400 leading-relaxed">
            Abierto a oportunidades, colaboración y proyectos donde el
            criterio técnico sea prioridad.
          </p>

          <div className="flex justify-center gap-6 text-xs uppercase tracking-widest">
            {["GitHub", "LinkedIn", "Email"].map((label) => (
              <span
                key={label}
                className="border border-neutral-600 px-6 py-3 transition-all duration-300 hover:border-white hover:scale-105 cursor-pointer"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
