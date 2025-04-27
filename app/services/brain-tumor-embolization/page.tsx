// pages/services/brain-tumor-embolization.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const BrainTumorEmbolization = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Brain Tumor Embolization | Your Clinic Name</title>
        <meta name="description" content="Minimally invasive treatment to reduce blood supply to brain tumors. Learn about procedures, benefits, and risks." />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Brain Tumor Embolization</h1>
          <p className="text-xl md:text-2xl">Reduce blood supply to brain tumors before surgery or for symptom relief</p>
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
            <li className="text-blue-600">Brain Tumor Embolization</li>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Brain Tumor Embolization?</h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  Embolization is a minimally invasive procedure used to block blood flow to brain tumors, reducing their size and vascularity. This makes surgical removal safer or provides symptom relief for inoperable cases.
                </p>
              </div>
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/braintumor.png" 
                  alt="Brain tumor embolization procedure" 
                  layout="fill" 
                  objectFit="cover" 
                />
              </div>
            </section>

            {/* Tumor Types */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Tumors Treated with Embolization</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Meningiomas */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Meningiomas</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Benign tumors from meninges</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Often highly vascular</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Common in middle-aged women</span>
                    </li>
                  </ul>
                </div>
                {/* Other Types */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Other Tumors</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Glomus tumors (paragangliomas)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Arteriovenous malformations (AVMs)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Metastatic brain tumors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Procedure */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Procedure Details</h2>
              <div className="bg-blue-50 rounded-lg shadow-md p-6 border border-blue-200">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">1. Pre-Procedure</h3>
                    <p className="text-gray-700">
                      MRI/CT and angiography to map tumor blood supply. Multidisciplinary team evaluation.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">2. During Procedure</h3>
                    <p className="text-gray-700 mb-2">
                      • Local anesthesia with sedation or general anesthesia<br/>
                      • Catheter inserted via femoral artery<br/>
                      • Embolic agents (particles/coils/glue) injected<br/>
                      • Continuous imaging guidance (fluoroscopy/angiography)<br/>
                      • Duration: 1-3 hours
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">3. Post-Procedure</h3>
                    <p className="text-gray-700">
                      • Overnight hospital monitoring<br/>
                      • Surgery typically within days if planned<br/>
                      • Follow-up imaging to assess effectiveness
                    </p>
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
                      <span>Reduces surgical risks and bleeding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Minimally invasive approach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Can relieve tumor-related symptoms</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Risks</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Stroke (if healthy vessels blocked)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Neurological deficits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Post-embolization syndrome (fever/headache)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Candidates */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Who is a Candidate?</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Patients with highly vascular brain tumors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Pre-surgical preparation cases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Inoperable tumors for palliative care</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-6 space-y-6">
              {/* Emergency CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4">Neurological Emergency?</h3>
                <p className="mb-4">Seek immediate care for:</p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Sudden severe headache</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Vision changes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Difficulty speaking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Weakness on one side</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-blue-800 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition">
                  Call Emergency
                </button>
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Facts</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Procedure Time</h4>
                    <p className="text-gray-600">1-3 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Effectiveness</h4>
                    <p className="text-gray-600">Significantly reduces surgical bleeding</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Hospital Stay</h4>
                    <p className="text-gray-600">1-2 days</p>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Related Services</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Brain Tumor Surgery</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Stereotactic Radiosurgery</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Neurological Rehabilitation</a>
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

export default BrainTumorEmbolization;