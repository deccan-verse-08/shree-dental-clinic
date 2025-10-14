
import Navbar from "@/components/user/Navbar";
import BlogPageComponent from "./_components/BlogPage";
import Footer from "@/components/user/Footer";

export default async function BlogPage() {

  return( 
    <>
    <Navbar/>
  <BlogPageComponent />
  <Footer/>
  </>
);
}
