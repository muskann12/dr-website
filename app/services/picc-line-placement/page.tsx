// pages/services/picc-line-placement.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const PICCLinePlacement = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>PICC Line Placement | Long-Term IV Access for Treatment & Therapy</title>
        <meta 
          name="description" 
          content="PICC line placement provides safe, long-term IV access for chemotherapy, antibiotics, TPN & other treatments. Learn about the procedure, benefits, and care."
        />
        <meta name="keywords" content="PICC line, PICC line placement, long-term IV access, chemotherapy IV, antibiotic therapy, central line catheter" />
        <link rel="canonical" href="https://yourclinic.com/services/picc-line-placement" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "PICC Line Placement",
            "description": "Minimally invasive insertion of a long-term intravenous catheter",
            "bodyLocation": "Arm vein to superior vena cava",
            "howPerformed": "Ultrasound-guided vein access with fluoroscopic confirmation",
            "preparation": "Vein assessment, consent process",
            "procedureOutcome": "Reliable venous access for weeks to months",
            "followup": "Weekly dressing changes and line maintenance",
            "risks": "Infection, thrombosis, mechanical complications",
            "medicalSpecialty": {
              "@type": "MedicalSpecialty",
              "name": "Interventional Radiology"
            }
          }
          `}
        </script>
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PICC Line Placement</h1>
          <p className="text-xl md:text-2xl">Safe, long-term intravenous access for medications and treatments</p>
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
            <li className="text-blue-600">PICC Line Placement</li>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What is a PICC Line?</h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-6">
                      A <strong>Peripherally Inserted Central Catheter (PICC)</strong> is a thin, flexible tube inserted into a peripheral vein (usually in the upper arm) and threaded to terminate in a large central vein near the heart. This provides reliable venous access for:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">Key Advantages</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Duration: Weeks to months of use</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Reduces needle sticks by 90%</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>1-3 lumens for multiple therapies</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Outpatient placement</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Common Uses</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span>IV antibiotic therapy (4+ weeks)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span>Chemotherapy administration</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span>Total Parenteral Nutrition (TPN)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span>Frequent blood sampling</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 relative h-64">
                    <Image 
                      src="/images/picc-line-anatomy.jpg" 
                      alt="Diagram of PICC line placement from arm vein to superior vena cava" 
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">PICC Line Success Rates</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <p className="text-4xl font-bold text-blue-600 mb-2">95%</p>
                  <p className="text-gray-700">Technical success rate for placement</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <p className="text-4xl font-bold text-blue-600 mb-2">85%</p>
                  <p className="text-gray-700">Remain complication-free at 30 days</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <p className="text-4xl font-bold text-blue-600 mb-2">2-3%</p>
                  <p className="text-gray-700">Infection rate with proper care</p>
                </div>
              </div>
              <p className="mt-6 text-gray-700 text-center text-sm">
                *Based on clinical studies of ultrasound-guided PICC placements
              </p>
            </section>

            {/* Procedure */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">The PICC Line Placement Procedure</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-6">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Vein Assessment & Preparation</h3>
                      <p className="text-gray-700 mb-4">
                        Using ultrasound, our interventional radiologists evaluate your arm veins (typically basilic or brachial veins) for optimal access. The arm is cleaned with antiseptic, and local anesthetic numbs the insertion site.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-6">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Ultrasound-Guided Insertion</h3>
                      <p className="text-gray-700 mb-4">
                        Under real-time ultrasound guidance, a small needle accesses the vein. A guidewire is passed, and the PICC catheter (typically 18-20cm long) is threaded through to the superior vena cava.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-6">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Position Confirmation</h3>
                      <p className="text-gray-700 mb-4">
                        Fluoroscopy confirms proper tip placement at the cavoatrial junction (about 3-4cm above the heart). The external portion is secured with a stabilization device or sutures.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-6">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Post-Procedure Care</h3>
                      <p className="text-gray-700">
                        A transparent dressing is applied. You'll receive detailed instructions on flushing protocols (typically 10mL saline daily) and dressing changes (weekly). The entire procedure takes 30-60 minutes.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Procedure Image */}
                <div className="mt-8 relative w-full h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/picc-placement-procedure.jpg"
                    alt="Medical professional performing ultrasound-guided PICC line placement"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </section>

            {/* Benefits/Risks */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Benefits vs. Other Central Lines</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-semibold text-green-600 mb-6">Why Choose a PICC?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Lower Infection Risk</h4>
                        <p className="text-gray-700">2-3% vs 5-10% with traditional central lines</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">No Chest/Neck Incisions</h4>
                        <p className="text-gray-700">Arm placement is more comfortable</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Cost-Effective</h4>
                        <p className="text-gray-700">40-60% less than surgically placed lines</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Bedside Placement</h4>
                        <p className="text-gray-700">No operating room required</p>
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
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Infection (1-3%)</h4>
                        <p className="text-gray-700">CRBSI rate of 0.5-2.0 per 1000 catheter days</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Thrombosis (2-5%)</h4>
                        <p className="text-gray-700">More common with larger catheters</p>
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
                        <p className="text-gray-700">Occlusion (5-10%), fracture (rare)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Activity Restrictions</h4>
                        <p className="text-gray-700">Avoid heavy lifting (10lbs) with the arm</p>
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
                  <p className="text-gray-700 italic mb-4">"After my bone infection diagnosis requiring 6 weeks of IV antibiotics, the PICC line saved me from daily needle sticks. The placement was quick and painless, and I could administer my medications at home."</p>
                  <p className="font-semibold">- Michael R., Osteomyelitis Patient</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-700 italic mb-4">"As a breast cancer patient, my PICC line made chemotherapy much easier. No more searching for veins each treatment. The nurses taught me how to care for it, and it worked perfectly for my entire regimen."</p>
                  <p className="font-semibold">- Sarah L., Cancer Patient</p>
                </div>
              </div>
            </section>

            {/* Care Instructions */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">PICC Line Care & Maintenance</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">Essential Care Guidelines</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Dressing Changes:</strong> Weekly by trained clinician using sterile technique</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Flushing Protocol:</strong> 10mL saline before/after each use; heparin for some lines</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Hygiene:</strong> Shower with waterproof covering; no swimming/bathing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Activity:</strong> Avoid heavy lifting; gentle range of motion encouraged</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-red-600 mb-4">Warning Signs</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span><strong>Infection:</strong> Fever, chills, redness/swelling at site</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span><strong>Thrombosis:</strong> Arm swelling, pain, or discoloration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span><strong>Mechanical Issues:</strong> Catheter migration, leakage, or breakage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span><strong>Respiratory:</strong> Sudden chest pain or shortness of breath</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Care Image */}
                <div className="mt-8 relative w-full h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/picc-line-care.jpg"
                    alt="Nurse performing PICC line dressing change with sterile technique"
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
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">How long can a PICC line stay in?</h3>
                  <p className="text-gray-700">
                    PICC lines are designed for medium to long-term use (weeks to months). The current record for a single PICC is 18 months, but most are removed after 6-12 weeks. Duration depends on your treatment needs and whether complications develop.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Can I shower with a PICC line?</h3>
                  <p className="text-gray-700">
                    Yes, with proper waterproof protection. Use a PICC line shower cover or seal the dressing with waterproof tape. Avoid direct water pressure on the site. Never submerge the PICC (no swimming/bathing).
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">What's the difference between a PICC and a port?</h3>
                  <p className="text-gray-700">
                    PICC lines are external catheters placed in the arm, while ports are implanted completely under the skin. PICCs are better for shorter-term use (weeks-months), while ports last years. Ports require needle access through the skin for each use.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">How often does a PICC line need flushing?</h3>
                  <p className="text-gray-700">
                    Unused PICC lines should be flushed with saline at least once daily. For intermittent use, flush before and after each medication administration. Some lines require heparin flushes - your care team will provide specific instructions.
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
                <h3 className="text-xl font-bold mb-4">Need a PICC Line?</h3>
                <p className="mb-6">Schedule a consultation with our vascular access specialists to determine if a PICC line is right for your treatment needs.</p>
                <button className="w-full bg-white text-blue-700 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition">
                  Book Consultation
                </button>
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">PICC Line Fast Facts</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Placement Time</h4>
                    <p className="text-gray-600">30-60 minutes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Veins Used</h4>
                    <p className="text-gray-600">Basilic (preferred), brachial, cephalic</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Catheter Size</h4>
                    <p className="text-gray-600">3-6Fr (1-2mm diameter)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Dwell Time</h4>
                    <p className="text-gray-600">Average 6-8 weeks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Removal</h4>
                    <p className="text-gray-600">Simple 5-minute outpatient procedure</p>
                  </div>
                </div>
              </div>

              {/* Ideal Candidates */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Who Needs a PICC?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>IV antibiotics ≥2 weeks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Chemotherapy patients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>TPN/nutritional support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Frequent blood draws</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Poor peripheral access</span>
                  </li>
                </ul>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Related Services</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/services/port-a-cath" className="text-blue-600 hover:underline">Port-a-Cath Placement</a>
                  </li>
                  <li>
                    <a href="/services/central-line" className="text-blue-600 hover:underline">Central Line Placement</a>
                  </li>
                  <li>
                    <a href="/services/home-infusion" className="text-blue-600 hover:underline">Home Infusion Therapy</a>
                  </li>
                  <li>
                    <a href="/services/vascular-access" className="text-blue-600 hover:underline">Vascular Access Clinic</a>
                  </li>
                </ul>
              </div>

              {/* Emergency CTA */}
              <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4">PICC Line Emergency?</h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Catheter breakage or leakage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Sudden chest pain/breathing difficulty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Fever 100.4°F with chills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Severe arm swelling/pain</span>
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

export default PICCLinePlacement;
