import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Brain, Target, ArrowRight, Play } from "lucide-react";

export const FlowDiagram = () => {
  const steps = [
    {
      icon: Camera,
      title: "Capture Gesture",
      description: "Real-time hand and posture detection using advanced computer vision",
      color: "text-accent"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Deep learning models process and analyze gesture patterns",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Recognition Result",
      description: "Accurate gesture identification with confidence scores",
      color: "text-accent-glow"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          How It Works
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our advanced AI system recognizes hand gestures and body postures with precision and speed
        </p>
      </div>

      {/* Flow Steps */}
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 mb-12">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center">
            {/* Step Card */}
            <div className="flow-step w-80 h-64 flex flex-col items-center justify-center">
              <div className={`p-4 rounded-full bg-gradient-primary mb-4 ${step.color}`}>
                <step.icon className="h-12 w-12 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
              <p className="text-muted-foreground text-center text-sm leading-relaxed">
                {step.description}
              </p>
              <div className="absolute top-4 right-4 text-xs font-bold text-primary">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>

            {/* Arrow */}
            {index < steps.length - 1 && (
              <div className="flow-arrow mx-4 lg:mx-8">
                <ArrowRight className="h-8 w-8 lg:h-12 lg:w-12 rotate-90 lg:rotate-0" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Start Button */}
      <div className="text-center">
        <Button className="tech-button text-lg px-8 py-4 group">
          <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          Start Recognition
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          Click to begin real-time gesture recognition
        </p>
      </div>
    </div>
  );
};