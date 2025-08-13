import { Shield, Award, Clock, Users2 } from "lucide-react";
import useReveal from "@/hooks/useReveal";

const TrustSignals = () => {
  const { ref, isVisible } = useReveal({ threshold: 0.1 });

  const signals = [
    {
      icon: Shield,
      title: "100% Seguro",
      description: "HTTPS, SSL y cumplimiento RGPD garantizado"
    },
    {
      icon: Award,
      title: "Garantía Extendida",
      description: "12 meses de soporte y mantenimiento incluido"
    },
    {
      icon: Clock,
      title: "Entrega Puntual",
      description: "Cumplimos plazos o devolvemos el dinero"
    },
    {
      icon: Users2,
      title: "Equipo Experto",
      description: "+5 años de experiencia en desarrollo web"
    }
  ];

  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {signals.map((signal, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                <signal.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium text-foreground text-sm">{signal.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{signal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;