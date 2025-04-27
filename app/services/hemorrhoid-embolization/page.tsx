// pages/services/hemorrhoid-embolization.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const HemorrhoidEmbolization = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Hemorrhoid (Piles) Embolization | Your Clinic Name</title>
        <meta name="description" content="Minimally invasive treatment for hemorrhoids without surgery. Learn about benefits, risks, and recovery." />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hemorrhoid (Piles) Embolization</h1>
          <p className="text-xl md:text-2xl">A minimally invasive alternative to hemorrhoid surgery</p>
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
              Hemorrhoid Embolization
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
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What are Hemorrhoids (Piles)?</h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  Hemorrhoids, commonly known as piles, are swollen and inflamed veins in the rectum and anus that cause discomfort, itching, pain, and sometimes bleeding. They can be internal (inside the rectum) or external (under the skin around the anus).
                </p>
                <p className="text-gray-700">
                  Hemorrhoids are common and often result from straining during bowel movements, chronic constipation or diarrhea, pregnancy, or aging.
                </p>
              </div>
              
              {/* Image Placeholder */}
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6">
                <Image
                  src="/images/hemorrhoid-embolization.jpg"
                  alt="Hemorrhoid embolization procedure"
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300 hover:opacity-90"
                />
              </div>
            </section>

            {/* Embolization Explanation */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Hemorrhoid Embolization?</h2>
              <div className="bg-purple-50 rounded-lg shadow-md p-6 border border-purple-200">
                <p className="text-gray-700 mb-4">
                  Hemorrhoid embolization, also known as hemorrhoidal artery embolization or transarterial hemorrhoidal dearterialization (THD), is a minimally invasive procedure designed to treat symptomatic hemorrhoids by reducing the blood flow to the hemorrhoidal tissue, causing them to shrink.
                </p>
              </div>
            </section>

            {/* Procedure Details */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Procedure Details</h2>
              
              <div className="space-y-6">
                {/* Pre-Procedure */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">Pre-Procedure</h3>
                  <p className="text-gray-700">
                    A thorough evaluation by a colorectal specialist or interventional radiologist is done to assess the severity of hemorrhoids and discuss the suitability of embolization. Imaging studies, such as Doppler ultrasound or angiography, may be performed to visualize the hemorrhoidal arteries.
                  </p>
                </div>
                
                {/* During Procedure */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">During the Procedure</h3>
                  <p className="text-gray-700 mb-4">
                    The procedure is typically performed under local anesthesia with sedation, but general anesthesia may also be used. A small incision is made in the groin or wrist to access a blood vessel, usually the femoral or radial artery.
                  </p>
                  <p className="text-gray-700">
                    A catheter is guided through the artery to the superior rectal artery, which supplies blood to the hemorrhoidal tissue. Tiny particles (embolic agents) are injected through the catheter to block the blood flow to the hemorrhoids. The procedure usually takes about 1-2 hours.
                  </p>
                </div>
                
                {/* Post-Procedure */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">Post-Procedure</h3>
                  <p className="text-gray-700 mb-4">
                    Patients may experience mild discomfort or pain at the site of the embolization. Recovery is typically quick, with most patients returning to normal activities within a few days.
                  </p>
                  <p className="text-gray-700">
                    Follow-up appointments are necessary to monitor the success of the treatment and to ensure proper healing.
                  </p>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Hemorrhoid Embolization</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Minimally Invasive</h3>
                  <p className="text-gray-700">No surgical incision is made, reducing the risk of complications and allowing for quicker recovery.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Symptom Relief</h3>
                  <p className="text-gray-700">Effective in reducing pain, bleeding, and discomfort associated with hemorrhoids.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Low Recurrence Rate</h3>
                  <p className="text-gray-700">The procedure offers long-term relief with a low likelihood of hemorrhoid recurrence.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Quick Recovery</h3>
                  <p className="text-gray-700">Most patients return to normal activities within a few days compared to weeks with traditional surgery.</p>
                </div>
              </div>
            </section>

            {/* Risks Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Risks and Considerations</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700"><strong>Post-Procedure Pain:</strong> Some patients may experience mild to moderate pain or discomfort following the procedure, which can be managed with pain relievers.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700"><strong>Bleeding:</strong> There may be a small risk of bleeding or infection at the catheter insertion site.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700"><strong>Incomplete Treatment:</strong> In some cases, additional procedures may be needed if the embolization does not fully resolve the symptoms.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700"><strong>Rare Complications:</strong> As with any embolization procedure, there is a very small risk of non-target embolization, which could affect other tissues or organs.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Candidate Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Who is a Candidate for Hemorrhoid Embolization?</h2>
              <div className="bg-purple-50 rounded-lg shadow-md p-6 border border-purple-200">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">Patients with symptomatic hemorrhoids who have not responded to conservative treatments such as dietary changes, topical medications, or minimally invasive procedures like rubber band ligation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">Patients who wish to avoid traditional hemorrhoidectomy surgery due to its associated pain and longer recovery time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">Patients with medical conditions that make them poor candidates for surgery</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Follow-Up Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Follow-Up Care</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Regular follow-up visits are needed to monitor healing and ensure that symptoms are resolved. Patients are usually advised to maintain a high-fiber diet, stay hydrated, and avoid straining during bowel movements to prevent recurrence.
                </p>
                <p className="text-gray-700 font-medium">
                  Hemorrhoid embolization offers a promising alternative to traditional surgical treatments, providing effective symptom relief with minimal discomfort and downtime.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-6 space-y-6">
              {/* Consultation CTA */}
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4">Get Relief from Hemorrhoids</h3>
                <p className="mb-4">Schedule a consultation to see if embolization is right for you.</p>
                <button className="w-full bg-white text-purple-800 font-semibold py-3 px-4 rounded-lg hover:bg-purple-50 transition duration-300">
                  Book Appointment
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
                    <p className="text-gray-600">Few days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Success Rate</h4>
                    <p className="text-gray-600">80-90% symptom relief</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Hospital Stay</h4>
                    <p className="text-gray-600">Typically outpatient</p>
                  </div>
                </div>
              </div>

              {/* Related Conditions */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Related Conditions</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Anal Fissures</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Rectal Prolapse</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Chronic Constipation</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Inflammatory Bowel Disease</a>
                  </li>
                </ul>
              </div>

              {/* Alternative Treatments */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Alternative Treatments</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Rubber Band Ligation</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Sclerotherapy</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Hemorrhoidectomy</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Infrared Coagulation</a>
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
                  <h3 className="text-lg font-semibold text-gray-800">Is hemorrhoid embolization painful?</h3>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                <div className="mt-2 text-gray-600">
                  <p>The procedure itself is not painful as it's performed under anesthesia. Most patients report only mild discomfort afterward, which is typically managed with over-the-counter pain medication.</p>
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
                  <p>Most patients notice improvement within a few days, with maximum benefits typically seen after 2-3 weeks as the hemorrhoids gradually shrink.</p>
                </div>
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">Can hemorrhoids come back after embolization?</h3>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                <div className="mt-2 text-gray-600">
                  <p>While embolization has a low recurrence rate, new hemorrhoids can develop if predisposing factors like chronic constipation persist. Maintaining good bowel habits can help prevent recurrence.</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HemorrhoidEmbolization;