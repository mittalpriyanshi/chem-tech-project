import { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { 
  Beaker, 
  Factory, 
  Zap, 
  Recycle, 
  Ship,
  Mountain,
  FlaskConical,
  Truck,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Gauge
} from "lucide-react";

type MainCategory = "Capture" | "Transport" | "Storage" | "Utilisation";

interface Technology {
  id: string;
  name: string;
  category: string;
  mainCategory: MainCategory;
  icon: any;
  efficiency: number;
  costPerTon: number;
  maturity: "Commercial" | "Demonstration" | "Pilot" | "R&D";
  definition: string;
  advantages: string[];
  challenges: string[];
  applications: string[];
}

const TechGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<MainCategory | null>(null);

  const mainCategories = [
    {
      name: "Capture" as MainCategory,
      title: "CO₂ Capture",
      description: "Technologies for capturing CO₂ from various sources",
      icon: Beaker,
      color: "climate-blue"
    },
    {
      name: "Transport" as MainCategory,
      title: "CO₂ Transport",
      description: "Methods for transporting captured CO₂",
      icon: Ship,
      color: "accent"
    },
    {
      name: "Storage" as MainCategory,
      title: "CO₂ Storage",
      description: "Long-term storage solutions for captured CO₂",
      icon: Mountain,
      color: "climate-green"
    },
    {
      name: "Utilisation" as MainCategory,
      title: "CO₂ Utilisation",
      description: "Converting CO₂ into valuable products",
      icon: Recycle,
      color: "warning"
    }
  ];

  const technologies: Technology[] = [
    // CAPTURE TECHNOLOGIES
    {
      id: "amine-scrubbing",
      name: "Amine Scrubbing",
      category: "Post-Combustion",
      mainCategory: "Capture",
      icon: Beaker,
      efficiency: 90,
      costPerTon: 50,
      maturity: "Commercial",
      definition: "Chemical absorption using amine solutions to capture CO₂ from flue gases after combustion",
      advantages: ["High capture efficiency (85-95%)", "Proven technology at scale", "Flexible operation modes", "Can be retrofitted to existing plants"],
      challenges: ["High energy penalty (20-30%)", "Solvent degradation issues", "Requires continuous regeneration", "Corrosion management"],
      applications: ["Power plants", "Cement production", "Steel manufacturing", "Refineries"]
    },
    {
      id: "igcc",
      name: "Pre-combustion (IGCC)",
      category: "Pre-Combustion",
      mainCategory: "Capture",
      icon: Factory,
      efficiency: 93,
      costPerTon: 45,
      maturity: "Demonstration",
      definition: "Integrated Gasification Combined Cycle with CO₂ removal before combustion",
      advantages: ["Higher efficiency than post-combustion", "Produces concentrated CO₂ stream", "Lower capture energy penalty", "Co-produces hydrogen"],
      challenges: ["High capital investment", "Complex gasification process", "Limited commercial deployment", "Feedstock flexibility issues"],
      applications: ["Coal power plants", "Synthetic fuel production", "Hydrogen production", "Petrochemicals"]
    },
    {
      id: "oxy-fuel",
      name: "Oxy-fuel Combustion",
      category: "Oxy-fuel",
      mainCategory: "Capture",
      icon: Zap,
      efficiency: 95,
      costPerTon: 65,
      maturity: "Demonstration",
      definition: "Combustion in pure oxygen producing highly concentrated CO₂ stream for easy capture",
      advantages: ["Very high CO₂ purity (>95%)", "No post-processing needed", "Can retrofit existing boilers", "Eliminates nitrogen oxides"],
      challenges: ["High oxygen production cost", "Equipment modifications required", "Heat management complexity", "Limited large-scale operation"],
      applications: ["Power generation", "Industrial furnaces", "Cement kilns", "Glass manufacturing"]
    },
    
    // TRANSPORT TECHNOLOGIES
    {
      id: "onshore-pipeline",
      name: "Onshore Pipeline",
      category: "Pipeline Transport",
      mainCategory: "Transport",
      icon: Truck,
      efficiency: 99,
      costPerTon: 5,
      maturity: "Commercial",
      definition: "High-pressure pipeline networks for transporting supercritical CO₂ over land",
      advantages: ["Cost-effective for large volumes", "Proven infrastructure", "Low operational costs", "Continuous flow capability"],
      challenges: ["High upfront capital cost", "Right-of-way permissions needed", "Terrain constraints", "Potential leakage risks"],
      applications: ["Industrial clusters", "Regional networks", "EOR projects", "Geological storage sites"]
    },
    {
      id: "offshore-shipping",
      name: "Offshore Shipping",
      category: "Marine Transport",
      mainCategory: "Transport",
      icon: Ship,
      efficiency: 97,
      costPerTon: 15,
      maturity: "Demonstration",
      definition: "Specialized vessels for transporting liquefied CO₂ across water bodies",
      advantages: ["Flexible routing", "No fixed infrastructure", "Suitable for offshore storage", "Scalable capacity"],
      challenges: ["Higher per-ton costs", "Weather dependent", "Loading/unloading facilities needed", "Limited vessel availability"],
      applications: ["Offshore storage fields", "Island nations", "Cross-border transport", "Remote storage sites"]
    },
    
    // STORAGE TECHNOLOGIES
    {
      id: "onshore-geological",
      name: "Onshore Geological Storage",
      category: "Geological Storage",
      mainCategory: "Storage",
      icon: Mountain,
      efficiency: 99,
      costPerTon: 10,
      maturity: "Commercial",
      definition: "Permanent storage of CO₂ in deep underground geological formations on land",
      advantages: ["Large storage capacity", "Permanent sequestration", "Well-characterized sites", "Proven technology"],
      challenges: ["Site availability limited", "Public acceptance issues", "Monitoring requirements", "Potential induced seismicity"],
      applications: ["Saline aquifers", "Depleted oil/gas fields", "Deep coal seams", "Basalt formations"]
    },
    {
      id: "offshore-geological",
      name: "Offshore Geological Storage",
      category: "Geological Storage",
      mainCategory: "Storage",
      icon: Ship,
      efficiency: 99,
      costPerTon: 12,
      maturity: "Commercial",
      definition: "Injection of CO₂ into subsea geological formations beneath ocean floor",
      advantages: ["Vast storage potential", "Lower public opposition", "Natural pressure containment", "Away from populated areas"],
      challenges: ["Higher infrastructure costs", "Marine environment challenges", "Complex monitoring", "International regulations"],
      applications: ["North Sea projects", "Offshore saline formations", "Depleted offshore fields", "Subsea basalt"]
    },
    
    // UTILISATION TECHNOLOGIES
    {
      id: "eor",
      name: "Enhanced Oil Recovery (EOR)",
      category: "Oil Recovery",
      mainCategory: "Utilisation",
      icon: FlaskConical,
      efficiency: 70,
      costPerTon: 30,
      maturity: "Commercial",
      definition: "Using CO₂ injection to extract additional oil from mature reservoirs",
      advantages: ["Revenue from oil production", "Proven at commercial scale", "Permanent CO₂ storage", "Existing infrastructure"],
      challenges: ["Limited to oil fields", "Oil market dependent", "Partial CO₂ recycling needed", "Geological constraints"],
      applications: ["Mature oil fields", "Stripper wells", "Enhanced recovery projects", "Integrated CCUS"]
    },
    {
      id: "mineral-carbonation",
      name: "Mineral Carbonation",
      category: "Mineralization",
      mainCategory: "Utilisation",
      icon: Mountain,
      efficiency: 85,
      costPerTon: 50,
      maturity: "Pilot",
      definition: "Converting CO₂ into stable carbonate minerals through chemical reactions",
      advantages: ["Permanent storage as solid", "Uses industrial waste", "No leakage risk", "Creates useful products"],
      challenges: ["Slow reaction rates", "Large material volumes needed", "Energy intensive", "Limited market demand"],
      applications: ["Building materials", "Mine tailings", "Steel slag utilization", "Concrete production"]
    },
    {
      id: "chemical-synthesis",
      name: "Chemical Synthesis",
      category: "Chemical Conversion",
      mainCategory: "Utilisation",
      icon: Recycle,
      efficiency: 75,
      costPerTon: 100,
      maturity: "R&D",
      definition: "Converting captured CO₂ into chemicals, fuels, and materials through various processes",
      advantages: ["High-value products", "Circular economy model", "Market demand exists", "Innovation potential"],
      challenges: ["Energy intensive processes", "Economic viability uncertain", "Scale-up challenges", "Competing with fossil routes"],
      applications: ["Synthetic fuels", "Polymers", "Chemicals", "Building materials"]
    }
  ];

  const getMaturityColor = (maturity: string) => {
    switch (maturity) {
      case "Commercial": return "bg-success text-success-foreground";
      case "Demonstration": return "bg-warning text-warning-foreground";
      case "Pilot": return "bg-primary text-primary-foreground";
      case "R&D": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const filteredTechnologies = selectedCategory 
    ? technologies.filter(tech => tech.mainCategory === selectedCategory)
    : [];

  // Initial view - Category cards
  if (!selectedCategory) {
    return (
      <div className="space-y-8 animate-fade-in">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gradient mb-4">CCUS Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Select a category to explore technologies for Carbon Capture, Utilization & Storage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <Card 
                key={cat.name}
                className="dashboard-card p-8 hover-lift cursor-pointer group text-center"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedCategory(cat.name)}
              >
                <div className={`mx-auto mb-4 p-4 rounded-xl bg-${cat.color}/10 w-fit group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-10 h-10 text-${cat.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cat.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  // Technology cards view after category selection
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gradient mb-2">
            {mainCategories.find(c => c.name === selectedCategory)?.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {mainCategories.find(c => c.name === selectedCategory)?.description}
          </p>
        </div>
        <Button 
          onClick={() => setSelectedCategory(null)}
          variant="outline"
        >
          ← Back to Categories
        </Button>
      </div>

      {/* Technology Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTechnologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <Card 
              key={tech.id} 
              className="dashboard-card p-6 hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <Badge className={getMaturityColor(tech.maturity)}>
                  {tech.maturity}
                </Badge>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-2">
                    {tech.category}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tech.definition}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Gauge className="w-3 h-3 text-muted-foreground mr-1" />
                      <span className="text-xs text-muted-foreground">Efficiency</span>
                    </div>
                    <p className="text-sm font-semibold text-climate-green">{tech.efficiency}%</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <DollarSign className="w-3 h-3 text-muted-foreground mr-1" />
                      <span className="text-xs text-muted-foreground">Cost</span>
                    </div>
                    <p className="text-sm font-semibold text-foreground">${tech.costPerTon}/t</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="w-3 h-3 text-muted-foreground mr-1" />
                      <span className="text-xs text-muted-foreground">Maturity</span>
                    </div>
                    <Progress value={tech.maturity === 'Commercial' ? 100 : tech.maturity === 'Demonstration' ? 75 : tech.maturity === 'Pilot' ? 50 : 25} className="h-1" />
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">Applications:</p>
                  <div className="flex flex-wrap gap-1">
                    {tech.applications.map((app) => (
                      <Badge key={app} variant="outline" className="text-xs">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Advantages/Challenges */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="font-medium text-success mb-1">✓ Advantages</p>
                    <ul className="space-y-1">
                      {tech.advantages.slice(0, 2).map((adv, i) => (
                        <li key={i} className="text-muted-foreground leading-tight">{adv}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-destructive mb-1">⚠ Challenges</p>
                    <ul className="space-y-1">
                      {tech.challenges.slice(0, 2).map((chal, i) => (
                        <li key={i} className="text-muted-foreground leading-tight">{chal}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Button */}
                {/* <Button 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  variant="outline"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button> */}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Comparison Table */}
      <Card className="dashboard-card p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Technology Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-2 font-medium text-muted-foreground">Technology</th>
                <th className="text-center py-3 px-2 font-medium text-muted-foreground">Efficiency</th>
                <th className="text-center py-3 px-2 font-medium text-muted-foreground">Cost ($/tCO₂)</th>
                <th className="text-center py-3 px-2 font-medium text-muted-foreground">Maturity</th>
                {/* <th className="text-center py-3 px-2 font-medium text-muted-foreground">Deployment</th> */}
              </tr>
            </thead>
            <tbody>
              {filteredTechnologies.map((tech) => (
                <tr key={tech.id} className="border-b border-border/50 hover:bg-muted/30">
                  <td className="py-3 px-2 font-medium text-foreground">{tech.name}</td>
                  <td className="text-center py-3 px-2 text-climate-green font-semibold">{tech.efficiency}%</td>
                  <td className="text-center py-3 px-2 text-foreground font-semibold">${tech.costPerTon}</td>
                  <td className="text-center py-3 px-2">
                    <Badge className={getMaturityColor(tech.maturity)} variant="outline">
                      {tech.maturity}
                    </Badge>
                  </td>
                  {/* <td className="text-center py-3 px-2">
                    <div className="flex justify-center">
                      <Progress 
                        value={tech.maturity === 'Commercial' ? 100 : tech.maturity === 'Demonstration' ? 75 : tech.maturity === 'Pilot' ? 50 : 25} 
                        className="w-16 h-2" 
                      />
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default TechGrid;