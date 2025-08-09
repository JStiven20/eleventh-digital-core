import useSEO from '@/hooks/useSEO';
import Navigation from "@/components/ui/navigation";
import Technologies from "@/components/sections/Technologies";
import Footer from "@/components/ui/footer";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";

const TechnologiesPage = () => {
  useSEO({
    title: "Tecnologías - Stack Moderno y Herramientas | The Eleventh",
    description: "Utilizamos las tecnologías más avanzadas: React, TypeScript, Node.js, Python, AWS, Figma y más. Stack actualizado constantemente para resultados óptimos.",
    keywords: "tecnologías web, React, TypeScript, Node.js, Python, AWS, herramientas desarrollo, stack tecnológico",
    canonical: "https://theeleventh.com/tecnologias",
    ogTitle: "Tecnologías - Stack Moderno y Herramientas | The Eleventh",
    ogDescription: "Stack tecnológico moderno: React, TypeScript, Node.js, Python, AWS y más herramientas avanzadas.",
    ogUrl: "https://theeleventh.com/tecnologias"
  });
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
              Tecnologías <span className="font-medium">modernas</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Utilizamos las herramientas más avanzadas y confiables del mercado para 
              construir soluciones que perduran en el tiempo.
            </p>
          </div>
        </div>
        <Technologies />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default TechnologiesPage;