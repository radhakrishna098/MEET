import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';

export function RightSidebar() {
  const suggestedGroups = [
    {
      name: 'Data Analytics Hub',
      members: '24.5k members',
      avatar: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=40&h=40&fit=crop',
      isFollowing: false
    },
    {
      name: 'Machine Learning',
      members: '18.2k members',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop',
      isFollowing: false
    },
    {
      name: 'Web Development',
      members: '31.7k members',
      avatar: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=40&h=40&fit=crop',
      isFollowing: true
    }
  ];

  const trendingTopics = [
    { tag: 'reactjs', posts: '12.5k posts' },
    { tag: 'javascript', posts: '8.3k posts' },
    { tag: 'webdev', posts: '6.1k posts' },
    { tag: 'programming', posts: '15.2k posts' },
    { tag: 'tech', posts: '22.8k posts' }
  ];

  return (
    <aside className="w-80 p-4 space-y-4">
      {/* Suggested Groups */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-sm">Suggested Groups</h3>
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
            See All
          </Button>
        </div>
        
        <div className="space-y-3">
          {suggestedGroups.map((group, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <img 
                    src={group.avatar} 
                    alt={group.name}
                    className="rounded-full"
                  />
                </Avatar>
                <div>
                  <h4 className="font-medium text-sm">{group.name}</h4>
                  <p className="text-xs text-muted-foreground">{group.members}</p>
                </div>
              </div>
              <Button 
                size="sm" 
                variant={group.isFollowing ? "secondary" : "outline"}
                className="text-xs"
              >
                {group.isFollowing ? 'Following' : 'Follow'}
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Trending Topics */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-sm">Trending Topics</h3>
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
            See All
          </Button>
        </div>
        
        <div className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-sm">#{topic.tag}</h4>
                <p className="text-xs text-muted-foreground">{topic.posts}</p>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">
                Follow
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <Card className="p-4">
        <h3 className="font-semibold text-sm mb-4">Quick Actions</h3>
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start text-sm">
            📝 Create Article
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sm">
            🎓 Share Knowledge
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sm">
            🤝 Host Meetup
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sm">
            💼 Post Job
          </Button>
        </div>
      </Card>
    </aside>
  );
}