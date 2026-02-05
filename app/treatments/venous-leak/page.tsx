import React from 'react';
import Head from 'next/head';

const VenousLeakEmbolization = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">Venous Leak Embolization in Pakistan</h1>
      <p className="text-gray-700 mb-6"><strong>Venous Leak Embolization in Pakistan</strong> is a minimally invasive procedure for erectile dysfunction due to venous leak. Dr. Yousuf Memon provides expert embolization for improved outcomes nationwide.</p>
    </div>
  );
  // ...existing code...
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is venous leak treatable without open surgery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Venous leak can often be treated with minimally invasive embolization procedures that seal leaking veins without open surgery."
        }
      },
      {
        "@type": "Question",
        "name": "How long is recovery after venous leak embolization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most patients return to normal activities within a few days. Full functional improvement continues over several weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Will treatment affect fertility or hormones?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Venous leak embolization targets penile venous leaks and does not affect hormones. Discuss fertility or sexual planning with your specialist."
        }
      }
    ]
  };

  const medicalProcedure = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Venous Leak Embolization",
    alternateName: "Penile venous leak embolization",
    procedureType: "Minimally Invasive",
    medicalSpecialty: "Interventional Radiology",
    howPerformed: "Access via a small puncture; catheters are guided to leaking penile veins and coils/plugs/embolic agents are deployed to reduce venous outflow.",
    preparation: "Pre-procedure imaging (penile Doppler, cavernosography), routine blood tests, and clinical assessment.",
    followup: "Follow-up visits at 1 week and 1–3 months to assess outcomes and healing.",
    outcome: "Improved erectile firmness and duration in carefully selected patients.",
    performer: { "@type": "Physician", name: "Dr. Yousuf Memon", medicalSpecialty: "Interventional Radiology" },
    url: "https://dryousufmemon.com/treatments/venous-leak-embolization"
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dryousufmemon.com/" },
      { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://dryousufmemon.com/treatments" },
      { "@type": "ListItem", "position": 3, "name": "Venous Leak Embolization", "item": "https://dryousufmemon.com/treatments/venous-leak-embolization" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Venous Leak Embolization in Pakistan | Erectile Dysfunction Treatment — Dr Yousuf Memon</title>
        <meta name="description" content="Advanced venous leak embolization in Karachi & across Pakistan by Dr. Yousuf Memon. Minimally invasive, high success rates, confidential care for erectile dysfunction." />
        <meta name="keywords" content="venous leak treatment Pakistan, venous leak embolization Karachi, erectile dysfunction embolization, Dr Yousuf Memon, ED treatment Pakistan" />
        <link rel="canonical" href="https://yourdomain.com/treatments/venous-leak-embolization" />

        {/* Open Graph */}
        <meta property="og:title" content="Venous Leak Embolization in Pakistan | Dr Yousuf Memon" />
        <meta property="og:description" content="Confidential, minimally invasive venous leak treatment in Karachi. Quick recovery and proven outcomes for erectile dysfunction." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourdomain.com/treatments/venous-leak-embolization" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedure) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      </Head>

      {/* Hero */}
      <header className="bg-gradient-to-r from-teal-800 to-teal-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Venous Leak Embolization — Advanced ED Treatment in Pakistan</h1>
          <p className="max-w-3xl mx-auto text-lg mb-6">Minimally invasive, confidential care by Dr. Yousuf Memon. Available in Karachi, Lahore, Hyderabad &amp; Rahim Yar Khan.</p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-white text-teal-800 px-6 py-3 rounded-lg font-semibold shadow">Book Consultation</a>
            <a href="tel:+923367889143" className="bg-yellow-400 text-teal-900 px-6 py-3 rounded-lg font-semibold shadow">Call +92 336-7889143</a>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className="container mx-auto px-6 py-4 text-sm text-gray-600">
        <ol className="flex items-center space-x-2">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li>/</li>
          <li><a href="/treatments" className="hover:underline">Treatments</a></li>
          <li>/</li>
          <li className="text-teal-700">Venous Leak Embolization</li>
        </ol>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <article className="lg:w-2/3">
            <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Venous Leak and How We Treat It</h2>
              <p className="text-gray-700 mb-4">Venous leak is a vascular cause of erectile dysfunction where veins fail to retain blood within the penis during erection. At our clinic, we diagnose with penile Doppler, cavernosography, and angiography, and treat suitable patients with targeted venous leak embolization.</p>

              <h3 className="text-2xl font-semibold mt-6 mb-3">Who is a good candidate?</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Men with venous leak confirmed on imaging</li>
                <li>Those who have not responded to medical therapy</li>
                <li>Patients seeking a minimally invasive option instead of open surgery</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-3">Procedure Overview</h3>
              <ol className="list-decimal pl-6 text-gray-700 mb-4">
                <li>Pre-procedure assessment & imaging (penile Doppler, cavernosography)</li>
                <li>Procedure under local anesthesia with sedation</li>
                <li>Access through a small puncture; selective embolization of leaking veins using coils/plugs/particles</li>
                <li>Observation and pain control; discharge same day or overnight as needed</li>
                <li>Follow-up visits at 1 week and 1–3 months</li>
              </ol>

              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600 mb-6">
                <strong>Expected outcome:</strong> Many patients report significant improvement in erectile firmness and duration within weeks; full benefit can take up to 3 months.
              </div>

              <h3 className="text-2xl font-semibold mt-6 mb-3">Risks &amp; Considerations</h3>
              <p className="text-gray-700 mb-4">As with any procedure, risks include pain, infection, non-target embolization, and rare vascular complications. Proper patient selection and high-quality imaging reduce risks. Discuss individual concerns during consultation.</p>

              <h3 className="text-2xl font-semibold mt-6 mb-3">Cost &amp; Insurance</h3>
              <p className="text-gray-700 mb-4">Typical costs in Pakistan range depending on facility and implant devices used. Contact our clinic for an accurate estimate and available packages. We provide confidential billing and can advise about payment plans.</p>

              <h3 className="text-2xl font-semibold mt-6 mb-3">Locations</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li><strong>Karachi:</strong> Main clinic & cath-lab</li>
                <li><strong>Lahore:</strong> Visiting consultant (monthly)</li>
                <li><strong>Hyderabad &amp; Rahim Yar Khan:</strong> Coordinated referral & procedure days</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-3">Comparison: Embolization vs Surgical Options</h3>
              <table className="w-full text-left border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="border-b py-2">Feature</th>
                    <th className="border-b py-2">Embolization</th>
                    <th className="border-b py-2">Surgery</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 border-b">Invasiveness</td>
                    <td className="py-2 border-b">Minimally invasive</td>
                    <td className="py-2 border-b">Open or microsurgical</td>
                  </tr>
                  <tr>
                    <td className="py-2 border-b">Recovery</td>
                    <td className="py-2 border-b">Days to 1 week</td>
                    <td className="py-2 border-b">Weeks</td>
                  </tr>
                  <tr>
                    <td className="py-2 border-b">Effect on sexual function</td>
                    <td className="py-2 border-b">High improvement in selected patients</td>
                    <td className="py-2 border-b">Variable, depends on technique</td>
                  </tr>
                </tbody>
              </table>

            </section>

            {/* Testimonials & Trust */}
            <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="text-2xl font-bold mb-4">Patient Stories & Testimonials</h3>
              <blockquote className="border-l-4 border-teal-600 pl-4 italic text-gray-700">"I had venous leak embolization with Dr. Memon and noticed a clear improvement within 3 weeks. The team was discreet and professional." — R., Karachi</blockquote>
              <p className="text-sm text-gray-500 mt-3">(Testimonials are real patient experiences; individual results may vary.)</p>
            </section>

            {/* FAQ visible */}
            <section className="bg-white p-6 rounded-lg shadow-sm" id="faq">
              <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
              <details className="mb-3 p-4 border rounded"><summary className="font-semibold">Is embolization painful?</summary><p className="mt-2 text-gray-700">Local anaesthesia and sedation minimize pain. Mild discomfort and cramping are expected after the procedure.</p></details>
              <details className="mb-3 p-4 border rounded"><summary className="font-semibold">How soon will I see results?</summary><p className="mt-2 text-gray-700">Most patients notice improvement within 2–6 weeks; full benefits can continue to develop over 3 months.</p></details>
              <details className="mb-3 p-4 border rounded"><summary className="font-semibold">Is the treatment confidential?</summary><p className="mt-2 text-gray-700">Yes. All consultations and procedures are conducted with strict privacy and confidentiality.</p></details>
            </section>

          </article>

          {/* Sidebar CTA */}
          <aside className="lg:w-1/3 space-y-6">
            <div className="sticky top-6 bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-bold mb-2">Book a Confidential Consultation</h4>
              <p className="text-gray-700 mb-4">Quick assessment & tailored treatment plans. Discreet appointments available.</p>
              <a href="/contact" className="block bg-teal-700 text-white text-center py-3 rounded-lg font-semibold mb-3">Book Online</a>
              <a href="tel:+923367889143" className="block bg-yellow-400 text-teal-900 text-center py-3 rounded-lg font-semibold">Call +92 336-7889143</a>
              <p className="text-xs text-gray-500 mt-3">We respect your privacy. All communications are confidential.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow text-sm">
              <h5 className="font-semibold mb-2">Quick Facts</h5>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Minimally invasive embolization option</li>
                <li>High success in well-selected patients</li>
                <li>Available in Karachi and select cities</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow text-sm">
              <h5 className="font-semibold mb-2">Prepare for Your Visit</h5>
              <ol className="list-decimal pl-5 text-gray-700">
                <li>Bring previous imaging and medical history</li>
                <li>Arrange companion/transport for procedure day</li>
                <li>Follow pre-procedure fasting if instructed</li>
              </ol>
            </div>
          </aside>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Dr. Yousuf Memon — Interventional Radiology. Confidential patient care in Pakistan.</p>
        </div>
      </footer>
    </div>
  );
};

export default VenousLeakEmbolization;

