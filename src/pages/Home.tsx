import useSEO from '@/hooks/useSEO';
import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/ui/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";

const Home = () => {
  useSEO({
    title: "The Eleventh - Agencia de Diseño Web y Desarrollo Digital",
    description: "Somos The Eleventh, especialistas en diseño web minimalista, desarrollo personalizado y branding corporativo. Transformamos ideas en soluciones digitales profesionales.",
    keywords: "diseño web, desarrollo web, branding corporativo, agencia digital, sitios web profesionales",
    canonical: "https://theeleventh.com/",
    ogTitle: "The Eleventh - Agencia de Diseño Web y Desarrollo Digital",
    ogDescription: "Especialistas en diseño web minimalista, desarrollo personalizado y branding corporativo.",
    ogUrl: "https://theeleventh.com/"
  });
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="animate-fade-in">
        <Hero />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Home;