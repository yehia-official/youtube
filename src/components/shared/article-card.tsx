import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";

export function ArticleCard({ article }: { article: Article }) {
    return (
        <Card className="flex flex-col overflow-hidden h-full bg-secondary border-border/80 backdrop-blur-sm transition-all transform hover:-translate-y-1 hover:shadow-xl hover:border-primary/50">
            <Link href={article.url} className="block w-full aspect-video relative">
                <Image
                src={article.image.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
                data-ai-hint={article.image.imageHint}
                />
            </Link>
            <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">
                    <Link href={article.url} className="hover:underline">
                        {article.title}
                    </Link>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-foreground/70">{article.description}</p>
            </CardContent>
            <CardFooter className="mt-auto pt-4">
                <Link href={article.url} className="text-primary hover:underline">
                اقرأ المزيد »
                </Link>
            </CardFooter>
        </Card>
    )
}
