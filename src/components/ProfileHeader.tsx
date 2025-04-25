import React from 'react';
import { Profile } from '../types';

interface ProfileHeaderProps {
  profile: Profile;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  return (
    <div className="flex flex-col items-center mb-8 animate-fade-in">
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/80 shadow-lg mb-4">
        <img 
          src={profile.avatarUrl} 
          alt={profile.username} 
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{profile.username}</h1>
      {profile.description && (
        <p className="text-white/80 text-center max-w-md px-4">{profile.description}</p>
      )}
    </div>
  );
};

export default ProfileHeader