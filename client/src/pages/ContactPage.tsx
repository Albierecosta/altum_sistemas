import { MessageCircleMore } from "lucide-react";
import Contact from "@/components/Contact";
import SiteLayout from "@/components/SiteLayout";

export default function ContactPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden gradient-hero pt-12 pb-20 md:pt-16 md:pb-24">
        <div className="aurora" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="container relative">
          <div className="max-w-4xl reveal-up">
            <p className="eyebrow eyebrow-light mb-5">
              <MessageCircleMore size={14} />
              Atendimento consultivo
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-slate-900 mb-6 text-balance">
              Vamos deixar seu próximo site{" "}
              <span className="gradient-text">muito acima da média</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 max-w-2xl leading-relaxed">
              Conte seu cenário e montamos uma proposta com escopo, estética e foco no
              resultado da sua marca.
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </SiteLayout>
  );
}
