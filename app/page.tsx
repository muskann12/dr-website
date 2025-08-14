import Head from 'next/head';
import { FaArrowRight, FaClinicMedical, FaHeartbeat, FaProcedures, FaPhone, FaCalendarAlt, FaUserMd, FaHospital, FaStethoscope, FaMedal, FaAward, FaRegHospital } from 'react-icons/fa';
import Link from 'next/link';

const HomePage = () => {
  const services = [
    {
      title: "Fibroid Treatment in Karachi",
      description: "Minimally invasive Uterine Fibroid Embolization (UFE) with 90% success rate and quick recovery. Best fibroid treatment in Pakistan.",
      icon: <FaProcedures className="text-teal-500 text-2xl" />,
      link: "/services/uterine-fibroid-embolization"
    },
    {
      title: "Varicose Vein Treatment in Pakistan", 
      description: "Advanced endovenous treatments for painful varicose veins with minimal downtime. Top varicose vein specialist in Karachi.",
      icon: <FaHeartbeat className="text-teal-500 text-2xl" />,
      link: "/services/varicose-vein-treatment"
    },
    {
      title: "Varicocele Treatment Karachi",
      description: "Non-surgical embolization for varicoceles to improve fertility and relieve pain. Leading varicocele doctor in Pakistan.",
      icon: <FaUserMd className="text-teal-500 text-2xl" />,
      link: "/services/varicocele-embolization"
    },
    {
      title: "Hemorrhoid Treatment Pakistan",
      description: "Painless hemorrhoid embolization with 95% success rate and no hospital stay. Best piles treatment in Karachi.",
      icon: <FaProcedures className="text-teal-500 text-2xl" />,
      link: "/services/hemorrhoid-embolization"
    },
    {
      title: "Bleeding Control Karachi",
      description: "Emergency embolization for GI bleeding, postpartum hemorrhage, and trauma cases. 24/7 emergency services available.",
      icon: <FaHeartbeat className="text-teal-500 text-2xl" />,
      link: "/services/bleeding-embolization"
    },
    {
      title: "Brain Aneurysm Coiling Pakistan",
      description: "Endovascular coiling to prevent aneurysm rupture without open brain surgery. Neurointerventional radiology specialist.",
      icon: <FaHospital className="text-teal-500 text-2xl" />,
      link: "/services/aneurysm-coiling"
    },
    {
      title: "Diabetic Foot Care Karachi",
      description: "Angioplasty and stenting to prevent amputations in diabetic patients. Vascular specialist in Pakistan.",
      icon: <FaClinicMedical className="text-teal-500 text-2xl" />,
      link: "/services/diabetic-foot-care"
    }
  ];

  const treatments = [
    {
      title: "Ozone Disc Therapy Pakistan",
      description: "Non-surgical treatment for herniated discs with 85% success rate. Best alternative to spine surgery in Karachi.",
      image: "/images/oz11.png",
      icon: <FaClinicMedical className="text-white text-3xl" />,
      link: "/treatments/ozone-disc-herniation"
    },
    {
      title: "Joint Regeneration Karachi",
      description: "Ozone injections for arthritis with significant pain relief in 3 sessions. Knee pain treatment without surgery.",
      image: "/images/oz2.png",
      icon: <FaHeartbeat className="text-white text-3xl" />,
      link: "/treatments/ozone-joint-treatment"
    },
    {
      title: "Autohemotherapy Pakistan",
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
    "Uterine Fibroid Embolization (UFE) in Pakistan",
    "Varicose veins treatment Karachi",
    "Prostate Artery Embolization (PAE)",
    "Liver Cancer Interventions (TACE/Y90)",
    "Varicocele Embolization in Karachi",
    "Hemorrhoid Artery Embolization Pakistan",
    "Peripheral Vascular Interventions",
    "Ozone Therapy Specialist in Pakistan",
    "Non-Surgical Disc Treatments Karachi"
  ];

  return (
    <>
      <Head>
        <title>Best Interventional Radiologist in Karachi | Dr. Yousuf Memon | Fibroid & Varicose Vein Specialist</title>
        <meta
          name="description"
          content="Dr. Yousuf Memon, the top interventional radiologist in Karachi offering minimally invasive treatments for fibroids, varicose veins, hemorrhoids, and ozone therapy. 20+ years experience with 95% success rate."
        />
        <meta name="keywords" content="interventional radiologist karachi, fibroid treatment pakistan, varicose veins specialist, best hemorrhoid doctor, ozone therapy karachi, non-surgical treatments, dr yousuf memon" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="PK-SD" />
        <meta name="geo.placename" content="Karachi" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dryousufmemon.com/" />
        <meta property="og:title" content="Best Interventional Radiologist in Karachi | Dr. Yousuf Memon" />
        <meta property="og:description" content="Top minimally invasive treatments for fibroids, varicose veins & hemorrhoids in Pakistan. 95% success rate with 20+ years experience." />
        <meta property="og:image" content="https://dryousufmemon.com/images/doctor-social.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dryousufmemon.com/" />
        <meta property="twitter:title" content="Best Interventional Radiologist in Karachi | Dr. Yousuf Memon" />
        <meta property="twitter:description" content="Top minimally invasive treatments for fibroids, varicose veins & hemorrhoids in Pakistan. 95% success rate with 20+ years experience." />
        <meta property="twitter:image" content="https://dryousufmemon.com/images/doctor-social.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://dryousufmemon.com/" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Dr. Yousuf Memon - Interventional Radiologist",
            "image": "https://dryousufmemon.com/images/doctor1.png",
            "@id": "https://dryousufmemon.com/#organization",
            "url": "https://dryousufmemon.com/",
            "telephone": "+923367889143",
            "priceRange": "$$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "D-72, Block 7-8, Near Agha Khan Hospital",
              "addressLocality": "Karachi",
              "addressRegion": "Sindh",
              "postalCode": "74800",
              "addressCountry": "PK"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "24.8607",
              "longitude": "67.0011"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.facebook.com/dryousufmemon",
              "https://twitter.com/dryousufmemon",
              "https://www.linkedin.com/in/dryousufmemon"
            ]
          })}
        </script>
        
        {/* Medical Professional Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            "@id": "https://dryousufmemon.com/#physician",
            "name": "Dr. Yousuf Memon",
            "url": "https://dryousufmemon.com/",
            "image": "https://dryousufmemon.com/images/doctor1.png",
            "description": "Interventional Radiologist with 20+ years experience specializing in minimally invasive treatments for fibroids, varicose veins, and other conditions.",
            "medicalSpecialty": {
              "@type": "MedicalSpecialty",
              "name": "Interventional Radiology"
            },
            "hasCredential": {
              "@type": "EducationalOccupationalCredential",
              "name": "MBBS",
              "url": "https://dryousufmemon.com/about"
            },
            "hassCredential": {
              "@type": "EducationalOccupationalCredential",
              "name": "FRCR (London)",
              "url": "https://dryousufmemon.com/about"
            },
            "memberOf": {
              "@type": "MedicalOrganization",
              "name": "Pakistan Medical and Dental Council"
            },
            "telephone": "+923367889143",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "D-72, Block 7-8, Near Agha Khan Hospital",
              "addressLocality": "Karachi",
              "addressRegion": "Sindh",
              "postalCode": "74800",
              "addressCountry": "PK"
            }
          })}
        </script>
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-teal-900 to-teal-700 text-white py-20 md:py-28 overflow-hidden" aria-label="Best interventional radiologist in Karachi - Dr. Yousuf Memon">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/doctor1.png')] bg-repeat opacity-20" aria-hidden="true"></div>
          </div>

          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-1 bg-teal-300 mr-4" aria-hidden="true"></div>
                <span className="text-teal-300 font-medium tracking-wider">TOP INTERVENTIONAL RADIOLOGIST IN KARACHI</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="block">Minimally Invasive</span>
                <span className="block">Treatments in</span>
                <span className="block text-teal-200">Pakistan</span>
              </h1>

              <p className="text-lg text-teal-100 mb-8 max-w-lg">
                Advanced image-guided procedures for fibroids, varicose veins, and other conditions with faster recovery and better outcomes than traditional surgery.
              </p>

              <div className="flex items-center mb-8">
                <div className="mr-4">
                  <img
                    src="/images/doctor1.png"
                    alt="Dr. Yousuf Memon - Best Interventional Radiologist in Karachi"
                    className="w-16 h-16 rounded-full border-2 border-white object-cover"
                    loading="lazy"
                    width="64"
                    height="64"
                  />
                </div>
                <div>
                  <p className="font-medium">Dr. Yousuf Memon</p>
                  <p className="text-teal-200 text-sm">MBBS, FRCR LONDON - Interventional Radiologist</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#appointment"
                  className="bg-white text-teal-700 hover:bg-teal-50 font-medium py-3 px-6 rounded-lg flex items-center transition shadow-lg hover:shadow-xl"
                  aria-label="Book Appointment with Best Interventional Radiologist in Karachi"
                >
                  <FaCalendarAlt className="mr-2" /> Book Appointment
                </Link>
                <Link
                  href="#services"
                  className="border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg flex items-center transition"
                  aria-label="View Our Specialized Treatments"
                >
                  <FaArrowRight className="mr-2" /> View Treatments
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/20">
                  <img
                    src="/images/doctor1.png"
                    alt="Dr. Yousuf Memon - Top Interventional Radiologist in Pakistan"
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                    style={{ minHeight: '500px' }}
                    loading="lazy"
                    width="400"
                    height="500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-teal-600 p-4 rounded-xl shadow-lg border border-white/20">
                  <div className="text-white font-bold text-xl">20+ Years</div>
                  <div className="text-teal-100">Experience in Pakistan</div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-teal-200">
                  <div className="text-teal-800 font-bold text-xl">MBBS, FRCR LONDON</div>
                  <div className="text-teal-600 text-sm">Karachi's Leading Specialist</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white relative -mt-8 z-10" aria-label="Dr. Yousuf Memon's achievements and success rates">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-xl shadow-lg p-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4">
                  <div className="flex justify-center mb-3">
                    <div className="bg-teal-100 p-3 rounded-full" aria-hidden="true">
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
        <section className="py-20 bg-white" id="services" aria-label="Specialized medical services in Karachi">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Specialized Treatments in Karachi</h2>
              <div className="w-24 h-1.5 bg-teal-500 mx-auto mb-6 rounded-full" aria-hidden="true"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive range of minimally invasive procedures with high success rates in Pakistan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl p-8 border border-gray-100 hover:border-teal-300 transition-all shadow-sm hover:shadow-md group relative overflow-hidden"
                  tabIndex={0}
                  aria-label={`${service.title} - ${service.description}`}
                >
                  <div className="absolute -right-10 -top-10 w-28 h-28 bg-teal-50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" aria-hidden="true"></div>
                  <div className="relative z-10">
                    <div className="bg-teal-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Link
                      href={service.link}
                      className="text-teal-600 font-medium hover:text-teal-700 flex items-center"
                      aria-label={`Learn more about ${service.title} in Karachi`}
                    >
                      <span>Learn More</span>
                      <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations Section */}
        <section className="py-20 bg-gray-50" aria-label="Dr. Yousuf Memon's areas of expertise in Pakistan">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Areas of Expertise in Pakistan</h2>
                  <div className="w-24 h-1.5 bg-teal-500 mb-6 rounded-full" aria-hidden="true"></div>
                  <p className="text-lg text-gray-600 mb-8">
                    Dr. Yousuf Memon is a fellowship-trained interventional radiologist with expertise in minimally invasive treatments:
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 list-none">
                    {specializations.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3"
                        aria-label={item}
                      >
                        <div className="bg-teal-100 p-1 rounded-full mt-1 flex-shrink-0">
                          <FaAward className="text-teal-600 text-sm" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/specializations"
                    className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700"
                    aria-label="View all specializations in Karachi"
                  >
                    View All Specializations
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100" aria-label="Benefits of choosing minimally invasive treatments in Karachi">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Treatments in Pakistan?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-teal-100 p-2 rounded-full mt-1 flex-shrink-0" aria-hidden="true">
                        <FaHeartbeat className="text-teal-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Less Pain & Scarring</h4>
                        <p className="text-gray-600">Small incisions mean less pain and no large scars compared to open surgery.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-teal-100 p-2 rounded-full mt-1 flex-shrink-0" aria-hidden="true">
                        <FaCalendarAlt className="text-teal-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Faster Recovery Time</h4>
                        <p className="text-gray-600">Most patients return to normal activities within 1-2 days after treatment.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-teal-100 p-2 rounded-full mt-1 flex-shrink-0" aria-hidden="true">
                        <FaMedal className="text-teal-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Proven Success Rates</h4>
                        <p className="text-gray-600">Our procedures have 90-95% success rates based on clinical studies.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-teal-100 p-2 rounded-full mt-1 flex-shrink-0" aria-hidden="true">
                        <FaUserMd className="text-teal-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Experienced Specialist</h4>
                        <p className="text-gray-600">20+ years experience with thousands of successful procedures performed.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatments Section */}
        <section className="py-20 bg-white" aria-label="Ozone therapy treatments in Karachi">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">Advanced Ozone Therapy in Pakistan</h2>
            <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">Non-surgical treatments for chronic pain, joint issues, and disc problems</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {treatments.map((treatment, index) => (
                <article
                  key={index}
                  className="relative rounded-xl overflow-hidden shadow-lg group"
                  tabIndex={0}
                  aria-label={`${treatment.title} - ${treatment.description}`}
                >
                  <img
                    src={treatment.image}
                    alt={`${treatment.title} treatment in Karachi`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    width="400"
                    height="256"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-teal-600 rounded-full p-2">{treatment.icon}</div>
                      <h3 className="text-white text-2xl font-semibold">{treatment.title}</h3>
                    </div>
                    <p className="text-white text-sm mb-4">{treatment.description}</p>
                    <Link
                      href={treatment.link}
                      className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded shadow"
                      aria-label={`Learn more about ${treatment.title} in Pakistan`}
                    >
                      View Details
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment Section */}
        <section id="appointment" className="py-20 bg-gradient-to-br from-teal-900 to-teal-700 text-white text-center" aria-label="Book appointment with top interventional radiologist in Karachi">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Consultation Today</h2>
            <p className="mb-8 max-w-xl mx-auto text-lg">
              Get personalized treatment from Karachi's leading interventional radiologist. Available at multiple locations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+923367889143"
                className="inline-block bg-white text-teal-700 font-semibold py-4 px-8 rounded-lg shadow hover:shadow-xl transition"
                aria-label="Call Dr. Yousuf Memon's clinic in Karachi"
              >
                <FaPhone className="inline mr-2" /> Call +92 336 788 9143
              </a>
              <Link
                href="/contact"
                className="inline-block border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition"
                aria-label="Contact Dr. Yousuf Memon's clinic"
              >
                <FaArrowRight className="inline mr-2" /> Contact Clinic
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;