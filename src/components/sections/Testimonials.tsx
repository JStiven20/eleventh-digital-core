import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import useReveal from "@/hooks/useReveal";

const Testimonials = () => {
  const { ref, isVisible } = useReveal({ threshold: 0.1 });
  
  const testimonials = [
    {
      name: "María González",
      position: "CEO, Innovación Digital",
      company: "Startup Tecnológica",
      testimonial: "The Eleventh transformó completamente nuestra presencia digital. El diseño minimalista y la funcionalidad son exactamente lo que necesitábamos.",
      rating: 5,
      project: "Rediseño web completo"
    },
    {
      name: "Carlos Ruiz",
      position: "Director de Marketing",
      company: "Consultoría Empresarial",
      testimonial: "Profesionalidad absoluta desde el primer contacto. El sitio web ha aumentado nuestras conversiones en un 250% en los primeros 3 meses.",
      rating: 5,
      project: "E-commerce + SEO"
    },
    {
      name: "Ana Martínez",
      position: "Fundadora",
      company: "Estudio Creativo",
      testimonial: "El branding que desarrollaron captura perfectamente la esencia de nuestra marca. Cada detalle está cuidado al máximo.",
      rating: 5,
      project: "Identidad corporativa"
    },
    {
      name: "David López",
      position: "CTO",
      company: "Fintech",
      testimonial: "Código limpio, arquitectura escalable y entrega en tiempo récord. Definitivamente volveremos a trabajar con ellos.",
      rating: 5,
      project: "Aplicación web personalizada"
    },
    {
      name: "Laura Sánchez",
      position: "Directora General",
      company: "Agencia Inmobiliaria",
      testimonial: "El soporte continuo y las optimizaciones constantes han hecho que nuestro sitio esté siempre al día. Excelente servicio.",
      rating: 5,
      project: "Mantenimiento + SEO"
    },
    {
      name: "Roberto García",
      position: "Gerente",
      company: "Clínica Médica",
      testimonial: "Proceso transparente, comunicación constante y resultados que superaron nuestras expectativas. Altamente recomendados.",
      rating: 5,
      project: "Sitio web + reservas online"
    }
  ];

  return (
    <section ref={ref} id="testimonios" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center space-y-6 mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance">
            Clientes <span className="font-medium text-primary">satisfechos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            La confianza de nuestros clientes es nuestra mejor carta de presentación. 
            Estas son sus experiencias trabajando con nosotros.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:border-primary/20 hover:shadow-primary transition-smooth">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>

                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-muted-foreground/30" />
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.testimonial}"
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="space-y-1">
                    <h4 className="font-medium text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="text-xs text-primary font-medium">
                      {testimonial.project}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center space-y-6">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-background border border-primary/20 rounded-full shadow-primary">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-primary text-primary" />
              <span className="font-medium text-primary">4.9/5</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <span className="text-sm text-muted-foreground">
              Basado en 50+ proyectos completados
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;