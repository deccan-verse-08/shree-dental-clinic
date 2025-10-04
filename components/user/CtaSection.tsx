"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiPhoneCall, FiCalendar } from "react-icons/fi";

export default function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-[#0a0f1c] via-[#0d1b2a] to-[#162447] text-white">
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(56,189,248,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(147,197,253,0.12) 0%, transparent 60%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
        >
          Your Smile Deserves Expert Care
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-blue-100/90 max-w-2xl mx-auto text-lg leading-relaxed mb-10"
        >
          Schedule your appointment today and experience pain-free, high-precision dentistry
          in a calming, modern environment.
        </motion.p>

        {/* Buttons */}
       <Link href={"/contact"}>
        <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 15px rgba(59,130,246,0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-lg bg-violet-900 hover:bg-violet-700 text-white font-semibold border   border-violet-500 shadow-lg shadow-violet-800/30 transition-all"
            >
              Make an Appointment
            </motion.button>
       </Link>
      </div>

      {/* Decorative floating orb */}
      <motion.div
        className="absolute -bottom-10 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  );
}
