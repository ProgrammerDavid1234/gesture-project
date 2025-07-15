import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Hand, Gamepad2, Stethoscope, Shield, School, Factory, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const Applications = () => {
  const applications = [
    {
      icon: Hand,
      title: "Sign Language Detection",
      description: "Real-time recognition and translation of sign language gestures for improved accessibility and communication.",
      features: ["Real-time translation", "Multiple sign languages", "Learning mode", "Community sharing"],
      status: "Available",
      color: "text-accent"
    },
    {
      icon: Gamepad2,
      title: "Gaming Controls",
      description: "Gesture-based gaming interfaces that respond to hand movements and body postures for immersive experiences.",
      features: ["Motion controls", "Custom gestures", "Low latency", "Multi-player support"],
      status: "Beta",
      color: "text-primary"
    },
    {
      icon: Stethoscope,
      title: "Physical Therapy",
      description: "Movement analysis and correction for rehabilitation, helping patients recover faster with precise feedback.",
      features: ["Progress tracking", "Exercise validation", "Recovery analytics", "Therapist dashboard"],
      status: "Coming Soon",
      color: "text-accent-glow"
    },
    {
      icon: Shield,
      title: "Security Systems",
      description: "Biometric access control using unique gesture patterns for enhanced security in sensitive environments.",
      features: ["Biometric auth", "Multi-factor security", "Access logs", "Admin controls"],
      status: "Available",
      color: "text-primary-glow"
    },
    {
      icon: School,
      title: "Educational Tools",
      description: "Interactive learning experiences that use gestures to enhance educational content and engagement.",
      features: ["Interactive lessons", "Student engagement", "Progress tracking", "Curriculum integration"],
      status: "Beta",
      color: "text-accent"
    },
    {
      icon: Factory,
      title: "Industrial Automation",
      description: "Hands-free control of machinery and systems in industrial environments for improved safety and efficiency.",
      features: ["Safety protocols", "Equipment control", "Remote operation", "Maintenance alerts"],
      status: "Coming Soon",
      color: "text-primary"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available": return "bg-green-500/20 text-green-400";
      case "Beta": return "bg-yellow-500/20 text-yellow-400";
      case "Coming Soon": return "bg-blue-500/20 text-blue-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Applications
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover how our gesture recognition technology is transforming industries 
            and creating new possibilities for human-computer interaction.
          </p>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <Card key={index} className="tech-card group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-full bg-gradient-primary ${app.color}`}>
                      <app.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <Badge className={getStatusColor(app.status)}>
                      {app.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{app.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {app.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full group-hover:bg-primary-glow transition-colors"
                    variant={app.status === "Available" ? "default" : "outline"}
                    disabled={app.status === "Coming Soon"}
                  >
                    {app.status === "Available" ? "Try Now" : 
                     app.status === "Beta" ? "Join Beta" : "Notify Me"}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="tech-card p-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get started with our comprehensive APIs and SDKs to integrate gesture recognition into your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="tech-button">
                Get API Access
              </Button>
              <Button variant="outline" className="border-border hover:bg-secondary/50">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default Applications;