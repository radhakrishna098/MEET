import React, { useState } from 'react';
import { MoreHorizontal, Heart, MessageSquare, Share, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';

interface PostProps {
  id: string;
  type: 'article' | 'education' | 'meetup' | 'job';
  title: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    role?: string;
  };
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  tags?: string[];
}

export function PostCard({ post }: { post: PostProps }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
        return '📰';
      case 'education':
        return '🎓';
      case 'meetup':
        return '🤝';
      case 'job':
        return '💼';
      default:
        return '📝';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article':
        return 'bg-blue-100 text-blue-800';
      case 'education':
        return 'bg-green-100 text-green-800';
      case 'meetup':
        return 'bg-purple-100 text-purple-800';
      case 'job':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="p-4 md:p-6 space-y-4 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <img 
              src={post.author.avatar || `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face`} 
              alt={post.author.name}
              className="rounded-full"
            />
          </Avatar>
          <div>
            <h4 className="font-medium text-sm">{post.author.name}</h4>
            <p className="text-xs text-muted-foreground">{post.timestamp}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Type Badge */}
      <div className="flex items-center space-x-2">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(post.type)}`}>
          {getTypeIcon(post.type)} {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-2 md:space-y-3">
        <h3 className="font-semibold text-base md:text-lg leading-tight">{post.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{post.content}</p>
      </div>

      {/* Image */}
      {post.image && (
        <div className="rounded-lg overflow-hidden">
          <img 
            src={post.image} 
            alt="Post content"
            className="w-full h-32 sm:h-48 object-cover"
          />
        </div>
      )}

      {/* Tags */}
      {post.tags && (
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 border-t space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setIsLiked(!isLiked)}
            className={isLiked ? 'text-red-500' : ''}
          >
            <Heart className={`h-4 w-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />
            {post.likes + (isLiked ? 1 : 0)}
          </Button>
          <Button variant="ghost" size="sm">
            <MessageSquare className="h-4 w-4 mr-1" />
            {post.comments}
          </Button>
          <Button variant="ghost" size="sm">
            <Share className="h-4 w-4 mr-1" />
            {post.shares}
          </Button>
        </div>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={isBookmarked ? 'text-blue-500' : ''}
        >
          <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
        </Button>
      </div>
    </Card>
  );
}