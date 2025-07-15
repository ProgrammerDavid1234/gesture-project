import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Zap, Users, Award, Lightbulb } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "Cutting-edge deep learning algorithms trained on millions of gesture samples for unparalleled accuracy."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Ultra-low latency recognition with processing times under 50ms for seamless user experiences."
    },
    {
      icon: Target,
      title: "High Precision",
      description: "99.8% accuracy rate across diverse lighting conditions, backgrounds, and user demographics."
    },
    {
      icon: Users,
      title: "Inclusive Design",
      description: "Built with accessibility in mind, supporting users of all abilities and diverse gesture patterns."
    },
    {
      icon: Award,
      title: "Industry Leading",
      description: "Recognized by leading tech publications and adopted by Fortune 500 companies worldwide."
    },
    {
      icon: Lightbulb,
      title: "Continuous Innovation",
      description: "Regular updates with new gesture types, improved accuracy, and enhanced performance."
    }
  ];

  const stats = [
    { value: "10M+", label: "Gestures Analyzed" },
    { value: "50+", label: "Supported Gestures" },
    { value: "150+", label: "Countries Served" },
    { value: "99.8%", label: "Accuracy Rate" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            About GestureAI
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionizing Human-Computer
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Interaction
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We're pioneering the future of gesture recognition technology, making digital interactions 
            more natural, accessible, and intuitive for everyone. Our advanced AI systems understand 
            the subtle nuances of human movement and translate them into meaningful digital actions.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="tech-card p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              To democratize gesture recognition technology and make it accessible to developers, 
              businesses, and individuals worldwide. We believe that the most natural form of 
              human-computer interaction is through movement and gesture, and we're committed 
              to making this vision a reality.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Makes Us <span className="bg-gradient-primary bg-clip-text text-transparent">Different</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="tech-card group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="p-3 rounded-full bg-gradient-primary w-fit mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="tech-card p-8">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
              By the Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Powered by <span className="bg-gradient-primary bg-clip-text text-transparent">Advanced AI</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our technology stack combines computer vision, deep learning, and edge computing 
                to deliver real-time gesture recognition that works anywhere, anytime.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Convolutional Neural Networks for image processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Recurrent Neural Networks for temporal analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary-glow" />
                  <span>Edge computing for low-latency processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent-glow" />
                  <span>Continuous learning and model improvement</span>
                </div>
              </div>
            </div>
            <div className="tech-card p-8">
              <div className="aspect-square bg-gradient-glow rounded-lg flex items-center justify-center">
                <Brain className="h-24 w-24 text-primary animate-pulse-glow" />
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default About;