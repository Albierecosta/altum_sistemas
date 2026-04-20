import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Expresso Lupo",
    category: "Site Institucional",
    description:
      "Projeto institucional para fortalecer credibilidade da marca no setor de transporte.",
    scope: ["Identidade digital", "Estrutura", "Conteúdo"],
    link: "https://expressolupo.com.br/",
    image: "images/logo-expresso-lupo.jpeg",
  },
  {
    title: "WM Imóveis",
    category: "Site + SEO Local",
    description:
      "Site para imobiliária com foco em usabilidade, organização de imóveis e presença local.",
    scope: ["Arquitetura", "Busca", "SEO local"],
    link: "https://www.wmimoveis.com.br/",
    image: "images/logo-wm-imoveis.png",
  },
  {
    title: "Altum Sistemas",
    category: "Corporativo",
    description:
      "Presença corporativa para apresentar serviços, portfólio e comunicação institucional.",
    scope: ["Layout", "Conteúdo", "Formulário integrado"],
    link: "https://www.altumsistemas.com.br/",
    image: "images/altum.png",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 -right-20 glow-orb h-72 w-72 bg-cyan-300" />
      <div className="absolute bottom-40 -left-20 glow-orb h-72 w-72 bg-indigo-300" />

      <div className="container relative">
        <div className="grid md:grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-8 reveal-up">
            <p className="eyebrow eyebrow-light mb-4">
              <ExternalLink size={14} />
              Cases reais
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900">
              Projetos <span className="gradient-text">no ar</span>, resultados na mesa
            </h2>
          </div>
          <div className="lg:col-span-4 reveal-up reveal-delay-2">
            <p className="text-slate-600 leading-relaxed">
              Uma amostra do padrão Altum em diferentes segmentos — de transporte a imobiliária.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative rounded-3xl overflow-hidden glass-card hover-lift reveal-up reveal-delay-${index + 1}`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-teal-800 shadow-soft">
                  {project.category}
                </span>
                <span className="absolute top-4 right-4 text-white/80 font-display font-bold text-xl">
                  0{index + 1}
                </span>
                <div className="absolute inset-x-6 bottom-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.scope.map(s => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-teal-700 hover:text-teal-800 transition-smooth group/link"
                >
                  Ver projeto no ar
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-100 text-teal-700 transition-transform group-hover/link:rotate-45">
                    <ArrowUpRight size={14} strokeWidth={2.5} />
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-3xl surface-ink p-10 md:p-14 shadow-premium">
          <div className="aurora-dark" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-white">
            <div className="max-w-2xl">
              <h3 className="font-display text-3xl md:text-5xl mb-4">
                Seu projeto pode ser o <span className="gradient-text-light">próximo</span>
              </h3>
              <p className="text-slate-300 text-lg">
                Conta pra gente o que você precisa. Respondo com uma proposta em até 24h.
              </p>
            </div>
            <a
              href="https://wa.me/5537991272109"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium whitespace-nowrap"
            >
              Solicitar proposta
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
