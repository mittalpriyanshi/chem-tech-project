import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";    
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Calculator, ChevronDown, ChevronUp, Download } from "lucide-react";
type MainCategory = "capture" | "transport" | "storage" | "utilisation";
type SubTechnology = string;

interface CostComponent {
  label: string;
  key: string;
}

interface TechnologyData {
  label: string;
  capex: CostComponent[];
  opex: CostComponent[];
}

const subTechnologies: Record<MainCategory, Record<string, TechnologyData>> = {
  capture: {
    "post-combustion": {
      label: "Post-combustion (Amine)",
      capex: [
        { label: "Equipment - Supporting Boiler", key: "boiler" },
        { label: "Equipment - Higher Desulphurisation", key: "desulphurisation" },
        { label: "Equipment - Other Related", key: "other_equipment" },
      ],
      opex: [
        { label: "Operation of Supporting Boiler", key: "boiler_operation" },
        { label: "Absorbent (Amine)", key: "amine" },
        { label: "Desulphurisation (NaOH)", key: "naoh" },
        { label: "Labour", key: "labour" },
      ],
    },
    "pre-combustion": {
      label: "Pre-combustion (IGCC)",
      capex: [
        { label: "Gasification Unit", key: "gasification" },
        { label: "Gas Cleanup System", key: "cleanup" },
        { label: "CO₂ Separation Unit", key: "separation" },
      ],
      opex: [
        { label: "Fuel Costs", key: "fuel" },
        { label: "Maintenance", key: "maintenance" },
        { label: "Labour", key: "labour" },
      ],
    },
    "oxy-fuel": {
      label: "Oxy-fuel",
      capex: [
        { label: "Air Separation Unit", key: "air_separation" },
        { label: "Modified Combustor", key: "combustor" },
        { label: "Flue Gas Recirculation", key: "recirculation" },
      ],
      opex: [
        { label: "Oxygen Production", key: "oxygen" },
        { label: "Power Consumption", key: "power" },
        { label: "Labour", key: "labour" },
      ],
    },
  },
  transport: {
    "onshore-pipeline": {
      label: "Onshore Pipeline",
      capex: [
        { label: "Pipeline Construction", key: "pipeline" },
        { label: "Compression Stations", key: "compression" },
        { label: "Monitoring Equipment", key: "monitoring" },
      ],
      opex: [
        { label: "Pipeline Maintenance", key: "maintenance" },
        { label: "Energy for Compression", key: "energy" },
        { label: "Monitoring & Safety", key: "safety" },
      ],
    },
    "offshore-shipping": {
      label: "Offshore Shipping",
      capex: [
        { label: "Ship Acquisition", key: "ships" },
        { label: "Port Infrastructure", key: "port" },
        { label: "Loading Equipment", key: "loading" },
      ],
      opex: [
        { label: "Fuel Costs", key: "fuel" },
        { label: "Crew & Operations", key: "crew" },
        { label: "Maintenance", key: "maintenance" },
      ],
    },
  },
  storage: {
    "onshore-geological": {
      label: "Onshore Geological Storage",
      capex: [
        { label: "Site Characterization", key: "characterization" },
        { label: "Well Drilling", key: "drilling" },
        { label: "Injection Equipment", key: "injection" },
      ],
      opex: [
        { label: "Monitoring & Verification", key: "monitoring" },
        { label: "Maintenance", key: "maintenance" },
        { label: "Site Management", key: "management" },
      ],
    },
    "offshore-geological": {
      label: "Offshore Geological Storage",
      capex: [
        { label: "Offshore Platform", key: "platform" },
        { label: "Subsea Wells", key: "wells" },
        { label: "Injection Systems", key: "injection" },
      ],
      opex: [
        { label: "Platform Operations", key: "operations" },
        { label: "Monitoring", key: "monitoring" },
        { label: "Maintenance", key: "maintenance" },
      ],
    },
  },
  utilisation: {
    "eor": {
      label: "Enhanced Oil Recovery (EOR)",
      capex: [
        { label: "CO₂ Processing Equipment", key: "processing" },
        { label: "Injection Infrastructure", key: "injection" },
        { label: "Monitoring Systems", key: "monitoring" },
      ],
      opex: [
        { label: "CO₂ Processing", key: "co2_processing" },
        { label: "Operations", key: "operations" },
        { label: "Monitoring", key: "monitoring" },
      ],
    },
    "mineral-carbonation": {
      label: "Mineral Carbonation",
      capex: [
        { label: "Reactor Systems", key: "reactor" },
        { label: "Material Handling", key: "handling" },
        { label: "Processing Equipment", key: "processing" },
      ],
      opex: [
        { label: "Raw Materials", key: "materials" },
        { label: "Energy Costs", key: "energy" },
        { label: "Labour", key: "labour" },
      ],
    },
    "chemical-synthesis": {
      label: "Chemical Synthesis",
      capex: [
        { label: "Synthesis Reactors", key: "reactors" },
        { label: "Purification Systems", key: "purification" },
        { label: "Storage Facilities", key: "storage" },
      ],
      opex: [
        { label: "Feedstock Costs", key: "feedstock" },
        { label: "Catalysts", key: "catalysts" },
        { label: "Energy & Labour", key: "energy_labour" },
      ],
    },
  },
};

