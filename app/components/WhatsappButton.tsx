"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <>
      {/* ✅ Structured Data for WhatsApp Contact */}
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
                "telephone": "+92-339-9988767",
                "contactType": "customer service",
                "availableLanguage": ["English", "Urdu"],
                "areaServed": "PK"
              }
            ],
            "sameAs": [
              "https://wa.me/923399988767"
            ]
          })
        }}
      />

      {/* ✅ Visible Button */}
      <a
        href="https://wa.me/923399988767?text=Hello%20Doctor%2C%20I%20want%20to%20book%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dr. Yousuf Memon on WhatsApp"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all duration-300"
      >
        <FaWhatsapp size={22} />
        <span className="font-medium">Chat with Dr. Yousuf Memon</span>
      </a>
    </>
  );
}
