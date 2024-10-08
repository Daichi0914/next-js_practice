import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

const TopSection = () => {
  return (
    <section id="top" className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
      <div className="container px-8 mx-auto text-center flex flex-col items-center gap-4 max-w-[64rem]">
        <Link
          href={siteConfig.links.x}
          className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm">
          Xをフォローする
        </Link>
        <h1
          className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Post Writer
        </h1>
        <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
          このアプリケーションはNext.js AppRouterで作られたものです。ユーザーは自由に投稿をポストすることができます。
        </p>
        <div className="space-x-4">
          <Link
            href={'/login'}
            className={cn(buttonVariants({ size: 'lg' }))}
          >
            はじめる
          </Link>
          <Link
            href={siteConfig.links.github}
            className={cn(buttonVariants({ size: 'lg', variant: 'outline' }))}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
