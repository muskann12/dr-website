// pages/services/gi-bleeding-embolization.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const GIBleedingEmbolization = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>GI Bleeding Embolization | Your Clinic Name</title>
        <meta name="description" content="Minimally invasive treatment for severe bleeding from the anus or mouth. Learn about procedures, benefits, and risks." />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-800 to-teal-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GI Bleeding Embolization</h1>
          <p className="text-xl md:text-2xl">Stop severe bleeding from the anus or mouth without surgery</p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-green-600">Home</a></li>
            <li><span>/</span></li>
            <li><a href="/services" className="hover:text-green-600">Services</a></li>
            <li><span>/</span></li>
            <li className="text-green-600">GI Bleeding Embolization</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What is GI Bleeding Embolization?</h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  Embolization is a minimally invasive procedure to stop severe bleeding in the gastrointestinal (GI) tract by blocking blood vessels. It’s used when endoscopy or medications fail.
                </p>
              </div>
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/gi.png" 
                  alt="GI bleeding embolization procedure" 
                  layout="fill" 
                  objectFit="cover" 
                />
              </div>
            </section>

            {/* Causes */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Common Causes</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Lower GI (Anus) */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Bleeding from the Anus</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Diverticular disease</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Hemorrhoids</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Colorectal cancer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Inflammatory bowel disease (IBD)</span>
                    </li>
                  </ul>
                </div>
                {/* Upper GI (Mouth) */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Bleeding from the Mouth</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Peptic ulcers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Esophageal varices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Mallory-Weiss tears</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Stomach/duodenal tumors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Procedure */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Procedure Details</h2>
              <div className="bg-green-50 rounded-lg shadow-md p-6 border border-green-200">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-2">1. Pre-Procedure</h3>
                    <p className="text-gray-700">
                      Diagnosis with endoscopy/colonoscopy or CT angiography. Multidisciplinary team evaluation.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-2">2. During Procedure</h3>
                    <p className="text-gray-700 mb-2">
                      • Local anesthesia with sedation<br/>
                      • Catheter inserted via groin/wrist artery<br/>
                      • Embolic agents (coils/particles) injected<br/>
                      • Real-time imaging guidance
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-2">3. Post-Procedure</h3>
                    <p className="text-gray-700">
                      • 6-24 hours hospital monitoring<br/>
                      • Quick recovery (1-2 days)<br/>
                      • Follow-up imaging/endoscopy
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits & Risks */}
            <section className="mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Life-saving for severe bleeding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>No surgical incisions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Lower complication risk vs. surgery</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Risks</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Bowel ischemia (rare)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Rebleeding (10-20%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Infection at puncture site</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Candidates */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Who Needs This?</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Active bleeding unresponsive to endoscopy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>High-risk surgical patients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Recurrent bleeding despite treatment</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-6 space-y-6">
              {/* Emergency CTA */}
              <div className="bg-gradient-to-br from-green-600 to-teal-700 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4">Emergency GI Bleeding?</h3>
                <p className="mb-4">Seek immediate care for:</p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Vomiting blood</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Black/tarry stools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Dizziness or fainting</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-green-800 font-semibold py-3 px-4 rounded-lg hover:bg-green-50 transition">
                  Call Emergency
                </button>
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Facts</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Procedure Time</h4>
                    <p className="text-gray-600">1-2 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Success Rate</h4>
                    <p className="text-gray-600">75-90%</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Hospital Stay</h4>
                    <p className="text-gray-600">1-3 days</p>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Related Services</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-green-600 hover:underline">Endoscopic Hemostasis</a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:underline">Variceal Banding</a>
                  </li>
                  <li>
                    <a href="#" className="text-green-600 hover:underline">Colonoscopy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GIBleedingEmbolization;