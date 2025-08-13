import useSEO from '@/hooks/useSEO';
import { seoConfig } from '@/data/seo-config';
import Navigation from "@/components/ui/navigation";
import Services from "@/components/sections/Services";
import Footer from "@/components/ui/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";

const ServicesPage = () => {
  useSEO(seoConfig.pages.services);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
              Nuestros <span className="font-medium">servicios</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Soluciones digitales completas para empresas que buscan excelencia, 
              funcionalidad y resultados medibles en el mundo digital.
            </p>
          </div>
        </div>
        <Services />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ServicesPage;