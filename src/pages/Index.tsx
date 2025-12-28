import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PhoneOrderSection from "@/components/PhoneOrderSection";
import PopularItems from "@/components/PopularItems";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <PhoneOrderSection />
      <PopularItems />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
