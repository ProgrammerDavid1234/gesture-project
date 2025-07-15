import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Zap, Shield, Cpu } from "lucide-react";

export const HeroSection = () => {
  const features = [
    { icon: Zap, label: "Real-time Processing" },
    { icon: Shield, label: "99.8% Accuracy" },
    { icon: Cpu, label: "AI Powered" },
    { icon: Activity, label: "Multiple Gestures" }
  ];

  return (
    <section className="relative py-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            Next-Generation AI Technology
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Hand & Posture
            </span>
            <br />
            <span className="text-foreground">Recognition System</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Harness the power of advanced AI to detect, analyze, and interpret 
            hand gestures and body postures with unprecedented accuracy and speed.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="tech-card p-4 text-center group hover:scale-105 transition-all duration-300">
              <feature.icon className="h-8 w-8 mx-auto mb-2 text-primary group-hover:text-accent transition-colors" />
              <span className="text-sm font-medium">{feature.label}</span>
            </Card>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="tech-button text-lg px-8 py-4">
            Try Live Demo
          </Button>
          <Button variant="outline" className="border-border hover:bg-secondary/50 px-8 py-4">
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
            <div className="text-muted-foreground">Recognition Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">&lt;50ms</div>
            <div className="text-muted-foreground">Processing Latency</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-glow mb-2">25+</div>
            <div className="text-muted-foreground">Supported Gestures</div>
          </div>
        </div>
      </div>
    </section>
  );
};