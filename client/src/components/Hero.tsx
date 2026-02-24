import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 gradient-hero overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-800">
                Altum Sistemas · Portfólio & Presença Digital
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight text-balance">
                Design digital com estética, clareza e identidade
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl font-medium">
                Desenvolvemos sites e portfólios com acabamento premium para empresas que valorizam presença institucional forte e comunicação profissional.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              {[
                'Direção visual personalizada para sua marca',
                'Estrutura limpa, rápida e responsiva',
                'Otimização para presença local no Google'
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-teal-700 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="surface-premium rounded-2xl p-5 max-w-xl shadow-soft">
              <p className="text-slate-700 font-medium">
                Cada projeto é construído com foco em consistência visual, performance e experiência do usuário.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/5537991309341"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-accent text-white px-8 py-4 rounded-xl font-semibold tracking-wide flex items-center justify-center gap-2 transition-smooth hover:shadow-soft-lg transform hover:scale-105"
              >
                Falar sobre meu projeto
                <ArrowRight size={18} />
              </a>
              <a
                href="#portfolio"
                className="border-2 border-teal-700 text-teal-800 px-8 py-4 rounded-xl font-semibold transition-smooth hover:bg-teal-50"
              >
                Ver portfólio
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-200 to-cyan-100 rounded-3xl blur-3xl opacity-40"></div>
              <img
                src="images/home.png"
                alt="Desenvolvimento Web"
                className="relative w-full h-auto rounded-3xl object-cover border border-white/70 shadow-soft-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
