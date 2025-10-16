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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-4xl px-4 sm:px-6 py-4 sm:py-6"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg leading-tight sm:leading-tight md:leading-tight">
        {title}
      </h1>

      <div className="mt-3 sm:mt-4 flex flex-wrap justify-center gap-2 sm:gap-4 text-white/90 text-sm sm:text-base md:text-lg">
        <p>By <span className="font-semibold">{author}</span></p>
        <span className="hidden sm:inline">•</span>
        <time>{new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
      </div>

      {tags && tags.length > 0 && (
        <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2">
          {tags.map(tag => (
            <span 
              key={tag} 
              className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-white bg-white/20 backdrop-blur-md rounded-full border border-white/30"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
