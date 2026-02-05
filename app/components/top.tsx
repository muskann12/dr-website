
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import React from 'react';

export default function TopHeader() {
  return (
    <div className="bg-teal-800 text-white text-sm py-2 px-4 border-b border-teal-700">
      {/* Schema.org Organization and ContactPoint for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Dr. Yousuf Memon",
            "url": "https://dryousufmemon.pk",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+92-336-7889143",
                "contactType": "customer service",
                "areaServed": "PK",
                "availableLanguage": ["English", "Urdu"]
              }
            ]
          })
        }}
      />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Side - Contact Info */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-teal-300" size={12} />
            <span>+92 336-7889143</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-teal-300" size={12} />
            <span> info@dryousufmemon.pk</span>
          </div>
        </div>
        {/* Right Side - Location/Timing */}
      </div>
    </div>
  );
}