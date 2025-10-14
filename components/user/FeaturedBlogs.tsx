import { getAllPosts } from "@/lib/posts";
import ClientBlogCard from "./ui/ClientBlogCard";
import SectionHeading from "./ui/SectionHeading";
import BlogButton from "../ui/buttonBlog";
export default async function FeaturedBlogs() {
  // Get all posts and take the latest 3
  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Our Latest Insights" />
      


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 justify-items-center">
          {latestPosts.map((post) => (
            <ClientBlogCard
              key={post.slug}
              slug={post.slug}
              date={new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
              author={post.author}
              title={post.title}
              description={post.excerpt || ''}
              imageUrl={post.cover || '/images/default-blog.jpg'}
            />
          ))}
        </div>
        <BlogButton/>
      </div>
    </section>
  );
}