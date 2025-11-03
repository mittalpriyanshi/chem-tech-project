import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Activity, Droplet, Mountain } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface Site {
  name: string;
  state: string;
  type: "onshore" | "offshore";
  capacity: string;
  suitability: number;
  distance: string;
  geology: string;
  status: "available" | "under-study" | "reserved";
}

const SiteSelection = () => {
  const sites: Site[] = [
    {
      name: "Cambay Basin",
      state: "Gujarat",
      type: "onshore",
      capacity: "5000 Mt",
      suitability: 92,
      distance: "45 km from industrial cluster",
      geology: "Sedimentary saline aquifer",
      status: "available"
    },
    {
      name: "Krishna-Godavari Basin",
      state: "Andhra Pradesh",
      type: "offshore",
      capacity: "8000 Mt",
      suitability: 88,
      distance: "120 km offshore",
      geology: "Depleted oil & gas reservoir",
      status: "under-study"
    },
    {
      name: "Mumbai High Field",
      state: "Maharashtra",
      type: "offshore",
      capacity: "3500 Mt",
      suitability: 85,
      distance: "160 km offshore",
      geology: "Depleted oil reservoir",
      status: "reserved"
    },
    {
      name: "Vindhyan Basin",
      state: "Madhya Pradesh",
      type: "onshore",
      capacity: "2000 Mt",
      suitability: 78,
      distance: "80 km from power plants",
      geology: "Deep saline formation",
      status: "available"
    },
    {
      name: "Deccan Volcanic Province",
      state: "Maharashtra",
      type: "onshore",
      capacity: "1500 Mt",
      suitability: 72,
      distance: "55 km from cement plants",
      geology: "Basalt formations",
      status: "under-study"
    }
  ];

  const getStatusColor = (status: Site["status"]) => {
    switch (status) {
      case "available": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "under-study": return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "reserved": return "bg-red-500/10 text-red-500 border-red-500/20";
    }
  };

  const getTypeIcon = (type: Site["type"]) => {
    return type === "offshore" ? Droplet : Mountain;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Data-Driven Site Selection
          </CardTitle>
          <CardDescription>
            Optimal CCUS storage sites across India based on geological data, proximity, and capacity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {sites.map((site, idx) => {
              const TypeIcon = getTypeIcon(site.type);
              return (
                <Card key={idx} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <TypeIcon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{site.name}</h3>
                            <p className="text-sm text-muted-foreground">{site.state}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className={getStatusColor(site.status)}>
                          {site.status}
                        </Badge>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Storage Capacity</p>
                          <p className="font-semibold">{site.capacity}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Distance</p>
                          <p className="font-semibold">{site.distance}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Geology Type</p>
                          <p className="font-semibold">{site.geology}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Site Type</p>
                          <Badge variant="secondary">{site.type}</Badge>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center gap-2">
                            <Activity className="w-4 h-4" />
                            Suitability Score
                          </span>
                          <span className="font-bold text-primary">{site.suitability}%</span>
                        </div>
                        <Progress value={site.suitability} className="h-2" />
                      </div>
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

export default SiteSelection;
