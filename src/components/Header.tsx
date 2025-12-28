import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* Promotional Banner - hidden when scrolled */}
      <div className={`w-full bg-accent text-accent-foreground text-center py-2 text-sm font-medium transition-all duration-300 ${isScrolled ? "hidden" : "block"}`}>
        Free delivery on orders over $35 within Phoenix!
      </div>

      {/* Main Header - sticky */}
      <div className={`sticky top-0 z-50 bg-background border-b border-border transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src="/paisanos.png"
                alt="Paisano's Logo"
                className={`rounded-full object-cover transition-all duration-300 ${isScrolled ? "w-12 h-12" : "w-[72px] h-[72px]"}`}
              />
              <div>
                <h1 className={`font-bold text-foreground transition-all duration-300 ${isScrolled ? "text-xl" : "text-2xl"}`}>Paisano's</h1>
                <p className={`text-muted-foreground transition-all duration-300 ${isScrolled ? "text-xs" : "text-sm"}`}>Authentic Mexican Restaurant</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <span className="text-foreground hover:text-primary font-medium transition-colors cursor-pointer">
                Menu
              </span>
              <span className="text-foreground hover:text-primary font-medium transition-colors cursor-pointer">
                About
              </span>
              <span className="text-foreground hover:text-primary font-medium transition-colors cursor-pointer">
                Contact
              </span>
              <span className="text-foreground hover:text-primary font-medium transition-colors cursor-pointer">
                Gift Cards
              </span>
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
      </div>
    </header>
  );
};

export default Header;
