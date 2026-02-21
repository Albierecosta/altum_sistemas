import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-soft">
      <div className="container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="images/logo.png" 
              alt="Altum Sistemas" 
              className="w-15 h-15 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-bold text-gray-900" style={{ fontFamily: 'Playfair Display' }}>
                Altum
              </span>
              <span className="text-xs text-green-600 font-medium">Sistemas</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-green-600 transition-smooth font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
              <a
                href="https://wa.me/5537991309341"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-accent text-white px-6 py-2 rounded-lg font-medium transition-smooth hover:shadow-soft-lg transform hover:scale-105"
              >
                Orçamento
              </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-green-600 transition-smooth font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full gradient-accent text-white py-2 rounded-lg font-medium mt-4 transition-smooth hover:shadow-soft-lg">
              Orçamento
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
