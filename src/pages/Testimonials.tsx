import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/ui/navigation";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/ui/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";

const TestimonialsPage = () => {
  return (
    <>
      <Helmet>
        <title>Testimonios - Opiniones de Clientes Satisfechos | The Eleventh</title>
        <meta name="description" content="Lee las experiencias reales de nuestros clientes. 4.9/5 estrellas basado en 50+ proyectos completados. Testimonios verificados de empresas satisfechas." />
        <meta name="keywords" content="testimonios clientes, opiniones diseño web, reseñas agencia digital, experiencias clientes, valoraciones proyectos web" />
        <link rel="canonical" href="https://theeleventh.com/testimonios" />
        <meta property="og:title" content="Testimonios - Opiniones de Clientes Satisfechos | The Eleventh" />
        <meta property="og:description" content="4.9/5 estrellas basado en 50+ proyectos. Lee las experiencias reales de nuestros clientes satisfechos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theeleventh.com/testimonios" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16">
          <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
                Clientes <span className="font-medium">satisfechos</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                La confianza de nuestros clientes es nuestra mejor carta de presentación. 
                Estas son sus experiencias trabajando con nosotros.
              </p>
            </div>
          </div>
          <Testimonials />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default TestimonialsPage;