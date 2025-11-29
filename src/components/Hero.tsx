import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import owlHero from "@/assets/owl-hero.jpg";

export const Hero = () => {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${owlHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 mb-8 animate-scale-in">
          <Sparkles className="w-4 h-4 text-primary animate-glow" />
          <span className="text-sm text-muted-foreground">Powered by Advanced AI Technology</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-slide-up">
          <span className="gradient-text">Owl AI</span>
          <br />
          <span className="text-foreground">Wisdom Meets Intelligence</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Experience the next generation of artificial intelligence. Owl AI combines cutting-edge machine learning with intuitive design to deliver insights that matter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            variant="hero" 
            size="xl"
            onClick={scrollToDemo}
          >
            Try Live Demo
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button 
            variant="glass" 
            size="xl"
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {[
            { value: "99.9%", label: "Accuracy" },
            { value: "10M+", label: "Predictions" },
            { value: "<50ms", label: "Response Time" },
            { value: "24/7", label: "Availability" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
