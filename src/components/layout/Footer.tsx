import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C₂</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">India Net Zero 2070</h3>
                <p className="text-xs text-muted-foreground">CCUS Platform</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Accelerating India's carbon neutrality through advanced CCUS technologies and data-driven insights.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">Dashboard</a></li>
              <li><a href="/technologies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Technologies</a></li>
              <li><a href="/calculator" className="text-sm text-muted-foreground hover:text-primary transition-colors">Calculator</a></li>
              {/* <li><a href="/simulator" className="text-sm text-muted-foreground hover:text-primary transition-colors">Simulator</a></li> */}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/roadmap" className="text-sm text-muted-foreground hover:text-primary transition-colors">Net Zero Roadmap</a></li>
              <li><a href="/collaboration" className="text-sm text-muted-foreground hover:text-primary transition-colors">Collaboration Hub</a></li>
              <li><a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About CCUS</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex space-x-3 mb-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Collaborating for a sustainable future through innovative carbon management solutions.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 India Net Zero 2070 CCUS Platform. Built for climate action.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">API Docs</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;