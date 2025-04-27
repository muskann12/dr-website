// pages/services/microwave-ablation.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const MicrowaveAblation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Microwave Tumor Ablation (MWA) | Your Clinic Name</title>
        <meta name="description" content="Minimally invasive tumor treatment using microwave energy. Effective for liver, breast, and thyroid tumors." />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-800 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Microwave Tumor Ablation (MWA)</h1>
          <p className="text-lg md:text-xl">Precision heat treatment for tumors without major surgery</p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-purple-600">Home</a></li>
            <li><span>/</span></li>
            <li><a href="/services" className="hover:text-purple-600">Services</a></li>
            <li><span>/</span></li>
            <li className="text-purple-600">Microwave Ablation</li>
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
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About Microwave Ablation</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4">
                      MWA uses targeted microwave energy to heat and destroy tumor cells while sparing healthy tissue. This minimally invasive technique is guided by real-time imaging for precision treatment.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 p-4 rounded">
                        <h3 className="font-semibold text-purple-700">How It Works</h3>
                        <p className="text-sm text-gray-700">Microwaves create friction in water molecules, generating heat that destroys tumor cells</p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded">
                        <h3 className="font-semibold text-indigo-700">Treatment Areas</h3>
                        <p className="text-sm text-gray-700">Liver, kidney, lung, breast, thyroid, and bone tumors</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 relative h-48">
                    <Image 
                      src="/images/mwa-procedure.jpg" 
                      alt="MWA procedure diagram" 
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Treatment Areas */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Common Treatment Applications</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {/* Liver */}
                <div className="bg-white rounded-lg shadow-md p-4 border-t-4 border-blue-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Liver Tumors</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Hepatocellular carcinoma</li>
                    <li>• Metastatic liver tumors</li>
                    <li>• Tumors ≤5cm</li>
                  </ul>
                </div>
                {/* Breast */}
                <div className="bg-white rounded-lg shadow-md p-4 border-t-4 border-pink-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Breast Tumors</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Early-stage breast cancer</li>
                    <li>• Benign fibroadenomas</li>
                    <li>• ≤2cm tumors</li>
                  </ul>
                </div>
                {/* Thyroid */}
                <div className="bg-white rounded-lg shadow-md p-4 border-t-4 border-green-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Thyroid Nodules</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Benign symptomatic nodules</li>
                    <li>• Small thyroid cancers</li>
                    <li>• Recurrent nodules</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Procedure */}
            <section className="mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">The MWA Procedure</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Preparation</h3>
                      <p className="text-gray-700">
                        Imaging (CT/Ultrasound/MRI) locates the tumor. Local anesthesia is administered at the insertion site.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Probe Placement</h3>
                      <p className="text-gray-700">
                        A thin microwave antenna is inserted through the skin directly into the tumor under image guidance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Ablation</h3>
                      <p className="text-gray-700">
                        Microwave energy is delivered for 5-10 minutes, creating a 3-5cm sphere of ablation.
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
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Advantages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Minimally invasive (no large incisions)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Preserves healthy tissue</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Outpatient procedure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Repeatable if needed</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">Considerations</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Not suitable for all tumor types/sizes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Risk of thermal injury to nearby structures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Possible post-procedure pain/discomfort</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>May require multiple sessions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            <div className="sticky top-6 space-y-6">
              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">MWA At a Glance</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-700">Procedure Time</h4>
                    <p className="text-gray-600">30-90 minutes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Anesthesia</h4>
                    <p className="text-gray-600">Local with sedation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Hospital Stay</h4>
                    <p className="text-gray-600">Outpatient or 1 night</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Recovery</h4>
                    <p className="text-gray-600">1-3 days to normal activity</p>
                  </div>
                </div>
              </div>

              {/* Candidate Criteria */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Ideal Candidates</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Small tumors (typically ≤3cm)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Not surgical candidates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Limited number of tumors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Good liver/kidney function</span>
                  </li>
                </ul>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Related Services</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-purple-600 hover:underline">Radiofrequency Ablation</a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-600 hover:underline">Cryoablation</a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-600 hover:underline">Tumor Embolization</a>
                  </li>
                </ul>
              </div>

              {/* Recovery Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">After the Procedure</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Mild pain/discomfort for 1-2 days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Follow-up imaging in 1 month</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span>Normal activities in 2-3 days</span>
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

export default MicrowaveAblation;