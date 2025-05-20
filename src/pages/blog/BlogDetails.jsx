import { useLocation, useParams } from "react-router-dom";
import { Layout } from "../../layouts/Layout";
import { BlogLayout } from "../../layouts/BlogLayout";
import { useEffect, useState } from "react";
import blogImage1 from "../../assets/img/blog/blogsidebar/blog-1.jpg";
import blogImage2 from "../../assets/img/blog/blogsidebar/blog-2.jpg";
import blogImage3 from "../../assets/img/blog/blogsidebar/blog-3.jpg";
import blogImage4 from "../../assets/img/blog/blogsidebar/blog-4.jpg";
import blogImage5 from "../../assets/img/blog/blogsidebar/blog-5.jpg";
import userImage1 from "../../assets/img/blog/blogsidebar/06.jpg";
import { blogById } from "../../api/api";

export const BlogDetails = () => {
  const location = useLocation();
  const [blog, setBlog] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    async function fectchBlog(id) {
      try {
        const response = await blogById(id)
        setBlog(response.data.data)
        console.log(response.data.data,"resss");
        
      } catch (error) {
        console.error(error);

      }
    }
    fectchBlog(id)
  }, [])


  if (!blog) {
    return (
      <Layout breadcrumbTitle={"Blog Not Found"} breadcrumbSubtitle={"Blog Details"}>
        <BlogLayout>
          <p>Blog not found. Please go back to the blog page.</p>
        </BlogLayout>
      </Layout>
    );
  }

  return (
    <Layout breadcrumbTitle={blog?.title} breadcrumbSubtitle={"Blog Details"}>
      <BlogLayout>
       <div className="td-postbox-wrapper td-postbox-wrapper-space td-postbox-wrapper-space-2">
  <div className="td-postbox-item mb-60">
   
    <div className="td-postbox-thumb mb-60">
      <img className="w-100" src={blog?.image} alt="blog cover" />
    </div>

    
    <div className="td-postbox-content-2">
      <h2 className="mb-3 td-blog-title-new" style={{ fontWeight: "bolder" }}>
        {blog?.title}
      </h2>

      <p>
        <strong>
          By {blog?.author} |{" "}
          {new Date(blog?.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </strong>
      </p>

      {/* Introduction */}
      <p className="mb-4">{blog?.excerpt}</p>

      

      {/* Content (HTML) */}
      {blog?.content && (
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      )}

    
    </div>
  </div>
</div>

      </BlogLayout>
    </Layout>

  );
};
