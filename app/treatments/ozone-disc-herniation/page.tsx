// pages/treatments/ozone-disc-herniation.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const OzoneDiscTreatment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Ozone Therapy for Disc Herniation | Your Clinic Name</title>
        <meta name="description" content="Minimally invasive ozone treatment for herniated discs. Learn about this innovative pain relief option." />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-700 to-emerald-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ozone Therapy for Disc Herniation</h1>
          <p className="text-xl md:text-2xl">A minimally invasive alternative for back pain relief</p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-teal-600">Home</a></li>
            <li><span>/</span></li>
            <li><a href="/treatments" className="hover:text-teal-600">Treatments</a></li>
            <li><span>/</span></li>
            <li className="text-teal-600">Ozone Therapy</li>
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
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">About Ozone Therapy</h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-6">
                      Ozone therapy is an innovative, minimally invasive treatment that uses medical-grade ozone (O₃) to reduce inflammation and promote healing in herniated discs. This outpatient procedure can provide significant pain relief without the need for major surgery.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
                        <h3 className="text-xl font-semibold text-teal-700 mb-3">How It Works</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-teal-600 mr-2">•</span>
                            <span>Reduces disc inflammation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-teal-600 mr-2">•</span>
                            <span>May shrink herniated material</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-teal-600 mr-2">•</span>
                            <span>Promotes tissue oxygenation</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                        <h3 className="text-xl font-semibold text-emerald-700 mb-3">Ideal Candidates</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-emerald-600 mr-2">•</span>
                            <span>Patients with contained disc herniations</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-emerald-600 mr-2">•</span>
                            <span>Those who haven't responded to conservative care</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-emerald-600 mr-2">•</span>
                            <span>Patients seeking non-surgical options</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 relative h-64">
                    <Image 
                      src="/images/ozone-treatment.jpg" 
                      alt="Ozone treatment procedure" 
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Procedure */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">The Treatment Process</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-6">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Preparation</h3>
                      <p className="text-gray-700 mb-4">
                        You'll lie comfortably on an exam table. The skin over your spine is cleaned and numbed with local anesthesia. Imaging guidance (fluoroscopy or CT) is used to precisely locate the affected disc.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-6">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Ozone Injection</h3>
                      <p className="text-gray-700 mb-4">
                        Using a thin needle, a precise mixture of medical ozone and oxygen is injected directly into the herniated disc. The entire process typically takes 15-30 minutes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-6">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Recovery</h3>
                      <p className="text-gray-700">
                        After brief monitoring, most patients can go home the same day. You may need someone to drive you. Mild soreness at the injection site is normal for 1-2 days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits/Risks */}
            <section className="mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-semibold text-green-600 mb-6">Potential Benefits</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Non-Surgical</h4>
                        <p className="text-gray-700">No incisions or general anesthesia required</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Quick Recovery</h4>
                        <p className="text-gray-700">Most resume normal activities within days</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Pain Relief</h4>
                        <p className="text-gray-700">Many patients experience significant improvement</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-semibold text-red-600 mb-6">Possible Risks</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Temporary Discomfort</h4>
                        <p className="text-gray-700">Mild pain at injection site (1-2 days)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Infection Risk</h4>
                        <p className="text-gray-700">Very low with proper sterile technique</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Variable Results</h4>
                        <p className="text-gray-700">Effectiveness depends on individual factors</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Research */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Research & Evidence</h2>
                <div className="space-y-6">
                  <p className="text-gray-700">
                    Clinical studies suggest ozone therapy can be effective for disc herniation, with success rates ranging from 70-85% in appropriately selected patients. Many patients experience pain reduction within 2-4 weeks.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">Key Findings</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Reduces nerve root compression symptoms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>May decrease need for surgery in some cases</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Lower complication rates than surgical options</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-700">
                    While promising, ozone therapy isn't right for everyone. Our specialists can help determine if it's appropriate for your specific condition.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-6 space-y-6">
              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Treatment At a Glance</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Procedure Time</h4>
                    <p className="text-gray-600">15-30 minutes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Anesthesia</h4>
                    <p className="text-gray-600">Local only</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Recovery Time</h4>
                    <p className="text-gray-600">1-2 days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Results Timeline</h4>
                    <p className="text-gray-600">2-6 weeks for full effect</p>
                  </div>
                </div>
              </div>

              {/* Candidate Criteria */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Good Candidates</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Contained disc herniations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Failed conservative treatment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>No severe spinal stenosis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>No significant nerve damage</span>
                  </li>
                </ul>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Alternative Treatments</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-teal-600 hover:underline">Epidural Injections</a>
                  </li>
                  <li>
                    <a href="#" className="text-teal-600 hover:underline">Physical Therapy</a>
                  </li>
                  <li>
                    <a href="#" className="text-teal-600 hover:underline">Minimally Invasive Surgery</a>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-teal-50 rounded-lg p-6 border border-teal-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Considering Ozone Therapy?</h3>
                <p className="text-gray-700 mb-6">Our pain specialists can evaluate if this treatment is right for you.</p>
                <button className="w-full bg-teal-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-teal-700 transition">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OzoneDiscTreatment;