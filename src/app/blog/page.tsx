import { AnimatedSection } from "@/components/shared/animated-section";
import { ArticleCard } from "@/components/shared/article-card";
import { articles } from "@/lib/data";
import { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
    title: "المدونة | " + siteConfig.name,
    description: "مقالات ونصائح حول البرمجة، الإنتاجية، والأدوات التقنية.",
};


export default function BlogPage() {
  return (
    <div className="container py-12 md:py-20">
      <AnimatedSection>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 font-headline text-center">
          المدونة
        </h1>
        <p className="max-w-xl mx-auto text-lg text-foreground/70 mb-12 text-center">
          مقالات ونصائح حول البرمجة، الإنتاجية، والأدوات التقنية.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
