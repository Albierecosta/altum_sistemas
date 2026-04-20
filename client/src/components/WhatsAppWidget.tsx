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
      className="fixed bottom-6 right-6 z-[60] group"
    >
      <span className="absolute right-[72px] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-soft-lg opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        Fale no WhatsApp
        <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-slate-900" />
      </span>
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft-lg transition-transform duration-300 group-hover:scale-110 pulse-glow">
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2ee672] to-[#128c7e] opacity-0 group-hover:opacity-100 transition-opacity" />
        <MessageCircle size={30} className="relative" strokeWidth={2.2} />
      </span>
      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold shadow-soft border-2 border-white">
        1
      </span>
    </a>
  );
}
