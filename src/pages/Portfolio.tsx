import useSEO from '@/hooks/useSEO';
import Navigation from "@/components/ui/navigation";
import Portfolio from "@/components/sections/Portfolio";
import Footer from "@/components/ui/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";

const PortfolioPage = () => {
  useSEO({
    title: "Portafolio - Proyectos y Casos de Éxito | The Eleventh",
    description: "Explora nuestro portafolio: proyectos web elegantes y de alto rendimiento. Casos de éxito reales para marcas modernas.",
    keywords: "portafolio web, proyectos, casos de éxito, diseño web, desarrollo web",
    canonical: "https://theeleventh.com/portafolio",
    ogTitle: "Portafolio - Proyectos y Casos de Éxito | The Eleventh",
    ogDescription: "Proyectos web con enfoque en diseño, rendimiento y resultados.",
    ogUrl: "https://theeleventh.com/portafolio"
  });
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
              Nuestro <span className="font-medium">portafolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Proyectos seleccionados que reflejan nuestro estándar de calidad y atención al detalle.
            </p>
          </div>
        </div>
        <Portfolio />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default PortfolioPage;
