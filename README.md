# The Eleventh - Agencia de Diseño Web Minimalista

Una agencia especializada en diseño web minimalista, desarrollo personalizado, branding corporativo y mantenimiento de software para pequeñas y medianas empresas.

## 🎯 Servicios

- **Diseño Web Minimalista** - Sitios web sobrios y funcionales
- **Desarrollo Personalizado** - Soluciones a medida con tecnologías modernas
- **Branding Corporativo** - Identidad visual cohesiva y profesional
- **Mantenimiento de Software** - Soporte continuo y actualizaciones
- **SEO + Optimización** - Mejora de velocidad y posicionamiento

## 🛠️ Tecnologías

Este sitio web está construido con:

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: Sistema de diseño personalizado
- **Fonts**: Inter (Google Fonts)
- **Analytics**: Meta Pixel para conversiones

## 🔧 Desarrollo

### Requisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>

# Navegar al directorio
cd the-eleventh-website

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build
npm run lint         # Linting con ESLint
```

## 🔐 Seguridad

Este proyecto implementa múltiples capas de seguridad:

- **Content Security Policy (CSP)** - Prevención de ataques XSS
- **Security Headers** - X-Frame-Options, X-Content-Type-Options, etc.
- **Input Sanitization** - Validación estricta de formularios
- **HTTPS Enforcement** - Redireccionamiento automático a HTTPS
- **Rate Limiting** - Protección contra spam y ataques DDoS

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── sections/     # Secciones principales
│   └── ui/          # Componentes reutilizables
├── hooks/           # Hooks personalizados
├── lib/             # Utilidades
├── pages/           # Páginas de la aplicación
├── types/           # Definiciones TypeScript
└── assets/          # Imágenes y recursos
```

## 🚀 Despliegue

### Variables de Entorno Requeridas

```bash
# Meta Pixel
VITE_META_PIXEL_ID=your_pixel_id

# WhatsApp
VITE_WHATSAPP_NUMBER=+1234567890

# URLs de producción
VITE_SITE_URL=https://theeleventh.com
```

### Deploy en Producción

1. Configurar variables de entorno
2. Ejecutar build de producción: `npm run build`
3. Servir archivos estáticos desde `/dist`
4. Configurar headers de seguridad en el servidor web

## 📈 Analytics y Tracking

- **Meta Pixel** configurado para tracking de conversiones
- **Eventos personalizados** para acciones importantes
- **GTM Ready** - Preparado para Google Tag Manager

## 🤝 Contacto

- **Website**: [theeleventh.com](https://theeleventh.com)
- **Email**: info@theeleventh.com
- **WhatsApp**: +1234567890

---

© 2024 The Eleventh. Todos los derechos reservados.