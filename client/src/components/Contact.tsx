import { ArrowRight, Clock, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Vim pelo site.%0A%0A*Nome:* ${formData.name}%0A*Email:* ${formData.email}%0A*Telefone:* ${formData.phone}%0A%0A*Mensagem:*%0A${formData.message}`;
    window.open(`https://wa.me/5537991272109?text=${text}`, "_blank");
    setSent(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contato" className="py-24 gradient-section relative overflow-hidden">
      <div className="absolute top-20 -left-20 glow-orb h-80 w-80 bg-teal-300" />
      <div className="absolute bottom-20 -right-20 glow-orb h-80 w-80 bg-indigo-300" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left info panel */}
          <aside className="lg:col-span-5 space-y-5 reveal-up">
            <div>
              <p className="eyebrow eyebrow-light mb-4">Atendimento consultivo</p>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
                Vamos tirar seu projeto do <span className="gradient-text">papel</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Conte seu cenário. Retorno uma proposta com escopo, prazo e investimento em até 24h úteis.
              </p>
            </div>

            <div className="space-y-3">
              <ContactCard
                icon={<MessageCircle size={18} />}
                label="WhatsApp (resposta rápida)"
                value="(37) 99127-2109"
                href="https://wa.me/5537991272109"
                primary
              />
              <ContactCard
                icon={<Mail size={18} />}
                label="Email"
                value="contatoaltumsitemas@gmail.com"
                href="mailto:contatoaltumsitemas@gmail.com"
              />
              <ContactCard
                icon={<Phone size={18} />}
                label="Telefone"
                value="(37) 99127-2109"
                href="tel:+5537991272109"
              />
              <ContactCard
                icon={<MapPin size={18} />}
                label="Localização"
                value="Pará de Minas, MG — Brasil"
              />
              <ContactCard
                icon={<Clock size={18} />}
                label="Atendimento"
                value="Seg a Sex · 8h às 19h"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/altumsistemas/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-xl glass-card text-slate-700 hover:text-teal-700 transition-smooth hover:-translate-y-1"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/albiere-costa-a94306145/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl glass-card text-slate-700 hover:text-teal-700 transition-smooth hover:-translate-y-1"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-7 reveal-up reveal-delay-2">
            <form
              onSubmit={handleSubmit}
              className="relative glass-card rounded-3xl p-6 md:p-10 shadow-premium"
            >
              <div className="absolute -top-10 right-10 hidden md:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl blur-xl opacity-50" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-glow-teal">
                    <Send size={28} />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Conte seu projeto
                </h3>
                <p className="text-slate-600 text-sm">
                  Enviamos a proposta com escopo, prazo e investimento direto no seu WhatsApp.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <Field
                  id="name"
                  name="name"
                  label="Nome Completo"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Field
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mt-5">
                <Field
                  id="phone"
                  name="phone"
                  type="tel"
                  label="Telefone (WhatsApp)"
                  placeholder="(37) 99999-9999"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-[0.16em]">
                  Conte sobre o projeto
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/70 border border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all resize-none text-slate-900 placeholder:text-slate-400"
                  placeholder="O que você precisa construir? Tem referências? Qual o prazo ideal?"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full mt-6 btn-premium"
              >
                {sent ? "Enviando no WhatsApp..." : "Enviar para o WhatsApp"}
                <ArrowRight size={18} />
              </button>

              <p className="text-center text-xs text-slate-500 mt-4">
                Ao enviar você será redirecionado pro WhatsApp com a mensagem preenchida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  required,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-[0.16em]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-white/70 border border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none transition-all text-slate-900 placeholder:text-slate-400"
      />
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  primary,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  primary?: boolean;
}) {
  const content = (
    <>
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
          primary
            ? "bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-glow-teal"
            : "bg-teal-100 text-teal-700"
        }`}
      >
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-bold">{label}</p>
        <p className="text-slate-900 font-semibold truncate">{value}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="flex items-center gap-4 glass-card rounded-2xl p-4 hover-lift transition-smooth"
      >
        {content}
      </a>
    );
  }
  return <div className="flex items-center gap-4 glass-card rounded-2xl p-4">{content}</div>;
}
