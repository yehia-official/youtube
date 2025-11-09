import { type MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';
import { articles, videos, courses } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/blog',
    '/courses',
    '/youtube',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as 'daily',
    priority: route === '' ? 1 : 0.8,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${siteConfig.url}/blog/${article.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as 'weekly',
    priority: 0.7,
  }));
  
  return [
    ...staticRoutes,
    ...articleRoutes,
  ];
}
