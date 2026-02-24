import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contato" className="py-20 gradient-section">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900">
            Entre em Contato
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Compartilhe seu objetivo e retornamos com uma proposta alinhada ao perfil da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="surface-premium rounded-2xl p-5">
              <p className="text-sm font-semibold text-teal-700 uppercase tracking-widest mb-2">Resposta Rápida</p>
              <p className="text-slate-700 font-medium">Retorno em até 24h úteis.</p>
            </div>
            {/* Email */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-teal-700" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                <a href="mailto:contatoaltumsitemas@gmail.com" className="text-slate-600 hover:text-teal-700 transition-smooth">
                  contatoaltumsitemas@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-teal-700" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Telefone</h3>
                <a href="tel:+5537991309341" className="text-slate-600 hover:text-teal-700 transition-smooth">
                  (37) 99130-9341
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-teal-700" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Localização</h3>
                <p className="text-slate-600">
                  Pará de Minas, MG<br />
                  Brasil
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6 surface-premium p-6 md:p-8 rounded-2xl shadow-soft">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-700 focus:ring-2 focus:ring-teal-100 outline-none transition-smooth"
                  placeholder="Seu nome"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-700 focus:ring-2 focus:ring-teal-100 outline-none transition-smooth"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-700 focus:ring-2 focus:ring-teal-100 outline-none transition-smooth"
                placeholder="(11) 99999-9999"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-teal-700 focus:ring-2 focus:ring-teal-100 outline-none transition-smooth resize-none"
                placeholder="Conte-nos sobre seu projeto..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full gradient-accent text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-smooth hover:shadow-soft-lg transform hover:scale-105"
            >
              Enviar Mensagem
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
