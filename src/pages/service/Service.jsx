import React, { useEffect, useState } from "react";
import { Layout } from "../../layouts/Layout";
import { ServiceAreaSix } from "../../components/service/ServiceAreaSix";
import { TextSliderTwo } from "../../components/text_slider/TextSliderTwo";
import { ContactTwo } from "../../components/contact/ContactTwo";
import HelmetReuse from "../../components/seo/HelmetComponent";
import { seo } from "../../api/api";

export const Service = () => {
  const [seoData, setSeodata] = useState(null)
  useEffect(() => {
    async function fetchSeo() {
      try {
        const response = await seo("services")
        setSeodata(response.data)

      } catch (error) {
        console.error(error);

      }
    }
    fetchSeo()
  }, [])
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
      <ServiceAreaSix />

      {/* text slider */}
      <TextSliderTwo />

      {/* contact */}
      {/* <ContactTwo /> */}
    </Layout>
  );
};
