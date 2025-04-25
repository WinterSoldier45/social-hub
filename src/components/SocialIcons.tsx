import React from 'react';
import * as Icons from 'lucide-react';
import { SocialLink } from '../types';

interface SocialIconsProps {
  links: SocialLink[];
}

const SocialIcons: React.FC<SocialIconsProps> = ({ links }) => {
  return (
    <div className="flex justify-center gap-4 mt-8">
      {links.map((link, index) => {
        const IconComponent = Icons[link.icon as keyof typeof Icons] || Icons.Link;
        
        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.title}
            className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
            style={{
              animation: 'fade-in 0.5s ease-out forwards',
              animationDelay: `${index * 100}ms`,
              opacity: 0
            }}
          >
            <IconComponent className="w-6 h-6 animate-pulse hover:animate-none" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;