import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    // Track WhatsApp click
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact', { 
        content_name: 'floating_whatsapp',
        content_category: 'contact'
      });
    }
    
    const message = encodeURIComponent("Hola, me interesa conocer más sobre sus servicios de diseño web minimalista.");
    const phoneNumber = "34672529065"; // Número de WhatsApp España
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      {/* Tooltip */}
      {isHovered && (
        <div className="bg-foreground text-background px-3 py-2 rounded-sm text-sm font-medium shadow-lg animate-in slide-in-from-bottom-2 duration-200">
          ¿Necesitas ayuda? Chatea con nosotros
          <div className="w-2 h-2 bg-foreground transform rotate-45 absolute -bottom-1 right-4"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <div className="relative group">
        <Button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 p-0 flex items-center justify-center group-hover:scale-110 cursor-pointer"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </Button>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 w-6 h-6 bg-muted border border-border rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-accent cursor-pointer"
          aria-label="Cerrar chat"
        >
          <X className="w-3 h-3 text-muted-foreground" />
        </button>
      </div>

      {/* Pulse animation */}
      <div className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-[#25D366] opacity-20 animate-ping"></div>
    </div>
  );
};

export default FloatingWhatsApp;