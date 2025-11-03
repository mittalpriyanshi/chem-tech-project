import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { CheckCircle, ArrowRight, Beaker, Cog, BarChart3, Wrench } from "lucide-react";

const workflowSteps = [
  {
    id: 1,
    title: "Process Design & Simulation",
    description: "Design capture systems using process simulation software (Aspen Plus, HYSYS)",
    icon: Beaker,
    tasks: [
      "Thermodynamic modeling of CO₂ capture processes",
      "Heat and mass balance calculations",
      "Equipment sizing and specification",
      "Process optimization studies"
    ],
    duration: "2-4 months",
    deliverables: "Process Flow Diagrams (PFD), Heat & Material Balances"
  },
  {
    id: 2,
    title: "Technology Selection",
    description: "Evaluate and select appropriate CCUS technologies based on source characteristics",
    icon: Cog,
    tasks: [
      "Assess CO₂ concentration and flow rates",
      "Compare amine scrubbing vs. oxy-fuel vs. DAC",
      "Economic feasibility analysis",
      "Environmental impact assessment"
    ],
    duration: "1-2 months",
    deliverables: "Technology Selection Report, Cost-Benefit Analysis"
  },
  {
    id: 3,
    title: "Pilot Plant Development",
    description: "Design and operate pilot-scale systems for technology validation",
    icon: Wrench,
    tasks: [
      "Scale-down design from commercial targets",
      "Instrumentation and control system design",
      "Operating procedure development",
      "Performance testing and optimization"
    ],
    duration: "6-12 months",
    deliverables: "Pilot Plant Design, Operating Manual, Test Results"
  },
  {
    id: 4,
    title: "Scale-up & Commercialization",
    description: "Scale up proven technologies to commercial demonstration scale",
    icon: BarChart3,
    tasks: [
      "Commercial plant design and engineering",
      "Risk assessment and safety studies",
      "Economic optimization and financing",
      "Regulatory compliance and permitting"
    ],
    duration: "12-24 months",
    deliverables: "Commercial Plant Design, Safety Studies, Economic Model"
  }
];

const ChemicalEngineersWorkflow = () => {
  return (
    <section className="mb-16">
     
      <div className="grid gap-6 md:gap-8">
        {workflowSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Card key={step.id} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        Step {step.id}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {step.duration}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                    <CardDescription className="text-base">
                      {step.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Tasks</h4>
                    <ul className="space-y-2">
                      {step.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Deliverables</h4>
                    <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
                      {step.deliverables}
                    </p>
                  </div>
                </div>
              </CardContent>

              {index < workflowSteps.length - 1 && (
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-primary rotate-90" />
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default ChemicalEngineersWorkflow;