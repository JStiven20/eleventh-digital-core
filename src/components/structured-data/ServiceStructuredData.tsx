import React from 'react';

interface Service {
  name: string;
  description: string;
  price?: string;
  category: string;
}

interface ServiceStructuredDataProps {
  services: Service[];
}

const ServiceStructuredData: React.FC<ServiceStructuredDataProps> = ({ services }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Eleventh",
    "url": "https://theeleventh.com",
    "logo": "https://theeleventh.com/logo.png",
    "description": "Agencia especializada en diseño web profesional, desarrollo personalizado y branding corporativo para pequeñas y medianas empresas.",
    "areaServed": "ES",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Diseño Web y Desarrollo",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description,
          "category": service.category,
          "provider": {
            "@type": "Organization",
            "name": "The Eleventh"
          }
        },
        "price": service.price,
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "position": index + 1
      }))
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
};

export default ServiceStructuredData;