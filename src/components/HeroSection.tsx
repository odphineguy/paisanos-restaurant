import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-primary/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
              Best Mexican Food in Phoenix
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Authentic,
            <br />
            <span className="text-primary-lighter">Homemade</span>
            <br />
            Mexican Cuisine,
            <br />
            <span className="text-accent-light">Crafted with Love!</span>
          </h1>

          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Welcome to Paisano's Mexican Restaurant. We offer a unique cultural experience with authentic 
            Mexican cuisine made with passion and tradition. Enjoy our handcrafted specialty dishes, 
            prepared with the finest ingredients for the perfect complement to your meal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-3"
            >
              Order Online →
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-3 bg-transparent"
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;