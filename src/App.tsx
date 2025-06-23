// src/App.tsx (Corrected)

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Printers3D from "./pages/Printers3D";
import Scanners3D from "./pages/Scanners3D";
import RoboticDogs from "./pages/RoboticDogs";
import HumanoidRobots from "./pages/HumanoidRobots";
import RoboticArms from "./pages/RoboticArms";
import LaserCutters from "./pages/LaserCutters";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-[#F4F4F4] flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/support" element={<Support />} />
                <Route path="/3d-printers" element={<Printers3D />} />
                <Route path="/3d-scanners" element={<Scanners3D />} />
                <Route path="/robotic-dogs" element={<RoboticDogs />} />
                <Route path="/humanoid-robots" element={<HumanoidRobots />} />
                <Route path="/robotic-arms" element={<RoboticArms />} />
                <Route path="/laser-cutters" element={<LaserCutters />} />
                <Route path="/product/:category/:id" element={<ProductDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
