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
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20 sm:opacity-30" />
      <div className="absolute top-10 sm:top-20 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 sm:bottom-20 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-6 sm:mb-8">
          <Badge variant="secondary" className="mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium">
            Next-Generation AI Technology
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Hand & Posture
            </span>
            <br />
            <span className="text-foreground">Recognition System</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Harness the power of advanced AI to detect, analyze, and interpret 
            hand gestures and body postures with unprecedented accuracy and speed.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-4xl mx-auto px-2">
          {features.map((feature, index) => (
            <Card key={index} className="tech-card p-3 sm:p-4 text-center group hover:scale-105 transition-all duration-300">
              <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-primary group-hover:text-accent transition-colors" />
              <span className="text-xs sm:text-sm font-medium">{feature.label}</span>
            </Card>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Button className="tech-button text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
            Try Live Demo
          </Button>
          <Button variant="outline" className="border-border hover:bg-secondary/50 px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">99.8%</div>
            <div className="text-sm sm:text-base text-muted-foreground">Recognition Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">&lt;50ms</div>
            <div className="text-sm sm:text-base text-muted-foreground">Processing Latency</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary-glow mb-2">25+</div>
            <div className="text-sm sm:text-base text-muted-foreground">Supported Gestures</div>
          </div>
        </div>
      </div>
    </section>
  );
};