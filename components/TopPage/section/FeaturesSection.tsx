import Icons from '@/components/icons';

const features = [
  {
    icon: <Icons.next width="45" height="45" />,
    title: 'Next.js',
    body: 'Lorem, ipsum dolor site amet consectetur adipiscing.'
  },
  {
    icon: <Icons.react width="45" height="45" />,
    title: 'React',
    body: 'Lorem, ipsum dolor site amet consectetur adipiscing.'
  },
  {
    icon: <Icons.planetScale width="45" height="45" />,
    title: 'PlanetScale',
    body: 'Lorem, ipsum dolor site amet consectetur adipiscing.'
  },
  {
    icon: <Icons.tailwind width="45" height="45" />,
    title: 'TailwindCSS',
    body: 'Lorem, ipsum dolor site amet consectetur adipiscing.'
  },
  {
    icon: <Icons.oAuth width="45" height="45" />,
    title: 'OAuth',
    body: 'Lorem, ipsum dolor site amet consectetur adipiscing.'
  },
  {
    icon: <Icons.stripe width="45" height="45" />,
    title: 'Stripe',
    body: 'Lorem, ipsum dolor site amet consectetur adipiscing.'
  }
];

const FeaturesSection = () => {
  return (
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

      <div className="mx-auto md:max-w-[58rem] text-center">
        <p className="text-muted-foreground sm:text-lg sm:leading-7">
          Post Writerはログインするとブログ投稿ができるようになります。
        </p>
      </div>
    </section>
  );
};

export default FeaturesSection;
