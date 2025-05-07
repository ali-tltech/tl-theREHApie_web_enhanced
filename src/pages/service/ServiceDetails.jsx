import React, { useEffect, useState } from "react";
import { Layout } from "../../layouts/Layout";
import { ServiceLayout } from "../../layouts/ServiceLayout";
import thumb from "../../assets/img/service/details/thumb.jpg";
import { ServiceDetailsAccordion } from "../../components/service/ServiceDetailsAccordion";
import { ServiceDetailsCircularProgress } from "../../components/service/ServiceDetailsCircularProgress";
import { useParams } from "react-router-dom";
import Distributions from "../../assets/img/service/details/DISTRIBUTION SERVICE 870X500.jpg";
import Health from "../../assets/img/service/details/HEALTH CARE PROVIDERS SERVICE 870X500.jpg";
import Manufacture from "../../assets/img/service/details/MANUFACTURES  SERVICE 870X500.jpg";

export const ServiceDetails = () => {
 
  const [serviceData,setServiceData]=useState(["Manufactures","Distributors","Healthcare Providers"])
  const { category } = useParams();
  const [data, setData] = useState({
    title: "",
    img: "",
    description: "",
    helpList: [], 
  });

  useEffect(() => {
    if (category === "manufactures") {
      setData({
        heading: "Manufactures",
        title: " Expanding Market Reach & Increasing Sales",
        img: Manufacture,
        description:
          "Breaking into the Middle Eastern rehabilitation and medical device market can be challenging without the right strategy, local expertise, and reliable partners. At theREHApie Consultants, we bridge this gap by providing end-to-end support to manufacturers looking to establish and scale their presence in this region.",
        helpList: [
          {
            title: "Identifying the Right Distributors",
            description: "Connecting you with trusted, well-established distribution partners.",
          },
          {
            title: "Market Research & Entry Strategies",
            description: "Analyzing demand, competition, and pricing to ensure your product fits the market.",
          },
          {
            title: "Regulatory & Compliance Support",
            description: "Assisting with approvals, certifications, and legal requirements to streamline product entry.",
          },
          {
            title: "Product Promotion & Branding",
            description: "Developing targeted strategies to increase awareness and adoption.",
          },
          {
            title: "Sales & Distribution Management",
            description: "Helping manage relationships with distributors to drive consistent growth.",
          },
        ],
      });
    } else if (category === "distributors") {
      setData({
        heading: "Distributors",
        title: "Building a Strong Portfolio & Maximizing Profits",
        img: Distributions,
        description:
          "In the competitive rehabilitation and medical equipment industry, having the right products in your portfolio can make all the difference. At theREHApie Consultants, we empower distributors by connecting them with leading global manufacturers.",
        helpList: [
          {
            title: "Product Sourcing & Supplier Matching",
            description: "Connecting you with leading global manufacturers.",
          },
          {
            title: "Portfolio Expansion & Optimization",
            description: "Helping you curate the right mix of rehab products to increase sales.",
          },
          {
            title: "Competitive Pricing & Market Positioning",
            description: "Ensuring your offerings stand out in the market.",
          },
          {
            title: "Sales Support & Product Training",
            description: "Equipping your team with the knowledge and tools to sell effectively.",
          },
          {
            title: "Logistics & Inventory Management",
            description: "Assisting in procurement, warehousing, and supply chain efficiency.",
          },
        ],
      });
    } else if (category === "healthcareproviders") {
      setData({
        heading: "Healthcare Providers",
        title: " Cost-Effective Rehabilitation & Physio Solutions",
        img: Health,
        description:
          "Providing high-quality rehabilitation and physiotherapy care requires access to the best equipment, training, and support.",
        helpList: [
          {
            title: "Customized Equipment Selection",
            description: "Recommending the right products tailored to your patient care needs.",
          },
          {
            title: "Bulk Purchasing & Cost Savings",
            description: "Helping you procure high-quality equipment at competitive rates.",
          },
          {
            title: "Training & Technical Support",
            description: "Ensuring smooth installation and staff training for optimal use.",
          },
          {
            title: "Regulatory & Quality Assurance",
            description: "Ensuring all products meet international safety and compliance standards.",
          },
          {
            title: "After-Sales Support & Maintenance",
            description: "Providing long-term servicing and troubleshooting assistance.",
          },
        ],
      });
    }
  }, [category]);
  
  return (
    <Layout
      breadcrumbTitle={data.heading}
      breadcrumbSubtitle={"Service Details"}
    >
      <ServiceLayout serviceData={serviceData}>
        <div className="td-service-details-wrap">
          <div className="td-service-details-thumb mb-60">
            <img className="w-100" src={data.img} alt="details" />
          </div>

          <div className="td-service-details-content mb-60">
            <h3 className="td-service-details-title mb-25">{data.title}</h3>

            <p>
              {data.description}
            </p>
          </div>

          <div className="td-service-help-list mb-60">
            <h4 className="mb-30">How We Can Help: {data.heading}</h4>
            <div className="row td-service-details-content">
              {data.helpList.map((item, index) => (
                <div className="col-lg-12 mb-4" key={index}>
                  <div className="help-list-item">
                    <h5 className="help-item-title fw-bold">{item.title}:</h5>
                    <p className="help-item-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ServiceLayout>
    </Layout>
  );
};