import { motion } from "framer-motion";
import { useState } from "react";

const checklist = [
  "Full page & region capture",
  "Gradient & custom image backgrounds",
  "Padding, radius & shadow controls",
  "Upload your own background images",
  "One-click PNG download",
  "Shareable link — no account needed",
];

export default function Install() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="install"
      className="w-full px-4 sm:px-6 lg:px-8 py-24 bg-[#f5f5f5]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative rounded-3xl bg-black overflow-hidden"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

          <div className="flex flex-col lg:flex-row items-start gap-0">
            {/* Left */}
            <div className="flex-1 flex flex-col gap-8 p-10 lg:p-14">
              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
                  Get started
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-white">
                  Start making better
                  <br />
                  screenshots today.
                </h2>
                <p className="text-base text-white/50 leading-relaxed max-w-sm">
                  Free forever. No account. No credit card. Just install and
                  start capturing beautiful screenshots in seconds.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3">
                <motion.a
                  href="#"
                  onHoverStart={() => setHovered(true)}
                  onHoverEnd={() => setHovered(false)}
                  className="relative w-fit px-8 py-3.5 rounded-2xl bg-white text-black overflow-hidden cursor-pointer"
                  style={{ minWidth: "220px" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: "linear-gradient(135deg, #3b82f6, #60a5fa)",
                    }}
                    initial={{ x: "-100%" }}
                    animate={{ x: hovered ? "0%" : "-100%" }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  />
                  <div className="relative flex items-center justify-center h-5 overflow-hidden">
                    <motion.span
                      className="absolute text-sm font-semibold whitespace-nowrap"
                      animate={{
                        y: hovered ? -20 : 0,
                        opacity: hovered ? 0 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      Add to your browser
                    </motion.span>
                    <motion.span
                      className="absolute text-sm font-semibold whitespace-nowrap text-white"
                      animate={{
                        y: hovered ? 0 : 20,
                        opacity: hovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      It's completely free
                    </motion.span>
                  </div>
                </motion.a>
                <p className="text-xs text-white/25">
                  Works on Chrome, Brave, Arc, and all Chromium browsers
                </p>
              </div>
            </div>

            {/* Right — checklist */}
            <div className="lg:w-80 w-full flex flex-col border-t lg:border-t-0 lg:border-l border-white/8 self-stretch">
              <div className="p-10 lg:p-14 flex flex-col gap-4 h-full justify-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-2">
                  What's included
                </p>
                {checklist.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M2 5l2 2 4-4"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-white/60">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
