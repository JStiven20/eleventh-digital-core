import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Instagram, Facebook, Music2, MessageCircle, Shield } from "lucide-react";
import { useSecurity } from "@/hooks/use-security";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");

  const {
    validateContactForm,
    recordAttempt,
    resetAttempts,
    generateCSRFToken,
    isBlocked,
    attemptsRemaining,
  } = useSecurity();

  // URL de tu API (local: http://localhost:3001 — prod: tu dominio)
  const API_URL = import.meta.env.VITE_API_URL || "";

  useEffect(() => {
    setCsrfToken(generateCSRFToken());
  }, [generateCSRFToken]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const maxLengths = { name: 50, email: 254, message: 1000 } as const;
    if (value.length <= maxLengths[name as keyof typeof maxLengths]) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("📮 submit clicked", { formData, API_URL });

    // 0) Verifica que tengas VITE_API_URL configurado
    if (!API_URL) {
      toast.error("Falta VITE_API_URL en el .env del frontend");
      console.error("Falta VITE_API_URL. Crea eleventh-digital-core/.env con VITE_API_URL=http://localhost:3001 y reinicia Vite");
      return;
    }

    if (isBlocked) {
      toast.error("Demasiados intentos. Por favor, espera.");
      return;
    }

    // 1) Validación
    const validation = validateContactForm(formData);
    console.log("✅ validación:", validation);
    if (!validation.isValid) {
      validation.errors.forEach((err) => toast.error(err));
      recordAttempt();
      return;
    }

    setIsSubmitting(true);

    try {
      // 2) (Opcional) Pixel
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          content_name: "contact_form",
          content_category: "contact",
          value: 1.0,
          currency: "USD",
        });
      }

      // 3) Payload que espera tu backend
      const payload = {
        nombre: formData.name,
        email: formData.email,
        mensaje: formData.message,
        csrf_token: csrfToken, // opcional
        user_agent: navigator.userAgent.substring(0, 100),
        timestamp: Date.now(),
      };

      console.log("🌐 POST", `${API_URL}/api/contacto`, payload);

      const res = await fetch(`${API_URL}/api/contacto`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data: any = {};
      try { data = await res.json(); } catch { /* puede no venir JSON en errores raros */ }
      console.log("🧾 response", res.status, data);

      if (!res.ok) {
        throw new Error(data?.error || `Error ${res.status}`);
      }

      toast.success("¡Mensaje enviado! Te contactaremos pronto.");
      setFormData({ name: "", email: "", message: "" });
      setCsrfToken(generateCSRFToken());
      resetAttempts();
    } catch (err: any) {
      console.error("❌ submit error:", err);
      toast.error(err?.message || "Error al enviar el mensaje.");
      recordAttempt();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Contact", {
        content_name: "whatsapp_contact",
        content_category: "contact",
      });
    }
    const message = encodeURIComponent("Hola, me interesa conocer más sobre sus servicios de diseño web.");
    const phoneNumber = "+34123456789"; // Cambia por tu número real
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

const socialLinks = [
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/theeleventh", handle: "@theeleventh" },
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/theeleventh", handle: "The Eleventh" },
    { name: "TikTok", icon: Music2, url: "https://www.tiktok.com/@theeleventh", handle: "@theeleventh" },
  ];

  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
                Hablemos de tu <span className="font-medium text-primary">proyecto</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Estamos listos para ayudarte a crear la solución digital que tu empresa necesita.
              </p>
            </div>

            <Button
              onClick={handleWhatsAppClick}
              data-event="ContactWhatsApp"
              variant="premium"
              size="lg"
              className="inline-flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              Chatear por WhatsApp
            </Button>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">Síguenos</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-sm border border-border hover:bg-primary hover:border-primary transition-smooth group"
                    title={social.handle}
                  >
                    <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-smooth" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-background rounded-sm border border-border p-8">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4 p-3 bg-muted/50 rounded-sm">
              <Shield className="w-4 h-4" />
              <span>Formulario protegido con encriptación SSL y validación anti-spam</span>
            </div>

            {isBlocked && (
              <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-sm mb-4">
                Formulario temporalmente bloqueado. Intentos restantes: {attemptsRemaining}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" data-event="FormSubmit">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre completo *</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                    required
                    maxLength={50}
                    autoComplete="name"
                    disabled={isBlocked}
                  />
                  <span className="text-xs text-muted-foreground">{formData.name.length}/50</span>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    required
                    maxLength={254}
                    autoComplete="email"
                    disabled={isBlocked}
                  />
                  <span className="text-xs text-muted-foreground">{formData.email.length}/254</span>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje *</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={5}
                    required
                    maxLength={1000}
                    disabled={isBlocked}
                  />
                  <span className="text-xs text-muted-foreground">{formData.message.length}/1000</span>
                </div>

                <input type="hidden" name="csrf_token" value={csrfToken} />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isBlocked}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
                size="lg"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Al enviar este formulario, aceptas nuestra política de privacidad.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
