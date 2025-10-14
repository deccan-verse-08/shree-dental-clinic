
import { getAllPosts } from "@/lib/posts";
import BlogGrid from "./BlogDisplay";


export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
    
    

    <section className="min-h-screen py-24 bg-gradient-to-b from-white via-blue-50 to-blue-100">
     

        <BlogGrid posts={posts} />
     
    </section>


    </>
  );
}
