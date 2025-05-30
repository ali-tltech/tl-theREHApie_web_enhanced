import React, { useEffect, useState } from "react";
import { Layout } from "../../layouts/Layout";
import { ServiceLayout } from "../../layouts/ServiceLayout";
import { useParams } from "react-router-dom";
import { serviceByTitle } from "../../api/api"; // Adjust the path as needed

export const ServiceDetails = () => {
  const [serviceData, setServiceData] = useState([
    "Manufactures",
    "Distributors",
    "Healthcare Providers",
  ]);
  const { category } = useParams();

  const [data, setData] = useState({
    heading: "",
    title: "",
    img: "",
    description: "",
    content: "", // for HTML content from backend
  });

  const fetchServiceDetails = async () => {
    try {
      // Map URL param to backend title if needed
      const categoryMap = {
        healthcareproviders: "Healthcare Providers",
        distributors: "Distributors",
        manufactures: "Manufactures",
      };

      // Use mapped title or fallback to original category param
      const titleParam = categoryMap[category.toLowerCase()] || category;
// alert(titleParam)
      const response = await serviceByTitle(titleParam);
      const service = response?.data?.data;
      console.log(service, "data");

      setData({
        heading: service?.title || "",
        title: service?.tagline || "",
        img: service?.image || "",
        description: service?.taglineDescription || "",
        content: service?.content || "", // HTML content string
      });
    } catch (error) {
      console.error("Error fetching service details:", error);
    }
  };

  useEffect(() => {
    if (category) {
      fetchServiceDetails();
    }
  }, [category]);

  return (
    <Layout breadcrumbTitle={data.heading} breadcrumbSubtitle="Service Details">
      <ServiceLayout serviceData={serviceData}>
        <div className="td-service-details-wrap">
          <div className="td-service-details-thumb mb-60">
            <img className="w-100" src={data.img} alt="details" />
          </div>

          <div className="td-service-details-content mb-60">
            <h3 className="td-service-details-title mb-25">{data.title}</h3>
            <p>{data.description}</p>
          </div>

          <div className="td-service-help-list mb-60">
            <div
              className="td-service-details-content"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          </div>
        </div>
      </ServiceLayout>
    </Layout>
  );
};
