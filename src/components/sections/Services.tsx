import { useEffect } from "react";
import { Monitor, Code, Palette, Settings, Search, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
      description: "Sitios web minimalistas y funcionales que convierten visitantes en clientes.",
      features: ["Diseño responsive", "Carga rápida", "UX optimizada", "SEO básico incluido"],
      basePrice: "Desde €899",
      category: "essential"
    },
    {
      icon: Code,
      title: "Desarrollo Personalizado",
      description: "Desarrollo a medida con tecnologías modernas y arquitectura escalable.",
      features: ["Código limpio", "Escalable", "Seguro", "Documentación completa"],
      basePrice: "Desde €1,499",
      category: "professional"
    },
    {
      icon: Palette,
      title: "Branding Corporativo",
      description: "Identidad visual cohesiva que refleja los valores de tu empresa.",
      features: ["Identidad única", "Manual de marca", "Aplicaciones", "Papelería corporativa"],
      basePrice: "Desde €699",
      category: "essential"
    },
    {
      icon: Settings,
      title: "Mantenimiento",
      description: "Soporte continuo y actualizaciones para mantener tu sitio funcionando.",
      features: ["Soporte 24/7", "Actualizaciones", "Monitoreo", "Backups automáticos"],
      basePrice: "€199/mes",
      category: "ongoing"
    },
    {
      icon: Search,
      title: "SEO + Marketing",
      description: "Optimización completa para motores de búsqueda y estrategia digital.",
      features: ["Mejor ranking", "Core Web Vitals", "Analítica", "Estrategia de contenido"],
      basePrice: "Desde €349/mes",
      category: "ongoing"
    }
  ];

  const packages = [
    {
      name: "Esencial",
      price: "€1,299",
      description: "Perfecto para pequeñas empresas que necesitan presencia digital",
      features: [
        "Sitio web de hasta 5 páginas",
        "Diseño responsive y minimalista",
        "SEO básico optimizado",
        "Formulario de contacto",
        "Integración redes sociales",
        "1 mes de soporte incluido"
      ],
      popular: false,
      cta: "Comenzar"
    },
    {
      name: "Profesional",
      price: "€2,499",
      description: "La solución completa para empresas que buscan destacar",
      features: [
        "Sitio web de hasta 10 páginas",
        "Desarrollo personalizado",
        "Sistema de gestión de contenido",
        "SEO avanzado + Analytics",
        "Integración con herramientas de negocio",
        "Branding básico incluido",
        "3 meses de soporte y mantenimiento"
      ],
      popular: true,
      cta: "Más Popular"
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      description: "Soluciones a medida para grandes empresas y proyectos complejos",
      features: [
        "Sitio web ilimitado",
        "Aplicaciones web personalizadas",
        "Arquitectura escalable",
        "Integraciones complejas",
        "Branding corporativo completo",
        "Consultoría estratégica",
        "Soporte prioritario 24/7"
      ],
      popular: false,
      cta: "Contactar"
    }
  ];

  return (
    <section id="servicios" className="py-24 px-4 sm:px-6 lg:px-8" data-event="ViewServices">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance">
            Servicios que <span className="font-medium">impulsan</span> tu negocio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Soluciones digitales completas diseñadas para empresas que buscan 
            profesionalidad, funcionalidad y resultados medibles.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:bg-accent/50 transition-smooth group">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-sm bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <service.icon className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-xl font-medium text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <p className="text-lg font-medium text-foreground">{service.basePrice}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Packages */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-light text-foreground">
              Paquetes <span className="font-medium">integrales</span>
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Combinaciones perfectas de nuestros servicios para diferentes necesidades empresariales
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative border-border hover:border-primary/20 transition-smooth ${
                  pkg.popular ? 'ring-2 ring-primary/10 bg-accent/30' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      Más Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center space-y-4">
                  <CardTitle className="text-xl font-medium text-foreground">
                    {pkg.name}
                  </CardTitle>
                  <div className="space-y-2">
                    <p className="text-3xl font-light text-foreground">{pkg.price}</p>
                    <CardDescription className="text-muted-foreground">
                      {pkg.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full"
                    variant={pkg.popular ? "default" : "outline"}
                    onClick={() => {
                      if (typeof window !== 'undefined' && window.fbq) {
                        window.fbq('track', 'AddToCart', { 
                          content_name: pkg.name,
                          value: pkg.price === 'Personalizado' ? 0 : parseInt(pkg.price.replace(/[€,]/g, ''))
                        });
                      }
                      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {pkg.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 space-y-6">
          <h3 className="text-xl font-medium text-foreground">
            ¿Necesitas algo específico?
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Cada proyecto es único. Hablemos sobre tus necesidades específicas y creemos una solución a medida.
          </p>
          <Button 
            variant="outline"
            onClick={() => {
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Solicitar Consulta Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;