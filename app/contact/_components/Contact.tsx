"use client";
import { useInView, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { FiClock, FiMail, FiMapPin, FiPhone, FiShare2 } from "react-icons/fi";
import { Facebook, Instagram, Youtube } from "lucide-react";
import dynamic from "next/dynamic";

const AnimatedBubbles = dynamic(() => import("./AnimatedBubbles"), { ssr: false });

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [activeTab, setActiveTab] = useState<"bhosari" | "triveni">("bhosari");

  const locations = {
    bhosari: {
      email: "vaibhav@example.com",
      phone: "+91 77095 19507",
      location: "Bhosari, Pune, Maharashtra",
      hours: "Mon - Sat: 10:00 AM - 8:00 PM",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.180236402302!2d73.8474!3d18.6262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7d81234567%3A0xabcdef123456!2sBhosari%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1691000000000!5m2!1sen!2sin",
    },
    triveni: {
      email: "snehal@example.com",
      phone: "+91 87931 51502",
      location: "Triveni Nagar, Pune, Maharashtra",
      hours: "Mon - Sat: 9:30 AM - 7:30 PM",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.420891059274!2d73.8605!3d18.6187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7781234567%3A0xabcdef654321!2sTriveni%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1691000000000!5m2!1sen!2sin",
    },
  };

  const info = locations[activeTab];

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-r from-[#e0f2ff] via-white to-[#e8f7f9] flex items-center px-4 md:px-6"
    >
      {/* Floating glowing bubbles background */}
      <AnimatedBubbles />

      <div className="max-w-7xl mx-auto w-full relative z-10 py-16 md:py-24">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-700 via-blue-800 to-cyan-700 tracking-tight">
            Visit Shree Dental Clinic
          </h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto mt-4 md:mt-6 rounded-full"
            initial={{ width: "15%" }}
            animate={isInView ? { width: "80%" } : {}}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Experience expert dental care at our advanced facilities — select your nearest branch below.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 md:mb-14">
          <div className="inline-flex rounded-full bg-white shadow-md p-1 border border-gray-200 backdrop-blur-md">
            {["bhosari", "triveni"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "bhosari" | "triveni")}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-teal-600 to-blue-700 text-white shadow-lg"
                    : "text-gray-600 hover:text-teal-700"
                }`}
              >
                {tab === "bhosari" ? "Bhosari" : "Triveni Nagar"}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-start">
          {/* Contact Info */}
          <motion.div
            className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 md:p-12 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-500"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-10">
              Shree Dental Clinic –{" "}
              <span className="bg-clip-text font-bold">
                {activeTab === "bhosari" ? "Bhosari" : "Triveni Nagar"}
              </span>
            </h3>

            <div className="space-y-6 md:space-y-8 text-gray-700">
              {/* Email */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="p-2 md:p-3 bg-teal-100 rounded-full">
                  <FiMail className="text-xl md:text-2xl text-teal-700" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-gray-800">Email</h4>
                  <a
                    href={`mailto:${info.email}`}
                    className="text-sm md:text-lg hover:text-blue-700 transition break-all"
                  >
                    {info.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="p-2 md:p-3 bg-blue-100 rounded-full">
                  <FiPhone className="text-xl md:text-2xl text-blue-700" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-gray-800">Phone</h4>
                  <a
                    href={`tel:${info.phone}`}
                    className="text-sm md:text-lg hover:text-teal-700 transition"
                  >
                    {info.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="p-2 md:p-3 bg-cyan-100 rounded-full">
                  <FiMapPin className="text-xl md:text-2xl text-cyan-700" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-gray-800">Location</h4>
                  <p className="text-sm md:text-lg">{info.location}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="p-2 md:p-3 bg-emerald-100 rounded-full">
                  <FiClock className="text-xl md:text-2xl text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-gray-800">Clinic Hours</h4>
                  <p className="text-sm md:text-lg">{info.hours}</p>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="p-2 md:p-3 bg-indigo-100 rounded-full">
                  <FiShare2 className="text-xl md:text-2xl text-indigo-700" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 md:mb-3 text-gray-800">Follow Us</h4>
                  <div className="flex space-x-4 md:space-x-6">
                    <a href="#" className="text-gray-500 hover:text-blue-600 transition">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-pink-600 transition">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-red-600 transition">
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-700"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-4 md:p-8 h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Find Us</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                Providing advanced, patient-friendly dental care at convenient locations.
              </p>
              <div className="h-64 md:h-[480px] rounded-2xl overflow-hidden shadow-md border border-gray-300">
                <iframe
                  src={info.map}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Message Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(220,38,38,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg bg-violet-900 hover:bg-violet-700 text-white text-base font-semibold border border-violet-500 shadow-lg shadow-violet-800/30 transition-all"
          >
            Message me
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
