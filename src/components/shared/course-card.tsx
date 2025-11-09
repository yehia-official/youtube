import Image from 'next/image';
import Link from 'next/link';
import type { Course } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full bg-secondary border-border/80 backdrop-blur-sm transition-all transform hover:-translate-y-1 hover:shadow-xl hover:border-primary/50">
      <div className="relative w-full aspect-video">
        <Image
          src={course.image.imageUrl}
          alt={course.title}
          fill
          className="object-cover"
          data-ai-hint={course.image.imageHint}
        />
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
        <CardDescription className="pt-2 text-foreground/70">{course.description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto pt-4">
         <Badge variant="outline" className='border-primary/50 text-primary'>{course.category}</Badge>
      </CardFooter>
    </Card>
  );
}
