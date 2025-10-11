"use client"
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {id:1, src: "/treatments/root-canal.jpg", title: "Root Canal Care" },
  { id:2, src: "/treatments/orthodontic.jpg", title: "Fixed Orthodontics" },
  { id:3,src: "/treatments/Invisible.jpg", title: "Invisible Aligners" },
  { id:4,src: "/treatments/implants.jpg", title: "Dental Implants" },
  { id:5,src: "/treatments/smile-design.webp", title: "Smile Designing" },
  { id:6, src: "/treatments/bridge.webp", title: "Crowns & Bridges" },
  { id:7, src: "/treatments/laminates.webp", title: "Veneers & Laminates" },
  { id:8,src: "/treatments/pediatric.webp", title: "Pediatric Dentistry" },
  { id:9,src: "/treatments/whitening.webp", title: "Teeth Whitening" },
  {id:10, src:"/four.jpg",title:"dummy"},
  {id:11,src:"/hero.jpeg",title:"dummy"},
  {id:12,src:"/four.jpg",title:"dummy"},
  {id:13,src:"/four.jpg",title:"dummy"},
  {id:14,src:"/two.jpg",title:"dummy"},
  {id:15,src:"/three.jpg",title:"dummy"},
  {id:16,src:"/logo.png",title:"dummy"}

];

const GallaryPage=()=>{
    const ref = useRef(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleImageClick = (id:number)=>{
    setSelectedImage(id);
    document.body.style.overflow="hidden"

  }

  const closeLightbox=()=>{
    setSelectedImage(null);
    document.body.style.overflow="auto";
  }

  return(
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
 <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-gradient-to-b from-white via-blue-50 to-blue-100 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={
                  galleryItems.find((item) => item.id === selectedImage)!.src
                }
                alt={
                  galleryItems.find((item) => item.id === selectedImage)!.title
                }
                width={1920}
                height={1080}
                className="object-contain max-h-[80vh] rounded-xl"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white bg-blue-900/80 hover:bg-blue-700 rounded-full p-2 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallary Content */}
      <section ref={ref} className="relative bg-white py-24 px-4 min-h-screen">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(120,0,0,0.3)_0%,rgba(0,0,0,0)_70%)]" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-800/10 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl -z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-5xl md:text-7xl font-bold  bg-clip-text  mb-6 font-serif tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Gallary
            </motion.h2>
             <motion.div
  className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-15"
  initial={{ width: "10%" }}
  animate={{ width: "80%" }} // increase width
  transition={{ duration: 1.2, delay: 0.4, ease: [0.22,1,0.36,1] }}
/>
            <motion.p
              className="mt-6  text-lg max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              A glimpse into our clinic, treatments, and happy smiles we’ve crafted
          with precision and care.
            </motion.p>
          </motion.div>

          {/* Category Filter */}
         

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative group overflow-hidden rounded-2xl aspect-[4/3] shadow-xl border border-blue-900/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 0px 30px rgba(0, 0, 220, 0.4)",
                }}
                onClick={() => handleImageClick(item.id)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 cursor-pointer"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue/80 via-blue/40 to-transparent" />

              </motion.div>
            ))}
          </div>


          
        </div>
      </section>
    </div>
  )

}

export default GallaryPage;
