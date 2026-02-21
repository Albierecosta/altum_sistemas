import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Expresso Lupo',
    category: 'Site',
    description: 'Site institucional para empresa de transporte rodoviário, com otimização SEO e integração Google Analytics',
    link: 'https://expressolupo.com.br/',
    image: '../public/images/logo-expresso-lupo.jpeg'
  },
  {
    title: 'Site Imobiliária',
    category: 'Site + SEO',
    description: 'Site para imobiliária com sistema de busca de imóveis, otimização SEO',
    link: 'https://www.wmimoveis.com.br/',
    image: '../public/images/logo-wm-imoveis.png'
  },
  {
    title: 'Agência de Marketing',
    category: 'Corporativo',
    description: 'Site corporativo com portfólio e sistema de contato integrado',
    link: 'https://www.altumsistemas.com.br/',
    image: '../public/images/altum.png'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Nossos Projetos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos sites que desenvolvemos e otimizamos para nossos clientes
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-smooth border border-gray-100 hover:border-green-200"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-smooth flex items-center justify-center">
                  <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-smooth" size={32} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2" style={{ fontFamily: 'Playfair Display' }}>
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-smooth"
                >
                  Visualizar
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Quer ver mais projetos? Entre em contato para conhecer nosso portfólio completo
          </p>
              <a
                href="https://wa.me/5537991309341"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-accent text-white px-8 py-3 rounded-lg font-semibold transition-smooth hover:shadow-soft-lg transform hover:scale-105"
              >
                Solicitar Orçamento Completo
              </a>
        </div>
      </div>
    </section>
  );
}
