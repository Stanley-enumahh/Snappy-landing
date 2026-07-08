import { motion } from "framer-motion";

const features = [
  {
    icon: "⚡",
    title: "Instant capture",
    description:
      "Grab the full page or drag to select any region. One click, zero friction.",
  },
  {
    icon: "🎨",
    title: "Beautiful backgrounds",
    description:
      "Pick from curated gradients or upload your own image as a background. Every screenshot becomes a visual.",
  },
  {
    icon: "✂️",
    title: "Region select",
    description:
      "Drag a selection over exactly what you want. No cropping after the fact.",
  },
  {
    icon: "📐",
    title: "Padding & radius",
    description:
      "Fine-tune the breathing room and corner rounding until it feels exactly right.",
  },
  {
    icon: "🌑",
    title: "Shadow control",
    description:
      "Add depth with a natural drop shadow. Subtle or dramatic — your call.",
  },
  {
    icon: "🔗",
    title: "Shareable link",
    description:
      "Upload and get a link anyone can open. No account needed. Expires in 3 days.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Features() {
  return (
    <section
      id="features"
      className="w-full px-4 sm:px-6 lg:px-8 py-24 bg-[#f5f5f5]"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <motion.div
          className="flex flex-col gap-3 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-black/40">
            Features
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-black">
            Everything you need.
            <br />
            Nothing you don't.
          </h2>
          <p className="text-base text-black/60 leading-relaxed max-w-md">
            No subscriptions. No bloat. Just the tools that make your
            screenshots worth sharing.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="flex flex-col gap-4 p-8 bg-[#f5f5f5]"
            >
              <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-lg">
                {f.icon}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-semibold text-black tracking-tight">
                  {f.title}
                </h3>
                <p className="text-sm text-black/55 leading-relaxed">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
