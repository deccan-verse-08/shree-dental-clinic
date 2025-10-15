import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import AIAssistantButton from "@/components/AIAssistantButton";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Best Dental Clinic In Pune | Shree Dental Clinic - Best Dental Care in Pune",
  description:
    "Shree Dental Clinic offers root canal, implants, orthodontics, and preventive dental care in Pune. Book an appointment today!",
  keywords: [
    "Dental clinic Pune",
    "Best dentist Pune",
    "Root canal treatment Pune",
    "Dental implants Pune",
    "Orthodontics Pune",
    "Teeth whitening Pune",
    "Best Dentist in Pune",
    "Best Dental Clinic in Pune",
  ],
  openGraph: {
    title: "Shree Dental Clinic - Trusted Dental Care in Pune",
    description: "Comprehensive dental treatments in Pune with advanced facilities and a dedicated team.",
    url: "https://shreedentalclinicpune.com",
    siteName: "Shree Dental Clinic",
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "Shree Dental Clinic" },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: " Best Dentist In Pune | Shree Dental Clinic - Trusted Dental Care in Pune",
    description: "Comprehensive dental treatments in Pune with advanced facilities and a dedicated team.",
    images: ["/og-image.jpg"],
    creator: "@ShreeDentalPune",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <WhatsAppButton /> */}
        <AIAssistantButton />
        {children}

        
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Shree Dental Clinic",
      "url": "https://shreedentalclinicpune.com",
      "logo": "https://shreedentalclinicpune.com/logo.png",
      "image": "https://shreedentalclinicpune.com/og-image.jpg",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bhosari Pimpari Chinchawad",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411039",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 18.5944,
        "longitude": 73.7386
      },
      "telephone": "+91-7709519507",
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "09:00", "closes": "19:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "09:00", "closes": "19:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "09:00", "closes": "19:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "09:00", "closes": "19:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "09:00", "closes": "19:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "19:00" }
      ],
      "sameAs": [
        "https://www.facebook.com/shreedentalclinic",
        "https://www.instagram.com/shreedentalclinic28",
        "https://www.linkedin.com/company/shree-dental-clinic-pune"
      ]
    }),
  }}
/>
      </body>
    </html>
  );
}
