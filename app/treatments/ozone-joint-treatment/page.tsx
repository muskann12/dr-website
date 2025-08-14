// pages/treatments/ozone-joint-therapy.js
import React from 'react';
import Head from 'next/head';

const OzoneJointTherapy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Ozone Therapy for Joint Pain in Pakistan | Dr. Yousuf Memon</title>
        <meta name="description" content="Non-surgical ozone treatment for knee, shoulder & back pain in Karachi, Lahore & Hyderabad. Effective pain relief alternative at Dr. Yousuf Memon's clinics." />
        <meta name="keywords" content="ozone therapy Pakistan, joint pain treatment Karachi, knee pain relief Lahore, shoulder therapy Hyderabad, back pain solutions Pakistan" />
        
        {/* Pakistan-specific schema markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              "name": "Ozone Joint Therapy",
              "description": "Non-surgical ozone treatment for joint pain available in Pakistan",
              "provider": {
                "@type": "MedicalClinic",
                "name": "Dr. Yousuf Memon Clinics",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Depot Lines, Muhammad Ali Jinnah Rd Saddar",
                  "addressLocality": "Karachi",
                  "addressRegion": "Sindh",
                  "addressCountry": "PK"
                }
              },
              "medicalSpecialty": "Joint Pain Treatment"
            }
          `}
        </script>
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ozone Therapy for Joint Pain in Pakistan</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">A natural, non-surgical solution available in Karachi, Lahore & Hyderabad</p>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">About Ozone Joint Therapy in Pakistan</h2>
                <p className="text-gray-700 mb-6">
                  Ozone therapy is becoming increasingly popular in Pakistan as a natural treatment for joint pain. At our clinics in Karachi, Lahore, and Hyderabad, we use medical-grade ozone (O₃) to reduce inflammation and promote healing in painful joints, offering patients an alternative to surgery and long-term medication.
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
                    <h3 className="text-xl font-semibold text-indigo-700 mb-3">Available at Our Clinics</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <div className="bg-indigo-100 text-indigo-600 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </div>
                        <span><strong>Karachi:</strong> Orthopaedic and Medical Institute (OMI)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-indigo-100 text-indigo-600 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </div>
                        <span><strong>Lahore:</strong> Ihsan Mumtaz Hospital</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-indigo-100 text-indigo-600 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </div>
                        <span><strong>Hyderabad:</strong> Isra Hospital</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Conditions Treated */}
            <section className="mb-12">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Conditions We Treat in Pakistan</h2>
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
                        <span>Osteoarthritis (common in Pakistan)</span>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Treatment Process in Pakistan</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-6 text-xl font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Preparation</h3>
                      <p className="text-gray-700 mb-4">
                        At our Pakistan clinics, the treatment area is cleaned and numbed with local anesthesia. We may use ultrasound guidance to precisely locate the joint for optimal results.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-700 text-sm"><strong>Note for Pakistan Patients:</strong> No special preparation needed, but wear comfortable clothing allowing access to the treatment area.</p>
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
                        Our specialists inject a precise mixture of medical ozone and oxygen into the joint space using a fine needle. The procedure takes 15-30 minutes at our clinics.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 mb-1">During Treatment</h4>
                          <p className="text-gray-700 text-sm">Most Pakistan patients feel only mild pressure during the injection.</p>
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
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Recovery in Pakistan</h3>
                      <p className="text-gray-700 mb-4">
                        After brief monitoring at our clinic, most Pakistan patients can go home the same day. Mild soreness may occur for 1-2 days. Many require 3-5 sessions spaced 1-2 weeks apart.
                      </p>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 mb-2">Post-Treatment Care</h4>
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
                            <span>Stay well hydrated in Pakistan's climate</span>
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
                        <p className="text-gray-700">Enhances range of motion and joint function for daily activities</p>
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
                    <h3 className="text-2xl font-semibold text-red-700">Considerations in Pakistan</h3>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Pakistan Patient Experiences</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Ahmed R., 58, Karachi</h4>
                        <p className="text-sm text-gray-600">Knee osteoarthritis</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"After 5 sessions at Dr. Memon's clinic, my knee pain reduced by 70%. I can now pray comfortably and walk my grandchildren to school."</p>
                    <div className="flex mt-3 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-100 text-purple-600 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Fatima K., 52, Lahore</h4>
                        <p className="text-sm text-gray-600">Chronic shoulder pain</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"Ozone therapy at the Lahore clinic helped my shoulder when painkillers failed. I can now cook and do household work without pain."</p>
                    <div className="flex mt-3 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Read more Pakistan patient stories →
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
                    <h4 className="font-semibold text-gray-700 mb-1">Cost in Pakistan</h4>
                    <p className="text-gray-600">More affordable than surgery options</p>
                  </div>
                </div>
              </div>

              {/* Clinic Locations */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Clinic Locations</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-gray-700">Karachi</h4>
                    <p className="text-gray-600 text-sm">Orthopaedic and Medical Institute (OMI)</p>
                    <p className="text-gray-600 text-sm">Depot Lines, Muhammad Ali Jinnah Rd Saddar</p>
                    <p className="text-gray-600 text-sm">Mon & Thu | 2:00 PM - 4:00 PM</p>
                    <a href="#" className="text-blue-600 text-sm hover:underline">View on Map →</a>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-gray-700">Lahore</h4>
                    <p className="text-gray-600 text-sm">Ihsan Mumtaz Hospital</p>
                    <p className="text-gray-600 text-sm">71-E Jauhar Town Maulana Shaukat Ali Road</p>
                    <a href="#" className="text-blue-600 text-sm hover:underline">View on Map →</a>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-gray-700">Hyderabad</h4>
                    <p className="text-gray-600 text-sm">Isra Hospital, Cath Lab Cardiology</p>
                    <p className="text-gray-600 text-sm">Fri | 12:00 PM - 2:00 PM</p>
                    <a href="#" className="text-blue-600 text-sm hover:underline">View on Map →</a>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Ready for Joint Pain Relief?</h3>
                <p className="mb-6 opacity-90">Dr. Yousuf Memon can evaluate if ozone therapy is right for your joint pain at our Pakistan clinics.</p>
                <button className="w-full bg-white text-blue-600 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition duration-300">
                  Book Your Appointment
                </button>
                <p className="text-sm mt-4 opacity-80 text-center">or call us at <a href="tel:+923367889143" className="underline">+92 336-7889143</a></p>
                <p className="text-sm mt-2 opacity-80 text-center"><a href="https://wa.me/923199246838" className="underline">Chat on WhatsApp</a></p>
              </div>

              {/* FAQ Preview */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Common Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Is ozone therapy painful?</h4>
                    <p className="text-gray-600 text-sm mt-1">Most Pakistan patients report only mild discomfort during the injection.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">How soon will I see results?</h4>
                    <p className="text-gray-600 text-sm mt-1">Many notice improvement within 1-2 weeks, with optimal results after completing treatment.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Are there any side effects?</h4>
                    <p className="text-gray-600 text-sm mt-1">Possible mild soreness or swelling at injection site resolving within 48 hours.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Is it available in all Pakistan clinics?</h4>
                    <p className="text-gray-600 text-sm mt-1">Yes, available at our Karachi, Lahore and Hyderabad locations.</p>
                  </div>
                </div>
                <a href="#" className="text-blue-600 hover:underline text-sm mt-4 inline-block">View all FAQs →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default OzoneJointTherapy;