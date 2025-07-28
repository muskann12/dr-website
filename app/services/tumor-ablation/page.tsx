// pages/services/microwave-ablation.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const MicrowaveAblation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Microwave Ablation (MWA) | Minimally Invasive Tumor Treatment</title>
        <meta 
          name="description" 
          content="Microwave Tumor Ablation (MWA) is a non-surgical treatment that destroys tumors with heat. Learn about MWA for liver, kidney, lung, breast & thyroid tumors."
        />
        <meta name="keywords" content="microwave ablation, MWA, tumor ablation, non-surgical cancer treatment, liver tumor treatment, breast tumor treatment" />
        <link rel="canonical" href="https://yourclinic.com/services/microwave-ablation" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Microwave Tumor Ablation (MWA)",
            "description": "Minimally invasive treatment that uses microwave energy to destroy tumors",
            "bodyLocation": "Various (liver, kidney, lung, breast, thyroid)",
            "howPerformed": "Image-guided insertion of microwave antenna into tumor",
            "preparation": "Imaging tests and consultation required",
            "procedureOutcome": "Tumor destruction with minimal damage to surrounding tissue",
            "risks": "Bleeding, infection, thermal injury to nearby structures",
            "medicalSpecialty": {
              "@type": "MedicalSpecialty",
              "name": "Interventional Radiology"
            }
          }
          `}
        </script>
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-800 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Microwave Tumor Ablation (MWA)</h1>
          <p className="text-lg md:text-xl">Precision heat treatment for tumors without major surgery</p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-purple-600">Home</a></li>
            <li><span>/</span></li>
            <li><a href="/services" className="hover:text-purple-600">Services</a></li>
            <li><span>/</span></li>
            <li className="text-purple-600">Microwave Ablation</li>
          </ol>
        </nav>
      </div>

      {/* Last Updated */}
      <div className="container mx-auto px-6 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Overview */}
            <section className="mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About Microwave Ablation</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4">
                      Microwave Ablation (MWA) is an advanced <strong>minimally invasive tumor treatment</strong> that uses targeted microwave energy to heat and destroy tumor cells while sparing healthy tissue. This image-guided technique offers precise treatment with minimal recovery time compared to traditional surgery.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 p-4 rounded">
                        <h3 className="font-semibold text-purple-700">How It Works</h3>
                        <p className="text-sm text-gray-700">Microwaves create friction in water molecules, generating heat (50-100°C) that destroys tumor cells through coagulative necrosis</p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded">
                        <h3 className="font-semibold text-indigo-700">Treatment Areas</h3>
                        <p className="text-sm text-gray-700">Liver, kidney, lung, breast, thyroid, and bone tumors (both primary and metastatic)</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 relative h-48">
                    <Image 
                      src="/images/microwave.png" 
                      alt="MWA procedure diagram showing antenna placement in tumor" 
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-lg"
                      priority
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Treatment Areas */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Common Treatment Applications</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {/* Liver */}
                <div className="bg-white rounded-lg shadow-md p-4 border-t-4 border-blue-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Liver Tumors</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Hepatocellular carcinoma (HCC)</li>
                    <li>• Metastatic liver tumors (colorectal, breast, etc.)</li>
                    <li>• Tumors ≤5cm in diameter</li>
                    <li>• Patients not eligible for surgery</li>
                  </ul>
                </div>
                {/* Breast */}
                <div className="bg-white rounded-lg shadow-md p-4 border-t-4 border-pink-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Breast Tumors</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Early-stage breast cancer</li>
                    <li>• Benign fibroadenomas</li>
                    <li>• ≤2cm tumors</li>
                    <li>• Patients preferring non-surgical options</li>
                  </ul>
                </div>
                {/* Thyroid */}
                <div className="bg-white rounded-lg shadow-md p-4 border-t-4 border-green-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Thyroid Nodules</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Benign symptomatic nodules</li>
                    <li>• Small papillary thyroid cancers</li>
                    <li>• Recurrent nodules post-surgery</li>
                    <li>• Patients with high surgical risk</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Procedure */}
            <section className="mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">The MWA Procedure: Step-by-Step</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Preparation & Imaging</h3>
                      <p className="text-gray-700">
                        CT, ultrasound, or MRI precisely locates the tumor. Local anesthesia is administered at the insertion site. Some patients may receive mild sedation for comfort.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Probe Placement</h3>
                      <p className="text-gray-700">
                        A thin (1-2mm) microwave antenna is inserted through a small skin nick directly into the tumor under continuous image guidance. Multiple probes may be used for larger tumors.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Ablation Process</h3>
                      <p className="text-gray-700">
                        Microwave energy (915MHz or 2450MHz) is delivered for 5-10 minutes, creating a precise 3-5cm sphere of ablation at temperatures reaching 60-100°C that destroys the tumor cells.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Procedure Image */}
                <div className="mt-8 relative w-full h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/mwa-procedure-detail.jpg"
                    alt="Detailed diagram of microwave ablation process showing heat distribution"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </section>

            {/* Success Rates */}
            <section className="mb-8 bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">MWA Success Rates & Outcomes</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow">
                  <p className="text-3xl font-bold text-blue-600 mb-1">90-95%</p>
                  <p className="text-sm text-gray-700">Complete ablation rate for small tumors (&lt;3cm)</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <p className="text-3xl font-bold text-blue-600 mb-1">1-3%</p>
                  <p className="text-sm text-gray-700">Major complication rate (lower than surgery)</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <p className="text-3xl font-bold text-blue-600 mb-1">2-3 days</p>
                  <p className="text-sm text-gray-700">Average return to normal activities</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 text-sm">
                *Results based on clinical studies of microwave ablation for liver tumors. Individual results may vary.
              </p>
            </section>

            {/* Benefits/Risks */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Benefits vs. Surgical Alternatives</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Advantages of MWA</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>Minimally invasive</strong> - No large incisions, just a small skin puncture</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>Tissue preservation</strong> - Spares healthy organ tissue unlike surgical resection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>Outpatient procedure</strong> - Most patients go home the same day</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>Repeatable</strong> - Can be performed multiple times if new tumors develop</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>Faster recovery</strong> - Return to normal activities in days vs. weeks with surgery</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">Limitations & Risks</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>Tumor size limits</strong> - Most effective for tumors ≤5cm (multiple probes may be needed for larger tumors)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>Location constraints</strong> - Tumors near major blood vessels or bile ducts may be harder to treat</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>Post-procedure pain</strong> - Some patients experience moderate pain for 1-2 days</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>Follow-up required</strong> - Imaging needed to confirm complete tumor destruction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>Rare complications</strong> - Infection, bleeding, or thermal injury to nearby structures (&lt;5% risk)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Patient Stories */}
            <section className="mb-8 bg-purple-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Patient Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-700 italic mb-4">"After being told I needed major liver surgery for my 4cm tumor, my doctor recommended MWA instead. The procedure took less than an hour, and I was back to work in 3 days. My follow-up scans show no evidence of the tumor!"</p>
                  <p className="font-semibold">- Michael R., Liver Tumor Patient</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-700 italic mb-4">"As a breast cancer survivor, I wanted to avoid another surgery when my cancer recurred. Microwave ablation treated my small tumor without scars or lengthy recovery. I'm so grateful for this option."</p>
                  <p className="font-semibold">- Sarah L., Breast Cancer Patient</p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">How does MWA compare to radiofrequency ablation (RFA)?</h3>
                  <p className="text-gray-700">
                    MWA generates higher temperatures (60-100°C vs. 50-70°C) and is less affected by heat-sink from nearby blood vessels. MWA can treat larger tumors (up to 5cm vs. 3-4cm for RFA) in shorter treatment times.
                  </p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Is MWA painful?</h3>
                  <p className="text-gray-700">
                    Most patients report minimal discomfort during the procedure thanks to local anesthesia. Afterward, some experience moderate pain for 1-2 days that is well-controlled with oral medications.
                  </p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">How soon will I know if the treatment worked?</h3>
                  <p className="text-gray-700">
                    Follow-up imaging (CT or MRI) is typically done 1 month post-procedure to confirm complete tumor ablation. Blood tests may also be used to monitor tumor markers for certain cancers.
                  </p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Can MWA be combined with other treatments?</h3>
                  <p className="text-gray-700">
                    Yes, MWA is often used alongside chemotherapy, immunotherapy, or radiation therapy. For liver tumors, it may be combined with embolization (TACE/DEB-TACE) for enhanced results.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            <div className="sticky top-6 space-y-6">
              {/* CTA Box */}
              <div className="bg-gradient-to-br from-purple-700 to-indigo-700 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-3">Is MWA Right For You?</h3>
                <p className="mb-4 text-sm">Schedule a consultation with our interventional radiologists to discuss your treatment options.</p>
                <button className="w-full bg-white text-purple-800 font-semibold py-2 px-4 rounded-lg hover:bg-purple-100 transition duration-300">
                  Book a Consultation
                </button>
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">MWA At a Glance</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-700">Procedure Time</h4>
                    <p className="text-gray-600">30-90 minutes (depending on tumor size/number)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Anesthesia</h4>
                    <p className="text-gray-600">Local with conscious sedation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Hospital Stay</h4>
                    <p className="text-gray-600">Outpatient or 1 night observation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Recovery Time</h4>
                    <p className="text-gray-600">1-3 days to normal activity</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Success Rate</h4>
                    <p className="text-gray-600">90-95% for tumors &lt;3cm</p>
                  </div>
                </div>
              </div>

              {/* Candidate Criteria */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Ideal Candidates</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Small tumors (typically ≤5cm)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Patients not eligible for surgery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Limited number of tumors (usually ≤3)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Good organ function (liver/kidney)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Desire for minimally invasive treatment</span>
                  </li>
                </ul>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Related Treatments</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/services/radiofrequency-ablation" className="text-purple-600 hover:underline">Radiofrequency Ablation (RFA)</a>
                  </li>
                  <li>
                    <a href="/services/cryoablation" className="text-purple-600 hover:underline">Cryoablation (Freezing Therapy)</a>
                  </li>
                  <li>
                    <a href="/services/tumor-embolization" className="text-purple-600 hover:underline">Tumor Embolization (TACE/DEB-TACE)</a>
                  </li>
                  <li>
                    <a href="/services/sbrt" className="text-purple-600 hover:underline">Stereotactic Body Radiation (SBRT)</a>
                  </li>
                </ul>
              </div>

              {/* Recovery Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Recovery Timeline</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-2 text-xs">
                      1
                    </div>
                    <span>Day of procedure: Rest, mild pain/discomfort</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-2 text-xs">
                      2
                    </div>
                    <span>Next day: Light activity, continue pain meds if needed</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-2 text-xs">
                      3
                    </div>
                    <span>Day 3: Most patients resume normal activities</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-2 text-xs">
                      7
                    </div>
                    <span>1 week: Follow-up with your doctor</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-2 text-xs">
                      30
                    </div>
                    <span>1 month: Imaging to confirm treatment success</span>
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

export default MicrowaveAblation;
