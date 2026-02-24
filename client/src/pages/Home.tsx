import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Design Philosophy: Elegância Premium com Gradientes Sutis
 * 
 * - Paleta: Verde (#10B981), Branco, Preto
 * - Tipografia: Syne (títulos), Manrope (corpo)
 * - Gradientes suaves verde-branco transmitem sofisticação
 * - Sombras refinadas e espaçamento generoso
 * - Animações suaves e transições elegantes
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
