import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5537991272109?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Altum%20Sistemas%20e%20quero%20um%20or%C3%A7amento.";

export default function WhatsAppWidget() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className="fixed bottom-5 right-5 z-[60] group"
    >
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-soft transition-smooth group-hover:opacity-100">
        Falar no WhatsApp
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft-lg transition-smooth group-hover:scale-105">
        <MessageCircle size={28} />
      </span>
    </a>
  );
}
