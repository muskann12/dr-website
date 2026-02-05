// pages/treatments/ozone-disc-herniation.js
import React from 'react';
import Head from 'next/head';

const OzoneDiscTreatment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Ozone Therapy for Disc Herniation in Pakistan | Dr. Yousuf Memon</title>
        <meta name="description" content="Non-surgical ozone treatment for herniated discs in Karachi, Lahore & Hyderabad. Effective pain relief alternative to surgery at Dr. Yousuf Memon's clinics." />
        <meta name="keywords" content="ozone therapy Pakistan, disc herniation treatment Karachi, back pain relief Lahore, non-surgical spine treatment Pakistan, slipped disc treatment Hyderabad" />
        
        {/* Pakistan-specific schema markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              "name": "Ozone Therapy for Disc Herniation",
              "description": "Minimally invasive ozone treatment for herniated discs available in Pakistan",
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
              "medicalSpecialty": "Spine Treatment",
              "url": "https://dryousufmemon.com/treatments/ozone-disc-herniation"
            }
          `}
        </script>
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-700 to-emerald-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ozone Therapy for Disc Herniation in Pakistan</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">A non-surgical alternative for back pain relief available in Karachi, Lahore & Hyderabad</p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-teal-600 transition">Home</a></li>
            <li><span className="text-gray-400">/</span></li>
            <li><a href="/treatments" className="hover:text-teal-600 transition">Treatments</a></li>
            <li><span className="text-gray-400">/</span></li>
            <li className="text-teal-600 font-medium">Ozone Disc Therapy</li>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">About Ozone Disc Therapy in Pakistan</h2>
                <p className="text-gray-700 mb-6">
                  Ozone therapy is becoming increasingly popular in Pakistan as a minimally invasive treatment for herniated discs. At our clinics in Karachi, Lahore, and Hyderabad, we use medical-grade ozone (O₃) to reduce inflammation and promote healing in damaged spinal discs, offering patients an alternative to surgery.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
                    <h3 className="text-xl font-semibold text-teal-700 mb-3">How It Works</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <div className="bg-teal-100 text-teal-600 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>Reduces disc inflammation and swelling</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-teal-100 text-teal-600 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>May shrink herniated disc material pressing on nerves</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-teal-100 text-teal-600 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>Promotes tissue oxygenation and natural healing</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                    <h3 className="text-xl font-semibold text-emerald-700 mb-3">Available at Our Clinics</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <div className="bg-emerald-100 text-emerald-600 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </div>
                        <span><strong>Karachi:</strong> Orthopaedic and Medical Institute (OMI)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-emerald-100 text-emerald-600 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </div>
                        <span><strong>Lahore:</strong> Ihsan Mumtaz Hospital</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-emerald-100 text-emerald-600 rounded-full p-1 mr-3">
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

            {/* Procedure */}
            <section className="mb-12">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Treatment Process in Pakistan</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-6 text-xl font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Preparation</h3>
                      <p className="text-gray-700 mb-4">
                        At our Pakistan clinics, you'll lie comfortably on an exam table. The skin over your spine is cleaned and numbed with local anesthesia. We use advanced imaging guidance (fluoroscopy or CT) to precisely locate the affected disc.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-700 text-sm"><strong>Note for Pakistan Patients:</strong> No food restrictions before the procedure, but we recommend wearing comfortable clothing and arranging for someone to drive you home.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-6 text-xl font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Ozone Injection</h3>
                      <p className="text-gray-700 mb-4">
                        Using a thin needle under imaging guidance, our specialists inject a precise mixture of medical ozone and oxygen directly into or around the herniated disc. The entire process typically takes 15-30 minutes at our clinics.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 mb-1">During Treatment</h4>
                          <p className="text-gray-700 text-sm">Most Pakistan patients feel only mild pressure during the injection.</p>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <h4 className="font-semibold text-yellow-700 mb-1">Ozone Concentration</h4>
                          <p className="text-gray-700 text-sm">Precisely calibrated for optimal therapeutic effect.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-6 text-xl font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Recovery in Pakistan</h3>
                      <p className="text-gray-700 mb-4">
                        After brief monitoring at our clinic, most Pakistan patients can go home the same day. You'll need someone to drive you. Mild soreness at the injection site is normal for 1-2 days in our climate.
                      </p>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 mb-2">Post-Treatment Care</h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-start">
                            <span className="text-purple-600 mr-2">•</span>
                            <span>Rest for 24-48 hours after procedure</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-600 mr-2">•</span>
                            <span>Apply ice if needed for discomfort</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-600 mr-2">•</span>
                            <span>Avoid strenuous activity for 3-5 days</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-600 mr-2">•</span>
                            <span>Follow-up in 2 weeks to assess progress</span>
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
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Non-Surgical</h4>
                        <p className="text-gray-700">No incisions or general anesthesia required - ideal for Pakistan patients seeking alternatives</p>
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
                        <p className="text-gray-700">Most resume normal activities within days - important for Pakistan's workforce</p>
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
                        <p className="text-gray-700">Many Pakistan patients experience significant improvement in symptoms</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Avoid Surgery</h4>
                        <p className="text-gray-700">May help Pakistan patients avoid more invasive and expensive procedures</p>
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
                        <p className="text-gray-700">Mild pain at injection site (1-2 days) - manageable with common medications</p>
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
                        <p className="text-gray-700">Very low with our strict sterile techniques in Pakistan clinics</p>
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
                        <p className="text-gray-700">Effectiveness depends on individual factors - we provide honest assessments</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Not for All Cases</h4>
                        <p className="text-gray-700">Severe herniations may require other treatments - we'll advise honestly</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Research */}
            <section className="mb-12">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Clinical Evidence</h2>
                <div className="space-y-6">
                  <p className="text-gray-700">
                    Clinical studies suggest ozone therapy can be effective for disc herniation, with success rates ranging from 70-85% in appropriately selected patients. Many Pakistan patients at our clinics experience pain reduction within 2-4 weeks of treatment.
                  </p>
                  
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">Key Research Findings</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>Reduces nerve root compression symptoms by decreasing disc volume</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>May decrease need for surgery in some cases by up to 60%</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>Lower complication rates (less than 0.1%) compared to surgical options</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-yellow-700">
                      <strong>Note for Pakistan Patients:</strong> While promising, ozone therapy isn't right for everyone. Dr. Yousuf Memon can help determine if it's appropriate for your specific condition through a comprehensive evaluation at any of our clinics.
                    </p>
                  </div>
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
                      <div className="bg-teal-100 text-teal-600 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Ahmed R., 42, Karachi</h4>
                        <p className="text-sm text-gray-600">L4-L5 disc herniation</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"After two ozone treatments at Dr. Memon's clinic, my sciatica pain reduced by about 80%. I could finally sleep through the night and return to work without constant pain medication."</p>
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
                      <div className="bg-emerald-100 text-emerald-600 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Fatima S., 56, Lahore</h4>
                        <p className="text-sm text-gray-600">Cervical disc herniation</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"The ozone treatment at the Lahore clinic helped my neck pain when nothing else did. I went from constant numbness in my arm to being able to do household work comfortably again."</p>
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
                  <button className="text-teal-600 hover:text-teal-800 font-medium">
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
                    <p className="text-gray-600">15-30 minutes per session</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Anesthesia</h4>
                    <p className="text-gray-600">Local anesthetic only</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Recovery Time</h4>
                    <p className="text-gray-600">1-2 days mild discomfort</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Results Timeline</h4>
                    <p className="text-gray-600">2-6 weeks for full effect</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Treatment Series</h4>
                    <p className="text-gray-600">1-3 sessions typically needed</p>
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
                    <a href="#" className="text-teal-600 text-sm hover:underline">View on Map →</a>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-gray-700">Lahore</h4>
                    <p className="text-gray-600 text-sm">Ihsan Mumtaz Hospital</p>
                    <p className="text-gray-600 text-sm">71-E Jauhar Town Maulana Shaukat Ali Road</p>
                    <a href="#" className="text-teal-600 text-sm hover:underline">View on Map →</a>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-gray-700">Hyderabad</h4>
                    <p className="text-gray-600 text-sm">Isra Hospital, Cath Lab Cardiology</p>
                    <p className="text-gray-600 text-sm">Fri | 12:00 PM - 2:00 PM</p>
                    <a href="#" className="text-teal-600 text-sm hover:underline">View on Map →</a>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-teal-600 to-emerald-700 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Ready to Discuss Ozone Therapy?</h3>
                <p className="mb-6 opacity-90">Dr. Yousuf Memon can evaluate if this treatment is right for your disc herniation at any of our Pakistan clinics.</p>
                <button className="w-full bg-white text-teal-600 font-semibold py-3 px-4 rounded-lg hover:bg-teal-50 transition duration-300">
                  Schedule Consultation
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
                    <p className="text-gray-600 text-sm mt-1">Most Pakistan patients report only mild discomfort during the injection, similar to other spinal injections.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">How soon will I see results?</h4>
                    <p className="text-gray-600 text-sm mt-1">Many notice improvement within 1-2 weeks, with optimal results typically seen by 6 weeks.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Are there any activity restrictions?</h4>
                    <p className="text-gray-600 text-sm mt-1">We recommend avoiding strenuous activity for 3-5 days after treatment.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Is it available in all Pakistan clinics?</h4>
                    <p className="text-gray-600 text-sm mt-1">Yes, available at our Karachi, Lahore and Hyderabad locations.</p>
                  </div>
                </div>
                <a href="#" className="text-teal-600 hover:underline text-sm mt-4 inline-block">View all FAQs →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
     
    </div>
  );
};

export default OzoneDiscTreatment;