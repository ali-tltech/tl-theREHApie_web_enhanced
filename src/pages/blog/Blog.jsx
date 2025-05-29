import React, { useEffect, useState } from "react";
import { Layout } from "../../layouts/Layout";
import { BlogLayout } from "../../layouts/BlogLayout";
import { BlogItem } from "../../components/blogs/BlogItem";
import blogImage1 from "../../assets/img/blog/blogsidebar/blog-1.jpg";
import blogImage2 from "../../assets/img/blog/blogsidebar/blog-2.jpg";
import blogImage3 from "../../assets/img/blog/blogsidebar/blog-3.jpg";
import blogImage4 from "../../assets/img/blog/blogsidebar/blog-4.jpg";
import blogImage5 from "../../assets/img/blog/blogsidebar/blog-5.jpg";
import userImage1 from "../../assets/img/blog/blogsidebar/logo.png";
import HelmetReuse from "../../components/seo/HelmetComponent";
import { blog, seo } from "../../api/api";

export const Blog = () => {
  const blogs = [
    {
      id:1,
         src: blogImage1,
         userImage: userImage1,
         author: "theREHApie Consultants",
         date: "June 21, 2024",
         href: "/blog-details/1",
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
         href: "/blog-details/2",
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
         href: "/blog-details/3",
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
         href: "/blog-details/4",
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
         href: "/blog-details/5",
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
  // const blogs = [
  //   {
  //     src: blogImage1,
  //     tag: "Finance",
  //     href: "/blog-details",
  //     title: "Spring is a passionate and determined group of monthly givers.",
  //     description: "A close-ended question restricts respondents to a set of answer options.",
  //     userImage: userImage1,
  //     userName: "Miranda H.",
  //     date: "November 21, 2024",
  //   },
  //   {
  //     src: blogImage2,
  //     tag: "Business",
  //     href: "/blog-details",
  //     title: "Business consultants employ a variety of problem-solving methods",
  //     description: "A close-ended question restricts respondents to a set of answer options.",
  //     userImage: userImage2,
  //     userName: "Miranda H.",
  //     date: "November 21, 2024",
  //   },
  //   {
  //     src: blogImage3,
  //     tag: "Consultancy",
  //     href: "/blog-details",
  //     title: "These include root cause analysis to address underlying problems",
  //     description: "A close-ended question restricts respondents to a set of answer options.",
  //     userImage: userImage3,
  //     userName: "Miranda H.",
  //     date: "November 21, 2024",
  //   },
  //   {
  //     src: blogImage4,
  //     tag: "Investment",
  //     href: "/blog-details",
  //     title: "SWOT analysis for identifying strengths, weaknesses, opportunities",
  //     description: "A close-ended question restricts respondents to a set of answer options.",
  //     userImage: userImage4,
  //     userName: "Miranda H.",
  //     date: "November 21, 2024",
  //   },
  //   {
  //     src: blogImage5,
  //     tag: "Insurance",
  //     href: "/blog-details",
  //     title: "Benchmarking against industry standards, data analysis for uncovering",
  //     description: "A close-ended question restricts respondents to a set of answer options.",
  //     userImage: userImage5,
  //     userName: "Miranda H.",
  //     date: "November 21, 2024",
  //   },
  // ];

  const blogsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [blogData,setBlogData]=useState([])
  const totalPages = Math.ceil(blogData.length / blogsPerPage);

  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const paginatedBlogs = blogData.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      
      
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  useEffect(()=>{
   async function fectchBlog(){
      try {
        const response = await blog()
        setBlogData(response.data.data)
      } catch (error) {
        console.error(error);
        
      }
    }
    fectchBlog()
  },[])
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
const [seoData, setSeodata] = useState(null)
  useEffect(() => {
    async function fetchSeo() {
      try {
        const response = await seo("blogs")
        setSeodata(response.data)        
      } catch (error) {
        console.error(error);

      }
    }
    fetchSeo()
  }, [])
  return (
    <Layout breadcrumbTitle={"Our Blogs"} breadcrumbSubtitle={"Blogs"}>
      <HelmetReuse
        title={seoData?.title}
        description={seoData?.description}
        keywords={seoData?.keywords}
        twitterImage={seoData?.twitterImage}
        twitterDescription={seoData?.twitterDescription}
        twitterTitle={seoData?.twitterTitle}
        ogImage={seoData?.ogImage}
        ogDescription={seoData?.ogDescription}
        ogTitle={seoData?.ogTitle}
      />


      <BlogLayout>
        {/* Blogs Section */}
        <div className="container">
      <div className="row">
        {paginatedBlogs.map((blog, index) => (
          <div key={index} className="col-12 col-md-6 mb-4">
            <BlogItem {...blog} />
          </div>
        ))}
      </div>
    </div>

        {/* Professional Pagination */}
        <div className="pagination-container">
          <nav className="pagination">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`pagination-btn ${currentPage === 1 ? "disabled" : ""}`}
            >
              &laquo; Previous
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`pagination-btn ${currentPage === index + 1 ? "active" : ""}`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`pagination-btn ${currentPage === totalPages ? "disabled" : ""}`}
            >
              Next &raquo;
            </button>
          </nav>
        </div>

        {/* Pagination Styles */}
        <style jsx>{`
          .pagination-container {
            display: flex;
            justify-content: center;
            margin-top: 20px;
          }
          .pagination {
            display: flex;
            gap: 8px;
          }
          .pagination-btn {
            padding: 8px 12px;
            border: 1px solid #ccc;
            background-color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            border-radius: 4px;
          }
          .pagination-btn:hover {
            background-color: #20282D;
            color: white;
            border-color: #20282D;
          }
          .pagination-btn.active {
            background-color: #20282D;
            color: white;
            font-weight: bold;
            border-color: #20282D;
          }
          .pagination-btn.disabled {
            cursor: not-allowed;
            opacity: 0.5;
          }
        `}</style>
      </BlogLayout>
    </Layout>
  );
};
