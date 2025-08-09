const About = () => {
  const values = [
    {
      title: "Minimalismo Funcional",
      description: "Creemos que menos es más. Cada elemento tiene un propósito específico y contribuye al objetivo final."
    },
    {
      title: "Calidad Sobre Cantidad",
      description: "Preferimos trabajar con menos clientes pero dedicar toda nuestra atención a crear soluciones excepcionales."
    },
    {
      title: "Resultados Medibles",
      description: "Cada proyecto debe generar un impacto positivo y medible en el negocio de nuestros clientes."
    },
    {
      title: "Transparencia Total",
      description: "Comunicación clara y honesta en cada etapa del proyecto. Sin sorpresas, solo resultados."
    }
  ];

  return (
    <section id="nosotros" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Philosophy */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance">
                Filosofía de <span className="font-medium text-primary">diseño</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  En <strong className="text-primary font-medium">The Eleventh</strong>, 
                  entendemos que el diseño web no es solo estética: es una herramienta 
                  estratégica para el crecimiento empresarial.
                </p>
                
                <p>
                  Nos especializamos en crear soluciones digitales que eliminan 
                  lo superfluo y se enfocan en lo esencial: generar resultados 
                  para tu negocio.
                </p>
                
                <p>
                  Cada línea de código, cada pixel, cada interacción está 
                  cuidadosamente pensada para maximizar la eficiencia y 
                  la experiencia del usuario final.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-light text-foreground">
              Nuestros <span className="font-medium text-primary">valores</span>
            </h3>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-medium text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                  {index < values.length - 1 && (
                    <div className="w-12 h-px bg-primary/30 mt-6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;