'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaClinicMedical, FaHeartbeat, FaProcedures, FaPhone, FaCalendarAlt } from 'react-icons/fa';

const HomePage = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const services = [
    {
      title: "Uterine Fibroid Embolization",
      description: "A minimally invasive procedure used to treat fibroids by blocking their blood supply.",
      icon: <FaProcedures className="text-blue-600 text-xl" />
    },
    {
      title: "Liver Cancer Due to Liver Cirrhosis", 
      description: "Advanced treatments for liver cancer developing from cirrhotic conditions.",
      icon: <FaHeartbeat className="text-blue-600 text-xl" />
    },
    {
      title: "Hemorrhoid (Piles) Embolization",
      description: "Non-surgical treatment for hemorrhoids by blocking their blood vessels.",
      icon: <FaProcedures className="text-blue-600 text-xl" />
    },
    {
      title: "Embolization for Bleeding",
      description: "Controls bleeding from various sources through vessel occlusion.",
      icon: <FaHeartbeat className="text-blue-600 text-xl" />
    },
    {
      title: "Embolization of Brain Tumors",
      description: "Pre-surgical procedure to reduce tumor blood flow and size.",
      icon: <FaProcedures className="text-blue-600 text-xl" />
    },
    {
      title: "Diabetic Foot Angioplasty",
      description: "Restores blood flow in lower limbs affected by diabetic complications.",
      icon: <FaHeartbeat className="text-blue-600 text-xl" />
    }
  ];

  const treatments = [
    {
      title: "Ozone Treatment for Disc Herniation",
      description: "Non-surgical relief for herniated discs using medical ozone therapy.",
      image: "/images/oz11.png"
    },
    {
      title: "Ozone Joint Treatment",
      description: "Effective therapy for knee, shoulder, and back pain using ozone injections.",
      image: "/images/oz2.png"
    },
    {
      title: "Ozone for Dry Eyes & Wrinkles",
      description: "Innovative cosmetic and therapeutic applications of ozone medicine.",
      image: "/images/oz3.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="block">Good Health Is</span>
              <span className="block">The Root Of All</span>
              <span className="block text-blue-200">Happiness</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="bg-white/20 backdrop-blur-sm p-6 rounded-lg inline-block"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Endovascular Surgical &</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-blue-200">Interventional Radiology Specialist</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a 
                href="#appointment" 
                className="bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg flex items-center transition"
              >
                <FaCalendarAlt className="mr-2" /> Book Appointment
              </a>
              <a 
                href="tel:+923367889143" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center transition"
              >
                <FaPhone className="mr-2" /> Emergency Call
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm shadow-2xl">
                <img 
                  src="/images/doctor1.png" 
                  alt="Interventional Radiology Specialist"
                  className="w-full h-auto rounded-lg border-4 border-white/30"
                />
              </div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -right-6 bg-blue-600 p-4 rounded-lg shadow-lg"
              >
                <div className="text-white font-bold text-xl">20+ Years</div>
                <div className="text-blue-100">of Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Healthcare Solutions */}
      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Health Care Solutions</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive interventional radiology services for advanced patient care
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                  Learn more
                  <FaArrowRight className="ml-2" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Treatments */}
      <section className="py-20 bg-blue-50" id="treatments">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Latest Treatments</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge medical therapies for improved patient outcomes
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {treatments.map((treatment, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={treatment.image} 
                    alt={treatment.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{treatment.title}</h3>
                  <p className="text-gray-600 mb-4">{treatment.description}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pain Management Section */}
      <section className="py-20 bg-white" id="pain-management">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Pain Management</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-xl p-8 md:p-12 max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="bg-blue-100 p-6 rounded-full">
                  <FaClinicMedical className="text-blue-600 text-5xl" />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Alpha Blocks</h3>
                <p className="text-gray-600 mb-4">
                  Specialized treatment for arm, forearm, and shoulder pain (brachialgia and cervicalgia) using advanced nerve block techniques.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Targeted pain relief</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Minimally invasive procedure</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Quick recovery time</span>
                  </li>
                </ul>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition">
                  Learn About Pain Solutions
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-16 bg-blue-700 text-white" id="appointment">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Consultation?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule an appointment with our specialist today for personalized care
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+923367889143" 
                className="bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg flex items-center transition"
              >
                <FaPhone className="mr-2" /> Call Now
              </a>
              <a 
                href="#contact" 
                className="bg-transparent border-2 border-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg flex items-center transition"
              >
                <FaCalendarAlt className="mr-2" /> Book Online
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;