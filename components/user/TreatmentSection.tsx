"use client"
import { motion } from "framer-motion"; 

export default function TreatmentSection(){
    const treatments = [
  {
    title: "Painless Root Canal Treatment Using Advanced Techniques",
    description:
      "Experience a comfortable, pain-free root canal with advanced rotary instruments and modern anesthesia methods that ensure precision, faster recovery, and complete relief from infection.",
    image: "/treatments/root-canal.jpg",
  },
  {
    title: "Fixed Orthodontic Treatments",
    description:
      "Achieve perfectly aligned teeth and improved bite with durable, custom-made fixed braces designed for both aesthetics and long-term dental health correction.",
    image: "/treatments/orthodontic.jpg",
  },
  {
    title: "Invisible Aligners",
    description:
      "Straighten your teeth discreetly with clear, removable aligners that gently shift teeth into position—comfortable, convenient, and nearly invisible during daily wear.",
    image: "/treatments/invisible.jpg",
    
  },
  {
    title: "Dental Implants",
    description:
      "Replace missing teeth permanently with biocompatible dental implants that restore natural function, aesthetics, and confidence while preserving surrounding bone health.",
    image: "/treatments/implants.jpg",
  },
  {
    title: "Smile Designing",
    description:
      "Transform your smile with customized digital smile design techniques, combining artistry and advanced dental technology for perfect symmetry and lasting confidence.",
    image: "/treatments/smile-design.webp",
  },
  {
    title: "Crowns, Bridges & Removable Prosthetic Treatments",
    description:
      "Restore damaged or missing teeth with lifelike crowns, bridges, and dentures crafted for comfort, durability, and a natural-looking, confident smile.",
    image: "/treatments/bridge.webp",
  },
  {
    title: "Veneers and Porcelain Laminates",
    description:
      "Enhance your smile’s appearance using ultra-thin porcelain veneers that correct discoloration, chips, or gaps while maintaining a natural, radiant finish.",
    image: "/treatments/laminates.webp",
  },
  
  {
    title: "Pediatric Treatments",
    description:
      "Gentle, child-friendly dental care focused on prevention, early diagnosis, and comfortable treatments to ensure lifelong healthy smiles for kids.",
    image: "/treatments/pediatric.webp",
  },
  {
    title: "Teeth Whitening",
    description:
      "Brighten your smile safely with professional whitening treatments that remove deep stains and restore natural brilliance in just one session.",
    image: "/treatments/whitening.webp",
  },
];
return(
    <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-blue-100">
      
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-5xl md:text-7xl font-bold mb-2"
      >
        Experience Modern Dentistry
      </motion.h1>
        <motion.div
  className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-15"
  initial={{ width: "10%" }}
  animate={{ width: "80%" }} // increase width
  transition={{ duration: 1.2, delay: 0.4, ease: [0.22,1,0.36,1] }}
/>
      

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {treatments.map((treatment, index) => (
        
        <motion.div
  key={index}
  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 border border-transparent"
  whileHover={{ scale: 1.03 }}
>
  <div className="overflow-hidden">
    <motion.img
      src={treatment.image}
      alt={treatment.title}
      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
    />
  </div>
  <div className="p-6">
    <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
      {treatment.title}
    </h3>
    <p className="text-gray-600 text-sm md:text-base">
      {treatment.description}
    </p>
  </div>
</motion.div>
        ))}
      </div>
    </section>
        


    
)

}