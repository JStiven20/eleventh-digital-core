import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/ui/navigation";
import About from "@/components/sections/About";
import Footer from "@/components/ui/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Nosotros - Filosofía y Valores | The Eleventh</title>
        <meta name="description" content="Conoce la filosofía de The Eleventh: diseño minimalista, funcionalidad excepcional y enfoque en resultados. Equipo especializado en soluciones digitales profesionales." />
        <meta name="keywords" content="sobre nosotros, filosofía diseño, equipo desarrollo web, valores agencia digital, enfoque minimalista" />
        <link rel="canonical" href="https://theeleventh.com/nosotros" />
        <meta property="og:title" content="Nosotros - Filosofía y Valores | The Eleventh" />
        <meta property="og:description" content="Filosofía de diseño minimalista, funcionalidad excepcional y enfoque en resultados medibles." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theeleventh.com/nosotros" />
      </Helmet>
      
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
    </>
  );
};

export default AboutPage;