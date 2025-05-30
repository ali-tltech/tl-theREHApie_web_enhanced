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
        const response = await seo("contacts")
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
        title="Contact theREHApie Consultants | Expert Rehab Consulting in the Middle East"
        description="Get in touch with theREHApie Consultants for expert rehabilitation consulting, distributor sourcing, and business expansion in the Middle East"
        keywords="rehabilitation consulting, medical device market entry, distributor sourcing, Dubai business expansion, Middle East healthcare consulting" />

      {/* map */}
      <ContactMap mapUrl={mapUrl} />

      {/* contact form */}
      <ContactFour emailaddress={emailaddress}phone={phone}address={address} orgError={orgError} orgLoading={orgLoading}/>
    </Layout>
  );
};
