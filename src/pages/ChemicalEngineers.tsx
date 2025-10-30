import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Beaker, TrendingUp, Leaf, ArrowRight, Zap, Factory, FlaskConical } from "lucide-react";

const ChemicalEngineers = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4" variant="secondary">
              <Beaker className="w-3 h-3 mr-1" />
              Engineering Net Zero
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Role of Chemical Engineers in India's Net Zero 2070
            </h1>
            <p className="text-xl text-muted-foreground">
              Chemical engineers are pivotal in designing, optimizing, and scaling carbon capture technologies 
              that will help India achieve its ambitious climate goals.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview */}
        <section className="mb-16">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Factory className="w-6 h-6 text-primary" />
                Overview: Engineering the Carbon Capture Future
              </CardTitle>
              <CardDescription className="text-base">
                Chemical engineers bridge the gap between laboratory innovation and industrial-scale implementation
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-muted/50 p-6 rounded-lg">
                  <FlaskConical className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Developing novel solvents, catalysts, and process configurations for efficient CO₂ capture
                  </p>
                </div>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Optimization</h3>
                  <p className="text-sm text-muted-foreground">
                    Maximizing capture efficiency while minimizing energy consumption and operational costs
                  </p>
                </div>
                <div className="bg-muted/50 p-6 rounded-lg">
                  <Leaf className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Sustainability</h3>
                  <p className="text-sm text-muted-foreground">
                    Ensuring lifecycle sustainability through comprehensive environmental impact analysis
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Content Tabs */}
        <Tabs defaultValue="process" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="process">Process Design</TabsTrigger>
            <TabsTrigger value="scaleup">Scale-up & Optimization</TabsTrigger>
            <TabsTrigger value="lifecycle">Lifecycle Analysis</TabsTrigger>
          </TabsList>

          {/* Process Design Tab */}
          <TabsContent value="process" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Process Design & Engineering</CardTitle>
                <CardDescription>
                  Designing efficient carbon capture systems through thermodynamic modeling and reactor engineering
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Process Flow Diagram */}
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4 text-foreground">Typical Amine-Based CO₂ Capture Process Flow</h3>
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                      {/* Flue Gas Input */}
                      <div className="text-center">
                        <div className="bg-red-500/10 border-2 border-red-500 rounded-lg p-4">
                          <Zap className="w-8 h-8 mx-auto mb-2 text-red-500" />
                          <p className="text-sm font-semibold">Flue Gas</p>
                          <p className="text-xs text-muted-foreground">12-15% CO₂</p>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <ArrowRight className="w-6 h-6 text-primary" />
                      </div>

                      {/* Absorber */}
                      <div className="text-center">
                        <div className="bg-blue-500/10 border-2 border-blue-500 rounded-lg p-4">
                          <Beaker className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                          <p className="text-sm font-semibold">Absorber</p>
                          <p className="text-xs text-muted-foreground">30-40°C</p>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <ArrowRight className="w-6 h-6 text-primary" />
                      </div>

                      {/* Stripper */}
                      <div className="text-center">
                        <div className="bg-orange-500/10 border-2 border-orange-500 rounded-lg p-4">
                          <Factory className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                          <p className="text-sm font-semibold">Stripper</p>
                          <p className="text-xs text-muted-foreground">100-120°C</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                      <div className="bg-green-500/10 border-2 border-green-500 rounded-lg p-4 max-w-xs">
                        <Leaf className="w-8 h-8 mx-auto mb-2 text-green-500" />
                        <p className="text-sm font-semibold text-center">Pure CO₂</p>
                        <p className="text-xs text-muted-foreground text-center">99%+ purity</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Design Parameters */}
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-lg">Capture Efficiency</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Target Capture Rate</span>
                        <Badge variant="secondary">85-95%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Solvent Loading</span>
                        <Badge variant="secondary">0.4-0.5 mol/mol</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">L/G Ratio</span>
                        <Badge variant="secondary">2-4 kg/kg</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-lg">Solvent Selection</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">MEA (Monoethanolamine)</p>
                        <p className="text-xs text-muted-foreground">Fast kinetics, high degradation</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">MDEA (Methyldiethanolamine)</p>
                        <p className="text-xs text-muted-foreground">Lower energy, selective absorption</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Piperazine Blends</p>
                        <p className="text-xs text-muted-foreground">Enhanced performance, reduced cost</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-lg">Reactor Design</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Packed Column Design</p>
                        <p className="text-xs text-muted-foreground">Structured vs. random packing</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Mass Transfer Enhancement</p>
                        <p className="text-xs text-muted-foreground">Surface area optimization</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Heat Integration</p>
                        <p className="text-xs text-muted-foreground">Lean-rich heat exchanger</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Scale-up & Optimization Tab */}
          <TabsContent value="scaleup" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Scale-up & Optimization</CardTitle>
                <CardDescription>
                  Transitioning from laboratory to industrial scale while maintaining efficiency and reducing costs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Scale-up Journey */}
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
                  
                  <div className="space-y-8">
                    {/* Lab Scale */}
                    <div className="relative pl-20">
                      <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-primary border-4 border-background"></div>
                      <Card className="border-primary/20">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Laboratory Scale (1-10 kg CO₂/day)</CardTitle>
                            <Badge>Research Phase</Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Solvent screening and kinetic studies</li>
                            <li>• Proof-of-concept testing</li>
                            <li>• Initial thermodynamic modeling</li>
                            <li>• Cost: ₹50 lakhs - ₹2 crores</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Pilot Scale */}
                    <div className="relative pl-20">
                      <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-primary border-4 border-background"></div>
                      <Card className="border-primary/20">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Pilot Scale (100-1,000 kg CO₂/day)</CardTitle>
                            <Badge>Demonstration Phase</Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Process validation and optimization</li>
                            <li>• Equipment performance testing</li>
                            <li>• Operational troubleshooting</li>
                            <li>• Cost: ₹10-50 crores</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Commercial Scale */}
                    <div className="relative pl-20">
                      <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-primary border-4 border-background"></div>
                      <Card className="border-primary/20">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Commercial Scale (1,000+ tonnes CO₂/day)</CardTitle>
                            <Badge>Deployment Phase</Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Full-scale industrial deployment</li>
                            <li>• Continuous process optimization</li>
                            <li>• Economic viability demonstration</li>
                            <li>• Cost: ₹500+ crores</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* Optimization Targets */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Cost Reduction Strategies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <p className="font-medium text-sm">Energy Integration</p>
                            <p className="text-xs text-muted-foreground">Waste heat recovery can reduce energy penalty from 30% to 20%</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <p className="font-medium text-sm">Advanced Solvents</p>
                            <p className="text-xs text-muted-foreground">Novel amine blends reduce regeneration energy by 20-30%</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <p className="font-medium text-sm">Process Intensification</p>
                            <p className="text-xs text-muted-foreground">Compact equipment design reduces CAPEX by 15-25%</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Efficiency Enhancement</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <p className="font-medium text-sm">Real-time Monitoring</p>
                            <p className="text-xs text-muted-foreground">AI-based process control improves capture rate by 5-10%</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <p className="font-medium text-sm">Solvent Management</p>
                            <p className="text-xs text-muted-foreground">Optimized degradation control extends solvent life by 40%</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <p className="font-medium text-sm">Modular Design</p>
                            <p className="text-xs text-muted-foreground">Flexible capacity scaling reduces downtime and improves ROI</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Lifecycle Analysis Tab */}
          <TabsContent value="lifecycle" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Lifecycle Analysis & Sustainability</CardTitle>
                <CardDescription>
                  Comprehensive evaluation of environmental impact, energy consumption, and overall carbon footprint
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Energy Penalty Analysis */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-orange-500/20">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Zap className="w-5 h-5 text-orange-500" />
                        Energy Penalty Assessment
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="text-sm font-medium mb-2">Baseline Power Plant (no capture)</p>
                          <p className="text-2xl font-bold text-foreground">100%</p>
                          <p className="text-xs text-muted-foreground">Net electrical output</p>
                        </div>
                        <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/20">
                          <p className="text-sm font-medium mb-2">With MEA Capture (1st Gen)</p>
                          <p className="text-2xl font-bold text-foreground">70-75%</p>
                          <p className="text-xs text-muted-foreground">25-30% energy penalty</p>
                        </div>
                        <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                          <p className="text-sm font-medium mb-2">Advanced Solvents (2nd Gen)</p>
                          <p className="text-2xl font-bold text-foreground">80-85%</p>
                          <p className="text-xs text-muted-foreground">15-20% energy penalty</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-500/20">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Leaf className="w-5 h-5 text-green-500" />
                        Emissions Offset Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium mb-2">Coal Power Plant (500 MW)</p>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Without CCUS</span>
                              <span className="font-semibold">3.5 MT CO₂/year</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">With 90% CCUS</span>
                              <span className="font-semibold text-green-500">0.35 MT CO₂/year</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Net Reduction</span>
                              <span className="font-bold text-green-500">3.15 MT CO₂/year</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20 mt-4">
                          <p className="text-xs text-muted-foreground mb-1">Equivalent to</p>
                          <p className="text-sm font-semibold">Removing 700,000 cars from roads annually</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Full Lifecycle Stages */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Complete Lifecycle Stages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="bg-muted/30 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Factory className="w-6 h-6 text-blue-500" />
                        </div>
                        <h4 className="font-semibold text-sm mb-2">Construction</h4>
                        <p className="text-xs text-muted-foreground">Material extraction, manufacturing, installation</p>
                      </div>
                      
                      <div className="bg-muted/30 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Zap className="w-6 h-6 text-orange-500" />
                        </div>
                        <h4 className="font-semibold text-sm mb-2">Operation</h4>
                        <p className="text-xs text-muted-foreground">Energy consumption, solvent makeup, emissions</p>
                      </div>
                      
                      <div className="bg-muted/30 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <TrendingUp className="w-6 h-6 text-purple-500" />
                        </div>
                        <h4 className="font-semibold text-sm mb-2">Maintenance</h4>
                        <p className="text-xs text-muted-foreground">Equipment replacement, solvent disposal, repairs</p>
                      </div>
                      
                      <div className="bg-muted/30 p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Leaf className="w-6 h-6 text-green-500" />
                        </div>
                        <h4 className="font-semibold text-sm mb-2">Decommissioning</h4>
                        <p className="text-xs text-muted-foreground">Dismantling, recycling, site restoration</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Sustainability Metrics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Key Sustainability Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Carbon Capture Ratio</p>
                        <div className="flex items-baseline gap-2">
                          <p className="text-3xl font-bold text-primary">8:1</p>
                          <p className="text-xs text-muted-foreground">Captured vs. Emitted</p>
                        </div>
                        <p className="text-xs text-muted-foreground">For every 1 tonne of CO₂ emitted in operation, 8 tonnes are captured</p>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Water Consumption</p>
                        <div className="flex items-baseline gap-2">
                          <p className="text-3xl font-bold text-primary">2-3</p>
                          <p className="text-xs text-muted-foreground">m³/tonne CO₂</p>
                        </div>
                        <p className="text-xs text-muted-foreground">Cooling water and process requirements per tonne captured</p>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Land Footprint</p>
                        <div className="flex items-baseline gap-2">
                          <p className="text-3xl font-bold text-primary">0.5-1</p>
                          <p className="text-xs text-muted-foreground">hectare/MW</p>
                        </div>
                        <p className="text-xs text-muted-foreground">Additional land requirement for CCUS infrastructure</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ChemicalEngineers;
