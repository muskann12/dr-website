'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { FaAward, FaCheckCircle, FaClinicMedical, FaHospital, FaUserMd } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <>
      <Head>
         <title>About Dr. Yousuf Memon | Interventional Radiologist</title>
        <meta name="description" content="Learn about Dr. Yousuf Memon, a leading interventional radiologist in Pakistan, specializing in advanced, minimally invasive medical treatments." />
       <meta name="keywords" content="interventional radiologist Karachi, Dr. Yousuf Memon, vascular specialist Pakistan, fibroid treatment expert, varicose veins doctor Karachi" />
        <meta property="og:title" content="About Dr. Yousuf Memon | Top Interventional Radiologist in Pakistan" />
        <meta property="og:description" content="MBBS, FRCR London certified specialist in non-surgical treatments with 20+ years experience practicing in Karachi hospitals." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.dryousufmemon.com/about" />
        <meta property="og:image" content="https://www.dryousufmemon.com/images/doctor-social.jpg" />
        <link rel="canonical" href="https://www.dryousufmemon.com/about" />
      </Head>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Dr. Yousuf Memon - Interventional Radiology Clinic",
          "image": "https://www.dryousufmemon.com/images/doctor1.png",
          "@id": "https://www.dryousufmemon.com",
          "url": "https://www.dryousufmemon.com/about",
          "telephone": "+923367889143",
          "priceRange": "$$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Medical Street",
            "addressLocality": "Karachi",
            "postalCode": "75500",
            "addressCountry": "PK"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Interventional Radiology Services",
            "itemListElement": [
              {
                "@type": "OfferCatalog",
                "name": "Fibroid Treatments",
                "itemListElement": {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Uterine Fibroid Embolization"
                  }
                }
              },
              {
                "@type": "OfferCatalog",
                "name": "Vascular Treatments",
                "itemListElement": {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Varicose Vein Treatment"
                  }
                }
              }
            ]
          }
        })}
      </script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section - Optimized with H1 and location keywords */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 relative z-10">
              About <span className="text-teal-600">Dr. Yousuf Memon</span>
            </h1>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-blue-100/70 -z-0 transform translate-y-1"></div>
          </div>
          <p className="text-lg md:text-xl text-teal-600 font-medium max-w-3xl mx-auto mt-4">
            Consultant Interventional Radiologist & Vascular Specialist in Karachi, Pakistan
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Images with optimized alt tags */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src="/images/doctor1.png"
                alt="Dr. Yousuf Memon - Interventional Radiologist in Karachi"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                <h2 className="text-white text-2xl font-bold">Dr. Muhammad Yousuf Memon</h2>
                <p className="text-blue-300 font-medium">Interventional Radiology Specialist in Karachi</p>
                <div className="mt-3 flex items-center space-x-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-blue-100 text-sm">20+ Years Experience in Pakistan</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative rounded-xl overflow-hidden shadow-md h-48">
                <Image
                  src="/images/doc2.png"
                  alt="Dr. Yousuf Memon performing vascular procedure in Karachi hospital"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center">
                  <FaUserMd className="text-white text-2xl" />
                </div>
              </div>
              <div className="bg-blue-600 rounded-xl shadow-md flex flex-col items-center justify-center p-4 text-center text-white">
                <FaAward className="text-3xl mb-2 text-yellow-300" />
                <p className="font-bold">Fellowship Trained</p>
                <p className="text-sm opacity-90">London & Singapore</p>
              </div>
              <div className="bg-blue-600 rounded-xl shadow-md flex flex-col items-center justify-center p-4 text-center text-white">
                <FaHospital className="text-3xl mb-2" />
                <p className="font-bold">Multiple Hospitals</p>
                <p className="text-sm opacity-90">Across Pakistan</p>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-md h-48">
                <Image
                  src="/images/doc2.jpg"
                  alt="Dr. Yousuf Memon teaching interventional radiology techniques"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center">
                  <FaClinicMedical className="text-white text-2xl" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Bio with semantic HTML and rich snippets */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <article className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative">
                <span className="relative z-10">About Dr. Muhammad Yousuf Memon</span>
                <span className="absolute bottom-0 left-0 h-2 w-24 bg-blue-100 z-0"></span>
              </h2>
              
              <p className="mb-4 text-gray-700 leading-relaxed">
                Dr. Yousuf Memon is a <strong>Consultant Interventional Radiologist in Karachi</strong> with extensive training and 20+ years of clinical experience. He specializes in <strong>minimally invasive treatments for fibroids, varicose veins, and vascular conditions</strong> without requiring traditional surgery.
              </p>

              <p className="mb-4 text-gray-700 leading-relaxed">
                After earning his <strong>MBBS from Liaquat Medical College, Jamshoro</strong>, he completed advanced training including:
              </p>

              <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
                <li><strong>DMRD in Radiology</strong> from Sheikh Zayed Hospital, Lahore</li>
                <li><strong>FRCR and EDIR</strong> fellowships from London</li>
                <li><strong>Interventional Radiology (VIR)</strong> fellowship at Singapore General Hospital</li>
                <li><strong>European Diploma in Ischemic Stroke Intervention</strong></li>
                <li><strong>Ozone Treatments and Pain Management</strong> fellowship in India</li>
              </ul>
            </article>

            <section className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-teal-600 mb-4 flex items-center">
                <FaHospital className="mr-2" />
                <span>Current Practice in Pakistan</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Currently practicing at <strong>leading hospitals across Karachi, Hyderabad, Lahore and Rahim Yar Khan</strong>, Dr. Memon focuses on:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                <li>Non-surgical treatments requiring <strong>no anesthesia</strong></li>
                <li><strong>Same-day procedures</strong> with minimal recovery time</li>
                <li>Clinic-based treatments for <strong>fibroids, varicose veins, and vascular conditions</strong></li>
                <li><strong>90% success rate</strong> for most interventions</li>
              </ul>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaAward className="mr-2 text-blue-600" />
                <span>Certifications & Specializations</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700"><strong>DMRD Lahore, FRCR London, EDIR Europe</strong> - Radiology certifications</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700"><strong>VIR Singapore</strong> - Vascular and Interventional Radiology</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700"><strong>EDSI, EXMINT Diploma</strong> - Neuro Intervention Europe</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Ozone Therapy Certification</strong> - Pain Management</span>
                </li>
              </ul>
            </section>

            <section className="bg-gray-50 rounded-2xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaUserMd className="mr-2 text-teal-600" />
                <span>Professional Experience in Pakistan</span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                With over two decades of experience, Dr. Memon has served at <strong>multiple prestigious hospitals and vascular centers across Pakistan</strong>, bringing world-class interventional radiology techniques to Pakistani patients.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <p className="font-medium text-blue-700">Hospital Affiliations</p>
                  <p className="text-sm text-gray-600">Aga Khan, Liaquat National, South City</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <p className="font-medium text-blue-700">Specializations</p>
                  <p className="text-sm text-gray-600">Vascular & Interventional Radiology</p>
                </div>
              </div>
            </section>
          </motion.div>
        </div>

        {/* Stats Section with Schema.org markup */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          itemScope
          itemType="https://schema.org/Physician"
        >
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center" itemProp="yearsOfExperience" itemScope itemType="https://schema.org/QuantitativeValue">
            <div className="text-4xl font-bold text-teal-600 mb-2" itemProp="value">20+</div>
            <p className="text-gray-600 font-medium" itemProp="unitText">Years Experience</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">5+</div>
            <p className="text-gray-600 font-medium">Fellowships</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">4</div>
            <p className="text-gray-600 font-medium">Hospitals</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center" itemProp="numberOfPatients" itemScope itemType="https://schema.org/QuantitativeValue">
            <div className="text-4xl font-bold text-teal-600 mb-2" itemProp="value">5000+</div>
            <p className="text-gray-600 font-medium" itemProp="unitText">Procedures</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutPage;
