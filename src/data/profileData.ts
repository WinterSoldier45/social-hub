import { Profile } from '../types';

export const profileData: Profile = {
  username: '@PASS3R',
  description: 'Segui i miei profili social.',
  avatarUrl: 'https://media.discordapp.net/attachments/952341094635560960/1364963979868377203/Immagine_2025-04-20_024423.png?ex=680c3e04&is=680aec84&hm=005901c59d12b440355861cb29c41ea1df3cf43027db65baf180f76186fe8f68&=&format=webp&quality=lossless',
  socialLinks: [
    { 
      id: '1', 
      title: 'TikTok', 
      url: 'https://www.tiktok.com/@_pass3r_', 
      icon: 'tiktok' 
    },
    { 
      id: '2', 
      title: 'YouTube', 
      url: 'https://www.youtube.com/@PASS3R-1', 
      icon: 'youtube' 
    },
    { 
      id: '3', 
      title: 'Discord', 
      url: 'https://discord.gg/yySrMsthbA', 
      icon: 'discord' 
    },
    { 
      id: '4', 
      title: 'Twitch', 
      url: 'https://www.twitch.tv/pass3r__', 
      icon: 'twitch' 
    }
  ]
};