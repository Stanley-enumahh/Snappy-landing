import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur-2xl flex fixed w-full right-0 top-0 z-50 flex-row justify-between items-center px-4 sm:px-10 md:px-20 py-3 border-b border-black/5">
      <span>
        <h1 className="font-bold text-sm tracking-tight">Snappy</h1>
      </span>

      {/* Desktop nav */}
      <nav className="hidden md:flex flex-row gap-10 items-center">
        <ul className="flex flex-row gap-6 items-center">
          {["Home", "Features"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm text-black/60 hover:text-black transition-colors cursor-pointer"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="px-6 py-2 rounded-3xl bg-black text-white text-sm font-medium hover:opacity-80 transition-opacity"
        >
          Add to your browser
        </a>
      </nav>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer border-0 outline-0"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <motion.span
          className="block w-5 h-0.5 bg-black rounded-full"
          animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="block w-5 h-0.5 bg-black rounded-full"
          animate={{ opacity: menuOpen ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="block w-5 h-0.5 bg-black rounded-full"
          animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden absolute top-full bg-[#fffff6] backdrop-blur-2xl left-0 right-0 flex flex-col gap-4 px-6 py-6 border-t border-black/5"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {["Home", "Features"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-black/70 hover:text-black transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            <a
              href="#"
              className="px-6 py-2.5 rounded-3xl bg-black text-white text-sm font-medium text-center hover:opacity-80 transition-opacity"
            >
              Add to your browser
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
