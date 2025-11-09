import Image from 'next/image';
import type { Testimonial } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { StarRating } from './star-rating';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="bg-secondary/50 border-border/50 p-6 h-full backdrop-blur-sm">
      <CardContent className="p-0 flex flex-col items-start text-left gap-4">
        <StarRating rating={testimonial.rating} />
        <p className="font-semibold text-lg">{testimonial.summary}</p>
        <div className="flex items-center gap-3 mt-2">
            <Image 
                src={testimonial.author.image.imageUrl}
                alt={testimonial.author.name}
                width={40}
                height={40}
                className="rounded-full"
                data-ai-hint={testimonial.author.image.imageHint}
            />
            <div>
                <p className="font-semibold">{testimonial.author.name}</p>
                <p className="text-sm text-foreground/70">{testimonial.author.title}</p>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
