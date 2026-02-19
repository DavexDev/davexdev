export default function Navbar() {
  return (
    <nav className="w-full border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <span className="font-semibold tracking-wide">davexdev</span>

        <ul className="flex gap-6 text-sm text-neutral-400">
          <li className="hover:text-white cursor-pointer">Evolución</li>
          <li className="hover:text-white cursor-pointer">Stack</li>
          <li className="hover:text-white cursor-pointer">Proyectos</li>
          <li className="hover:text-white cursor-pointer">Contacto</li>
        </ul>
      </div>
    </nav>
  );
}
