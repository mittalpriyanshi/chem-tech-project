import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import ThemeProvider from "./components/ThemeProvider";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Calculator from "./pages/Calculator";
import Technologies from "./pages/Technologies";
import KnowledgeHub from "./pages/KnowledgeHub";
import ChemicalEngineers from "./pages/ChemicalEngineers";
import NotFound from "./pages/NotFound";
import AIAssistant from "./pages/AIAssistant";
import Roadmap from "./pages/Roadmap";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/technologies" element={<Technologies />} />
                <Route path="/knowledge-hub" element={<KnowledgeHub />} />
                <Route path="/chemical-engineers" element={<ChemicalEngineers />} />
                <Route path="/ai-assistant" element={<AIAssistant />} />
                <Route path="/roadmap" element={<Roadmap />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
