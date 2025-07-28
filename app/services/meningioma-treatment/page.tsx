// pages/services/interventional-treatments.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const InterventionalTreatments = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Minimally Invasive Tumor & Cyst Treatments | [Clinic Name]</title>
        <meta name="description" content="Advanced image-guided treatments for tumors & cysts. Our interventional radiology specialists offer non-surgical solutions with faster recovery. Serving [Location]." />
        <meta name="keywords" content="interventional radiology, tumor treatment, cyst treatment, non-surgical options, minimally invasive procedures, embolization, ablation, sclerotherapy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.yourclinic.com/services/interventional-treatments" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Minimally Invasive Tumor & Cyst Treatments | [Clinic Name]" />
        <meta property="og:description" content="Advanced image-guided treatments for tumors & cysts. Our interventional radiology specialists offer non-surgical solutions with faster recovery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourclinic.com/services/interventional-treatments" />
        <meta property="og:image" content="https://www.yourclinic.com/images/ir-social-preview.jpg" />
        <meta property="og:site_name" content="[Clinic Name]" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Minimally Invasive Tumor & Cyst Treatments | [Clinic Name]" />
        <meta name="twitter:description" content="Advanced image-guided treatments for tumors & cysts. Non-surgical solutions with faster recovery." />
        <meta name="twitter:image" content="https://www.yourclinic.com/images/ir-social-preview.jpg" />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Interventional Radiology Treatments",
            "description": "Minimally invasive, image-guided procedures for treating tumors and cysts without major surgery",
            "medicalSpecialty": {
              "@type": "MedicalSpecialty",
              "name": "Interventional Radiology"
            },
            "recognizingAuthority": {
              "@type": "Organization",
              "name": "American College of Radiology"
            },
            "relevantSpecialty": {
              "@type": "MedicalSpecialty",
              "name": "Interventional Radiology"
            },
            "howPerformed": "Image-guided procedures using CT, ultrasound or fluoroscopy",
            "preparation": "Varies by procedure - may include fasting or blood tests",
            "procedureLocations": {
              "@type": "Hospital",
              "name": "[Your Clinic Name]"
            },
            "potentialComplications": "Minor risks include infection, bleeding, or incomplete treatment",
            "followup": "Typically minimal follow-up required for most procedures"
          })}
        </script>
      </Head>

      {/* Hero Section with semantic h1 */}
      <header className="relative bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Interventional Radiology Treatments</h1>
          <p className="text-xl md:text-2xl">Image-guided, minimally invasive solutions for tumors and cysts</p>
        </div>
      </header>

      {/* Breadcrumbs with structured data */}
      <nav className="container mx-auto px-6 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <a href="/" className="hover:text-blue-600" aria-label="Home">Home</a>
          </li>
          <li><span aria-hidden="true">/</span></li>
          <li>
            <a href="/services" className="hover:text-blue-600" aria-label="Services">Services</a>
          </li>
          <li><span aria-hidden="true">/</span></li>
          <li className="text-blue-600" aria-current="page">IR Treatments</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Overview Section */}
            <section aria-labelledby="overview-heading">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 id="overview-heading" className="text-3xl font-bold text-gray-800 mb-6">Minimally Invasive Tumor & Cyst Treatments</h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <p className="text-lg text-gray-700 mb-6">
                      At [Clinic Name] in [Location], our board-certified interventional radiologists specialize in precise, image-guided treatments that avoid major surgery. These advanced procedures use tiny incisions (often just needle punctures), specialized instruments, and real-time imaging to target tumors and cysts with minimal impact on surrounding healthy tissue.
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
                            <span>Faster recovery times (typically 1-3 days)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Reduced risk compared to traditional surgery</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Imaging Guidance</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span>Real-time ultrasound monitoring</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span>High-resolution CT scanning</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span>Fluoroscopic visualization</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span>MRI guidance for select cases</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 relative h-64">
                    <Image 
                      src="/images/ir-procedure.jpg" 
                      alt="Interventional radiologist performing a minimally invasive tumor treatment" 
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-lg"
                      priority
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Condition-Specific Treatments */}
            <section aria-labelledby="treatments-heading" className="mb-12">
              <h2 id="treatments-heading" className="text-3xl font-bold text-gray-800 mb-8">Our Specialized IR Treatments</h2>
              
              {/* Meningioma */}
              <article className="bg-white rounded-lg shadow-md p-8 mb-10">
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
                      Our [Location] team performs this procedure 1-2 days before surgery to reduce tumor blood supply and minimize bleeding during resection, improving surgical outcomes.
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
                      Alternative for small, surgically inaccessible meningiomas or recurrent tumors, available at our [Location] facility.
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
              </article>

              {/* Angiofibroma */}
              <article className="bg-white rounded-lg shadow-md p-8 mb-10">
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
                      Our interventional radiologists typically perform this the same day as surgery to significantly reduce intraoperative bleeding.
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
                      For unresectable tumors to control recurrent nosebleeds (epistaxis), providing significant symptom relief.
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
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>Outpatient procedure in most cases</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>

              {/* Cysts */}
              <article className="bg-white rounded-lg shadow-md p-8 mb-10">
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
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Minimal recovery time</span>
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
                        <span>Reduces recurrence rates by 70-90%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>For recurrent cysts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Outpatient procedure</span>
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
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Local anesthesia option</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Endometriotic Cysts */}
              <article className="bg-white rounded-lg shadow-md p-8">
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
                      For symptomatic endometriomas not responding to medical therapy, offering significant pain relief.
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
                      For associated pelvic pain and heavy bleeding, providing long-term symptom relief.
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
                        <li className="flex items-start">
                          <span className="text-pink-600 mr-2">•</span>
                          <span>Preserves fertility in many cases</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </section>

            {/* Benefits/Risks */}
            <section aria-labelledby="benefits-heading" className="mb-12">
              <h2 id="benefits-heading" className="text-3xl font-bold text-gray-800 mb-8">Benefits & Considerations</h2>
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
                        <p className="text-gray-700">Small incisions (often just needle punctures) reduce tissue damage and scarring compared to open surgery</p>
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
                        <p className="text-gray-700">Most patients resume normal activities within 1-2 days compared to weeks with traditional surgery</p>
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
                        <p className="text-gray-700">Real-time imaging allows millimeter-level accuracy, minimizing damage to healthy tissue</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Lower Cost</h4>
                        <p className="text-gray-700">Typically 30-50% less expensive than surgical alternatives with shorter hospital stays</p>
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
                        <p className="text-gray-700">Small risk at puncture site (1-2%), lower than surgical infection rates</p>
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
                        <p className="text-gray-700">Minimal risk of significant bleeding (less than 1% for most procedures)</p>
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
                        <p className="text-gray-700">May require additional sessions for complete resolution (5-15% of cases)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Allergic Reaction</h4>
                        <p className="text-gray-700">Rare reaction to contrast media (less than 0.5% with modern agents)</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section aria-labelledby="faq-heading" className="mb-12">
              <h2 id="faq-heading" className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">How do I know if I'm a candidate for IR treatments?</h3>
                    <p className="text-gray-700">
                      The best way to determine if you're a candidate is through consultation with our interventional radiologists. We review your medical history, imaging studies, and treatment goals to recommend the most appropriate approach. Generally, candidates have small to medium sized lesions that are accessible via imaging guidance.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Are these procedures covered by insurance?</h3>
                    <p className="text-gray-700">
                      Most interventional radiology procedures for tumor and cyst treatment are covered by insurance when medically necessary. Our [Location] office staff can help verify your benefits and obtain prior authorization when required. Some palliative procedures may have different coverage criteria.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">How soon can I return to work after treatment?</h3>
                    <p className="text-gray-700">
                      Recovery times vary by procedure, but most patients can return to desk work within 1-2 days. More physically demanding jobs may require 3-5 days of recovery. Our team provides personalized recommendations based on your specific treatment and occupation.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
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
                  <div>
                    <h4 className="font-semibold text-gray-700">Our Specialists</h4>
                    <p className="text-gray-600">Board-certified interventional radiologists</p>
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
                    <span>Not surgical candidates due to health risks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Small to medium sized lesions (typically under 5cm)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Those wanting faster recovery than surgery offers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Patients with recurrent tumors or cysts</span>
                  </li>
                </ul>
              </div>

              {/* CTA Consultation */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4">Schedule a Consultation</h3>
                <p className="mb-6">Our interventional radiologists will review your case and recommend the best treatment approach.</p>
                <button className="w-full bg-white text-blue-600 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition">
                  Book Appointment
                </button>
                <p className="mt-4 text-sm text-blue-100">Or call: (555) 123-4567</p>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Related Services</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/services/diagnostic-imaging" className="text-blue-600 hover:underline">Diagnostic Imaging</a>
                    <p className="text-sm text-gray-600">CT, MRI, Ultrasound</p>
                  </li>
                  <li>
                    <a href="/services/biopsy" className="text-blue-600 hover:underline">Biopsy Services</a>
                    <p className="text-sm text-gray-600">Image-guided tissue sampling</p>
                  </li>
                  <li>
                    <a href="/services/pain-management" className="text-blue-600 hover:underline">Pain Management</a>
                    <p className="text-sm text-gray-600">Non-opioid treatment options</p>
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
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>High fever after procedure</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-red-600 font-semibold py-3 px-4 rounded-lg hover:bg-red-50 transition">
                  Emergency Contact
                </button>
                <p className="mt-2 text-sm text-red-100">24/7 Emergency Line: (555) 987-6543</p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Location CTA */}
    
            
    </div>
  );
};

export default InterventionalTreatments;
