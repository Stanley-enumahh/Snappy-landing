import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import heroImg from "../images/snappy-1782894388253.png";

export default function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="flex flex-col w-full py-32 sm:py-32.5 gap-10 sm:gap-14 items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        className="w-full max-w-xl sm:max-w-2xl flex flex-col gap-5 sm:gap-6 items-center justify-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-center">
          Your screenshots deserve better than a raw dump.
        </h1>

        <p className="text-center text-black/80 text-sm sm:text-base leading-relaxed max-w-md sm:max-w-lg">
          Snappy turns any screenshot into something worth sharing — custom
          backgrounds, perfect padding, and a shareable link in one click. No
          design skills needed.
        </p>

        <motion.a
          href="#"
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          className="relative mt-2 sm:mt-3 px-8 py-3 rounded-3xl bg-black shadow-md text-white overflow-hidden cursor-pointer"
          style={{ minWidth: "200px" }}
          whileTap={{ scale: 0.96 }}
        >
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{ background: "linear-gradient(135deg, #3b82f6, #60a5fa)" }}
            initial={{ x: "-100%" }}
            animate={{ x: hovered ? "0%" : "-100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          />

          <div className="relative flex items-center justify-center h-5 overflow-hidden">
            <AnimatePresence mode="wait">
              {!hovered ? (
                <motion.span
                  key="default"
                  className="absolute text-sm font-medium whitespace-nowrap"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Add to your browser
                </motion.span>
              ) : (
                <motion.span
                  key="free"
                  className="absolute text-sm font-semibold whitespace-nowrap"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  It's completely free ✦
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.a>
      </motion.div>

      <motion.div
        className="w-full max-w-sm sm:max-w-2xl lg:max-w-4xl px-3 sm:px-0"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <img
          src={heroImg}
          alt="Snappy screenshot editor"
          className="w-full h-auto object-cover rounded-xl shadow-2xl"
        />
      </motion.div>
    </section>
  );
}
