import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Building2, GraduationCap, Globe } from "lucide-react";

interface Stakeholder {
  name: string;
  type: "government" | "industry" | "research" | "community";
  role: string;
  responsibilities: string[];
}

const StakeholderMapping = () => {
  const stakeholders: Stakeholder[] = [
    {
      name: "Ministry of Environment, Forest and Climate Change",
      type: "government",
      role: "Regulatory Authority",
      responsibilities: ["Environmental clearances", "Policy framework", "Compliance monitoring"]
    },
    {
      name: "Ministry of Petroleum & Natural Gas",
      type: "government",
      role: "Sector Regulator",
      responsibilities: ["Storage site approvals", "Industry coordination", "Safety standards"]
    },
    {
      name: "Indian Oil Corporation",
      type: "industry",
      role: "Technology Implementer",
      responsibilities: ["Project execution", "Infrastructure development", "Operations"]
    },
    {
      name: "NTPC Limited",
      type: "industry",
      role: "Capture Facility Operator",
      responsibilities: ["CO₂ capture operations", "Power plant integration", "Emissions reporting"]
    },
    {
      name: "IIT Bombay - CCUS Research Center",
      type: "research",
      role: "Technology Developer",
      responsibilities: ["R&D activities", "Innovation", "Technical consulting"]
    },
    {
      name: "CSIR-National Geophysical Research Institute",
      type: "research",
      role: "Geological Assessment",
      responsibilities: ["Site characterization", "Monitoring protocols", "Risk assessment"]
    },
    {
      name: "Local Communities & NGOs",
      type: "community",
      role: "Social License",
      responsibilities: ["Public consultations", "Feedback provision", "Local engagement"]
    }
  ];

  const getTypeIcon = (type: Stakeholder["type"]) => {
    switch (type) {
      case "government": return Building2;
      case "industry": return Building2;
      case "research": return GraduationCap;
      case "community": return Users;
    }
  };

  const getTypeColor = (type: Stakeholder["type"]) => {
    switch (type) {
      case "government": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "industry": return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "research": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "community": return "bg-orange-500/10 text-orange-500 border-orange-500/20";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Dynamic Stakeholder Ecosystem
          </CardTitle>
          <CardDescription>
            Visual mapping of agencies, partners, and responsibilities across the CCUS value chain
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {stakeholders.map((stakeholder, idx) => {
              const Icon = getTypeIcon(stakeholder.type);
              return (
                <Card key={idx} className="border-2 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{stakeholder.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{stakeholder.role}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className={getTypeColor(stakeholder.type)}>
                        {stakeholder.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Key Responsibilities:</p>
                      <ul className="space-y-1">
                        {stakeholder.responsibilities.map((resp, ridx) => (
                          <li key={ridx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StakeholderMapping;
