import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import MainNav from '@/components/MainNav';

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="container px-8 mx-auto z-40 bg-background">
        <div className="h-20 py-6 flex items-center justify-between">
          <MainNav />
          <nav>
            <Link
              href={'/login'}
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
            >
              ログイン
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default MarketingLayout;
