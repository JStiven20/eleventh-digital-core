import { useEffect } from "react";
import { Monitor, Code, Palette, Settings, Search } from "lucide-react";

const Services = () => {
  useEffect(() => {
    // Track services view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'ViewContent', { content_name: 'services' });
          }
        });
      },
      { threshold: 0.5 }
    );

    const servicesSection = document.querySelector('#servicios');
    if (servicesSection) {
      observer.observe(servicesSection);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Monitor,
      title: "Diseño Web",
      description: "Sitios web minimalistas y funcionales que convierten visitantes en clientes. Diseño responsive y optimizado para todos los dispositivos.",
      benefits: ["Diseño responsive", "Carga rápida", "UX optimizada"]
    },
    {
      icon: Code,
      title: "Desarrollo Personalizado",
      description: "Desarrollo a medida con tecnologías modernas. Soluciones escalables y mantenibles para tu negocio específico.",
      benefits: ["Código limpio", "Escalable", "Seguro"]
    },
    {
      icon: Palette,
      title: "Branding Corporativo",
      description: "Identidad visual cohesiva que refleja los valores de tu empresa. Desde logotipo hasta guías de estilo completas.",
      benefits: ["Identidad única", "Manual de marca", "Aplicaciones"]
    },
    {
      icon: Settings,
      title: "Mantenimiento",
      description: "Soporte continuo y actualizaciones para mantener tu sitio web funcionando perfectamente y al día con las últimas tecnologías.",
      benefits: ["Soporte 24/7", "Actualizaciones", "Monitoreo"]
    },
    {
      icon: Search,
      title: "SEO + Velocidad",
      description: "Optimización completa para motores de búsqueda y velocidad de carga. Mejora tu posicionamiento y experiencia de usuario.",
      benefits: ["Mejor ranking", "Core Web Vitals", "Analítica"]
    }
  ];

  return (
    <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8" data-event="ViewServices">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance">
            Servicios que <span className="font-medium">impulsan</span> tu negocio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Soluciones digitales completas diseñadas para empresas que buscan 
            profesionalidad, funcionalidad y resultados medibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="space-y-6 p-8 rounded-sm border border-border hover:bg-accent/50 transition-smooth group"
            >
              <div className="w-12 h-12 rounded-sm bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                <service.icon className="w-6 h-6" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1 h-1 rounded-full bg-primary mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;