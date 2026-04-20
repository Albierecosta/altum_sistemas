import { ArrowRight, Check, Cpu, Sparkles } from "lucide-react";

type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceSuffix?: string;
  features: string[];
  cta: string;
  whatsappMessage: string;
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    id: "landing",
    name: "Landing Page",
    tagline: "Uma página focada em conversão — perfeita pra campanhas e lançamentos.",
    price: "R$ 199",
    priceSuffix: "projeto único",
    features: [
      "1 página otimizada para conversão",
      "Design responsivo (celular ao 4K)",
      "Botão de WhatsApp e formulário",
      "Publicação em domínio próprio",
    ],
    cta: "Começar com landing",
    whatsappMessage:
      "Olá! Tenho interesse no plano Landing Page (R$ 199). Pode me passar mais detalhes?",
  },
  {
    id: "basico",
    name: "Site Básico",
    tagline: "Presença institucional enxuta pra quem está começando forte.",
    price: "R$ 299",
    priceSuffix: "projeto único",
    features: [
      "Até 3 páginas (Home, Sobre, Contato)",
      "Design responsivo e performance otimizada",
      "SEO básico e integração com Google",
      "Formulário de contato e WhatsApp",
    ],
    cta: "Quero o básico",
    whatsappMessage:
      "Olá! Tenho interesse no plano Site Básico (R$ 299). Pode me passar mais detalhes?",
  },
  {
    id: "padrao",
    name: "Site Padrão",
    tagline: "O equilíbrio entre estrutura, design e autoridade de marca.",
    price: "R$ 499",
    priceSuffix: "projeto único",
    features: [
      "Até 6 páginas com conteúdo estratégico",
      "Portfólio, serviços e depoimentos",
      "SEO avançado + Google Analytics",
      "Painel para atualizar conteúdo",
      "Suporte 30 dias pós-entrega",
    ],
    cta: "Escolher o Padrão",
    whatsappMessage:
      "Olá! Tenho interesse no plano Site Padrão (R$ 499). Pode me passar mais detalhes?",
    highlighted: true,
  },
  {
    id: "avancado",
    name: "Site Avançado",
    tagline: "Pra marcas que precisam impressionar desde o primeiro clique.",
    price: "R$ 999",
    priceSuffix: "projeto único",
    features: [
      "Páginas ilimitadas + conteúdo sob medida",
      "Design premium com microinterações",
      "Blog integrado e CMS personalizado",
      "SEO completo + integrações (Meta, Google, CRM)",
      "Suporte estendido de 90 dias",
    ],
    cta: "Quero o Avançado",
    whatsappMessage:
      "Olá! Tenho interesse no plano Site Avançado (R$ 999). Pode me passar mais detalhes?",
  },
];

const WHATSAPP_BASE = "https://wa.me/5537991272109";

function whatsappUrl(message: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export default function Services() {
  return (
    <section id="servicos" className="relative py-24 gradient-section overflow-hidden">
      <div className="absolute top-20 -left-20 glow-orb h-72 w-72 bg-teal-300" />
      <div className="absolute bottom-24 -right-24 glow-orb h-80 w-80 bg-cyan-300" />

      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <p className="eyebrow eyebrow-light mx-auto mb-5">
            <Sparkles size={14} />
            Planos e investimento
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-5">
            Escolha o plano certo pra <span className="gradient-text">sua empresa</span>
          </h2>
          <p className="text-lg text-slate-600">
            Pacotes prontos, preço fechado e entrega rápida. Sem mensalidade escondida,
            sem surpresa no orçamento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-3xl p-7 transition-all duration-300 reveal-up reveal-delay-${idx + 1} ${
                plan.highlighted
                  ? "surface-ink shimmer-border text-white shadow-premium lg:-translate-y-5 lg:scale-[1.04]"
                  : "glass-card shadow-soft hover-lift"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900 shadow-glow-teal">
                  Mais escolhido
                </span>
              )}

              <div className="mb-6">
                <p
                  className={`text-[11px] font-bold uppercase tracking-[0.22em] mb-2 ${
                    plan.highlighted ? "text-teal-300" : "text-teal-700"
                  }`}
                >
                  {plan.name}
                </p>
                <p
                  className={`text-sm leading-relaxed ${
                    plan.highlighted ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {plan.tagline}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-5xl md:text-6xl font-bold leading-none ${
                      plan.highlighted ? "gradient-text-light" : "gradient-text"
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>
                {plan.priceSuffix && (
                  <p
                    className={`text-[11px] mt-2 uppercase tracking-[0.18em] ${
                      plan.highlighted ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {plan.priceSuffix}
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map(feature => (
                  <li
                    key={feature}
                    className={`flex items-start gap-3 text-sm leading-relaxed ${
                      plan.highlighted ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.highlighted
                          ? "bg-teal-400/20 text-teal-300 border border-teal-400/40"
                          : "bg-teal-100 text-teal-700"
                      }`}
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappUrl(plan.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-semibold transition-smooth ${
                  plan.highlighted
                    ? "bg-white text-slate-900 hover:bg-slate-100 shadow-glow-teal"
                    : "btn-premium"
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-20 reveal-up">
          <article className="relative overflow-hidden surface-ink rounded-3xl p-8 md:p-12 text-white shadow-premium">
            <div className="aurora-dark" />
            <div className="absolute inset-0 grain-overlay" />
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="eyebrow eyebrow-dark mb-5">
                  <Cpu size={14} />
                  Apps & integrações
                </div>
                <h3 className="font-display text-3xl md:text-5xl mb-4">
                  Precisa de algo <span className="gradient-text-light">sob medida</span>?
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Apps mobile, ERPs, integrações com Meta, Google, CRMs, automações,
                  pagamentos e APIs. Cada projeto recebe um orçamento dedicado após briefing.
                </p>
              </div>
              <a
                href={whatsappUrl(
                  "Olá! Quero conversar sobre um projeto de app ou integração sob medida.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium whitespace-nowrap"
              >
                Solicitar orçamento
                <ArrowRight size={18} />
              </a>
            </div>
          </article>
        </div>

        <p className="text-center text-sm text-slate-500 mt-10">
          Valores à vista via Pix (10% de desconto). Parcelamento em até 3x sem juros no cartão.
        </p>
      </div>
    </section>
  );
}
