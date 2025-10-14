// components/BlogHero.tsx
"use client";

import { motion } from "framer-motion";

interface BlogHeroProps {
  title: string;
  author: string;
  date: string;
  tags?: string[];
}

export default function BlogHero({ title, author, date, tags }: BlogHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-4xl px-6"
    >
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg leading-tight">
        {title}
      </h1>

      <div className="mt-4 flex flex-wrap justify-center gap-4 text-white/90 text-lg md:text-xl">
        <p>By <span className="font-semibold">{author}</span></p>
        <span>•</span>
        <time>{new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
      </div>

      {tags && tags.length > 0 && (
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {tags.map(tag => (
            <span 
              key={tag} 
              className="px-4 py-1 text-sm font-semibold text-blue-900 bg-white/20 backdrop-blur-md rounded-full border border-white/30"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
