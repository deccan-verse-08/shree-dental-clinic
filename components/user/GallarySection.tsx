"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import MobileGalleryCarousel from "./ui/MobileGalleryCarousel";

export default function GallerySection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1024); // Consider tablets as mobile
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  const images = [
    { src: "/treatments/bridge.webp", title: "Bridge Treatment" },
    { src: "/treatments/implants.jpg", title: "Dental Implants" },
    { src: "/treatments/Invisible.jpg", title: "Invisible Braces" },
    { src: "/treatments/root-canal.jpg", title: "Root Canal Care" },
    { src: "/hero.jpeg", title: "Our Dentist" },
    // { src: "/doctors/snehal_kulkarni.jpg", title: "Dr. Snehal Kulkarni" },
    // { src: "/doctors/vaibhav_harkhare.jpg", title: "Dr. Vaibhav Harkare" },
  ];

  
  const duplicated = [...images, ...images];
  const [isPaused, setIsPaused] = useState(false);

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

      {/* Gallery Display */}
      {isMobile ? (
        // Mobile/Tablet Card Carousel
        <div className="flex justify-center items-center py-8">
          <MobileGalleryCarousel 
            images={images}
            autoplay={false} // Disabled autoplay for mobile
            loop={true}
            showNavigation={true}
            showPagination={true}
          />
        </div>
      ) : (
        // Desktop Scrolling Gallery
        <div className="overflow-hidden">
          <div className={`gallery-scroll ${isPaused ? "paused" : ""}`}>
            {duplicated.map((img, idx) => (
              <motion.div
                key={idx}
                className="gallery-item relative flex-shrink-0 overflow-hidden rounded-[2.5rem] shadow-2xl cursor-pointer group bg-white"
                style={{ width: 420, height: 420 }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center p-6 text-center text-white text-lg font-semibold tracking-wide backdrop-blur-[2px]"
                >
                  {img.title}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 flex justify-center">
        <Link href="/gallary">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(59,130,246,0.35)",
            }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-2 rounded-lg bg-violet-900 hover:bg-violet-700 text-white font-semibold border border-violet-500 shadow-lg shadow-violet-800/30 transition-all"
          >
            View Full Gallery
          </motion.button>
        </Link>
      </div>

      <style>{`
  /* ========== Marquee Base ========== */
  .gallery-scroll {
    display: inline-flex; /* allows auto width expansion */
    gap: 2.5rem;
    padding: 0 2.5rem;
    align-items: center;
    white-space: nowrap; /* prevents wrapping */
    animation: marquee 25s linear infinite;
    will-change: transform;
  }

  .gallery-scroll.paused {
    animation-play-state: paused;
  }

  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  /* ========== Responsive Speeds ========== */
  @media (max-width: 1024px) {
    .gallery-scroll {
      animation: marquee 30s linear infinite;
    }
  }

  @media (max-width: 640px) {
    .gallery-scroll {
      animation: marquee 30s linear infinite;
    }
  }

  /* ========== Card Sizes (Responsive) ========== */
  .gallery-item {
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    .gallery-item {
      width: 320px !important;
      height: 320px !important;
    }
  }

  @media (max-width: 420px) {
    .gallery-item {
      width: 260px !important;
      height: 260px !important;
      border-radius: 1.25rem;
    }
  }
`}</style>


    </section>
  );
}
