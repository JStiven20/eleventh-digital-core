import useSEO from '@/hooks/useSEO';
import Navigation from "@/components/ui/navigation";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/ui/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";

const FAQPage = () => {
  useSEO({
    title: "Preguntas Frecuentes - Dudas y Respuestas | The Eleventh",
    description: "Resuelve tus dudas sobre nuestros servicios: tiempos de entrega, precios, hosting, mantenimiento, SEO y más. Respuestas a las preguntas más comunes.",
    keywords: "preguntas frecuentes, FAQ diseño web, dudas desarrollo web, precios mantenimiento, tiempos entrega, hosting dominio",
    canonical: "https://theeleventh.com/faq",
    ogTitle: "Preguntas Frecuentes - Dudas y Respuestas | The Eleventh",
    ogDescription: "Respuestas a las preguntas más comunes sobre servicios, precios, tiempos y proceso de trabajo.",
    ogUrl: "https://theeleventh.com/faq"
  });
  return (
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
  );
};

export default FAQPage;