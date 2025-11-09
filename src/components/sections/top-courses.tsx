import { AnimatedSection } from "../shared/animated-section";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlayCircle, Video } from "lucide-react";

const NotionIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M24.73,15.225,23.473,3.619,11.884,4.88,13.141,16.486Zm-1.257,1.257-2.9-2.9,1.061-1.061,2.9,2.9Zm-4.949-4.949L7.915,0,0,7.915,11.53,19.445l-2.9,2.9L0,13.784v8.125l6.094,6.094H14.22L28,14.219l-2.9-2.9L22.27,14.219l-2.9,2.9L7.915,28,2.029,22.114,14.22,9.924l-2.9-2.9,9.9-9.9,5.886,5.886Z" />
    </svg>
);


export function TopCourses() {
  return (
    <AnimatedSection>
      <section className="relative overflow-hidden bg-secondary py-20 md:py-32">
        <div className="absolute inset-0 z-0">
           <div className="absolute h-full w-full bg-background/95">
              <div className="absolute h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent top-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
              <div className="absolute h-[500px] w-[800px] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent bottom-0 left-0 translate-x-1/2 translate-y-1/2 blur-3xl"></div>
           </div>
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="relative w-[350px] h-[400px] mx-auto md:order-2">
                <div className="absolute inset-0 bg-secondary rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-primary/20 hover:scale-105">
                    <Image
                        src="/images/yehia-mohammed.png"
                        alt="Notion Workspace"
                        fill
                        className="object-cover object-center"
                        data-ai-hint="organization app"
                    />
                     <div className="absolute -top-4 -left-4 bg-background/90 p-4 rounded-2xl shadow-lg border border-border/50 backdrop-blur-sm">
                        <NotionIcon className="w-16 h-16 text-foreground" />
                    </div>
                </div>
            </div>

            <div className="text-center md:text-right md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 font-headline">
                لو حياتك ملغبطة، وزحمة!
              </h2>
              <p className="max-w-xl mx-auto text-lg text-foreground/70 mb-8">
                أنا كنت زيك بالضبط، حياتي مكركبة وزحمة، وملغبطة، وعايز أعمل حاجات كتير، وعندي أهداف كتير، لكن للأسف! مكنتش بعرف أعمل أي حاجة، ولا أتابع أي حاجة، وأوقات الحماس بعمل تقدم بسيط وبعدين برجع تاني للمربع صفر. لحد ما عرفت "نوشن"، وهنا كانت نقطة التحول في حياتي!
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-4">
                 <Button asChild size="lg" variant="destructive" className="bg-red-600 hover:bg-red-700">
                    <Link href="https://www.youtube.com/@yehia-official" target="_blank" rel="noopener noreferrer">
                        <PlayCircle className="ml-2 h-5 w-5" />
                        شوف الفيديو إزاي نوشن غيرت حياتي
                    </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-background hover:bg-accent">
                    <Link href="/courses">
                        <Video className="ml-2 h-5 w-5" />
                        شوف كورس نوشن
                    </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
