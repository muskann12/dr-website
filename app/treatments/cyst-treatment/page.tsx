// pages/treatments/cyst-treatment.js
import React from "react";
import Head from "next/head";

export default function CystTreatment() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>
          Cyst Treatment in Pakistan | Minimally Invasive Cyst Removal | Dr
          Yousuf Memon
        </title>
        <meta
          name="description"
          content="Get safe and effective cyst treatment in Pakistan by Dr. Yousuf Memon. Minimally invasive procedure for sebaceous cysts, ovarian cysts, and other types of cysts with quick recovery."
        />
        <meta
          name="keywords"
          content="cyst treatment Pakistan, sebaceous cyst removal, ovarian cyst treatment, cyst doctor Karachi, Dr Yousuf Memon cyst"
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/treatments/cyst-treatment"
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-teal-900 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Cyst Treatment in Pakistan
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Expert diagnosis and safe removal of different types of cysts with
          advanced minimally invasive methods by Dr. Yousuf Memon.
        </p>
      </section>

      {/* About Treatment */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-teal-900 mb-4">
          What is a Cyst?
        </h2>
        <p className="text-gray-700 mb-6">
          A cyst is a closed sac-like structure filled with fluid, pus, or other
          material. Cysts can appear anywhere in the body and are usually
          non-cancerous. Common types include sebaceous cysts, ovarian cysts,
          and ganglion cysts. Although many cysts are harmless, some may cause
          pain, infection, or cosmetic concerns and require medical treatment.
        </p>
      </section>

      {/* Why Choose Dr Yousuf */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-teal-900 mb-4">
            Why Choose Dr. Yousuf Memon for Cyst Treatment?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>Highly experienced in minimally invasive cyst removal</li>
            <li>Quick, safe, and scar-minimized procedures</li>
            <li>Personalized treatment plans for each patient</li>
            <li>Focus on comfort, safety, and fast recovery</li>
          </ul>
        </div>
      </section>

      {/* Symptoms */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-teal-900 mb-4">
          Symptoms That May Indicate a Cyst
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Visible lump or swelling under the skin</li>
          <li>Pain or tenderness in the affected area</li>
          <li>Redness or infection in the lump</li>
          <li>Pressure symptoms depending on cyst location</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-teal-900 text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Book Your Consultation Today
        </h2>
        <p className="mb-6">
          Get expert advice and advanced cyst treatment in Pakistan by Dr. Yousuf
          Memon. Safe, effective, and minimally invasive procedures for quick
          recovery.
        </p>
        <a
          href="/contact"
          className="bg-white text-teal-900 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-gray-100 transition"
        >
          Contact Dr. Yousuf Memon
        </a>
      </section>
    </div>
  );
}
