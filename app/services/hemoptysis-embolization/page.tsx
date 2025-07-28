// pages/services/hemoptysis-embolization.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const HemoptysisEmbolization = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Hemoptysis Embolization Treatment | Stop Lung Bleeding Without Surgery</title>
        <meta name="description" content="Expert hemoptysis embolization treatment to stop coughing up blood. Minimally invasive procedure with quick recovery for bronchial artery bleeding." />
        <meta name="keywords" content="hemoptysis treatment, coughing blood treatment, lung bleeding embolization, bronchial artery embolization, blood in sputum treatment" />
        <meta property="og:title" content="Life-Saving Hemoptysis Embolization Treatment" />
        <meta property="og:description" content="Stop severe lung bleeding with our advanced embolization procedures." />
        <link rel="canonical" href="https://yourclinic.com/services/hemoptysis-embolization" />
      </Head>

      {/* Hero Section with Semantic HTML */}
      <header className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hemoptysis (Blood in Sputum) Embolization</h1>
          <p className="text-xl md:text-2xl">Minimally invasive solution to stop lung bleeding effectively</p>
        </div>
      </header>

      {/* Breadcrumbs with Schema Markup */}
      <nav className="container mx-auto px-6 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li><a href="/" className="hover:text-blue-600">Home</a></li>
          <li><span aria-hidden="true">/</span></li>
          <li><a href="/services" className="hover:text-blue-600">Services</a></li>
          <li><span aria-hidden="true">/</span></li>
          <li className="text-blue-600" aria-current="page">Hemoptysis Embolization</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Overview with Semantic HTML */}
            <article className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding Hemoptysis (Coughing Up Blood)</h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <p className="text-gray-700">
                  Hemoptysis refers to coughing up blood originating from the lungs or bronchial tubes. This condition ranges from mild blood-streaked sputum to life-threatening hemorrhage. Our specialized embolization procedure effectively treats:
                </p>
                <ul className="mt-4 space-y-2 pl-5">
                  <li className="list-disc">Massive hemoptysis (emergency cases)</li>
                  <li className="list-disc">Recurrent bleeding despite medical therapy</li>
                  <li className="list-disc">Bronchiectasis-related bleeding</li>
                  <li className="list-disc">Bleeding due to tuberculosis complications</li>
                  <li className="list-disc">Pulmonary vascular malformations</li>
                </ul>
              </div>
              <figure className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/hemo1.png" 
                  alt="Bronchial artery embolization procedure for hemoptysis" 
                  layout="fill" 
                  objectFit="cover" 
                  priority
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                  Bronchial artery embolization procedure visualization
                </figcaption>
              </figure>
            </article>

            {/* Procedure Details */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Hemoptysis Embolization Procedure</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">How Bronchial Artery Embolization Works</h3>
                  <p className="text-gray-700 mb-4">
                    This image-guided interventional radiology procedure involves:
                  </p>
                  <ol className="space-y-3 pl-5">
                    <li className="list-decimal">Local anesthesia and mild sedation</li>
                    <li className="list-decimal">Catheter insertion through femoral or radial artery</li>
                    <li className="list-decimal">Precise angiography to identify bleeding vessels</li>
                    <li className="list-decimal">Targeted embolization using microscopic particles</li>
                    <li className="list-decimal">Immediate blood flow blockage to bleeding site</li>
                  </ol>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-semibold mb-2">Procedure Duration</h3>
                    <p>Typically 1-3 hours depending on complexity</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-semibold mb-2">Anesthesia Type</h3>
                    <p>Local anesthesia with conscious sedation</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits & Risks */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits vs Risks</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Key Advantages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>90% success rate in acute bleeding control</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>No surgical incisions required</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Lower complication risk compared to surgery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Can be repeated if needed</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Potential Complications</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Chest pain (usually temporary)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Fever (post-embolization syndrome)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Rare spinal cord complications (0.5-1%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Possible need for repeat procedure</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Candidates */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Ideal Candidates</h2>
              <div className="bg-blue-50 rounded-lg shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  This procedure is recommended for patients experiencing:
                </p>
                <ul className="space-y-3 pl-5">
                  <li className="list-disc">More than 100mL blood in 24 hours</li>
                  <li className="list-disc">Recurrent minor hemoptysis episodes</li>
                  <li className="list-disc">Bleeding unresponsive to conservative treatment</li>
                  <li className="list-disc">High surgical risk patients</li>
                  <li className="list-disc">Pre-operative stabilization</li>
                </ul>
              </div>
            </section>

            {/* Recovery Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Recovery Process</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Post-Procedure Care</h3>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h4 className="font-semibold mb-2">Immediately After</h4>
                    <ul className="space-y-2 pl-5">
                      <li className="list-disc">4-6 hours bed rest</li>
                      <li className="list-disc">Vital signs monitoring</li>
                      <li className="list-disc">Pain management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Long-Term</h4>
                    <ul className="space-y-2 pl-5">
                      <li className="list-disc">Follow-up imaging</li>
                      <li className="list-disc">Underlying condition treatment</li>
                      <li className="list-disc">Lifestyle modifications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-6 space-y-6">
              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4">Emergency Hemoptysis Care</h3>
                <p className="mb-4">Severe bleeding requires immediate medical attention.</p>
                <button aria-label="Contact for emergency consultation" className="w-full bg-white text-blue-800 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition">
                  Contact Now
                </button>
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Procedure Highlights</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Success Rate</h4>
                    <p className="text-gray-600">85-95% initial success</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Recovery Time</h4>
                    <p className="text-gray-600">1-2 days hospitalization</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Follow-Up</h4>
                    <p className="text-gray-600">CT angiography recommended</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Alternative Treatments</h4>
                    <p className="text-gray-600">Surgery, bronchoscopic therapy</p>
                  </div>
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Common Questions</h3>
                <div className="space-y-4">
                  <details className="border-b pb-3">
                    <summary className="font-semibold cursor-pointer">Is embolization painful?</summary>
                    <p className="mt-2 text-gray-600">Patients typically experience minimal discomfort during this minimally invasive procedure.</p>
                  </details>
                  <details className="border-b pb-3">
                    <summary className="font-semibold cursor-pointer">How quickly does it stop bleeding?</summary>
                    <p className="mt-2 text-gray-600">Bleeding usually stops immediately during the procedure in most cases.</p>
                  </details>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default HemoptysisEmbolization;
