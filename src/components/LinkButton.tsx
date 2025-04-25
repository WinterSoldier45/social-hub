import React from 'react';
import * as Icons from 'lucide-react';
import { SocialLink } from '../types';

interface LinkButtonProps {
  link: SocialLink;
  index: number;
}

const socialIconMap: Record<string, keyof typeof Icons> = {
  'instagram': 'Instagram',
  'tiktok': 'Music2',
  'youtube': 'Youtube',
  'discord': 'MessageCircle',
  'twitter': 'Twitter',
  'facebook': 'Facebook',
  'linkedin': 'Linkedin',
  'github': 'Github',
  'twitch': 'Twitch',
  'spotify': 'Music',
  'website': 'Globe',
  'email': 'Mail',
  'phone': 'Phone',
  'default': 'Link'
};

const LinkButton: React.FC<LinkButtonProps> = ({ link, index }) => {
  const iconName = socialIconMap[link.title.toLowerCase()] || socialIconMap.default;
  const IconComponent = Icons[iconName];
  
  return (
    <a 
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full max-w-md bg-white/30 backdrop-blur-sm hover:bg-white/50 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex items-center justify-between group mb-4"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animation: 'fade-in-up 0.5s ease-out forwards',
        opacity: 0,
        transform: 'translateY(20px)'
      }}
    >
      <span className="flex items-center">
        <IconComponent className="w-5 h-5 mr-3 text-white transition-transform duration-300 group-hover:scale-110" />
        {link.title}
      </span>
      <span className="text-white/70 group-hover:text-white transform group-hover:translate-x-1 transition-transform duration-300">
        <Icons.ArrowRight className="w-4 h-4" />
      </span>
    </a>
  );
};

export default LinkButton;