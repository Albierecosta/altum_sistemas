import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ChevronDown,
  Layers3,
  MessageCircle,
  PencilRuler,
  Rocket,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";

const highlights = [
  {
    title: "Planos com preço fechado",
    description:
      "Da landing a partir de R$ 199 ao site avançado com CMS. Sem mensalidade escondida, sem surpresa.",
    href: "/servicos",
    action: "Ver planos e valores",
    icon: Layers3,
  },
  {
    title: "Portfólio com prova real",
    description:
      "Projetos publicados para clientes reais, com foco em credibilidade e conversão.",
    href: "/portfolio",
    action: "Ver projetos",
    icon: Star,
  },
  {
    title: "Apps e integrações sob medida",
    description:
      "Apps mobile, ERPs, integrações com Meta, Google, CRMs, automações e APIs.",
    href: "/contato",
    action: "Solicitar orçamento",
    icon: Zap,
  },
];

const marqueeItems = [
  "Landing Pages",
  "Sites Institucionais",
  "E-commerce",
  "Apps Mobile",
  "Integrações",
  "Google Ads",
  "SEO Local",
  "Automação",
  "CMS",
  "APIs",
];

const steps = [
  {
    number: "01",
    title: "Briefing em 10 minutos",
    description:
      "Conversa rápida no WhatsApp pra entender seu negócio, objetivo e referências visuais.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Design e aprovação",
    description:
      "Você recebe o layout pronto em poucos dias, com ajustes ilimitados até bater a identidade.",
    icon: PencilRuler,
  },
  {
    number: "03",
    title: "Desenvolvimento ágil",
    description:
      "Código limpo, performance alta, SEO integrado e responsivo do celular ao desktop 4K.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Publicação + suporte",
    description:
      "Site no ar no seu domínio, com treinamento e suporte pós-entrega pra você começar forte.",
    icon: BadgeCheck,
  },
];

const testimonials = [
  {
    quote:
      "Site ficou com visual muito acima da média dos concorrentes da região. O retorno dos clientes foi imediato.",
    author: "Expresso Lupo",
    role: "Transporte",
  },
  {
    quote:
      "Processo rápido, direto e profissional. Entregaram antes do prazo e o resultado superou as expectativas.",
    author: "WM Imóveis",
    role: "Imobiliária",
  },
  {
    quote:
      "Mais do que um site: uma estrutura pronta pra crescer. Design premium e suporte impecável.",
    author: "Altum Sistemas",
    role: "Marketing Digital",
  },
];

const faqs = [
  {
    q: "Em quanto tempo meu site fica pronto?",
    a: "Landing pages ficam prontas em até 5 dias úteis. Sites institucionais padrão em 10-15 dias úteis. Projetos avançados variam de 20 a 30 dias, sempre com prazo combinado no início.",
  },
  {
    q: "Posso parcelar o pagamento?",
    a: "Sim. Oferecemos 10% de desconto no Pix à vista ou parcelamento em até 3x sem juros no cartão de crédito.",
  },
  {
    q: "Quem hospeda o site depois?",
    a: "Indicamos e configuramos a hospedagem mais adequada ao plano contratado. Você fica dono do domínio e do código.",
  },
  {
    q: "E se eu precisar de algo fora dos planos fixos?",
    a: "Apps mobile, sistemas, integrações ou projetos complexos são orçados sob medida. É só chamar no WhatsApp com o escopo.",
  },
  {
    q: "Tem suporte depois que o site entra no ar?",
    a: "Sim. O Plano Padrão inclui 30 dias e o Avançado 90 dias de suporte. Depois disso, oferecemos planos de manutenção mensal opcionais.",
  },
];

