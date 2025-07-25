import React, { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

interface AuthModalProps {
  mode: 'signin' | 'signup';
  onClose: () => void;
  onSwitchMode: (mode: 'signin' | 'signup') => void;
}

export function AuthModal({ mode, onClose, onSwitchMode }: AuthModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const isSignUp = mode === 'signup';

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl bg-background relative overflow-hidden max-h-[90vh] overflow-y-auto">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-10"
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left Side - Form */}
          <div className="flex-1 p-4 md:p-8">
            {/* Header Message */}
            <div className="mb-8 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-800 text-sm">
                Let's learn, share & inspire each other with our passion for computer engineering. Sign up now ✌️
              </p>
            </div>

            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-2">
                {isSignUp ? 'Create Account' : 'Sign In'}
              </h2>
              
              {!isSignUp && (
                <p className="text-muted-foreground mb-6">
                  Don't have an account yet?{' '}
                  <button 
                    onClick={() => onSwitchMode('signup')}
                    className="text-primary hover:underline font-medium"
                  >
                    Create new for free!
                  </button>
                </p>
              )}

              <form className="space-y-4">
                {isSignUp && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                {isSignUp && (
                  <div>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    />
                  </div>
                )}

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  {isSignUp ? 'Create Account' : 'Sign In'}
                </Button>

                <div className="space-y-3">
                  <Button variant="outline" className="w-full">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-blue-600">f</span>
                      <span>Sign {isSignUp ? 'up' : 'in'} with Facebook</span>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-red-500">G</span>
                      <span>Sign {isSignUp ? 'up' : 'in'} with Google</span>
                    </div>
                  </Button>
                </div>

                {isSignUp ? (
                  <p className="text-center text-sm text-muted-foreground">
                    <button 
                      onClick={() => onSwitchMode('signin')}
                      className="text-primary hover:underline"
                    >
                      or, Sign In
                    </button>
                  </p>
                ) : (
                  <p className="text-center text-sm text-muted-foreground">
                    <button className="text-primary hover:underline">
                      Forgot Password?
                    </button>
                  </p>
                )}
              </form>

              {isSignUp && (
                <p className="text-xs text-muted-foreground mt-4">
                  By signing up, you agree to our Terms & conditions, Privacy policy
                </p>
              )}
            </div>
          </div>

          {/* Right Side - Illustration - Hidden on mobile */}
          <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 p-8 items-center justify-center">
            <div className="max-w-sm text-center">
              <div className="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center">
                  <div className="text-4xl">👋</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {isSignUp ? 'Welcome!' : 'Welcome back!'}
              </h3>
              <p className="text-muted-foreground">
                Connect with fellow computer engineers and share your passion for technology.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}