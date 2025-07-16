import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Brain, Target, ArrowRight, Play } from "lucide-react";

export const FlowDiagram = () => {
  const steps = [
    {
      icon: Camera,
      title: "Capture Gesture",
      description: "Real-time hand detection using computer vision",
      color: "text-accent"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Deep learning models process gesture patterns",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Recognition Result",
      description: "Accurate gesture identification with confidence",
      color: "text-accent-glow"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Title */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-primary bg-clip-text text-transparent">
          How It Works
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
          Our advanced AI system recognizes hand gestures and body postures with precision and speed
        </p>
      </div>

      {/* Flow Steps */}
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 sm:space-y-8 lg:space-y-0 lg:space-x-6 xl:space-x-8 mb-8 sm:mb-12">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
            {/* Step Card */}
            <div className="flow-step w-full max-w-xs sm:max-w-sm lg:w-60 xl:w-64 h-56 sm:h-64 flex flex-col items-center justify-center mx-auto">
              <div className={`p-3 sm:p-4 rounded-full bg-gradient-primary mb-3 sm:mb-4 ${step.color}`}>
                <step.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center px-2">{step.title}</h3>
              <p className="text-muted-foreground text-center text-xs sm:text-sm leading-relaxed px-4">
                {step.description}
              </p>
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-xs font-bold text-primary">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>

            {/* Arrow */}
            {index < steps.length - 1 && (
              <div className="flow-arrow mx-4 lg:mx-6 xl:mx-8 my-4 lg:my-0">
                <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 rotate-90 lg:rotate-0" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Start Button */}
      <div className="text-center px-4">
        <Button className="tech-button text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group w-full sm:w-auto">
          <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
          Start Recognition
        </Button>
        <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
          Click to begin real-time gesture recognition
        </p>
      </div>
    </div>
  );
};