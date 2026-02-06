// pages/services/ptc-ptbd-cbd-stenting.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const PTCStenting = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-teal-900 mb-4">PTC, PTBD & CBD Stenting in Pakistan</h1>
                <p className="text-gray-700 mb-6">
                  PTC, PTBD & CBD Stenting in Pakistan are minimally invasive procedures for bile duct obstruction. Dr. Yousuf Memon provides expert diagnosis and stenting, ensuring safe and effective relief for patients across the country.
                </p>
        <p className="text-gray-700 mb-6"><strong>PTC, PTBD & CBD Stenting in Pakistan</strong> are minimally invasive procedures for bile duct obstruction. Dr. Yousuf Memon provides expert diagnosis and stenting for safe, effective relief nationwide.</p>
      </div>
      <Head>
        <title>PTC, PTBD & CBD Stenting | Dr. Yousuf Memon Clinic</title>
        <meta name="description" content="Minimally invasive procedures for bile duct obstruction. Diagnosis and treatment with PTC, PTBD and CBD stenting." />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-700 to-emerald-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-3xl md:text-4xl font-bold mb-4">PTC, PTBD & CBD Stenting</p>
          <p className="text-lg md:text-xl font-bold mb-4">Minimally invasive solutions for bile duct obstructions</p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-teal-600">Dr. Yousuf Memon Home</a></li>
            <li><span>/</span></li>
            <li><a href="/services" className="hover:text-teal-600">Biliary & Liver Services</a></li>
            <li><span>/</span></li>
            <li className="text-teal-600">PTC/PTBD with Stenting</li>
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
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Procedures Overview</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-gray-800">PTC</h3>
                    <p className="text-sm text-gray-600">Imaging of bile ducts using contrast dye</p>
                  </div>
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h3 className="font-semibold text-gray-800">PTBD</h3>
                    <p className="text-sm text-gray-600">Drainage procedure for bile obstruction</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-gray-800">CBD Stent</h3>
                    <p className="text-sm text-gray-600">Keeps bile duct open long-term</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Points */}
            <section className="mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Why These Procedures?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-teal-700 mb-2">Conditions Treated</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        <span>Bile duct stones</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        <span>Tumors causing obstruction</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        <span>Bile duct strictures</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-teal-700 mb-2">Symptoms Addressed</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        <span>Jaundice (yellow skin)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        <span>Abdominal pain</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        <span>Recurrent infections</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Procedure Steps */}
            <section className="mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Procedure Details</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">PTC Imaging</h3>
                      <p className="text-gray-700">
                        Guided by ultrasound, a needle accesses the bile ducts to inject contrast dye for X-ray imaging.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">PTBD Drainage</h3>
                      <p className="text-gray-700">
                        A catheter is placed to drain bile externally or internally, relieving obstruction.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">CBD Stenting</h3>
                      <p className="text-gray-700">
                        A permanent stent may be placed to maintain bile duct patency.
                      </p>
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
                      <span>Minimally invasive alternative to surgery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Immediate symptom relief</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Shorter recovery than open procedures</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">Considerations</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Risk of infection or bleeding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Possible bile leakage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Stents may need replacement</span>
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
              <div className="bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-lg font-bold mb-3">Biliary Emergency Signs</h3>
                <ul className="mb-4 space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Severe abdominal pain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>High fever with chills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Worsening jaundice</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-orange-600 font-semibold py-2 px-4 rounded-lg hover:bg-amber-50 transition text-sm">
                  Call Emergency
                </button>
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Procedure Facts</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-700">Duration</h4>
                    <p className="text-gray-600">1-2 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Anesthesia</h4>
                    <p className="text-gray-600">Local with sedation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Recovery</h4>
                    <p className="text-gray-600">1-2 day hospital stay</p>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Related Services</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-teal-600 hover:underline">ERCP</a>
                  </li>
                  <li>
                    <a href="#" className="text-teal-600 hover:underline">Liver Biopsy</a>
                  </li>
                  <li>
                    <a href="#" className="text-teal-600 hover:underline">Gallbladder Surgery</a>
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

export default PTCStenting;