"use client"
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";

export default function Metric() {
  const stats = [
    { value: 2000, label: "Happy Patients" },
    { value: 2, label: "Clinics" },
    { value: 15, label: "Years of Experience" },
    { value: 1000, label: "Successful Treatments" },
  ];

  // Ref for the section
  const sectionRef = useRef(null);
  // Detect if the section is in view
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={sectionRef}
      className="bg-gradient-to-b from-blue-100 via-blue-50 to-blue-100 py-16 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-5xl font-extrabold text-[#082f4a] mb-2">
                {isInView ? (
                  <CountUp end={stat.value} duration={4} separator="," />
                ) : (
                  0
                )}
                +
              </h3>
              <p className="text-gray-600 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
