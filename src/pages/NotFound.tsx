import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-md">
          <div className="tech-card p-8">
            <AlertTriangle className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              404
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Oops! The page you're looking for doesn't exist.
            </p>
            <Button asChild className="tech-button">
              <a href="/" className="flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span>Return to Home</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
