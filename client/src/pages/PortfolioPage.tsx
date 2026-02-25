import { ExternalLink } from "lucide-react";
import Portfolio from "@/components/Portfolio";
import SiteLayout from "@/components/SiteLayout";

export default function PortfolioPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden gradient-hero py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl reveal-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-800 mb-4">
              <ExternalLink size={14} />
              Cases reais publicados
            </p>
            <h1 className="text-5xl md:text-6xl text-slate-900 mb-4">
              Portfólio que mostra resultado, não promessa
            </h1>
            <p className="text-lg text-slate-600">
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
