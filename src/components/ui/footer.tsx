const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Servicios",
      links: [
        { name: "Diseño Web", href: "#servicios" },
        { name: "Desarrollo", href: "#servicios" },
        { name: "Branding", href: "#servicios" },
        { name: "Mantenimiento", href: "#servicios" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { name: "Nosotros", href: "#nosotros" },
        { name: "Proyectos", href: "#proyectos" },
        { name: "Contacto", href: "#contacto" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Política de Privacidad", href: "/privacy" },
        { name: "Términos de Servicio", href: "/terms" },
        { name: "Cookies", href: "/cookies" }
      ]
    }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              The Eleventh
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Agencia especializada en diseño web minimalista y desarrollo 
              a medida para pequeñas y medianas empresas.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-sm font-medium text-foreground uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-muted-foreground">
            © {currentYear} The Eleventh. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center space-x-6 text-xs text-muted-foreground">
            <span>Diseñado y desarrollado con atención al detalle</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;