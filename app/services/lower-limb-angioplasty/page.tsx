// pages/services/lower-limb-angioplasty-diabetic-foot.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const LowerLimbAngioplastyDiabeticFoot = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Lower Limb Angioplasty for Diabetic Foot | Dr. Yousuf Memon Clinic</title>
        <meta name="description" content="Minimally invasive treatment to restore blood flow in diabetic foot patients. Learn about procedures, benefits, and risks." />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lower Limb Angioplasty for Diabetic Foot</h1>
          <p className="text-xl md:text-2xl">Restore blood flow to prevent complications and promote healing</p>
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
            <li className="text-blue-600">Lower Limb Angioplasty for Diabetic Foot</li>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Diabetic Foot?</h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  Diabetic foot is a complication of diabetes where chronic high blood sugar levels lead to nerve damage (neuropathy) and poor blood circulation (peripheral artery disease or PAD) in the lower limbs. This can cause ulcers, infections, and in severe cases, gangrene. Diabetic foot is a major cause of morbidity and can lead to amputation if not managed properly.
                </p>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Lower Limb Angioplasty?</h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  Lower limb angioplasty is a minimally invasive procedure used to restore blood flow in the arteries of the legs. It is commonly performed in patients with PAD, including those with diabetic foot. The procedure involves inserting a balloon catheter into the narrowed or blocked artery and inflating it to widen the vessel, improving blood flow to the affected area.
                </p>
              </div>
              
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/limb.png" 
                  alt="Lower limb angioplasty procedure" 
                  layout="fill" 
                  objectFit="cover" 
                />
              </div>
            </section>

            {/* Purpose */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Purpose of Angioplasty in Diabetic Foot</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Improve Blood Flow</h3>
                  <p className="text-gray-700">
                    Angioplasty helps increase blood flow to the foot and lower leg, promoting healing of ulcers and reducing the risk of infection and gangrene.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Avoid Amputation</h3>
                  <p className="text-gray-700">
                    By restoring circulation, angioplasty can help prevent the need for amputation in severe cases of diabetic foot.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Relieve Symptoms</h3>
                  <p className="text-gray-700">
                    It can alleviate symptoms of PAD, such as pain, cramping, and difficulty walking.
                  </p>
                </div>
              </div>
            </section>

            {/* Procedure */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Procedure Details</h2>
              <div className="bg-blue-50 rounded-lg shadow-md p-6 border border-blue-200">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">1. Pre-Procedure</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Assessment with physical exam and imaging (Doppler ultrasound, CT/MR angiography)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Multidisciplinary team consultation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Medication adjustments and fasting instructions</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">2. During Procedure</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Local anesthesia with sedation or general anesthesia</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Catheter inserted via femoral or radial artery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Balloon inflated to widen artery, stent placement if needed</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Fluoroscopy guidance for accuracy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Duration: 1-2 hours</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">3. Post-Procedure</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Monitoring for complications (bleeding, pain at insertion site)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Typically same-day or next-day discharge</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Regular follow-up with imaging to monitor artery health</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits & Risks */}
            <section className="mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Minimally invasive with quicker recovery than surgery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Significantly improves blood flow to affected limb</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Reduces amputation risk in severe cases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Alleviates pain and improves mobility</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">Risks and Considerations</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Restenosis (artery may narrow again)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Bleeding or infection at catheter insertion site</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Artery damage during procedure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Contrast dye reactions or kidney issues</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Candidates */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Who is a Candidate?</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Patients with PAD and diabetic foot complications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Those with significant arterial blockages causing poor wound healing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Patients not suitable for surgical bypass</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Those with persistent symptoms despite conservative treatment</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Follow-up */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Follow-Up and Long-Term Management</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Medical Monitoring</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Regular check-ups and Doppler ultrasound</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Monitoring for restenosis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Comprehensive diabetic foot care</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Lifestyle Changes</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Strict blood sugar control</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Smoking cessation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Healthy diet and regular exercise</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Proper foot care and inspection</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
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
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Facts</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Procedure Time</h4>
                    <p className="text-gray-600">1-2 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Success Rate</h4>
                    <p className="text-gray-600">85-90% immediate success</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Hospital Stay</h4>
                    <p className="text-gray-600">Typically outpatient or 1 night</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Recovery Time</h4>
                    <p className="text-gray-600">1-2 days to resume normal activities</p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerLimbAngioplastyDiabeticFoot;