import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Post Writer',
  description: 'グログ投稿ができるWebアプリケーションです。',
  url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  ogImage: '',
  links: {
    x: 'https://x.com/earthpro2',
    github: 'https://github.com/Daichi0914'
  }
};
