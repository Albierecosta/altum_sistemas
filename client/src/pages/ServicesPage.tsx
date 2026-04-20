import { ArrowRight, ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";
import Services from "@/components/Services";
import SiteLayout from "@/components/SiteLayout";

const includedAll = [
  "Domínio próprio configurado",
  "SSL e certificado de segurança",
  "Hospedagem orientada e performance",
  "Design 100% responsivo",
  "Integração com WhatsApp",
  "Treinamento rápido de uso",
];

const faqs = [
  {
    q: "Qual a diferença entre Landing Page e Site Básico?",
    a: "A Landing Page é uma única página focada em conversão (ideal pra campanhas ou um único serviço). O Site Básico traz até 3 páginas institucionais — Home, Sobre e Contato — pra apresentar sua empresa de forma mais completa.",
  },
  {
    q: "Posso fazer upgrade de plano depois?",
    a: "Sim. Se começar com Landing ou Básico e quiser evoluir pra Padrão ou Avançado, você paga apenas a diferença entre os planos, sem retrabalho.",
  },
  {
    q: "E se eu precisar de mais páginas que o plano oferece?",
    a: "Páginas extras podem ser adicionadas a partir de R$ 49 por página, independente do plano escolhido.",
  },
  {
    q: "Como funciona a parte de SEO?",
    a: "Todos os planos já vêm com estrutura SEO-friendly. Nos planos Padrão e Avançado incluímos SEO técnico completo, Google Analytics, Search Console e meta tags estratégicas por página.",
  },
];

export default function ServicesPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero pt-12 pb-20 md:pt-16 md:pb-24">
        <div className="aurora" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="container relative">
          <div className="max-w-4xl reveal-up">
            <p className="eyebrow eyebrow-light mb-5">
              <Sparkles size={14} />
              Planos Altum
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-slate-900 mb-6 text-balance">
              Preço <span className="gradient-text">fechado</span>, entrega rápida, resultado visível.
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 max-w-2xl leading-relaxed">
              Escolha o plano certo pro momento da sua empresa — de uma landing objetiva até um site
              avançado com CMS. Apps e integrações também sob medida.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#servicos" className="btn-premium">
                Ver todos os planos
                <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/5537991272109"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-premium"
              >
                Não sei qual escolher
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* Included in all plans */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 reveal-up">
              <p className="eyebrow eyebrow-light mb-4">Incluso em todos os planos</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Nenhum plano deixa <span className="gradient-text">ponta solta</span>
              </h2>
              <p className="text-slate-600">
                Todo projeto Altum sai com o básico bem feito. Você não precisa contratar nada por fora
                pra ter um site profissional no ar.
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 reveal-up reveal-delay-2">
              {includedAll.map(item => (
                <div
                  key={item}
                  className="glass-card rounded-2xl p-5 flex items-start gap-3 hover-lift"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-glow-teal">
                    <Sparkles size={14} />
                  </span>
                  <p className="text-slate-800 font-medium text-sm pt-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 gradient-section relative overflow-hidden">
        <div className="absolute top-0 right-0 glow-orb h-80 w-80 bg-teal-300" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 reveal-up">
              <p className="eyebrow eyebrow-light mx-auto mb-4">Dúvidas frequentes</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Ainda com <span className="gradient-text">dúvida</span>?
              </h2>
            </div>
            <div className="space-y-3 reveal-up reveal-delay-2">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} q={faq.q} a={faq.a} defaultOpen={idx === 0} />
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="https://wa.me/5537991272109?text=Ol%C3%A1!%20Quero%20ajuda%20pra%20escolher%20o%20melhor%20plano."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium"
              >
                Falar com especialista
                <ArrowRight size={18} />
              </a>
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
