import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'login' | 'signup';
  onSwitchType: (type: 'login' | 'signup') => void;
}

export const AuthModal = ({ isOpen, onClose, type, onSwitchType }: AuthModalProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] tech-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-primary bg-clip-text text-transparent">
            {type === 'login' ? 'Welcome Back' : 'Create Account'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {type === 'signup' && (
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="pl-10 bg-input border-border focus:border-primary"
                  required={type === 'signup'}
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="pl-10 bg-input border-border focus:border-primary"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="pl-10 pr-10 bg-input border-border focus:border-primary"
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            </div>
          </div>

          <Button type="submit" className="w-full tech-button">
            {type === 'login' ? 'Sign In' : 'Create Account'}
          </Button>

          <div className="text-center text-sm">
            <span className="text-muted-foreground">
              {type === 'login' ? "Don't have an account? " : "Already have an account? "}
            </span>
            <button
              type="button"
              onClick={() => onSwitchType(type === 'login' ? 'signup' : 'login')}
              className="text-primary hover:text-primary-glow font-medium transition-colors"
            >
              {type === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};