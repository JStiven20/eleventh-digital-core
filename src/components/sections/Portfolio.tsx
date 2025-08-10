import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <section id="portafolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance">
            Nuestro <span className="font-medium text-primary">portafolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Selección de proyectos reales que demuestran nuestro enfoque en diseño, rendimiento y resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Palmera Studio item */}
          <Card className="border-border hover:border-primary/20 hover:shadow-primary transition-smooth hover-scale">
            <div className="aspect-[4/3] overflow-hidden bg-muted relative">
              <div className="absolute inset-0 animated-gradient opacity-20" aria-hidden="true" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-3 py-1 rounded-sm bg-background/70 border border-border text-sm text-muted-foreground">
                  palmerastudio.es
                </span>
              </div>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">Sitio web</span>
                <h3 className="text-lg font-medium text-foreground">Palmera Studio</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Web corporativa elegante y rápida. Experiencia minimalista con foco en claridad, estética y conversión.
                </p>
              </div>
              <div className="pt-2">
                <a href="https://www.palmerastudio.es" target="_blank" rel="noopener noreferrer">
                  <Button variant="premium" className="inline-flex items-center gap-2">
                    Visitar sitio
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
