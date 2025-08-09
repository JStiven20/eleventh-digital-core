import useSEO from '@/hooks/useSEO';
import Navigation from "@/components/ui/navigation";
import Services from "@/components/sections/Services";
import Footer from "@/components/ui/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";

const ServicesPage = () => {
  useSEO({
    title: "Servicios - Diseño Web, Desarrollo y Branding | The Eleventh",
    description: "Servicios profesionales de diseño web, desarrollo personalizado, branding corporativo, mantenimiento y SEO. Paquetes desde €1,299 con garantía incluida.",
    keywords: "servicios diseño web, desarrollo personalizado, branding corporativo, mantenimiento web, SEO, precios diseño web",
    canonical: "https://theeleventh.com/servicios",
    ogTitle: "Servicios - Diseño Web, Desarrollo y Branding | The Eleventh",
    ogDescription: "Servicios profesionales de diseño web, desarrollo personalizado y branding corporativo. Paquetes desde €1,299.",
    ogUrl: "https://theeleventh.com/servicios"
  });
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