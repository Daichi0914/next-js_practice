import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Mdx from '@/components/Blog/Mdx';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

const getPostFromSlug = async (slug: string) => {
  return allPosts.find(post => post.slugAsParams === slug);
};

// MEMO: Next.jsが認識する関数名（https://nextjs.org/docs/app/api-reference/functions/generate-metadata）
export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const page = await getPostFromSlug(params.slug);
  if (!page) {
    return {};
  }
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      type: "article",
      locale: "ja",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [`${siteConfig.url}/og.png`]
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: [`${siteConfig.url}/og.png`],
      creator: '@EarthPro2'
    }
  };
};

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const post = await getPostFromSlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="container max-w-3xl p-6 lg:p-10 mx-auto">
      <div>
        {post.date && (<time>Published on {format(post.date, 'yyyy/MM/dd')}</time>)}
        <h1 className="mt-2 font-extrabold text-4xl lg:text-5xl leading-tight">
          {post.title}
        </h1>
      </div>
      {post.image && <Image
        src={post.image}
        alt={post.title}
        width={720}
        height={405}
        className="my-8 border rounded-md bg-muted"
      />}
      <Mdx code={post.body.code} />
      <hr className="mt-12" />
      <div className="py-6 text-center lg:py-10">
        <Link
          href={'/blog'}
          className={cn(buttonVariants({ variant: 'ghost' }))}
        >
          すべての記事を見る
        </Link>
      </div>
    </article>
  );
};

export default PostPage;
