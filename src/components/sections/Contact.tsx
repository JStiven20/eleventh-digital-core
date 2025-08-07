import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Por favor ingresa un email válido");
      return;
    }

    setIsSubmitting(true);

    try {
      // Track form submission
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'contact_form',
          content_category: 'contact'
        });
      }

      // Here you would typically send to your backend API
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("¡Mensaje enviado! Te contactaremos pronto.");
      setFormData({ name: "", email: "", message: "" });
      
    } catch (error) {
      toast.error("Error al enviar el mensaje. Inténtalo nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    // Track WhatsApp click
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact', { content_name: 'whatsapp' });
    }
    
    const message = encodeURIComponent("Hola, me interesa conocer más sobre sus servicios de diseño web.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/theeleventh",
      handle: "@theeleventh"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/theeleventh",
      handle: "The Eleventh"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/theeleventh",
      handle: "@theeleventh"
    }
  ];

  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance">
                Hablemos de tu <span className="font-medium">proyecto</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Estamos listos para ayudarte a crear la solución digital 
                que tu empresa necesita. Conversemos sobre tus objetivos.
              </p>
            </div>

            {/* WhatsApp Button */}
            <Button
              onClick={handleWhatsAppClick}
              data-event="ContactWhatsApp"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
              size="lg"
            >
              <MessageCircle className="w-5 h-5" />
              Chatear por WhatsApp
            </Button>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">
                Síguenos
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-sm border border-border hover:bg-accent transition-smooth group"
                    title={social.handle}
                  >
                    <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-smooth" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-sm border border-border p-8">
            <form onSubmit={handleSubmit} className="space-y-6" data-event="FormSubmit">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={5}
                    className="w-full resize-none"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
                size="lg"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;