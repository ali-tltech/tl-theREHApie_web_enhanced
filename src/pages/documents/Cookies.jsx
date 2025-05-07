import React from 'react';
import { Layout } from '../../layouts/Layout';
import HelmetReuse from '../../components/seo/HelmetComponent';

export const CookiePolicy = () => {
  return (
    <Layout breadcrumbTitle={"Cookie policy"} breadcrumbSubtitle={"Cookie policy"}>
      <HelmetReuse 
  title="Cookie Policy | theREHApie Consultants - How We Use Cookies" 
  description="Understand how theREHApie Consultants uses cookies to enhance user experience, track site usage, and improve our services while respecting your privacy."
  keywords="cookie policy, website cookies, user tracking, data collection, cookie usage, theREHApie cookies"
/>


    <div className="container-fluid py-5 bg-white">
      <div className="container">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white border-bottom py-4">
            <div className="d-flex-col  align-items-center justify-content-between">
              <h1 className="td-document-title-new mb-0 text-dark">Cookie Policy</h1>
              <span className="text-muted small">Last Updated: March 4, 2025</span>
            </div>
          </div>
          
          <div className="card-body">
            <p className="text-secondary mb-4">
              <strong>theREHApie Consultants</strong> ("we," "us," or "our") uses cookies and similar tracking technologies on <a href='https://www.therehapie.com/'style={{color:"blue"}}  target='_blank'>www.theREHApie.com</a>. 
              This Cookie Policy explains how and why we use cookies and how you can manage your cookie preferences.
            </p>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">1. What Are Cookies?</h2>
              <div className="card bg-light">
                <div className="card-body">
                  <p className="text-secondary">
                    Cookies are small text files stored on your device (computer, tablet, or smartphone) when you visit a website. 
                    They help improve user experience, analyze website traffic, and remember user preferences.
                  </p>
                  <ul className="list-unstyled">
                    <li>✔ <strong>Session Cookies</strong> – Temporary cookies that expire when you close your browser.</li>
                    <li>✔ <strong>Persistent Cookies</strong> – Stored on your device for a set period to remember your preferences.</li>
                    <li>✔ <strong>First-Party Cookies</strong> – Set by <strong>theREHApie Consultants</strong> to enhance site functionality.</li>
                    <li>✔ <strong>Third-Party Cookies</strong> – Set by external services (e.g., analytics, social media, advertising).</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">2. How We Use Cookies</h2>
              <div className="card border-light">
                <p>We use cookies for the following purposes:</p>
                <div className="card-body">
                  <h3 className="h5 text-dark mb-3">Essential Cookies (Strictly Necessary)</h3>
                  <ul className="text-secondary">
                    <li>Enable website functionality (e.g., login, navigation, security).</li>
                    <li>Cannot be disabled as they are essential for website performance.</li>
                  </ul>

                  <h3 className="h5 text-dark mb-3 mt-4">Performance & Analytics Cookies</h3>
                  <ul className="text-secondary">
                    <li>Help us analyze how visitors use our website (e.g., Google Analytics).</li>
                    <li>Improve website functionality based on user interactions.</li>
                  </ul>

                  <h3 className="h5 text-dark mb-3 mt-4">Functional Cookies</h3>
                  <ul className="text-secondary">
                    <li>Remember user preferences (e.g., language settings, saved login details).</li>
                    <li>Enhance user experience by personalizing content.</li>
                  </ul>

                  <h3 className="h5 text-dark mb-3 mt-4">Marketing & Advertising Cookies</h3>
                  <ul className="text-secondary">
                    <li>Track user behavior for personalized advertising.</li>
                    <li>Help show relevant ads based on browsing history.</li>
                    <li>Used by third-party platforms (e.g., Google Ads, Facebook Pixel).</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">3. Third-Party Cookies</h2>
              <div className="card border-light">
                <div className="card-body">
                  <p className="text-secondary">
                    Some cookies on our website are set by third-party services, such as:
                  </p>
                  <ul className="text-secondary">
                    <li><strong>Google Analytics</strong> – Tracks website traffic and user behavior.</li>
                    <li><strong>Facebook Pixel</strong> – Helps optimize ad campaigns.</li>
                    <li><strong>YouTube/Vimeo</strong> – Embedded videos may store cookies.</li>
                    <li><strong>Live Chat & Support Tools</strong> – May store session cookies for chat functionality.</li>
                  </ul>
                  <p className="text-secondary mt-3">
                    We do not control third-party cookies. Please refer to their respective privacy policies for more details.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">4. How to Manage Your Cookie Preferences</h2>
              <div className="card border-light">
                <div className="card-body">
                  <p className="text-secondary">
                    You can control or disable cookies through your browser settings:
                  </p>
                  <ul className="text-secondary">
                    <li><strong>Google Chrome:</strong><a href="https://support.google.com/chrome/answer/95647?sjid=12461297633846536443-NC#tracking_protection" style={{color:"blue"}} target='_blank'>Manage Cookies</a> </li>
                    <li><strong>Mozilla Firefox:</strong><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" style={{color:"blue"}} target='_blank'> Manage Cookies</a></li>
                    <li><strong>Safari:</strong><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" style={{color:"blue"}} target='_blank'>Manage Cookies</a> </li>
                    <li><strong>Microsoft Edge:</strong><a href="https://support.microsoft.com/en-us/help/4468242/microsoft-edge-browsing-data-and-privacy" style={{color:"blue"}} target='_blank'>Manage Cookies</a> </li>
                  </ul>
                  <p className="text-secondary mt-3">
                    You can also opt out of targeted ads using:
                  </p>
                  <ul className="text-secondary">
                    <li><strong>Google Ad Settings:</strong> <a href="https://adssettings.google.com/" style={{color:"blue"}} target='_blank'>Google Ads</a></li>
                    <li><strong>Your Online Choices:</strong><a href="https://www.youronlinechoices.com/" style={{color:"blue"}} target='_blank'> Ad Preferences</a></li>
                  </ul>
                  <p className="text-warning mt-3">
                    <strong>Note:</strong> Disabling cookies may impact website functionality and user experience.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">5. Changes to This Cookie Policy</h2>
              <div className="card border-light">
                <div className="card-body">
                  <p className="text-secondary">
                    We may update this Cookie Policy from time to time. Any changes will be posted on this page, 
                    and your continued use of our website will constitute acceptance of the updated policy.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">Contact Information</h2>
              <div className="card border-light">
                <span>For questions about this Cookie Policy, please contact us:
                </span>
                <div className="pt-2">
                  <div className="d-flex align-items-center mb-2">
                    <span className="me-3">📧</span>
                    <span className="text-secondary">Email: <a href=" mailto:info@therehapie.com" target='_blank'>info@therehapie.com</a></span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <span className="me-3">📞</span>
                    <span className="text-secondary">Phone: <a href="tel:+971501361586" target='_blank'>+971 50 136 1586</a></span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="me-3">🌍</span>
                    <span className="text-secondary">Website: <a href="https://www.therehapie.com/" target='_blank' style={{color:"blue"}}>https://www.therehapie.com/</a></span>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center mt-4 pt-3 border-top">
              <p className="text-muted">
                By using our website, you consent to our use of cookies in accordance with this Cookie Policy. 
                If you do not agree, please adjust your browser settings or discontinue use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};