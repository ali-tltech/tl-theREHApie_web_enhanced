import React, { useEffect, useState } from "react";
import { Layout } from "../../layouts/Layout";
import { ServiceAreaSix } from "../../components/service/ServiceAreaSix";
import { TextSliderTwo } from "../../components/text_slider/TextSliderTwo";
// import { ContactTwo } from "../../components/contact/ContactTwo";
import HelmetReuse from "../../components/seo/HelmetComponent";
import { seo } from "../../api/api";
import { getAllServices } from "../../api/api"; // ✅ Import your corrected function

export const Service = () => {
  const [seoData, setSeodata] = useState(null);
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchSeo() {
      try {
        const response = await seo("services");
        setSeodata(response.data);
      } catch (error) {
        console.error("SEO fetch error:", error);
      }
    }

    async function fetchServices() {
      try {
        const response = await getAllServices();
        console.log(response)
        setServices(response.data); // Adjust this depending on your API response structure
      } catch (error) {
        console.error("Service fetch error:", error);
      }
    }

    fetchSeo();
    fetchServices();
  }, []);

  return (
    <Layout breadcrumbTitle={"Our services"} breadcrumbSubtitle={"Services"}>
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

      {/* services */}
      <ServiceAreaSix services={services} /> {/* ✅ Pass data here */}

      {/* text slider */}
      <TextSliderTwo />

      {/* contact */}
      {/* <ContactTwo /> */}
    </Layout>
  );
};
