"use client";
import { motion } from "framer-motion";
import React from "react";

const AnimatedBubbles = () => {
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    scale: Math.random() * 0.8 + 0.5,
    duration: Math.random() * 10 + 10,
    size: Math.random() * 80 + 40,
  }));

  return (
    <div className="absolute inset-0 -z-10">
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-400/20 blur-2xl"
          initial={{
            x: b.x,
            y: b.y,
            scale: b.scale,
            opacity: 0.2,
          }}
          animate={{
            y: ["0%", "100%", "0%"],
            x: ["0%", "100%", "0%"],
            opacity: [0.15, 0.4, 0.15],
            transition: {
              duration: b.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            width: b.size,
            height: b.size,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBubbles;
