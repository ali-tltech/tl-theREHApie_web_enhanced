import React, { useEffect, useState } from "react";
import { Layout } from "../../layouts/Layout";
import { ContactMap } from "../../components/contact/ContactMap";
import { ContactFour } from "../../components/contact/ContactFour";
import HelmetReuse from "../../components/seo/HelmetComponent";
import { seo } from "../../api/api";
import useOrganizationStore from "../../store/useOrganizationDetailsStore";

export const Contact = () => {
  const [seoData, setSeodata] = useState(null)
  useEffect(() => {
    async function fetchSeo() {
      try {
        const response = await seo("contact")
        
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
  const address = organizationDetails?.location
  const mapUrl= organizationDetails?.mapUrl

  return (
    <Layout breadcrumbTitle={"Get In Touch"} breadcrumbSubtitle={"Contact"}>
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

      {/* map */}
      <ContactMap mapUrl={mapUrl} />

      {/* contact form */}
      <ContactFour emailaddress={emailaddress}phone={phone}address={address} orgError={orgError} orgLoading={orgLoading}/>
    </Layout>
  );
};
