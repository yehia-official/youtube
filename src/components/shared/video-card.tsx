import Image from 'next/image';
import Link from 'next/link';
import type { Video } from '@/lib/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Link href={video.url} target="_blank" rel="noopener noreferrer" className="group">
      <Card className="overflow-hidden transition-all transform hover:-translate-y-1 hover:shadow-xl bg-secondary border-border/80 hover:border-primary/50">
        <CardContent className="p-0">
          <div className="relative w-full aspect-video">
            <Image
              src={video.thumbnail.imageUrl}
              alt={video.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              data-ai-hint={video.thumbnail.imageHint}
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <PlayCircle className="h-16 w-16 text-white/80" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4">
          <h3 className="font-semibold leading-snug text-foreground/90">{video.title}</h3>
        </CardFooter>
      </Card>
    </Link>
  );
}
