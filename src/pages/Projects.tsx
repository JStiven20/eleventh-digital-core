import useSEO from '@/hooks/useSEO';
import Navigation from "@/components/ui/navigation";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/ui/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";

const ProjectsPage = () => {
  useSEO({
    title: "Proyectos - Portafolio y Casos de Éxito | The Eleventh",
    description: "Explora nuestro portafolio de proyectos exitosos: sitios web corporativos, e-commerce, aplicaciones web y soluciones de branding para diversos sectores.",
    keywords: "portafolio diseño web, proyectos web, casos de éxito, sitios web corporativos, e-commerce, aplicaciones web",
    canonical: "https://theeleventh.com/proyectos",
    ogTitle: "Proyectos - Portafolio y Casos de Éxito | The Eleventh",
    ogDescription: "Portafolio de proyectos exitosos: sitios web corporativos, e-commerce y aplicaciones web.",
    ogUrl: "https://theeleventh.com/proyectos"
  });
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
              Nuestros <span className="font-medium">proyectos</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Una selección de nuestros trabajos más destacados que demuestran 
              nuestra capacidad para crear soluciones digitales excepcionales.
            </p>
          </div>
        </div>
        <Projects />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ProjectsPage;