import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Capture",
    description:
      "Click the Snappy icon or hit a keyboard shortcut. Grab the full page or drag to select exactly what you want — nothing more, nothing less.",
    detail: "Full page · Region select · Keyboard shortcuts",
  },
  {
    number: "02",
    title: "Beautify",
    description:
      "Drop your screenshot on a gradient or your own image. Dial in the padding, corner radius, and shadow until it looks exactly how you want it.",
    detail: "Gradients · Custom images · Padding · Shadow · Radius",
  },
  {
    number: "03",
    title: "Share",
    description:
      "Download a full-resolution PNG or get a shareable link in one click. Send it anywhere — Twitter, Notion, Slack, wherever.",
    detail: "PNG export · Shareable link · Expires in 3 days",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full px-4 sm:px-6 lg:px-8 py-24 bg-[#f5f5f5]"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-16">

        {/* Header */}
        <motion.div
          className="flex flex-col gap-3 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-black/40">
            How it works
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-black">
            Three steps.
            <br />
            That's literally it.
          </h2>
          <p className="text-base text-black/60 leading-relaxed max-w-md">
            From capture to share in under 30 seconds. No learning curve,
            no account, no nonsense.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              className="group relative flex flex-col sm:flex-row gap-8 sm:gap-16 py-12 border-t border-black/8"
            >
              {/* Number */}
              <div className="flex-shrink-0 sm:w-24">
                <span className="text-5xl font-bold tracking-tighter text-black/10 group-hover:text-black/20 transition-colors duration-300">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-4">
                <h3 className="text-2xl font-bold tracking-tight text-black">
                  {step.title}
                </h3>
                <p className="text-base text-black/60 leading-relaxed max-w-lg">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {step.detail.split(" · ").map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-black/5 text-black/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Step indicator line */}
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute left-[5.5rem] top-full w-px h-0 bg-black/10 group-hover:h-full transition-all duration-500" />
              )}
            </motion.div>
          ))}

          {/* Last border */}
          <div className="border-t border-black/8" />
        </div>

      </div>
    </section>
  );
}