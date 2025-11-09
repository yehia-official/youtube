import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/animated-section";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute h-full w-full bg-background">
          <div className="absolute h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/60 to-transparent top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/50 to-transparent bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
      <AnimatedSection className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative mx-auto w-fit">
            <div className="relative h-[450px] w-[380px] ">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute text-primary w-[150%] h-auto -top-[10%] -left-[25%] z-0">
                <path d="M89.37,25.43a12.63,12.63,0,0,0-8.92-8.93C73,15,50,15,50,15s-23,0-30.45,1.5A12.63,12.63,0,0,0,10.63,25.43C9.12,32.88,9.12,50,9.12,50s0,17.12,1.51,24.57a12.63,12.63,0,0,0,8.92,8.93C27,85,50,85,50,85s23,0,30.45-1.5a12.63,12.63,0,0,0,8.92-8.93C90.88,67.12,90.88,50,90.88,50S90.88,32.88,89.37,25.43Z" fill="currentColor"/>
                <path d="M42.42,61.54,65.3,50,42.42,38.46Z" fill="white" className="dark:fill-black"/>
              </svg>
              <div className="absolute inset-0 z-10 overflow-hidden rounded-[4rem]">
                <Image
                  src="/images/yehia-mohammed.png"
                  alt="Yehia Mohammed"
                  fill
                  className="object-cover"
                  data-ai-hint="professional man"
                />
              </div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="mb-4 text-lg text-foreground/80">مرحباً بك في موقع</p>
            <h1 className="mb-6 font-headline text-5xl font-bold tracking-tighter md:text-7xl">
              Yehia Mohammed
            </h1>
            <p className="mx-auto max-w-xl text-base text-foreground/70 md:text-lg">
              أنا يحيى محمد، وهذا مشروعي التعليمي القائم على مشاركة المعارف والتجارب التي أمر بها. أشارك شروحات في البرمجة، المونتاج، تنظيم الوقت، وتطوير الذات. الشيء الذي أهتم به إهتماماً كبيراً هو انني لا أنشر شيء الا بعد اختباره وتجربته أولاً.
            </p>
            <div className="mt-8 flex justify-center gap-4 md:justify-end">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="https://www.youtube.com/@yehia-official" target="_blank" rel="noopener noreferrer">
                   <PlayCircle className="ml-2 h-5 w-5" />
                  قناة يحيى محمد على يوتيوب
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
