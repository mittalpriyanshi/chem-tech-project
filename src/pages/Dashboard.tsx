import EmissionMetrics from "@/components/dashboard/EmissionMetrics";
import { Card } from "@/components/ui/card";
import { BarChart3, Filter, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectorChart from "@/components/dashboard/SectorChart";
import RegionalHotspotsChart from "@/components/dashboard/RegionalHotspotsChart";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <BarChart3 className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-gradient">Emissions Dashboard</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Real-time monitoring of India's CO₂ emissions by sector, region, and source
          </p>
        </div>

        {/* Metrics Grid */}
        <EmissionMetrics />

        {/* Charts and Visualizations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Sector Breakdown Chart */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-foreground">Sector-wise Emissions</h3>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
            <SectorChart />
          </div>

          {/* Regional Hotspots Chart */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-foreground">Regional Hotspots</h3>
              <Button variant="outline" size="sm">
                <MapPin className="w-4 h-4 mr-2" />
                States
              </Button>
            </div>
            <RegionalHotspotsChart />
          </div>
        </div>

        {/* Additional Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="dashboard-card p-6">
            <h4 className="font-semibold text-foreground mb-3">Top Emitting States</h4>
            <div className="space-y-3">
              {[
                { state: "Gujarat", value: "285 Mt", change: "+2.1%" },
                { state: "Maharashtra", value: "267 Mt", change: "+1.8%" },
                { state: "Odisha", value: "234 Mt", change: "+3.4%" },
                { state: "Jharkhand", value: "198 Mt", change: "+2.7%" }
              ].map((item) => (
                <div key={item.state} className="flex justify-between items-center">
                  <span className="text-sm text-foreground">{item.state}</span>
                  <div className="text-right">
                    <span className="text-sm font-medium text-foreground">{item.value}</span>
                    <span className="text-xs text-success ml-2">{item.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="dashboard-card p-6">
            <h4 className="font-semibold text-foreground mb-3">Key Industries</h4>
            <div className="space-y-3">
              {[
                { industry: "Thermal Power", value: "1,024 Mt", share: "36%" },
                { industry: "Steel & Iron", value: "312 Mt", share: "11%" },
                { industry: "Cement", value: "289 Mt", share: "10%" },
                { industry: "Chemicals", value: "187 Mt", share: "7%" }
              ].map((item) => (
                <div key={item.industry} className="flex justify-between items-center">
                  <span className="text-sm text-foreground">{item.industry}</span>
                  <div className="text-right">
                    <span className="text-sm font-medium text-foreground">{item.value}</span>
                    <span className="text-xs text-muted-foreground ml-2">({item.share})</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="dashboard-card p-6">
            <h4 className="font-semibold text-foreground mb-3">CCUS Progress</h4>
            <div className="space-y-3">
              {[
                { project: "Planned Capacity", value: "50 Mt/yr", status: "Planning" },
                { project: "Under Construction", value: "8.2 Mt/yr", status: "Active" },
                { project: "Operational", value: "2.1 Mt/yr", status: "Running" },
                { project: "R&D Projects", value: "15", status: "Research" }
              ].map((item) => (
                <div key={item.project} className="flex justify-between items-center">
                  <span className="text-sm text-foreground">{item.project}</span>
                  <div className="text-right">
                    <span className="text-sm font-medium text-climate-green">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;