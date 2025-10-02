import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";
import Link from "next/link";

const Footer=()=>{
    return(
        <footer className="bg-black text-gray-300 py-12 px-4 sm:px-8 border-t border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logos  */}
                <div className="mb-8 md:mb-0">
                    <span>Shree Dental Clinic</span>
                    <p className="mt-4 text-gray-400 text-sm max-w-xs">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, natus.</p>
                </div>
                {/* Quick Links */}
                <div className="mb- md:mb-0">
                    <h3 className="text-lg font-semibold text-white mb-">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover:text-white transition">Treatments</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:text-white transition">About Us</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:text-white transition">Gallery</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:text-white transition">Contact</Link>
                        </li>
                        

                    </ul>

                </div>
                {/* Contact information */}
                <div className="mb-8 md:mb-0">
                    <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                    <div className="space-y-3">
                        <a href="" className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition">
                            <Mail size={20}/>
                            <span>info@ShreeDentist.com</span>
                        </a>
                        <a href="tel:+9699957732" className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition">
                            <Phone size={20}/>
                            <span>+91 9699957732</span>
                        </a>
                    </div>
                </div>
                {/* Social media */}
                 <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-5">
            <a
              href="https://www.facebook.com"
              className="text-gray-400 hover:text-white transition"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              className="text-gray-400 hover:text-white transition"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.youtube.com/"
              className="text-gray-400 hover:text-white transition"
              aria-label="Youtube"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-blue-800 text-center text-gray-500 text-sm">
        <p>Copyright: 2025 Shree Dental Clinic. All rights reserved</p>
      </div>
    
</footer>
    )
}

export default Footer; 