import { ArrowRight, BadgeCheck, Layers3, Rocket, Sparkles, Star } from "lucide-react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";

const highlights = [
  {
    title: "Sites com padrão premium",
    description:
      "Design estratégico com navegação clara, carregamento rápido e presença institucional forte.",
    href: "/servicos",
    action: "Conhecer serviços",
  },
  {
    title: "Portfólio com prova real",
    description:
      "Projetos publicados com foco em credibilidade, posicionamento local e conversão.",
    href: "/portfolio",
    action: "Ver projetos",
  },
  {
    title: "Atendimento direto",
    description:
      "Fale sobre o seu objetivo e receba um direcionamento claro para tirar o projeto do papel.",
    href: "/contato",
    action: "Entrar em contato",
  },
];

export default function Home() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden gradient-hero py-20 md:py-28">
        <div className="glow-orb h-48 w-48 bg-emerald-400 top-10 left-8" />
        <div className="glow-orb h-56 w-56 bg-cyan-400 bottom-12 right-4" />
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="max-w-3xl space-y-8 reveal-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-800 shadow-soft">
                <Sparkles size={16} />
                Site institucional completo, não só landing page
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight text-balance">
                Seu novo site com páginas de verdade e cara de marca grande
              </h1>
              <p className="text-lg md:text-2xl text-slate-600 max-w-3xl">
                Estruturamos um site pronto para apresentar serviços, cases e contato em
                páginas dedicadas, com experiência fluida no desktop e no mobile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5537991272109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-accent text-white px-8 py-4 rounded-xl font-semibold tracking-wide inline-flex items-center justify-center gap-2 transition-smooth hover:shadow-soft-lg"
                >
                  Quero esse site agora
                  <ArrowRight size={18} />
                </a>
                <Link
                  href="/portfolio"
                  className="border-2 border-teal-700 text-teal-800 px-8 py-4 rounded-xl font-semibold transition-smooth hover:bg-teal-50 inline-flex items-center justify-center"
                >
                  Explorar portfólio
                </Link>
              </div>
            </div>

            <div className="relative lg:justify-self-end w-full max-w-md reveal-up">
              <article className="surface-dark rounded-3xl p-6 shadow-soft-lg text-white float-soft relative z-10">
                <p className="text-sm uppercase tracking-[0.18em] text-teal-300 mb-3">
                  Altum Signature
                </p>
                <h2 className="text-3xl mb-5">
                  Visual premium com estrutura pensada para vender mais
                </h2>
                <div className="space-y-4 text-slate-200">
                  <p className="flex items-start gap-3">
                    <BadgeCheck size={18} className="text-teal-300 mt-0.5" />
                    Navegação por páginas para posicionamento profissional.
                  </p>
                  <p className="flex items-start gap-3">
                    <Rocket size={18} className="text-teal-300 mt-0.5" />
                    Performance rápida para desktop e celular.
                  </p>
                  <p className="flex items-start gap-3">
                    <Layers3 size={18} className="text-teal-300 mt-0.5" />
                    Conteúdo modular para crescer sem retrabalho.
                  </p>
                </div>
              </article>

              <article className="surface-premium rounded-2xl p-4 shadow-soft w-52 hidden sm:block float-soft-delayed mt-4 sm:ml-4 lg:-ml-10">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.14em]">
                  Autoridade digital
                </p>
                <p className="text-slate-900 text-xl mt-1">+3x</p>
                <p className="text-slate-600 text-sm">mais percepção de valor da marca</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-3 gap-4 reveal-up">
            {[
              { value: "100%", label: "Responsivo" },
              { value: "A+", label: "Acabamento visual" },
              { value: "24h", label: "Retorno inicial" },
            ].map(stat => (
              <div key={stat.label} className="surface-premium rounded-2xl p-5 shadow-soft">
                <p className="text-3xl text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 grid-noise opacity-45" />
        <div className="container relative">
          <div className="mb-10 max-w-2xl reveal-up">
            <p className="text-sm uppercase tracking-[0.16em] text-teal-700 font-semibold mb-2">
              Mapa do site
            </p>
            <h2 className="text-4xl md:text-6xl text-slate-900">Cada página com um objetivo claro</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map(item => (
              <article
                key={item.title}
                className="surface-premium rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-smooth reveal-up"
              >
                <p className="text-teal-700 text-sm font-semibold tracking-wide mb-2">Seção estratégica</p>
                <h3 className="text-2xl text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 mb-6">{item.description}</p>
                <Link
                  href={item.href}
                  className="text-teal-700 font-semibold inline-flex items-center gap-2 hover:text-teal-800 transition-smooth"
                >
                  {item.action}
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-12 surface-dark rounded-3xl px-6 py-8 md:px-10 md:py-10 text-white shadow-soft-lg reveal-up">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-teal-300 text-sm uppercase tracking-[0.16em] mb-2">Pronto para subir de nível</p>
                <p className="text-3xl md:text-4xl">Seu site pode ficar nesse padrão ainda essa semana.</p>
              </div>
              <a
                href="https://wa.me/5537991272109"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold inline-flex items-center justify-center gap-2 transition-smooth hover:bg-slate-100"
              >
                Vamos começar
                <Star size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
