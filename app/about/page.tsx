// /app/about/page.tsx

import Image from "next/image";
import {
  FaAward,
  FaCheckCircle,
  FaClinicMedical,
  FaHospital,
  FaUserMd,
} from "react-icons/fa";
import type { Metadata } from "next";

// 🟢 SEO Metadata
export const metadata: Metadata = {
  title: "About Dr. Muhammad Yousuf Memon | Interventional Radiologist Pakistan",
  description:
    "Learn more about Dr. Muhammad Yousuf Memon – Consultant Interventional Radiologist & Vascular Specialist with 20+ years of experience in minimally invasive, non-surgical treatments across Pakistan.",
  keywords: [
    "Dr Yousuf Memon",
    "Interventional Radiologist Pakistan",
    "Vascular Specialist Karachi",
    "Best Radiologist in Pakistan",
    "Ozone Therapy Specialist",
    "Stroke Intervention Pakistan",
  ],
  openGraph: {
    title:
      "About Dr. Muhammad Yousuf Memon | Interventional Radiologist & Vascular Specialist",
    description:
      "Consultant Interventional Radiologist & Vascular Specialist with 20+ years of experience. Practicing in Karachi, Hyderabad, Lahore & Rahim Yar Khan.",
    url: "https://www.dryousufmemon.pk/about", // <-- apna live URL dalna
    siteName: "",
    images: [
      {
        url: "https://dryousuf.pk/images/doctor1.png", // <-- apni hosted image ka link dalna
        width: 1200,
        height: 630,
        alt: "Dr. Muhammad Yousuf Memon Interventional Radiologist",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Dr. Muhammad Yousuf Memon | Interventional Radiologist Pakistan",
    description:
      "Discover the profile of Dr. Yousuf Memon, specialist in Interventional Radiology, Stroke Intervention, and Ozone Therapy.",
    images: ["https://yourwebsite.com/images/doctor1.png"],
  },
};

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      {/* 🟢 Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 relative inline-block">
          About <span className="text-teal-600">Dr. Yousuf Memon</span>
          <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-100 -z-10 translate-y-3 rounded-lg"></span>
        </h1>
        <p className="text-lg md:text-xl text-teal-700 font-medium mt-4 max-w-3xl mx-auto">
          Consultant Interventional Radiologist & Vascular Specialist with 20+
          years of expertise in non-surgical, minimally invasive procedures.
        </p>
        <div className="mt-6 flex justify-center">
          <span className="w-32 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></span>
        </div>
      </header>

      {/* 🟢 Main Grid */}
      <section className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Doctor Images */}
        <div className="space-y-8">
          <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
            <Image
              src="/images/doctor1.png"
              alt="Dr. Muhammad Yousuf Memon – Interventional Radiologist"
              width={700}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold">
                Dr. Muhammad Yousuf Memon
              </h3>
              <p className="text-blue-300 font-medium">
                Interventional Radiology Specialist
              </p>
              <div className="mt-3 flex items-center space-x-2">
                <span className="inline-block w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-blue-100 text-sm">20+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Doctor Achievements + Icons */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-xl overflow-hidden shadow-md h-48">
              <Image
                src="/images/doc2.png"
                alt="Interventional Radiology in action"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center">
                <FaUserMd className="text-white text-3xl" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl shadow-md flex flex-col items-center justify-center p-4 text-center text-white">
              <FaAward className="text-3xl mb-2 text-yellow-300" />
              <p className="font-bold">Fellowship Trained</p>
              <p className="text-sm opacity-90">London & Singapore</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl shadow-md flex flex-col items-center justify-center p-4 text-center text-white">
              <FaHospital className="text-3xl mb-2" />
              <p className="font-bold">Practicing in</p>
              <p className="text-sm opacity-90">Multiple Hospitals</p>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-md h-48">
              <Image
                src="/images/doc2.jpg"
                alt="Medical teaching session"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center">
                <FaClinicMedical className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Doctor Bio */}
        <div className="space-y-8">
          {/* Bio Card */}
          <article className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative">
              Who is{" "}
              <span className="text-teal-600">Dr. Muhammad Yousuf Memon?</span>
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Dr. Yousuf Memon is a highly trained Consultant in Interventional
              Radiology. He completed his <strong>MBBS</strong> from{" "}
              <em>Liaquat Medical College, Jamshoro</em>, followed by{" "}
              <strong>DMRD</strong> in Radiology from Sheikh Zayed Hospital,
              Lahore.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              He further advanced his expertise with fellowships in Radiology (
              <strong>FRCR & EDIR</strong>) from London, and Interventional
              Radiology (<strong>VIR</strong>) from Singapore General Hospital.
              His qualifications also include{" "}
              <strong>
                European Diploma in Ischemic Stroke Intervention, EXMINT
                Neuro-Intervention
              </strong>{" "}
              and a fellowship in Ozone Therapy & Pain Management.
            </p>
          </article>

          {/* Current Practice */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-teal-700 mb-4 flex items-center">
              <FaHospital className="mr-2" /> Current Practice
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dr. Memon practices in major cities including Karachi, Hyderabad,
              Lahore, Peshawar and Rahim Yar Khan. He specializes in{" "}
              <strong>non-surgical treatments</strong> that avoid anesthesia,
              long hospital stays, and invasive surgery. Most procedures are{" "}
              <strong>day-care & outpatient</strong>, ensuring patient comfort
              and faster recovery.
            </p>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaAward className="mr-2 text-blue-600" /> Certifications
            </h3>
            <ul className="space-y-3">
              {[
                "DMRD Lahore, FRCR London, EDIR Europe, VIR Singapore",
                "Interventional Radiology, EDSI, EXMINT Neuro-Intervention (Europe)",
                "European Diploma in Ischemic Stroke Intervention",
                "Fellowship in Ozone Treatments and Pain Management",
              ].map((cert, i) => (
                <li key={i} className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaUserMd className="mr-2 text-teal-600" /> Professional Experience
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dr. Memon has served at various leading{" "}
              <strong>vascular & oncology centers</strong> across Pakistan as a
              Consultant Interventional Radiologist. His career highlights
              include thousands of successful procedures in vascular, cancer,
              and pain management cases.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <p className="font-medium text-blue-700">Hospitals</p>
                <p className="text-sm text-gray-600">Prestigious institutions</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <p className="font-medium text-blue-700">Specializations</p>
                <p className="text-sm text-gray-600">
                  Vascular & Interventional Radiology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 Stats Section */}
      <section className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { value: "20+", label: "Years Experience" },
          { value: "5+", label: "International Fellowships" },
          { value: "4", label: "Major Hospitals" },
          { value: "5000+", label: "Successful Procedures" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition"
          >
            <div className="text-4xl font-bold text-teal-600 mb-2">
              {stat.value}
            </div>
            <p className="text-gray-600 font-medium">{stat.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AboutPage;
