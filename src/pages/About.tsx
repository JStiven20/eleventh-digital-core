import useSEO from '@/hooks/useSEO';
import { seoConfig } from '@/data/seo-config';
import Navigation from "@/components/ui/navigation";
import About from "@/components/sections/About";
import Footer from "@/components/ui/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";

const AboutPage = () => {
  useSEO({
    title: "Nosotros - Filosofía y Valores | The Eleventh",
    description: "Conoce la filosofía de The Eleventh: diseño minimalista, funcionalidad excepcional y enfoque en resultados. Equipo especializado en soluciones digitales profesionales.",
    keywords: "sobre nosotros, filosofía diseño, equipo desarrollo web, valores agencia digital, enfoque minimalista",
    canonical: "https://theeleventh.com/nosotros",
    ogTitle: "Nosotros - Filosofía y Valores | The Eleventh",
    ogDescription: "Filosofía de diseño minimalista, funcionalidad excepcional y enfoque en resultados medibles.",
    ogUrl: "https://theeleventh.com/nosotros"
  });
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
              Sobre <span className="font-medium">nosotros</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Conoce nuestra filosofía, valores y el enfoque que nos distingue 
              en el mundo del diseño y desarrollo digital.
            </p>
          </div>
        </div>
        <About />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default AboutPage;