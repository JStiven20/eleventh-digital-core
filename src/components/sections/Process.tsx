import { Clock, MessageCircle, Palette, Code, Rocket, BarChart } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Consulta Inicial",
      description: "Analizamos tus objetivos, audiencia y requisitos específicos para definir la estrategia perfecta.",
      duration: "1-2 días"
    },
    {
      icon: Palette,
      title: "Diseño & Concepto",
      description: "Creamos wireframes, mockups y prototipos que reflejen la identidad de tu marca.",
      duration: "3-7 días"
    },
    {
      icon: Code,
      title: "Desarrollo",
      description: "Programamos tu sitio web con código limpio, optimizado y siguiendo las mejores prácticas.",
      duration: "7-21 días"
    },
    {
      icon: Rocket,
      title: "Lanzamiento",
      description: "Configuramos hosting, dominio, SSL y realizamos todas las optimizaciones finales.",
      duration: "1-2 días"
    },
    {
      icon: BarChart,
      title: "Optimización",
      description: "Monitoreamos el rendimiento y realizamos ajustes para maximizar los resultados.",
      duration: "Continuo"
    }
  ];

  return (
    <section id="proceso" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance">
            Nuestro <span className="font-medium">proceso</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un método probado que garantiza resultados excepcionales en cada proyecto, 
            desde la idea inicial hasta el lanzamiento y más allá.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-border z-0" />
              )}
              
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium text-sm">
                  <step.icon className="w-5 h-5" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-medium text-foreground">
                      {step.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {step.duration}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Tiempo promedio de entrega: <span className="font-medium text-foreground">2-4 semanas</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;