import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/ui/navigation";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/ui/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";

const FAQPage = () => {
  return (
    <>
      <Helmet>
        <title>Preguntas Frecuentes - Dudas y Respuestas | The Eleventh</title>
        <meta name="description" content="Resuelve tus dudas sobre nuestros servicios: tiempos de entrega, precios, hosting, mantenimiento, SEO y más. Respuestas a las preguntas más comunes." />
        <meta name="keywords" content="preguntas frecuentes, FAQ diseño web, dudas desarrollo web, precios mantenimiento, tiempos entrega, hosting dominio" />
        <link rel="canonical" href="https://theeleventh.com/faq" />
        <meta property="og:title" content="Preguntas Frecuentes - Dudas y Respuestas | The Eleventh" />
        <meta property="og:description" content="Respuestas a las preguntas más comunes sobre servicios, precios, tiempos y proceso de trabajo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theeleventh.com/faq" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16">
          <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
                Preguntas <span className="font-medium">frecuentes</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Resolvemos las dudas más comunes sobre nuestros servicios, 
                proceso de trabajo y condiciones comerciales.
              </p>
            </div>
          </div>
          <FAQ />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default FAQPage;