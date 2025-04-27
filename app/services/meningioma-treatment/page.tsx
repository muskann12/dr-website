// pages/services/interventional-treatments.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const InterventionalTreatments = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>IR Treatments for Tumors & Cysts | Your Clinic Name</title>
        <meta name="description" content="Minimally invasive treatments for tumors and cysts using advanced interventional radiology techniques" />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Interventional Radiology Treatments</h1>
          <p className="text-xl md:text-2xl">Image-guided, minimally invasive solutions for tumors and cysts</p>
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
            <li className="text-blue-600">IR Treatments</li>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Minimally Invasive Tumor & Cyst Treatments</h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <p className="text-lg text-gray-700 mb-6">
                      Interventional radiology offers precise, image-guided treatments that avoid major surgery. These procedures use tiny incisions, specialized instruments, and real-time imaging to target tumors and cysts with minimal impact on healthy tissue.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">Key Advantages</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Smaller incisions (often just needle punctures)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Shorter hospital stays or outpatient procedures</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Faster recovery times</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Imaging Guidance</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span>Real-time ultrasound</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span>CT scanning</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span>Fluoroscopy</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 relative h-64">
                    <Image 
                      src="/images/ir-procedure.jpg" 
                      alt="Interventional radiology procedure" 
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Condition-Specific Treatments */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Condition-Specific IR Treatments</h2>
              
              {/* Meningioma */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-10">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-700">Meningioma Treatments</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Preoperative Embolization</h4>
                    <p className="text-gray-700 mb-4">
                      Performed 1-2 days before surgery to reduce tumor blood supply and minimize bleeding during resection.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Procedure Details:</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Femoral artery access under local anesthesia</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Microcatheter navigation to tumor vessels</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Embolic agents (particles/coils) injected</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Procedure time: 1-2 hours</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Radiofrequency Ablation</h4>
                    <p className="text-gray-700 mb-4">
                      Alternative for small, surgically inaccessible meningiomas or recurrent tumors.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Procedure Details:</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>CT or MRI guidance for probe placement</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Local anesthesia with sedation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Heat application to destroy tumor cells</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Procedure time: 1-3 hours</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Angiofibroma */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-10">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 text-green-800 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-700">Angiofibroma Treatments</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Preoperative Embolization</h4>
                    <p className="text-gray-700 mb-4">
                      Typically performed the same day as surgery to reduce intraoperative bleeding.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Procedure Details:</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>Selective catheterization of feeding vessels</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>Particle embolization most common</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>Can reduce blood loss by 50-70%</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>Procedure time: 1-2 hours</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Palliative Embolization</h4>
                    <p className="text-gray-700 mb-4">
                      For unresectable tumors to control recurrent nosebleeds (epistaxis).
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Procedure Details:</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>May use liquid embolics for more distal occlusion</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>Can provide months of symptom relief</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>Repeatable if symptoms recur</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cysts */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-10">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 text-purple-800 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-700">Cyst Treatments</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-purple-700 mb-3">Aspiration</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Simple fluid drainage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Ultrasound or CT guided</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>For symptomatic relief</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-purple-700 mb-3">Sclerotherapy</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Alcohol or other sclerosing agents</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Reduces recurrence rates</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>For recurrent cysts</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-purple-700 mb-3">Thermal Ablation</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>RFA or microwave energy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>For complex or solid components</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Minimal surrounding damage</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Endometriotic Cysts */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-pink-100 text-pink-800 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-pink-700">Endometriotic Cyst Treatments</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Aspiration & Sclerotherapy</h4>
                    <p className="text-gray-700 mb-4">
                      For symptomatic endometriomas not responding to medical therapy.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Procedure Details:</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-pink-600 mr-2">•</span>
                          <span>Transvaginal or transabdominal approach</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-600 mr-2">•</span>
                          <span>95% ethanol most common sclerosant</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-600 mr-2">•</span>
                          <span>Contact time 10-20 minutes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-600 mr-2">•</span>
                          <span>70-80% success rate</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Uterine Artery Embolization</h4>
                    <p className="text-gray-700 mb-4">
                      For associated pelvic pain and heavy bleeding.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Procedure Details:</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-pink-600 mr-2">•</span>
                          <span>Bilateral uterine artery occlusion</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-600 mr-2">•</span>
                          <span>Small particle embolics</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-600 mr-2">•</span>
                          <span>May reduce cyst size by 50-70%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits/Risks */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Benefits & Considerations</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-lg shadow-md p-8 border border-green-200">
                  <h3 className="text-2xl font-semibold text-green-700 mb-6">Advantages of IR Treatments</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Minimally Invasive</h4>
                        <p className="text-gray-700">Small incisions reduce tissue damage and scarring</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Faster Recovery</h4>
                        <p className="text-gray-700">Most patients resume normal activities within 1-2 days</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Precision Targeting</h4>
                        <p className="text-gray-700">Real-time imaging minimizes damage to healthy tissue</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg shadow-md p-8 border border-red-200">
                  <h3 className="text-2xl font-semibold text-red-700 mb-6">Potential Risks</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Infection</h4>
                        <p className="text-gray-700">Small risk at puncture site (1-2%)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Bleeding</h4>
                        <p className="text-gray-700">Minimal risk of significant bleeding</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Incomplete Treatment</h4>
                        <p className="text-gray-700">May require additional sessions</p>
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
                <h3 className="text-xl font-bold text-gray-800 mb-4">Procedure At a Glance</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Anesthesia</h4>
                    <p className="text-gray-600">Local with sedation or general</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Hospital Stay</h4>
                    <p className="text-gray-600">Outpatient or 1 night</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Recovery Time</h4>
                    <p className="text-gray-600">1-3 days to normal activity</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Success Rates</h4>
                    <p className="text-gray-600">Varies by condition (70-95%)</p>
                  </div>
                </div>
              </div>

              {/* Candidate Criteria */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Ideal Candidates</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Patients seeking less invasive options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Not surgical candidates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Small to medium sized lesions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Those wanting faster recovery</span>
                  </li>
                </ul>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Related Services</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Diagnostic Imaging</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Biopsy Services</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Pain Management</a>
                  </li>
                </ul>
              </div>

              {/* Emergency CTA */}
              <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4">Need Immediate Care?</h3>
                <p className="mb-4">Contact us immediately if you experience:</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Severe uncontrolled pain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Sudden neurological changes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Uncontrolled bleeding</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-red-600 font-semibold py-3 px-4 rounded-lg hover:bg-red-50 transition">
                  Emergency Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterventionalTreatments;