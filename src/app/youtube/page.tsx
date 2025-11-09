import { AnimatedSection } from "@/components/shared/animated-section";
import { VideoCard } from "@/components/shared/video-card";
import { Button } from "@/components/ui/button";
import { videos } from "@/lib/data";
import { Youtube as YoutubeIcon } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
    title: "قناة يوتيوب | " + siteConfig.name,
    description: "شروحات ومراجعات ونصائح جديدة من قناة يحيى محمد على يوتيوب.",
};

export default function YoutubePage() {
  return (
    <div className="container py-12 md:py-20">
      <AnimatedSection>
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 font-headline">
                Latest Videos
            </h1>
            <p className="max-w-xl mx-auto text-lg text-foreground/70 mb-8">
                Tutorials, reviews, and tips, fresh from the YouTube channel.
            </p>
            <Button asChild size="lg">
                <Link href="https://www.youtube.com/@yehia-official" target="_blank" rel="noopener noreferrer">
                    <YoutubeIcon className="h-5 w-5 mr-2" />
                    Subscribe to the Channel
                </Link>
            </Button>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
