// pages/services/permacath-placement.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const PermacathPlacement = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
  <title>Permacath Placement in Karachi – Dr. Yousuf Memon</title>
  <meta name="description" content="Safe and expert Permacath placement in Karachi by Dr. Yousuf Memon. Ensuring reliable dialysis access with minimal discomfort and fast recovery." />

        <meta name="keywords" content="Permacath, dialysis catheter, hemodialysis access, tunneled catheter, kidney failure treatment, vascular access" />
        <link rel="canonical" href="https://yourclinic.com/services/permacath-placement" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Permacath Placement",
            "description": "Tunneled catheter insertion for hemodialysis access",
            "bodyLocation": "Internal jugular or subclavian vein",
            "howPerformed": "Image-guided venous access with subcutaneous tunneling",
            "preparation": "Vein mapping, sterile preparation",
            "procedureOutcome": "Reliable vascular access for dialysis",
            "risks": "Infection, thrombosis, mechanical complications",
            "medicalSpecialty": {
              "@type": "MedicalSpecialty",
              "name": "Interventional Nephrology"
            }
          }
          `}
        </script>
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Permacath Placement</h1>
          <p className="text-xl md:text-2xl">Reliable long-term vascular access for hemodialysis patients</p>
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
            <li className="text-blue-600">Permacath Placement</li>
          </ol>
        </nav>
      </div>

      {/* Last Updated */}
      <div className="container mx-auto px-6 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Overview */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What is a Permacath?</h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-6">
                      A <strong>Permacath</strong> is a specialized tunneled dialysis catheter designed for long-term vascular access in patients requiring hemodialysis. Unlike temporary catheters, it's placed under the skin with a Dacron cuff that helps secure it and prevent infection.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">Key Advantages</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Longevity: 6 months to several years</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>High flow rates (300-400 mL/min)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Dual lumen for simultaneous flow</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Immediate use after placement</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Ideal Candidates</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span>Patients awaiting AV fistula maturation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span>Those unsuitable for AV fistula/graft</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span>Acute kidney failure needing dialysis</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span>Bridge to transplant</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 relative h-64">
                    <Image 
                      src="/images/permacath-anatomy.jpg" 
                      alt="Diagram showing Permacath placement in internal jugular vein with subcutaneous tunneling" 
                      layout="fill" 
                      objectFit="contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Success Rates */}
            <section className="mb-12 bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Permacath Performance Statistics</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <p className="text-4xl font-bold text-blue-600 mb-2">90%</p>
                  <p className="text-gray-700">Technical success rate</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <p className="text-4xl font-bold text-blue-600 mb-2">85%</p>
                  <p className="text-gray-700">1-year functional patency</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <p className="text-4xl font-bold text-blue-600 mb-2">2.5%</p>
                  <p className="text-gray-700">Annual infection rate</p>
                </div>
              </div>
              <p className="mt-6 text-gray-700 text-sm text-center">
                *Based on clinical studies of tunneled dialysis catheters
              </p>
            </section>

            {/* Procedure */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">The Permacath Placement Procedure</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-6">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Pre-Procedure Preparation</h3>
                      <p className="text-gray-700 mb-4">
                        Using ultrasound, our vascular specialists map your veins (typically internal jugular or subclavian). The skin is sterilized, and local anesthesia is administered. Prophylactic antibiotics may be given.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-6">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Vein Access & Tunneling</h3>
                      <p className="text-gray-700 mb-4">
                        Under ultrasound guidance, a needle accesses the vein. A guidewire is placed, and a small tunnel is created under the skin from the vein access site to the exit site (usually on the chest). The catheter is pulled through this tunnel.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-6">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Catheter Placement</h3>
                      <p className="text-gray-700 mb-4">
                        The catheter tip is advanced to the superior vena cava near the heart. Fluoroscopy confirms optimal positioning. The Dacron cuff sits in the subcutaneous tunnel, promoting tissue ingrowth for stability.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-6">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Completion & Dressing</h3>
                      <p className="text-gray-700">
                        The catheter is secured with sutures at the exit site. A sterile dressing is applied. The procedure typically takes 45-90 minutes, and dialysis can often begin immediately.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Procedure Image */}
                <div className="mt-8 relative w-full h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/permacath-placement-procedure.jpg"
                    alt="Medical team performing Permacath placement under fluoroscopy guidance"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </section>

            {/* Benefits/Risks */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Compared to Other Dialysis Access</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-semibold text-green-600 mb-6">Permacath Advantages</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Immediate Use</h4>
                        <p className="text-gray-700">No maturation time (vs 6-8 weeks for AV fistula)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Higher Flow Rates</h4>
                        <p className="text-gray-700">300-400mL/min vs 200-300mL/min for temporary lines</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Lower Infection Risk</h4>
                        <p className="text-gray-700">Tunneling reduces infection by 50% vs non-tunneled</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Patient Comfort</h4>
                        <p className="text-gray-700">Secure placement reduces movement/discomfort</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-semibold text-red-600 mb-6">Potential Complications</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Infection (2-5%)</h4>
                        <p className="text-gray-700">Exit site, tunnel, or bloodstream infections</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Thrombosis (10-20%)</h4>
                        <p className="text-gray-700">Catheter malfunction from blood clots</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Central Vein Stenosis</h4>
                        <p className="text-gray-700">Long-term risk with any central catheter</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Mechanical Issues</h4>
                        <p className="text-gray-700">Cracked tubing, dislodgement, or cuff extrusion</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Patient Stories */}
            <section className="mb-12 bg-indigo-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Patient Experiences</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-700 italic mb-4">"After my kidneys failed suddenly, the Permacath allowed me to start dialysis immediately while waiting for my fistula to mature. The placement was quick, and it worked perfectly for my three-times-weekly treatments."</p>
                  <p className="font-semibold">- Robert T., ESRD Patient</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-700 italic mb-4">"As a elderly patient with weak veins, the Permacath has been my dialysis lifeline for over two years. The nursing team taught me how to care for it, and we've had no major problems."</p>
                  <p className="font-semibold">- Margaret S., Dialysis Patient</p>
                </div>
              </div>
            </section>

            {/* Care Instructions */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Permacath Care Guidelines</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">Essential Maintenance</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Dressing Changes:</strong> After each dialysis or weekly, using sterile technique</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Flushing Protocol:</strong> Heparin lock after each use (typically 5000 units)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Hygiene:</strong> Keep dry; use waterproof covers for showers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Activity:</strong> Avoid heavy lifting; no swimming</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-red-600 mb-4">When to Seek Help</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span><strong>Infection Signs:</strong> Fever, chills, redness/swelling at site</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span><strong>Flow Problems:</strong> Difficulty drawing blood or high pressures</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span><strong>Catheter Damage:</strong> Cracks, leaks, or dislodgement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span><strong>Respiratory:</strong> Sudden chest pain or breathing difficulty</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Care Image */}
                <div className="mt-8 relative w-full h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/permacath-care.jpg"
                    alt="Nurse performing sterile dressing change on Permacath site"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">How long can a Permacath stay in?</h3>
                  <p className="text-gray-700">
                    With proper care, Permacaths can function for 6 months to several years. The average lifespan is 12-18 months. They're often used as bridges until AV fistulas mature or transplants occur, but can be long-term solutions when other access isn't possible.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Is Permacath placement painful?</h3>
                  <p className="text-gray-700">
                    Most patients report only mild discomfort during placement thanks to local anesthesia. Some soreness at the tunnel site may occur for a few days post-procedure, managed with over-the-counter pain relievers.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Can I shower with a Permacath?</h3>
                  <p className="text-gray-700">
                    Yes, with proper waterproof protection. Use a specialized shower shield or secure plastic covering over the dressing. Never submerge the catheter (no baths/swimming). Change the dressing immediately if it gets wet.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Why choose Permacath over AV fistula?</h3>
                  <p className="text-gray-700">
                    AV fistulas are preferred for long-term dialysis but require 6-8 weeks to mature. Permacaths provide immediate access and are better for patients with small veins, acute kidney failure, or while awaiting fistula maturation. However, fistulas have lower complication rates long-term.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-6 space-y-6">
              {/* CTA Box */}
              <div className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4">Need Dialysis Access?</h3>
                <p className="mb-6">Our vascular access specialists can evaluate which option is best for your treatment needs.</p>
                <button className="w-full bg-white text-blue-700 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition">
                  Schedule Consultation
                </button>
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Permacath Fast Facts</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Placement Time</h4>
                    <p className="text-gray-600">45-90 minutes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Vein Options</h4>
                    <p className="text-gray-600">Right internal jugular (preferred), left IJ, subclavian</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Catheter Size</h4>
                    <p className="text-gray-600">12-14Fr (dual lumen)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Flow Rates</h4>
                    <p className="text-gray-600">300-400 mL/min (adequate for dialysis)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Removal</h4>
                    <p className="text-gray-600">Simple outpatient procedure when no longer needed</p>
                  </div>
                </div>
              </div>

              {/* Ideal Candidates */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Who Needs a Permacath?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Acute kidney failure requiring dialysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>ESRD patients awaiting fistula maturation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Failed AV fistula/graft</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Poor vascular access options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Bridge to kidney transplant</span>
                  </li>
                </ul>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Related Services</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/services/av-fistula" className="text-blue-600 hover:underline">AV Fistula Creation</a>
                  </li>
                  <li>
                    <a href="/services/hemodialysis" className="text-blue-600 hover:underline">Hemodialysis</a>
                  </li>
                  <li>
                    <a href="/services/kidney-transplant" className="text-blue-600 hover:underline">Kidney Transplant Evaluation</a>
                  </li>
                  <li>
                    <a href="/services/vascular-access" className="text-blue-600 hover:underline">Vascular Access Clinic</a>
                  </li>
                </ul>
              </div>

              {/* Emergency CTA */}
              <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4">Dialysis Emergency?</h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Catheter dislodgement or breakage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Severe bleeding at insertion site</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Sudden chest pain/breathing difficulty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>High fever with chills</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-red-600 font-semibold py-3 px-4 rounded-lg hover:bg-red-50 transition">
                  Call Emergency Line
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermacathPlacement;
