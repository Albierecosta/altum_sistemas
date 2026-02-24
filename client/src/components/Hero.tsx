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
            <div className="relative min-h-[420px]">
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/70 to-cyan-100/70 rounded-3xl blur-3xl opacity-40"></div>

              <article className="relative surface-premium rounded-3xl p-5 shadow-soft-lg">
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-teal-700 mb-3">
                  Projeto em destaque
                </p>
                <img
                  src="images/logo-expresso-lupo.jpeg"
                  alt="Projeto Expresso Lupo"
                  className="w-full h-[260px] rounded-2xl object-cover border border-slate-200"
                />
                <div className="mt-4">
                  <p className="text-slate-900 font-semibold">Expresso Lupo</p>
                  <p className="text-sm text-slate-600">Site institucional com foco em presença digital.</p>
                </div>
              </article>

              <article className="absolute -bottom-8 -left-8 surface-premium rounded-2xl p-4 shadow-soft w-56">
                <img
                  src="images/logo-wm-imoveis.png"
                  alt="Projeto Site Imobiliária"
                  className="w-full h-20 object-contain"
                />
                <p className="mt-2 text-xs font-medium text-slate-600">Projeto imobiliário</p>
              </article>

              <article className="absolute -top-8 -right-6 surface-premium rounded-2xl p-4 shadow-soft w-40">
                <img
                  src="images/altum.png"
                  alt="Projeto Agência de Marketing"
                  className="w-full h-20 object-contain"
                />
                <p className="mt-2 text-xs font-medium text-slate-600 text-center">Projeto corporativo</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
