import React from 'react';
import Head from 'next/head';

const UterineFibroidEmbolization = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is UFE painful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The procedure is performed under local anaesthesia or sedation. After the procedure, cramping and pelvic pain are common for 24–72 hours and can be managed with prescribed pain medication."
        }
      },
      {
        "@type": "Question",
        "name": "How soon will I see results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many patients notice symptom improvement within the first 1–3 months; maximum fibroid shrinkage and symptom relief are usually seen around 3–6 months after UFE."
        }
      },
      {
        "@type": "Question",
        "name": "Can fibroids come back after UFE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UFE treats existing fibroids by blocking their blood supply. New fibroids can develop in the future; long-term recurrence rates vary but are generally low (around 10–15% over several years)."
        }
      },
      {
        "@type": "Question",
        "name": "Does UFE affect future pregnancy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UFE preserves the uterus for many patients, but fertility outcomes depend on individual factors. Patients wishing to conceive should discuss risks and alternatives with the interventional radiologist and gynecologist."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical recovery time after UFE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most patients return to normal activities within 1–2 weeks; light activity is recommended for the first few days."
        }
      }
    ]
  };

  const medicalProcedureStructuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Uterine Fibroid Embolization (UFE)",
    alternateName: "UFE",
    procedureType: "Minimally Invasive",
    medicalSpecialty: "Interventional Radiology",
    howPerformed: "A catheter is guided into the uterine arteries and embolic particles are released to block blood flow to fibroids, causing them to shrink.",
    preparation: "Pre-procedure imaging (ultrasound / MRI), routine blood tests, and clinical assessment.",
    followup: "Follow-up visits at 1 week, 1–3 months and as needed thereafter.",
    outcome: "Reduction in fibroid size and symptoms; preservation of the uterus in most patients.",
    url: "https://dryousufmemon.pk/services/uterine-fibroid-embolization",
    performer: {
      "@type": "Physician",
      name: "Dr. Yousuf Memon",
      medicalSpecialty: "Interventional Radiology"
    }
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dryousufmemon.pk/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://dryousufmemon.pk/services" },
      { "@type": "ListItem", "position": 3, "name": "Uterine Fibroid Embolization", "item": "https://dryousufmemon.pk/services/uterine-fibroid-embolization" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Uterine Fibroid Embolization (UFE) in Pakistan — Dr. Yousuf Memon</title>
        <meta name="description" content="Non-surgical Uterine Fibroid Embolization (UFE) in Karachi, Lahore, Hyderabad & Rahim Yar Khan by Dr. Yousuf Memon. Fast recovery, uterus-preserving treatment with 85–90% symptom improvement." />
        <meta name="keywords" content="UFE Pakistan, uterine fibroid embolization Karachi, UFE Lahore, fibroid treatment Pakistan, Dr Yousuf Memon" />
        <link rel="canonical" href="https://dryousufmemon.pk/services/uterine-fibroid-embolization" />

        {/* Open Graph / Social */}
        <meta property="og:title" content="Uterine Fibroid Embolization (UFE) in Pakistan — Dr. Yousuf Memon" />
        <meta property="og:description" content="Non-surgical UFE in Karachi, Lahore, Hyderabad & Rahim Yar Khan. Preserve your uterus — fast recovery and proven results." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://dryousufmemon.pk/services/uterine-fibroid-embolization" />
        <meta property="og:site_name" content="Dr Yousuf Memon" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Uterine Fibroid Embolization (UFE) in Pakistan" />
        <meta name="twitter:description" content="Non-surgical UFE in Karachi, Lahore, Hyderabad & Rahim Yar Khan. Preserve your uterus — fast recovery and proven results." />

        {/* Structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureStructuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      </Head>

      {/* Hero */}
      <div className="relative bg-gradient-to-r from-blue-900 to-purple-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Uterine Fibroid Embolization (UFE) in Pakistan</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Non-surgical, uterus-preserving fibroid treatment available in Karachi, Lahore, Hyderabad &amp; Rahim Yar Khan. 85–90% symptom improvement.</p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="https://dryousufmemon.pk/contact" className="inline-block bg-white text-blue-800 font-semibold py-3 px-6 rounded-lg hover:opacity-95">Book Consultation</a>
            <a href="#faq" className="inline-block border border-white py-3 px-6 rounded-lg">Read FAQs</a>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li>/</li>
            <li><a href="/services" className="hover:text-blue-600">Services</a></li>
            <li>/</li>
            <li className="text-blue-600" aria-current="page">Uterine Fibroid Embolization</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <article className="lg:w-2/3">
            <section className="max-w-4xl mx-auto px-4 py-6 bg-white rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">What is Uterine Fibroid Embolization (UFE)?</h2>
              <p className="mb-4">Uterine Fibroid Embolization (UFE) is a minimally invasive procedure performed by an interventional radiologist. A small catheter is guided into the uterine arteries and tiny embolic particles are released to block blood flow to the fibroids. Without blood supply, fibroids shrink and symptoms improve — while preserving the uterus.</p>

              <h3 className="text-2xl font-semibold mt-6 mb-3">Who is a good candidate?</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Women with symptomatic uterine fibroids (heavy bleeding, pain, bulk symptoms)</li>
                <li>Patients who want to avoid open surgery</li>
                <li>Those who wish to preserve their uterus (discuss fertility goals with your doctor)</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">Benefits of UFE</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Minimally invasive — small puncture, not open surgery</li>
                <li>Short hospital stay (often same-day or overnight)</li>
                <li>Faster recovery (1–2 weeks typical)</li>
                <li>High symptom relief rates (85–90% reported)</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">Procedure overview</h3>
              <ol className="list-decimal pl-6 mb-4">
                <li>Pre-procedure imaging (ultrasound or MRI) and blood tests</li>
                <li>Procedure under local anaesthesia or sedation</li>
                <li>Catheter insertion via groin or wrist; embolic particles delivered</li>
                <li>Post-procedure observation and pain management</li>
                <li>Follow-up visits to assess symptoms and fibroid size</li>
              </ol>

              <h3 className="text-2xl font-semibold mt-6 mb-3">Risks &amp; side effects</h3>
              <p className="mb-4">Like any medical procedure, UFE has risks. Common side effects include pelvic pain, cramping, fever, and nausea in the first few days. Rare risks include infection, non-target embolization, or changes affecting fertility. Discuss individual risks with the treating physician.</p>

              <section className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                <h4 className="text-xl font-semibold mb-2">Cost (approx.)</h4>
                <p>Typical cost in Pakistan: <strong>PKR 200,000 — PKR 350,000</strong>. Costs vary by hospital and city (Karachi &amp; Lahore may be higher). Contact the clinic for an exact quote and packages.</p>
              </section>

              <h3 className="text-2xl font-semibold mt-8 mb-3">Locations &amp; availability</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Karachi:</strong> OMI Hospital, Saddar — Mon &amp; Thu (clinic days)</li>
                <li><strong>Lahore:</strong> Ihsan Mumtaz Hospital, Jauhar Town — Monthly visits</li>
                <li><strong>Hyderabad:</strong> Isra Hospital Cath Lab — Fri 12–2 PM</li>
                <li><strong>Rahim Yar Khan:</strong> DIRC Center — Sat 12–5 PM</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-3">UFE vs Surgery (quick comparison)</h3>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b py-2">Feature</th>
                    <th className="border-b py-2">UFE</th>
                    <th className="border-b py-2">Myomectomy / Hysterectomy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 border-b">Invasiveness</td>
                    <td className="py-2 border-b">Minimally invasive</td>
                    <td className="py-2 border-b">Open or laparoscopic surgery</td>
                  </tr>
                  <tr>
                    <td className="py-2 border-b">Hospital stay</td>
                    <td className="py-2 border-b">Same-day to overnight</td>
                    <td className="py-2 border-b">1–5 days</td>
                  </tr>
                  <tr>
                    <td className="py-2 border-b">Recovery</td>
                    <td className="py-2 border-b">1–2 weeks</td>
                    <td className="py-2 border-b">4–8 weeks</td>
                  </tr>
                </tbody>
              </table>

            </section>

            {/* Patient resources */}
            <section className="max-w-4xl mx-auto px-4 py-6 mt-8">
              <h3 className="text-2xl font-semibold mb-3">Before your appointment</h3>
              <ol className="list-decimal pl-6 mb-4">
                <li>Bring previous imaging (ultrasound/MRI) and medical records</li>
                <li>Prepare a list of medications and allergies</li>
                <li>Arrange transport for the day of procedure (you may be drowsy)</li>
              </ol>

              <h3 className="text-2xl font-semibold mb-3">Aftercare tips</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Expect cramping for several days — use prescribed analgesics</li>
                <li>Stay hydrated and rest for the first 48 hours</li>
                <li>Report fever 38°C or persistent heavy bleeding to the clinic</li>
              </ul>
            </section>

            <section id="faq" className="max-w-4xl mx-auto px-4 py-6 mt-8 bg-white rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="p-4 border rounded">
                  <summary className="font-semibold cursor-pointer">Is UFE painful?</summary>
                  <p className="mt-2">The procedure itself is usually not painful due to anaesthesia. Post-procedure cramping is common and managed with medication.</p>
                </details>
                <details className="p-4 border rounded">
                  <summary className="font-semibold cursor-pointer">How soon will I see improvement?</summary>
                  <p className="mt-2">Many patients see symptom improvement within 1–3 months. Fibroid shrinkage continues up to 6 months or more.</p>
                </details>
                <details className="p-4 border rounded">
                  <summary className="font-semibold cursor-pointer">Can I get pregnant after UFE?</summary>
                  <p className="mt-2">Fertility outcomes vary. Discuss with your doctor if you are planning pregnancy; alternatives like myomectomy may be considered.</p>
                </details>
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-6 space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg shadow-xl p-6">
                <h3 className="text-xl font-bold mb-2">Schedule a Consultation</h3>
                <p className="mb-4">Call: <a href="tel:+923367889143" className="underline">+92 336-7889143</a></p>
                <a href="https://dryousufmemon.pk/contact" className="inline-block bg-white text-blue-800 font-semibold py-3 px-4 rounded-lg hover:bg-blue-100 transition">Book an Appointment</a>
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <h4 className="font-semibold mb-2">Quick facts</h4>
                <ul className="list-disc pl-6 text-sm text-gray-700">
                  <li>Minimally invasive</li>
                  <li>Short recovery</li>
                  <li>Uterus-preserving</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <h4 className="font-semibold mb-2">Patient testimonials</h4>
                <p className="text-sm text-gray-700">"I had UFE with Dr. Memon and was back to work in 10 days — significant relief!" — A.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Dr. Yousuf Memon — Interventional Radiology. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default UterineFibroidEmbolization;
