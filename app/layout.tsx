import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import AIAssistantButton from '@/components/AIAssistantButton';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Shree Dental Clinic - Your Trusted Dental Care Partner',
  description: 'Experience expert dental care at Shree Dental Clinic with our advanced facilities and dedicated team.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <WhatsAppButton /> */}
        <AIAssistantButton />
        {children}
      </body>
    </html>
  );
}
