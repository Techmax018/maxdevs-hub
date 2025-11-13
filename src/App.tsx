import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Index from "./pages/Index";
=======
import Home from "./pages/Home";
>>>>>>> growth/main
import Packages from "./pages/Packages";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
<<<<<<< HEAD
import NotFound from "./pages/NotFound";
=======
import Billing from "./pages/Billing";
import NotFound from "./pages/NotFound";
import { ChatBot } from "./components/ChatBot";
>>>>>>> growth/main

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Index />} />
=======
          <Route path="/" element={<Home />} />
>>>>>>> growth/main
          <Route path="/packages" element={<Packages />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
=======
          <Route path="/billing" element={<Billing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatBot />
>>>>>>> growth/main
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
