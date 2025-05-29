import React, { useEffect, useState } from "react";
import { Layout } from "../../layouts/Layout";
import { AboutFive } from "../../components/about/AboutFive";
import { HistoryOne } from "../../components/history/HistoryOne";
import { TeamFour } from "../../components/teams/TeamFour";
import { BrandTwo } from "../../components/brands/BrandTwo";
import { ExperienceOne } from "../../components/experience/ExperienceOne";
import AboutSection from "../../components/about/AboutSec";
import AboutConclusion from "../../components/about/AboutConclusion";
import HelmetReuse from "../../components/seo/HelmetComponent";
import { seo } from "../../api/api";

export const About = () => {

  const [seoData, setSeodata] = useState(null)
  useEffect(() => {
    async function fetchSeo() {
      try {
        const response = await seo("about")
        setSeodata(response.data)

      } catch (error) {
        console.error(error);

      }
    }
    fetchSeo()
  }, [])
  return (

    <Layout breadcrumbTitle={"About Us"} breadcrumbSubtitle={"About Us"}>
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


      {/* about */}
      {/* <AboutFive /> */}
      <AboutSection/>
      {/* history */}
      <HistoryOne />
      <ExperienceOne />

      {/* brand */}
      <BrandTwo />
      <AboutConclusion/>
    </Layout>
  );
};
