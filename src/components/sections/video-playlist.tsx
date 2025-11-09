
'use client';

import { playlistVideos } from "@/lib/data";
import { AnimatedSection } from "../shared/animated-section";
import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";
import { PlayCircle } from "lucide-react";
import type { Video } from "@/lib/types";

function getYouTubeEmbedUrl(url: string): string | null {
    let videoId: string | null = null;
    try {
        const urlObj = new URL(url);
        if (urlObj.hostname === 'youtu.be') {
            videoId = urlObj.pathname.slice(1);
        } else if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
            if (urlObj.pathname === '/watch') {
                videoId = urlObj.searchParams.get('v');
            } else if (urlObj.pathname.startsWith('/embed/')) {
                videoId = urlObj.pathname.split('/')[2];
            }
        }
    } catch (error) {
        console.error("Invalid video URL:", url);
        return null;
    }
    
    if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    }
    
    return null;
}

export function VideoPlaylist() {
  const [activeVideo, setActiveVideo] = React.useState(playlistVideos[0]);
  const [videoKey, setVideoKey] = React.useState(0);
  const [embedUrl, setEmbedUrl] = React.useState<string | null>(getYouTubeEmbedUrl(playlistVideos[0].url));


  const handleVideoSelect = (video: Video) => {
    setActiveVideo(video);
    setEmbedUrl(getYouTubeEmbedUrl(video.url));
    setVideoKey(prevKey => prevKey + 1); 
  };


  return (
    <AnimatedSection>
      <section className="bg-secondary py-12 md:py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
            أهم الفيديوهات على قناة يحيى محمد
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-background/50 rounded-lg p-4 h-[500px] overflow-y-auto">
              <ul className="space-y-2">
                {playlistVideos.map((video) => (
                  <li key={video.id}>
                    <button
                      onClick={() => handleVideoSelect(video)}
                      className={cn(
                        "w-full text-right p-2 rounded-md transition-colors flex items-center gap-4",
                        activeVideo.id === video.id
                          ? "bg-primary/20"
                          : "hover:bg-accent"
                      )}
                    >
                      <div className="relative w-24 h-16 flex-shrink-0">
                         <Image
                            src={video.thumbnail.imageUrl}
                            alt={video.title}
                            fill
                            className="object-cover rounded-md"
                            data-ai-hint={video.thumbnail.imageHint}
                         />
                      </div>
                      <span className="font-medium text-sm text-foreground/90">{video.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 relative aspect-video bg-black rounded-lg overflow-hidden group">
                 {embedUrl ? (
                    <iframe
                        key={videoKey}
                        className="w-full h-full"
                        src={embedUrl}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                 ) : (
                    <div className="w-full h-full flex items-center justify-center bg-black text-white">
                        فيديو غير صالح
                    </div>
                 )}


                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 pointer-events-none">
                     <PlayCircle className="w-20 h-20 text-white/80" />
                  </div>

                 <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm">
                    <p>{activeVideo.title}</p>
                 </div>
            </div>

          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
