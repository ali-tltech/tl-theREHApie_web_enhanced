import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CookiesConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookiesConsent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesConsent", "accepted");
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookiesConsent", "declined");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed-bottom bg-dark text-white p-3 text-center">
      <p className="mb-2">
        This website uses cookies to enhance user experience. By continuing, you agree to our{" "}
        <a href="/cookies" className="text-warning">
          Privacy Policy
        </a>.
      </p>
      <button className="btn btn-success me-2" onClick={handleAccept}>
        Accept
      </button>
      <button className="btn btn-danger" onClick={handleDecline}>
        Decline
      </button>
    </div>
  );
};

export default CookiesConsent;
