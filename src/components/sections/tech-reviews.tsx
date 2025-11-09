import { articles } from "@/lib/data";
import { AnimatedSection } from "../shared/animated-section";
import { Button } from "../ui/button";
import Link from "next/link";
import { Edit } from "lucide-react";
import { ArticleCard } from "../shared/article-card";


export function LatestArticles() {
  return (
    <AnimatedSection>
      <section className="container py-12 md:py-20">
         <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
            أحدث المقالات على مدونة يحيى محمد
         </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>

        <div className="flex justify-center mt-12">
            <Button asChild size="lg" variant="outline" className="bg-background hover:bg-accent">
                <Link href="/blog">
                    <Edit className="ml-2 h-5 w-5" />
                    المزيد من المقالات
                </Link>
            </Button>
        </div>
      </section>
    </AnimatedSection>
  );
}
