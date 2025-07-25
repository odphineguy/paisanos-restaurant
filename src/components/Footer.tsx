const Footer = () => {
  return (
    <footer className="bg-text-primary text-primary-lighter py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Paisano's</h3>
                <p className="text-sm opacity-80">Authentic Mexican Kitchen</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4 max-w-md">
              Experience the authentic flavors of Mexico in the heart of Phoenix. 
              Fresh ingredients, traditional recipes, and a passion for great food.
            </p>
            <p className="text-sm">
              <strong>Phone:</strong>{" "}
              <a href="tel:+16023849993" className="hover:text-primary transition-colors">
                (602) 384-9993
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#menu" className="hover:text-primary transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gift-cards" className="hover:text-primary transition-colors">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="font-semibold mb-4">Location & Hours</h4>
            <div className="text-sm space-y-2">
              <p>Phoenix, AZ</p>
              <div>
                <p className="font-medium">Hours:</p>
                <p>Mon-Thu: 11am - 9pm</p>
                <p>Fri-Sat: 11am - 10pm</p>
                <p>Sun: 12pm - 8pm</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2024 Paisano's Mexican Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;