import { Utensils, Clock, Leaf, Heart } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description: "We source the freshest local ingredients daily to ensure authentic flavors in every dish."
    },
    {
      icon: Heart,
      title: "Family Recipes",
      description: "Generations of traditional Mexican recipes passed down and perfected over the years."
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "Quick preparation without compromising quality. Your meal, ready when you need it."
    },
    {
      icon: Utensils,
      title: "Made with Love",
      description: "Every dish is crafted with care and passion by our experienced culinary team."
    }
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Paisano's?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference that passion and tradition make in every bite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-background shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
