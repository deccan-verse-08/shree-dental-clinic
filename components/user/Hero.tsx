
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden 
      text-center px-4 sm:px-6 md:px-12 bg-white"
    >
      {/* Decorative Top-Left Vector */}
      <motion.div
        initial={{ opacity: 0, x: -80, y: -60 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.4 }}
        className="absolute top-20 left-2 sm:left-6 md:left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64"
      >
        <Image src="/two.jpg" alt="Decorative" fill className="object-contain" />
      </motion.div>

      {/* Decorative Bottom-Right Vector */}
      <motion.div
        initial={{ opacity: 0, x: 80, y: 60 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.4 }}
        className="absolute bottom-20 right-2 sm:right-6 md:right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64"
      >
        <Image src="/four.jpg" alt="Decorative" fill className="object-contain" />
      </motion.div>

      {/* Text Section */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs sm:text-sm tracking-widest font-semibold text-violet-800 mb-3 sm:mb-4"
        >
          Dental Excellence
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4 sm:mb-6"
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="bg-gradient-to-r from-red-600 via-red-600 to-red-600 bg-[length:200%_200%] text-transparent bg-clip-text drop-shadow-sm"
          >
            Shree
          </motion.span>{" "}
          Dental Clinic
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 max-w-xl sm:max-w-2xl"
        >
          Shree Dental Clinic brings expert care and advanced technology to ensure your smile shines with confidence and health.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="#">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(59,130,246,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-violet-900 hover:bg-violet-700 text-white font-semibold border border-violet-500 shadow-lg shadow-violet-800/30 transition-all"
            >
              Book Appointment
            </motion.button>
          </Link>

          <Link href="#">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(59,130,246,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg border border-violet-800 text-violet-900 font-semibold hover:bg-violet-100 transition-all"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
