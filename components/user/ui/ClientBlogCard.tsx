"use client";

import BlogCard from "./BlogCard";

interface ClientBlogCardProps {
  date: string;
  author: string;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export default function ClientBlogCard({ date, author, title, description, imageUrl, slug }: ClientBlogCardProps) {
  return (
    <BlogCard
      date={date}
      author={author}
      title={title}
      description={description}
      imageUrl={imageUrl}
      onClick={() => {
        window.location.href = `/blogs/${slug}`;
      }}
    />
  );
}