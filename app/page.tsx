import Footer from "@/components/user/Footer";
import Hero from "@/components/user/Hero";

import Navbar from "@/components/user/Navbar";
import Reviews from "@/components/user/Reviews";
import Image from "next/image";

export default function Home() {
  return (
   <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100">
    <Navbar/>
<Hero/>
<Reviews/>
    <Footer/>
   </div>
  );
}
