import React from "react";
import { Layout } from "../../layouts/Layout";
import { ServiceAreaSix } from "../../components/service/ServiceAreaSix";
import { TextSliderTwo } from "../../components/text_slider/TextSliderTwo";
import { ContactTwo } from "../../components/contact/ContactTwo";
import HelmetReuse from "../../components/seo/HelmetComponent";

export const Service = () => {
  return (
    <Layout breadcrumbTitle={"Our services"} breadcrumbSubtitle={"Services"}>
      <HelmetReuse 
  title="Our Services | theREHApie Consultants - Expert Rehab Consulting" 
  description="Explore our expert rehabilitation consulting services, including medical device market entry, distributor sourcing, and business expansion in the Middle East."
  keywords="rehabilitation consulting services, medical device market entry, distributor sourcing, business expansion, Middle East healthcare consulting"
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
