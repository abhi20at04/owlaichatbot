import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ChatDemo } from "@/components/ChatDemo";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <ChatDemo />
      <Footer />
    </div>
  );
};

export default Index;
