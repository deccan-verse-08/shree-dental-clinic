
import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import BlogHero from "./_components/BlogHero"; 
import BlogCTA from "./_components/BlogCTA";
import Link from "next/link";
import { FiCalendar, FiUser, FiTag, FiArrowLeft } from 'react-icons/fi';
import ShareButton from './_components/ShareButton';

interface PageProps {
  params: { slug: string };
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Navigation Bar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <Link href="/blogs" className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition-colors">
            <FiArrowLeft className="w-4 sm:w-5 h-4 sm:h-5" />
            <span className="text-sm sm:text-base font-medium">Back to Blogs</span>
          </Link>
          <ShareButton title={post.title} />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] h-[60vh] sm:h-[65vh] md:h-[70vh] overflow-hidden">
        {post.cover ? (
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-violet-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center overflow-y-auto scrollbar-hide">
            <BlogHero 
              title={post.title} 
              author={post.author} 
              date={post.date} 
              tags={post.tags} 
            />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Meta Information */}
        <div className="flex flex-wrap gap-4 sm:gap-6 items-center text-slate-600 mb-8 sm:mb-12 text-sm sm:text-base">
          <div className="flex items-center space-x-2">
            <FiUser className="w-4 h-4 flex-shrink-0" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiCalendar className="w-4 h-4 flex-shrink-0" />
            <time>{new Date(post.date).toLocaleDateString("en-US", { 
              month: "long", 
              day: "numeric", 
              year: "numeric" 
            })}</time>
          </div>
          {post.tags && (
            <div className="flex flex-wrap items-center gap-2">
              <FiTag className="w-4 h-4 flex-shrink-0" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-blue-50 text-blue-700 rounded-full whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Excerpt */}
        {post.excerpt && (
          <blockquote className="text-lg sm:text-xl md:text-2xl text-slate-700 italic border-l-4 border-blue-500 pl-4 sm:pl-6 mb-8 sm:mb-12">
            {post.excerpt}
          </blockquote>
        )}

        {/* Main Content */}
        <div className="prose prose-base sm:prose-lg max-w-none 
          prose-h1:text-2xl sm:prose-h1:text-3xl md:prose-h1:text-4xl prose-h1:font-bold prose-h1:text-slate-900 prose-h1:mb-6 sm:prose-h1:mb-8
          prose-h2:text-xl sm:prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:font-semibold prose-h2:text-slate-800 prose-h2:mb-4 sm:prose-h2:mb-6 prose-h2:mt-8 sm:prose-h2:mt-12
          prose-h3:text-lg sm:prose-h3:text-xl md:prose-h3:text-2xl prose-h3:font-semibold prose-h3:text-slate-800 prose-h3:mb-3 sm:prose-h3:mb-4 prose-h3:mt-6 sm:prose-h3:mt-8
          prose-p:text-slate-600 prose-p:text-base sm:prose-p:text-lg prose-p:leading-relaxed prose-p:mb-4 sm:prose-p:mb-6
          prose-a:text-blue-600 prose-a:no-underline prose-a:font-medium hover:prose-a:text-blue-700
          prose-strong:text-slate-800 prose-strong:font-semibold
          prose-ul:my-4 sm:prose-ul:my-6 prose-ul:list-disc prose-ul:pl-4 sm:prose-ul:pl-6
          prose-ol:my-4 sm:prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-4 sm:prose-ol:pl-6
          prose-li:text-slate-600 prose-li:mb-2
          prose-blockquote:border-l-4 prose-blockquote:border-blue-500 
          prose-blockquote:bg-blue-50 prose-blockquote:p-4 sm:prose-blockquote:p-6 prose-blockquote:rounded-r-lg
          prose-blockquote:text-slate-700 prose-blockquote:italic prose-blockquote:my-6 sm:prose-blockquote:my-8
          prose-img:rounded-xl sm:prose-img:rounded-2xl prose-img:shadow-lg sm:prose-img:shadow-xl prose-img:my-6 sm:prose-img:my-8
          prose-pre:bg-slate-900 prose-pre:rounded-lg sm:prose-pre:rounded-xl prose-pre:p-4 sm:prose-pre:p-6 prose-pre:shadow-lg
          prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1.5 sm:prose-code:px-2 prose-code:py-0.5 prose-code:rounded
          [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl border border-slate-100">
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-violet-50 rounded-xl sm:rounded-2xl border border-blue-100">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Ready to Transform Your Smile?</h3>
          <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6">Schedule your appointment today and experience our expert dental care services.</p>
          <BlogCTA href="/contact" text="Book Your Consultation" />
        </div>

        {/* Navigation */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200">
          <Link href="/blogs" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
            <FiArrowLeft className="w-4 sm:w-5 h-4 sm:h-5" />
            <span className="text-sm sm:text-base font-medium">Browse More Articles</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
