import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const handleCTA = () => {
    // Track CTA click
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead');
    }
    
    // Scroll to contact section
    const contactSection = document.querySelector('#contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight text-balance">
                Diseño web <span className="font-medium">profesional</span> para empresas que buscan{" "}
                <span className="font-medium">resultados</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Creamos soluciones digitales sobrias, funcionales y completamente optimizadas 
                para pequeñas y medianas empresas.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={handleCTA}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth text-base px-8 py-3"
              >
                Comenzar proyecto
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const serviciosSection = document.querySelector('#servicios');
                  if (serviciosSection) {
                    serviciosSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-base px-8 py-3"
              >
                Ver servicios
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-sm overflow-hidden bg-muted">
              <img
                src={heroImage}
                alt="Espacio de trabajo con diseños web profesionales"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;