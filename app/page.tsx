import CTASection from "@/components/user/CtaSection";
import FeaturedBlogs from "@/components/user/FeaturedBlogs";
import Footer from "@/components/user/Footer";
import GallarySection from "@/components/user/GallarySection";
import Hero from "@/components/user/Hero";
import Metric from "@/components/user/Metric";
import Navbar from "@/components/user/Navbar";
import Reviews from "@/components/user/Reviews";
import TreatmentSection from "@/components/user/TreatmentSection";
import WhyChooseUs from "@/components/user/whyChooseUs";

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Best Dental Clinic In Pune | Shree Dental Clinic - Trusted Dental Care in Pune",
  description:
    "Shree Dental Clinic offers top-notch dental treatments including root canal, implants, orthodontics, and preventive care in Pune.",
  openGraph: {
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shree Dental Clinic - Dental Care in Pune",
      },
    ],
  },
  twitter: {
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
   <div className="bg-gradient-to-r from-[#e0f2ff] via-white to-[#e8f7f9]">
      <Navbar/>
      <main>
      <Hero/>
      <TreatmentSection/>
      <Metric/>
      <GallarySection/>
      <WhyChooseUs/>
      <Reviews/>
      <FeaturedBlogs />
      <CTASection/>
      </main>
      <Footer/>
   </div>
  );
}
