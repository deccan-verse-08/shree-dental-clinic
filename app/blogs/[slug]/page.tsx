
import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import BlogHero from "./_components/BlogHero"; 
import BlogCTA from "./_components/BlogCTA";
import Link from "next/link";

interface PageProps {
  params: { slug: string };
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 font-serif">
      
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        {post.cover ? (
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover brightness-90"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900" />
        )}

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <BlogHero 
            title={post.title} 
            author={post.author} 
            date={post.date} 
            tags={post.tags} 
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-24 flex flex-col gap-16">
        {post.excerpt && (
          <div className="relative bg-gradient-to-r from-white/70 via-white/50 to-white/70 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/30">
            <p className="text-2xl md:text-3xl text-gray-700 italic border-l-4 border-blue-500 pl-6">
              {post.excerpt}
            </p>
          </div>
        )}

        <div className="prose prose-lg max-w-none prose-headings:text-blue-900 prose-a:text-blue-600 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:text-gray-700 prose-li:text-gray-700 prose-li:leading-relaxed bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20">
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </div>

        <div className="flex justify-center">
          <BlogCTA href="/contact" text="Make an Appointment" />
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/blogs">
            <button className="px-8 py-3 rounded-full bg-white/50 backdrop-blur-md border border-white/30 text-blue-900 font-semibold hover:bg-white/70 transition-all">
              ← Back to Blogs
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}
