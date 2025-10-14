import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// Define the post directory path
const postsDirectory = path.join(process.cwd(), "content/posts");

// Define TypeScript interfaces for better type safety
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt?: string;
  cover?: string;
  tags?: string[];
}

export interface BlogPostWithContent extends BlogPost {
  contentHtml: string;
}

// Get all blog posts with metadata
export function getAllPosts(): BlogPost[] {
  try {
    // Read all files from the posts directory
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName): BlogPost => {
        // Remove ".md" from filename to get slug
        const slug = fileName.replace(/\.md$/, "");
        
        // Read markdown file content
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        
        // Parse markdown metadata
        const { data } = matter(fileContents);

        // Validate and return post metadata
        return {
          slug,
          title: data.title ?? "Untitled",
          date: data.date ?? new Date().toISOString(),
          author: data.author ?? "Anonymous",
          excerpt: data.excerpt,
          cover: data.cover,
          tags: data.tags ?? [],
        };
    });

    // Sort posts by date in descending order
    return posts.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
  } catch (error) {
    console.error("Error getting all posts:", error);
    return [];
  }
}

// Get a single blog post by its slug
export async function getPostBySlug(slug: string): Promise<BlogPostWithContent | null> {
  try {
    // Build the file path
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Parse the markdown content
    const { data, content } = matter(fileContents);
    
    // Convert markdown to HTML
    const processedContent = await remark()
      .use(html, { sanitize: true }) // Enable sanitization
      .process(content);
    
    const contentHtml = processedContent.toString();

    // Return the post with content
    return {
      slug,
      title: data.title ?? "Untitled",
      date: data.date ?? new Date().toISOString(),
      author: data.author ?? "Anonymous",
      excerpt: data.excerpt,
      cover: data.cover,
      tags: data.tags ?? [],
      contentHtml,
    };
  } catch (error) {
    console.error(`Error getting post ${slug}:`, error);
    return null;
  }
}
