import { Globe, MapPin, Zap, Users } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Padronização de Sites',
    description: 'Desenvolvemos sites modernos, responsivos e otimizados para conversão. Design profissional que reflete sua marca.',
    features: ['Design responsivo', 'Performance otimizada', 'SEO integrado']
  },
  {
    icon: MapPin,
    title: 'Google Meu Negócio',
    description: 'Otimizamos sua presença no Google Meu Negócio para aparecer nos resultados locais e atrair mais clientes.',
    features: ['Otimização completa', 'Gerenciamento de avaliações', 'Análise de dados']
  },
  {
    icon: Zap,
    title: 'Performance Web',
    description: 'Sites rápidos e eficientes que proporcionam melhor experiência ao usuário e melhor ranking no Google.',
    features: ['Velocidade otimizada', 'Cache inteligente', 'CDN global']
  },
  {
    icon: Users,
    title: 'Consultoria Digital',
    description: 'Orientamos sua estratégia digital para maximizar resultados e ROI em seus investimentos online.',
    features: ['Análise estratégica', 'Planejamento customizado', 'Acompanhamento contínuo']
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 gradient-section">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital e atrair mais clientes
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-smooth group border border-gray-100"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                  <Icon size={32} className="text-green-600" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
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
