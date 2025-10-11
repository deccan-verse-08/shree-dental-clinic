
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const reasons = [
  {
    number: "01",
    title: "Experienced & Caring Team",
    description:
      "Our skilled dentists combine years of expertise with a gentle, personalized approach — making every visit stress-free.",
    img: "/choose/experience.jpg",
  },
  {
    number: "02",
    title: "Advanced Technology",
    description:
      "From digital X-rays to pain-free laser dentistry, we use cutting-edge tools for faster, safer, and more accurate care.",
    img: "/choose/technology.jpg",
  },
  {
    number: "03",
    title: "Comprehensive Services",
    description:
      "Everything you need under one roof — cleanings, cosmetic makeovers, implants, and more.",
    img: "/choose/services.jpg",
  },
  {
    number: "04",
    title: "Patient Comfort & Safety",
    description:
      "A calm, hygienic space designed for your comfort, with strict sterilization and soothing ambiance.",
    img: "/choose/safety.jpg",
  },
];

export default function WhyChooseUs() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-24  overflow-hidden bg-gradient-to-b from-blue-100 via-blue-50 to-white"
    >
      {/* Background motion bubbles */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl  font-semibold text-navy-900 mb-2"
        >
          Why Choose <span className="text-cyan-600">Us</span>?
        </motion.h2>
               <motion.div
  className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-16"
  initial={{ width: "10%" }}
  animate={{ width: "50%" }} // increase width
  transition={{ duration: 1.2, delay: 0.4, ease: [0.22,1,0.36,1] }}
/>


        <div className="grid md:grid-cols-2 gap-10">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative backdrop-blur-lg bg-white/60 rounded-3xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl hover:bg-white/80 transition-all cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Bubble highlight */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-transparent rounded-3xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Top Section */}
              <div className="relative z-10 text-left">
                <motion.span
                  className="text-5xl font-extrabold text-blue-300/90 block"
                  whileHover={{ y: -4 }}
                >
                  {item.number}
                </motion.span>
                <h3 className="text-2xl font-semibold text-blue-900 mt-2">
                  {item.title}
                </h3>
              </div>

              {/* Animated Dropdown */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-4 text-sm leading-relaxed"
                  >
                    {item.description}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Decorative floating image circle */}
              <motion.div
                className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-cover bg-center opacity-60"
                style={{ backgroundImage: `url(${item.img})` }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
