// pages/services/hemorrhoid-embolization.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const HemorrhoidEmbolization = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Hemorrhoid Embolization Treatment | Your Clinic Name</title>
        <meta name="description" content="Minimally invasive hemorrhoid artery embolization (HAE) for chronic hemorrhoids. Non-surgical treatment with quick recovery and 90% success rate." />
        <meta name="keywords" content="hemorrhoid embolization, piles treatment, non-surgical hemorrhoid treatment, HAE procedure, hemorrhoid artery embolization, rectal bleeding treatment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.yourclinic.com/services/hemorrhoid-embolization" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Hemorrhoid Embolization Treatment | Your Clinic Name" />
        <meta property="og:description" content="Minimally invasive hemorrhoid artery embolization (HAE) for chronic hemorrhoids. Non-surgical treatment with quick recovery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourclinic.com/services/hemorrhoid-embolization" />
        <meta property="og:image" content="https://www.yourclinic.com/images/hemorrhoid-social.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hemorrhoid Embolization Treatment | Your Clinic Name" />
        <meta name="twitter:description" content="Minimally invasive hemorrhoid artery embolization (HAE) for chronic hemorrhoids." />
        <meta name="twitter:image" content="https://www.yourclinic.com/images/hemorrhoid-social.jpg" />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Hemorrhoid Artery Embolization",
            "description": "Minimally invasive treatment for chronic hemorrhoids using catheter-based embolization",
            "medicalSpecialty": {
              "@type": "MedicalSpecialty",
              "name": "Interventional Radiology"
            },
            "recognizingAuthority": {
              "@type": "Organization",
              "name": "Society of Interventional Radiology"
            },
            "relevantSpecialty": {
              "@type": "MedicalSpecialty",
              "name": "Colorectal Surgery"
            },
            "howPerformed": "Catheter-based embolization of hemorrhoidal arteries under imaging guidance",
            "preparation": "Bowel preparation, imaging evaluation",
            "potentialComplications": "Mild post-procedural pain, rare non-target embolization",
            "followup": "Clinical evaluation at 2 weeks and 3 months"
          })}
        </script>
      </Head>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hemorrhoid (Piles) Embolization</h1>
          <p className="text-xl md:text-2xl">A minimally invasive alternative to hemorrhoid surgery</p>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className="container mx-auto px-6 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li><a href="/" className="hover:text-blue-600">Home</a></li>
          <li><span aria-hidden="true">/</span></li>
          <li><a href="/services" className="hover:text-blue-600">Services</a></li>
          <li><span aria-hidden="true">/</span></li>
          <li className="text-blue-600" aria-current="page">Hemorrhoid Embolization</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Overview Section */}
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-3xl font-bold text-black mb-6">Understanding Hemorrhoids</h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <p className="text-black mb-4">
                  Hemorrhoids affect approximately 5% of the population, with prevalence increasing to 50% in adults over 50. They develop when vascular cushions in the anal canal become engorged due to:
                </p>
                <ul className="list-disc pl-5 text-black mb-4">
                  <li>Increased abdominal pressure (chronic constipation, pregnancy)</li>
                  <li>Weakening of supporting tissues (aging, genetic predisposition)</li>
                  <li>Portal hypertension (in rare cases)</li>
                </ul>
                <p className="text-black">
                  Grade II-IV internal hemorrhoids that persist despite conservative management are prime candidates for embolization therapy.
                </p>
              </div>
              
              {/* Image Placeholder */}
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6">
                <Image
                  src="/images/piles.png"
                  alt="Diagram showing hemorrhoid anatomy and embolization procedure"
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300 hover:opacity-90"
                  priority
                />
              </div>
            </section>

            {/* Embolization Explanation */}
            <section aria-labelledby="procedure-heading" className="mb-12">
              <h2 id="procedure-heading" className="text-3xl font-bold text-gray-800 mb-6">Hemorrhoid Artery Embolization (HAE)</h2>
              <div className="bg-purple-50 rounded-lg shadow-md p-6 border border-purple-200">
                <p className="text-gray-700 mb-4">
                  HAE is an innovative endovascular procedure that reduces blood flow to hemorrhoidal tissue by selectively occluding the terminal branches of the superior rectal arteries. This causes hemorrhoids to shrink while preserving normal rectal circulation through collateral vessels.
                </p>
                <p className="text-gray-700 font-medium">
                  Clinical studies demonstrate 85-95% technical success rates with significant symptom improvement in 90% of patients at 1-year follow-up.
                </p>
              </div>
            </section>

            {/* Procedure Details */}
            <section aria-labelledby="details-heading" className="mb-12">
              <h2 id="details-heading" className="text-3xl font-bold text-gray-800 mb-6">Procedure Details</h2>
              
              <div className="space-y-6">
                {/* Pre-Procedure */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">Pre-Procedure Evaluation</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Complete colorectal examination including anoscopy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>CT angiography to map hemorrhoidal arteries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Bowel preparation with clear liquids day before</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>NPO for 6 hours prior to procedure</span>
                    </li>
                  </ul>
                </div>
                
                {/* During Procedure */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">Procedure Execution</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Local anesthesia with conscious sedation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>1.8mm microcatheter advanced via radial or femoral artery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Superselective catheterization of superior rectal artery branches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Embolization with 300-500μm microspheres under fluoroscopic guidance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Average procedure duration: 60-90 minutes</span>
                    </li>
                  </ul>
                </div>
                
                {/* Post-Procedure */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-purple-700 mb-3">Post-Procedure Care</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>2-4 hours bed rest with access site monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Discharge same day with oral analgesics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>High-fiber diet and stool softeners recommended</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Follow-up at 2 weeks and 3 months</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section aria-labelledby="benefits-heading" className="mb-12">
              <h2 id="benefits-heading" className="text-3xl font-bold text-gray-800 mb-6">Clinical Benefits of HAE</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Minimally Invasive</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>No surgical incisions or wound care needed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Preserves anal sphincter function</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Effective Relief</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>90% reduction in bleeding episodes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>75-85% improvement in prolapse symptoms</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Rapid Recovery</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Return to work in 2-3 days vs 2-3 weeks with surgery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Minimal post-procedural pain</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Low Complication Rate</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>No risk of fecal incontinence</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Significantly lower infection risk than surgery</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Risks Section */}
            <section aria-labelledby="risks-heading" className="mb-12">
              <h2 id="risks-heading" className="text-3xl font-bold text-gray-800 mb-6">Potential Risks and Limitations</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-red-600 mb-3">Procedure-Related Risks</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <div>
                          <h4 className="font-medium text-gray-800">Access Site Complications</h4>
                          <p className="text-gray-700 text-sm">Hematoma or pseudoaneurysm (1-3%)</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <div>
                          <h4 className="font-medium text-gray-800">Non-Target Embolization</h4>
                          <p className="text-gray-700 text-sm">Rare but possible with improper technique</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-red-600 mb-3">Therapeutic Limitations</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <div>
                          <h4 className="font-medium text-gray-800">External Hemorrhoids</h4>
                          <p className="text-gray-700 text-sm">Less responsive than internal hemorrhoids</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <div>
                          <h4 className="font-medium text-gray-800">Large Prolapses</h4>
                          <p className="text-gray-700 text-sm">May require adjunctive procedures</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Candidate Section */}
            <section aria-labelledby="candidate-heading" className="mb-12">
              <h2 id="candidate-heading" className="text-3xl font-bold text-gray-800 mb-6">Ideal Candidates for HAE</h2>
              <div className="bg-purple-50 rounded-lg shadow-md p-6 border border-purple-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-700 mb-3">Inclusion Criteria</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span>Grade II-IV internal hemorrhoids</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span>Failed conservative management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span>Contraindication to surgery</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-700 mb-3">Exclusion Criteria</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Active proctitis or anal fissures</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Coagulopathy or contrast allergy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Pregnancy</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Follow-Up Section */}
            <section aria-labelledby="followup-heading">
              <h2 id="followup-heading" className="text-3xl font-bold text-gray-800 mb-6">Long-Term Management</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Post-Procedure Care</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>High-fiber diet (25-30g daily)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Adequate hydration (2-3L daily)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Stool softeners for 2-4 weeks</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Monitoring</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Clinical evaluation at 2 weeks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Anoscopy at 3 months</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Annual follow-up for recurrence</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
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
                <h3 className="text-xl font-bold text-gray-800 mb-4">HAE Key Statistics</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Technical Success</h4>
                    <p className="text-gray-600">95-98%</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Symptom Improvement</h4>
                    <p className="text-gray-600">90% at 1 year</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Recurrence Rate</h4>
                    <p className="text-gray-600">10-15% at 3 years</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Complication Rate</h4>
                    <p className="text-gray-600">&lt;5%</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Pain Score</h4>
                    <p className="text-gray-600">2/10 vs 7/10 for surgery</p>
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
                    <p className="text-xs text-gray-600">60-80% success for Grade I-II</p>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Infrared Coagulation</a>
                    <p className="text-xs text-gray-600">For small internal hemorrhoids</p>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Sclerotherapy</a>
                    <p className="text-xs text-gray-600">Injection of chemical solution</p>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Hemorrhoidectomy</a>
                    <p className="text-xs text-gray-600">Surgical removal (gold standard)</p>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* FAQ Section */}
      <section aria-labelledby="faq-heading" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 id="faq-heading" className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">How does HAE compare to traditional hemorrhoid surgery?</h3>
                </div>
                <div className="mt-2 text-gray-600">
                  <p>HAE offers several advantages over hemorrhoidectomy:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>No surgical wounds or risk of anal stenosis</li>
                    <li>Minimal pain (average pain score 2/10 vs 7/10 for surgery)</li>
                    <li>Return to work in 2-3 days vs 2-3 weeks</li>
                    <li>No risk of fecal incontinence</li>
                    <li>Comparable long-term success rates (85-90%)</li>
                  </ul>
                </div>
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">Will I need to prepare my bowels before the procedure?</h3>
                </div>
                <div className="mt-2 text-gray-600">
                  <p>Preparation is minimal compared to surgical procedures:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Clear liquid diet for 12 hours before</li>
                    <li>No formal bowel prep or enemas required</li>
                    <li>Continue regular medications unless instructed otherwise</li>
                    <li>NPO for 6 hours prior to procedure</li>
                  </ul>
                </div>
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">What lifestyle changes can help prevent hemorrhoid recurrence?</h3>
                </div>
                <div className="mt-2 text-gray-600">
                  <p>To maintain results and prevent new hemorrhoids:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Consume 25-30g of fiber daily (fruits, vegetables, whole grains)</li>
                    <li>Drink 2-3L of water per day</li>
                    <li>Avoid prolonged sitting on toilet</li>
                    <li>Exercise regularly to improve circulation</li>
                    <li>Respond promptly to bowel urges</li>
                    <li>Consider fiber supplements if needed</li>
                  </ul>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HemorrhoidEmbolization;
