// src/components/layout/WhatsAppButton.tsx
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  // Replace this with your clinic's WhatsApp number including the country code (without '+')
  const whatsappNumber = '+917709519507'; 

  return (
    <Link
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer" // Recommended for security when using target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
    </Link>
  );
}