export default function Home() {
  return (
    <SiteLayout>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden gradient-hero pt-16 pb-28 md:pt-20 md:pb-36">
        <div className="aurora" />
        <div className="absolute inset-0 grain-overlay" />

        <div className="container relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8 reveal-up">
              <div className="eyebrow eyebrow-light">
                <Sparkles size={14} />
                Planos a partir de R$ 199
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-slate-900 leading-[1.02] text-balance">
                Seu site com{" "}
                <span className="gradient-text">cara de marca grande</span>{" "}
                e preço que cabe.
              </h1>
              <p className="text-lg md:text-2xl text-slate-600 max-w-2xl leading-relaxed">
                Landing pages, sites institucionais, apps e integrações. Entrega rápida, design premium
                e código que performa — sem mensalidade escondida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/servicos" className="btn-premium">
                  Ver planos e valores
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/5537991272109?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20falar%20sobre%20um%20projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-premium"
                >
                  Falar no WhatsApp
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <BadgeCheck size={16} className="text-teal-600" />
                  <span className="font-semibold">Retorno em 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck size={16} className="text-teal-600" />
                  <span className="font-semibold">Design sob medida</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck size={16} className="text-teal-600" />
                  <span className="font-semibold">Código 100% proprietário</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative reveal-up reveal-delay-2">
              <div className="relative">
                {/* Glow behind cards */}
                <div className="absolute -inset-6 bg-gradient-to-br from-teal-300/40 via-cyan-200/30 to-indigo-300/30 rounded-[3rem] blur-3xl opacity-70" />

                {/* Main showcase card */}
                <article className="relative surface-dark rounded-3xl p-7 shadow-premium text-white float-soft">
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-teal-300 font-bold">
                      Altum Signature
                    </p>
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                    </div>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl mb-5 leading-tight">
                    Visual premium com estrutura pensada pra{" "}
                    <span className="gradient-text-light">vender mais</span>
                  </h2>
                  <div className="space-y-3 text-slate-300 text-sm">
                    {[
                      "Navegação por páginas e hierarquia clara",
                      "Performance rápida em desktop e celular",
                      "Conteúdo modular pra crescer sem retrabalho",
                    ].map(item => (
                      <p key={item} className="flex items-start gap-3">
                        <BadgeCheck size={16} className="text-teal-300 mt-0.5 shrink-0" />
                        {item}
                      </p>
                    ))}
                  </div>
                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                        Investimento a partir
                      </p>
                      <p className="text-3xl font-bold text-white">
                        R$ 199<span className="text-sm text-slate-400 font-normal">/projeto</span>
                      </p>
                    </div>
                    <Link
                      href="/servicos"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 text-slate-900 transition-transform hover:rotate-45 hover:scale-105"
                    >
                      <ArrowUpRight size={20} strokeWidth={2.5} />
                    </Link>
                  </div>
                </article>

                {/* Floating stat card */}
                <article className="absolute -top-6 -left-6 glass-card rounded-2xl p-4 w-48 float-soft-delayed hidden md:block">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-teal-700 mb-1">
                    Autoridade
                  </p>
                  <p className="text-3xl font-bold gradient-text leading-none">+3x</p>
                  <p className="text-xs text-slate-600 mt-1">percepção de valor da marca</p>
                </article>

                {/* Floating rating card */}
                <article className="absolute -bottom-6 -right-4 glass-card rounded-2xl p-4 w-52 float-soft hidden md:block">
                  <div className="flex items-center gap-1 mb-2 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-slate-900">5.0 no Google</p>
                  <p className="text-xs text-slate-600">Clientes recomendam</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Marquee ===== */}
      <section className="relative bg-slate-950 text-white py-6 overflow-hidden">
        <div className="marquee">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide whitespace-nowrap"
              >
                <span className="text-teal-400">✦</span>
                <span className="text-slate-300">{item}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container relative">
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6 reveal-up">
            {[
              { value: "100%", label: "Responsivo do celular ao 4K" },
              { value: "A+", label: "Acabamento visual premium" },
              { value: "24h", label: "Retorno inicial no WhatsApp" },
            ].map(stat => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-7 hover-lift"
              >
                <p className="text-5xl md:text-6xl font-bold gradient-text leading-none mb-3">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Highlights (cada página com objetivo) ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="container relative">
          <div className="mb-14 max-w-2xl reveal-up">
            <p className="eyebrow eyebrow-light mb-4">
              <Layers3 size={14} />
              Mapa do site
            </p>
            <h2 className="text-4xl md:text-6xl text-slate-900 mb-4">
              Cada página com <span className="gradient-text">um objetivo claro</span>
            </h2>
            <p className="text-lg text-slate-600">
              Nada de conteúdo genérico. Toda seção foi pensada pra converter visitantes em clientes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className={`glass-card rounded-3xl p-8 hover-lift reveal-up reveal-delay-${idx + 1}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-glow-teal mb-5">
                    <Icon size={22} />
                  </div>
                  <p className="text-xs text-teal-700 font-bold uppercase tracking-[0.18em] mb-2">
                    Seção estratégica
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{item.description}</p>
                  <Link
                    href={item.href}
                    className="link-reveal text-teal-700 font-semibold inline-flex items-center gap-2 hover:text-teal-800 transition-smooth"
                  >
                    {item.action}
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Process Steps ===== */}
      <section className="relative overflow-hidden surface-ink text-white py-24">
        <div className="aurora-dark" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="container relative">
          <div className="max-w-2xl mb-14 reveal-up">
            <p className="eyebrow eyebrow-dark mb-4">
              <Rocket size={14} />
              Como funciona
            </p>
            <h2 className="text-4xl md:text-6xl text-white mb-4">
              Do briefing ao <span className="gradient-text-light">ar</span> em poucas semanas
            </h2>
            <p className="text-lg text-slate-300">
              Processo enxuto, sem burocracia. Você acompanha cada etapa e fala direto com quem
              coloca a mão no código.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.number}
                  className={`relative glass-card-dark rounded-3xl p-7 hover-lift reveal-up reveal-delay-${idx + 1}`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-5xl font-display font-bold gradient-text-light leading-none">
                      {step.number}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-teal-300">
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal-up">
            <p className="eyebrow eyebrow-light mb-4 mx-auto">
              <Star size={14} />
              O que dizem
            </p>
            <h2 className="text-4xl md:text-6xl text-slate-900">
              Clientes que viraram <span className="gradient-text">cases</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <article
                key={t.author}
                className={`glass-card rounded-3xl p-8 hover-lift reveal-up reveal-delay-${idx + 1}`}
              >
                <div className="flex gap-1 mb-5 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="pt-5 border-t border-slate-200/70">
                  <p className="font-bold text-slate-900">{t.author}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 gradient-section relative overflow-hidden">
        <div className="absolute top-0 right-0 glow-orb h-80 w-80 bg-teal-300" />
        <div className="absolute bottom-0 left-0 glow-orb h-72 w-72 bg-indigo-300" />

        <div className="container relative">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 reveal-up">
              <p className="eyebrow eyebrow-light mb-4">Dúvidas frequentes</p>
              <h2 className="text-4xl md:text-5xl text-slate-900 mb-4">
                Tudo que você precisa saber antes de <span className="gradient-text">começar</span>
              </h2>
              <p className="text-slate-600 mb-6">
                Não encontrou sua resposta? Manda mensagem no WhatsApp que eu respondo em até 24h úteis.
              </p>
              <a
                href="https://wa.me/5537991272109"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-premium"
              >
                Falar agora
                <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="lg:col-span-7 space-y-3 reveal-up reveal-delay-2">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} q={faq.q} a={faq.a} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl surface-ink p-10 md:p-16 shadow-premium">
            <div className="aurora-dark" />
            <div className="absolute inset-0 grain-overlay" />
            <div className="relative text-center max-w-3xl mx-auto text-white">
              <p className="eyebrow eyebrow-dark mx-auto mb-5">
                <Sparkles size={14} />
                Pronto pra subir de nível
              </p>
              <h2 className="font-display text-4xl md:text-6xl mb-5">
                Seu site pode ficar nesse padrão{" "}
                <span className="gradient-text-light">ainda essa semana</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Escolha um plano fechado ou peça um projeto sob medida. Em 10 minutos de conversa
                a gente já sabe o caminho.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://wa.me/5537991272109?text=Ol%C3%A1!%20Quero%20come%C3%A7ar%20meu%20projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium"
                >
                  Começar meu projeto
                  <ArrowRight size={18} />
                </a>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white/90 border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 transition-smooth"
                >
                  Ver portfólio
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={`glass-card rounded-2xl overflow-hidden transition-all ${
        open ? "shadow-soft-lg" : ""
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
      >
        <span className="font-semibold text-slate-900 text-base md:text-lg">{q}</span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 text-white transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={16} />
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 md:px-6 pb-6 text-slate-600 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}
