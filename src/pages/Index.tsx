import { HeroSection } from "@/components/home/HeroSection";
import { FlowDiagram } from "@/components/home/FlowDiagram";
import { Layout } from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <HeroSection />
        <FlowDiagram />
      </div>
    </Layout>
  );
};

export default Index;
