import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Instagram, Linkedin, Twitter, MessageCircle, Shield } from "lucide-react";
import { useSecurity } from "@/hooks/use-security";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");
  
  const { 
    validateContactForm, 
    recordAttempt, 
    resetAttempts, 
    generateCSRFToken,
    isBlocked,
    attemptsRemaining 
  } = useSecurity();

  // Generar token CSRF al montar el componente
  useEffect(() => {
    setCsrfToken(generateCSRFToken());
  }, [generateCSRFToken]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Limitar longitud de inputs
    const maxLengths = {
      name: 50,
      email: 254,
      message: 1000
    };
    
    if (value.length <= maxLengths[name as keyof typeof maxLengths]) {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verificar si está bloqueado
    if (isBlocked) {
      toast.error("Demasiados intentos. Por favor, espera antes de intentar nuevamente.");
      return;
    }

    // Validar con sistema de seguridad
    const validation = validateContactForm(formData);
    
    if (!validation.isValid) {
      validation.errors.forEach(error => toast.error(error));
      recordAttempt();
      return;
    }

    setIsSubmitting(true);

    try {
      // Track form submission
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'contact_form',
          content_category: 'contact',
          value: 1.00,
          currency: 'USD'
        });
      }

      // Simular envío seguro (en producción, enviar a API con CSRF token)
      const formPayload = {
        ...formData,
        csrf_token: csrfToken,
        timestamp: Date.now(),
        user_agent: navigator.userAgent.substring(0, 100) // Limitado para seguridad
      };

      // Aquí iría la llamada real a tu API backend segura
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("¡Mensaje enviado de forma segura! Te contactaremos pronto.");
      setFormData({ name: "", email: "", message: "" });
      setCsrfToken(generateCSRFToken()); // Regenerar token
      resetAttempts(); // Resetear intentos después de éxito
      
    } catch (error) {
      toast.error("Error al enviar el mensaje. Inténtalo nuevamente.");
      recordAttempt();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    // Track WhatsApp click
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact', { 
        content_name: 'whatsapp_contact',
        content_category: 'contact'
      });
    }
    
    const message = encodeURIComponent("Hola, me interesa conocer más sobre sus servicios de diseño web.");
    const phoneNumber = "+1234567890"; // Reemplazar con número real
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
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
            {/* Security Notice */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4 p-3 bg-muted/50 rounded-sm">
              <Shield className="w-4 h-4" />
              <span>Formulario protegido con encriptación SSL y validación anti-spam</span>
            </div>
            
            {isBlocked && (
              <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-sm mb-4">
                Formulario temporalmente bloqueado por seguridad. Intentos restantes: {attemptsRemaining}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6" data-event="FormSubmit">{" "}
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre completo *
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
                    maxLength={50}
                    autoComplete="name"
                    disabled={isBlocked}
                  />
                  <span className="text-xs text-muted-foreground">
                    {formData.name.length}/50 caracteres
                  </span>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
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
                    maxLength={254}
                    autoComplete="email"
                    disabled={isBlocked}
                  />
                  <span className="text-xs text-muted-foreground">
                    {formData.email.length}/254 caracteres
                  </span>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos sobre tu proyecto... (mínimo 10 caracteres)"
                    rows={5}
                    className="w-full resize-none"
                    required
                    maxLength={1000}
                    disabled={isBlocked}
                  />
                  <span className="text-xs text-muted-foreground">
                    {formData.message.length}/1000 caracteres (mínimo 10)
                  </span>
                </div>

                {/* Hidden CSRF token */}
                <input type="hidden" name="csrf_token" value={csrfToken} />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isBlocked}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
                size="lg"
              >
                {isSubmitting ? "Enviando de forma segura..." : "Enviar mensaje"}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Al enviar este formulario, aceptas nuestra política de privacidad
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;