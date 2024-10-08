import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { marketingConfig } from '@/config/marketing';
import MainNav from '@/components/TopPage/MainNav';
import Footer from '@/components/TopPage/Footer';

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="container px-8 mx-auto z-40 bg-background">
        <div className="h-20 py-6 flex items-center justify-between">
          <MainNav items={marketingConfig.mainNav} />
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
      <Footer />
    </div>
  );
};

export default MarketingLayout;
