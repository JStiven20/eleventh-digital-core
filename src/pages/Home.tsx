import { Helmet } from 'react-helmet-async';
import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/ui/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>The Eleventh - Agencia de Diseño Web y Desarrollo Digital</title>
        <meta name="description" content="Somos The Eleventh, especialistas en diseño web minimalista, desarrollo personalizado y branding corporativo. Transformamos ideas en soluciones digitales profesionales." />
        <meta name="keywords" content="diseño web, desarrollo web, branding corporativo, agencia digital, sitios web profesionales" />
        <link rel="canonical" href="https://theeleventh.com/" />
        <meta property="og:title" content="The Eleventh - Agencia de Diseño Web y Desarrollo Digital" />
        <meta property="og:description" content="Especialistas en diseño web minimalista, desarrollo personalizado y branding corporativo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theeleventh.com/" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Home;