// pages/services/ivc-filter-dvt.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

const IVCFilterDVT = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">IVC Filter Placement in Pakistan</h1>
        <p className="text-gray-700 mb-6"><strong>IVC Filter Placement in Pakistan</strong> is a minimally invasive procedure to prevent life-threatening blood clots. Dr. Yousuf Memon provides expert filter placement and removal for DVT and clotting disorders nationwide.</p>
      </div>
      <Head>
        <title>IVC Filter for DVT in Pakistan | Pulmonary Embolism Prevention | Dr. Yousuf Memon</title>
        <meta 
          name="description" 
          content="Dr. Yousuf Memon offers IVC filter placement in Pakistan to prevent pulmonary embolism in high-risk DVT patients when blood thinners can't be used. Minimally invasive procedure with quick recovery." 
        />
        <meta
          name="keywords"
          content="IVC filter Pakistan, DVT treatment Karachi, pulmonary embolism prevention, blood clot filter, minimally invasive vascular procedure, interventional radiology Pakistan"
        />
        <meta property="og:title" content="IVC Filter for DVT in Pakistan | Pulmonary Embolism Prevention | Dr. Yousuf Memon" />
        <meta property="og:description" content="Prevent pulmonary embolism with IVC filter placement by Dr. Yousuf Memon. Safe, minimally invasive DVT treatment in Pakistan." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dryousufmemon.com/services/ivc-filter-placement" />
        <meta property="og:image" content="https://www.dryousufmemon.com/gallery/images/ivc-filter-dvt.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IVC Filter for DVT in Pakistan | Pulmonary Embolism Prevention | Dr. Yousuf Memon" />
        <meta name="twitter:description" content="Get expert IVC filter placement for DVT in Pakistan. Book your procedure with Dr. Yousuf Memon, top interventional radiologist." />
        <meta name="twitter:image" content="https://www.dryousufmemon.com/gallery/images/ivc-filter-dvt.jpg" />
        <link rel="canonical" href="https://www.dryousufmemon.com/services/ivc-filter-placement" />
      </Head>

      {/* Enhanced schema markup */}
      <Script type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "IVC Filter Placement",
            "description": "Minimally invasive procedure to prevent pulmonary embolism in high-risk DVT patients",
            "procedureType": "Minimally invasive",
            "bodyLocation": "Inferior vena cava",
            "howPerformed": "Catheter insertion via groin/neck vein with filter deployment under imaging guidance",
            "preparation": "Blood tests, imaging studies",
            "followup": "Monitoring for complications, possible retrieval",
            "risks": "Filter migration, thrombosis, perforation",
            "medicalSpecialty": {
              "@type": "MedicalSpecialty",
              "name": "Interventional Radiology"
            },
            "provider": {
              "@type": "MedicalClinic",
              "name": "Dr. Yousuf Memon Clinic",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Clinic Address",
                "addressLocality": "Karachi",
                "addressRegion": "Sindh",
                "postalCode": "75500",
                "addressCountry": "PK"
              },
              "telephone": "+923367889143"
            }
          }
        `}
      </Script>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-4xl md:text-5xl font-bold mb-4">IVC Filter for DVT in Pakistan</p>
          <p className="text-xl md:text-2xl font-bold mb-4">Life-saving pulmonary embolism prevention when blood thinners can't be used</p>
          <div className="mt-6">
            <a href="tel:+923367889143" className="bg-white text-blue-800 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition inline-block">
              Emergency Consultation: +92 336-7889143
            </a>
          </div>
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
            <li className="text-blue-600">IVC Filter for DVT</li>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding IVC Filters for DVT</h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">DVT in Pakistani Patients</h3>
                    <p className="text-gray-700 mb-4">
                      Deep vein thrombosis (DVT) is increasingly common in Pakistan due to factors like genetic predisposition, sedentary lifestyles, and certain medical conditions. When blood clots form in deep veins (usually legs), they can break loose and cause life-threatening pulmonary embolism (PE).
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">IVC Filter Purpose</h3>
                    <p className="text-gray-700">
                      An IVC (inferior vena cava) filter is a small metal device placed in the main abdominal vein to catch blood clots before they reach the lungs. This minimally invasive procedure is crucial when blood thinners can't be used - a common scenario in trauma patients or before certain surgeries in Pakistan.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/ivc-filter.png" 
                  alt="IVC filter placement procedure performed by interventional radiologist in Pakistan" 
                  layout="fill" 
                  objectFit="cover" 
                  priority
                />
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-12 bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Our IVC Filter Service?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Specialized Expertise</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Performed by Dr. Yousuf Memon, experienced in vascular interventions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Advanced imaging technology for precise placement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Collaboration with hematologists and vascular surgeons</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Patient Advantages</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Life-saving alternative when anticoagulants are contraindicated</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Minimally invasive with quick recovery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Option for temporary (retrievable) filters when appropriate</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Indications */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Who Needs an IVC Filter in Pakistan?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Common Indications</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>DVT with contraindication to blood thinners (recent bleeding, surgery)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Recurrent PE despite adequate anticoagulation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>High-risk trauma patients (common in Pakistani road accidents)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Pre-operative protection for high DVT risk surgeries</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Special Considerations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Pregnancy with DVT and bleeding risk</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Cancer patients with high bleeding risk</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Patients with hereditary thrombophilias (more common in some Pakistani ethnic groups)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>When anticoagulation monitoring is unreliable</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Procedure */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">IVC Filter Placement Procedure</h2>
              <div className="bg-blue-50 rounded-lg shadow-md p-6 border border-blue-200">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">1. Pre-Procedure Preparation</h3>
                    <p className="text-gray-700">
                      • Comprehensive evaluation including ultrasound/CT venography<br/>
                      • Blood tests (coagulation profile, renal function)<br/>
                      • NPO (nothing by mouth) for 6 hours before procedure<br/>
                      • Review of medications (especially blood thinners)<br/>
                      • Informed consent discussion
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">2. During the Procedure</h3>
                    <p className="text-gray-700 mb-2">
                      • Local anesthesia with sedation (rarely general anesthesia)<br/>
                      • Small puncture in groin or neck (1-2mm)<br/>
                      • Catheter guided to IVC under fluoroscopic imaging<br/>
                      • Filter deployed in precise position below renal veins<br/>
                      • Confirmation of proper placement with imaging<br/>
                      • Procedure duration: 30-60 minutes
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">3. Post-Procedure Care</h3>
                    <p className="text-gray-700">
                      • 4-6 hours bed rest to prevent access site bleeding<br/>
                      • Monitoring for complications (rare)<br/>
                      • Discharge same day or next morning<br/>
                      • Follow-up imaging as needed<br/>
                      • For retrievable filters: planned removal when no longer needed
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits & Risks */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits vs Risks of IVC Filters</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Key Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>90-95% effective in preventing pulmonary embolism</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Life-saving when anticoagulation isn't possible</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Minimally invasive with quick recovery (1-2 days)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Option for temporary protection with retrievable filters</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Can be placed emergently when needed</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Potential Risks</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Filter migration (1-3% cases)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>IVC thrombosis (2-5%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Access site complications (hematoma/infection - &lt;2%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Penetration of IVC wall (rare)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Difficulty retrieving temporary filters if left too long</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">1. How much does IVC filter placement cost in Pakistan?</h3>
                    <p className="text-gray-700">
                      Costs vary by hospital and filter type but are significantly more affordable than in Western countries. Many insurance plans cover this procedure when medically necessary. Emergency cases are prioritized at our facility.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Is this procedure available throughout Pakistan?</h3>
                    <p className="text-gray-700">
                      IVC filter placement requires specialized interventional radiologists and is primarily available at major medical centers in Karachi, Lahore, and Islamabad. Our facility performs this procedure routinely with excellent outcomes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">3. How long does an IVC filter last?</h3>
                    <p className="text-gray-700">
                      Permanent filters are designed to remain for life. Retrievable filters should be removed within 3-6 months typically, though some newer models can stay longer. We schedule follow-ups to determine optimal removal timing.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">4. Will I need blood thinners after filter placement?</h3>
                    <p className="text-gray-700">
                      Filters don't treat DVT - they only prevent PE. When the bleeding risk passes, anticoagulation is usually started to treat the existing clot. We develop personalized plans for each patient's situation.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Candidates */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">IVC Filter Follow-Up Care in Pakistan</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Imaging follow-up:</strong> Ultrasound or CT at 1 month, then as needed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Retrieval planning:</strong> For temporary filters, schedule removal when safe</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Anticoagulation:</strong> Start when bleeding risk decreases (if indicated)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>DVT prevention:</strong> Compression stockings, mobility, hydration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Emergency signs:</strong> Educate about PE symptoms requiring immediate care</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-6 space-y-6">
              {/* Emergency CTA */}
              <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4">Pulmonary Embolism Emergency?</h3>
                <p className="mb-4">Seek immediate care for:</p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Sudden shortness of breath</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Chest pain worse with breathing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Coughing up blood</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Rapid heart rate with dizziness</span>
                  </li>
                </ul>
                <a href="tel:+923367889143" className="w-full bg-white text-red-800 font-semibold py-3 px-4 rounded-lg hover:bg-red-50 transition block text-center">
                  Emergency: +92 336-7889143
                </a>
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Procedure Highlights</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Procedure Time</h4>
                    <p className="text-gray-600">30-60 minutes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Success Rate</h4>
                    <p className="text-gray-600">90-95% PE prevention</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Hospital Stay</h4>
                    <p className="text-gray-600">Outpatient or 1 night</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Recovery Time</h4>
                    <p className="text-gray-600">1-2 days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Anesthesia</h4>
                    <p className="text-gray-600">Local with sedation</p>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Related Services in Pakistan</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/services/dvt-treatment" className="text-blue-600 hover:underline">DVT Treatment Program</a>
                  </li>
                  <li>
                    <a href="/services/anticoagulation-clinic" className="text-blue-600 hover:underline">Anticoagulation Clinic</a>
                  </li>
                  <li>
                    <a href="/services/vascular-ultrasound" className="text-blue-600 hover:underline">Vascular Ultrasound</a>
                  </li>
                  <li>
                    <a href="/services/thrombophilia-testing" className="text-blue-600 hover:underline">Thrombophilia Testing</a>
                  </li>
                </ul>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Consult Dr. Yousuf Memon</h3>
                <p className="text-gray-700 mb-4">For DVT evaluation or IVC filter consultation:</p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Phone: <a href="tel:+923367889143" className="text-blue-600 hover:underline">+92 336-7889143</a></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Email: <a href="mailto:info@dryousufmemon.com" className="text-blue-600 hover:underline">info@dryousufmemon.com</a></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Clinic Hours: Mon-Sat, 9AM-5PM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>24/7 Emergency Services Available</span>
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition block text-center">
                  Request Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IVCFilterDVT;