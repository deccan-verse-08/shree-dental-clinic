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
  title: 'Shree Dental Clinic - Your Trusted Dental Care Partner',
  description: 'Experience expert dental care at Shree Dental Clinic with our advanced facilities and dedicated team.',
};

export default function Home() {
  return (
   <div className="bg-gradient-to-r from-[#e0f2ff] via-white to-[#e8f7f9]">
      <Navbar/>
      <Hero/>
      <TreatmentSection/>
      <Metric/>
      <GallarySection/>
      <WhyChooseUs/>
      <Reviews/>
      <FeaturedBlogs />
      <CTASection/>
      <Footer/>
   </div>
  );
}
