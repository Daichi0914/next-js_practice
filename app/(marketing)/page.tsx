import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import NextIcon from '@/assets/svg/NextIcon';
import ReactIcon from '@/assets/svg/ReactIcon';
import PlanetScaleIcon from '@/assets/svg/PlanetScaleIcon';
import TailwindIcon from '@/assets/svg/TailwindIcon';
import OAuthIcon from '@/assets/svg/OAuthIcon';
import StripeIcon from '@/assets/svg/StripeIcon';

const features = [
  {
    icon: <NextIcon />,
    title: 'Next.js',
    body: 'Lorem, ipsum dolor site amet consectetur adipiscing.'
  },
  {
    icon: <ReactIcon />,
    title: 'React',
    body: 'Lorem, ipsum dolor site amet consectetur adipiscing.'
  },
  {
    icon: <PlanetScaleIcon />,
    title: 'PlanetScale',
    body: 'Lorem, ipsum dolor site amet consectetur adipiscing.'
  },
  {
    icon: <TailwindIcon />,
    title: 'TailwindCSS',
    body: 'Lorem, ipsum dolor site amet consectetur adipiscing.'
  },
  {
    icon: <OAuthIcon />,
    title: 'OAuth',
    body: 'Lorem, ipsum dolor site amet consectetur adipiscing.'
  },
  {
    icon: <StripeIcon />,
    title: 'Stripe',
    body: 'Lorem, ipsum dolor site amet consectetur adipiscing.'
  }
];

const page = () => {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
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

      <section
        id="features"
        className="container p-8 md:py-12 lg:py-24 bg-slate-50 space-y-6 mx-auto"
      >
        <div className="text-center space-y-6 max-w-[58rem] mx-auto">
          <h2 className="font-extrabold text-3xl md:text-6xl">
            サービスの特徴
          </h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            このプロジェクトはモダンな技術スタックを使って作られたWebアプリケーションです。Next.js AppRouterやcontent layerを利用してマークダウン形式でブログ投稿ができます。
          </p>
        </div>

        <div className="mx-auto grid items-stretch sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[64rem]">
          {features.map((feature, index) =>
            <div key={index} className="bg-white border rounded-ld flex flex-col gap-2 md:p-8 p-4">
              {feature.icon}
              <div className="space-y-2">
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground break-words">{feature.body}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default page;
