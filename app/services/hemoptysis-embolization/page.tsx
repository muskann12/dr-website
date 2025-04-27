// pages/services/hemoptysis-embolization.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const HemoptysisEmbolization = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Hemoptysis (Blood in Sputum) Embolization | Your Clinic Name</title>
        <meta name="description" content="Minimally invasive treatment for lung bleeding. Learn about benefits, risks, and recovery." />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hemoptysis (Blood in Sputum) Embolization</h1>
          <p className="text-xl md:text-2xl">Life-saving treatment for severe lung bleeding</p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><span>/</span></li>
            <li><a href="/services" className="hover:text-blue-600">Services</a></li>
            <li><span>/</span></li>
            <li className="text-blue-600">Hemoptysis Embolization</li>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Hemoptysis?</h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <p className="text-gray-700">
                  Hemoptysis is coughing up blood from the lungs, ranging from mild streaks to life-threatening bleeding. Common causes include infections (tuberculosis), bronchiectasis, or lung cancer.
                </p>
              </div>
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image src="/images/hemo1.png" alt="Hemoptysis embolization" layout="fill" objectFit="cover" />
              </div>
            </section>

            {/* Procedure */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Procedure Overview</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">How It Works</h3>
                  <p className="text-gray-700">
                    A catheter is guided to the bleeding lung vessels (usually bronchial arteries) via a small groin/wrist incision. Embolic agents (particles/coils) block blood flow to stop bleeding.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-semibold mb-2">Duration</h3>
                    <p>1-3 hours</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-semibold mb-2">Anesthesia</h3>
                    <p>Local with sedation</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits & Risks */}
            <section className="mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Life-saving for massive bleeding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Minimally invasive (no surgery)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Quick recovery</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Risks</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Rebleeding (if underlying cause persists)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Chest discomfort</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Rare non-target embolization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Candidates */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Who Needs It?</h2>
              <div className="bg-blue-50 rounded-lg shadow-md p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Massive hemoptysis (emergency)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Recurrent bleeding despite medication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>High-risk patients (e.g., lung cancer, TB)</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-6 space-y-6">
              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4">Emergency Consultation</h3>
                <p className="mb-4">For severe hemoptysis, seek immediate care.</p>
                <button className="w-full bg-white text-blue-800 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition">
                  Contact Now
                </button>
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Success Rate</h4>
                    <p className="text-gray-600">85-95% in acute bleeding</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Hospital Stay</h4>
                    <p className="text-gray-600">1-2 days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Follow-Up</h4>
                    <p className="text-gray-600">CT scan within 1 month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HemoptysisEmbolization;