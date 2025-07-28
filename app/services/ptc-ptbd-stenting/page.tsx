// pages/services/ptc-ptbd-cbd-stenting.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const PTCStenting = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>PTC, PTBD & CBD Stenting | Minimally Invasive Bile Duct Treatment</title>
        <meta 
          name="description" 
          content="PTC, PTBD & CBD stenting are minimally invasive procedures for bile duct obstructions. Learn about diagnosis, drainage solutions, and permanent stenting options."
        />
        <meta name="keywords" content="PTC, PTBD, CBD stenting, bile duct obstruction, jaundice treatment, minimally invasive biliary procedures" />
        <link rel="canonical" href="https://yourclinic.com/services/ptc-ptbd-cbd-stenting" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "PTC, PTBD & CBD Stenting",
            "description": "Minimally invasive procedures for diagnosing and treating bile duct obstructions",
            "bodyLocation": "Bile ducts",
            "howPerformed": "Image-guided needle access and catheter placement",
            "preparation": "Fasting, blood tests, imaging studies",
            "procedureOutcome": "Relief of biliary obstruction and jaundice",
            "risks": "Bleeding, infection, bile leakage",
            "medicalSpecialty": {
              "@type": "MedicalSpecialty",
              "name": "Interventional Radiology"
            }
          }
          `}
        </script>
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-700 to-emerald-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">PTC, PTBD & CBD Stenting</h1>
          <p className="text-lg md:text-xl">Minimally invasive solutions for bile duct obstructions and jaundice</p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-teal-600">Home</a></li>
            <li><span>/</span></li>
            <li><a href="/services" className="hover:text-teal-600">Services</a></li>
            <li><span>/</span></li>
            <li className="text-teal-600">PTC/PTBD with Stenting</li>
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
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Biliary Drainage & Stenting Procedures</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-gray-800">PTC (Percutaneous Transhepatic Cholangiography)</h3>
                    <p className="text-sm text-gray-600">Diagnostic imaging of bile ducts using contrast dye to identify obstructions</p>
                  </div>
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h3 className="font-semibold text-gray-800">PTBD (Percutaneous Transhepatic Biliary Drainage)</h3>
                    <p className="text-sm text-gray-600">Therapeutic drainage procedure for relieving bile duct obstructions</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-gray-800">CBD Stenting (Common Bile Duct Stenting)</h3>
                    <p className="text-sm text-gray-600">Permanent stent placement to maintain bile duct patency long-term</p>
                  </div>
                </div>
                
                {/* Procedure Image */}
                <div className="mt-6 relative w-full h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/biliary-procedure.jpg"
                    alt="Diagram showing PTC, PTBD and CBD stenting procedures"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
              </div>
            </section>

            {/* Key Points */}
            <section className="mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Conditions Treated with Biliary Interventions</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-teal-700 mb-2">Common Causes of Bile Duct Obstruction</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        <span><strong>Malignant tumors:</strong> Pancreatic cancer, cholangiocarcinoma, metastatic disease</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        <span><strong>Benign strictures:</strong> Post-surgical, inflammatory, or idiopathic narrowing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        <span><strong>Bile duct stones:</strong> Choledocholithiasis not removable by ERCP</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        <span><strong>Infection/inflammation:</strong> Cholangitis, primary sclerosing cholangitis</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-teal-700 mb-2">Symptoms Addressed</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        <span><strong>Jaundice:</strong> Yellow skin/eyes from bilirubin buildup</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        <span><strong>Pruritus:</strong> Severe itching from bile salt deposition</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        <span><strong>Abdominal pain:</strong> Typically in right upper quadrant</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        <span><strong>Cholangitis:</strong> Fever, chills from infected bile</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Procedure Details */}
            <section className="mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Procedure Details: What to Expect</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Preparation</h3>
                      <p className="text-gray-700 mb-2">
                        Patients typically fast for 6-8 hours prior. Blood tests check coagulation status. Prophylactic antibiotics may be given.
                      </p>
                      <p className="text-gray-700">
                        The procedure is performed under local anesthesia with conscious sedation in an interventional radiology suite.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">PTC Imaging Phase</h3>
                      <p className="text-gray-700">
                        Using ultrasound guidance, a fine needle (22G Chiba) accesses the bile ducts. Contrast injection under fluoroscopy maps the biliary anatomy and identifies obstruction sites.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">PTBD Drainage</h3>
                      <p className="text-gray-700 mb-2">
                        After accessing the bile duct, a guidewire is advanced across the obstruction. A drainage catheter (8-12Fr) is placed either:
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li><strong>Externally:</strong> Drains bile to a collection bag</li>
                        <li><strong>Internally-externally:</strong> Bile drains both to bowel and externally</li>
                        <li><strong>Internal:</strong> Bile drains to bowel only (preferred when possible)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">CBD Stenting</h3>
                      <p className="text-gray-700">
                        For permanent relief, a metal or plastic stent is deployed across the obstruction. Metal stents (uncovered or covered) typically last longer (6-12 months) than plastic stents (3-6 months).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Success Rates */}
            <section className="mb-8 bg-teal-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Procedure Outcomes & Success Rates</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow">
                  <p className="text-3xl font-bold text-teal-600 mb-1">90-95%</p>
                  <p className="text-sm text-gray-700">Technical success rate for PTBD</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <p className="text-3xl font-bold text-teal-600 mb-1">70-80%</p>
                  <p className="text-sm text-gray-700">Clinical success (jaundice resolution)</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <p className="text-3xl font-bold text-teal-600 mb-1">3-5%</p>
                  <p className="text-sm text-gray-700">Major complication rate</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 text-sm">
                *Success rates vary based on obstruction cause, location, and patient factors
              </p>
            </section>

            {/* Benefits/Risks */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Advantages Over Surgical Alternatives</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Key Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>Minimally invasive:</strong> Small skin nick vs. large surgical incision</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>Faster recovery:</strong> 1-2 day hospitalization vs. 5-7 days for surgery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>Lower risk:</strong> Especially beneficial for elderly or frail patients</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>Repeatable:</strong> Stents can be replaced if they become blocked</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>Palliative option:</strong> For inoperable malignant obstructions</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">Potential Risks</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>Bleeding (1-3%):</strong> From liver puncture, may require transfusion</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>Infection (2-5%):</strong> Cholangitis or catheter site infection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>Bile leakage (3-5%):</strong> May cause peritonitis if severe</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>Stent dysfunction:</strong> Occlusion or migration requiring revision</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>Pneumothorax:</strong> Rare lung complication from high puncture</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Patient Stories */}
            <section className="mb-8 bg-teal-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Patient Experiences</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-700 italic mb-4">"After being diagnosed with pancreatic cancer, I developed severe jaundice. The PTBD procedure gave me immediate relief, and the stent allowed me to continue chemotherapy without surgery."</p>
                  <p className="font-semibold">- Robert T., Pancreatic Cancer Patient</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-700 italic mb-4">"My bile duct was blocked by a large stone that couldn't be removed by ERCP. The interventional radiologists placed a drainage tube first, then later a stent. I avoided major surgery and was home in two days."</p>
                  <p className="font-semibold">- Maria S., Bile Duct Stone Patient</p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">How long does a biliary stent last?</h3>
                  <p className="text-gray-700">
                    Metal stents typically remain patent for 6-12 months, while plastic stents last 3-6 months. Stent lifespan depends on the underlying condition (malignant vs. benign) and individual factors.
                  </p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Is PTBD painful?</h3>
                  <p className="text-gray-700">
                    Most patients experience only mild discomfort during the procedure thanks to local anesthesia and sedation. Some post-procedure pain at the catheter site is common but manageable with medications.
                  </p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I bathe with a biliary drain?</h3>
                  <p className="text-gray-700">
                    Sponge bathing is recommended initially. After 5-7 days, brief showers are usually permitted if the catheter site is covered with a waterproof dressing. Always consult your care team for specific instructions.
                  </p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">When will my jaundice improve?</h3>
                  <p className="text-gray-700">
                    Bilirubin levels typically start dropping within 24-48 hours after successful drainage. Skin yellowing may take 1-2 weeks to fully resolve as bilirubin clears from tissues.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            <div className="sticky top-6 space-y-6">
              {/* Emergency CTA */}
              <div className="bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-lg font-bold mb-3">Biliary Emergency Signs</h3>
                <ul className="mb-4 space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Severe abdominal pain with fever</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>High fever (101°F) with chills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Drainage tube dislodgement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Sudden decrease in bile output</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Bleeding at catheter site</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-orange-600 font-semibold py-2 px-4 rounded-lg hover:bg-amber-50 transition text-sm">
                  Call Emergency
                </button>
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Procedure Quick Facts</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-700">Duration</h4>
                    <p className="text-gray-600">1-2 hours (varies by complexity)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Anesthesia</h4>
                    <p className="text-gray-600">Local with conscious sedation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Hospital Stay</h4>
                    <p className="text-gray-600">1-2 days for observation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Recovery Time</h4>
                    <p className="text-gray-600">3-5 days to normal activity</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Follow-up</h4>
                    <p className="text-gray-600">1 week post-procedure</p>
                  </div>
                </div>
              </div>

              {/* Candidate Criteria */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Ideal Candidates</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Patients with obstructive jaundice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Failed or contraindicated ERCP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>High surgical risk patients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Malignant biliary obstruction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Need for preoperative drainage</span>
                  </li>
                </ul>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Related Treatments</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/services/ercp" className="text-teal-600 hover:underline">ERCP (Endoscopic Retrograde Cholangiopancreatography)</a>
                  </li>
                  <li>
                    <a href="/services/liver-biopsy" className="text-teal-600 hover:underline">Liver Biopsy</a>
                  </li>
                  <li>
                    <a href="/services/gallbladder-surgery" className="text-teal-600 hover:underline">Gallbladder Surgery</a>
                  </li>
                  <li>
                    <a href="/services/portal-vein-embolization" className="text-teal-600 hover:underline">Portal Vein Embolization</a>
                  </li>
                </ul>
              </div>

              {/* Recovery Timeline */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Recovery Timeline</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-2 text-xs">
                      1
                    </div>
                    <span>Day 1: Bed rest, monitor for bleeding</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-2 text-xs">
                      2
                    </div>
                    <span>Day 2: Begin walking, drain care education</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-2 text-xs">
                      3
                    </div>
                    <span>Day 3: Discharge if stable</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-2 text-xs">
                      7
                    </div>
                    <span>1 week: Follow-up visit</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-2 text-xs">
                      30
                    </div>
                    <span>1 month: Imaging to assess stent/drain</span>
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

export default PTCStenting;
