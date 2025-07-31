// pages/services/ivc-filter-dvt.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const IVCFilterDVT = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Dr. Yousuf Memon – IVC Filter Placement Expert</title>
  <meta name="description" content="Minimally invasive IVC filter placement in Karachi by Dr. Yousuf Memon. Prevent blood clots and protect your health. Book your consultation today." />
  <meta name="keywords" content="IVC filter, DVT treatment, pulmonary embolism prevention, blood clot filter, venous thromboembolism, retrievable filter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.yourclinic.com/services/ivc-filter-dvt" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="IVC Filter for DVT Prevention | Your Clinic Name" />
        <meta property="og:description" content="IVC filter placement to prevent pulmonary embolism in high-risk DVT patients when anticoagulants can't be used." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourclinic.com/services/ivc-filter-dvt" />
        <meta property="og:image" content="https://www.yourclinic.com/images/ivc-filter-social.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IVC Filter for DVT Prevention | Your Clinic Name" />
        <meta name="twitter:description" content="IVC filter placement to prevent pulmonary embolism in high-risk DVT patients." />
        <meta name="twitter:image" content="https://www.yourclinic.com/images/ivc-filter-social.jpg" />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "IVC Filter Placement",
            "description": "Minimally invasive procedure to place a filter in the inferior vena cava to prevent pulmonary embolism",
            "medicalSpecialty": {
              "@type": "MedicalSpecialty",
              "name": "Interventional Radiology"
            },
            "recognizingAuthority": {
              "@type": "Organization",
              "name": "Society of Interventional Radiology"
            },
            "relevantSpecialty": {
              "@type": "MedicalSpecialty",
              "name": "Vascular Medicine"
            },
            "howPerformed": "Image-guided percutaneous placement via jugular or femoral vein access",
            "preparation": "Blood tests, imaging studies, anticoagulation management",
            "potentialComplications": "Filter migration, perforation, thrombosis, retrieval complications",
            "followup": "Regular imaging surveillance and potential filter retrieval"
          })}
        </script>
      </Head>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">IVC Filter for Deep Vein Thrombosis</h1>
          <p className="text-lg md:text-xl">Preventing pulmonary embolism when anticoagulation isn't an option</p>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className="container mx-auto px-6 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li><a href="/" className="hover:text-blue-600">Home</a></li>
          <li><span aria-hidden="true">/</span></li>
          <li><a href="/services" className="hover:text-blue-600">Services</a></li>
          <li><span aria-hidden="true">/</span></li>
          <li className="text-blue-600" aria-current="page">IVC Filter for DVT</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Overview */}
            <section aria-labelledby="overview-heading" className="mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 id="overview-heading" className="text-2xl font-bold text-gray-800 mb-4">Understanding IVC Filters</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Deep Vein Thrombosis (DVT)</h3>
                    <p className="text-gray-700 mb-4">
                      DVT occurs when blood clots form in deep veins, typically in the legs. These clots can break loose and travel to the lungs causing pulmonary embolism (PE), which accounts for approximately 100,000 deaths annually in the U.S.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">IVC Filter Mechanism</h3>
                    <p className="text-gray-700">
                      The inferior vena cava (IVC) filter is a small, cage-like device placed in the IVC (the body's largest vein) to trap clots before they reach the lungs. Modern filters have a 90-97% success rate in preventing PE.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Points */}
            <section aria-labelledby="indications-heading" className="mb-8 grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 id="indications-heading" className="text-xl font-semibold text-blue-700 mb-3">Clinical Indications</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Contraindication to anticoagulation (active bleeding, recent surgery)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Recurrent VTE despite adequate anticoagulation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>High-risk trauma patients with prolonged immobilization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Perioperative protection in patients with acute VTE</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Procedure Overview</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span><strong>Duration:</strong> 30-60 minutes (outpatient in 80% of cases)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span><strong>Anesthesia:</strong> Local with conscious sedation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span><strong>Access:</strong> Femoral or jugular vein puncture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 mr-2">•</span>
                    <span><strong>Imaging:</strong> Fluoroscopic guidance with contrast venography</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Procedure */}
            <section aria-labelledby="procedure-heading" className="mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 id="procedure-heading" className="text-2xl font-bold text-gray-800 mb-4">IVC Filter Placement Procedure</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Pre-Procedure Preparation</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Comprehensive evaluation including ultrasound/CT venography</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Assessment of IVC anatomy (diameter, anomalies)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>NPO status for 6 hours prior to procedure</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Filter Placement</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Sterile preparation and local anesthesia administration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Ultrasound-guided venous access (5F sheath)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Contrast venography to identify renal vein location</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Filter deployment below renal veins (typically L3 level)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Filter Types</h3>
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div className="bg-blue-50 p-4 rounded">
                        <h4 className="font-semibold text-blue-700">Permanent Filters</h4>
                        <ul className="text-sm text-gray-700 space-y-1 mt-1">
                          <li>• Greenfield (stainless steel/titanium)</li>
                          <li>• TrapEase (nitinol)</li>
                          <li>• For lifelong protection</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded">
                        <h4 className="font-semibold text-green-700">Retrievable Filters</h4>
                        <ul className="text-sm text-gray-700 space-y-1 mt-1">
                          <li>• Option, G2, Celect (all nitinol)</li>
                          <li>• Typically removed within 3-6 months</li>
                          <li>• 80-90% retrieval success rate</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits/Risks */}
            <section aria-labelledby="benefits-risks-heading" className="mb-8">
              <h2 id="benefits-risks-heading" className="text-2xl font-bold text-gray-800 mb-4">Benefits vs. Risks</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Clinical Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-800">PE Prevention</h4>
                        <p className="text-gray-700 text-sm">90-97% effective in preventing pulmonary embolism</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-800">Minimally Invasive</h4>
                        <p className="text-gray-700 text-sm">Low complication rate (2-5%) compared to surgical alternatives</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-800">Temporary Option</h4>
                        <p className="text-gray-700 text-sm">Retrievable filters allow removal when anticoagulation becomes safe</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">Potential Risks</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <div>
                        <h4 className="font-medium text-gray-800">Filter-Related Complications</h4>
                        <p className="text-gray-700 text-sm">Migration (1-3%), perforation (5-9%), fracture (2-10%)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <div>
                        <h4 className="font-medium text-gray-800">Thrombotic Events</h4>
                        <p className="text-gray-700 text-sm">IVC thrombosis (2-10%), DVT at insertion site (5-20%)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <div>
                        <h4 className="font-medium text-gray-800">Retrieval Challenges</h4>
                        <p className="text-gray-700 text-sm">Tilted filters or endothelialization may complicate removal</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Follow-Up Section */}
            <section aria-labelledby="followup-heading" className="mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 id="followup-heading" className="text-2xl font-bold text-gray-800 mb-4">Post-Procedure Management</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Immediate Care</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>4-6 hours bed rest post femoral access</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Monitor for access site bleeding/hematoma</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Resume anticoagulation when clinically appropriate</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Long-Term Monitoring</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Retrievable filters: Schedule removal within 3-6 months</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Annual abdominal X-ray for permanent filters</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Monitor for late complications (penetration, migration)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">How long can an IVC filter remain in place?</h3>
                    <p className="text-gray-700">
                      Permanent filters are designed to remain indefinitely, while retrievable filters should typically be removed within 3-6 months. After 6 months, retrieval becomes more challenging due to endothelialization. The FDA recommends removing retrievable filters as soon as protection from PE is no longer needed.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I have an MRI with an IVC filter?</h3>
                    <p className="text-gray-700">
                      Most modern IVC filters are MRI conditional, meaning they can safely undergo MRI scanning at 1.5 or 3 Tesla. However, you should always inform your radiologist about the presence of an IVC filter before any imaging procedure. The specific filter model will determine any special considerations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">What are the signs of IVC filter complications?</h3>
                    <p className="text-gray-700">
                      Seek medical attention for: new or worsening leg swelling (possible DVT), abdominal/back pain (filter penetration), sudden shortness of breath (possible PE despite filter), or palpitations (rare cardiac migration). Regular follow-up helps detect asymptomatic complications like filter fracture or tilt.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-6">
            <div className="sticky top-6 space-y-6">
              {/* Emergency CTA */}
              <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-lg font-bold mb-3">PE Emergency Signs</h3>
                <ul className="mb-4 space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Sudden shortness of breath</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Sharp chest pain worse with breathing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Rapid heart rate (100 bpm)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Coughing up blood</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Lightheadedness or fainting</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-red-600 font-semibold py-2 px-4 rounded-lg hover:bg-red-50 transition text-sm">
                  Emergency Contact
                </button>
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">IVC Filter Facts</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-700">Placement Success</h4>
                    <p className="text-gray-600">98-100% technical success rate</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">PE Prevention</h4>
                    <p className="text-gray-600">90-97% effective</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Complication Rate</h4>
                    <p className="text-gray-600">2-5% overall</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Retrieval Window</h4>
                    <p className="text-gray-600">Optimal within 3-6 months</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Filter Longevity</h4>
                    <p className="text-gray-600">Permanent filters last decades</p>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Related Services</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">DVT Thrombolysis</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Anticoagulation Management</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Venous Stenting</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Thrombophilia Testing</a>
                  </li>
                </ul>
              </div>

              {/* Consultation CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-lg font-bold mb-3">Consult Our Specialists</h3>
                <p className="mb-4 text-sm">Our vascular team can evaluate if an IVC filter is appropriate for your condition.</p>
                <button className="w-full bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition text-sm">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default IVCFilterDVT;
