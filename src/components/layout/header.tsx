'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Code2, Menu, Youtube } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import * as React from 'react';

const navLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/courses', label: 'كورس front end' },
  { href: '/blog', label: 'المدونة' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const isHomePage = pathname === '/';

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-colors duration-300",
      isHomePage ? "border-transparent bg-transparent" : "border-border/10 bg-background/80 backdrop-blur-lg"
    )}>
      <div className="container flex h-20 items-center">
        <div className="flex flex-1 items-center justify-start gap-2 md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 p-6" dir="rtl">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsSheetOpen(false)}>
                    <Code2 className="h-6 w-6 text-primary" />
                    <span className="font-bold">Yehia Mohammed</span>
                  </Link>
                  <nav className="grid gap-4">
                    {navLinks.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setIsSheetOpen(false)}
                        className={cn(
                          'text-lg font-semibold transition-colors hover:text-primary',
                          pathname === href ? 'text-primary' : 'text-foreground'
                        )}
                      >
                        {label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
        </div>

        <nav className="hidden items-center md:flex md:gap-4">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={cn('text-base font-medium transition-colors hover:text-primary',
              pathname === href ? 'text-primary' : 'text-foreground/80'
            )}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
           <Link href="https://www.youtube.com/@yehia-official" target="_blank" rel="noopener noreferrer" className="mr-6 flex items-center gap-2">
            <span className="font-bold text-lg hidden sm:inline">Yehia Mohammed</span>
            <Youtube className="h-6 w-6 text-primary" />
          </Link>
        </div>
      </div>
    </header>
  );
}
