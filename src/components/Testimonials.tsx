import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria G.",
      rating: 5,
      text: "The best birria tacos I've had outside of Mexico! The consomé is absolutely perfect. This place reminds me of my abuela's cooking.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "James T.",
      rating: 5,
      text: "Finally found authentic Mexican food in Phoenix! The enchiladas verdes are incredible and the staff is so friendly. Will definitely be back!",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Sofia R.",
      rating: 5,
      text: "Our family's new favorite spot! The portions are generous, prices are fair, and everything tastes homemade. The pozole is a must-try!",
      date: "3 weeks ago"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">
                    {testimonial.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.date}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
