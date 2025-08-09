import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/ui/navigation";
import Services from "@/components/sections/Services";
import Footer from "@/components/ui/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Servicios - Diseño Web, Desarrollo y Branding | The Eleventh</title>
        <meta name="description" content="Servicios profesionales de diseño web, desarrollo personalizado, branding corporativo, mantenimiento y SEO. Paquetes desde €1,299 con garantía incluida." />
        <meta name="keywords" content="servicios diseño web, desarrollo personalizado, branding corporativo, mantenimiento web, SEO, precios diseño web" />
        <link rel="canonical" href="https://theeleventh.com/servicios" />
        <meta property="og:title" content="Servicios - Diseño Web, Desarrollo y Branding | The Eleventh" />
        <meta property="og:description" content="Servicios profesionales de diseño web, desarrollo personalizado y branding corporativo. Paquetes desde €1,299." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theeleventh.com/servicios" />
      </Helmet>
      
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
    </>
  );
};

export default ServicesPage;