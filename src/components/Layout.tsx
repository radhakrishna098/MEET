import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { RightSidebar } from './RightSidebar';
import { AuthModal } from './AuthModal';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onShowAuth={(mode) => {
          setAuthMode(mode);
          setShowAuthModal(true);
        }}
      />
      
      <div className="flex max-w-7xl mx-auto">
        {/* Left Sidebar - Hidden on mobile, visible on lg+ */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 px-4 py-6 min-w-0">
          {children}
        </main>
        
        {/* Right Sidebar - Hidden on mobile and tablet, visible on xl+ */}
        <div className="hidden xl:block">
          <RightSidebar />
        </div>
      </div>

      {showAuthModal && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuthModal(false)}
          onSwitchMode={(mode) => setAuthMode(mode)}
        />
      )}
    </div>
  );
}