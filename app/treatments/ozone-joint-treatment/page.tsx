// pages/treatments/ozone-joint-therapy.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const OzoneJointTherapy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Ozone Therapy for Joint Pain | Your Clinic Name</title>
        <meta name="description" content="Non-surgical ozone treatment for knee, shoulder, and back pain. Reduce inflammation and improve mobility." />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ozone Therapy for Joint Pain</h1>
          <p className="text-xl md:text-2xl">Natural relief for knee, shoulder, and back pain</p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><span>/</span></li>
            <li><a href="/treatments" className="hover:text-blue-600">Treatments</a></li>
            <li><span>/</span></li>
            <li className="text-blue-600">Ozone Joint Therapy</li>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">About Ozone Joint Therapy</h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-6">
                      Ozone therapy is a natural treatment that uses medical-grade ozone (O₃) to reduce inflammation and promote healing in painful joints. This innovative approach can help manage chronic joint conditions without surgery or long medication use.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">How It Works</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Reduces joint inflammation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Stimulates tissue repair</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Improves oxygen utilization</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Treatment Areas</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span>Knee joints</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span>Shoulder joints</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span>Spinal joints</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 relative h-64">
                    <Image 
                      src="/images/ozone-joint-treatment.jpg" 
                      alt="Ozone joint treatment procedure" 
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Conditions Treated */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Conditions We Treat</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">Knee Pain</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Osteoarthritis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Meniscus tears</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Ligament injuries</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-indigo-700 mb-3">Shoulder Pain</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        <span>Rotator cuff injuries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        <span>Impingement syndrome</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        <span>Arthritis</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-purple-700 mb-3">Back Pain</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Herniated discs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Facet joint arthritis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Degenerative disc disease</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Procedure */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Treatment Procedure</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-6">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Preparation</h3>
                      <p className="text-gray-700 mb-4">
                        The treatment area is cleaned and numbed with local anesthesia. Imaging guidance (ultrasound or fluoroscopy) may be used to precisely locate the joint.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-6">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Ozone Injection</h3>
                      <p className="text-gray-700 mb-4">
                        A precise mixture of medical ozone and oxygen is injected into the joint space or surrounding tissues. The procedure typically takes 15-30 minutes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-6">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Aftercare</h3>
                      <p className="text-gray-700">
                        After brief monitoring, most patients can go home the same day. Mild soreness may occur for 1-2 days. Many patients require 3-5 sessions for optimal results.
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
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Pain Relief</h4>
                        <p className="text-gray-700">Reduces joint pain and stiffness</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Improved Mobility</h4>
                        <p className="text-gray-700">Enhances range of motion and function</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Non-Surgical</h4>
                        <p className="text-gray-700">Minimally invasive alternative to surgery</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-semibold text-red-600 mb-6">Considerations</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Temporary Discomfort</h4>
                        <p className="text-gray-700">Mild soreness at injection site</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Multiple Sessions</h4>
                        <p className="text-gray-700">Typically requires 3-5 treatments</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Not for Everyone</h4>
                        <p className="text-gray-700">Effectiveness varies by individual</p>
                      </div>
                    </li>
                  </ul>
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
                    <h4 className="font-semibold text-gray-700">Results</h4>
                    <p className="text-gray-600">Noticeable within 2-4 weeks</p>
                  </div>
                </div>
              </div>

              {/* Ideal Candidates */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Ideal Candidates</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Chronic joint pain sufferers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Those wanting to avoid surgery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Patients with osteoarthritis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Those who failed other treatments</span>
                  </li>
                </ul>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Complementary Treatments</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Physical Therapy</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">PRP Therapy</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Stem Cell Therapy</a>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Ready for Relief?</h3>
                <p className="text-gray-700 mb-6">Our pain specialists can evaluate if ozone therapy is right for your joint pain.</p>
                <button className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition">
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

export default OzoneJointTherapy;