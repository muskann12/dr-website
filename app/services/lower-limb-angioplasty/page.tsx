// pages/services/lower-limb-angioplasty-diabetic-foot.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const LowerLimbAngioplastyDiabeticFoot = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
 <title>Lower Limb Angioplasty | Dr. Yousuf Memon Karachi</title>
  <meta name="description" content="Minimally invasive lower limb angioplasty by Dr. Yousuf Memon helps restore blood flow and relieve leg pain. Book your consultation today." />
  <meta name="keywords" content="diabetic foot angioplasty, lower limb angioplasty, PAD treatment, diabetic foot care, minimally invasive vascular procedure" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.yourclinic.com/services/lower-limb-angioplasty-diabetic-foot" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Lower Limb Angioplasty for Diabetic Foot | Your Clinic Name" />
        <meta property="og:description" content="Minimally invasive treatment to restore blood flow in diabetic foot patients. Learn about procedures, benefits, and risks." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourclinic.com/services/lower-limb-angioplasty-diabetic-foot" />
        <meta property="og:image" content="https://www.yourclinic.com/images/limb-social-preview.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lower Limb Angioplasty for Diabetic Foot | Your Clinic Name" />
        <meta name="twitter:description" content="Minimally invasive treatment to restore blood flow in diabetic foot patients." />
        <meta name="twitter:image" content="https://www.yourclinic.com/images/limb-social-preview.jpg" />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Lower Limb Angioplasty for Diabetic Foot",
            "description": "Minimally invasive procedure to restore blood flow in patients with diabetic foot complications",
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
              "name": "Vascular Medicine"
            },
            "howPerformed": "Image-guided balloon angioplasty with possible stent placement",
            "preparation": "Fasting, medication review, vascular imaging",
            "potentialComplications": "Restenosis, bleeding, infection, contrast reactions",
            "followup": "Regular vascular monitoring and diabetic foot care"
          })}
        </script>
      </Head>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lower Limb Angioplasty for Diabetic Foot</h1>
          <p className="text-xl md:text-2xl">Restore blood flow to prevent complications and promote healing</p>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className="container mx-auto px-6 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li><a href="/" className="hover:text-blue-600">Home</a></li>
          <li><span aria-hidden="true">/</span></li>
          <li><a href="/services" className="hover:text-blue-600">Services</a></li>
          <li><span aria-hidden="true">/</span></li>
          <li className="text-blue-600" aria-current="page">Lower Limb Angioplasty</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Overview */}
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-3xl font-bold text-gray-800 mb-6">Understanding Diabetic Foot and Angioplasty</h2>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">What is Diabetic Foot?</h3>
                <p className="text-gray-700 mb-4">
                  Diabetic foot is a serious complication of diabetes where chronic high blood sugar levels lead to nerve damage (neuropathy) and poor blood circulation (peripheral artery disease or PAD) in the lower limbs. This combination can cause:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>Non-healing foot ulcers</li>
                  <li>Increased risk of infections</li>
                  <li>Gangrene in severe cases</li>
                  <li>High risk of lower limb amputation</li>
                </ul>
                <p className="text-gray-700">
                  Early intervention with procedures like angioplasty can significantly improve outcomes and prevent complications.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">What is Lower Limb Angioplasty?</h3>
                <p className="text-gray-700 mb-4">
                  Lower limb angioplasty is a minimally invasive endovascular procedure designed to restore blood flow in narrowed or blocked arteries of the legs and feet. For diabetic patients, this treatment is particularly crucial because:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>Diabetes accelerates arterial disease progression</li>
                  <li>Healing requires adequate blood flow</li>
                  <li>Prevents minor foot problems from becoming major complications</li>
                </ul>
              </div>
              
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6">
                <Image 
                  src="/images/limb.png" 
                  alt="Diagram showing lower limb angioplasty procedure with balloon catheter opening blocked artery" 
                  layout="fill" 
                  objectFit="cover" 
                  priority
                />
              </div>
            </section>

            {/* Purpose */}
            <section aria-labelledby="purpose-heading">
              <h2 id="purpose-heading" className="text-3xl font-bold text-gray-800 mb-6">Why Angioplasty is Crucial for Diabetic Foot</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Improved Healing</h3>
                  <p className="text-gray-700">
                    Restores circulation to promote healing of existing ulcers and prevents new ones from forming by delivering oxygen and nutrients to tissues.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Limb Salvage</h3>
                  <p className="text-gray-700">
                    Reduces amputation risk by up to 50% in critical limb ischemia cases when combined with proper wound care.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Symptom Relief</h3>
                  <p className="text-gray-700">
                    Alleviates ischemic pain, improves walking distance, and enhances overall quality of life for diabetic patients.
                  </p>
                </div>
              </div>
            </section>

            {/* Procedure */}
            <section aria-labelledby="procedure-heading" className="mb-12">
              <h2 id="procedure-heading" className="text-3xl font-bold text-gray-800 mb-6">Our Advanced Angioplasty Procedure</h2>
              <div className="bg-blue-50 rounded-lg shadow-md p-6 border border-blue-200">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">Pre-Procedure Preparation</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Comprehensive vascular assessment with ABI, Doppler ultrasound, and CT/MR angiography</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Multidisciplinary team evaluation (vascular specialist, endocrinologist, podiatrist)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Medication review and adjustment (especially blood thinners and diabetes medications)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Pre-procedure fasting and hydration guidelines</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">During the Procedure</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Local anesthesia with sedation or general anesthesia based on complexity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Small puncture in femoral or radial artery for catheter access</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Real-time fluoroscopy guidance to navigate to blockage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Balloon inflation to compress plaque against artery walls</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Stent placement in some cases to maintain artery patency</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Average procedure duration: 60-120 minutes</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">Post-Procedure Recovery</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>2-4 hours of monitored bed rest to ensure access site stability</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Assessment of pedal pulses and perfusion improvement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Discharge same day or next morning for most patients</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Detailed wound care instructions for diabetic foot patients</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits & Risks */}
            <section aria-labelledby="benefits-risks-heading">
              <h2 id="benefits-risks-heading" className="text-3xl font-bold text-gray-800 mb-6">Benefits vs. Risks</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Key Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-800">Minimally Invasive Approach</h4>
                        <p className="text-gray-700 text-sm">Small puncture rather than surgical incision, reducing tissue trauma</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-800">Improved Circulation</h4>
                        <p className="text-gray-700 text-sm">Immediate blood flow restoration to ischemic tissues</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-800">Reduced Amputation Risk</h4>
                        <p className="text-gray-700 text-sm">Up to 50% lower risk of major limb amputation when combined with proper care</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <div>
                        <h4 className="font-medium text-gray-800">Faster Recovery</h4>
                        <p className="text-gray-700 text-sm">Return to normal activities within 1-2 days vs. weeks with surgery</p>
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
                        <h4 className="font-medium text-gray-800">Restenosis</h4>
                        <p className="text-gray-700 text-sm">20-30% chance of artery re-narrowing within 6-12 months</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <div>
                        <h4 className="font-medium text-gray-800">Access Site Complications</h4>
                        <p className="text-gray-700 text-sm">Bleeding, hematoma, or infection at catheter entry point (2-5% risk)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <div>
                        <h4 className="font-medium text-gray-800">Contrast Reactions</h4>
                        <p className="text-gray-700 text-sm">Allergic reactions or kidney stress from iodinated contrast</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <div>
                        <h4 className="font-medium text-gray-800">Distal Embolization</h4>
                        <p className="text-gray-700 text-sm">Small chance of plaque debris breaking loose and blocking smaller vessels</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Candidates */}
            <section aria-labelledby="candidates-heading" className="mb-12">
              <h2 id="candidates-heading" className="text-3xl font-bold text-gray-800 mb-6">Ideal Candidates for This Procedure</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Diabetic patients with confirmed peripheral artery disease (PAD)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Non-healing foot ulcers due to poor circulation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Critical limb ischemia (rest pain, tissue loss)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Those who have failed conservative management (wound care, medications)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Patients with focal, accessible lesions suitable for angioplasty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Those medically unfit for open bypass surgery</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Follow-up */}
            <section aria-labelledby="followup-heading">
              <h2 id="followup-heading" className="text-3xl font-bold text-gray-800 mb-6">Long-Term Management After Angioplasty</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Medical Follow-Up</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>First follow-up within 1-2 weeks post-procedure</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Regular Doppler ultrasound surveillance (every 3-6 months initially)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Continued podiatry care for diabetic foot management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Medication adherence (antiplatelets, statins, diabetes control)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Lifestyle Modifications</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Strict glycemic control (HbA1c &lt; 7% target)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Complete smoking cessation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Daily foot inspection and proper footwear</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Supervised exercise program to promote collateral circulation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section aria-labelledby="faq-heading" className="mb-12">
              <h2 id="faq-heading" className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">How long does the improved circulation last after angioplasty?</h3>
                    <p className="text-gray-700">
                      While results vary, most patients experience significant improvement for 1-3 years. Diabetic patients may have shorter durability due to their underlying disease process. Regular follow-up helps detect restenosis early for timely re-intervention if needed.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Is angioplasty painful?</h3>
                    <p className="text-gray-700">
                      The procedure itself is not painful due to local anesthesia. Some pressure may be felt during balloon inflation. Post-procedure, most patients report only mild discomfort at the access site for 1-2 days, manageable with over-the-counter pain relievers.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Can angioplasty be repeated if the artery narrows again?</h3>
                    <p className="text-gray-700">
                      Yes, angioplasty can often be repeated. For recurrent blockages, additional techniques like drug-coated balloons or stents may be used to improve long-term results. Each case is evaluated individually based on the patient's anatomy and overall health.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-6 space-y-6">
              {/* Emergency CTA */}
              <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4">Diabetic Foot Emergency?</h3>
                <p className="mb-4">Seek immediate care for:</p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Non-healing ulcers or wounds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Signs of infection (redness, swelling, pus)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Blackened or discolored toes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Severe foot pain at rest</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-red-600 font-semibold py-3 px-4 rounded-lg hover:bg-red-50 transition">
                  Call Emergency
                </button>
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Procedure At a Glance</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Procedure Time</h4>
                    <p className="text-gray-600">1-2 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Success Rate</h4>
                    <p className="text-gray-600">85-90% immediate technical success</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Hospital Stay</h4>
                    <p className="text-gray-600">Outpatient or 1 night observation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Recovery Time</h4>
                    <p className="text-gray-600">1-2 days to normal activities</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Durability</h4>
                    <p className="text-gray-600">1-3 years typically</p>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Related Services</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Diabetic Foot Care Clinic</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Vascular Surgery</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Wound Care Management</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Diabetes Management Program</a>
                  </li>
                </ul>
              </div>

              {/* Patient Stories */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Patient Success Stories</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-600 italic">"After my angioplasty, the pain in my legs disappeared and my foot ulcer finally healed after months of struggling."</p>
                    <p className="text-gray-800 font-medium mt-2">- Rajesh, 58</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-600 italic">"This procedure saved me from amputation. I can walk comfortably now and take care of my grandchildren again."</p>
                    <p className="text-gray-800 font-medium mt-2">- Meena, 65</p>
                  </div>
                </div>
              </div>

              {/* CTA Consultation */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4">Schedule a Consultation</h3>
                <p className="mb-6">Our vascular specialists can evaluate if this procedure is right for you.</p>
                <button className="w-full bg-white text-blue-600 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition">
                  Book Appointment
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default LowerLimbAngioplastyDiabeticFoot;
