import { Card } from "../ui/card";
import { TrendingUp, TrendingDown, Factory, Zap, Building, Truck } from "lucide-react";

const EmissionMetrics = () => {
  const metrics = [
    {
      title: "Total CO₂ Emissions",
      value: "2.88 Gt",
      change: "+2.4%",
      trend: "up",
      icon: TrendingUp,
      color: "climate-red"
    },
    {
      title: "Power Sector",
      value: "1.02 Gt",
      change: "-1.2%", 
      trend: "down",
      icon: Zap,
      color: "climate-blue"
    },
    {
      title: "Industry",
      value: "0.89 Gt",
      change: "+3.1%",
      trend: "up", 
      icon: Factory,
      color: "warning"
    },
    {
      title: "Buildings",
      value: "0.34 Gt",
      change: "+1.8%",
      trend: "up",
      icon: Building,
      color: "climate-blue"
    },
    {
      title: "Transport",
      value: "0.32 Gt",
      change: "+4.2%",
      trend: "up",
      icon: Truck,
      color: "warning"
    },
    {
      title: "CCUS Captured",
      value: "12.4 Mt",
      change: "+156%",
      trend: "down",
      icon: TrendingDown,
      color: "climate-green"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const isPositive = metric.trend === "down" || metric.title.includes("CCUS");
        
        return (
          <Card 
            key={metric.title} 
            className="metric-card animate-fade-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {metric.title}
                </p>
                <div className="flex items-baseline space-x-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {metric.value}
                  </h3>
                  <span 
                    className={`text-sm font-medium ${
                      isPositive ? 'text-success' : 'text-destructive'
                    }`}
                  >
                    {metric.change}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  vs previous year
                </p>
              </div>
              
              <div className={`p-3 rounded-xl bg-${metric.color}/10`}>
                <Icon className={`w-5 h-5 text-${metric.color}`} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default EmissionMetrics;