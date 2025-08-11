import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import useReveal from "@/hooks/useReveal";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { ref: contentRef, isVisible: contentVisible } = useReveal({ threshold: 0.2 });
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setOffset(y * 0.2);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

const handleCTA = () => {
    // Track CTA click
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
    // Navigate to contact page
    navigate('/contacto');
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div ref={contentRef} className={`space-y-8 ${contentVisible ? 'animate-fade-in' : 'opacity-0 translate-y-2'}`}>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight text-balance">
                Diseño web <span className="font-medium text-primary">profesional</span> para empresas que buscan{" "}
                <span className="font-medium text-primary">resultados</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Creamos soluciones digitales sobrias, funcionales y <span className="text-primary font-medium">completamente optimizadas</span>
                para pequeñas y medianas empresas.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="premium"
                onClick={handleCTA}
                className="text-base px-8 py-3"
              >
                Comenzar proyecto
              </Button>
              
<Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/servicios')}
                className="text-base px-8 py-3"
              >
                Ver servicios
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-sm overflow-hidden bg-muted relative" style={{ transform: `translateY(${-offset}px)` }}>
              <img
                src={heroImage}
                alt="Espacio de trabajo con diseños web profesionales"
                className="w-full h-full object-cover will-change-transform"
              />
              <div className="absolute inset-0 animated-gradient opacity-30 pointer-events-none" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;