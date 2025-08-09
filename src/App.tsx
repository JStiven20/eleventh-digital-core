import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
import ProcessPage from "./pages/Process";
import TechnologiesPage from "./pages/Technologies";
import ProjectsPage from "./pages/Projects";
import TestimonialsPage from "./pages/Testimonials";
import AboutPage from "./pages/About";
import FAQPage from "./pages/FAQ";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/proceso" element={<ProcessPage />} />
            <Route path="/tecnologias" element={<TechnologiesPage />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
            <Route path="/testimonios" element={<TestimonialsPage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
