import React from 'react';
import { CreatePost } from './CreatePost';
import { PostCard } from './PostCard';

const samplePosts = [
  {
    id: '1',
    type: 'article' as const,
    title: 'What if famous brands had regular fonts? Meet RegularBrands!',
    content: "I've worked in UX for the better part of a decade. From one gig, I went to the next and then the next. I went from agency client.",
    author: {
      name: 'Sarthak Kamra',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    },
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop',
    timestamp: '1.4k views',
    likes: 42,
    comments: 12,
    shares: 8,
    tags: ['branding', 'design', 'fonts']
  },
  {
    id: '2',
    type: 'education' as const,
    title: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
    content: "I've worked in UX for the better part of a decade. From one gig, I went to the next and then the next. I went from agency client.",
    author: {
      name: 'Sarah West',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b593?w=40&h=40&fit=crop&crop=face',
    },
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=300&fit=crop',
    timestamp: '4.8k views',
    likes: 128,
    comments: 25,
    shares: 15
  },
  {
    id: '3',
    type: 'meetup' as const,
    title: 'Finance & Investment Elite Social Mixer @Lujiazui',
    content: "Join us for an exclusive networking event in the heart of Shanghai's financial district. Connect with industry leaders and investment professionals.",
    author: {
      name: 'Ronal Jones',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    },
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=300&fit=crop',
    timestamp: 'Fri, 12 Oct, 2018',
    likes: 64,
    comments: 18,
    shares: 22,
    tags: ['networking', 'finance', 'shanghai']
  },
  {
    id: '4',
    type: 'job' as const,
    title: 'Software Developer - II',
    content: "Innovaccer Analytics Private Ltd. is looking for a skilled Software Developer to join our team. Work on cutting-edge healthcare technology solutions.",
    author: {
      name: 'Joseph Gray',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    },
    timestamp: 'Noida, India',
    likes: 32,
    comments: 8,
    shares: 12,
    tags: ['softwaredev', 'healthcare', 'noida']
  }
];

export function Feed() {
  return (
    <div className="space-y-6">
      <CreatePost />
      
      <div className="space-y-4">
        {samplePosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}