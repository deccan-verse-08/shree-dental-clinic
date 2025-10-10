"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; 
import Link from "next/link";
import { 
    HeartHandshake, 
    Facebook, 
    Twitter, 
    Linkedin, 
    Award, 
    Sparkles, 
    Users 
} from "lucide-react";
import Navbar from "@/components/user/Navbar";
import Footer from "@/components/user/Footer";
import WhyChooseUs from "@/components/user/whyChooseUs";


const useOnScreen = (options: IntersectionObserverInit = {}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        observer.observe(element);
        return () => observer.disconnect();
    }, [options]);

    return [ref, isVisible] as const;
};


const AnimatedSection: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className = "" }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section
            ref={ref}
            className={`${className} transition-all duration-1000 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
            {children}
        </section>
    );
};


const teamMembers = [
    {
        name: "Dr. Vaibhav Harkhare",
        role: "Founder & Principal Dentist",
        desc: "15+ years of experience in cosmetic dentistry and patient care.",
        img: "/doctors/vaibhav_harkhare.jpg", // Assumes images are in the `public/doctors` folder
    },
    {
        name: "Dr. Snehal Kulkarni",
        role: "Founder & Principal Dentist",
        desc: "Specializes in creating perfectly aligned smiles for all ages.",
        img: "/doctors/snehal_kulkarni.jpg", // Assumes images are in the `public/doctors` folder
    },
];

const whyChooseUsFeatures = [
    {
        icon: <Award size={30} className="text-cyan-600" />,
        title: "Experienced Experts",
        description: "Our team consists of highly skilled professionals with years of specialized training and a passion for patient care."
    },
    {
        icon: <Sparkles size={30} className="text-cyan-600" />,
        title: "Modern Technology",
        description: "We use the latest dental technologies to ensure your treatments are precise, comfortable, and highly effective."
    },
    {
        icon: <Users size={30} className="text-cyan-600" />,
        title: "Patient-First Approach",
        description: "Your comfort and trust are our top priorities. We listen to your needs and create a personalized, stress-free experience."
    }
];


const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-cyan-100 transition-shadow duration-300 text-center">
        <div className="bg-cyan-100 rounded-full p-4 inline-flex ring-8 ring-white mb-5">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
    </div>
);

const TeamMemberCard: React.FC<typeof teamMembers[0]> = ({ name, role, desc, img }) => (
    <div className="text-center bg-slate-50 p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <Image
            src={img}
            alt={`Photo of ${name}`}
            width={208} // Corresponds to w-52
            height={208} // Corresponds to h-52
            className="w-52 h-52 rounded-full mx-auto shadow-lg ring-4 ring-white object-cover object-top mb-4"
        />
        <h3 className="text-2xl font-bold text-slate-800">{name}</h3>
        <p className="text-cyan-600 font-semibold text-md">{role}</p>
        <p className="text-slate-500 mt-2">{desc}</p>
        <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-slate-400 hover:text-cyan-600 transition-colors" aria-label={`Visit ${name} on Facebook`}><Facebook size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-cyan-600 transition-colors" aria-label={`Visit ${name} on Twitter`}><Twitter size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-cyan-600 transition-colors" aria-label={`Visit ${name} on LinkedIn`}><Linkedin size={20} /></a>
        </div>
    </div>
);


// --- Main About Page Component ---
export default function AboutPage() {
    return (
        <>
        <Navbar />
        <main className="bg-gradient-to-b from-white via-blue-50 to-blue-100">
            {/* About Section */}
            <AnimatedSection className="bg-gradient-to-b from-white via-blue-50 to-blue-100 py-16 md:py-24 px-6">
                <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl sm:text-5xl md:text-7xl font-bold mb-2 mt-8"
      >
        Who We Are
      </motion.h1>
        <motion.div
  className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-15"
  initial={{ width: "10%" }}
  animate={{ width: "40%" }} // increase width
  transition={{ duration: 1.2, delay: 0.4, ease: [0.22,1,0.36,1] }}
/>
      
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <Image
                            src="/logo.png" 
                            alt="Shree Dental Clinic Logo"
                            width={500}
                            height={500}
                            className="rounded-lg shadow-xl w-full h-auto"
                        />
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-cyan-700 mb-3">Our Mission</h2>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    To provide the highest standard of dental care in a comfortable, welcoming environment, building long-lasting relationships based on trust and respect.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-cyan-700 mb-3">Our Vision</h2>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    To be the most trusted name in family dentistry, known for clinical excellence, compassionate care, and a commitment to community oral health.
                                </p>
                            </div>
                            <div className="bg-rose-50 border-l-4 border-rose-400 p-6 rounded-r-lg shadow-sm">
                                <h3 className="font-bold text-xl text-rose-800">Experiencing Tooth Pain?</h3>
                                <p className="text-rose-700 mt-2 mb-4">
                                    Don&apos;t wait. Our compassionate doctors are here to help you feel at ease. Schedule a visit today.
                                </p>
                                <Link href="/contact">
                                    <button className="bg-rose-500 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-rose-600 transition-all flex items-center transform hover:scale-105">
                                        <HeartHandshake className="mr-2" size={20} />
                                        Book an Appointment
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Why Choose Us Section */}
            <WhyChooseUs/>

            {/* Team Section */}
            <motion.div>
            <AnimatedSection className="bg-gradient-to-b from-white via-blue-50 to-blue-10 py-16 md:py-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
                        Meet Our Expert Doctors
                    </h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 justify-center">
                        {teamMembers.map((member) => (
                            <TeamMemberCard key={member.name} {...member} />
                        ))}
                    </div>
                </div>
            </AnimatedSection>
            </motion.div>
        </main>
        <Footer />
        </>
    );
}
