import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  const handleCTAClick = (type: string) => {
    // Track CTA interaction
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', { source: type });
    }
    navigate('/contacto');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola! Me interesa conocer más sobre sus servicios de diseño web. ¿Podrían darme más información?");
    window.open(`https://wa.me/34XXXXXXXXX?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-primary-light/5">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            ¿Listo para <span className="font-medium text-primary">transformar</span> tu presencia digital?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Únete a más de 100 empresas que ya confiaron en nosotros para llevar su negocio al siguiente nivel.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={() => handleCTAClick('main-cta')}
            className="group text-base px-8 py-4 bg-primary hover:bg-primary-dark text-primary-foreground"
          >
            <Phone className="w-4 h-4 mr-2" />
            Solicitar consulta gratuita
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleWhatsAppClick}
            className="text-base px-8 py-4 border-primary text-primary hover:bg-primary/5"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp directo
          </Button>
        </div>

        <div className="pt-8 space-y-4">
          <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Respuesta en 24h
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Consulta sin compromiso
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Presupuesto personalizado
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;