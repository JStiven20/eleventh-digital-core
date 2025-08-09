import { Badge } from "@/components/ui/badge";

const Technologies = () => {
  const techStack = {
    frontend: [
      "React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", 
      "Framer Motion", "Three.js", "GSAP"
    ],
    backend: [
      "Node.js", "Python", "PHP", "PostgreSQL", "MySQL", 
      "MongoDB", "Redis", "Firebase"
    ],
    tools: [
      "Figma", "Adobe Creative Suite", "Git", "Docker", 
      "AWS", "Vercel", "Cloudflare", "Stripe"
    ],
    cms: [
      "WordPress", "Strapi", "Sanity", "Contentful", 
      "Ghost", "Webflow", "Shopify"
    ]
  };

  const categories = [
    {
      title: "Frontend & UI",
      description: "Tecnologías modernas para interfaces excepcionales",
      technologies: techStack.frontend,
      color: "primary"
    },
    {
      title: "Backend & Bases de Datos",
      description: "Sistemas robustos y escalables",
      technologies: techStack.backend,
      color: "secondary"
    },
    {
      title: "Herramientas & DevOps",
      description: "Workflow optimizado y despliegue continuo",
      technologies: techStack.tools,
      color: "accent"
    },
    {
      title: "CMS & E-commerce",
      description: "Gestión de contenido y comercio electrónico",
      technologies: techStack.cms,
      color: "muted"
    }
  ];

  return (
    <section id="tecnologias" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance">
            Tecnologías <span className="font-medium">modernas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Utilizamos las herramientas más avanzadas y confiables del mercado para 
            construir soluciones que perduran en el tiempo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="space-y-6 p-8 rounded-sm border border-border hover:bg-accent/50 transition-smooth"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-foreground">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex} 
                    variant="secondary"
                    className="text-xs font-normal bg-muted/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Stack actualizado constantemente
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Nos mantenemos al día con las últimas tendencias y mejores prácticas 
            para ofrecerte siempre la mejor solución tecnológica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;