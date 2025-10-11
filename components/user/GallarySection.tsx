
"use client";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GallarySection() {
  const images = [
    { src: "/treatments/bridge.webp", title: "Bridge Treatment" },
    { src: "/treatments/implants.jpg", title: "Dental Implants" },
    { src: "/treatments/Invisible.jpg", title: "Invisible Braces" },
    { src: "/treatments/root-canal.jpg", title: "Root Canal Care" },
    { src: "/hero.jpeg", title: "Clinic Environment" },
    { src: "/doctors/snehal_kulkarni.jpg", title: "Dr. Snehal Kulkarni" },
    { src: "/doctors/vaibhav_harkhare.jpg", title: "Dr. Vaibhav Harkare" },
  ];

  const duplicatedImages = [...images, ...images];
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          duration: 40, // slower scroll for elegance
          ease: "linear",
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-blue-50 to-blue-100 py-28">
      {/* Heading */}
      <div className="text-center mb-20 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-slate-800"
        >
          Where Smiles Take Shape
        </motion.h1>

        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-6 rounded-full"
          initial={{ width: "10%" }}
          whileInView={{ width: "70%" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Infinite Scrolling Gallery */}
      <div
        className="flex overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div className="flex gap-10 px-10" animate={controls}>
          {duplicatedImages.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="relative w-[420px] h-[420px] flex-shrink-0 overflow-hidden rounded-[2.5rem] shadow-2xl cursor-pointer group bg-white"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center p-8 text-center text-white text-xl font-semibold tracking-wide backdrop-blur-[2px]"
              >
                {img.title}
              </motion.div>
            </motion.div>
          ))}

        </motion.div>
        
      </div>
      <div className="mt-12 flex justify-center">
  <Link href="/gallary">
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 15px rgba(59,130,246,0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-2 rounded-lg bg-violet-900 hover:bg-violet-700 text-white font-semibold border border-violet-500 shadow-lg shadow-violet-800/30 transition-all"
    >
      View Full Gallary
    </motion.button>
  </Link>
  </div>

    </section>
  );
}
