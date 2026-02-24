import { Globe, MapPin, Zap, Users } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Padronização de Sites',
    description: 'Construção de sites institucionais com identidade visual consistente, navegação clara e apresentação profissional.',
    features: ['Design responsivo', 'Performance otimizada', 'SEO integrado']
  },
  {
    icon: MapPin,
    title: 'Google Meu Negócio',
    description: 'Organização e otimização do perfil para fortalecer presença local, reputação e visibilidade regional.',
    features: ['Otimização completa', 'Gerenciamento de avaliações', 'Análise de dados']
  },
  {
    icon: Zap,
    title: 'Performance Web',
    description: 'Melhorias técnicas para carregamento ágil e experiência estável em desktop e mobile.',
    features: ['Velocidade otimizada', 'Cache inteligente', 'CDN global']
  },
  {
    icon: Users,
    title: 'Consultoria Digital',
    description: 'Direcionamento estratégico para organizar presença digital, comunicação e próximos passos do projeto.',
    features: ['Análise estratégica', 'Planejamento customizado', 'Acompanhamento contínuo']
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 gradient-section">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900">
            Serviços da Altum Sistemas
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Soluções para estruturar e fortalecer a presença digital da sua empresa com padrão profissional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="surface-premium rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-smooth group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                  <Icon size={32} className="text-teal-700" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
