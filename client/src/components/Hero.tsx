import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 gradient-hero overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-green-600 font-semibold text-sm tracking-wide">
                  ✨ Transforme sua presença online
                </span>
              </div>
              <h1 
                className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Padronização & Google Meu Negócio
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Desenvolvemos sites profissionais e otimizamos sua presença no Google para atrair mais clientes.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              {[
                'Sites modernos e responsivos',
                'Otimização Google Meu Negócio',
                'Aumento de conversões garantido'
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/5537991309341"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-accent text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-smooth hover:shadow-soft-lg transform hover:scale-105"
              >
                Solicitar Orçamento
              </a>
              <a
                href="#portfolio"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold transition-smooth hover:bg-green-50"
              >
                Ver Portfólio
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-100 rounded-3xl blur-3xl opacity-30"></div>
              <img
                src="images/home.png"
                alt="Desenvolvimento Web"
                className="relative w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
