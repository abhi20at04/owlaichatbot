import { Card } from "@/components/ui/card";
import { Brain, Zap, Shield, TrendingUp, MessageSquare, BarChart } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Neural Intelligence",
    description: "Advanced neural networks that learn and adapt to your specific needs, delivering personalized insights.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process millions of data points in milliseconds with our optimized AI infrastructure.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security with end-to-end encryption ensuring your data stays protected.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions with our advanced prediction models.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language",
    description: "Interact naturally with AI through conversational interfaces that understand context.",
  },
  {
    icon: BarChart,
    title: "Real-time Insights",
    description: "Monitor and analyze data in real-time with dynamic dashboards and visualizations.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to harness the power of AI in your applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl group animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
