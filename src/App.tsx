import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
import ProcessPage from "./pages/Process";
import TechnologiesPage from "./pages/Technologies";
import ProjectsPage from "./pages/Projects";
import PortfolioPage from "./pages/Portfolio";
import AboutPage from "./pages/About";
import FAQPage from "./pages/FAQ";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

import PageTransition from "@/components/ui/page-transition";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/servicios" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/proceso" element={<PageTransition><ProcessPage /></PageTransition>} />
        <Route path="/tecnologias" element={<PageTransition><TechnologiesPage /></PageTransition>} />
        <Route path="/proyectos" element={<PageTransition><ProjectsPage /></PageTransition>} />
        <Route path="/portafolio" element={<PageTransition><PortfolioPage /></PageTransition>} />
        <Route path="/nosotros" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FAQPage /></PageTransition>} />
        <Route path="/contacto" element={<PageTransition><ContactPage /></PageTransition>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    
  </QueryClientProvider>
);

export default App;
