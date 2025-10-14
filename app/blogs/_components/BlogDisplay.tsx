"use client";

import BlogCard from "@/components/user/ui/BlogCard";
import { useRouter } from "next/navigation";
import type { BlogPost } from "@/lib/posts";
import { motion } from "framer-motion";

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  const router = useRouter();

  if (posts.length === 0) {
    return (
      <div className="text-center text-gray-600">
        <p>No blog posts found.</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl sm:text-5xl md:text-7xl font-bold mb-2 mt-8"
      >
        Our Blogs
      </motion.h1>
        <motion.div
  className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-15"
  initial={{ width: "10%" }}
  animate={{ width: "40%" }} // increase width
  transition={{ duration: 1.2, delay: 0.4, ease: [0.22,1,0.36,1] }}
/>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 justify-items-center">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          date={new Date(post.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
          author={post.author}
          title={post.title}
          description={post.excerpt || ''}
          imageUrl={post.cover || '/images/default-blog.jpg'}
          onClick={() => router.push(`/blogs/${post.slug}`)}
        />
      ))}
    </div>
    </div>
  );
}