"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import AIDentalAssistant from "@/components/AIDentalAssistant";

export default function AIAssistantButton() {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsAiModalOpen(true)}
        className="fixed bottom-20 right-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Open AI Dental Assistant"
      >
        <Sparkles size={24} />
      </button>

      {/* AI Assistant Modal */}
      <AIDentalAssistant
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
      />
    </>
  );
}
