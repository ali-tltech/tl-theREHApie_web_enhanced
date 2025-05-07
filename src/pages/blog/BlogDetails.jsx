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

export const BlogDetails = () => {
  const location = useLocation();
  const [blog,setBlog]=useState(null)
  const {id}=useParams()
 const blogs = [
    {
      id:1,
         src: blogImage1,
         userImage: userImage1,
         author: "theREHApie Consultants",
         date: "June 21, 2024",
         href: "/blog-details",
         title: "The Future of Rehabilitation",
         description: " How Technology is Transforming Patient Recovery",
         introduction:"The rehabilitation industry is undergoing a revolution, thanks to cutting-edge advancements in medical technology. From AI-driven therapy solutions to robotic-assisted rehabilitation, technology is making recovery faster and more effective than ever before.",
         keyPoints: [
           "The rise of AI-powered physiotherapy tools",
           "The role of robotics in improving mobility and motor function",
           "How virtual reality is enhancing rehabilitation exercises",
           "The impact of smart wearables for real-time progress tracking"
         ],
         conclusion:"The future of rehabilitation lies in a seamless blend of human expertise and technological innovation."
          

       },
       {
        id:2,
         src: blogImage2,
         userImage: userImage1,
         author: "theREHApie Consultants",
         date: "March 5, 2024",
         href: "/blog-details",
         title: "Choosing the Right Rehabilitation Equipment",
        description: " A Buyer’s Guide for Healthcare Providers ",
        introduction:
        "With a vast array of rehabilitation equipment available, how do healthcare providers ensure they are making the best investment? This guide walks you through the key factors to consider when purchasing rehab equipment.",
      keyPoints: [
        "Understanding patient needs and treatment goals",
        "The importance of durability, ease of use, and compliance with medical standards",
        "Cost-effective solutions vs. premium equipment – what works best for your facility?",
        "Training and after-sales support: Why it matters"
      ],
      conclusion:
        "The right rehabilitation equipment can significantly enhance patient recovery and improve clinical outcomes."   
       
    },
       {
        id:3,
         src: blogImage3,
         userImage: userImage1,
         author: "theREHApie Consultants",
         date: "March 10, 2024",
         href: "/blog-details",
         title: "The Middle East: A Growing Market for Rehabilitation Technology",
         description: "Unlocking Opportunities: Navigating the Middle East Rehab Tech Market ",
         introduction:
      "The demand for rehabilitation solutions in the Middle East is on the rise, driven by increased awareness, growing healthcare infrastructure, and government investments in medical innovation.",
    keyPoints: [
      "Market trends and the rising need for rehab solutions in the region",
      "Challenges manufacturers face in entering the Middle Eastern market",
      "How partnering with heREHApie Consultants can help bridge market gaps",
      "Regulatory considerations and compliance in different Middle Eastern countries"
    ],
    conclusion:
      "With the right strategy and market insights, manufacturers can successfully expand into the Middle East and cater to the growing demand for rehabilitation solutions."
       
        },
       {
        id:4,
         src: blogImage4,
         userImage: userImage1,
         author: "theREHApie Consultants",
         date: "March 15, 2024",
         href: "/blog-details",
         title: "How to Optimize Your Rehabilitation Product Distribution Strategy",
         description: " Maximizing Reach, Enhancing Care: Optimize Your Rehab Product Distribution",
         introduction:
         "Distributors play a crucial role in getting rehab products to the right healthcare providers. However, a well-structured strategy is essential for maximizing sales and ensuring smooth distribution.",
       keyPoints: [
         "How to identify and partner with the right manufacturers",
         "Managing logistics, warehousing, and supply chain challenges",
         "Effective sales and marketing techniques for rehabilitation products",
         "Leveraging technology for better customer engagement and inventory management"
       ],
       conclusion:
         "A streamlined distribution strategy can help distributors increase revenue while ensuring quality rehab products reach those in need."
    },
       {
        id:5,
         src: blogImage5,
         userImage: userImage1,
         author: "theREHApie Consultants",
         date: "March 20, 2024",
         href: "/blog-details",
         title: "Overcoming Challenges in the Rehabilitation Industry",
         description: " A Manufacturer’s Perspective ",
         introduction:
         "Manufacturers in the rehabilitation sector face multiple challenges, from market entry barriers to regulatory compliance and distribution struggles. Here’s how to navigate them effectively.",
       keyPoints: [
         "Understanding country-specific regulations and market needs",
         "The importance of working with experienced distributors and consultants",
         "Pricing strategy: Balancing affordability with profitability",
         "How innovation and technology can help manufacturers gain a competitive edge"
       ],
       conclusion:
         "Manufacturers that proactively address these challenges can unlock new growth opportunities and make a meaningful impact in the rehab industry."
     }
  ];
  useEffect(() => {
    const numericId = Number(id);
    const selectedBlog = blogs.find((val) => val.id === numericId);
    setBlog(selectedBlog || null); 
  }, [id]);
 
  
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
            {/* Blog Cover Image */}
            <div className="td-postbox-thumb mb-60">
              <img className="w-100" src={blog?.src} alt="blog cover" />
            </div>

            {/* Blog Content */}
            <div className="td-postbox-content-2">
              <h2 className="mb-3 td-blog-title-new" style={{fontWeight:"bolder"}}>{blog?.title}</h2>
              <p><strong>By {blog?.author} | {blog?.date}</strong></p>
              <p className="mb-4">{blog?.introduction}</p>

              <h3 className="mb-3">Key Points:</h3>
              <ul>
                {blog.keyPoints && blog.keyPoints?.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <h3 className="mt-4">Conclusion</h3>
              <p>{blog.conclusion}</p>
            </div>
          </div>
        </div>
      </BlogLayout>
    </Layout>
   
  );
};
