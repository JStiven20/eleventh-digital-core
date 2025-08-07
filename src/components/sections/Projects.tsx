import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Comercio Electrónico Minimalista",
      description: "Plataforma de e-commerce con diseño limpio y experiencia de compra optimizada. Incremento del 40% en conversiones.",
      category: "E-commerce",
      image: project1,
      technologies: ["React", "Node.js", "Stripe"]
    },
    {
      title: "Sitio Corporativo Profesional",
      description: "Presencia digital para consultora financiera. Diseño sobrio que transmite confianza y profesionalidad.",
      category: "Corporativo",
      image: project2,
      technologies: ["WordPress", "SEO", "Analytics"]
    },
    {
      title: "Aplicación Web Personalizada",
      description: "Sistema de gestión interno con interfaz intuitiva. Mejora del 60% en eficiencia operativa del cliente.",
      category: "Aplicación",
      image: project3,
      technologies: ["React", "Node.js", "PostgreSQL"]
    }
  ];

  return (
    <section id="proyectos" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance">
            Proyectos que <span className="font-medium">generan</span> resultados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada proyecto está diseñado con un objetivo claro: impulsar el crecimiento 
            y la eficiencia de nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-background rounded-sm border border-border overflow-hidden hover:shadow-lg transition-smooth"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={`Captura de pantalla del proyecto ${project.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-medium text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;