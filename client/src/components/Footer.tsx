import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="images/logo.png" 
                alt="Altum Sistemas" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <span className="font-display text-2xl leading-none font-bold text-white">
                  Altum
                </span>
                <span className="text-xs text-teal-400 block uppercase tracking-widest">Sistemas</span>
              </div>
            </div>
            <p className="text-sm text-slate-400">
              Presença digital premium para marcas que querem vender com autoridade.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicos" className="hover:text-teal-300 transition-smooth">Desenvolvimento Web</a></li>
              <li><a href="#servicos" className="hover:text-teal-300 transition-smooth">Google Meu Negócio</a></li>
              <li><a href="#servicos" className="hover:text-teal-300 transition-smooth">Performance Web</a></li>
              <li><a href="#servicos" className="hover:text-teal-300 transition-smooth">Consultoria Digital</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-teal-300 transition-smooth">Sobre</a></li>
              <li><a href="#portfolio" className="hover:text-teal-300 transition-smooth">Portfólio</a></li>
              <li><a href="#contato" className="hover:text-teal-300 transition-smooth">Contato</a></li>
              <li><a href="#" className="hover:text-teal-300 transition-smooth">Blog</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-white mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-700 transition-smooth">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/albiere-costa-a94306145/" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-700 transition-smooth">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; 2026 Altum Sistemas. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-teal-300 transition-smooth">Política de Privacidade</a>
              <a href="#" className="hover:text-teal-300 transition-smooth">Termos de Serviço</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
