import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight, BarChart3, Calculator, MapPin, BookOpen } from "lucide-react";
import heroImage from "../../assets/hero-ccus-facility.jpg";

const HeroSection = () => {
  const [co2Counter, setCo2Counter] = useState(2953034100); // Starting emissions in tons

  // Simulate real-time CO2 emissions counter
  useEffect(() => {
    const interval = setInterval(() => {
      setCo2Counter(prev => prev + 1.26); // Approximate tons per second for India
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const quickActions = [
    {
      title: "Emissions Dashboard",
      description: "Real-time sector analysis",
      icon: BarChart3,
      href: "/dashboard",
      color: "primary"
    },
    {
      title: "CCUS Technologies",
      description: "Compare solutions",
      icon: BookOpen,
      href: "/technologies", 
      color: "accent"
    },
    {
      title: "Cost Calculator",
      description: "Project economics",
      icon: Calculator,
      href: "/calculator",
      color: "primary"
    },
    {
      title: "Net Zero Roadmap",
      description: "2070 pathway",
      icon: MapPin,
      href: "/roadmap",
      color: "accent"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="CCUS Industrial Facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 mt-6">
            India's{" "}
            <span className="text-gradient">Net Zero 2070</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-8">
            CCUS & Chemical Engineering
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Advanced decision-support platform for Carbon Capture, Utilization & Storage. 
            Accelerating India's path to net-zero emissions through data-driven insights and engineering excellence.
          </p>

          {/* Live CO2 Counter */}
          <div className="dashboard-card p-8 mb-12 max-w-md mx-auto">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">
              India's Annual CO₂ Emissions
            </h3>
            <div className="text-3xl md:text-4xl font-bold text-climate-red animate-counter">
              {formatNumber(co2Counter)}
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              tons CO₂ equivalent
            </p>
            <div className="w-full h-1 bg-muted rounded-full mt-4">
              <div className="h-1 bg-gradient-primary rounded-full animate-pulse" style={{width: '76%'}}></div>
            </div>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Button
                  key={action.title}
                  variant="outline"
                  size="lg"
                  className="dashboard-card p-6 h-auto flex-col space-y-3 hover-lift group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`p-3 rounded-xl ${action.color === 'primary' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground mb-1">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </Button>
              );
            })}
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-gradient-primary text-white hover:shadow-elevated transition-all duration-300 px-8 py-3 text-lg font-semibold group animate-pulse-glow"
          >
            Explore CCUS Solutions
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;