const CostCalculator = () => {
  const [mainCategory, setMainCategory] = useState<MainCategory | null>(null);
  const [subTechnology, setSubTechnology] = useState<string | null>(null);
  const [capexCosts, setCapexCosts] = useState<Record<string, number>>({});
  const [opexCosts, setOpexCosts] = useState<Record<string, number>>({});
  const [interestRate, setInterestRate] = useState<number>(8);
  const [projectLifespan, setProjectLifespan] = useState<number>(25);
  const [annualCO2, setAnnualCO2] = useState<number>(1);
  const [capexOpen, setCapexOpen] = useState(true);
  const [opexOpen, setOpexOpen] = useState(true);

  const handleCategorySelect = (category: MainCategory) => {
    setMainCategory(category);
    setSubTechnology(null);
    setCapexCosts({});
    setOpexCosts({});
  };

  const handleSubTechnologySelect = (subTech: string) => {
    setSubTechnology(subTech);
    setCapexCosts({});
    setOpexCosts({});
  };

  const handleCapexChange = (key: string, value: string) => {
    const numValue = parseFloat(value) || 0;
    setCapexCosts((prev) => ({ ...prev, [key]: numValue }));
  };

  const handleOpexChange = (key: string, value: string) => {
    const numValue = parseFloat(value) || 0;
    setOpexCosts((prev) => ({ ...prev, [key]: numValue }));
  };

  // Calculations
  const totalCapex = Object.values(capexCosts).reduce((sum, val) => sum + val, 0);
  const totalOpex = Object.values(opexCosts).reduce((sum, val) => sum + val, 0);

  const r = interestRate / 100;
  const n = projectLifespan;
  const crf = r > 0 ? (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : 1 / n;
  const annualizedCapital = totalCapex * crf;
  const totalAnnualCost = annualizedCapital + totalOpex;
  const costPerTonCO2 = annualCO2 > 0 ? totalAnnualCost / annualCO2 : 0;

  const formatCurrency = (value: number) => {
    return `$${value.toFixed(2)}M`;
  };

  const formatNumber = (value: number, decimals: number = 2) => {
    return value.toFixed(decimals);
  };

  const currentTechData =
    mainCategory && subTechnology ? subTechnologies[mainCategory][subTechnology] : null;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Calculator className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">CCUS Cost Calculator</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive cost analysis for Carbon Capture, Utilization, and Storage technologies
        </p>
      </div>

      {/* Step 1: Main Category Selection */}
      {!mainCategory && (
        <Card>
          <CardHeader>
            <CardTitle>Step 1: Select Main Category</CardTitle>
            <CardDescription>Choose the primary CCUS category for analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {(Object.keys(subTechnologies) as MainCategory[]).map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="lg"
                  className="h-24 text-lg capitalize hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Sub-Technology Selection */}
      {mainCategory && !subTechnology && (
        <Card>
          <CardHeader>
            <CardTitle>Step 2: Select Sub-Technology</CardTitle>
            <CardDescription>
              Choose a specific technology within {mainCategory}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMainCategory(null)}
              className="mb-4"
            >
              ← Back to Categories
            </Button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(subTechnologies[mainCategory]).map(([key, data]) => (
                <Button
                  key={key}
                  variant="outline"
                  size="lg"
                  className="h-20 text-base hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => handleSubTechnologySelect(key)}
                >
                  {data.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3-5: Detailed Input and Analysis */}
      {mainCategory && subTechnology && currentTechData && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Inputs */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{currentTechData.label}</CardTitle>
                <CardDescription>Enter cost components and project parameters</CardDescription>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSubTechnology(null)}
                  className="mt-2"
                >
                  ← Back to Sub-Technologies
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* CAPEX Section */}
                <Collapsible open={capexOpen} onOpenChange={setCapexOpen}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      <span className="font-semibold">Capital Expenditure (CAPEX)</span>
                      {capexOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-4 mt-4">
                    {currentTechData.capex.map((component) => (
                      <div key={component.key} className="space-y-2">
                        <Label htmlFor={`capex-${component.key}`}>{component.label} (US$ millions)</Label>
                        <Input
                          id={`capex-${component.key}`}
                          type="number"
                          step="0.01"
                          min="0"
                          placeholder="0.00"
                          value={capexCosts[component.key] || ""}
                          onChange={(e) => handleCapexChange(component.key, e.target.value)}
                        />
                      </div>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* OPEX Section */}
                <Collapsible open={opexOpen} onOpenChange={setOpexOpen}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      <span className="font-semibold">Operational Expenditure (OPEX - Annual)</span>
                      {opexOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-4 mt-4">
                    {currentTechData.opex.map((component) => (
                      <div key={component.key} className="space-y-2">
                        <Label htmlFor={`opex-${component.key}`}>{component.label} (US$ millions/year)</Label>
                        <Input
                          id={`opex-${component.key}`}
                          type="number"
                          step="0.01"
                          min="0"
                          placeholder="0.00"
                          value={opexCosts[component.key] || ""}
                          onChange={(e) => handleOpexChange(component.key, e.target.value)}
                        />
                      </div>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* Global Parameters */}
                <div className="space-y-4 pt-4 border-t">
                  <h4 className="font-semibold">Global Project Parameters</h4>
                  <div className="space-y-2">
                    <Label htmlFor="interest-rate">Interest Rate(r) (%)</Label>
                    <Input
                      id="interest-rate"
                      type="number"
                      step="0.1"
                      min="0"
                      value={interestRate}
                      onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lifespan">Project Lifespan(n) (years)</Label>
                    <Input
                      id="lifespan"
                      type="number"
                      step="1"
                      min="1"
                      value={projectLifespan}
                      onChange={(e) => setProjectLifespan(parseInt(e.target.value) || 1)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="annual-co2">Annual CO₂ Captured (MtCO₂/year)</Label>
                    <Input
                      id="annual-co2"
                      type="number"
                      step="0.01"
                      min="0"
                      value={annualCO2}
                      onChange={(e) => setAnnualCO2(parseFloat(e.target.value) || 0)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Economic Analysis */}
          <Card className="h-fit sticky top-4">
            <CardHeader>
              <CardTitle>Economic Analysis</CardTitle>
              <CardDescription>Real-time cost calculations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-sm font-medium text-muted-foreground">
                    Total Capital Expenditure (CAPEX)
                  </span>
                  <span className="text-lg font-semibold">{formatCurrency(totalCapex)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-sm font-medium text-muted-foreground">
                    Total Annual Operating Exp. (OPEX)
                  </span>
                  <span className="text-lg font-semibold">{formatCurrency(totalOpex)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-sm font-medium text-muted-foreground">
                    Annualized Capital Cost
                  </span>
                  <span className="text-lg font-semibold">{formatCurrency(annualizedCapital)}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b-2 border-primary bg-primary/5 px-4 -mx-4 rounded-md">
                  <span className="font-semibold text-foreground">
                    Total Annual Project Cost
                  </span>
                  <span className="text-xl font-bold text-primary">{formatCurrency(totalAnnualCost)}</span>
                </div>
                <div className="flex justify-between items-center py-4 bg-secondary/50 px-4 -mx-4 rounded-md">
                  <span className="font-semibold text-foreground">
                    Cost per Ton of CO₂
                  </span>
                  <span className="text-xl font-bold text-foreground">
                    ${formatNumber(costPerTonCO2, 2)}/ton
                  </span>
                </div>
              </div>

              <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong>CRF:</strong> {formatNumber(crf, 6)}
                </p>
                <p>
                  <strong>Formula:</strong> CRF = (r × (1 + r)ⁿ) / ((1 + r)ⁿ - 1)
                </p>
                <p>
                  <strong>Annualized Capital Cost </strong> = CAPEX × CRF
                </p>
              </div>

              <Button className="w-full" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Export Analysis Report
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CostCalculator;