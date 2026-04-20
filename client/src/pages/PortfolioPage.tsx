import { ExternalLink } from "lucide-react";
import Portfolio from "@/components/Portfolio";
import SiteLayout from "@/components/SiteLayout";

export default function PortfolioPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden gradient-hero pt-12 pb-20 md:pt-16 md:pb-24">
        <div className="aurora" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="container relative">
          <div className="max-w-4xl reveal-up">
            <p className="eyebrow eyebrow-light mb-5">
              <ExternalLink size={14} />
              Cases reais publicados
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-slate-900 mb-6 text-balance">
              Portfólio que mostra <span className="gradient-text">resultado</span>, não promessa
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 max-w-2xl leading-relaxed">
              Projetos com identidade forte e experiência de usuário que transmite valor
              desde o primeiro clique.
            </p>
          </div>
        </div>
      </section>
      <Portfolio />
    </SiteLayout>
  );
}
