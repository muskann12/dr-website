// pages/treatments/ozone-joint-therapy.js
import React from 'react';
import Head from 'next/head';

const OzoneJointTherapy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Ozone Therapy for Joint Pain | Your Clinic Name</title>
        <meta name="description" content="Non-surgical ozone treatment for knee, shoulder, and back pain. Reduce inflammation and improve mobility." />
        <meta name="keywords" content="ozone therapy, joint pain relief, knee pain treatment, shoulder therapy, back pain solutions" />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ozone Therapy for Joint Pain</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">A natural, non-surgical solution to reduce inflammation and restore joint function</p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-blue-600 transition">Home</a></li>
            <li><span className="text-gray-400">/</span></li>
            <li><a href="/treatments" className="hover:text-blue-600 transition">Treatments</a></li>
            <li><span className="text-gray-400">/</span></li>
            <li className="text-blue-600 font-medium">Ozone Joint Therapy</li>
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
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">About Ozone Joint Therapy</h2>
                <p className="text-gray-700 mb-6">
                  Ozone therapy is a natural treatment that uses medical-grade ozone (O₃) to reduce inflammation and promote healing in painful joints. This innovative approach can help manage chronic joint conditions without surgery or long-term medication use by stimulating your body's natural healing processes.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">How It Works</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>Reduces joint inflammation and swelling</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>Stimulates cartilage and tissue repair</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>Improves oxygen utilization in joint tissues</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                    <h3 className="text-xl font-semibold text-indigo-700 mb-3">Treatment Areas</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <div className="bg-indigo-100 text-indigo-600 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                          </svg>
                        </div>
                        <span><strong>Knee joints:</strong> Osteoarthritis, meniscus tears, ligament issues</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-indigo-100 text-indigo-600 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                          </svg>
                        </div>
                        <span><strong>Shoulder joints:</strong> Rotator cuff injuries, impingement, arthritis</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-indigo-100 text-indigo-600 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                          </svg>
                        </div>
                        <span><strong>Spinal joints:</strong> Herniated discs, facet arthritis, degenerative disc disease</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Conditions Treated */}
            <section className="mb-12">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Conditions We Treat</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition">
                    <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">Knee Pain</h3>
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
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Bursitis</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-indigo-300 transition">
                    <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-indigo-700 mb-3 text-center">Shoulder Pain</h3>
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
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        <span>Frozen shoulder</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-300 transition">
                    <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-purple-700 mb-3 text-center">Back Pain</h3>
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
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Sciatica</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Procedure */}
            <section className="mb-12">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Treatment Procedure</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-6 text-xl font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Preparation</h3>
                      <p className="text-gray-700 mb-4">
                        The treatment area is cleaned and numbed with local anesthesia. Imaging guidance (ultrasound or fluoroscopy) may be used to precisely locate the joint for optimal results.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-700 text-sm"><strong>Note:</strong> No special preparation is needed before your appointment, but we recommend wearing comfortable clothing that allows easy access to the treatment area.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-6 text-xl font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Ozone Injection</h3>
                      <p className="text-gray-700 mb-4">
                        A precise mixture of medical ozone and oxygen is injected into the joint space or surrounding tissues using a very fine needle. The procedure typically takes 15-30 minutes depending on the joint being treated.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 mb-1">During Treatment</h4>
                          <p className="text-gray-700 text-sm">Most patients feel only mild pressure during the injection.</p>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 mb-1">Ozone Concentration</h4>
                          <p className="text-gray-700 text-sm">Precisely calibrated for each joint and condition.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-6 text-xl font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Aftercare</h3>
                      <p className="text-gray-700 mb-4">
                        After brief monitoring, most patients can go home the same day. Mild soreness may occur for 1-2 days. Many patients require 3-5 sessions spaced 1-2 weeks apart for optimal results.
                      </p>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 mb-2">Post-Treatment Instructions</h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-start">
                            <span className="text-purple-600 mr-2">•</span>
                            <span>Rest the treated joint for 24-48 hours</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-600 mr-2">•</span>
                            <span>Apply ice if needed for discomfort</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-600 mr-2">•</span>
                            <span>Avoid strenuous activity for 3 days</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-600 mr-2">•</span>
                            <span>Stay well hydrated</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits/Risks */}
            <section className="mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-md p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-2 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-green-700">Potential Benefits</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Pain Relief</h4>
                        <p className="text-gray-700">Reduces joint pain and stiffness by decreasing inflammation</p>
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
                        <p className="text-gray-700">Enhances range of motion and joint function</p>
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
                        <p className="text-gray-700">Minimally invasive alternative to joint replacement surgery</p>
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
                        <p className="text-gray-700">Minimal downtime compared to surgical options</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl shadow-md p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-red-100 p-2 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-red-700">Considerations</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Temporary Discomfort</h4>
                        <p className="text-gray-700">Mild soreness at injection site typically lasting 1-2 days</p>
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
                        <p className="text-gray-700">Typically requires 3-5 treatments for optimal results</p>
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
                        <p className="text-gray-700">Effectiveness varies by individual and condition severity</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Maintenance Needed</h4>
                        <p className="text-gray-700">Periodic treatments may be needed for chronic conditions</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Patient Stories */}
            <section className="mb-12">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Patient Experiences</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">John D., 62</h4>
                        <p className="text-sm text-gray-600">Knee osteoarthritis</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"After 5 sessions of ozone therapy, my knee pain reduced by about 70%. I can now walk my dog without constant pain and even started gardening again."</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-100 text-purple-600 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Sarah M., 54</h4>
                        <p className="text-sm text-gray-600">Chronic shoulder pain</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"Ozone therapy helped my shoulder when nothing else did. I went from not being able to lift my arm to playing tennis again within 3 months of treatment."</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Read more patient stories →
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-6 space-y-6">
              {/* Quick Facts */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Treatment Overview</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Procedure Time</h4>
                    <p className="text-gray-600">15-30 minutes per joint</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Anesthesia</h4>
                    <p className="text-gray-600">Local anesthetic used</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Recovery Time</h4>
                    <p className="text-gray-600">1-2 days mild discomfort</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Results Timeline</h4>
                    <p className="text-gray-600">Noticeable within 2-4 weeks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Treatment Series</h4>
                    <p className="text-gray-600">3-5 sessions recommended</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Cost Range</h4>
                    <p className="text-gray-600">$150-$400 per session</p>
                  </div>
                </div>
              </div>

              {/* Ideal Candidates */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Ideal Candidates</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Chronic joint pain lasting more than 3 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Those wanting to avoid or delay joint surgery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Patients with mild to moderate osteoarthritis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Individuals who haven't responded to other treatments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Those looking for drug-free pain management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Patients wanting to enhance other therapies</span>
                  </li>
                </ul>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Complementary Treatments</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                      <span className="mr-2">→</span>
                      <span>PRP (Platelet-Rich Plasma) Therapy</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                      <span className="mr-2">→</span>
                      <span>Stem Cell Therapy</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                      <span className="mr-2">→</span>
                      <span>Physical Therapy</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                      <span className="mr-2">→</span>
                      <span>Chiropractic Care</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline flex items-start">
                      <span className="mr-2">→</span>
                      <span>Medical Massage</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Ready for Joint Pain Relief?</h3>
                <p className="mb-6 opacity-90">Schedule a consultation with our pain specialists to see if ozone therapy is right for you.</p>
                <button className="w-full bg-white text-blue-600 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition duration-300">
                  Book Your Appointment
                </button>
                <p className="text-sm mt-4 opacity-80 text-center">or call us at (555) 123-4567</p>
              </div>

              {/* FAQ Preview */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Common Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Is ozone therapy painful?</h4>
                    <p className="text-gray-600 text-sm mt-1">Most patients report only mild discomfort during the injection, similar to a standard joint injection.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">How soon will I see results?</h4>
                    <p className="text-gray-600 text-sm mt-1">Many patients notice improvement within 1-2 weeks, with optimal results after completing the treatment series.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Are there any side effects?</h4>
                    <p className="text-gray-600 text-sm mt-1">Possible mild soreness or swelling at the injection site that typically resolves within 48 hours.</p>
                  </div>
                </div>
                <a href="#" className="text-blue-600 hover:underline text-sm mt-4 inline-block">View all FAQs →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OzoneJointTherapy;