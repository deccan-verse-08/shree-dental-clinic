"use client"

import { useMotionValue, useSpring, useTransform } from "framer-motion";
import React, {useRef} from "react"
import { Calendar, User } from "lucide-react";
import { motion } from "framer-motion";

interface BlogCardProps{
    date:string;
    author:string;
    title:string;
    description: string ;
    imageUrl: string;
    onClick?:()=>void;
}

export default function BlogCard({
    date,author,title,description,imageUrl,onClick,
}:BlogCardProps){
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

     const springConfig = { damping: 25, stiffness: 400 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
   return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className="w-[380px] h-[560px] relative cursor-pointer group"
    >
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-white to-blue-50 shadow-2xl border border-blue-300/20"
        style={{ transform: "translateZ(0px)" }}
      >
        {/* Hover Border Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/30 via-blue-200/10 to-blue-400/30 p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-full h-full rounded-2xl bg-white/90" />
        </div>

        {/* Image Section */}
        <div
          className="relative h-64 w-full overflow-hidden rounded-t-2xl"
          style={{ transform: "translateZ(20px)" }}
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-blue-200/5 to-transparent" />
        </div>

        {/* Content */}
        <div
          className="p-6 bg-white h-[240px] flex flex-col justify-between relative"
          style={{ transform: "translateZ(40px)" }}
        >
          <div>
            <h3 className="text-2xl font-bold text-slate-800 leading-tight mb-2">
              {title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          <div className="flex justify-between items-center mt-4 text-blue-700 font-medium">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span className="text-sm">{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} />
              <span className="text-sm">{author}</span>
            </div>
          </div>
        </div>

        {/* Read More Button */}
        <div
          className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-blue-100/90 to-transparent"
          style={{ transform: "translateZ(40px)" }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-semibold shadow-md shadow-blue-300/30 transition-all"
          >
            Read More →
          </motion.button>
        </div>

        {/* Light Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background: useTransform(
              [mouseXSpring, mouseYSpring],
              ([x, y]) =>
                `radial-gradient(circle at ${(x as number) * 100 + 50}% ${
                  (y as number) * 100 + 50
                }%, rgba(59,130,246,0.12), transparent 70%)`
            ),
          }}
        />
      </div>
    </motion.div>
  );

}