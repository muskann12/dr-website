// pages/services/uterine-fibroid-embolization.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const UterineFibroidEmbolization = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Uterine Fibroid Embolization (UFE) | Dr Yousuf Memon</title>
        <meta name="description" content="Non-surgical Uterine Fibroid Embolization (UFE) in Pakistan by Dr. Yousuf Memon. 85-90% success rate, minimal scarring, 1-2 week recovery. Book a consultation today." />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-purple-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Uterine Fibroid Embolization</h1>
          <p className="text-xl md:text-2xl">A minimally invasive alternative to surgery for uterine fibroids</p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-blue-600">Home</a>
            </li>
            <li>
              <span>/</span>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-600">Services</a>
            </li>
            <li>
              <span>/</span>
            </li>
            <li className="text-blue-600" aria-current="page">
              Uterine Fibroid Embolization
            </li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Overview Section */}
            <main className="max-w-4xl mx-auto px-4 py-10">
              <h1 className="text-4xl font-bold text-blue-900 mb-6">Uterine Fibroid Embolization (UFE) in Pakistan</h1>

              <section className="mb-10">
                <p className="mb-4">Uterine fibroids affect a significant number of women in Pakistan, often leading to symptoms such as heavy menstrual bleeding, pelvic pain, frequent urination, and abdominal bloating. For years, the primary treatment options available to women were surgical—most commonly hysterectomy or myomectomy. However, a highly effective, minimally invasive solution now offers relief without surgery: Uterine Fibroid Embolization (UFE), also known as Uterine Artery Embolization (UAE).</p>
                <p>At the forefront of this advanced medical treatment in Pakistan is Dr. Yousuf Memon, a distinguished interventional radiologist known for his expertise, precision, and commitment to patient-centered care.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">What is Uterine Fibroid Embolization (UFE)?: A Minimally Invasive Breakthrough by Dr. Yousuf Memon</h2>
                <Image 
                  src="/images/urine1.png" 
                  alt="Diagram of UFE procedure for fibroid treatment" 
                  width={600} 
                  height={400} 
                  className="my-4 rounded-lg shadow-md"
                />
                <p className="mb-4">UFE is a non-surgical procedure used to treat uterine fibroids—non-cancerous growths that form in the muscular wall of the uterus. During UFE, a specialized radiologist like Dr. Yousuf Memon inserts a catheter through a small incision in the groin or wrist. Using real-time imaging, the catheter is guided to the uterine arteries, where tiny embolic particles are released to block the blood supply to the fibroids. As a result, the fibroids shrink over time, alleviating the symptoms.</p>
                <ul className="bg-blue-50 border-l-4 border-blue-600 p-4 list-disc pl-6 space-y-1">
                  <li>Minimally invasive, with no large surgical cuts</li>
                  <li>Shorter recovery time (typically 1 to 2 weeks)</li>
                  <li>Preservation of the uterus and potential fertility</li>
                  <li>Reduced risk of complications and infections</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Who is a Candidate for UFE?</h2>
                <p className="mb-4">UFE may be the right option for women who:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Have been diagnosed with symptomatic uterine fibroids</li>
                  <li>Are experiencing heavy menstrual bleeding, pelvic pressure, or urinary frequency</li>
                  <li>Wish to avoid hysterectomy or other invasive surgeries</li>
                  <li>Are not currently pregnant</li>
                  <li>Seek to preserve their uterus for personal or reproductive reasons</li>
                </ul>
                <p className="mt-4">A thorough evaluation including imaging tests such as MRI or pelvic ultrasound is required to confirm eligibility for the procedure.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">The UFE Procedure: Step-by-Step</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-blue-700">Initial Consultation</h3>
                    <p>A comprehensive consultation with Dr. Yousuf Memon includes discussion of symptoms, medical history, and imaging review.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-700">Imaging & Diagnosis</h3>
                    <p>MRI or ultrasound helps determine the size, location, and number of fibroids.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-700">Procedure Day</h3>
                    <p>Performed under local anesthesia and mild sedation. The entire process typically takes 1 to 2 hours.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-700">Post-Procedure Monitoring</h3>
                    <p>Most patients are monitored for a few hours and may go home the same day or stay overnight.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-700">Recovery</h3>
                    <p>Most women return to regular activities within 7 to 14 days.</p>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Benefits of UFE Compared to Surgical Options</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-6">
                  <li>No general anesthesia required</li>
                  <li>Outpatient procedure</li>
                  <li>Minimal blood loss</li>
                  <li>No abdominal scars</li>
                  <li>Significant symptom relief in 85-90% of patients</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Risks and Considerations</h2>
                <p className="mb-4">As with any medical procedure, there are risks involved:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Mild to moderate pelvic pain and cramping post-procedure</li>
                  <li>Low-grade fever (post-embolization syndrome)</li>
                  <li>Rare risk of infection or injury to surrounding tissues</li>
                  <li>Fibroid recurrence in some patients over time</li>
                </ul>
                <p className="mt-4">However, under the care of an experienced interventional radiologist like Dr. Yousuf Memon, the procedure is safe, effective, and well-tolerated by the majority of patients.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Uterine Fibroid Embolization in Karachi</h2>
                <p><strong>Orthopaedic and Medical Institute (OMI)</strong><br />
                Depot Lines, Muhammad Ali Jinnah Road, Saddar, Karachi<br />
                <strong>Clinic Days:</strong> Monday and Thursday<br />
                <strong>Timings:</strong> 2:00 PM – 4:00 PM</p>
                <p className="mt-2">Dr. Yousuf Memon regularly consults in Karachi. Patients in Karachi can schedule both their outpatient consultation and procedure through his clinic. The facilities used in Karachi are fully equipped with modern angiographic suites and advanced imaging tools to ensure accurate diagnosis and successful outcomes.</p>
                <p className="mt-2">Booking an appointment in advance is highly recommended due to the growing demand for UFE. Dr. Yousuf Memon also offers appointments in Lahore for those unable to travel to Karachi.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Uterine Fibroid Embolization in Lahore</h2>
                <p><strong>Ihsan Mumtaz Hospital</strong><br />
                71-E, Jauhar Town, Maulana Shaukat Ali Road, Lahore</p>
                <p className="mt-2">While Dr. Yousuf Memon primarily practices in Karachi, he visits Lahore once or twice per month to accommodate patients in the region. You can book your outpatient consultation or schedule your procedure by contacting the hospital directly or through Dr. Memon's official booking channel.</p>
                <p className="mt-2">Patients in Lahore benefit from the same international-standard care with access to full diagnostic services and postoperative support.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Uterine Fibroid Embolization in Hyderabad</h2>
                <p><strong>Isra Hospital – Cath Lab Cardiology</strong><br />
                <strong>Clinic Day:</strong> Friday<br />
                <strong>Timings:</strong> 12:00 PM – 2:00 PM</p>
                <p className="mt-2">Patients can receive expert consultation and evaluation for UFE. Advanced facilities at Isra Hospital support high-precision, image-guided procedures under Dr. Memon's supervision.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Uterine Fibroid Embolization in Rahim Yar Khan</h2>
                <p><strong>Diagnostic Interventional Radiology & Cardiac Center</strong><br />
                Near Government Technical College, Thali Road, Rahim Yar Khan<br />
                <strong>Clinic Day:</strong> Saturday<br />
                <strong>Timings:</strong> 12:00 PM – 5:00 PM</p>
                <p className="mt-2">This location provides local access to high-quality care for women who would otherwise have to travel to larger cities. Consultations and procedures are performed with the same level of expertise and patient support.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Dr. Yousuf Memon?</h2>
                <p className="mb-4">Dr. Yousuf Memon is a trusted name in interventional radiology in Pakistan. With years of experience and a focus on patient-first care, his approach combines cutting-edge technology with a deep understanding of women's health. His ability to offer UFE across multiple cities ensures greater accessibility for women nationwide.</p>
                <p>His practices emphasize:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Precision and safety in every procedure</li>
                  <li>Clear patient education and communication</li>
                  <li>Minimal wait times and efficient care coordination</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Book Your Appointment</h2>
                <p>To learn if UFE is right for you or to schedule your consultation with Dr. Yousuf Memon:</p>
                <p>Visit the official website: <a href="https://dryousufmemon.pk" className="text-blue-600 underline">dryousufmemon.pk</a><br />
                Call or WhatsApp to book your consultation in Karachi, Lahore, Hyderabad, or Rahim Yar Khan.</p>
                <p className="mt-2">Early diagnosis and timely intervention can help you avoid unnecessary surgery and reclaim your comfort and quality of life.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Quick Facts</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <li><strong>Procedure Time:</strong> 1–2 hours</li>
                  <li><strong>Recovery Time:</strong> 1–2 weeks</li>
                  <li><strong>Success Rate:</strong> 85–90%</li>
                  <li><strong>Hospital Stay:</strong> Outpatient</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-blue-700">Is UFE painful?</h3>
                    <p>The procedure is not painful due to anesthesia. Mild pain and cramping may occur afterward and are manageable with medication.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-700">When will I see results?</h3>
                    <p>Results usually begin within a few menstrual cycles and continue improving for 3–6 months.</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Facts</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700">Procedure Time</h4>
                        <p className="text-gray-600">1-2 hours</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700">Recovery Time</h4>
                        <p className="text-gray-600">1-2 weeks</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700">Success Rate</h4>
                        <p className="text-gray-600">85-90% symptom relief</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700">Hospital Stay</h4>
                        <p className="text-gray-600">Typically outpatient</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-700">Can fibroids return after UFE?</h3>
                    <p>Yes, though recurrence is uncommon (10–15% over years). New fibroids may develop in some patients.</p>
                  </div>
                </div>
              </section>
            </main>

            {/* Follow-Up Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Follow-Up Care</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Regular follow-up with imaging tests to monitor the size of the fibroids and the resolution of symptoms. Ongoing gynecological care to manage any potential complications or recurrence of fibroids.
                </p>
                <p className="text-gray-700 font-medium">
                  UFE is a well-established procedure with a high success rate for symptom relief, offering an effective alternative to surgical options for many women.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-6 space-y-6">
              {/* Consultation CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4">Schedule a Consultation</h3>
                <p className="mb-4">Interested in learning if UFE is right for you? Contact us to schedule a consultation with our specialists.</p>
                <button className="w-full bg-white text-blue-800 font-semibold py-3 px-4 rounded-lg hover:bg-blue-100 transition duration-300">
                  Book an Appointment
                </button>
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Procedure Time</h4>
                    <p className="text-gray-600">1-2 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Recovery Time</h4>
                    <p className="text-gray-600">1-2 weeks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Success Rate</h4>
                    <p className="text-gray-600">85-90% symptom relief</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Hospital Stay</h4>
                    <p className="text-gray-600">Typically outpatient</p>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Related Services</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Myomectomy</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Hysterectomy</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Endometrial Ablation</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Pelvic Ultrasound</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">Is UFE painful?</h3>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                <div className="mt-2 text-gray-600">
                  <p>The procedure itself is not painful as it's performed under anesthesia. After the procedure, patients may experience cramping and pelvic pain, which can be managed with pain medications.</p>
                </div>
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">How soon will I see results?</h3>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                <div className="mt-2 text-gray-600">
                  <p>Most women begin to see improvement in their symptoms within the first few menstrual cycles after the procedure, with maximum benefits typically seen after 3-6 months.</p>
                </div>
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">Can fibroids come back after UFE?</h3>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                <div className="mt-2 text-gray-600">
                  <p>While UFE is effective at treating existing fibroids, it doesn't prevent new fibroids from developing. The recurrence rate is about 10-15% over several years.</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UterineFibroidEmbolization;