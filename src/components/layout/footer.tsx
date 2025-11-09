import { Youtube, Instagram, Linkedin, Mail, Twitter, Facebook, Send } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { Icon: Instagram, href: 'https://instagram.com', 'aria-label': 'Instagram' },
  { Icon: Send, href: 'https://telegram.org', 'aria-label': 'Telegram' },
  { Icon: Youtube, href: 'https://www.youtube.com/@yehia-official', 'aria-label': 'YouTube' },
  { Icon: Linkedin, href: 'https://linkedin.com', 'aria-label': 'LinkedIn' },
  { Icon: Twitter, href: 'https://twitter.com', 'aria-label': 'Twitter' },
  { Icon: Facebook, href: 'https://facebook.com', 'aria-label': 'Facebook' },
];

export function Footer() {
  return (
    <footer className="bg-[#343434] text-white relative">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex flex-col md:flex-row-reverse items-center gap-4 text-center md:text-right">
              <p className="text-lg">تابعني على منصات التواصل المختلفة</p>
              <div className="flex gap-4">
                {socialLinks.map(({ Icon, href, ...props }) => (
                  <Link key={href} href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-6 w-6 text-white transition-colors hover:text-primary" />
                    <span className="sr-only">{props['aria-label']}</span>
                  </Link>
                ))}
              </div>
          </div>
          
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
            <span className="font-bold">Yehia Mohammed</span>
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-red-600 border-b-[10px] border-b-transparent"></div>
            </div>
          </Link>
          
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            جميع الحقوق محفوظة لـ Yehia Mohammed سنة {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
