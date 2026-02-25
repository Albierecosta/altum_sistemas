import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppWidget from "@/components/WhatsAppWidget";

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
