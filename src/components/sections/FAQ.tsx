import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar un sitio web?",
      answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico toma entre 2-3 semanas, mientras que proyectos más complejos pueden requerir 4-8 semanas. Siempre proporcionamos un cronograma detallado antes de comenzar."
    },
    {
      question: "¿Incluyen el hosting y dominio en sus servicios?",
      answer: "Ofrecemos diferentes opciones. Podemos gestionar el hosting y dominio por ti con un cargo adicional, o ayudarte a configurar tu propio hosting. También proporcionamos recomendaciones de proveedores confiables según tus necesidades."
    },
    {
      question: "¿El sitio web será responsive y optimizado para móviles?",
      answer: "Absolutamente. Todos nuestros sitios web son completamente responsive y optimizados para móviles. Utilizamos un enfoque 'mobile-first' para garantizar la mejor experiencia en todos los dispositivos."
    },
    {
      question: "¿Qué incluye el servicio de mantenimiento?",
      answer: "Nuestro servicio de mantenimiento incluye actualizaciones de seguridad, backups automáticos, monitoreo de rendimiento, soporte técnico prioritario, actualizaciones de contenido menores y optimizaciones continuas de velocidad y SEO."
    },
    {
      question: "¿Puedo actualizar el contenido yo mismo?",
      answer: "Sí, desarrollamos sitios web con sistemas de gestión de contenido fáciles de usar. Te proporcionamos capacitación completa y documentación para que puedas hacer actualizaciones básicas de contenido de forma independiente."
    },
    {
      question: "¿Ofrecen garantía en sus trabajos?",
      answer: "Ofrecemos 30 días de soporte gratuito después del lanzamiento para cualquier error o problema técnico. Para proyectos de branding, proporcionamos revisiones ilimitadas durante la fase de diseño hasta que estés completamente satisfecho."
    },
    {
      question: "¿Trabajan con empresas de todos los tamaños?",
      answer: "Sí, trabajamos desde startups y pequeñas empresas hasta corporaciones grandes. Adaptamos nuestros servicios y metodología según el tamaño y necesidades específicas de cada cliente."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos transferencias bancarias, tarjetas de crédito y débito. Para proyectos grandes, ofrecemos planes de pago divididos en hitos del proyecto. Generalmente requerimos un 50% al inicio y 50% al completar el proyecto."
    },
    {
      question: "¿Proporcionan servicios de SEO continuo?",
      answer: "Sí, ofrecemos servicios de SEO tanto como parte del desarrollo inicial como servicios continuos. Esto incluye optimización técnica, estrategia de contenido, análisis de palabras clave y reportes mensuales de rendimiento."
    },
    {
      question: "¿Puedo ver ejemplos de su trabajo anterior?",
      answer: "Por supuesto. Puedes ver algunos de nuestros proyectos en la sección de Proyectos de este sitio. Para casos de estudio más detallados o ejemplos específicos de tu industria, contáctanos y te enviaremos un portafolio personalizado."
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance">
            Preguntas <span className="font-medium text-primary">frecuentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Resolvemos las dudas más comunes sobre nuestros servicios y proceso de trabajo.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-sm px-6 hover:bg-accent/50 hover:border-primary/20 transition-smooth"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-medium text-foreground pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center space-y-4">
          <h3 className="text-xl font-medium text-foreground">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-muted-foreground">
            Estamos aquí para resolver cualquier duda específica sobre tu proyecto.
          </p>
          <button 
            onClick={() => {
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-smooth font-medium underline-offset-4 hover:underline"
          >
            Contáctanos directamente
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;