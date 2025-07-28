// pages/services/uterine-fibroid-embolization.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const UterineFibroidEmbolization = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Uterine Fibroid Embolization (UFE) | Minimally Invasive Fibroid Treatment</title>
        <meta 
          name="description" 
          content="Uterine Fibroid Embolization (UFE) is a non-surgical treatment for fibroids that preserves your uterus. Learn about benefits, risks, recovery & find a specialist."
        />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Uterine Fibroid Embolization (UFE)",
            "description": "Minimally invasive treatment for uterine fibroids that blocks blood flow to shrink fibroids",
            "bodyLocation": "Uterus",
            "howPerformed": "Catheter-based procedure performed by interventional radiologist",
            "preparation": "Imaging tests and consultation required",
            "procedureOutcome": "Reduction in fibroid symptoms in 85-90% of patients",
            "risks": "Post-embolization syndrome, infection, fibroid recurrence",
            "medicalSpecialty": {
              "@type": "MedicalSpecialty",
              "name": "Interventional Radiology"
            }
          }
          `}
        </script>
        <script type="application/ld+json">
          {`
          {
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
                "name": "How soon will I see results from UFE?",
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
          }
          `}
        </script>
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

      {/* Last Updated */}
      <div className="container mx-auto px-6 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Overview Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Uterine Fibroid Embolization (UFE)?</h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  Uterine fibroid embolization (UFE) is a minimally invasive procedure used to treat uterine fibroids—non-cancerous growths in the uterus. UFE works by blocking the blood supply to the fibroids, causing them to shrink and eventually die.
                </p>
                <p className="text-gray-700">
                  It is considered an alternative to surgical options like hysterectomy or myomectomy, offering shorter recovery times and uterus preservation. UFE is often the preferred <strong>non-surgical fibroid treatment</strong> for women who want to avoid major surgery.
                </p>
              </div>
              
              {/* Image */}
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6">
                <Image
                  src="/images/urine1.png"
                  alt="Uterine Fibroid Embolization procedure diagram showing catheter placement"
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300 hover:opacity-90"
                  priority
                />
              </div>
            </section>

            {/* Procedure Details */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">UFE Procedure: How It Works</h2>
              
              <div className="space-y-6">
                {/* Pre-Procedure */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Pre-Procedure</h3>
                  <p className="text-gray-700">
                    Patients typically undergo imaging tests (like MRI or ultrasound) to determine the size and location of the fibroids. A consultation with an interventional radiologist is usually conducted to discuss the procedure, risks, and expected outcomes.
                  </p>
                </div>
                
                {/* During Procedure */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">During the Procedure</h3>
                  <p className="text-gray-700 mb-4">
                    The procedure is usually done under local anesthesia with sedation, though general anesthesia may be used in some cases. A small incision is made in the groin or wrist to access the femoral or radial artery, respectively.
                  </p>
                  <p className="text-gray-700">
                    A catheter is threaded through the artery to the uterine artery, which supplies blood to the fibroids. Tiny particles (embolic agents) are then injected through the catheter to block the blood flow to the fibroids. The procedure typically takes 1-2 hours.
                  </p>
                </div>
                
                {/* Post-Procedure */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">UFE Recovery: What to Expect</h3>
                  <p className="text-gray-700 mb-4">
                    Patients usually stay in the hospital for a few hours to overnight for observation. Common symptoms post-UFE include cramping, pelvic pain, and mild fever, often referred to as post-embolization syndrome.
                  </p>
                  <p className="text-gray-700">
                    Recovery generally takes 1-2 weeks, with most women returning to normal activities within this time—significantly faster than the 6-8 week recovery for hysterectomy.
                  </p>
                </div>
              </div>
            </section>

            {/* Statistics Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">UFE Success Rates & Statistics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-4xl font-bold text-blue-600 mb-2">90%</p>
                  <p className="text-gray-700">of women experience significant symptom improvement</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-4xl font-bold text-blue-600 mb-2">85%</p>
                  <p className="text-gray-700">reduction in heavy menstrual bleeding</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-4xl font-bold text-blue-600 mb-2">3-6</p>
                  <p className="text-gray-700">months for full results to be visible</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-4xl font-bold text-blue-600 mb-2">1-2</p>
                  <p className="text-gray-700">week recovery vs 6-8 weeks for hysterectomy</p>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of UFE</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Minimally Invasive</h3>
                  <p className="text-gray-700">No large incisions are needed, reducing recovery time and risk of complications compared to traditional <strong>fibroid treatment without surgery</strong>.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Uterus Preservation</h3>
                  <p className="text-gray-700">The uterus remains intact, which is important for women who wish to retain their fertility—a key advantage of this <strong>uterine sparing fibroid treatment</strong>.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Symptom Relief</h3>
                  <p className="text-gray-700">Most women experience significant relief from symptoms like heavy menstrual bleeding, pelvic pain, and pressure.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Shorter Recovery</h3>
                  <p className="text-gray-700">Compared to traditional surgery, UFE typically has a faster recovery period of just 1-2 weeks.</p>
                </div>
              </div>
            </section>

            {/* UFE vs Hysterectomy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">UFE vs Hysterectomy: Key Differences</h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Factor</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">UFE</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hysterectomy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Invasiveness</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">Minimally invasive</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">Major surgery</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Recovery Time</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">1-2 weeks</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">6-8 weeks</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Uterus Preservation</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">Yes</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">No</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Hospital Stay</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">Outpatient or 1 night</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">2-3 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Patient Testimonials */}
            <section className="mb-12 bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Patient Experiences with UFE</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-700 italic mb-4">"After suffering with fibroids for years, UFE gave me my life back. I was back to work in a week with minimal discomfort."</p>
                  <p className="font-semibold">- Sarah K., Age 42</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-700 italic mb-4">"I wanted to avoid hysterectomy and UFE was the perfect solution. My heavy periods improved within two cycles."</p>
                  <p className="font-semibold">- Maria T., Age 38</p>
                </div>
              </div>
            </section>

            {/* Risks and Considerations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Risks and Considerations</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700"><strong>Post-Embolization Syndrome:</strong> This includes pain, fever, and malaise following the procedure, which is usually managed with medications.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700"><strong>Fibroid Recurrence:</strong> While UFE is effective, there is a possibility that fibroids could recur or new ones could develop.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700"><strong>Fertility Concerns:</strong> Although UFE preserves the uterus, its impact on fertility is still being studied, and some women may experience complications if they attempt to conceive after the procedure.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700"><strong>Complications:</strong> As with any medical procedure, there is a risk of infection, bleeding, or damage to the uterus, though these are rare.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Candidate Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Who is a Candidate for UFE?</h2>
              <div className="bg-blue-50 rounded-lg shadow-md p-6 border border-blue-200">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700">Women with symptomatic fibroids who wish to avoid surgery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700">Those who are not ideal candidates for surgery due to medical conditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700">Women who prefer a uterus-sparing procedure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700">Patients seeking <strong>minimally invasive fibroid removal</strong> with shorter recovery</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Follow-Up Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Follow-Up Care After UFE</h2>
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
                    <a href="/services/myomectomy" className="text-blue-600 hover:underline">Myomectomy</a>
                  </li>
                  <li>
                    <a href="/services/hysterectomy" className="text-blue-600 hover:underline">Hysterectomy</a>
                  </li>
                  <li>
                    <a href="/services/endometrial-ablation" className="text-blue-600 hover:underline">Endometrial Ablation</a>
                  </li>
                  <li>
                    <a href="/services/pelvic-ultrasound" className="text-blue-600 hover:underline">Pelvic Ultrasound</a>
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

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">Is UFE covered by insurance?</h3>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                <div className="mt-2 text-gray-600">
                  <p>Most insurance plans cover UFE when medically necessary. Our team can help verify your coverage and obtain pre-authorization if required.</p>
                </div>
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">How does UFE compare to other fibroid treatments?</h3>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                <div className="mt-2 text-gray-600">
                  <p>UFE offers a middle ground between medication (which only manages symptoms) and surgery (which is more invasive). It provides lasting relief without removing the uterus, with shorter recovery than surgical options.</p>
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
