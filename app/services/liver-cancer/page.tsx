// pages/services/liver-cancer-cirrhosis.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const LiverCancerCirrhosis = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Liver Cancer & Cirrhosis Treatment (TACE) | Your Clinic Name</title>
        <meta name="description" content="Specialized TACE treatment for hepatocellular carcinoma (HCC) in cirrhotic patients. Minimally invasive procedure to control tumor growth and improve survival." />
        <meta name="keywords" content="TACE procedure, liver cancer treatment, hepatocellular carcinoma, cirrhosis treatment, HCC therapy, liver tumor embolization" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.yourclinic.com/services/liver-cancer-cirrhosis" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Liver Cancer & Cirrhosis Treatment (TACE) | Your Clinic Name" />
        <meta property="og:description" content="Specialized TACE treatment for hepatocellular carcinoma (HCC) in cirrhotic patients. Minimally invasive procedure to control tumor growth and improve survival." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourclinic.com/services/liver-cancer-cirrhosis" />
        <meta property="og:image" content="https://www.yourclinic.com/images/liver-social-preview.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Liver Cancer & Cirrhosis Treatment (TACE) | Your Clinic Name" />
        <meta name="twitter:description" content="Specialized TACE treatment for hepatocellular carcinoma (HCC) in cirrhotic patients." />
        <meta name="twitter:image" content="https://www.yourclinic.com/images/liver-social-preview.jpg" />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Transarterial Chemoembolization (TACE)",
            "description": "Minimally invasive treatment for hepatocellular carcinoma in cirrhotic patients",
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
              "name": "Oncology"
            },
            "howPerformed": "Catheter-based delivery of chemotherapy followed by arterial embolization",
            "preparation": "Liver function tests, imaging studies, multidisciplinary evaluation",
            "potentialComplications": "Post-embolization syndrome, liver function impairment, infection",
            "followup": "Regular imaging surveillance and liver function monitoring"
          })}
        </script>
      </Head>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-teal-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Liver Cancer Due to Cirrhosis</h1>
          <p className="text-xl md:text-2xl">Advanced TACE treatment for hepatocellular carcinoma (HCC)</p>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className="container mx-auto px-6 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <a href="/" className="hover:text-blue-600">Home</a>
          </li>
          <li>
            <span aria-hidden="true">/</span>
          </li>
          <li>
            <a href="/services" className="hover:text-blue-600">Services</a>
          </li>
          <li>
            <span aria-hidden="true">/</span>
          </li>
          <li className="text-blue-600" aria-current="page">
            Liver Cancer & Cirrhosis
          </li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Overview Section */}
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-3xl font-bold text-gray-800 mb-6">Understanding Liver Cancer and Cirrhosis</h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  Hepatocellular carcinoma (HCC), the most common primary liver cancer, develops in 80-90% of cases within cirrhotic livers. This progression occurs because chronic liver damage leads to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                  <li>Persistent inflammation and hepatocyte regeneration</li>
                  <li>Fibrosis accumulation and architectural distortion</li>
                  <li>Genetic mutations promoting malignant transformation</li>
                </ul>
                <p className="text-gray-700">
                  The most common etiologies of cirrhosis leading to HCC include chronic hepatitis B (HBV) and C (HCV) infections, alcohol-related liver disease, and non-alcoholic steatohepatitis (NASH).
                </p>
              </div>
              
              {/* Image Placeholder */}
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6">
                <Image
                  src="/images/liver.png"
                  alt="Comparative illustration of healthy liver vs cirrhotic liver with hepatocellular carcinoma"
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-300 hover:opacity-90"
                  priority
                />
              </div>
            </section>

            {/* TACE Explanation */}
            <section aria-labelledby="tace-heading" className="mb-12">
              <h2 id="tace-heading" className="text-3xl font-bold text-gray-800 mb-6">Transarterial Chemoembolization (TACE) Explained</h2>
              <div className="bg-blue-50 rounded-lg shadow-md p-6 border border-blue-200">
                <p className="text-gray-700 mb-4">
                  TACE is a locoregional therapy that combines targeted chemotherapy delivery with ischemic tumor necrosis. It exploits the unique vascular supply of HCC tumors, which derive ~90% of their blood flow from hepatic artery branches (vs. normal liver parenchyma which is primarily portal vein-fed).
                </p>
                <p className="text-gray-700 font-medium">
                  As a bridge or downstaging therapy, TACE can extend median survival to 20-30 months for intermediate-stage HCC (BCLC B), with 1-year survival rates of 60-80% in carefully selected patients.
                </p>
              </div>
            </section>

            {/* Procedure Details */}
            <section aria-labelledby="procedure-heading" className="mb-12">
              <h2 id="procedure-heading" className="text-3xl font-bold text-gray-800 mb-6">TACE Procedure Details</h2>
              
              <div className="space-y-6">
                {/* Pre-Procedure */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Pre-Procedure Evaluation</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Multiphasic CT or MRI to assess tumor burden and vascular anatomy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Laboratory tests: Liver function (Child-Pugh score), AFP levels, renal function</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Multidisciplinary tumor board review for treatment planning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Patient preparation: NPO guidelines, medication reconciliation</span>
                    </li>
                  </ul>
                </div>
                
                {/* During Procedure */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Procedure Execution</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Moderate sedation or general anesthesia based on case complexity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Ultrasound-guided femoral artery access with microcatheter advancement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Superselective catheterization of tumor-feeding arteries under fluoroscopy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Delivery of chemotherapy (typically doxorubicin or cisplatin) emulsified with lipiodol</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Embolization with 100-300μm particles to induce ischemic necrosis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Average procedure duration: 90-120 minutes</span>
                    </li>
                  </ul>
                </div>
                
                {/* Post-Procedure */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Post-Procedure Management</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>4-6 hours of bed rest with access site monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Aggressive management of post-embolization syndrome (fever, pain, nausea)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>24-48 hour hospitalization for observation in most cases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>First follow-up imaging at 4-6 weeks to assess treatment response</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section aria-labelledby="benefits-heading" className="mb-12">
              <h2 id="benefits-heading" className="text-3xl font-bold text-gray-800 mb-6">Clinical Benefits of TACE</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Oncologic Efficacy</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Objective response rates of 40-60% (mRECIST criteria)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Median time to progression: 7-10 months</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>Complete necrosis achievable in 20-30% of small tumors</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Safety Profile</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>No systemic chemotherapy side effects (hair loss, myelosuppression)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Preservation of non-tumorous liver parenchyma</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Repeatable procedure (typically 2-4 sessions)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Therapeutic Advantages</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Can downstage 15-30% of patients to transplant eligibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Synergistic with systemic therapies (TKIs, immunotherapies)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Palliation of cancer-related symptoms</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Technical Innovations</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>DEB-TACE (Drug-eluting beads) for more controlled drug release</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>Cone-beam CT guidance for precise tumor targeting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>Radiolucent embolics for post-procedure imaging clarity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Risks Section */}
            <section aria-labelledby="risks-heading" className="mb-12">
              <h2 id="risks-heading" className="text-3xl font-bold text-gray-800 mb-6">Risks and Limitations</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-red-600 mb-3">Procedure-Related Risks</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <div>
                          <h4 className="font-medium text-gray-800">Liver Function Deterioration</h4>
                          <p className="text-gray-700 text-sm">Occurs in 10-20% of cirrhotic patients, particularly Child-Pugh B</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <div>
                          <h4 className="font-medium text-gray-800">Non-Target Embolization</h4>
                          <p className="text-gray-700 text-sm">Gallbladder, stomach, or pancreatic ischemia (2-5% risk)</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <div>
                          <h4 className="font-medium text-gray-800">Liver Abscess Formation</h4>
                          <p className="text-gray-700 text-sm">Higher risk in patients with biliary-enteric anastomoses</p>
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
                          <h4 className="font-medium text-gray-800">Tumor Characteristics</h4>
                          <p className="text-gray-700 text-sm">Less effective for infiltrative or poorly vascularized tumors</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <div>
                          <h4 className="font-medium text-gray-800">Vascular Constraints</h4>
                          <p className="text-gray-700 text-sm">Portal vein thrombosis may contraindicate treatment</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <div>
                          <h4 className="font-medium text-gray-800">Disease Progression</h4>
                          <p className="text-gray-700 text-sm">Extrahepatic spread may develop despite local control</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Candidate Section */}
            <section aria-labelledby="candidate-heading" className="mb-12">
              <h2 id="candidate-heading" className="text-3xl font-bold text-gray-800 mb-6">Ideal Patient Selection</h2>
              <div className="bg-teal-50 rounded-lg shadow-md p-6 border border-teal-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-teal-700 mb-3">Inclusion Criteria</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>BCLC stage B (intermediate stage) HCC</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>Child-Pugh A or B cirrhosis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>Multinodular disease without vascular invasion</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>ECOG performance status 0-1</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-700 mb-3">Exclusion Criteria</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Main portal vein thrombosis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Extrahepatic metastases</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Child-Pugh C cirrhosis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Bilirubin  3mg/dL</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Follow-Up Section */}
            <section aria-labelledby="followup-heading">
              <h2 id="followup-heading" className="text-3xl font-bold text-gray-800 mb-6">Post-TACE Management Protocol</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Imaging Surveillance</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Contrast-enhanced MRI at 4-6 weeks post-procedure</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Quarterly imaging for 2 years if stable</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>mRECIST criteria for response assessment</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Liver Health Maintenance</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Continued management of underlying cirrhosis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Hepatitis B/C antiviral therapy when applicable</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Nutritional optimization and ascites management</span>
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
              <div className="bg-gradient-to-br from-teal-600 to-blue-700 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4">Expert Liver Cancer Care</h3>
                <p className="mb-4">Our multidisciplinary team specializes in advanced treatments for HCC in cirrhotic patients.</p>
                <button className="w-full bg-white text-teal-800 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition duration-300">
                  Request Consultation
                </button>
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">TACE Key Statistics</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Median Survival</h4>
                    <p className="text-gray-600">20-30 months (BCLC B)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Objective Response</h4>
                    <p className="text-gray-600">52-63% (EASL criteria)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Time to Progression</h4>
                    <p className="text-gray-600">7-10 months</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Downstaging Success</h4>
                    <p className="text-gray-600">15-30% to transplant criteria</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Procedure Mortality</h4>
                    <p className="text-gray-600">&lt;1% in experienced centers</p>
                  </div>
                </div>
              </div>

              {/* Related Conditions */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Related Conditions</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Hepatitis B & C</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Liver Cirrhosis</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Non-Alcoholic Fatty Liver Disease</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Portal Hypertension</a>
                  </li>
                </ul>
              </div>

              {/* Treatment Options */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Alternative Therapies</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Radiofrequency Ablation (RFA)</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Yttrium-90 Radioembolization</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Liver Transplantation</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Systemic Therapies</a>
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
                  <h3 className="text-lg font-semibold text-gray-800">How does TACE compare to systemic chemotherapy for HCC?</h3>
                </div>
                <div className="mt-2 text-gray-600">
                  <p>TACE demonstrates superior outcomes compared to systemic chemotherapy for intermediate-stage HCC, with response rates of 40-60% vs. 10-20% for chemotherapy. Unlike systemic treatments, TACE spares patients from hair loss, severe nausea, and bone marrow suppression while achieving higher intra-tumoral drug concentrations.</p>
                </div>
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">What are the signs that TACE is working?</h3>
                </div>
                <div className="mt-2 text-gray-600">
                  <p>Positive response indicators include decreased arterial enhancement on follow-up imaging, reduction in tumor size (mRECIST criteria), declining AFP levels (if initially elevated), and clinical improvement in cancer-related symptoms. The first follow-up scan at 4-6 weeks provides the initial treatment assessment.</p>
                </div>
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">Can TACE be combined with other HCC treatments?</h3>
                </div>
                <div className="mt-2 text-gray-600">
                  <p>Yes, TACE is frequently combined with:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Tyrosine kinase inhibitors (sorafenib, lenvatinib) for synergistic effects</li>
                    <li>Immunotherapy (atezolizumab/bevacizumab) in advanced cases</li>
                    <li>Radiation therapy for portal vein thrombosis</li>
                    <li>Ablative techniques for residual viable tumor</li>
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

export default LiverCancerCirrhosis;
