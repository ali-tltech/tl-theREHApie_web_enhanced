import React from "react";
import { Layout } from "../../layouts/Layout";
import { AboutFive } from "../../components/about/AboutFive";
import { HistoryOne } from "../../components/history/HistoryOne";
import { TeamFour } from "../../components/teams/TeamFour";
import { BrandTwo } from "../../components/brands/BrandTwo";
import { ExperienceOne } from "../../components/experience/ExperienceOne";
import AboutSection from "../../components/about/AboutSec";
import AboutConclusion from "../../components/about/AboutConclusion";
import HelmetReuse from "../../components/seo/HelmetComponent";

export const About = () => {
  return (
    <Layout breadcrumbTitle={"About Us"} breadcrumbSubtitle={"About Us"}>
      <HelmetReuse title="About Us – theREHApie Consultants | Leading Rehab Consulting in the Middle East" 
      description="With 15+ years of expertise in medical rehabilitation, we help businesses expand in the Middle East by offering strategic market entry, distributor partnerships, and regulatory guidance." 
      keywords="about theREHApie Consultants, medical rehab consulting, healthcare business expansion, Middle East rehabilitation market, medical device experts"/>

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
