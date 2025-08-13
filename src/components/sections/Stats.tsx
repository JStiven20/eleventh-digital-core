import { TrendingUp, Users, Clock, Award } from "lucide-react";
import useReveal from "@/hooks/useReveal";

const Stats = () => {
  const { ref, isVisible } = useReveal({ threshold: 0.1 });

  const stats = [
    {
      icon: Users,
      number: "100+",
      label: "Clientes satisfechos",
      description: "Empresas que confían en nosotros"
    },
    {
      icon: TrendingUp,
      number: "250%",
      label: "Aumento promedio en conversiones",
      description: "Resultados medibles y comprobados"
    },
    {
      icon: Clock,
      number: "72h",
      label: "Tiempo de respuesta",
      description: "Soporte rápido y eficiente"
    },
    {
      icon: Award,
      number: "4.9/5",
      label: "Valoración de clientes",
      description: "Excelencia en cada proyecto"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center space-y-6 mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Resultados que <span className="font-medium text-primary">hablan por sí solos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Números reales de proyectos exitosos que demuestran nuestro compromiso con la excelencia
          </p>
        </div>

        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center space-y-4 group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl font-light text-primary">{stat.number}</p>
                <p className="text-lg font-medium text-foreground">{stat.label}</p>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;