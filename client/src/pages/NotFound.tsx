import { ArrowRight, Compass, Home } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero px-4">
      <div className="aurora" />
      <div className="absolute inset-0 grain-overlay" />
      <div className="absolute top-10 left-10 glow-orb h-72 w-72 bg-teal-300" />
      <div className="absolute bottom-10 right-10 glow-orb h-72 w-72 bg-indigo-300" />

      <div className="relative glass-card rounded-3xl p-10 md:p-14 max-w-xl w-full text-center shadow-premium reveal-up">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-indigo-400 rounded-2xl blur-2xl opacity-50" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-glow-teal">
              <Compass size={28} />
            </div>
          </div>
        </div>

        <p className="eyebrow eyebrow-light mx-auto mb-5">Erro 404</p>
        <h1 className="font-display text-6xl md:text-7xl font-bold gradient-text mb-4 leading-none">
          Perdido no mapa
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed mb-8">
          A página que você procurou não existe ou foi movida. Mas relaxa — a gente te leva de volta.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-premium">
            <Home size={16} />
            Voltar pro início
          </Link>
          <Link href="/servicos" className="btn-ghost-premium">
            Ver planos
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
