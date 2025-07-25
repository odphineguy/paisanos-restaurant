import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      {/* Promotional Banner */}
      <div className="w-full bg-accent text-accent-foreground text-center py-2 text-sm font-medium">
        🌮 Free delivery on orders over $35 within Phoenix! 🌮
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">P</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Paisano's</h1>
              <p className="text-sm text-muted-foreground">Authentic Mexican Kitchen</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-foreground hover:text-primary font-medium transition-colors">
              Menu
            </a>
            <a href="#about" className="text-foreground hover:text-primary font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary font-medium transition-colors">
              Contact
            </a>
            <a href="#gift-cards" className="text-foreground hover:text-primary font-medium transition-colors">
              Gift Cards
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hidden sm:block">
              Sign In
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Order Online
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;