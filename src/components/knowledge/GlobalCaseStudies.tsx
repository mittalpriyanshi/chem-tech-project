import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
// import { Progress } from "../ui/progress";
import { MapPin, Calendar, TrendingUp, DollarSign, Leaf, Building } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    name: "Sleipner Project",
    location: "North Sea, Norway",
    operator: "Equinor",
    startYear: 1996,
    status: "Operational",
    technology: "Offshore CO₂ Storage",
    capacity: "1.0 Mt CO₂/year",
    totalStored: "20+ Mt CO₂",
    costPerTon: "$15-25/tCO₂",
    successRate: 98,
    description: "World's first commercial CO₂ storage project, injecting CO₂ from natural gas processing into the Utsira Formation.",
    keyLearnings: [
      "Demonstrated long-term geological storage safety",
      "Established monitoring and verification protocols",
      "Proved economic viability of offshore storage",
      "Set international standards for CO₂ storage"
    ],
    applicabilityIndia: "High - India has significant offshore storage potential in Krishna-Godavari and Mumbai basins",
    challenges: [
      "Initial high capital investment",
      "Regulatory framework development",
      "Public acceptance and safety concerns"
    ]
  },
  {
    id: 2,
    name: "Boundary Dam",
    location: "Saskatchewan, Canada",
    operator: "SaskPower",
    startYear: 2014,
    status: "Operational",
    technology: "Post-combustion Capture",
    capacity: "1.0 Mt CO₂/year",
    totalStored: "4+ Mt CO₂",
    costPerTon: "$60-80/tCO₂",
    successRate: 85,
    description: "World's first commercial-scale coal-fired power plant with post-combustion CO₂ capture using amine scrubbing.",
    keyLearnings: [
      "Post-combustion capture is technically feasible",
      "Importance of solvent management and optimization",
      "Integration challenges with existing power plants",
      "Need for continuous process improvements"
    ],
    applicabilityIndia: "Very High - Directly applicable to India's large coal fleet",
    challenges: [
      "High energy penalty (25-30%)",
      "Solvent degradation and makeup costs",
      "Heat integration complexities"
    ]
  },
  {
    id: 3,
    name: "Petra Nova",
    location: "Texas, USA",
    operator: "NRG Energy & JX Nippon",
    startYear: 2017,
    status: "Suspended (2020)",
    technology: "Post-combustion Capture + EOR",
    capacity: "1.4 Mt CO₂/year",
    totalStored: "3.7 Mt CO₂",
    costPerTon: "$65-85/tCO₂",
    successRate: 75,
    description: "Large-scale CO₂ capture from coal plant with enhanced oil recovery, suspended due to low oil prices.",
    keyLearnings: [
      "EOR can provide revenue stream for CCUS",
      "Economic viability depends on oil prices",
      "Operational flexibility is crucial",
      "Importance of long-term policy support"
    ],
    applicabilityIndia: "Medium - Limited EOR potential, but capture technology applicable",
    challenges: [
      "Economic dependence on oil prices",
      "Complex logistics for CO₂ transport",
      "Policy and regulatory uncertainties"
    ]
  }
];

const GlobalCaseStudies = () => {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Global CCUS Case Studies
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn from pioneering CCUS projects worldwide and their applicability to India
        </p>
      </div>

      <div className="grid gap-8 lg:gap-10">
        {caseStudies.map((study) => (
          <Card key={study.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-subtle pb-6">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={study.status === 'Operational' ? 'default' : 'secondary'}>
                      {study.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      Since {study.startYear}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-2xl mb-2">{study.name}</CardTitle>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {study.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      {study.operator}
                    </div>
                  </div>
                  
                  <CardDescription className="text-base">
                    {study.description}
                  </CardDescription>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {study.successRate}%
                    </div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-muted/50 p-4 rounded-lg text-center">
                  <TrendingUp className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-foreground">{study.capacity}</div>
                  <div className="text-xs text-muted-foreground">Annual Capacity</div>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg text-center">
                  <Leaf className="w-5 h-5 text-green-500 mx-auto mb-2" />
                  <div className="font-semibold text-foreground">{study.totalStored}</div>
                  <div className="text-xs text-muted-foreground">Total Stored</div>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg text-center">
                  <DollarSign className="w-5 h-5 text-orange-500 mx-auto mb-2" />
                  <div className="font-semibold text-foreground">{study.costPerTon}</div>
                  <div className="text-xs text-muted-foreground">Cost per Ton</div>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg text-center">
                  <div className="font-semibold text-foreground mb-1">{study.technology}</div>
                  <div className="text-xs text-muted-foreground">Technology</div>
                </div>
              </div>

              {/* Detailed Analysis */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Key Learnings</h4>
                  <ul className="space-y-2">
                    {study.keyLearnings.map((learning, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Challenges Faced</h4>
                  <ul className="space-y-2 mb-6">
                    {study.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-gradient-subtle p-4 rounded-lg">
                    <h5 className="font-medium text-foreground mb-2">Applicability to India</h5>
                    <p className="text-sm text-muted-foreground">{study.applicabilityIndia}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 bg-gradient-subtle p-8 rounded-xl">
        <h3 className="text-xl font-bold text-foreground mb-4 text-center">
          Lessons for India's CCUS Development
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Years of proven storage experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-500 mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Million tons CO₂ stored safely</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-500 mb-2">$15-85</div>
            <div className="text-sm text-muted-foreground">Cost range per ton CO₂</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalCaseStudies;