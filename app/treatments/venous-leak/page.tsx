// pages/treatments/venous-leak.js
import React from "react";
import Head from "next/head";
import { FaHeartbeat, FaStethoscope, FaClinicMedical, FaUserMd, FaQuestionCircle, FaClock, FaShieldAlt, FaSyringe } from "react-icons/fa";

const VenousLeak = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>
          Venous Leak Treatment in Pakistan | Erectile Dysfunction Solutions by
          Dr Yousuf Memon
        </title>
        <meta
          name="description"
          content="Learn about Venous Leak, a common cause of erectile dysfunction, and get advanced treatment in Pakistan by Dr. Yousuf Memon. Minimally invasive, safe, and effective procedures available in Karachi and across Pakistan."
        />
        <meta
          name="keywords"
          content="Venous Leak treatment Pakistan, Erectile Dysfunction cure Karachi, Dr Yousuf Memon ED specialist, venous leak embolization Pakistan, men's health doctor Pakistan"
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/treatments/venous-leak"
        />
      </Head>

      {/* 🟢 Hero Section */}
      <section className="bg-gradient-to-r from-teal-800 to-teal-600 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced Venous Leak Treatment in Pakistan
          </h1>
          <p className="text-lg mb-6">
            Specialized minimally invasive solutions by <strong>Dr. Yousuf Memon</strong>, 
            a leading interventional radiologist in Pakistan
          </p>
          <div className="bg-white/20 p-4 rounded-lg max-w-2xl mx-auto">
            <p className="text-lg">
              "Venous leak is a physical vascular condition that prevents maintaining firm erections. 
              With modern embolization techniques, it's now treatable without major surgery."
            </p>
            <p className="mt-2 font-semibold">- Dr. Yousuf Memon</p>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 -mt-10">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="flex justify-center mb-3">
            <FaClock className="text-teal-600 text-2xl" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Quick Procedure</h3>
          <p className="text-sm text-gray-600">Minimally invasive treatment with local anesthesia</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="flex justify-center mb-3">
            <FaShieldAlt className="text-teal-600 text-2xl" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Safe & Effective</h3>
          <p className="text-sm text-gray-600">Proven embolization technique with high success rates</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="flex justify-center mb-3">
            <FaUserMd className="text-teal-600 text-2xl" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Expert Care</h3>
          <p className="text-sm text-gray-600">By Pakistan's leading interventional radiologist</p>
        </div>
      </div>

      {/* 🟢 What is Venous Leak */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="flex items-start mb-6">
          <div className="bg-teal-100 p-3 rounded-full mr-4">
            <FaHeartbeat className="text-teal-700 text-xl" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              What is Venous Leak?
            </h2>
            <p className="text-gray-600">
              A vascular condition where penile veins fail to trap blood during erection
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-500">
          <p className="text-gray-600 mb-4">
            Venous leak is a vascular condition where the veins in the penis are
            unable to trap blood effectively during an erection. As a result, men
            may experience weak, short-lasting, or unstable erections. It is one
            of the most common physical causes of erectile dysfunction (ED) and
            affects men of all ages, though it is more common after 40.
          </p>
          <p className="text-gray-600">
            While many men initially blame psychological issues, venous leak is a
            physical condition that requires proper diagnosis and medical
            treatment by an experienced doctor.
          </p>
        </div>
        
        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-3">Normal Erection vs. Venous Leak</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-teal-700 font-medium mb-2">Normal Function</h4>
              <ul className="list-disc ml-5 text-gray-700 space-y-1 text-sm">
                <li>Blood flows into penis during arousal</li>
                <li>Veins compress to trap blood inside</li>
                <li>Firm erection maintained until ejaculation</li>
              </ul>
            </div>
            <div>
              <h4 className="text-red-600 font-medium mb-2">Venous Leak</h4>
              <ul className="list-disc ml-5 text-gray-700 space-y-1 text-sm">
                <li>Blood flows in normally</li>
                <li>Veins fail to trap blood effectively</li>
                <li>Blood leaks out, causing soft erections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 Causes & Risk Factors */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start mb-6">
            <div className="bg-teal-100 p-3 rounded-full mr-4">
              <FaStethoscope className="text-teal-700 text-xl" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Causes and Risk Factors of Venous Leak
              </h2>
              <p className="text-gray-600">Understanding what contributes to venous leak</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-3 border-b pb-2">Primary Causes</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-teal-100 text-teal-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">1</div>
                  <span>Aging and reduced vascular elasticity</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 text-teal-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">2</div>
                  <span>Peyronie's disease (penile curvature)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 text-teal-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">3</div>
                  <span>Previous pelvic or penile trauma</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-3 border-b pb-2">Risk Factors</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-teal-100 text-teal-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">4</div>
                  <span>High blood pressure (hypertension)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 text-teal-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">5</div>
                  <span>Diabetes mellitus</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 text-teal-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">6</div>
                  <span>Smoking and unhealthy lifestyle</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 text-teal-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">7</div>
                  <span>Vascular damage due to cholesterol buildup</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 Symptoms */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Symptoms of Venous Leak
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border-l-4 border-amber-500 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-3">Physical Symptoms</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                <span>Difficulty achieving or maintaining erection</span>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                <span>Short-lasting erections</span>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-100 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                <span>Loss of penile rigidity during intercourse</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-3">Emotional Impact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                <span>Frustration, stress, and reduced confidence</span>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                <span>Relationship strain and intimacy issues</span>
              </li>
              <li className="flex items-start">
                <div className="bg-purple-100 text-purple-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                <span>Anxiety about sexual performance</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🟢 Diagnosis */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start mb-6">
            <div className="bg-teal-100 p-3 rounded-full mr-4">
              <FaClinicMedical className="text-teal-700 text-xl" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                How is Venous Leak Diagnosed?
              </h2>
              <p className="text-gray-600">
                Advanced diagnostic techniques at Dr. Yousuf Memon's clinic
              </p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-6">
            At Dr. Yousuf Memon's clinic, diagnosis of venous leak involves
            modern imaging and vascular studies to confirm the cause of ED:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-teal-100 inline-flex p-4 rounded-full mb-4">
                <div className="text-teal-700 text-2xl">1</div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Penile Doppler Ultrasound</h3>
              <p className="text-sm text-gray-600">Assesses blood flow in arteries and veins</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-teal-100 inline-flex p-4 rounded-full mb-4">
                <div className="text-teal-700 text-2xl">2</div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Cavernosography</h3>
              <p className="text-sm text-gray-600">X-ray imaging to detect venous leakage</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-teal-100 inline-flex p-4 rounded-full mb-4">
                <div className="text-teal-700 text-2xl">3</div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Angiography</h3>
              <p className="text-sm text-gray-600">Advanced vascular imaging for precise diagnosis</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 Treatment Section */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start mb-6">
            <div className="bg-teal-100 p-3 rounded-full mr-4">
              <FaSyringe className="text-teal-700 text-xl" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Treatment of Venous Leak by Dr. Yousuf Memon
              </h2>
              <p className="text-gray-600">
                Minimally invasive solutions with lasting results
              </p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-6">
            Once diagnosed, venous leak can be treated effectively. At our
            clinic in Karachi, Dr. Yousuf Memon provides personalized treatment
            plans, focusing on minimally invasive solutions:
          </p>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-6">
                <h3 className="font-semibold text-teal-700 mb-3 text-lg">Lifestyle Management</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="text-teal-600 mr-2">•</div>
                    <span>Smoking cessation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-teal-600 mr-2">•</div>
                    <span>Diabetes control</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-teal-600 mr-2">•</div>
                    <span>Blood pressure management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-teal-600 mr-2">•</div>
                    <span>Healthy diet and exercise</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-teal-700 mb-3 text-lg">Medical Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="text-teal-600 mr-2">•</div>
                    <span>Oral medications (when appropriate)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-teal-600 mr-2">•</div>
                    <span>Vascular health optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-teal-600 mr-2">•</div>
                    <span>Treatment of underlying conditions</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-teal-50">
                <h3 className="font-semibold text-teal-700 mb-3 text-lg">Advanced Procedure</h3>
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-800">Venous Leak Embolization</h4>
                  <p className="text-sm text-gray-700">Minimally invasive solution to seal leaking veins</p>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="text-teal-600 mr-2">•</div>
                    <span>Performed under local anesthesia</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-teal-600 mr-2">•</div>
                    <span>Uses medical coils or plugs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-teal-600 mr-2">•</div>
                    <span>Quick recovery with lasting results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-teal-900 text-white p-6 rounded-lg">
            <h3 className="font-semibold text-xl mb-3">Benefits of Venous Leak Embolization</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="bg-teal-700 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                <span>No open surgery required</span>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-700 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                <span>Minimal discomfort during procedure</span>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-700 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                <span>Quick recovery (days, not weeks)</span>
              </div>
              <div className="flex items-start">
                <div className="bg-teal-700 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                <span>Long-term improvement in function</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 Why Choose Dr Yousuf */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Why Choose Dr. Yousuf Memon in Pakistan?
        </h2>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-6">
              <p className="text-gray-600 mb-6">
                Dr. Yousuf Memon is a leading interventional radiologist in Pakistan,
                known for advanced vascular procedures including venous leak
                embolization. With extensive experience and patient-focused care, he
                ensures:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-teal-100 text-teal-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                  <span>Accurate diagnosis with advanced imaging</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-100 text-teal-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                  <span>Minimally invasive treatment methods</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-100 text-teal-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                  <span>Quick recovery and minimal discomfort</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-100 text-teal-800 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">✓</div>
                  <span>Confidential, discreet, and professional care</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> Dr. Yousuf Memon is one of the few specialists in Pakistan 
                  offering venous leak embolization, bringing international-standard treatment 
                  to patients locally.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/3 bg-teal-800 text-white p-6 flex flex-col justify-center">
              <h3 className="font-semibold text-xl mb-4">Clinic Information</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-teal-200">Karachi, Pakistan</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Specialization</h4>
                  <p className="text-teal-200">Interventional Radiology</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Procedure</h4>
                  <p className="text-teal-200">Venous Leak Embolization</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Experience</h4>
                  <p className="text-teal-200">Years of specialized practice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 FAQ Section */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-6">
            <div className="bg-teal-100 p-3 rounded-full mr-4">
              <FaQuestionCircle className="text-teal-700 text-xl" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Frequently Asked Questions (FAQ)
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">
                Is venous leak treatable without surgery?
              </h3>
              <p className="text-gray-600">
                Yes. Minimally invasive procedures such as venous leak
                embolization can effectively treat the condition without open
                surgery. This advanced technique uses tiny catheters to access
                and seal the leaking veins, requiring only a small puncture site.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">
                Can lifestyle changes improve venous leak?
              </h3>
              <p className="text-gray-600">
                While lifestyle changes like quitting smoking, controlling blood
                pressure, and managing diabetes can improve vascular health,
                venous leak often requires a medical procedure for lasting
                results. Healthy habits support overall wellness but typically
                cannot reverse the structural vein issues causing venous leak.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">
                How long is the recovery after venous leak treatment?
              </h3>
              <p className="text-gray-600">
                Recovery is usually quick, with most patients resuming normal
                activities within a few days. Results improve steadily over
                weeks as the body adjusts to the improved blood trapping mechanism.
                Most men notice significant improvement within 2-4 weeks after
                the procedure.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">
                Is treatment confidential?
              </h3>
              <p className="text-gray-600">
                Absolutely. Dr. Yousuf Memon ensures complete privacy and
                confidentiality for all patients. We understand the sensitive
                nature of erectile dysfunction concerns and maintain strict
                confidentiality protocols throughout diagnosis, treatment, and
                follow-up care.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">
                How successful is venous leak embolization?
              </h3>
              <p className="text-gray-600">
                Venous leak embolization has high success rates, with studies
                showing significant improvement in over 70-80% of patients. Success
                depends on proper patient selection, accurate diagnosis, and
                technical expertise—all of which are prioritized at our clinic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 Call to Action */}
      <section className="bg-gradient-to-r from-teal-800 to-teal-600 text-white py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Regain Your Confidence with Specialized Treatment
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-lg">
            Don't let erectile dysfunction affect your quality of life. Get expert
            diagnosis and advanced treatment for venous leak in Pakistan today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-teal-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md"
            >
              Book Your Consultation
            </a>
            <a
              href="/treatments"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Learn About Other Treatments
            </a>
          </div>
          
          <p className="mt-6 text-teal-200 text-sm">
            Confidential consultations available at our modern clinic in Karachi
          </p>
        </div>
      </section>
    </div>
  );
};

export default VenousLeak;