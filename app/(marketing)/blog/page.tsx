import { allPosts } from 'contentlayer/generated';
import Image from 'next/image';
import { format } from 'date-fns';
import Link from 'next/link';

const BlogPage = () => {
  return (
    <div className="container max-w-4xl p-6 lg:p-10 mx-auto">
      <div className="space-y-4">
        <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight">
          Blog🚀
        </h1>
        <p className="text-muted-foreground text-xl">
          Content LayerとMDXで書いています。
        </p>
      </div>
      <hr className="my-8" />
      <div className="grid sm:grid-cols-2 gap-10">
        {allPosts.map(post =>
          <Link key={post._id} href={post.slug}>
            <article className="flex flex-col space-y-2">
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted"
                />
              )}
              <h2 className="text-2xl font-extrabold">{post.title}</h2>
              {post.description && <p className="text-muted-foreground">{post.description}</p>}
              {post.date && <p className="text-sm text-muted-foreground">{format(post.date, 'yyyy/MM/dd')}</p>}
            </article>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
