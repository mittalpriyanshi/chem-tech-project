import ChemicalEngineersWorkflow from "@/components/knowledge/ChemicalEngineersWorkflow";
import GlobalCaseStudies from "@/components/knowledge/GlobalCaseStudies";

const KnowledgeHub = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Knowledge Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive resources on CCUS implementation, chemical engineering workflows, 
            and proven global case studies for India's Net Zero 2070 journey.
          </p>
        </div>
        
        <ChemicalEngineersWorkflow />
        <GlobalCaseStudies />
      </div>
    </div>
  );
};

export default KnowledgeHub;