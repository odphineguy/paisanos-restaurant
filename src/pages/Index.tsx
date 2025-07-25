import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PhoneOrderSection from "@/components/PhoneOrderSection";
import PopularItems from "@/components/PopularItems";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PhoneOrderSection />
      <PopularItems />
      <Footer />
    </div>
  );
};

export default Index;
