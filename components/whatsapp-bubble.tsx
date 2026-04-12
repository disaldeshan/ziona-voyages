'use client';

import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '94779152040';
const WHATSAPP_MESSAGE = 'Hello! I am interested in a trip to Sri Lanka. Could you help me plan my journey?';

export default function WhatsAppBubble() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg shadow-black/30 transition-all duration-200 hover:scale-105 active:scale-95 group px-4 py-3"
    >
      <MessageCircle size={24} fill="white" stroke="transparent" />
      <span className="text-sm font-semibold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}
