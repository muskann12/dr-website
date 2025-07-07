
import { FaArrowRight, FaClinicMedical, FaHeartbeat, FaProcedures, FaPhone, FaCalendarAlt, FaUserMd, FaHospital, FaMicroscope, FaStethoscope, FaMedal, FaAward, FaRegHospital } from 'react-icons/fa';
import Link from 'next/link';

const HomePage = () => {
  const services = [
    {
      title: "Fibroid Treatment",
      description: "Minimally invasive Uterine Fibroid Embolization (UFE) with 90% success rate and quick recovery.",
      icon: <FaProcedures className="text-teal-500 text-2xl" />,
      link: "/services/uterine-fibroid-embolization"
    },
    {
      title: "Varicose Vein Treatment", 
      description: "Advanced endovenous treatments for painful varicose veins with minimal downtime.",
      icon: <FaHeartbeat className="text-teal-500 text-2xl" />,
      link: "/services/varicose-vein-treatment"
    },
    {
      title: "Varicocele Treatment",
      description: "Non-surgical embolization for varicoceles to improve fertility and relieve pain.",
      icon: <FaUserMd className="text-teal-500 text-2xl" />,
      link: "/services/varicocele-embolization"
    },
    {
      title: "Hemorrhoid Treatment",
      description: "Painless hemorrhoid embolization with 95% success rate and no hospital stay.",
      icon: <FaProcedures className="text-teal-500 text-2xl" />,
      link: "/services/hemorrhoid-embolization"
    },
    {
      title: "Bleeding Control",
      description: "Emergency embolization for GI bleeding, postpartum hemorrhage, and trauma cases.",
      icon: <FaHeartbeat className="text-teal-500 text-2xl" />,
      link: "/services/bleeding-embolization"
    },
    {
      title: "Brain Aneurysm Coiling",
      description: "Endovascular coiling to prevent aneurysm rupture without open brain surgery.",
      icon: <FaHospital className="text-teal-500 text-2xl" />,
      link: "/services/aneurysm-coiling"
    },
    {
      title: "Diabetic Foot Care",
      description: "Angioplasty and stenting to prevent amputations in diabetic patients.",
      icon: <FaClinicMedical className="text-teal-500 text-2xl" />,
      link: "/services/#"
    }
  ];

  const treatments = [
    {
      title: "Ozone Disc Therapy",
      description: "Non-surgical treatment for herniated discs with 85% success rate.",
      image: "/images/oz11.png",
      icon: <FaClinicMedical className="text-white text-3xl" />,
      link: "/treatments/ozone-disc-herniation"
    },
    {
      title: "Joint Regeneration",
      description: "Ozone injections for arthritis with significant pain relief in 3 sessions.",
      image: "/images/oz2.png",
      icon: <FaHeartbeat className="text-white text-3xl" />,
      link: "/treatments/ozone-joint-treatment"
    },
    {
      title: "Major Autohemotherapy",
      description: "A modern alternative therapy using your own ozonated blood to boost immunity and detoxify the body.",
      image: "/images/ozz.png",
      icon: <FaUserMd className="text-white text-3xl" />,
      link: "/treatments/major-autohemotherapy"
    }
  ];

  const stats = [
    { value: "20+", label: "Years Experience", icon: <FaMedal className="text-teal-500" /> },
    { value: "5000+", label: "Procedures Performed", icon: <FaStethoscope className="text-teal-500" /> },
    { value: "95%", label: "Success Rate", icon: <FaHeartbeat className="text-teal-500" /> },
    { value: "4", label: "Hospital Affiliations", icon: <FaRegHospital className="text-teal-500" /> }
  ];

  const specializations = [
    "Uterine Fibroid Embolization (UFE)",
    "Varicose veins",
    "Prostate Artery Embolization (PAE)",
    "Liver Cancer Interventions (TACE/Y90)",
    "Varicocele Embolization",
    "Hemorrhoid Artery Embolization",
    "Peripheral Vascular Interventions",
    "Ozone Therapy Specialist",
    "Non-Surgical Disc Treatments"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Hero Section - Improved */}
      <section className="relative bg-gradient-to-br from-teal-900 to-teal-700 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/doctor1.png')] bg-repeat opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-teal-300 mr-4"></div>
              <span className="text-teal-300 font-medium tracking-wider">INTERVENTIONAL RADIOLOGY SPECIALIST</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">Precision</span>
              <span className="block">Minimally Invasive</span>
              <span className="block text-teal-200">Treatments</span>
            </h1>
            
            <p className="text-lg text-teal-100 mb-8 max-w-lg">
              Advanced image-guided procedures for complex conditions with faster recovery, less pain, and better outcomes than traditional surgery.
            </p>

            <div className="flex items-center mb-8">
              <div className="mr-4">
                <img 
                  src="/images/doctor1.png" 
                  alt="Dr. Yousuf Memon"
                  className="w-16 h-16 rounded-full border-2 border-white object-cover"
                />
              </div>
              <div>
                <p className="font-medium">Dr. Yousuf Memon</p>
                <p className="text-teal-200 text-sm">MBBS, FRCR LONDON</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="#appointment" 
                className="bg-white text-teal-700 hover:bg-teal-50 font-medium py-3 px-6 rounded-lg flex items-center transition shadow-lg hover:shadow-xl"
              >
                <FaCalendarAlt className="mr-2" /> Schedule Consultation
              </Link>
              <Link 
                href="#services" 
                className="border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg flex items-center transition"
              >
                <FaArrowRight className="mr-2" /> Explore Services
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/20">
                <img 
                  src="/images/doctor1.png" 
                  alt="Dr. Yousuf Memon - Interventional Radiologist"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  style={{ minHeight: '500px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-teal-600 p-4 rounded-xl shadow-lg border border-white/20">
                <div className="text-white font-bold text-xl">20+ Years</div>
                <div className="text-teal-100">Clinical Excellence</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-teal-200">
                <div className="text-teal-800 font-bold text-xl">MBBS, FRCR LONDON</div>
                <div className="text-teal-600 text-sm">Interventional Radiologist</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white relative -mt-8 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-xl shadow-lg p-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="flex justify-center mb-3">
                  <div className="bg-teal-100 p-3 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-teal-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Specialized Medical Solutions</h2>
            <div className="w-24 h-1.5 bg-teal-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive range of minimally invasive procedures designed for optimal patient outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-100 hover:border-teal-300 transition-all shadow-sm hover:shadow-md group relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-28 h-28 bg-teal-50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="bg-teal-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link 
                    href={service.link}
                    className="text-teal-600 font-medium hover:text-teal-700 flex items-center"
                  >
                    <span>Discover treatment options</span>
                    <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Areas of Specialization</h2>
                <div className="w-24 h-1.5 bg-teal-500 mb-6 rounded-full"></div>
                <p className="text-lg text-gray-600 mb-8">
                  Dr. Yousuf Memon is a fellowship-trained interventional radiologist with expertise in:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {specializations.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <div className="bg-teal-100 p-1 rounded-full mt-1 flex-shrink-0">
                        <FaAward className="text-teal-600 text-sm" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href="/specializations" 
                  className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700"
                >
                  View complete list of specializations
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Minimally Invasive Procedures?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 p-2 rounded-full mt-1 flex-shrink-0">
                      <FaHeartbeat className="text-teal-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Less Pain</h4>
                      <p className="text-gray-600">Small incisions mean less post-procedure discomfort</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 p-2 rounded-full mt-1 flex-shrink-0">
                      <FaHospital className="text-teal-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Faster Recovery</h4>
                      <p className="text-gray-600">Most patients go home the same day and resume normal activities within days</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 p-2 rounded-full mt-1 flex-shrink-0">
                      <FaUserMd className="text-teal-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Lower Risk</h4>
                      <p className="text-gray-600">Reduced complications compared to traditional surgery</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 p-2 rounded-full mt-1 flex-shrink-0">
                      <FaStethoscope className="text-teal-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Proven Results</h4>
                      <p className="text-gray-600">High success rates comparable to surgical alternatives</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovative Treatments */}
      <section className="py-20 bg-white" id="treatments">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Breakthrough Therapies</h2>
            <div className="w-24 h-1.5 bg-teal-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pioneering medical treatments that redefine patient care and recovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={treatment.image} 
                    alt={treatment.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute -top-6 -right-6 bg-teal-500 w-16 h-16 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  {treatment.icon}
                </div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{treatment.title}</h3>
                  <p className="text-teal-100 mb-4">{treatment.description}</p>
                  <Link 
                    href={treatment.link}
                    className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition"
                  >
                    Learn More
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src="/images/doc2.jpg" 
                    alt="Dr. Yousuf Memon at work"
                    className="w-full h-auto transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-6 rounded-xl shadow-lg max-w-xs">
                  <h3 className="font-bold text-xl mb-2">Dr. Yousuf Memon</h3>
                  <p className="text-teal-100">MBBS, FCPS (Radiology)</p>
                  <p className="text-teal-100 mt-2">Interventional Radiologist</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Our Specialist</h2>
              <div className="w-24 h-1.5 bg-teal-500 mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 mb-6">
                Dr. Yousuf Memon is a board-certified interventional radiologist with over 20 years of experience in performing minimally invasive, image-guided procedures. He completed his FCPS in Radiology from the College of Physicians and Surgeons Pakistan and has received specialized training in advanced interventional techniques.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-2 rounded-full mt-1 flex-shrink-0">
                    <FaAward className="text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Education & Training</h4>
                    <p className="text-gray-600">MBBS from Dow Medical College, FCPS in Radiology, specialized fellowship training in vascular interventions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-2 rounded-full mt-1 flex-shrink-0">
                    <FaHospital className="text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Hospital Affiliations</h4>
                    <p className="text-gray-600">Practicing at leading hospitals in Karachi with state-of-the-art angiography suites</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-2 rounded-full mt-1 flex-shrink-0">
                    <FaHeartbeat className="text-teal-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Patient Philosophy</h4>
                    <p className="text-gray-600">Compassionate care focused on providing the least invasive treatment option with optimal outcomes</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/about" 
                  className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition shadow hover:shadow-md"
                >
                  Learn More About Dr. Memon
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-block border border-teal-600 text-teal-600 hover:bg-teal-50 font-medium py-3 px-6 rounded-lg transition"
                >
                  Contact 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-800 to-teal-600 text-white" id="appointment">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Take the First Step Toward Better Health</h2>
            <div className="w-24 h-1.5 bg-teal-300 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl mb-8">
              Schedule a consultation to discuss your condition and explore minimally invasive treatment options.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="tel:+923367889143" 
                className="bg-white text-teal-700 hover:bg-teal-50 font-medium py-4 px-8 rounded-lg flex items-center transition shadow-lg hover:shadow-xl text-lg"
              >
                <FaPhone className="mr-3" /> Call Our Clinic
              </a>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-white hover:bg-white/10 font-medium py-4 px-8 rounded-lg flex items-center transition text-lg"
              >
                <FaCalendarAlt className="mr-3" /> Book Online Appointment
              </Link>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default HomePage;