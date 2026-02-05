// pages/services/liver-cancer-cirrhosis.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const LiverCancerCirrhosis = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Liver Cancer & Cirrhosis Treatment in Pakistan | TACE by Dr. Yousuf Memon</title>
        <meta name="description" content="Get advanced liver cancer and cirrhosis treatment in Pakistan with TACE. Dr. Yousuf Memon offers minimally invasive procedures for improved survival and quality of life in Karachi, Lahore, and nationwide." />
        <meta name="keywords" content="liver cancer treatment Pakistan, TACE procedure, cirrhosis therapy, hepatocellular carcinoma, interventional radiology Karachi, Dr. Yousuf Memon" />
        <meta property="og:title" content="Liver Cancer & Cirrhosis Treatment (TACE) | Dr. Yousuf Memon Clinic" />
        <meta property="og:description" content="Get advanced TACE treatment for liver cancer and cirrhosis in Pakistan. Improve survival and quality of life with minimally invasive care by Dr. Yousuf Memon." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dryousufmemon.com/services/liver-cancer" />
        <meta property="og:image" content="https://www.dryousufmemon.com/gallery/images/liver-cancer-tace.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Liver Cancer & Cirrhosis Treatment (TACE) | Dr. Yousuf Memon Clinic" />
        <meta name="twitter:description" content="Specialized TACE for liver cancer and cirrhosis. Book a consultation with Dr. Yousuf Memon, Pakistan's leading interventional radiologist." />
        <meta name="twitter:image" content="https://www.dryousufmemon.com/gallery/images/liver-cancer-tace.jpg" />
        <link rel="canonical" href="https://www.dryousufmemon.com/services/liver-cancer" />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Liver Cancer & Cirrhosis Treatment in Pakistan</h1>
          <p className="text-xl md:text-2xl">Advanced TACE treatment for hepatocellular carcinoma (HCC)</p>
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
              Liver Cancer & Cirrhosis
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding Liver Cancer and Cirrhosis</h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  <strong>Liver Cancer & Cirrhosis Treatment in Pakistan</strong> is now available with advanced TACE procedures by Dr. Yousuf Memon. These minimally invasive treatments help control tumor growth and improve survival for patients nationwide.
                </p>
                <p className="text-gray-700">
                  Liver cancer often develops in the context of liver cirrhosis, which is the scarring of the liver tissue due to chronic liver damage. Common causes of cirrhosis include chronic hepatitis B or C infections, long-term alcohol abuse, and non-alcoholic fatty liver disease (NAFLD).
                </p>
                <p className="text-gray-700">
                  Cirrhosis significantly increases the risk of developing hepatocellular carcinoma (HCC), the most common type of primary liver cancer.
                </p>
              </div>
              
              {/* Image Placeholder */}
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6">
                <Image
                  src="/images/liver.png"
                  alt="Liver cirrhosis leading to cancer"
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300 hover:opacity-90"
                />
              </div>
            </section>

            {/* TACE Explanation */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Transarterial Chemoembolization (TACE)?</h2>
              <div className="bg-blue-50 rounded-lg shadow-md p-6 border border-blue-200">
                <p className="text-gray-700 mb-4">
                  Transarterial chemoembolization (TACE) is a minimally invasive procedure used to treat liver cancer, particularly hepatocellular carcinoma (HCC) in patients with cirrhosis.
                </p>
                <p className="text-gray-700 font-medium">
                  TACE is not a curative treatment but is used to control tumor growth, reduce symptoms, and prolong survival. It is typically considered when the tumor is not suitable for surgical removal or liver transplantation.
                </p>
              </div>
            </section>

            {/* Procedure Details */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Procedure Details</h2>
              
              <div className="space-y-6">
                {/* Pre-Procedure */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Pre-Procedure</h3>
                  <p className="text-gray-700">
                    A thorough assessment including imaging studies like CT scan, MRI, and liver function tests is performed to evaluate the extent of cancer and liver function. A multidisciplinary team, including an interventional radiologist, oncologist, and hepatologist, usually determines the appropriateness of TACE for the patient.
                  </p>
                </div>
                
                {/* During Procedure */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">During the Procedure</h3>
                  <p className="text-gray-700 mb-4">
                    The procedure is done under local anesthesia with sedation. A catheter is inserted into the femoral artery (in the groin) and guided to the hepatic artery, which supplies blood to the liver.
                  </p>
                  <p className="text-gray-700">
                    Once the catheter is in position, chemotherapy drugs are delivered directly into the blood vessels feeding the tumor. To enhance the effect of the chemotherapy, embolic agents (tiny particles) are also injected to block the blood flow, trapping the chemotherapy in the tumor and cutting off its blood supply. The procedure typically lasts 1-2 hours.
                  </p>
                </div>
                
                {/* Post-Procedure */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Post-Procedure</h3>
                  <p className="text-gray-700 mb-4">
                    Patients may stay in the hospital for observation for a day or two. Common side effects include fever, pain in the abdomen, and nausea, collectively referred to as post-embolization syndrome.
                  </p>
                  <p className="text-gray-700">
                    Recovery usually takes a week or two, with most patients returning to normal activities shortly after.
                  </p>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits of TACE</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Localized Treatment</h3>
                  <p className="text-gray-700">Directly targets the liver tumor, minimizing systemic side effects compared to traditional chemotherapy.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Tumor Control</h3>
                  <p className="text-gray-700">Helps shrink the tumor or slow its growth, potentially making surgical resection or transplantation possible.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Prolongs Survival</h3>
                  <p className="text-gray-700">Can extend survival time in patients with intermediate-stage HCC who are not candidates for curative treatments.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Minimally Invasive</h3>
                  <p className="text-gray-700">No large surgical incisions required, leading to faster recovery than traditional surgery.</p>
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
                    <span className="text-gray-700"><strong>Liver Function Impact:</strong> Since TACE restricts blood flow to parts of the liver, it can further impair liver function, especially in cirrhotic patients.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700"><strong>Post-Embolization Syndrome:</strong> A common side effect, including fever, pain, and malaise, managed with medication.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700"><strong>Tumor Recurrence:</strong> Although TACE can control tumor growth, HCC often recurs, requiring repeated treatments.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700"><strong>Complications:</strong> Possible risks include liver failure, infection, and non-target embolization.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Candidate Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Who is a Candidate for TACE?</h2>
              <div className="bg-teal-50 rounded-lg shadow-md p-6 border border-teal-200">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span className="text-gray-700">Patients with intermediate-stage HCC (BCLC stage B) with no vascular invasion or extrahepatic spread</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span className="text-gray-700">Patients with good liver function (Child-Pugh A or B) who are not suitable for surgical resection or liver transplantation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span className="text-gray-700">Patients with multiple liver tumors confined to the liver without major portal vein involvement</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Follow-Up Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Follow-Up Care</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  Regular imaging studies (CT, MRI) are needed to monitor the effectiveness of the treatment and to detect any tumor recurrence. Ongoing management of liver cirrhosis and its complications is essential.
                </p>
                <p className="text-gray-700 font-medium">
                  Potential need for additional treatments, including repeat TACE, systemic therapy, or other interventional procedures, based on tumor response and liver function.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-6 space-y-6">
              {/* Consultation CTA */}
              <div className="bg-gradient-to-br from-teal-600 to-blue-700 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4">Expert Liver Cancer Care</h3>
                <p className="mb-4">Our multidisciplinary team specializes in advanced treatments for HCC in cirrhotic patients.</p>
                <button className="w-full bg-white text-teal-800 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition duration-300">
                  Request Consultation
                </button>
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Facts About TACE</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Procedure Duration</h4>
                    <p className="text-gray-600">1-2 hours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Hospital Stay</h4>
                    <p className="text-gray-600">1-2 days typically</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Recovery Time</h4>
                    <p className="text-gray-600">1-2 weeks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Effectiveness</h4>
                    <p className="text-gray-600">60-80% tumor response rate</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Repeat Treatments</h4>
                    <p className="text-gray-600">Often needed every 2-3 months</p>
                  </div>
                </div>
              </div>

              {/* Related Conditions */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Related Conditions</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/services/hepatitis-b-c" className="text-blue-600 hover:underline">Learn about Hepatitis B & C</a>
                  </li>
                  <li>
                    <a href="/services/liver-cirrhosis" className="text-blue-600 hover:underline">Liver Cirrhosis Information</a>
                  </li>
                  <li>
                    <a href="/services/fatty-liver" className="text-blue-600 hover:underline">Non-Alcoholic Fatty Liver Disease Details</a>
                  </li>
                  <li>
                    <a href="/services/portal-hypertension" className="text-blue-600 hover:underline">Portal Hypertension Overview</a>
                  </li>
                </ul>
              </div>

              {/* Treatment Options */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Other Treatment Options</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/services/rfa" className="text-blue-600 hover:underline">Radiofrequency Ablation (RFA) Treatment</a>
                  </li>
                  <li>
                    <a href="/services/yttrium-90-radioembolization" className="text-blue-600 hover:underline">Yttrium-90 Radioembolization Info</a>
                  </li>
                  <li>
                    <a href="/services/liver-transplant" className="text-blue-600 hover:underline">Liver Transplantation Services</a>
                  </li>
                  <li>
                    <a href="/services/systemic-therapies" className="text-blue-600 hover:underline">Systemic Therapies for Liver Cancer</a>
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
                  <h3 className="text-lg font-semibold text-gray-800">How many TACE sessions will I need?</h3>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                <div className="mt-2 text-gray-600">
                  <p>The number of TACE sessions varies by patient, typically ranging from 2-4 sessions spaced 6-8 weeks apart. Your treatment plan will be personalized based on tumor response and liver function.</p>
                </div>
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">Can TACE cure my liver cancer?</h3>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                <div className="mt-2 text-gray-600">
                  <p>While TACE is rarely curative, it can effectively control tumor growth and extend survival. For some patients, successful TACE may make them eligible for potentially curative treatments like resection or transplantation.</p>
                </div>
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">What's the difference between TACE and TARE?</h3>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                <div className="mt-2 text-gray-600">
                  <p>TACE (Transarterial Chemoembolization) delivers chemotherapy directly to the tumor then blocks its blood supply. TARE (Transarterial Radioembolization, or Y90) uses radiation-emitting microspheres instead of chemotherapy. The choice depends on tumor characteristics and liver function.</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiverCancerCirrhosis;