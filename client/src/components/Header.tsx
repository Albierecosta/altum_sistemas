import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl border-b border-slate-200/70 shadow-soft"
          : "bg-white/40 backdrop-blur-xl border-b border-transparent"
      }`}
    >
      <div className="container">
        <nav
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-400/50 to-indigo-400/40 blur-lg opacity-70 group-hover:opacity-100 transition-opacity" />
              <img
                src="images/logo.png"
                alt="Altum Sistemas"
                className="relative w-10 h-10 object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl font-bold text-slate-900">Altum</span>
              <span className="text-[10px] text-teal-700 font-semibold tracking-[0.22em] uppercase">
                Sistemas
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => {
              const active = location === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`link-reveal font-semibold text-sm tracking-wide transition-colors ${
                    active ? "text-teal-700" : "text-slate-700 hover:text-teal-700"
                  }`}
                  data-active={active}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="https://wa.me/5537991272109?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white pl-5 pr-2 py-1.5 text-sm font-semibold transition-smooth hover:bg-slate-800 group"
            >
              Orçamento
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 text-slate-900 transition-transform group-hover:rotate-45">
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white shadow-soft"
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {isOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-slate-200/70">
            {navItems.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className={`block py-3 font-semibold transition-smooth ${
                  location === item.href
                    ? "text-teal-700"
                    : "text-slate-700 hover:text-teal-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5537991272109?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 text-white py-3 font-semibold transition-smooth hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              Pedir orçamento
              <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
