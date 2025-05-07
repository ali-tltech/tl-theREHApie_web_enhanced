import React from 'react';
import { Layout } from '../../layouts/Layout';
import HelmetReuse from '../../components/seo/HelmetComponent';

export const PrivacyPolicy = () => {
  return (
    <Layout breadcrumbTitle={"Privacy Policy"} breadcrumbSubtitle={"Privacy Policy"}>
      <HelmetReuse 
  title="Privacy Policy | theREHApie Consultants - Your Data Protection" 
  description="Learn how theREHApie Consultants collects, uses, and protects your personal information while providing expert rehabilitation consulting services."
  keywords="privacy policy, data protection, personal information security, healthcare consulting privacy, theREHApie data policy"
/>

    <div className="container-fluid py-5 bg-white">
      <div className="container">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white border-bottom py-4">
            <div className="d-flex-col align-items-center justify-content-between">
              <h1 className="td-document-title-new mb-0 text-dark">Privacy Policy</h1>
              <span className="text-muted small">Last Updated: March 4, 2025</span>
            </div>
          </div>
          
          <div className="card-body">
            <section className="mb-4">
              <p className="text-secondary">
                At <strong>theREHApie Consultants</strong>, we are committed to protecting your privacy. 
                This <strong>Privacy Policy</strong> explains how we collect, use, and safeguard your 
                personal information when you visit our website <a href='https://www.therehapie.com/'style={{color:"blue"}} target='_blank'>www.theREHApie.com</a> and 
                use our services.
              </p>
              <p className="text-secondary">
                By accessing our website, you agree to the terms outlined in this policy. 
                If you do not agree, please do not use our services.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">1. Information We Collect</h2>
              <div className="card border-light">
                <div className="card-body">
                  <p className="text-secondary">We may collect the following types of information:</p>
                  <ul className="text-secondary">
                    <li>
                      <strong>Personal Information:</strong> Name, email address, phone number, 
                      company details, and any information provided through contact forms.
                    </li>
                    <li>
                      <strong>Technical Data:</strong> IP address, browser type, device information, 
                      and website usage statistics.
                    </li>
                    <li>
                      <strong>Cookies & Tracking Data:</strong> To enhance your browsing experience, 
                      we may use cookies and analytics tools to track user activity.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">2. How We Use Your Information</h2>
              <div className="card border-light">
                <div className="card-body">
                  <p className="text-secondary">We collect and use your data for the following purposes:</p>
                  <ul className="text-secondary">
                    <li>To provide and improve our services.</li>
                    <li>To communicate with you regarding inquiries, partnerships, and business opportunities.</li>
                    <li>To analyze website traffic and improve user experience.</li>
                    <li>To comply with legal and regulatory requirements.</li>
                  </ul>
                  <p className="text-secondary mt-3">
                    We <strong>do not</strong> sell or share your personal data with third parties 
                    for marketing purposes.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">3. How We Protect Your Information</h2>
              <div className="card border-light">
                <div className="card-body">
                  <p className="text-secondary">
                    We implement strict security measures to prevent unauthorized access, 
                    misuse, or loss of data. These include:
                  </p>
                  <ul className="text-secondary">
                    <li>Encrypted data transmission using SSL technology.</li>
                    <li>Secure storage and restricted access to sensitive information.</li>
                    <li>Regular security audits and vulnerability assessments.</li>
                  </ul>
                  <p className="text-secondary mt-3">
                    Despite our best efforts, no online transmission is 100% secure. 
                    By using our website, you acknowledge this risk.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">4. Third-Party Services & Links</h2>
              <div className="card border-light">
                <div className="card-body">
                  <p className="text-secondary">
                    Our website may contain links to third-party websites. We are not responsible 
                    for their privacy practices. Please review their policies before providing 
                    any information.
                  </p>
                  <ul className="text-secondary">
                    <li>
                      We may use third-party analytics tools (e.g., Google Analytics) 
                      to monitor website traffic.
                    </li>
                    <li>
                      We do not control or assume responsibility for third-party 
                      content or data handling.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">5. Your Privacy Rights</h2>
              <div className="card border-light">
                <div className="card-body">
                  <p className="text-secondary">You have the right to:</p>
                  <ul className="text-secondary">
                    <li>Request access to the personal data we hold about you.</li>
                    <li>Request corrections or updates to inaccurate information.</li>
                    <li>Request deletion of your data, subject to legal obligations.</li>
                    <li>Opt-out of marketing communications at any time.</li>
                  </ul>
                  <p className="text-secondary mt-3">
                    To exercise these rights, contact us at <strong><a href="mailto:info@therehapie.com" style={{color:"blue"}}>info@therehapie.com</a></strong>.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">6. Cookies & Tracking Technologies</h2>
              <div className="card border-light">
                <div className="card-body">
                  <p className="text-secondary">We use cookies to:</p>
                  <ul className="text-secondary">
                    <li>Remember user preferences and settings.</li>
                    <li>Improve website performance and user experience.</li>
                    <li>Track and analyze website traffic for optimization.</li>
                  </ul>
                  <p className="text-secondary mt-3 ">
                    You can disable cookies through your browser settings, but this 
                    may impact your browsing experience.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">7. Data Retention Policy</h2>
              <div className="card border-light">
                <div className="card-body">
                  <p className="text-secondary">We retain personal information only as long as necessary for:</p>
                  <ul className="text-secondary">
                    <li>Providing our services and fulfilling business purposes.</li>
                    <li>Complying with legal, tax, and regulatory obligations.</li>
                    <li>Resolving disputes and enforcing agreements.</li>
                  </ul>
                  <p className="text-secondary mt-3">
                    Once data is no longer required, it is securely deleted or anonymized.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">8. Changes to This Privacy Policy</h2>
              <div className="card border-light">
                <div className="card-body">
                  <p className="text-secondary">
                    We may update this Privacy Policy periodically. Any changes will be 
                    reflected on this page with a revised <strong>Last Updated</strong> date.
                  </p>
                  <p className="text-secondary">
                    Continued use of our website constitutes acceptance of these changes.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-dark">9. Contact Us</h2>
              <div className="card border-light">
                <span>For any questions regarding our Privacy Policy, please contact:</span>
              <div className="pt-2">
                  <div className="d-flex align-items-center mb-2">
                    <span className="me-3">📧</span>
                    <span className="text-secondary">Email: <a href=" mailto:info@therehapie.com"  target='_blank'>info@therehapie.com</a></span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <span className="me-3">📞</span>
                    <span className="text-secondary">Phone: <a href="tel:+971501361586"  target='_blank'>+971 50 136 1586</a></span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="me-3">🌍</span>
                    <span className="text-secondary">Website: <a href="https://www.therehapie.com/" style={{color:"blue"}} target='_blank'>https://www.therehapie.com/</a></span>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center mt-4 pt-3 border-top">
              <p className="text-muted">
                Your privacy is important to us. Thank you for trusting <strong>theREHApie Consultants</strong>.  
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}