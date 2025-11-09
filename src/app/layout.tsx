import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import { Cairo } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { siteConfig } from '@/lib/config';

const fontSans = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Yehia Mohammed",
    "يحيى محمد",
    "frontend developer",
    "مطور واجهات أمامية",
    "React",
    "Next.js",
    "برمجة",
    "تصميم مواقع",
    "كورس",
  ],
  authors: [
    {
      name: "Yehia Mohammed",
      url: siteConfig.url,
    },
  ],
  creator: "Yehia Mohammed",
  openGraph: {
    type: "website",
    locale: "ar_AR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@yehia",
  },
  icons: {
    icon: "/favicon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" className="scroll-smooth">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <Link 
          href="mailto:example@example.com"
          className="fixed bottom-6 left-6 md:left-10 w-16 h-16 bg-[#4f46e5] rounded-full flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-transform z-50"
          aria-label="Email"
          >
          <Mail className="h-8 w-8" />
        </Link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteConfig.structuredData) }}
        />
      </body>
    </html>
  );
}
