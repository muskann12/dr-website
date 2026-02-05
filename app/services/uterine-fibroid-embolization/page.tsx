// pages/services/uterine-fibroid-embolization.js
import React from "react";
import Head from "next/head";

export default function UterineFibroidEmbolization() {
  // --- JSON-LD Structured Data (multiple relevant schemas) ---
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Uterine Fibroid Embolization (UFE) — Non-surgical Fibroid Treatment in Pakistan",
    "url": "https://www.dryousufmemon.com/services/uterine-fibroid-embolization",
    "description": "Uterine Fibroid Embolization (UFE) offered by Dr. Yousuf Memon in Karachi, Lahore, Islamabad, Peshawar & Rahim Yar Khan. Minimally invasive fibroid treatment, fast recovery, uterus-preserving.",
    "inLanguage": "en",
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://www.dryousufmemon.com/gallery/images/ufe-treatment.jpg",
      "caption": "Uterine Fibroid Embolization — Non-surgical fibroid treatment in Pakistan"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dryousufmemon.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dryousufmemon.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Uterine Fibroid Embolization", "item": "https://www.dryousufmemon.com/services/uterine-fibroid-embolization" }
      ]
    }
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Uterine Fibroid Embolization (UFE)",
    "alternateName": "UFE",
    "procedureType": "Minimally Invasive",
    "medicalSpecialty": "Interventional Radiology",
    "howPerformed": "A small catheter is inserted (commonly via the wrist or groin) and guided to the uterine arteries where tiny embolic particles are injected to block blood supply to fibroids, causing them to shrink.",
    "preparation": "Pre-procedure clinical assessment, ultrasound or MRI, routine blood tests, possible pre-op fasting as advised.",
    "followup": "Follow-up visits at 1 week, 1 month, 3 months and 6 months to monitor shrinkage and symptom improvement.",
    "outcome": "Reduction in fibroid size and symptoms; uterus preserved in most patients.",
    "bodyLocation": "Uterus",
    "url": "https://www.dryousufmemon.com/services/uterine-fibroid-embolization",
    "performer": {
      "@type": "Physician",
      "name": "Dr. Yousuf Memon",
      "medicalSpecialty": "Interventional Radiology",
      "url": "https://www.dryousufmemon.com"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Uterine Fibroid Embolization (UFE)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UFE is a minimally invasive interventional radiology procedure that shrinks fibroids by blocking their arterial blood supply. It preserves the uterus and avoids open surgery for many patients."
        }
      },
      {
        "@type": "Question",
        "name": "Is UFE available in Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — UFE is performed in major cities across Pakistan including Karachi, Lahore, Islamabad, Hyderabad, Peshawar and Rahim Yar Khan by experienced interventional radiologists such as Dr. Yousuf Memon."
        }
      },
      {
        "@type": "Question",
        "name": "How long is the recovery after UFE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most patients return to normal daily activities within 1–2 weeks. Cramping and pelvic pain are common for 24–72 hours and managed with medications."
        }
      },
      {
        "@type": "Question",
        "name": "Does UFE affect fertility?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While the uterus is preserved after UFE, fertility outcomes can vary. Women wishing to conceive should discuss individual risks and alternatives (e.g., myomectomy) with both the interventional radiologist and gynecologist."
        }
      },
      {
        "@type": "Question",
        "name": "What are the risks of UFE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common short-term side effects include pelvic pain, fever, nausea and cramping. Rare complications include infection, non-target embolization or prolonged bleeding. A thorough pre-procedure assessment reduces risks."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dr. Yousuf Memon — Interventional Radiology Clinic",
    "url": "https://www.dryousufmemon.com",
    "logo": "https://www.dryousufmemon.com/gallery/images/logo.png",
    "image": "https://www.dryousufmemon.com/gallery/images/dr-yousuf-memon.jpg",
    "telephone": "+923367889143",
    "description": "Interventional radiology services including Uterine Fibroid Embolization (UFE) in Karachi, Lahore, Islamabad, Hyderabad & Rahim Yar Khan.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "OMI Hospital, Saddar (Karachi) — Ihsan Mumtaz Hospital (Lahore) — DIRC (Rahim Yar Khan)",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.8607",
      "longitude": "67.0011"
    },
    "sameAs": [
      "https://www.facebook.com/dryousufmemonpk",
      "https://www.instagram.com/dryousufmemon.pk",
      "https://www.linkedin.com/in/dryousufmemon"
    ],
    "serviceArea": [
      { "@type": "Place", "name": "Karachi" },
      { "@type": "Place", "name": "Lahore" },
      { "@type": "Place", "name": "Islamabad" },
      { "@type": "Place", "name": "Peshawar" },
      { "@type": "Place", "name": "Rahim Yar Khan" }
    ]
  };

  // --- Helper: large body content (SEO-rich) is embedded directly in JSX below ---

  return (
    <div className="min-h-screen bg-gray-50 leading-relaxed text-gray-800">
      <Head>
        <title>Uterine Fibroid Embolization (UFE) — Non-surgical Fibroid Treatment in Pakistan | Dr. Yousuf Memon</title>

        {/* Primary Meta */}
        <meta name="description" content="Uterine Fibroid Embolization (UFE) in Pakistan — Karachi, Lahore, Islamabad, Peshawar & Rahim Yar Khan. Minimally invasive, uterus-preserving fibroid treatment by Dr. Yousuf Memon. Fast recovery, high symptom relief." />
        <meta name="keywords" content="UFE Pakistan, uterine fibroid embolization Karachi, fibroid treatment Lahore, non-surgical fibroid removal Islamabad, fibroid doctor Peshawar, UFE Rahim Yar Khan, Dr Yousuf Memon" />
        <meta name="author" content="Dr. Yousuf Memon" />
        <link rel="canonical" href="https://www.dryousufmemon.com/services/uterine-fibroid-embolization" />
        <link rel="alternate" href="https://www.dryousufmemon.com/services/uterine-fibroid-embolization" hrefLang="en" />
        <link rel="alternate" href="https://www.dryousufmemon.com/ur/services/uterine-fibroid-embolization" hrefLang="ur" />

        {/* Open Graph */}
        <meta property="og:title" content="Uterine Fibroid Embolization (UFE) — Non-surgical Fibroid Treatment in Pakistan" />
        <meta property="og:description" content="Get UFE in Karachi, Lahore, Islamabad, Peshawar & Rahim Yar Khan by Dr. Yousuf Memon. Minimally invasive treatment that preserves the uterus — fast recovery & proven results." />
        <meta property="og:image" content="https://www.dryousufmemon.com/gallery/images/ufe-treatment.jpg" />
        <meta property="og:url" content="https://www.dryousufmemon.com/services/uterine-fibroid-embolization" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_PK" />
        <meta property="og:site_name" content="Dr Yousuf Memon — Interventional Radiology" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Uterine Fibroid Embolization (UFE) in Pakistan — Dr. Yousuf Memon" />
        <meta name="twitter:description" content="Non-surgical UFE performed in Karachi, Lahore, Islamabad and more. Preserve your uterus and get relief from heavy bleeding, pain and bulk symptoms." />
        <meta name="twitter:image" content="https://www.dryousufmemon.com/gallery/images/ufe-treatment.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

        {/* Extra analytics/verification placeholders (replace with real IDs if needed) */}
        {/* <meta name="google-site-verification" content="YOUR_GOOGLE_SITE_VERIFICATION_TOKEN" /> */}
      </Head>

      {/* HERO */}
      <header className="bg-gradient-to-r from-blue-900 to-teal-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Uterine Fibroid Embolization (UFE) — Non-surgical Fibroid Treatment in Pakistan
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-6">
            Safe, minimally invasive uterine fibroid treatment by <strong>Dr. Yousuf Memon</strong>. Available in <strong>Karachi, Lahore, Islamabad, Peshawar</strong> and <strong>Rahim Yar Khan</strong>. Preserve your uterus and return to normal life quickly.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="tel:+923367889143" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow hover:opacity-95">Call Now: +92 336 7889143</a>
            <a href="/contact" className="bg-transparent border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition">Book Online</a>
            <a href="#faq" className="underline self-center">Read FAQs</a>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-6 py-4 text-sm text-gray-600" aria-label="breadcrumb">
        <ol className="flex gap-2">
          <li><a href="/" className="hover:text-blue-800">Home</a></li>
          <li>/</li>
          <li><a href="/services" className="hover:text-blue-800">Services</a></li>
          <li>/</li>
          <li className="text-blue-900 font-medium">Uterine Fibroid Embolization</li>
        </ol>
      </nav>

      {/* MAIN LAYOUT */}
      <main className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left/Main column */}
        <article className="lg:col-span-2 space-y-8">

          {/* Overview */}
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">Overview — What is UFE?</h2>
            <p className="mb-4">
              <strong>Uterine Fibroid Embolization (UFE)</strong> is a minimally invasive procedure performed by an interventional radiologist to treat symptomatic uterine fibroids. Tiny embolic particles are delivered into the uterine arteries, cutting the blood supply to the fibroids. Over weeks to months the fibroids shrink, reducing heavy bleeding, pelvic pain and pressure symptoms while preserving the uterus.
            </p>

            <p className="mb-4">
              UFE is an excellent option for patients who want to avoid open surgery (hysterectomy) or those with multiple fibroids. It is offered in major Pakistani cities: <strong>Karachi, Lahore, Islamabad, Peshawar</strong> and <strong>Rahim Yar Khan</strong>.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-blue-50 rounded">
                <h4 className="font-semibold">Who is a candidate?</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>Women with symptomatic fibroids (heavy bleeding, pain, bulk symptoms)</li>
                  <li>Patients wishing to avoid hysterectomy</li>
                  <li>Those with multiple fibroids or prior failed medical therapy</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 rounded">
                <h4 className="font-semibold">Quick facts</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>Minimally invasive — small puncture wound</li>
                  <li>Short hospital stay (same-day or overnight)</li>
                  <li>Typical recovery 1–2 weeks</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Symptoms & Diagnosis */}
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Symptoms & Diagnosis</h3>
            <p>
              Common fibroid symptoms include <strong>heavy menstrual bleeding</strong> (menorrhagia), <strong>pelvic pain</strong>, frequent urination, constipation, and pelvic pressure or bulk symptoms (visible or palpable mass). Diagnosis is made using clinical exam, pelvic ultrasound and MRI when needed.
            </p>

            <h4 className="mt-6 font-semibold">Typical diagnostic steps</h4>
            <ol className="list-decimal pl-6 mt-2">
              <li>Medical history & physical examination</li>
              <li>Transvaginal or abdominal ultrasound</li>
              <li>MRI pelvis (for complex cases or pre-procedure planning)</li>
              <li>Routine blood tests and pre-op workup</li>
            </ol>
          </section>

          {/* Procedure Details */}
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Procedure Step-by-step (What to expect)</h3>

            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Admission & preparation:</strong> Brief pre-op tests and consent. Procedure done under local anesthesia with sedation.
              </li>
              <li>
                <strong>Access site:</strong> A small puncture is made in the wrist (radial) or groin (femoral) artery.
              </li>
              <li>
                <strong>Catheter navigation:</strong> Using X-ray guidance (fluoroscopy), the catheter is guided to the uterine arteries.
              </li>
              <li>
                <strong>Embolization:</strong> Small embolic particles are injected to block blood flow selectively to fibroids.
              </li>
              <li>
                <strong>Completion & recovery:</strong> Catheter removal, puncture site dressing, short observation — patient usually returns home same day or after overnight stay.
              </li>
            </ol>

            <p className="mt-4">
              The procedure typically takes 60–120 minutes depending on anatomy and number of arteries treated. Pain control and IV fluids are provided as necessary.
            </p>
          </section>

          {/* Benefits & Alternatives */}
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Benefits of UFE compared to surgery</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Uterus-preserving (no hysterectomy)</li>
              <li>Faster recovery (1–2 weeks vs 4–8 weeks for hysterectomy)</li>
              <li>Lower immediate procedural morbidity</li>
              <li>Effective for multiple fibroids and large fibroid burden</li>
            </ul>

            <h4 className="mt-6 font-semibold">Alternatives to discuss with your doctor</h4>
            <ul className="list-disc pl-6">
              <li>Myomectomy (surgical removal of fibroids) — often preferred for women prioritizing future fertility</li>
              <li>Hysterectomy (definitive treatment)</li>
              <li>Medical therapy (hormonal management, GnRH analogues)</li>
            </ul>
          </section>

          {/* Recovery & Aftercare */}
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Recovery & Aftercare</h3>
            <p>
              After UFE you may experience cramping similar to severe period pain for the first 24–72 hours. Pain is managed with prescribed analgesics. Most patients can walk, eat and return home within 24 hours.
            </p>

            <h4 className="mt-4 font-semibold">Practical aftercare tips</h4>
            <ul className="list-disc pl-6">
              <li>Rest for 48–72 hours, gradually increase light activity</li>
              <li>Avoid heavy lifting and strenuous exercise for 1–2 weeks</li>
              <li>Keep the puncture site clean and dry</li>
              <li>Report fever 38°C, severe bleeding, or new severe pain promptly</li>
            </ul>
          </section>

          {/* Risks */}
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Risks & Complications</h3>
            <p>
              UFE is generally safe when performed by experienced interventional radiologists. Possible risks include infection, non-target embolization (rare), vessel injury, and very rarely complications affecting ovarian function. Detailed pre-procedure counseling reduces risk and helps choose the best individualized option.
            </p>
          </section>

          {/* Cost & Insurance */}
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Cost of UFE in Pakistan</h3>
            <p>
              Costs vary with hospital, city and procedural complexity. Typical package pricing in Pakistan ranges from:
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Karachi & Lahore:</strong> PKR 220,000 — PKR 350,000</li>
              <li><strong>Islamabad & Peshawar:</strong> PKR 200,000 — PKR 320,000</li>
              <li><strong>Rahim Yar Khan & other cities:</strong> PKR 180,000 — PKR 300,000</li>
            </ul>
            <p className="mt-3">
              Payment plans, package offers and installment options are available — contact the clinic for a tailored quote and insurance support documents if applicable.
            </p>
          </section>

          {/* Locations (SEO-targeted city sections) */}
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Locations & Clinic Days — UFE in Pakistan</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Karachi</h4>
                <p className="text-sm">OMI Hospital, Saddar (Karachi). Clinic days: Mon & Thu. Full UFE services including pre-op imaging and interventional suite.</p>
              </div>

              <div>
                <h4 className="font-semibold">Lahore</h4>
                <p className="text-sm">Ihsan Mumtaz Hospital, Jauhar Town. Monthly UFE lists with local coordination for pre-op tests and admission.</p>
              </div>

              <div>
                <h4 className="font-semibold">Islamabad</h4>
                <p className="text-sm">Visiting clinics and referral coordination for UFE procedures through partner hospitals. Call to schedule.</p>
              </div>

              <div>
                <h4 className="font-semibold">Peshawar</h4>
                <p className="text-sm">Depending on demand, UFE services are available via scheduled lists at regional hospitals. Contact for next available date.</p>
              </div>

              <div>
                <h4 className="font-semibold">Rahim Yar Khan</h4>
                <p className="text-sm">DIRC Center — Regular clinic days and UFE procedure scheduling services for southern Punjab.</p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Patient Stories & Testimonials</h3>

            <div className="space-y-4">
              <blockquote className="border-l-4 pl-4 italic">
                "I had heavy bleeding for years. After UFE with Dr. Memon I feel like a new person — minimal hospital stay and fast recovery." — S., Karachi
              </blockquote>
              <blockquote className="border-l-4 pl-4 italic">
                "Professional team, clear explanation and great follow-up. Symptoms improved by 80% within 3 months." — F., Lahore
              </blockquote>
            </div>
          </section>

          {/* Internal links & resources */}
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Helpful Resources & Related Services</h3>
            <ul className="list-disc pl-6">
              <li><a href="/services/uterine-fibroid-embolization" className="text-blue-700 hover:underline">Uterine Fibroid Embolization (this page)</a></li>
              <li><a href="/services/varicocele" className="text-blue-700 hover:underline">Varicocele Embolization</a> — for men with varicocele-related infertility</li>
              <li><a href="/services/hemorrhoids" className="text-blue-700 hover:underline">Hemorrhoid Embolization</a> — minimally invasive treatment for bleeding hemorrhoids</li>
              <li><a href="/blog/ufe-vs-myomectomy" className="text-blue-700 hover:underline">Blog: UFE vs Myomectomy — Which is right for you?</a></li>
            </ul>
          </section>

          {/* FAQ (rendered interactively) */}
          <section id="faq" className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Frequently Asked Questions (FAQs)</h2>
            <div className="space-y-3">
              <details className="p-4 border rounded">
                <summary className="font-semibold cursor-pointer">Is UFE painful?</summary>
                <p className="mt-2">The procedure is performed under local anaesthesia or sedation; most discomfort occurs after, as cramping which is managed with medicines provided by the team.</p>
              </details>

              <details className="p-4 border rounded">
                <summary className="font-semibold cursor-pointer">How soon will I notice improvement?</summary>
                <p className="mt-2">Many patients notice reduced bleeding and symptom relief within 1–3 months; maximal shrinkage may take 3–6 months.</p>
              </details>

              <details className="p-4 border rounded">
                <summary className="font-semibold cursor-pointer">Can I get pregnant after UFE?</summary>
                <p className="mt-2">Some women have successful pregnancies after UFE; if future fertility is a major priority, discuss options like myomectomy with both specialists to choose the best approach.</p>
              </details>

              <details className="p-4 border rounded">
                <summary className="font-semibold cursor-pointer">Is UFE safe for large fibroids?</summary>
                <p className="mt-2">Yes, many large fibroids respond well to UFE, but individual assessment is important. Imaging (MRI) helps plan treatment.</p>
              </details>
            </div>
          </section>
        </article>

        {/* Sidebar (right column) */}
        <aside className="space-y-6">
          <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white p-5 rounded-lg sticky top-6 shadow-lg">
            <h4 className="text-lg font-bold mb-2">Schedule a Consultation</h4>
            <p className="mb-3">Call or WhatsApp: <a href="tel:+923367889143" className="underline text-white">+92 336 7889143</a></p>
            <a href="/contact" className="block bg-white text-blue-800 text-center py-2 rounded font-semibold hover:opacity-95">Book Appointment</a>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h5 className="font-semibold mb-2">Quick Facts</h5>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              <li>Minimally invasive</li>
              <li>Short hospital stay</li>
              <li>Uterus-preserving</li>
              <li>Services in major Pakistani cities</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h5 className="font-semibold mb-2">Meet the Doctor</h5>
            <p className="text-sm mb-2"><strong>Dr. Yousuf Memon</strong> — Interventional Radiologist with extensive experience in UFE and endovascular procedures. Trained in advanced minimally invasive techniques, performing high-volume UFE lists across Pakistan.</p>
            <a href="/about" className="text-blue-700 hover:underline text-sm">Read full profile</a>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h5 className="font-semibold mb-2">Prepare for your visit</h5>
            <ol className="list-decimal pl-5 text-sm">
              <li>Bring prior imaging (US/MRI)</li>
              <li>List of medications</li>
              <li>Arrange transport for day of procedure</li>
            </ol>
          </div>
        </aside>
      </main>

      {/* Footer CTA */}
      <section className="bg-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to discuss UFE? Book a consult today</h3>
          <p className="mb-6">Call +92 336 7889143 or use our <a href="/contact" className="underline">online booking form</a> to schedule a consultation in Karachi, Lahore, Islamabad or other cities.</p>
          <a href="/contact" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold">Book Appointment</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Dr. Yousuf Memon — Interventional Radiology. Services across Karachi, Lahore, Islamabad, Peshawar &amp; Rahim Yar Khan.</p>
        </div>
      </footer>
    </div>
  );
}

