// pages/services/hemorrhoid-embolization.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

const HemorrhoidEmbolization = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Hemorrhoid Embolization in Pakistan | Piles Treatment by Dr. Yousuf Memon</title>
        <meta 
          name="description" 
          content="Get the best hemorrhoid (piles) embolization in Pakistan. Dr. Yousuf Memon offers minimally invasive, non-surgical treatment for fast recovery and high success rate in Karachi, Lahore, and nationwide." 
        />
        <meta
          name="keywords"
          content="hemorrhoid embolization Pakistan, piles treatment without surgery, minimally invasive hemorrhoid treatment, hemorrhoidal artery embolization, THD procedure Pakistan, best piles doctor in Karachi"
        />
        <link rel="canonical" href="https://dryousufmemon.com/services/hemorrhoid-embolization" />

        {/* Open Graph (Facebook/LinkedIn) */}
        <meta property="og:title" content="Hemorrhoid Embolization in Pakistan | Dr. Yousuf Memon Clinic" />
        <meta property="og:description" content="Minimally invasive piles treatment by Dr. Yousuf Memon. No surgery, quick recovery, high success rate. Book your consultation in Karachi, Pakistan." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://dryousufmemon.com/services/hemorrhoid-embolization" />
        <meta property="og:image" content="https://dryousufmemon.com/images/hemorrhoid-embolization.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hemorrhoid Embolization in Pakistan | Dr. Yousuf Memon Clinic" />
        <meta name="twitter:description" content="Painless, non-surgical hemorrhoid treatment by Dr. Yousuf Memon. Fast recovery, high success rate in Pakistan." />
        <meta name="twitter:image" content="https://dryousufmemon.com/images/hemorrhoid-embolization.jpg" />
      </Head>

      {/* Enhanced schema markup */}
      <Script type="application/ld+json" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Hemorrhoid Embolization",
            "description": "Minimally invasive procedure to treat hemorrhoids by reducing their blood supply",
            "procedureType": "Minimally invasive",
            "bodyLocation": "Rectum/Anus",
            "howPerformed": "Catheter insertion via femoral artery with embolic agents under imaging guidance",
            "preparation": "Clinical evaluation and imaging",
            "followup": "Outpatient procedure with follow-up in 2 weeks",
            "risks": "Mild discomfort, rare non-target embolization",
            "successRate": "80-90%",
            "medicalSpecialty": {
              "@type": "MedicalSpecialty",
              "name": "Interventional Radiology"
            },
            "provider": {
              "@type": "MedicalClinic",
              "name": "Dr. Yousuf Memon Clinic",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Clinic Address",
                "addressLocality": "Karachi",
                "addressRegion": "Sindh",
                "postalCode": "75500",
                "addressCountry": "PK"
              },
              "telephone": "+923367889143"
            }
          }
        `}
      </Script>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hemorrhoid Embolization in Pakistan</h1>
          <p className="text-xl md:text-2xl">Advanced minimally invasive treatment for piles without surgery</p>
          <div className="mt-6">
            <a href="tel:+923367889143" className="bg-white text-purple-800 font-semibold py-3 px-6 rounded-lg hover:bg-purple-50 transition inline-block">
              Book Consultation: +92 336-7889143
            </a>
          </div>
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
            <li className="text-purple-600">Hemorrhoid Embolization</li>
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
                  <strong>Hemorrhoid Embolization in Pakistan</strong> is a modern, minimally invasive treatment for piles. Dr. Yousuf Memon offers expert care for fast recovery and high success rates nationwide.
                </p>
                <p className="text-gray-700">
                  Hemorrhoids, commonly called piles in Pakistan, are swollen veins in the rectum and anus that cause discomfort, itching, pain, and bleeding. They affect about 50% of adults by age 50, with higher prevalence in populations with low-fiber diets like ours.
                </p>
                <p className="text-gray-700">
                  In Pakistan, common causes include chronic constipation (often from low fiber intake), prolonged sitting, pregnancy, and straining during bowel movements. Many patients suffer silently due to embarrassment, but effective treatments like embolization are now available.
                </p>
              </div>
              
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6">
                <Image
                  src="/images/piles.png"
                  alt="Hemorrhoid embolization procedure performed by interventional radiologist in Pakistan"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-12 bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Our Hemorrhoid Embolization Service?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-xl font-semibold text-purple-700 mb-3">Specialized Expertise</div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Performed by Dr. Yousuf Memon, experienced in embolization techniques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>State-of-the-art angiography equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Collaboration with gastroenterologists and colorectal surgeons</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-xl font-semibold text-purple-700 mb-3">Patient Advantages</div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>No surgical incisions or painful recovery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Return to work within 1-2 days</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>High success rate (80-90%)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Procedure Details */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Hemorrhoid Embolization Procedure</h2>
              
              <div className="bg-purple-50 rounded-lg shadow-md p-6 border border-purple-200">
                <div className="space-y-6">
                  <div>
                    <div className="text-xl font-semibold text-purple-700 mb-2">1. Pre-Procedure Preparation</div>
                    <p className="text-gray-700">
                      • Comprehensive evaluation including proctoscopy<br/>
                      • Blood tests to check clotting function<br/>
                      • Fasting for 6 hours before procedure<br/>
                      • Discussion of medications (may need to adjust blood thinners)<br/>
                      • Local anesthetic cream applied to access site
                    </p>
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-purple-700 mb-2">2. During the Procedure</div>
                    <p className="text-gray-700 mb-2">
                      • Local anesthesia with sedation (awake but relaxed)<br/>
                      • Tiny puncture in groin or wrist (1-2mm)<br/>
                      • Catheter guided to hemorrhoidal arteries using X-ray imaging<br/>
                      • Microspheres injected to reduce blood flow<br/>
                      • Procedure duration: 45-90 minutes<br/>
                      • No stitches needed - just small bandage
                    </p>
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-purple-700 mb-2">3. Post-Procedure Recovery</div>
                    <p className="text-gray-700">
                      • 2-4 hours observation before discharge<br/>
                      • Mild discomfort managed with simple painkillers<br/>
                      • Can eat normally immediately after<br/>
                      • Return to light activities next day<br/>
                      • Avoid heavy lifting for 1 week<br/>
                      • Follow-up in 2 weeks to assess results
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits vs Traditional Surgery</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-xl font-semibold text-purple-700 mb-3">Embolization Advantages</div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>No surgical wounds in sensitive area</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Minimal pain during recovery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>1-2 day recovery vs 2-4 weeks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Lower risk of complications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Can be repeated if needed</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-xl font-semibold text-purple-700 mb-3">Surgery Disadvantages</div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Painful recovery (2-4 weeks)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Risk of incontinence or strictures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Higher complication rates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>General anesthesia often required</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Difficult to repeat if hemorrhoids recur</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Risks Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Potential Risks and Side Effects</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700"><strong>Access Site Issues:</strong> Minor bruising or hematoma at puncture site (5-10% cases)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700"><strong>Post-Embolization Syndrome:</strong> Mild fever or discomfort (10-15%, resolves in 1-2 days)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700"><strong>Non-Target Embolization:</strong> Very rare (&lt;1%) with proper technique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700"><strong>Incomplete Relief:</strong> May need additional treatment in 10-15% of cases</span>
                  </li>
                </ul>
                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-medium">Note: These risks are significantly lower than with traditional hemorrhoid surgery and most patients experience only mild temporary discomfort.</p>
                </div>
              </div>
            </section>

            {/* Candidate Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Ideal Candidates in Pakistan</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-xl font-semibold text-purple-700 mb-3">Good Candidates</div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Grade II-III hemorrhoids failing conservative treatment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Patients wanting to avoid surgery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Those with bleeding as main symptom</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Patients with comorbidities increasing surgical risk</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-xl font-semibold text-purple-700 mb-3">Poor Candidates</div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Grade IV hemorrhoids with prolapse</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Active infection or abscess</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Severe clotting disorders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Allergy to contrast material</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Testimonial Section */}
            <section className="mb-12 bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Patient Experiences</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-700 italic mb-4">"After suffering with piles for years and fearing surgery, embolization changed my life. Minimal discomfort and I was back to work in 2 days. Why isn't this treatment better known in Pakistan?"</p>
                  <p className="text-gray-600 font-semibold">- Ahmed R., 45, Karachi</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-700 italic mb-4">"As a woman, I was embarrassed about my hemorrhoids. Dr. Memon's team was professional and kind. The procedure was much easier than I expected - no more bleeding or pain."</p>
                  <p className="text-gray-600 font-semibold">- Fatima S., 38, Lahore</p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">1. How much does hemorrhoid embolization cost in Pakistan?</h3>
                  <p className="text-gray-700">
                    Costs vary by hospital but are generally 20-30% less than traditional surgery when considering faster recovery. Many insurance plans now cover this procedure. Contact us for specific pricing at our facility.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">2. Is this available in all Pakistani hospitals?</h3>
                  <p className="text-gray-700">
                    No, it requires specialized interventional radiologists and is currently only available at select centers in major cities like Karachi, Lahore, and Islamabad. Our facility has extensive experience with this advanced treatment.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">3. Will I need to change my diet after the procedure?</h3>
                  <p className="text-gray-700">
                    We recommend increasing fiber and water intake to prevent recurrence, which is good advice for all Pakistanis given our typically low-fiber diets. No strict restrictions are needed post-procedure.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">4. Can pregnant women undergo this treatment?</h3>
                  <p className="text-gray-700">
                    Pregnancy-related hemorrhoids are best managed conservatively until after delivery. Embolization can be considered postpartum if symptoms persist, avoiding radiation exposure during pregnancy.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-6 space-y-6">
              {/* Emergency CTA */}
              <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-lg shadow-xl p-6">
                  <div className="text-xl font-bold mb-4">Severe Hemorrhoid Bleeding?</div>
                <p className="mb-4">Seek immediate care if you have:</p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Heavy rectal bleeding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Dizziness or fainting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Severe pain with swelling</span>
                  </li>
                </ul>
                <a href="tel:+923367889143" className="w-full bg-white text-red-800 font-semibold py-3 px-4 rounded-lg hover:bg-red-50 transition block text-center">
                  Emergency: +92 336-7889143
                </a>
              </div>

              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-xl font-bold text-gray-800 mb-4">Procedure Highlights</div>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-gray-700">Procedure Time</div>
                    <p className="text-gray-600">45-90 minutes</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">Success Rate</div>
                    <p className="text-gray-600">80-90% symptom improvement</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">Recovery Time</div>
                    <p className="text-gray-600">1-2 days</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">Hospital Stay</div>
                    <p className="text-gray-600">Outpatient (no overnight)</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">Anesthesia</div>
                    <p className="text-gray-600">Local with sedation</p>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-xl font-bold text-gray-800 mb-4">Related Services in Pakistan</div>
                <ul className="space-y-3">
                  <li>
                    <a href="/services/colonoscopy" className="text-purple-600 hover:underline">Diagnostic Colonoscopy</a>
                  </li>
                  <li>
                    <a href="/services/irritable-bowel" className="text-purple-600 hover:underline">Irritable Bowel Clinic</a>
                  </li>
                  <li>
                    <a href="/services/constipation" className="text-purple-600 hover:underline">Chronic Constipation Treatment</a>
                  </li>
                  <li>
                    <a href="/services/anal-fissure" className="text-purple-600 hover:underline">Anal Fissure Treatment</a>
                  </li>
                </ul>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-purple-200">
                <div className="text-xl font-bold text-gray-800 mb-4">Consult Dr. Yousuf Memon</div>
                <p className="text-gray-700 mb-4">For hemorrhoid evaluation or treatment options:</p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Phone: <a href="tel:+923367889143" className="text-purple-600 hover:underline">+92 336-7889143</a></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Email: <a href="mailto:info@dryousufmemon.com" className="text-purple-600 hover:underline">info@dryousufmemon.com</a></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Clinic Hours: Mon-Sat, 9AM-5PM</span>
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 transition block text-center">
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HemorrhoidEmbolization;