import Image from 'next/image';
import type { Review } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { StarRating } from './star-rating';
import { ThumbsUp, ThumbsDown, Video } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="overflow-hidden bg-secondary border-border/80 backdrop-blur-sm p-6 flex items-center gap-6">
      <div className="flex flex-col items-center text-center">
            <Image 
              src={review.image.imageUrl} 
              alt={review.title} 
              width={40} 
              height={40} 
              className="rounded-full mb-2"
              data-ai-hint={review.image.imageHint}
            />
          <p className="text-sm font-semibold">{review.title}</p>
      </div>
      <div>
        <StarRating rating={review.rating} />
        <p className="text-foreground/90 mt-2">{review.description}</p>
      </div>
    </Card>
  );
}
