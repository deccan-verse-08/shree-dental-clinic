'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { use, useState } from 'react';
import { AnimatePresence , motion } from 'framer-motion';
import { exit } from 'process';
const navLinks =[
  {
    href:"/",
    label:"Home"
  },
  {
    href: "/about",
    label: "About Us"
  },
  {
    href:"/treatments",
    label:"Treatments"
  },
  {
    href:"/gallery",
    label:"Gallery"
  },
  {
    href:"/contact",
    label:"Contact"
  },
];
const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <motion.nav
    initial={{opacity:0,y:-20}}
    animate={{opacity:1,y:0}}
    className='bg-[--navbar-bg] shadow-md sticky top-0 z-50 border-b border-blue-500/50 backdrop-blur-lg'
    >

      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-24'>

          {/* Logo section */}
          <motion.div
          whileHover={{scale:1.05}}
          whileTap={{scale:0.95}}
          className='flex-shrink-0'
          >
            <Link href="/" className='flex items-center py-4 px-2 cursor-pointer'>
            <span className='text-blue-400'>Shree Dental Clinic</span>
            </Link>

          </motion.div>
          {/* Navigation Links */}
          <div className='hidden md:flex flex-1 justify-center items-center  space-x-6 mx-4'>
            {navLinks.map((link,index)=>{
              const isActive = pathname === link.href;
              return(
                <motion.div
                initial={{opacity:0,y:-20}}
                animate={{opacity:1,y:0}}
                transition={{delay: index * 0.1}}
                key={link.href}
          >
                  <Link href={link.href}
                  className={`px-4 py-2 rounded-md text-base font-medium transition-all duration-300 relative overflow-hidden group ${
                    isActive ? "text-[--text]":"text-blue-700 hover:text-black"
                  }`}>
                  <span className='relative z-10'>
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                    layoutId='activeTab'
                    className='absolute inset-0 bg-gradient-to-b from-blue-900/50 text-shadow-blue-950/50 rounded-md'
                    transition={{
                      type:"spring",
                      stiffness:300,
                      damping:25,
                    }}
                    />
                  )}
                  <div className='absolute bottom-0 left-0 w-full h-0.5 bg-violet-950/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center'/>
                  </Link>

                </motion.div>
              );
            })}

          </div>

          {/* Right side buttons */}
          <div className='flex items-center space-x-4'>
            <Link href="">
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
            Consult Now
            </motion.button>
            
            </Link>

            {/* Mobile menu buttons */}
            <motion.button
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
            onClick={()=>setIsOpen(!isOpen)}
            className='md:hidden inline-flex items-center justify-center p-3 rounded-lg text-blue-700 hover:text-black hover:bg-blue-900/40 focus:outline-none focus-ring-2
            focus:ring-blue-700/50 border border-blue-800/50 bg-black/20 backdrop-blur-sm transition-all'
            aria-controls='mobile-menu'
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <motion.div
              animate={{rotate: isOpen ? 180 : 0}}
              transition={{duration:0.3}}
              >
                 {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}

              </motion.div>

            </motion.button>

          </div>

        </div>

      </div>

      {/* Mobile navigations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
          className='md:hidden bg-[--navbar-bg] border-t border-blue-500/50 backdrop-blur-xl'
          id='mobile-menu'
          initial="hidden"
          animate="visible"
          exit="hidden"
          >
            <div className='px-4 pt-4 pb-6 space-y-3'>
              {
                navLinks.map((link,index)=>{
                  const isActive = pathname === link.href;
                  return(
                    <motion.div
                    key={link.href}
                    initial={{opacity:0,x:-20}}
                    animate={{opacity:1,x:0}}
                    transition={{delay:index * 0.1}}
                    exit={{opacity:0,x:-20}}
                  >
                    <Link href={link.href} onClick={()=>setIsOpen(false)} className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                        isActive
                          ? "text-[--text]":"text-blue-700 hover:text-black border border-transparent"
                         
                      }`}>
                        <div className="flex items-center space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full transition-all ${
                            isActive ? "bg-gradient-to-b from-blue-900/50 text-shadow-blue-950/50 " : "bg-transparent"
                          }`}
                        />
                        <span>{link.label}</span>
                      </div>
                      </Link>

                    </motion.div>
                  )
                })
              }
               <Link href="/Contact">
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="w-full mt-4 px-4 py-3 rounded-lg bg-violet-900 hover:bg-violet-700 text-white text-base  font-semibold border border-violet-500 shadow-lg shadow-violet-800/30 transition-all text-left"
                >
                  Consult Now
                </motion.button>
              </Link>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;