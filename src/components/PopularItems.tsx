import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PopularItems = () => {
  const popularItems = [
    {
      id: 1,
      name: "TACOS DE CARNE ASADA (Order Of 3)",
      description: "Order of 3 - carne asada topped with onion, cilantro and guacamole. Served with a side of beans",
      image: "/tacos.png",
      price: "$14.99"
    },
    {
      id: 2,
      name: "TACOS DE BIRRIA (Order Of 3)",
      description: "Order for 3 - Slow-cooked beef stew with spices, served with onion and cilantro. Served with a side of consomé",
      image: "/birria.png",
      price: "$16.99"
    },
    {
      id: 3,
      name: "BURRITO SUPREMO",
      description: "Large flour tortilla filled with your choice of meat, rice, beans, cheese, lettuce, and sour cream",
      image: "/burrito.png",
      price: "$12.99"
    },
    {
      id: 4,
      name: "QUESADILLA GRANDE",
      description: "Large grilled tortilla with melted cheese and your choice of filling. Served with salsa and sour cream",
      image: "/quesadilla.png",
      price: "$11.99"
    },
    {
      id: 5,
      name: "ENCHILADAS VERDES",
      description: "Three enchiladas topped with green sauce, cheese, and sour cream. Served with rice and beans",
      image: "/enchiladas-verdes.png",
      price: "$13.99"
    },
    {
      id: 6,
      name: "POZOLE ROJO",
      description: "Traditional Mexican soup with hominy and pork in a red chili broth. Served with lime and oregano",
      image: "/pozole.png",
      price: "$15.99"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Try our most popular items
          </h2>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View Full Menu
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2 line-clamp-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">{item.price}</span>
                  <Button 
                    size="sm"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Add Item
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularItems;