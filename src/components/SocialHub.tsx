import React from 'react';
import ProfileHeader from './ProfileHeader';
import LinkButton from './LinkButton';
import SocialIcons from './SocialIcons';
import { Profile } from '../types';

interface SocialHubProps {
  profile: Profile;
}

const SocialHub: React.FC<SocialHubProps> = ({ profile }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" 
          style={{ 
            backgroundImage: 'url(https://cdn.pixabay.com/animation/2023/06/06/06/55/06-55-58-480_512.gif)',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-10 px-4">
        <div className="w-full max-w-lg mx-auto flex flex-col items-center">
          <ProfileHeader profile={profile} />
          
          <div className="w-full space-y-3">
            {profile.socialLinks.map((link, index) => (
              <LinkButton key={link.id} link={link} index={index} />
            ))}
          </div>
          
          <SocialIcons links={profile.socialLinks} />
          
          <footer className="mt-10 text-white/70 text-sm">
            <p>© {new Date().getFullYear()} {profile.username}</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default SocialHub;