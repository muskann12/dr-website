// pages/services/uterine-fibroid-embolization.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const UterineFibroidEmbolization = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Uterine Fibroid Embolization (UFE) | Dr Yousuf Memon</title>
        <meta
          name="description"
          content="Non-surgical Uterine Fibroid Embolization (UFE) in Pakistan by Dr. Yousuf Memon. 85-90% success rate, minimal scarring, 1-2 week recovery. Book a consultation today."
        />

        {/* ✅ FAQ Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is UFE painful?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The procedure itself is not painful as it's performed under anesthesia. After the procedure, patients may experience cramping and pelvic pain, which can be managed with pain medications."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How soon will I see results?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most women begin to see improvement in their symptoms within the first few menstrual cycles after the procedure, with maximum benefits typically seen after 3-6 months."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can fibroids come back after UFE?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While UFE is effective at treating existing fibroids, it doesn't prevent new fibroids from developing. The recurrence rate is about 10-15% over several years."
                  }
                }
              ]
            })
          }}
        />
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
            <li><span>/</span></li>
            <li>
              <a href="/services" className="hover:text-blue-600">Services</a>
            </li>
            <li><span>/</span></li>
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
            <main className="max-w-4xl mx-auto px-4 py-10">
              <h1 className="text-4xl font-bold text-blue-900 mb-6">Uterine Fibroid Embolization (UFE) in Pakistan</h1>

              <section className="mb-10">
                <p className="mb-4">Uterine fibroids affect a significant number of women in Pakistan, often leading to symptoms such as heavy menstrual bleeding, pelvic pain, frequent urination, and abdominal bloating. For years, the primary treatment options available to women were surgical—most commonly hysterectomy or myomectomy. However, a highly effective, minimally invasive solution now offers relief without surgery: Uterine Fibroid Embolization (UFE), also known as Uterine Artery Embolization (UAE).</p>
                <p>At the forefront of this advanced medical treatment in Pakistan is Dr. Yousuf Memon, a distinguished interventional radiologist known for his expertise, precision, and commitment to patient-centered care.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">What is Uterine Fibroid Embolization (UFE)?</h2>
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

              {/* Candidate Section */}
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
              </section>

              {/* Procedure Steps */}
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

              {/* Benefits Section */}
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

              {/* Risks Section */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Risks and Considerations</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Mild to moderate pelvic pain and cramping post-procedure</li>
                  <li>Low-grade fever (post-embolization syndrome)</li>
                  <li>Rare risk of infection or injury to surrounding tissues</li>
                  <li>Fibroid recurrence in some patients over time</li>
                </ul>
              </section>

              {/* Locations Sections */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">UFE Locations in Pakistan</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Karachi:</strong> Orthopaedic and Medical Institute (OMI), Depot Lines, Saddar. Clinic Days: Mon & Thu, 2–4 PM</li>
                  <li><strong>Lahore:</strong> Ihsan Mumtaz Hospital, 71-E, Jauhar Town. Visits once/twice per month</li>
                  <li><strong>Hyderabad:</strong> Isra Hospital – Cath Lab Cardiology, Fri 12–2 PM</li>
                  <li><strong>Rahim Yar Khan:</strong> Diagnostic Interventional Radiology & Cardiac Center, Sat 12–5 PM</li>
                </ul>
              </section>

              {/* Book Appointment */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Book Your Appointment</h2>
                <p>Visit the official website: <a href="https://dryousufmemon.pk" className="text-blue-600 underline">dryousufmemon.pk</a></p>
              </section>

              {/* FAQ Section */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-medium text-blue-700">Is UFE painful?</h3>
                    <p className="mt-2 text-gray-600">The procedure itself is not painful as it's performed under anesthesia. Mild cramping and pelvic pain may occur afterward.</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-medium text-blue-700">How soon will I see results?</h3>
                    <p className="mt-2 text-gray-600">Improvement typically begins within a few menstrual cycles, with maximum results in 3-6 months.</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-medium text-blue-700">Can fibroids come back after UFE?</h3>
                    <p className="mt-2 text-gray-600">Recurrence is uncommon (10–15% over years). New fibroids may develop in some patients.</p>
                  </div>
                </div>
              </section>
            </main>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-6 space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4">Schedule a Consultation</h3>
                <button className="w-full bg-white text-blue-800 font-semibold py-3 px-4 rounded-lg hover:bg-blue-100 transition duration-300">
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UterineFibroidEmbolization;
