import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "Início", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Portfólio", href: "/portfolio" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/75 backdrop-blur-xl border-b border-slate-200/70 shadow-soft">
      <div className="container">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="images/logo.png"
              alt="Altum Sistemas"
              className="w-15 h-15 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-display text-2xl leading-none font-bold text-gray-900">
                Altum
              </span>
              <span className="text-xs text-teal-700 font-semibold tracking-wide uppercase">
                Sistemas
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-smooth font-semibold text-sm tracking-wide ${
                  location === item.href
                    ? "text-teal-700"
                    : "text-slate-700 hover:text-teal-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5537991272109"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-accent text-white px-6 py-2 rounded-xl font-semibold transition-smooth hover:shadow-soft-lg transform hover:scale-105"
            >
              Orçamento
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-900"
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`block py-3 transition-smooth font-medium ${
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
              href="https://wa.me/5537991272109"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full gradient-accent text-white py-2 rounded-xl font-semibold mt-4 transition-smooth hover:shadow-soft-lg"
              onClick={() => setIsOpen(false)}
            >
              Orçamento
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
