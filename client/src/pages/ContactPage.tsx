import { MessageCircleMore } from "lucide-react";
import Contact from "@/components/Contact";
import SiteLayout from "@/components/SiteLayout";

export default function ContactPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden gradient-hero py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl reveal-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-800 mb-4">
              <MessageCircleMore size={14} />
              Atendimento consultivo
            </p>
            <h1 className="text-5xl md:text-6xl text-slate-900 mb-4">
              Vamos deixar seu próximo site muito acima da média
            </h1>
            <p className="text-lg text-slate-600">
              Conte seu cenário e vamos montar uma proposta com escopo, estética e foco no
              resultado da sua marca.
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </SiteLayout>
  );
}
