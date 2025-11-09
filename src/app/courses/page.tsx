import { AnimatedSection } from "@/components/shared/animated-section";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Briefcase, Code, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
    title: "كورس Front End | " + siteConfig.name,
    description: "بوابتك لإتقان تطوير الواجهات الأمامية من خلال المشاريع العملية والمجتمع الداعم.",
};


const features = [
  {
    title: "تجاوز التعلم السلبي",
    description: "توقف عن المشاهدة وابدأ في الإنشاء. ابنِ مشاريع احترافية تطور مهاراتك البرمجية الحقيقية من خلال الممارسة العملية.",
    imageUrl: "/images/feature-passive-learning.png",
    imageHint: "coding practice",
  },
  {
    title: "أنشئ معرض أعمال يساعدك في الحصول على وظيفة",
    description: "ابنِ مشاريع مذهلة بتصاميم احترافية. يخبرنا مسؤولو التوظيف أن نماذج الأعمال هذه تثير إعجابهم باستمرار في المقابلات من خلال إظهار القدرات الواقعية.",
    imageUrl: "/images/feature-portfolio-hire.png",
    imageHint: "impressive portfolio",
  },
  {
    title: "أتقن سير عمل التطوير المدعوم بالذكاء الاصطناعي",
    description: "تدرب على أدوات الذكاء الاصطناعي التي يستخدمها 76% من المطورين يوميًا. تعلم العمل بفعالية مع Cursor و GitHub Copilot و ChatGPT ومساعدين آخرين مع الحفاظ على جودة الكود ومهارات حل المشكلات.",
    imageUrl: "/images/feature-ai-workflows.png",
    imageHint: "AI coding",
  },
  {
    title: "انضم إلى مجتمع داعم من المطورين",
    description: "تواصل مع أقرانك لمراجعة الأكواد والمشورة المهنية والصداقة. تغلب على متلازمة المحتال جنبًا إلى جنب مع المطورين الذين يفهمون رحلتك، مسترشدين بالموجهين الذين ساروا في هذا الطريق.",
    imageUrl: "/images/feature-developer-community.png",
    imageHint: "developer community",
  }
];

const proFeatures = [
    {
        icon: <MessageSquare className="h-10 w-10 text-primary" />,
        title: "Level up faster with AI-powered feedback",
        description: "Our AI-enhanced reports spot up to 3x more improvement opportunities on every submission, giving you personalized insights that help you level up faster.",
    },
    {
        icon: <Briefcase className="h-10 w-10 text-primary" />,
        title: "Build portfolio projects that get you hired",
        description: "Create multi-page websites, interactive dashboards, and full-stack applications with premium challenges that make your portfolio stand out to employers.",
    },
    {
        icon: <Code className="h-10 w-10 text-primary" />,
        title: "Master the design-to-code workflow pros use",
        description: "Learn to translate Figma designs into pixel-perfect code using the same detailed specs and professional workflow that developers use in real teams.",
    }
];

export default function CoursesPage() {
  return (
    <div className="container py-12 md:py-20">
      <AnimatedSection>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 font-headline text-center">
          لماذا يختار المطورون كورسات Yehia Mohammed
        </h1>
        <p className="max-w-xl mx-auto text-lg text-foreground/70 mb-16 text-center">
          بوابتك لإتقان تطوير الواجهات الأمامية من خلال المشاريع العملية والمجتمع الداعم.
        </p>
      </AnimatedSection>
      
      <div className="space-y-20 md:space-y-32">
        {features.map((feature, index) => {
          const isEven = index % 2 === 0;
          return (
            <AnimatedSection key={feature.title} delay={index * 150}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className={cn(
                  "text-center md:text-right",
                  isEven ? 'md:order-2' : 'md:order-1'
                )}>
                  <h2 className="text-3xl font-bold mb-4 font-headline">{feature.title}</h2>
                  <p className="text-lg text-foreground/80">{feature.description}</p>
                </div>
                <div className={cn(
                  "relative aspect-[4/3]",
                  isEven ? 'md:order-1' : 'md:order-2'
                )}>
                  <div className="bg-secondary p-4 rounded-xl shadow-lg h-full">
                      <Image
                          src={feature.imageUrl}
                          alt={feature.title}
                          fill
                          className="rounded-lg object-cover"
                          data-ai-hint={feature.imageHint}
                      />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )
        })}
      </div>

      <AnimatedSection className="mt-20 md:mt-32">
        <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 font-headline">
                Fast-track your developer career with <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-lg">PRO</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-foreground/70 mb-12">
                Get AI-powered feedback on every solution, build portfolio-worthy projects, and master professional workflows with complete Figma files—everything you need to level up faster.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {proFeatures.map((feature, index) => (
                <Card key={index} className="bg-secondary/50 border-border/50 text-center p-8">
                    <CardHeader className="flex flex-col items-center justify-center p-0 mb-6">
                        <div className="bg-primary/10 p-4 rounded-full mb-4">
                           {feature.icon}
                        </div>
                        <CardTitle className="text-xl font-bold text-foreground">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <p className="text-foreground/80">{feature.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
