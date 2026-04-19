"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "9779800000000";
  const message = encodeURIComponent("Hi Gurumantra Education Consultancy! I am interested in studying abroad. Can I get a free consultation?");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
      style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
