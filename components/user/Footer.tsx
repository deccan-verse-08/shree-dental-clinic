import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0A1F2E] text-[#E6EEF3] py-12 px-4 sm:px-8 border-t border-[#00B0C8]/40 backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {/* Logo / About */}
        <div className="mb-8 md:mb-0">
          <span className="text-[#00B0C8] font-bold text-xl tracking-wide">Shree Dental Clinic</span>
          <p className="mt-4 text-[#E6EEF3]/70 text-sm max-w-xs leading-relaxed">
            Premium dental care with a futuristic touch. Experience modern treatments in a sleek, stylish environment.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-[#00B0C8] text-lg font-semibold mb-4 tracking-wide">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Blogs", href: "/blogs" },
              { name: "About Us", href: "/about" },
              { name: "Gallery", href: "/gallary" },
              { name: "Contact", href: "/contact" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-[#E6EEF3]/80 hover:text-[#00B0C8] transition-all duration-300 hover:drop-shadow-[0_0_6px_#00B0C8]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        {/* Contact Info */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-[#00B0C8] text-lg font-semibold mb-4 tracking-wide">Contact Us</h3>
          <div className="space-y-3">
            <a
              href="mailto:shreedentalclinicpune@gmail.com"
              className="flex items-center gap-3 text-[#E6EEF3]/80 hover:text-[#00B0C8] transition-all duration-300 hover:drop-shadow-[0_0_6px_#00B0C8]"
            >
              <Mail size={20} className="text-[#00B0C8]" />
              <span>shreedentalclinicpune@gmail.com</span>
            </a>
            <a
              href="tel:+918793151502"
              className="flex items-center gap-3 text-[#E6EEF3]/80 hover:text-[#00B0C8] transition-all duration-300 hover:drop-shadow-[0_0_6px_#00B0C8]"
            >
              <Phone size={20} className="text-[#00B0C8]" />
              <span>+91 8793151502</span>
            </a>
            <a
              href="tel:+917709519507"
              className="flex items-center gap-3 text-[#E6EEF3]/80 hover:text-[#00B0C8] transition-all duration-300 hover:drop-shadow-[0_0_6px_#00B0C8]"
            >
              <Phone size={20} className="text-[#00B0C8]" />
              <span>+91 7709519507</span>
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-[#00B0C8] text-lg font-semibold mb-4 tracking-wide">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-5">
            {[
              { href: "https://www.facebook.com/share/17bPEFLXQJ/", icon: Facebook, label: "Facebook" },
              { href: "https://www.instagram.com/shreedentalclinic28?igsh=em1pNjh1OGNtd2ho", icon: Instagram, label: "Instagram" },
              { href: "https://www.youtube.com/", icon: Youtube, label: "Youtube" },
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  className="text-[#E6EEF3]/70 hover:text-[#00B0C8] transition-all duration-300 hover:drop-shadow-[0_0_10px_#00B0C8]"
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#00B0C8]/20 text-center text-[#E6EEF3]/60 text-sm tracking-wide">
        <p>© 2025 Shree Dental Clinic. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
