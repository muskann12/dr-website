import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaClinicMedical } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Hospital Locations */}
          <div>
            <div className="flex items-center mb-6">
              <FaClinicMedical className="text-blue-300 text-2xl mr-3" />
              <h4 className="text-xl font-bold text-white">Our Clinics</h4>
            </div>
            <div className="space-y-5">
              <div className="flex">
                <FaMapMarkerAlt className="text-blue-300 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-blue-100">Memon Medical Institute</h5>
                  <p className="text-blue-50 text-sm">Hyder Buksh Gabol Road, Safoora Chowrangi, Karachi</p>
                  <p className="text-xs text-blue-200 mt-1">OPD: Mon-Thu 04:00 PM - 07:00 PM</p>
                </div>
              </div>
              
              <div className="flex">
                <FaMapMarkerAlt className="text-blue-300 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-blue-100">OMI Hospital (Main Center)</h5>
                  <p className="text-blue-50 text-sm">89/1 Depot Lines, M.A Jinnah Rd, Karachi</p>
                  <p className="text-xs text-blue-300 bg-blue-900/50 px-2 py-1 rounded mt-1 inline-block">All procedures performed here</p>
                </div>
              </div>
              
              <div className="flex">
                <FaMapMarkerAlt className="text-blue-300 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-blue-100">Rahim Yar Khan Center</h5>
                  <p className="text-blue-50 text-sm">Near Govt. Technical College Thali Road</p>
                  <p className="text-xs text-blue-300 mt-1">Saturday Evening only</p>
                </div>
              </div>
              
              <div className="flex">
                <FaMapMarkerAlt className="text-blue-300 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-blue-100">ISRA Hospital</h5>
                  <p className="text-blue-50 text-sm">Cardiology Dept, Near Hala Naka, Hyderabad</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="flex items-center mb-6">
              <FaClinicMedical className="text-blue-300 text-2xl mr-3" />
              <h4 className="text-xl font-bold text-white">Contact Us</h4>
            </div>
            <div className="space-y-5">
              <div className="flex items-start">
                <FaPhone className="text-blue-300 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-blue-50">+92 336-7889143</p>
                  <p className="text-blue-50">+92 319-9246838</p>
                  <div className="flex space-x-3 mt-3">
                    <a href="tel:+923367889143" className="bg-blue-700 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-full flex items-center transition">
                      <FaPhone className="mr-1" size={10} /> Call Now
                    </a>
                    <a href="https://wa.me/923367889143" className="bg-green-600 hover:bg-green-500 text-white text-xs px-3 py-1 rounded-full flex items-center transition">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaEnvelope className="text-blue-300 mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:info@example.com" className="text-blue-50 hover:text-white transition">dr.yousuf.yt@gmail.com</a>
              </div>
              
              <div className="flex items-start">
                <FaClock className="text-blue-300 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-blue-100">Working Hours</h5>
                  <p className="text-blue-50">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-xs text-blue-200 mt-1">Emergency services available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center mb-6">
              <FaClinicMedical className="text-blue-300 text-2xl mr-3" />
              <h4 className="text-xl font-bold text-white">Quick Links</h4>
            </div>
            <ul className="space-y-3">
              <li><a href="/" className="text-blue-50 hover:text-white transition flex items-center">
                <svg className="w-3 h-3 mr-2 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Home
              </a></li>
              <li><a href="/about" className="text-blue-50 hover:text-white transition flex items-center">
                <svg className="w-3 h-3 mr-2 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                About Doctor
              </a></li>
              <li><a href="/services" className="text-blue-50 hover:text-white transition flex items-center">
                <svg className="w-3 h-3 mr-2 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Our Services
              </a></li>
              <li><a href="/treatments" className="text-blue-50 hover:text-white transition flex items-center">
                <svg className="w-3 h-3 mr-2 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Latest Treatments
              </a></li>
              <li><a href="/gallery" className="text-blue-50 hover:text-white transition flex items-center">
                <svg className="w-3 h-3 mr-2 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Medical Gallery
              </a></li>
              <li><a href="/contact" className="text-blue-50 hover:text-white transition flex items-center">
                <svg className="w-3 h-3 mr-2 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Book Appointment
              </a></li>
            </ul>
          </div>

          {/* Latest Treatments & Social Media */}
          <div>
            <div className="flex items-center mb-6">
              <FaClinicMedical className="text-blue-300 text-2xl mr-3" />
              <h4 className="text-xl font-bold text-white">Latest Treatments</h4>
            </div>
            <ul className="space-y-3 mb-8">
              <li>
                <a href="/treatments/ozone-disc" className="text-blue-50 hover:text-white transition flex items-start">
                  <svg className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Ozone Treatment for Disc Herniation
                </a>
              </li>
              <li>
                <a href="/treatments/ozone-joints" className="text-blue-50 hover:text-white transition flex items-start">
                  <svg className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Ozone Therapy for Joint Pain
                </a>
              </li>
            </ul>

            <div className="flex items-center mb-4">
              <FaClinicMedical className="text-blue-300 text-2xl mr-3" />
              <h4 className="text-xl font-bold text-white">Follow Us</h4>
            </div>
            <div className="flex space-x-3">
              <a href="#" className="bg-blue-700 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition transform hover:-translate-y-1">
                <FaFacebook className="text-white text-lg" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-500 w-10 h-10 rounded-full flex items-center justify-center transition transform hover:-translate-y-1">
                <FaInstagram className="text-white text-lg" />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-500 w-10 h-10 rounded-full flex items-center justify-center transition transform hover:-translate-y-1">
                <FaYoutube className="text-white text-lg" />
              </a>
              <a href="#" className="bg-blue-500 hover:bg-blue-400 w-10 h-10 rounded-full flex items-center justify-center transition transform hover:-translate-y-1">
                <FaLinkedin className="text-white text-lg" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-blue-700 mt-8 pt-6 text-center">
          <p className="text-blue-200 text-sm">
            &copy; {new Date().getFullYear()} Dr. [Name] - All Rights Reserved. 
            <span className="block md:inline-block md:ml-2 mt-1 md:mt-0">
              Designed with ❤️ for better healthcare
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;