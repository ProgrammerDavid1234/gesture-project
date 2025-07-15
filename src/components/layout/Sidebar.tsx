import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, Info, Grid3X3, User, UserPlus, X } from "lucide-react";
import { AuthModal } from "@/components/auth/AuthModal";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const handleAuthClick = (type: 'login' | 'signup') => {
    setAuthType(type);
    setIsAuthOpen(true);
  };

  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Info, label: 'About', href: '/about' },
    { icon: Grid3X3, label: 'Applications', href: '/applications' },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-screen w-64 bg-card border-r border-border z-50 transform transition-transform duration-300 ease-in-out overflow-hidden",
        "lg:relative lg:translate-x-0 lg:z-auto",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Close button for mobile */}
          <div className="flex justify-end p-4 lg:hidden">
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Navigation
              </h3>
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="sidebar-item flex items-center space-x-3 w-full"
                  onClick={onClose}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>

            {/* Authentication Section */}
            <div className="pt-4 border-t border-border">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Account
              </h3>
              <Button
                variant="ghost"
                className="sidebar-item w-full justify-start space-x-3"
                onClick={() => handleAuthClick('login')}
              >
                <User className="h-5 w-5" />
                <span>Login</span>
              </Button>
              <Button
                variant="ghost"
                className="sidebar-item w-full justify-start space-x-3"
                onClick={() => handleAuthClick('signup')}
              >
                <UserPlus className="h-5 w-5" />
                <span>Sign Up</span>
              </Button>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <div className="text-xs text-muted-foreground text-center">
              GestureAI v1.0
            </div>
          </div>
        </div>
      </aside>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        type={authType}
        onSwitchType={(type) => setAuthType(type)}
      />
    </>
  );
};