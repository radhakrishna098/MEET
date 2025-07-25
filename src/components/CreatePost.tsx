import React, { useState } from 'react';
import { Image, Video, Calendar, Briefcase, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Avatar } from '@/components/ui/avatar';

export function CreatePost() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [postContent, setPostContent] = useState('');

  return (
    <Card className="p-4 space-y-4">
      <div className="flex items-start space-x-3">
        <Avatar className="w-10 h-10">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
            alt="Your avatar"
            className="rounded-full"
          />
        </Avatar>
        <div className="flex-1">
          <Textarea
            placeholder="Write a Post..."
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            className="min-h-[60px] resize-none border-none shadow-none focus-visible:ring-0 text-base"
          />
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                <Image className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Photo</span>
                <span className="sm:hidden">📷</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                <Video className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Video</span>
                <span className="sm:hidden">🎥</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Event</span>
                <span className="sm:hidden">📅</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                <Briefcase className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Job</span>
                <span className="sm:hidden">💼</span>
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setIsExpanded(false);
                  setPostContent('');
                }}
              >
                Cancel
              </Button>
              <Button size="sm" disabled={!postContent.trim()}>
                Post
              </Button>
            </div>
          </div>
        </div>
      )}

      {!isExpanded && (
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Image className="h-4 w-4 mr-1" />
              Photo
            </Button>
            <Button variant="ghost" size="sm">
              <Video className="h-4 w-4 mr-1" />
              Video
            </Button>
            <Button variant="ghost" size="sm">
              <Calendar className="h-4 w-4 mr-1" />
              Event
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}