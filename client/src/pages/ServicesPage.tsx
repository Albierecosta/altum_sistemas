import { ArrowRight, Sparkles } from "lucide-react";
import Services from "@/components/Services";
import SiteLayout from "@/components/SiteLayout";

export default function ServicesPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden gradient-hero py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl reveal-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-800 mb-4">
              <Sparkles size={14} />
              O que a Altum entrega
            </p>
            <h1 className="text-5xl md:text-6xl text-slate-900 mb-4">
              Serviços para posicionar sua empresa como referência
            </h1>
            <p className="text-lg text-slate-600">
              Da estrutura do site até otimização local, cada serviço foi desenhado para
              transformar presença digital em autoridade comercial.
            </p>
          </div>
        </div>
      </section>
      <Services />
      <section className="py-16 bg-white">
        <div className="container text-center">
          <p className="text-slate-600 mb-6">
            Quer combinar esses serviços em um pacote para sua empresa?
          </p>
          <a
            href="https://wa.me/5537991272109"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-accent text-white px-8 py-3 rounded-xl font-semibold transition-smooth hover:shadow-soft-lg inline-flex items-center gap-2"
          >
            Pedir proposta no WhatsApp
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
