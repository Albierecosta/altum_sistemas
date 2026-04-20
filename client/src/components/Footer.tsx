import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden surface-ink text-slate-300 pt-20 pb-10">
      <div className="aurora-dark" />
      <div className="absolute inset-0 grain-overlay" />

      <div className="container relative">
        <div className="relative rounded-3xl overflow-hidden glass-card-dark p-8 md:p-12 mb-16">
          <div className="absolute -top-24 -right-20 glow-orb h-72 w-72 bg-teal-400" />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="eyebrow eyebrow-dark mb-4">Pronto pra começar</p>
              <h3 className="font-display text-3xl md:text-4xl text-white mb-3">
                Seu próximo site com <span className="gradient-text-light">cara de marca grande</span>
              </h3>
              <p className="text-slate-300">
                Preço fechado, entrega rápida e design que converte. Comece com uma conversa de 10 minutos.
              </p>
            </div>
            <a
              href="https://wa.me/5537991272109?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium whitespace-nowrap shadow-glow-teal"
            >
              Pedir orçamento
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-400/40 to-indigo-400/30 blur-lg" />
                <img
                  src="images/logo.png"
                  alt="Altum Sistemas"
                  className="relative w-12 h-12 object-contain"
                />
              </div>
              <div>
                <span className="font-display text-2xl leading-none font-bold text-white">Altum</span>
                <span className="text-[10px] text-teal-300 block uppercase tracking-[0.22em] mt-1">
                  Sistemas
                </span>
              </div>
            </div>
            <p className="text-slate-400 max-w-md mb-6 leading-relaxed">
              Estúdio digital especializado em sites premium, apps e integrações. Projetos com identidade,
              performance e foco em conversão.
            </p>
            <div className="flex gap-3">
              <SocialButton href="https://www.instagram.com/altumsistemas/" label="Instagram">
                <Instagram size={18} />
              </SocialButton>
              <SocialButton
                href="https://www.linkedin.com/in/albiere-costa-a94306145/"
                label="LinkedIn"
              >
                <Linkedin size={18} />
              </SocialButton>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-teal-300 uppercase tracking-[0.22em] mb-5">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm">
              <FooterLink href="/">Início</FooterLink>
              <FooterLink href="/servicos">Serviços e Planos</FooterLink>
              <FooterLink href="/portfolio">Portfólio</FooterLink>
              <FooterLink href="/contato">Contato</FooterLink>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-teal-300 uppercase tracking-[0.22em] mb-5">
              Fale com a gente
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="mailto:contatoaltumsitemas@gmail.com"
                  className="flex items-start gap-3 text-slate-300 hover:text-teal-300 transition-smooth group"
                >
                  <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-teal-400/50 transition-colors">
                    <Mail size={14} />
                  </span>
                  contatoaltumsitemas@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+5537991272109"
                  className="flex items-start gap-3 text-slate-300 hover:text-teal-300 transition-smooth group"
                >
                  <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-teal-400/50 transition-colors">
                    <Phone size={14} />
                  </span>
                  (37) 99127-2109
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-slate-300">
                  <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                    <MapPin size={14} />
                  </span>
                  Pará de Minas, MG — Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; 2026 Altum Sistemas. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Feito com</span>
            <span className="gradient-text-light font-semibold">cuidado</span>
            <span>em Minas Gerais</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-smooth hover:-translate-y-1 hover:border-teal-400/50 hover:bg-teal-500/10"
    >
      {children}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-slate-400 hover:text-teal-300 transition-smooth inline-flex items-center gap-1 group"
      >
        <span>{children}</span>
        <ArrowUpRight
          size={12}
          className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
        />
      </Link>
    </li>
  );
}
