import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="../public/images/logo.png" 
                alt="Altum Sistemas" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <span className="font-bold text-white" style={{ fontFamily: 'Playfair Display' }}>
                  Altum
                </span>
                <span className="text-xs text-green-400 block">Sistemas</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Transformando negócios através de soluções digitais inovadoras.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicos" className="hover:text-green-400 transition-smooth">Desenvolvimento Web</a></li>
              <li><a href="#servicos" className="hover:text-green-400 transition-smooth">Google Meu Negócio</a></li>
              <li><a href="#servicos" className="hover:text-green-400 transition-smooth">Performance Web</a></li>
              <li><a href="#servicos" className="hover:text-green-400 transition-smooth">Consultoria Digital</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-green-400 transition-smooth">Sobre</a></li>
              <li><a href="#portfolio" className="hover:text-green-400 transition-smooth">Portfólio</a></li>
              <li><a href="#contato" className="hover:text-green-400 transition-smooth">Contato</a></li>
              <li><a href="#" className="hover:text-green-400 transition-smooth">Blog</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-white mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-smooth">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/albiere-costa-a94306145/" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-smooth">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-smooth">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2026 Altum Sistemas. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-green-400 transition-smooth">Política de Privacidade</a>
              <a href="#" className="hover:text-green-400 transition-smooth">Termos de Serviço</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
