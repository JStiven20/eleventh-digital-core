import useSEO from '@/hooks/useSEO';
import { seoConfig } from '@/data/seo-config';
import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import TrustSignals from "@/components/sections/TrustSignals";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/ui/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";

const Home = () => {
  useSEO({
    ...seoConfig.pages.home,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": seoConfig.global.siteName,
      "url": seoConfig.global.siteUrl,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${seoConfig.global.siteUrl}/buscar?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    }
  });
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="animate-fade-in">
        <Hero />
        <TrustSignals />
        <Stats />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Home;