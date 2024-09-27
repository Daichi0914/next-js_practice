import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

const getPostFromSlug = async (slug: string) => {
  return allPosts.find(post => post.slugAsParams === slug);
};

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const post = await getPostFromSlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <div>{post.title}</div>
      <div>{post.description}</div>
    </div>
  );
};

export default PostPage;
