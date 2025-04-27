'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaAward, FaCheckCircle } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-16 mt-11">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
        >
          About <span className="text-blue-600">Dr. Yousuf Memon</span>
        </motion.h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Consultant Interventional Radiologist & Vascular Specialist
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Images */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/doctor1.png"
              alt="Dr. Yousuf Memon"
              width={600}
              height={400}
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-white text-xl font-semibold">Dr. Muhammad Yousuf Memon</h3>
              <p className="text-blue-200">Interventional Radiology Specialist</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/doc2.png"
              alt="Dr. Yousuf Memon at work"
              width={600}
              height={400}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-blue-900/20 flex items-center justify-center">
              <div className="bg-white/90 p-4 rounded-lg text-center">
                <FaAward className="text-blue-600 text-3xl mx-auto mb-2" />
                <p className="font-semibold text-gray-800">20+ Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Bio */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg max-w-none"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Who is Dr. Muhammad Yousuf Memon?
          </h2>
          
          <p className="mb-4">
            I am a Consultant in Interventional Radiology with extensive training and experience. 
            I earned my MBBS from Liaquat Medical College, Jamshoro. I pursued postgraduate 
            studies, obtaining a DMRD in Radiology from Sheikh Zayed Hospital, Lahore.
          </p>

          <p className="mb-4">
            Furthering my expertise, I completed fellowships in Radiology (FRCR and EDIR) from 
            London and in Interventional Radiology (VIR) from Singapore General Hospital. 
            Additionally, I hold a European Diploma in Ischemic Stroke Intervention and have 
            completed a fellowship in Ozone Treatments and Pain Management in India.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Current Practice</h3>
            <p>
              Currently, I practice as an Interventional Radiologist at various hospitals across 
              Karachi, Hyderabad, and Rahim Yar Khan. My focus is on treating numerous diseases 
              without the need for surgery, anesthesia, or long hospital stays. Most procedures 
              I perform are day-care, outpatient, and clinic-based, ensuring minimal disruption 
              to patients' lives.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Certifications</h3>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span>DMRD Lahore, FRCR London, EDIR Europe Radiology VIR Singapore</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span>Interventional Radiology, EDSI, EXMINT Diploma in Neuro Intervention Europe</span>
            </li>
          </ul>

          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Professional Experience</h3>
            <p>
              Joined Various Clinics, Vascular & Oncology Centers as a Vascular Specialist and 
              Interventional Radiologist. He has worked and working as Interventional Radiologist 
              at Various Hospitals of Pakistan.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;