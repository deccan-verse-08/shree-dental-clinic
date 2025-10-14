"use client"
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  showDivider?: boolean;
  className?: string;
}

export default function SectionHeading({ 
  title, 
  showDivider = true,
  className = ""
}: SectionHeadingProps) {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`text-center text-4xl sm:text-5xl md:text-7xl font-bold mb-2 ${className}`}
      >
        {title}
      </motion.h1>
      {showDivider && (
        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-15"
          initial={{ width: "10%" }}
          animate={{ width: "80%" }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22,1,0.36,1] }}
        />
      )}
    </>
  );
}