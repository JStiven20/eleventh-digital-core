import useSEO from '@/hooks/useSEO';
import Navigation from "@/components/ui/navigation";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";

const ContactPage = () => {
  useSEO({
    title: "Contacto - Solicita tu Presupuesto Gratuito | The Eleventh",
    description: "¿Listo para tu proyecto digital? Contáctanos para una consulta gratuita. Formulario de contacto, WhatsApp y redes sociales. Respuesta en 24h garantizada.",
    keywords: "contacto diseño web, presupuesto gratuito, consulta proyecto web, formulario contacto, WhatsApp agencia",
    canonical: "https://theeleventh.com/contacto",
    ogTitle: "Contacto - Solicita tu Presupuesto Gratuito | The Eleventh",
    ogDescription: "Consulta gratuita para tu proyecto digital. Formulario de contacto y WhatsApp disponibles.",
    ogUrl: "https://theeleventh.com/contacto"
  });
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
              Hablemos de tu <span className="font-medium">proyecto</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              ¿Listo para llevar tu presencia digital al siguiente nivel? 
              Contáctanos para una consulta gratuita y sin compromiso.
            </p>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ContactPage;