import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { DollarSign, TrendingUp, AlertTriangle, PiggyBank } from "lucide-react";

const FinancialDashboard = () => {
  const [capex, setCapex] = useState([500]);
  const [opex, setOpex] = useState([50]);
  const [carbonPrice, setCarbonPrice] = useState([30]);
  const [capacity, setCapacity] = useState([1]);

  const calculateROI = () => {
    const totalCapex = capex[0];
    const annualOpex = opex[0];
    const annualRevenue = capacity[0] * carbonPrice[0] * 1000000;
    const annualProfit = annualRevenue - annualOpex * 1000000;
    const roi = ((annualProfit * 10 - totalCapex * 1000000) / (totalCapex * 1000000)) * 100;
    return roi.toFixed(1);
  };

  const calculatePayback = () => {
    const totalCapex = capex[0] * 1000000;
    const annualRevenue = capacity[0] * carbonPrice[0] * 1000000;
    const annualOpex = opex[0] * 1000000;
    const annualCashFlow = annualRevenue - annualOpex;
    if (annualCashFlow <= 0) return "N/A";
    return (totalCapex / annualCashFlow).toFixed(1);
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Total CAPEX
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${capex[0]}M</div>
            <p className="text-xs text-muted-foreground mt-1">Capital Investment</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <PiggyBank className="w-4 h-4" />
              Annual OPEX
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${opex[0]}M/yr</div>
            <p className="text-xs text-muted-foreground mt-1">Operating Costs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              10-Year ROI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">{calculateROI()}%</div>
            <p className="text-xs text-muted-foreground mt-1">Return on Investment</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Payback Period
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{calculatePayback()} yrs</div>
            <p className="text-xs text-muted-foreground mt-1">Break-even Time</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cost Modeling & Sensitivity Analysis</CardTitle>
          <CardDescription>
            Adjust parameters to model different financial scenarios and risk profiles
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Capital Expenditure (CAPEX)</label>
              <span className="text-sm font-bold">${capex[0]}M</span>
            </div>
            <Slider
              value={capex}
              onValueChange={setCapex}
              min={100}
              max={2000}
              step={50}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">Total upfront investment required</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Annual Operating Costs (OPEX)</label>
              <span className="text-sm font-bold">${opex[0]}M/yr</span>
            </div>
            <Slider
              value={opex}
              onValueChange={setOpex}
              min={10}
              max={200}
              step={5}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">Yearly operational expenses</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Carbon Credit Price</label>
              <span className="text-sm font-bold">${carbonPrice[0]}/tCO₂</span>
            </div>
            <Slider
              value={carbonPrice}
              onValueChange={setCarbonPrice}
              min={10}
              max={100}
              step={5}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">Market price per ton of CO₂</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Annual CO₂ Capacity</label>
              <span className="text-sm font-bold">{capacity[0]} Mt/yr</span>
            </div>
            <Slider
              value={capacity}
              onValueChange={setCapacity}
              min={0.1}
              max={5}
              step={0.1}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">Million tonnes captured per year</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-base">Financial Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total Investment</span>
            <span className="font-semibold">${capex[0]}M</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Annual Revenue Potential</span>
            <span className="font-semibold">${(capacity[0] * carbonPrice[0]).toFixed(1)}M/yr</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Net Annual Profit</span>
            <span className="font-semibold">${(capacity[0] * carbonPrice[0] - opex[0]).toFixed(1)}M/yr</span>
          </div>
          <div className="flex justify-between pt-2 border-t">
            <span className="text-muted-foreground">Investment Risk Level</span>
            <span className="font-semibold text-orange-500">
              {parseFloat(calculateROI()) > 50 ? "Low" : parseFloat(calculateROI()) > 20 ? "Medium" : "High"}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialDashboard;
