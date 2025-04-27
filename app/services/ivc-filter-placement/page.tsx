// pages/services/ivc-filter-dvt.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const IVCFilterDVT = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>IVC Filter for DVT | Your Clinic Name</title>
        <meta name="description" content="IVC filter placement to prevent pulmonary embolism in DVT patients. Learn about procedure, benefits, and risks." />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">IVC Filter for Deep Vein Thrombosis</h1>
          <p className="text-lg md:text-xl">Prevent pulmonary embolism when blood thinners can't be used</p>
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
            <li className="text-blue-600">IVC Filter for DVT</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Overview */}
            <section className="mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About IVC Filters</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">What is DVT?</h3>
                    <p className="text-gray-700 mb-4">
                      Deep vein thrombosis occurs when blood clots form in deep veins, usually in the legs. These clots can break loose and travel to the lungs (pulmonary embolism), which can be life-threatening.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">IVC Filter Purpose</h3>
                    <p className="text-gray-700">
                      An IVC filter is a small metal device placed in the inferior vena cava to catch blood clots before they reach the lungs. It's used when blood thinners aren't an option.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Points */}
            <section className="mb-8 grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">When It's Needed</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Can't take blood thinners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>High risk of pulmonary embolism</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Recurrent clots despite treatment</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Procedure At a Glance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span><strong>Time:</strong> 30-60 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span><strong>Anesthesia:</strong> Local with sedation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span><strong>Recovery:</strong> Same day or overnight</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Procedure */}
            <section className="mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">The Procedure</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Insertion</h3>
                    <p className="text-gray-700">
                      Through a small incision in the groin or neck, a catheter guides the collapsed filter to the inferior vena cava where it expands to catch clots.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Filter Types</h3>
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div className="bg-blue-50 p-4 rounded">
                        <h4 className="font-semibold text-blue-700">Permanent</h4>
                        <p className="text-sm text-gray-700">For long-term protection</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded">
                        <h4 className="font-semibold text-green-700">Retrievable</h4>
                        <p className="text-sm text-gray-700">Can be removed later</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits/Risks */}
            <section className="mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Reduces PE risk immediately</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Minimally invasive</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Alternative when blood thinners fail</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">Considerations</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Small risk of filter migration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Possible clot formation on filter</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Removal can be complex</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            <div className="sticky top-6 space-y-6">
              {/* Emergency CTA */}
              <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-lg font-bold mb-3">DVT Emergency Signs</h3>
                <ul className="mb-4 space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Sudden shortness of breath</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Chest pain when breathing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Coughing up blood</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-red-600 font-semibold py-2 px-4 rounded-lg hover:bg-red-50 transition text-sm">
                  Call Emergency
                </button>
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Quick Facts</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-700">Procedure Time</h4>
                    <p className="text-gray-600">30-60 minutes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Recovery</h4>
                    <p className="text-gray-600">1-2 days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Effectiveness</h4>
                    <p className="text-gray-600">90% PE prevention</p>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Related Services</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">DVT Treatment</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Anticoagulation Therapy</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Vascular Surgery</a>
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

export default IVCFilterDVT;