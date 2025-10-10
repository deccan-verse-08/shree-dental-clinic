"use client"
import {motion} from "framer-motion"
import Link from "next/link";

const Hero=()=>{
  return(
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-gradient-to-b from-white via-blue-50 to blue-blue-100
     text-center px-6 md:scroll-px-12">
      {/* Top left */}
      {/* bottom right */}

      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        <motion.p
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}

        transition={{duration:0.8}}
        className="text-sm tracking-widest font-semibold text-violet-800 mb-4"
        >
          Dental Excellence
        </motion.p>
        <motion.h1
        initial={{opacity:0,y:30}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
        className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          <motion.span
    animate={{
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    }}
    className="bg-gradient-to-r from-red-600 via-red-600 to-red-600 bg-[length:200%_200%] text-transparent bg-clip-text drop-shadow-sm"
  >
    Shree
  </motion.span>{" "}
  Dental Clinic
        </motion.h1>
        <motion.p
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:1,delay:0.3}}
        className="text-lg md:text-xl mb-10 max-w-2xl"
        >
          Shree Dental Clinic brings expert care and advanced technology to ensure your smile shines with confidence and health.
        </motion.p>
        {/* Buttons */}
        <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex gap-4"

        >
          <Link href="">
          
          <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 15px rgba(59,130,246,0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-violet-900 hover:bg-violet-700 text-white font-semibold border   border-violet-500 shadow-lg shadow-violet-800/30 transition-all"
            >
              Book Appointment
            </motion.button>
          </Link>
          <Link href="">
          <motion.button
          whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 15px rgba(59,130,246,0.4)',
              }}
              whileTap={{ scale: 0.95 }} 
          className="px-8 py-3 rounded-lg border border-violet-800 text-violet-900 font-semibold hover:bg-violet-100 transition-all">
            Learn More
            </motion.button>
          </Link>
        </motion.div>


      </div>


    </section>
  )
}

export default Hero;