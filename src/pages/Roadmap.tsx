import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import ImplementationPlanner from "@/components/roadmap/ImplementationPlanner";
import StakeholderMapping from "@/components/roadmap/StakeholderMapping";
import SiteSelection from "@/components/roadmap/SiteSelection";
import FinancialDashboard from "@/components/roadmap/FinancialDashboard";
// import TechnologyReadiness from "@/components/roadmap/TechnologyReadiness";
// import RegulatoryWorkflow from "@/components/roadmap/RegulatoryWorkflow";
// import ScenarioBuilder from "@/components/roadmap/ScenarioBuilder";
// import ProgressMonitoring from "@/components/roadmap/ProgressMonitoring";
// import SustainabilityMetrics from "@/components/roadmap/SustainabilityMetrics";

const Roadmap = () => {
  const [activeTab, setActiveTab] = useState("stakeholders");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gradient">
            India CCUS Implementation Roadmap
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive planning, analysis, and decision support for Carbon Capture, Utilization, and Storage deployment
          </p>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-3 lg:grid-cols-9 gap-2 h-auto p-2 bg-muted/50">
            {/* <TabsTrigger value="planner" className="text-xs">Planner</TabsTrigger> */}
            <TabsTrigger value="stakeholders" className="text-xs">Stakeholders</TabsTrigger>
            <TabsTrigger value="sites" className="text-xs">Site Selection</TabsTrigger>
            <TabsTrigger value="financial" className="text-xs">Financial</TabsTrigger>
            {/* <TabsTrigger value="technology" className="text-xs">Tech Readiness</TabsTrigger> */}
            {/* <TabsTrigger value="regulatory" className="text-xs">Regulatory</TabsTrigger> */}
            {/* <TabsTrigger value="scenarios" className="text-xs">Scenarios</TabsTrigger> */}
            {/* <TabsTrigger value="progress" className="text-xs">Progress</TabsTrigger> */}
            {/* <TabsTrigger value="sustainability" className="text-xs">Sustainability</TabsTrigger> */}
          </TabsList>

          {/* <TabsContent value="planner">
            <ImplementationPlanner />
          </TabsContent> */}

          <TabsContent value="stakeholders">
            <StakeholderMapping />
          </TabsContent>

          <TabsContent value="sites">
            <SiteSelection />
          </TabsContent>

          <TabsContent value="financial">
            <FinancialDashboard />
          </TabsContent>

          {/* <TabsContent value="technology">
            <TechnologyReadiness />
          </TabsContent>

          <TabsContent value="regulatory">
            <RegulatoryWorkflow />
          </TabsContent>

          <TabsContent value="scenarios">
            <ScenarioBuilder />
          </TabsContent>

          <TabsContent value="progress">
            <ProgressMonitoring />
          </TabsContent>

          <TabsContent value="sustainability">
            <SustainabilityMetrics />
          </TabsContent> */}
        </Tabs>
      </div>
    </div>
  );
};

export default Roadmap;
