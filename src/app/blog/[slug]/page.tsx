import { articles } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { AnimatedSection } from '@/components/shared/animated-section';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.id,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = articles.find((article) => article.id === params.slug);

  if (!article) {
    return {};
  }

  const url = `${siteConfig.url}/blog/${article.id}`;

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      url: url,
      images: [
        {
          url: `${siteConfig.url}${article.image.imageUrl}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [`${siteConfig.url}${article.image.imageUrl}`],
    },
  };
}


export default function ArticlePage({ params }: Props) {
  const article = articles.find((article) => article.id === params.slug);

  if (!article) {
    notFound();
  }
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    image: `${siteConfig.url}${article.image.imageUrl}`,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/favicon.ico`,
      },
    },
    datePublished: new Date().toISOString(), // You might want to add a date to your article data
  };

  return (
    <div className="container py-12 md:py-20">
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 font-headline text-center">
            {article.title}
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <div className="relative w-full aspect-video my-8 rounded-lg overflow-hidden">
            <Image
              src={article.image.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              data-ai-hint={article.image.imageHint}
            />
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={400}>
          <div className="prose prose-lg lg:prose-xl max-w-none mx-auto text-foreground/80 text-justify">
              <p className="lead text-xl md:text-2xl text-foreground/90 mb-6">{article.description}</p>
              <div
                className="space-y-6"
                dangerouslySetInnerHTML={{
                  __html: article.content.replace(/\n/g, '<br />'),
                }}
              />
          </div>
        </AnimatedSection>
      </article>
    </div>
  );
}
