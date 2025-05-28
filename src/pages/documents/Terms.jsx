import React, { useEffect, useState } from 'react';
import { Layout } from '../../layouts/Layout';
import HelmetReuse from '../../components/seo/HelmetComponent';
import { termsAndConditions } from '../../api/api';

export const Terms = () => {
  const [termsData, setTermsData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await termsAndConditions();
        setTermsData(response.data?.document || null);
      } catch (error) {
        console.error('Failed to fetch terms and conditions:', error);
      }
    }

    fetchData();
  }, []);
  
  return (
    <Layout breadcrumbTitle="Terms & conditions" breadcrumbSubtitle="Terms & conditions">
      <HelmetReuse
        title="Terms & Conditions | theREHApie Consultants - User Agreement"
        description="Review the terms and conditions governing the use of theREHApie Consultants' website, services, and business interactions."
        keywords="terms and conditions, user agreement, service terms, website policies, theREHApie terms"
      />

      <div className="container-fluid py-5 bg-white">
        <div className="container">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-bottom py-4">
              <div className="d-flex-col align-items-center justify-content-between">
                <h1 className="td-document-title-new mb-0 text-dark">Terms & Conditions</h1>
  <span className="text-muted small">
                  Last Updated:{" "}
                  {termsData &&
                    new Date(termsData.updatedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                </span>              </div>
            </div>

            {termsData?.content ? (
              <div className="card-body">
                {/* If you're receiving HTML content from the API */}
                <div dangerouslySetInnerHTML={{ __html: termsData.content }} />
              </div>
            ) : (
              <div className="card-body text-center text-muted py-5">Loading terms and conditions...</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
