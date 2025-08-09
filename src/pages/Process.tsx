import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/ui/navigation";
import Process from "@/components/sections/Process";
import Footer from "@/components/ui/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";

const ProcessPage = () => {
  return (
    <>
      <Helmet>
        <title>Nuestro Proceso - Metodología de Trabajo | The Eleventh</title>
        <meta name="description" content="Conoce nuestro proceso de trabajo paso a paso: desde la consulta inicial hasta el lanzamiento y optimización continua. Metodología probada en 50+ proyectos." />
        <meta name="keywords" content="proceso diseño web, metodología desarrollo, fases proyecto web, consulta inicial, desarrollo web profesional" />
        <link rel="canonical" href="https://theeleventh.com/proceso" />
        <meta property="og:title" content="Nuestro Proceso - Metodología de Trabajo | The Eleventh" />
        <meta property="og:description" content="Proceso paso a paso desde la consulta inicial hasta el lanzamiento. Metodología probada en 50+ proyectos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theeleventh.com/proceso" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16">
          <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
                Nuestro <span className="font-medium">proceso</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Un método probado que garantiza resultados excepcionales en cada proyecto, 
                desde la idea inicial hasta el lanzamiento y más allá.
              </p>
            </div>
          </div>
          <Process />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default ProcessPage;