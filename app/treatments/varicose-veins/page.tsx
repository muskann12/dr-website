// pages/treatments/varicose-veins.js
import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function VaricoseVeins() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>
          Varicose Veins Treatment in Pakistan | Minimally Invasive Laser
          Procedure | Dr Yousuf Memon
        </title>
        <meta
          name="description"
          content="Get advanced varicose veins treatment in Pakistan by Dr. Yousuf Memon. Minimally invasive, laser-based and painless procedures for effective vein care."
        />
        <meta
          name="keywords"
          content="Varicose veins treatment in Pakistan, laser varicose veins treatment, best doctor for varicose veins Karachi, minimally invasive vein procedure"
        />
      </Head>

      {/* Header Section */}
      <div className="relative bg-teal-900 text-white py-16 px-6 lg:px-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Varicose Veins Treatment in Pakistan
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Advanced, painless and minimally invasive treatment options available
          under the expertise of{" "}
          <span className="font-semibold">Dr. Yousuf Memon</span>.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold text-teal-900 mb-4">
            What Are Varicose Veins?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Varicose veins are swollen, twisted veins that usually appear on the
            legs. They occur due to weak or damaged vein walls and valves. If
            left untreated, they can cause pain, swelling, heaviness and even
            skin ulcers.
          </p>

          <h2 className="text-2xl font-bold text-teal-900 mb-4">
            Symptoms of Varicose Veins
          </h2>
          <ul className="list-disc pl-5 text-gray-700 mb-4">
            <li>Bulging, twisted veins visible on legs</li>
            <li>Heaviness or pain in legs</li>
            <li>Swelling, burning or throbbing</li>
            <li>Skin discoloration around ankles</li>
          </ul>

          <h2 className="text-2xl font-bold text-teal-900 mb-4">
            Treatment by Dr. Yousuf Memon
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dr. Yousuf Memon, an expert in minimally invasive vascular
            procedures, provides advanced laser treatment for varicose veins in
            Pakistan. This technique is safe, effective and does not require
            open surgery. Patients experience less pain, quick recovery and
            excellent cosmetic results.
          </p>

          <h2 className="text-2xl font-bold text-teal-900 mb-4">
            Benefits of Laser Varicose Veins Treatment
          </h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Minimally invasive & painless</li>
            <li>Quick recovery time</li>
            <li>No hospitalization required</li>
            <li>Safe & effective under expert care</li>
          </ul>
        </div>

        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/varicose-veins.jpg"
            alt="Varicose Veins Treatment in Pakistan"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-teal-800 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Book Your Varicose Veins Consultation Today
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Get rid of painful and unsightly varicose veins with the advanced
          treatment offered by{" "}
          <span className="font-semibold">Dr. Yousuf Memon</span> in Pakistan.
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
