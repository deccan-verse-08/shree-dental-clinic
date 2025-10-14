// components/BlogCTA.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface BlogCTAProps {
  href: string;
  text: string;
}

export default function BlogCTA({ href, text }: BlogCTAProps) {
  return (
    <Link href={href}>
      <motion.button 
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(59,130,246,0.5)" }}
        whileTap={{ scale: 0.97 }}
        className="px-10 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-violet-600 to-violet-600 text-white shadow-xl border border-blue-600 transition-all"
      >
        {text}
      </motion.button>
    </Link>
  );
}
