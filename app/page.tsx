import Footer from "@/components/user/Footer";
import Hero from "@/components/user/Hero";

import Navbar from "@/components/user/Navbar";
import Reviews from "@/components/user/Reviews";
import Image from "next/image";

export default function Home() {
  return (
   <div className="bg-gradient-to-r from-[#e0f2ff] via-white to-[#e8f7f9]">
    <Navbar/>
<Hero/>
<Reviews/>
    <Footer/>
   </div>
  );
}
