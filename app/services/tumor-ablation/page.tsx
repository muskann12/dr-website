
// pages/services/microwave-ablation.js
import React from "react";
import Head from "next/head";
import Image from "next/image";

const MicrowaveAblation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        {/* Primary SEO */}
        <title>Microwave Tumor Ablation (MWA) in Pakistan | Minimally Invasive Tumor Treatment</title>
        <meta
          name="description"
          content="Microwave Tumor Ablation (MWA) in Pakistan is a minimally invasive treatment for liver, breast, thyroid, and kidney tumors. Learn procedure, benefits, risks, and recovery."
        />
        <meta
          name="keywords"
          content="Microwave Tumor Ablation Pakistan, MWA treatment, minimally invasive tumor treatment, liver tumor ablation, breast tumor ablation, thyroid ablation, interventional radiology Pakistan"
        />

        {/* Open Graph (Facebook/LinkedIn) */}
        <meta property="og:title" content="Microwave Tumor Ablation (MWA) in Pakistan" />
        <meta
          property="og:description"
          content="Learn how Microwave Ablation (MWA) offers precise, minimally invasive treatment for liver, breast, and thyroid tumors in Pakistan."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourclinic.com/services/microwave-ablation" />
        <meta property="og:image" content="https://yourclinic.com/images/microwave.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Microwave Tumor Ablation (MWA) in Pakistan" />
        <meta
          name="twitter:description"
          content="MWA is a safe, minimally invasive treatment for tumors. Effective for liver, thyroid, and breast cancers."
        />
        <meta name="twitter:image" content="https://yourclinic.com/images/microwave.png" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              name: "Microwave Tumor Ablation (MWA)",
              alternateName: "Microwave Ablation",
              description:
                "Microwave Tumor Ablation (MWA) is a minimally invasive treatment for tumors using microwave energy. Commonly used for liver, thyroid, kidney, and breast tumors in Pakistan.",
              medicalSpecialty: "InterventionalRadiology",
              bodyLocation: "Liver, Thyroid, Kidney, Breast",
              procedureType: "Minimally Invasive",
              url: "https://yourclinic.com/services/microwave-ablation",
              image: "https://yourclinic.com/images/microwave.png",
              areaServed: {
                "@type": "Country",
                name: "Pakistan",
              },
              publisher: {
                "@type": "MedicalOrganization",
                name: "Your Clinic Name",
                url: "https://yourclinic.com",
              },
            }),
          }}
        />
      </Head>

      {/* Rest of your page content (same as your existing code) */}
      {/* Hero Section, Breadcrumbs, Main Content, Sidebar, etc. */}
    </div>
  );
};

export default MicrowaveAblation;

