import { AnimatedSection } from "@/components/shared/animated-section";
import { Hero } from "@/components/sections/hero";
import { TopCourses } from "@/components/sections/top-courses";
import { LatestArticles } from "@/components/sections/tech-reviews";
import { VideoPlaylist } from "@/components/sections/video-playlist";
import type { Metadata } from 'next';
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `الرئيسية | ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <div className="-mt-20">
        <Hero />
      </div>
      <TopCourses />
      <div className="flex flex-col gap-16 md:gap-24 mt-16 md:mt-24">
        <LatestArticles />
        <VideoPlaylist />
      </div>
    </div>
  );
}
