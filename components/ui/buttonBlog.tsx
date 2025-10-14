"use client"

import { motion } from "framer-motion";
import Link from "next/link";
export default  function BlogButton(){

    return (
        <div className="flex justify-center mt-6">
  <Link href="/blogs">
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 15px rgba(59,130,246,0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-2 rounded-lg bg-violet-900 hover:bg-violet-700 text-white font-semibold border border-violet-500 shadow-lg shadow-violet-800/30 transition-all"
    >
      View All Blogs
    </motion.button>
  </Link>
</div>

    )
}