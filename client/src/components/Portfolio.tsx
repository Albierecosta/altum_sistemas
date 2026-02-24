import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Expresso Lupo',
    category: 'Site Institucional',
    description: 'Projeto institucional para fortalecer credibilidade da marca no setor de transporte.',
    scope: 'Escopo: identidade digital, estrutura e conteúdo',
    link: 'https://expressolupo.com.br/',
    image: 'images/logo-expresso-lupo.jpeg'
  },
  {
    title: 'Site Imobiliária',
    category: 'Site + SEO Local',
    description: 'Site para imobiliária com foco em usabilidade, organização de imóveis e presença local.',
    scope: 'Escopo: arquitetura, busca e otimização local',
    link: 'https://www.wmimoveis.com.br/',
    image: 'images/logo-wm-imoveis.png'
  },
  {
    title: 'Agência de Marketing',
    category: 'Corporativo',
    description: 'Presença corporativa para apresentar serviços, portfólio e comunicação institucional.',
    scope: 'Escopo: layout, conteúdo e formulário integrado',
    link: 'https://www.altumsistemas.com.br/',
    image: 'images/altum.png'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900">
            Projetos Selecionados
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Alguns trabalhos desenvolvidos pela Altum Sistemas em diferentes segmentos.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
                className="group rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-smooth border border-slate-200 hover:border-teal-300 bg-white"
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
                <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {project.description}
                </p>
                <p className="text-sm font-semibold text-slate-900 mb-4">{project.scope}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800 transition-smooth"
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
          <p className="text-slate-600 mb-6">
            Quer conversar sobre o seu projeto? Entre em contato e vamos construir algo alinhado à sua marca.
          </p>
              <a
                href="https://wa.me/5537991309341"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-accent text-white px-8 py-3 rounded-xl font-semibold transition-smooth hover:shadow-soft-lg transform hover:scale-105"
              >
                Solicitar proposta
              </a>
        </div>
      </div>
    </section>
  );
}
