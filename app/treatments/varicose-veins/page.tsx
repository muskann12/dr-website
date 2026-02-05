// pages/treatments/varicose-veins.js
import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function VaricoseVeins() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Varicose Veins Treatment in Pakistan</h1>
        <p className="text-gray-700 mb-6"><strong>Varicose Veins Treatment in Pakistan</strong> is a painless, minimally invasive laser procedure for varicose veins. Dr. Yousuf Memon provides expert treatment for fast, safe results nationwide.</p>
      </div>
      <Head>
        <title>
          Best Varicose Veins Treatment in Pakistan | Laser Procedure by Dr.
          Yousuf Memon
        </title>
        <meta
          name="description"
          content="Looking for the best varicose veins treatment in Pakistan? Dr. Yousuf Memon offers advanced, painless and minimally invasive laser varicose vein treatment in Karachi, Pakistan. Quick recovery, safe & effective results."
        />
        <meta
          name="keywords"
          content="Varicose veins treatment in Pakistan, best varicose veins doctor Karachi, laser varicose veins treatment Pakistan, minimally invasive vein treatment, Dr Yousuf Memon, vascular specialist Pakistan"
        />
        <meta name="author" content="Dr. Yousuf Memon" />
        <link
          rel="canonical"
          href="https://dryousufmemon.com/treatments/varicose-veins"
        />

        {/* Open Graph SEO */}
        <meta property="og:title" content="Best Varicose Veins Treatment in Pakistan | Laser Procedure by Dr. Yousuf Memon" />
        <meta
          property="og:description"
          content="Get expert laser varicose veins treatment in Pakistan by Dr. Yousuf Memon. Safe, painless, and minimally invasive procedures with fast recovery."
        />
        <meta
          property="og:image"
          content="https://dryousufmemon.com/images/varicose-veins.jpg"
        />
        <meta
          property="og:url"
          content="https://dryousufmemon.com/treatments/varicose-veins"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_PK" />

        {/* Twitter Card SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Varicose Veins Treatment in Pakistan | Laser by Dr. Yousuf Memon"
        />
        <meta
          name="twitter:description"
          content="Minimally invasive, laser-based varicose veins treatment in Karachi, Pakistan. Safe, quick & effective."
        />
        <meta
          name="twitter:image"
          content="https://dryousufmemon.com/images/varicose-veins.jpg"
        />

        {/* Structured Data (JSON-LD Schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              name: "Varicose Veins Treatment in Pakistan",
              description:
                "Dr. Yousuf Memon provides advanced laser varicose veins treatment in Pakistan. Minimally invasive and painless vein care.",
              url: "https://dryousufmemon.com/treatments/varicose-veins",
              mainEntity: {
                "@type": "MedicalCondition",
                name: "Varicose Veins",
                alternateName: "Chronic Venous Insufficiency",
                symptom: [
                  "Swollen twisted veins",
                  "Leg pain and heaviness",
                  "Skin discoloration"
                ],
                possibleTreatment: {
                  "@type": "MedicalTherapy",
                  name: "Endovenous Laser Treatment (EVLT)"
                }
              },
              author: {
                "@type": "Person",
                name: "Dr. Yousuf Memon",
                jobTitle: "Interventional Radiologist",
                url: "https://dryousufmemon.com"
              },
              publisher: {
                "@type": "Organization",
                name: "Dr. Yousuf Memon Clinic",
                logo: {
                  "@type": "ImageObject",
                  url: "https://dryousufmemon.com/images/logo.png"
                }
              }
            }),
          }}
        />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-teal-900 text-white py-16 px-6 lg:px-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Varicose Veins Treatment in Pakistan
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Experience the most advanced{" "}
          <strong>laser varicose veins treatment</strong> in Pakistan with{" "}
          <span className="font-semibold">Dr. Yousuf Memon</span> — a leading
          interventional radiologist offering safe, painless and effective vein
          solutions in Karachi.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-teal-900 mb-4">
            What Are Varicose Veins?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Varicose veins are enlarged, twisted veins that appear mostly on the
            legs and feet due to poor blood circulation. When the vein valves
            become weak or damaged, blood pools inside, causing visible swelling
            and discomfort. If not treated, varicose veins can lead to serious
            conditions like venous ulcers or blood clots.
          </p>

          <h3 className="text-2xl font-bold text-teal-900 mb-3">
            Common Symptoms
          </h3>
          <ul className="list-disc pl-5 text-gray-700 mb-6">
            <li>Swollen or bulging veins (blue or purple)</li>
            <li>Heaviness, throbbing, or cramping in legs</li>
            <li>Burning or itching sensation</li>
            <li>Skin darkening near ankles</li>
            <li>Restless legs or pain after standing</li>
          </ul>

          <h3 className="text-2xl font-bold text-teal-900 mb-3">
            Advanced Treatment by Dr. Yousuf Memon
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Dr. Yousuf Memon</strong> specializes in{" "}
            <em>Endovenous Laser Treatment (EVLT)</em> for varicose veins — a
            modern, minimally invasive method that seals the affected veins using
            laser energy. It’s a daycare procedure with no stitches, minimal
            discomfort, and a fast recovery period. Patients can return to
            normal activities the same day.
          </p>

          <h3 className="text-2xl font-bold text-teal-900 mb-3">
            Why Choose Laser Treatment?
          </h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Painless and minimally invasive</li>
            <li>Quick recovery — walk-in, walk-out procedure</li>
            <li>No general anesthesia required</li>
            <li>Excellent cosmetic results</li>
            <li>Performed by an experienced vascular expert</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/varicose-veins.jpg"
            alt="Laser Varicose Veins Treatment in Pakistan"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 pb-12">
        <h3 className="text-2xl font-bold text-teal-900 mb-4">
          Laser Varicose Veins Treatment Cost in Pakistan
        </h3>
        <p className="text-gray-700 mb-6">
          The cost of varicose veins laser treatment in Pakistan varies based on
          the condition’s severity and clinic location. At{" "}
          <strong>Dr. Yousuf Memon’s Clinic in Karachi</strong>, we ensure
          affordable and transparent pricing with world-class facilities and
          personalized care.
        </p>

        <h4 className="text-xl font-semibold text-teal-900 mb-3">
          Other Related Treatments:
        </h4>
        <ul className="list-disc pl-5 text-gray-700">
          <li>
            <a href="/treatments/hemorrhoids" className="text-teal-700 hover:underline">
              Hemorrhoid Embolization
            </a>
          </li>
          <li>
            <a href="/treatments/varicocele" className="text-teal-700 hover:underline">
              Varicocele Embolization
            </a>
          </li>
          <li>
            <a href="/treatments/uterine-fibroid-embolization" className="text-teal-700 hover:underline">
              Uterine Fibroid Embolization (UFE)
            </a>
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-teal-800 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Book Your Varicose Veins Consultation Today
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Take the first step toward healthy, pain-free legs with{" "}
          <span className="font-semibold">Dr. Yousuf Memon</span>’s advanced
          laser varicose veins treatment in Karachi, Pakistan.
        </p>
        <a
          href="/contact"
          className="bg-white text-teal-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Now
        </a>
      </div>
    </div>
  );
}

