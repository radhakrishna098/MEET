import React from 'react';
import { Search, MessageSquare, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  onShowAuth: (mode: 'signin' | 'signup') => void;
}

export function Header({ onShowAuth }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="text-xl md:text-2xl font-bold text-primary">
            ATSWORLD
          </div>
        </div>

        {/* Search - Hidden on mobile, visible on md+ */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search by your learning groups or POI"
              className="pl-10 bg-muted/50 border-none w-full"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Mobile Search Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Bell className="h-5 w-5" />
          </Button>
          
          {/* User Menu */}
          <div className="flex items-center space-x-1 md:space-x-2">
            <Button 
              variant="ghost"
              onClick={() => onShowAuth('signin')}
              className="text-xs md:text-sm px-2 md:px-4"
            >
              <span className="hidden sm:inline">Sign In</span>
              <span className="sm:hidden">In</span>
            </Button>
            <Button 
              onClick={() => onShowAuth('signup')}
              className="text-xs md:text-sm px-2 md:px-4"
            >
              <span className="hidden sm:inline">Create Account</span>
              <span className="sm:hidden">Join</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}