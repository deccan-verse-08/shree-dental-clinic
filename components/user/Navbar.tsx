
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/treatments', label: 'Blogs' },
  { href: '/gallary', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-white border-b border-blue-700/40 shadow-md backdrop-blur-lg bg-opacity-50"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* ---- Logo Section ---- */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Shree Dental Clinic"
              width={100}
              height={100}
              priority
              className="object-contain"
            />
            <span className="text-lg sm:text-xl font-semibold  bg-clip-text text-red-600">
              Shree <span className="text-black">Dental Clinic</span>
            </span>
          </Link>

          {/* ---- Desktop Nav Links ---- */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`relative px-3 py-2 text-base font-medium transition-all duration-300 group ${
                      isActive
                        ? 'text-blue-600'
                        : 'text-gray-900 hover:text-blue-400'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform origin-center ${
                        isActive ? 'bg-red-500 scale-x-100' : 'bg-red-500'
                      }`}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* ---- Desktop Button ---- */}
          <div className="hidden md:flex">
            <Link href={"/contact"}>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 15px rgba(59,130,246,0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-lg bg-violet-900 hover:bg-violet-700 text-white font-semibold border   border-violet-500 shadow-lg shadow-violet-800/30 transition-all"
            >
              Consult Now
            </motion.button>
            </Link>
          </div>

          {/* ---- Mobile Menu Toggle ---- */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center p-3 rounded-md border border-blue-700/50 bg-blue-950/30 text-blue-400 hover:text-blue-300 transition-all"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <FiX className="w-6 h-6 text-blue-400" />
            ) : (
              <FiMenu className="w-6 h-6 text-blue-400" />
            )}
          </motion.button>
        </div>
      </div>

      {/* ---- Mobile Dropdown Menu ---- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-black border-t border-blue-700/40"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                        isActive
                          ? 'text-red-600 bg-gray-900/20'
                          : 'text-white hover:text-blue-300 hover:bg-gray-900/10'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <Link href={"/contact"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold border border-blue-400 transition-all"
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
}
