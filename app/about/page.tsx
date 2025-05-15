
import Image from 'next/image';
import { FaAward, FaCheckCircle, FaClinicMedical, FaHospital, FaUserMd } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 relative z-10">
            About <span className="text-teal-600">Dr. Yousuf Memon</span>
          </h1>
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-blue-100/70 -z-0 transform translate-y-1"></div>
        </div>
        <p className="text-lg md:text-xl text-teal-600 font-medium max-w-3xl mx-auto mt-4">
          Consultant Interventional Radiologist & Vascular Specialist
        </p>
        <div className="mt-6 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Images */}
        <div className="space-y-8">
          <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Image
              src="/images/doctor1.png"
              alt="Dr. Yousuf Memon"
              width={700}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold">Dr. Muhammad Yousuf Memon</h3>
              <p className="text-blue-300 font-medium">Interventional Radiology Specialist</p>
              <div className="mt-3 flex items-center space-x-2">
                <span className="inline-block w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-blue-100 text-sm">20+ Years Experience</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-xl overflow-hidden shadow-md h-48">
              <Image
                src="/images/doc2.png"
                alt="Dr. Yousuf Memon at work"
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
                alt="Dr. Yousuf Memon teaching"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center">
                <FaClinicMedical className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Bio */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative">
              <span className="relative z-10">Who is Dr. Muhammad Yousuf Memon?</span>
              <span className="absolute bottom-0 left-0 h-2 w-24 bg-blue-100 z-0"></span>
            </h2>
            
            <p className="mb-4 text-gray-700 leading-relaxed">
              I am a Consultant in Interventional Radiology with extensive training and experience. 
              I earned my MBBS from Liaquat Medical College, Jamshoro. I pursued postgraduate 
              studies, obtaining a DMRD in Radiology from Sheikh Zayed Hospital, Lahore.
            </p>

            <p className="mb-4 text-gray-700 leading-relaxed">
              Furthering my expertise, I completed fellowships in Radiology (FRCR and EDIR) from 
              London and in Interventional Radiology (VIR) from Singapore General Hospital. 
              Additionally, I hold a European Diploma in Ischemic Stroke Intervention and have 
              completed a fellowship in Ozone Treatments and Pain Management in India.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-teal-600 mb-4 flex items-center">
              <FaHospital className="mr-2" />
              <span>Current Practice</span>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Currently, I practice as an Interventional Radiologist at various hospitals across 
              Karachi, Hyderabad, Lahore and Rahim Yar Khan. My focus is on treating numerous diseases 
              without the need for surgery, anesthesia, or long hospital stays. Most procedures 
              I perform are day-care, outpatient, and clinic-based, ensuring minimal disruption 
              to patients' lives.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaAward className="mr-2 text-blue-600" />
              <span>Certifications</span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">DMRD Lahore, FRCR London, EDIR Europe Radiology VIR Singapore</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Interventional Radiology, EDSI, EXMINT Diploma in Neuro Intervention Europe</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">European Diploma in Ischemic Stroke Intervention</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Fellowship in Ozone Treatments and Pain Management</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaUserMd className="mr-2 text-teal-600" />
              <span>Professional Experience</span>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Joined Various Clinics, Vascular & Oncology Centers as a Vascular Specialist and 
              Interventional Radiologist. He has worked and working as Interventional Radiologist 
              at Various Hospitals of Pakistan.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <p className="font-medium text-blue-700">Hospitals</p>
                <p className="text-sm text-gray-600">Multiple prestigious institutions</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <p className="font-medium text-blue-700">Specializations</p>
                <p className="text-sm text-gray-600">Vascular & Interventional Radiology</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
          <div className="text-4xl font-bold text-teal-600 mb-2">20+</div>
          <p className="text-gray-600 font-medium">Years Experience</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
          <div className="text-4xl font-bold text-teal-600 mb-2">5+</div>
          <p className="text-gray-600 font-medium">Fellowships</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
          <div className="text-4xl font-bold text-teal-600 mb-2">4</div>
          <p className="text-gray-600 font-medium">Hospitals</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
          <div className="text-4xl font-bold text-teal-600 mb-2">5000+</div>
          <p className="text-gray-600 font-medium">Procedures</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;