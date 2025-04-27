// pages/treatments/ozone-disc-herniation.js
import React from 'react';
import Head from 'next/head';

const OzoneDiscTreatment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Ozone Therapy for Disc Herniation | Your Clinic Name</title>
        <meta name="description" content="Minimally invasive ozone treatment for herniated discs. Learn about this innovative pain relief option." />
        <meta name="keywords" content="ozone therapy, herniated disc treatment, back pain relief, non-surgical spine treatment, disc herniation" />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-700 to-emerald-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ozone Therapy for Disc Herniation</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">A minimally invasive alternative for lasting back pain relief</p>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">About Ozone Disc Therapy</h2>
                <p className="text-gray-700 mb-6">
                  Ozone therapy is an innovative, minimally invasive treatment that uses medical-grade ozone (O₃) to reduce inflammation and promote healing in herniated discs. This outpatient procedure can provide significant pain relief without the need for major surgery by targeting the root cause of disc-related pain.
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
                        <span>May shrink herniated disc material</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-teal-100 text-teal-600 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>Promotes tissue oxygenation and healing</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                    <h3 className="text-xl font-semibold text-emerald-700 mb-3">Ideal Candidates</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <div className="bg-emerald-100 text-emerald-600 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                          </svg>
                        </div>
                        <span>Patients with contained disc herniations</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-emerald-100 text-emerald-600 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                          </svg>
                        </div>
                        <span>Those who haven't responded to conservative care</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-emerald-100 text-emerald-600 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                          </svg>
                        </div>
                        <span>Patients seeking non-surgical options</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Procedure */}
            <section className="mb-12">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Treatment Process</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-6 text-xl font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Preparation</h3>
                      <p className="text-gray-700 mb-4">
                        You'll lie comfortably on an exam table. The skin over your spine is cleaned and numbed with local anesthesia. Imaging guidance (fluoroscopy or CT) is used to precisely locate the affected disc.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-700 text-sm"><strong>Note:</strong> No food restrictions before the procedure, but we recommend wearing comfortable clothing and arranging for someone to drive you home.</p>
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
                        Using a thin needle under imaging guidance, a precise mixture of medical ozone and oxygen is injected directly into or around the herniated disc. The entire process typically takes 15-30 minutes.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-700 mb-1">During Treatment</h4>
                          <p className="text-gray-700 text-sm">Most patients feel only mild pressure during the injection.</p>
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
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Recovery</h3>
                      <p className="text-gray-700 mb-4">
                        After brief monitoring, most patients can go home the same day. You'll need someone to drive you. Mild soreness at the injection site is normal for 1-2 days.
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
                        <p className="text-gray-700">Many experience significant improvement in symptoms</p>
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
                        <p className="text-gray-700">May help some patients avoid more invasive procedures</p>
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
                    <li className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Not for All Cases</h4>
                        <p className="text-gray-700">Severe herniations may require other treatments</p>
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
                    Clinical studies suggest ozone therapy can be effective for disc herniation, with success rates ranging from 70-85% in appropriately selected patients. Many patients experience pain reduction within 2-4 weeks of treatment.
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
                      <strong>Note:</strong> While promising, ozone therapy isn't right for everyone. Our specialists can help determine if it's appropriate for your specific condition through a comprehensive evaluation.
                    </p>
                  </div>
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
                      <div className="bg-teal-100 text-teal-600 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Michael T., 48</h4>
                        <p className="text-sm text-gray-600">L4-L5 disc herniation</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"After two ozone treatments, my sciatica pain reduced by about 80%. I could finally sleep through the night and return to work without constant pain medication."</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-100 text-emerald-600 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Sarah K., 52</h4>
                        <p className="text-sm text-gray-600">Cervical disc herniation</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"The ozone treatment helped my neck pain when nothing else did. I went from constant numbness in my arm to being able to garden and drive comfortably again."</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button className="text-teal-600 hover:text-teal-800 font-medium">
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
                    <h4 className="font-semibold text-gray-700 mb-1">Cost Range</h4>
                    <p className="text-gray-600">$200-$500 per session</p>
                  </div>
                </div>
              </div>

              {/* Candidate Criteria */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Good Candidates</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Contained disc herniations (non-sequestered)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Failed 6+ weeks of conservative treatment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>No severe spinal stenosis or instability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>No significant neurological deficits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>MRI-confirmed disc pathology matching symptoms</span>
                  </li>
                </ul>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Alternative Treatments</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-teal-600 hover:underline flex items-start">
                      <span className="mr-2">→</span>
                      <span>Epidural Steroid Injections</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-teal-600 hover:underline flex items-start">
                      <span className="mr-2">→</span>
                      <span>Physical Therapy Programs</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-teal-600 hover:underline flex items-start">
                      <span className="mr-2">→</span>
                      <span>Chiropractic Care</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-teal-600 hover:underline flex items-start">
                      <span className="mr-2">→</span>
                      <span>Minimally Invasive Decompression</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-teal-600 hover:underline flex items-start">
                      <span className="mr-2">→</span>
                      <span>Regenerative Medicine Therapies</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-teal-600 to-emerald-700 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Ready to Discuss Ozone Therapy?</h3>
                <p className="mb-6 opacity-90">Our spine specialists can evaluate if this treatment is right for your disc herniation.</p>
                <button className="w-full bg-white text-teal-600 font-semibold py-3 px-4 rounded-lg hover:bg-teal-50 transition duration-300">
                  Schedule Consultation
                </button>
                <p className="text-sm mt-4 opacity-80 text-center">or call us at (555) 123-4567</p>
              </div>

              {/* FAQ Preview */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Common Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Is ozone therapy painful?</h4>
                    <p className="text-gray-600 text-sm mt-1">Most patients report only mild discomfort during the injection, similar to other spinal injections.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">How soon will I see results?</h4>
                    <p className="text-gray-600 text-sm mt-1">Many notice improvement within 1-2 weeks, with optimal results typically seen by 6 weeks.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Are there any activity restrictions?</h4>
                    <p className="text-gray-600 text-sm mt-1">We recommend avoiding strenuous activity for 3-5 days after treatment.</p>
                  </div>
                </div>
                <a href="#" className="text-teal-600 hover:underline text-sm mt-4 inline-block">View all FAQs →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OzoneDiscTreatment;