import React from 'react';
import { Home, Users, Calendar, Briefcase, BookOpen, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function Sidebar() {
  const menuItems = [
    { icon: Home, label: 'All PostsCast', active: true },
    { icon: Users, label: 'Followed Groups', count: 8 },
    { icon: Calendar, label: 'Events' },
    { icon: Briefcase, label: 'Jobs' },
    { icon: BookOpen, label: 'Education' },
    { icon: TrendingUp, label: 'Analytics' },
  ];

  const followedGroups = [
    { name: 'Computer Engineering', members: '142,765 Computer Engineers follow this', image: '/lovable-uploads/52e6ea6b-aaf8-46a4-ae00-14b8f3b500df.png' }
  ];

  return (
    <aside className="w-80 p-4 space-y-4">
      {/* Main Navigation */}
      <Card className="p-4">
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "default" : "ghost"}
              className="w-full justify-start text-left"
            >
              <item.icon className="mr-3 h-4 w-4" />
              <span className="flex-1">{item.label}</span>
              {item.count && (
                <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                  {item.count}
                </span>
              )}
            </Button>
          ))}
        </nav>
      </Card>

      {/* Followed Groups */}
      <Card className="p-4">
        <h3 className="font-semibold mb-4">FOLLOWED GROUPS</h3>
        {followedGroups.map((group, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
              CE
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-sm">{group.name}</h4>
              <p className="text-xs text-muted-foreground">{group.members}</p>
            </div>
          </div>
        ))}
      </Card>

      {/* Recent Activity */}
      <Card className="p-4">
        <h3 className="font-semibold mb-4">RECOMMENDED GROUPS</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                AH
              </div>
              <span className="text-sm">Data Analytics</span>
            </div>
            <Button size="sm" variant="outline" className="text-xs">
              Follow
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                ML
              </div>
              <span className="text-sm">Machine Learning</span>
            </div>
            <Button size="sm" variant="outline" className="text-xs">
              Follow
            </Button>
          </div>
        </div>
      </Card>
    </aside>
  );
}