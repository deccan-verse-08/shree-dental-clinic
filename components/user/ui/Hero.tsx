"use client"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence , motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Background Tooth SVG (faint, decorative) */}
      <svg
        className="absolute top-10 right-10 w-72 h-72 opacity-20 animate-bounce-slow"
        viewBox="0 0 100 100"
      >
        <path
          fill="#34d4eb"
          d="M50 0C30 10 20 40 50 100C80 40 70 10 50 0Z"
        />
      </svg>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-800 mb-6">
          Shree Dental Clinic
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          Your Smile, Our Priority
        </p>
        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg">
          Book Appointment
        </button> */}
        <Link href="/">
        <motion.button
            whileHover={
              {
                scale:1.05,
                boxShadow:"0px 0px 15px rgba(220,38,38,0.5)",
              }
            }
            whileTap={{scale:0.95}}
            className='hidden md:block px-6 py-3 rounded-lg bg-violet-900 hover:bg-violet-700 text-white text-base font-semibold border border-violet-500 shadow-lg shadow-violet-800/30 transition-all'
            >
            Book Appointment Now
            </motion.button>
        </Link>
      </div>
    </section>
  )
}
export default Hero