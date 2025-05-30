import React, { useEffect, useState } from "react";
import { Layout } from "../../layouts/Layout";
import { HeroFive } from "../../components/hero_sections/HeroFive";
import { ServiceAreaFour } from "../../components/service/ServiceAreaFour";
import { ServiceAreaFive } from "../../components/service/ServiceAreaFive";
import { VideoAreaFour } from "../../components/video_areas/VideoAreaFour";
import { CtaOne } from "../../components/cta/CtaOne";
import { TeamThree } from "../../components/teams/TeamThree";
import { PortfolioFour } from "../../components/portfolio/PortfolioFour";
import { TestimonialFive } from "../../components/testimonials/TestimonialFive";
import { FaqThree } from "../../components/faq/FaqThree";
import { FaqTwo } from "../../components/faq/FaqTwo";
import { BlogTwo } from "../../components/blogs/BlogTwo";
import { BlogThree } from "../../components/blogs/BlogThree";
import { SubscribeTwo } from "../../components/subscribe/SubscribeTwo";
import { AboutTwo } from "../../components/about/AboutTwo";
import { AboutFour } from "../../components/about/AboutFour";
import HelmetReuse from "../../components/seo/HelmetComponent";
import { TestimonialFour } from "../../components/testimonials/TestimonialFour";
import { seo } from "../../api/api";
import useOrganizationStore from "../../store/useOrganizationDetailsStore";

export const HomeFive = () => {
  const [seoData, setSeodata] = useState(null)
  useEffect(() => {
    async function fetchSeo() {
      try {
        const response = await seo("home")
        setSeodata(response.data)

      } catch (error) {
        console.error(error);

      }
    }
    fetchSeo()
  }, [])
  const {
    organizationDetails,
    loading: orgLoading,
    error: orgError,
    fetchOrganizationDetails
  } = useOrganizationStore();
  useEffect(() => {
    fetchOrganizationDetails();
  }, [fetchOrganizationDetails]);
  const emailaddress = organizationDetails?.email;
  const phone = organizationDetails?.phone;
  const logo = organizationDetails?.logo

  return (
    <Layout header={5} footer={5} >
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
      {/* hero */}
      <HeroFive emailaddress={emailaddress} logo={logo} phone={phone} />
      {/* About */}
      <AboutFour />
      {/* <AboutTwo/> */}
      {/* service */}
      <ServiceAreaFour />
      <ServiceAreaFive />

      {/* cta area */}
      <CtaOne />

      {/* testimonial */}
      <TestimonialFour />

      {/* faq */}
      <FaqTwo />
      {/* <FaqThree /> */}

      {/* blog */}
      <BlogTwo />
      {/* <BlogThree /> */}

      {/* subscribe */}
      <SubscribeTwo />
    </Layout>
  );
};
