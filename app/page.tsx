export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Deyvi Xol
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 mb-8">
            Desarrollador Web enfocado en construir software con criterio,
            arquitectura limpia y evolución técnica constante.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="#evolution"
              className="px-6 py-3 border border-white text-sm uppercase tracking-wide hover:bg-white hover:text-black transition"
            >
              Ver evolución
            </a>

            <a
              href="#projects"
              className="px-6 py-3 border border-neutral-600 text-sm uppercase tracking-wide hover:border-white transition"
            >
              Proyectos
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
