export interface SocialLink {
  id: string;
  title: string;
  url: string;
  icon: string;
}

export interface Profile {
  username: string;
  description?: string;
  avatarUrl: string;
  socialLinks: SocialLink[];
}