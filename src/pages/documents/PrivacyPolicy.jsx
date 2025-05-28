import React, { useEffect, useState } from 'react';
import { Layout } from '../../layouts/Layout';
import HelmetReuse from '../../components/seo/HelmetComponent';
import { privacyPolicy, seo } from '../../api/api';

export const PrivacyPolicy = () => {
  const [privacyData, setPrivacyData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await privacyPolicy();
        setPrivacyData(response.data?.document || null);
        
      } catch (error) {
        console.error('Failed to fetch privacy policy:', error);
      }
    }
    fetchData();
  }, []);
  const [seoData, setSeodata] = useState(null)
  useEffect(() => {
    async function fetchSeo() {
      try {
        const response = await seo("privacy-policy")
        setSeodata(response.data)

      } catch (error) {
        console.error(error);

      }
    }
    fetchSeo()
  }, [])

  return (
    <Layout breadcrumbTitle="Privacy Policy" breadcrumbSubtitle="Privacy Policy">
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

      <div className="container-fluid py-5 bg-white">
        <div className="container">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-bottom py-4">
              <div className="d-flex-col align-items-center justify-content-between">
                <h1 className="td-document-title-new mb-0 text-dark">Privacy Policy</h1>
                <span className="text-muted small">
                  Last Updated:{" "}
                  {privacyData &&
                    new Date(privacyData.updatedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                </span>
              </div>
            </div>

            {privacyData?.content ? (
              <div className="card-body">
                <div dangerouslySetInnerHTML={{ __html: privacyData.content }} />
              </div>
            ) : (
              <div className="card-body text-center text-muted py-5">Loading privacy policy...</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
