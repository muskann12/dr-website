import { 
  FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, 
  FaMapMarkerAlt, FaClock, FaWhatsapp, FaYoutube, FaTwitter 
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer 
      className="bg-teal-900 text-white pt-12 pb-6 px-4 sm:px-6" 
      role="contentinfo"
      itemScope 
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content="Dr. Yousuf Memon - Cardiologist & Interventional Radiologist" />
      <meta itemProp="url" content="https://dryousufmemon.pk" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Contact Information */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-2 border-b border-teal-700 pb-2">
            Contact Us
          </h2>
          
          <address className="not-italic space-y-4 text-sm" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-teal-300 mt-1 flex-shrink-0" />
              <div className="space-y-1">
                <a href="tel:+923367889143" itemProp="telephone" className="font-medium hover:text-teal-200 transition-colors block">
                  +92 336-7889143
                </a>
                <a href="tel:+923199246838" itemProp="telephone" className="font-medium hover:text-teal-200 transition-colors block">
                  +92 319-9246838
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-teal-300 mt-1 flex-shrink-0" />
              <a href="mailto:info@dryousufmemon.pk" itemProp="email" className="font-medium hover:text-teal-200 transition-colors">
                info@dryousufmemon.pk
              </a>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <FaWhatsapp className="text-teal-300 mt-1 flex-shrink-0" />
              <a 
                href="https://wa.me/923367889143" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="font-medium hover:text-teal-200 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </address>
          
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4" itemProp="sameAs">
              <a href="https://www.facebook.com/share/15ynPLZRA9/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="bg-teal-800 hover:bg-teal-700 p-3 rounded-full transition-colors">
                <FaFacebookF size={16} />
              </a>
              <a href="https://www.youtube.com/@Dr.YousufMemon" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="bg-teal-800 hover:bg-teal-700 p-3 rounded-full transition-colors">
                <FaYoutube size={16} />
              </a>
              <a href="https://twitter.com/dr_yousuf_memon" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="bg-teal-800 hover:bg-teal-700 p-3 rounded-full transition-colors">
                <FaTwitter size={16} />
              </a>
              <a href="https://www.linkedin.com/in/dr-yousuf-memon-b9208b362" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="bg-teal-800 hover:bg-teal-700 p-3 rounded-full transition-colors">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Karachi */}
        <div className="space-y-6" itemProp="department" itemScope itemType="https://schema.org/MedicalClinic">
          <div className="bg-teal-800/30 p-4 rounded-lg hover:bg-teal-800/40 transition-colors">
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FaMapMarkerAlt className="text-teal-300" />
              <span>Karachi | <span lang="ur">کراچی</span></span>
            </h2>
            <div className="space-y-2 text-sm">
              <p className="font-medium" itemProp="name">Orthopaedic and Medical Institute (OMI)</p>
              <p itemProp="streetAddress">Depot Lines, Muhammad Ali Jinnah Rd Saddar Karachi</p>
              <p className="text-teal-100" lang="ur">ڈیپوٹ لائنز ،محمد علی جناح روڈ صدر کراچی۔</p>
              <div className="flex items-start gap-2 mt-2 text-teal-200">
                <FaClock className="mt-1 flex-shrink-0" />
                <p className="font-medium">Mon & Thu | 2:00 PM - 4:00 PM | <span lang="ur">پیر اور جمعرات</span></p>
              </div>
              <a href="https://maps.google.com/?q=Orthopaedic and Medical Institute, Depot Lines, Karachi" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-teal-300 hover:text-teal-200 text-sm font-medium">
                View on Map →
              </a>
            </div>
          </div>
        </div>

        {/* Hyderabad & Lahore */}
        <div className="space-y-6">
          {/* Hyderabad */}
          <div className="bg-teal-800/30 p-4 rounded-lg hover:bg-teal-800/40 transition-colors">
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FaMapMarkerAlt className="text-teal-300" />
              <span>Hyderabad | <span lang="ur">حیدرآباد</span></span>
            </h2>
            <p className="font-medium">Isra Hospital, Cath Lab Cardiology</p>
            <p className="text-teal-100" lang="ur">اسرا اسپتال، کیتھ لیب کارڈیالوجی</p>
            <div className="flex items-start gap-2 mt-2 text-teal-200">
              <FaClock className="mt-1 flex-shrink-0" />
              <p className="font-medium">Fri | 12:00 PM - 2:00 PM | <span lang="ur">جمعہ</span></p>
            </div>
            <a href="https://maps.google.com/?q=Isra Hospital, Hyderabad" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-teal-300 hover:text-teal-200 text-sm font-medium">
              View on Map →
            </a>
          </div>

          {/* Lahore */}
          <div className="bg-teal-800/30 p-4 rounded-lg hover:bg-teal-800/40 transition-colors">
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FaMapMarkerAlt className="text-teal-300" />
              <span>Lahore | <span lang="ur">لاہور</span></span>
            </h2>
            <p className="font-medium">Ihsan Mumtaz Hospital</p>
            <p className="text-teal-100" lang="ur">احسان ممتاز ہسپتال</p>
            <p>71-E Jauhar Town Maulana Shaukat Ali Road Lahore</p>
            <p className="text-teal-100" lang="ur">71-E جوہر ٹاؤن مولانا شوکت علی روڈ لاہور</p>
            <a href="https://maps.google.com/?q=Ihsan Mumtaz Hospital, Lahore" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-teal-300 hover:text-teal-200 text-sm font-medium">
              View on Map →
            </a>
          </div>
        </div>

        {/* Rahim Yar Khan & Peshawar */}
        <div className="space-y-6">
          {/* Rahim Yar Khan */}
          <div className="bg-teal-800/30 p-4 rounded-lg hover:bg-teal-800/40 transition-colors">
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FaMapMarkerAlt className="text-teal-300" />
              <span>Rahim Yar Khan | <span lang="ur">رحیم یار خان</span></span>
            </h2>
            <p className="font-medium">Diagnostic Interventional Radiology & Cardiac Center</p>
            <p lang="ur">رحیم یار خان ڈائیگنوسٹک انٹروینشنل ریڈیالوجی اینڈ کارڈیک سینٹر</p>
            <p>Near Govt. Technical College, Thali Road</p>
            <p className="text-teal-100" lang="ur">گورنمنٹ ٹیکنیکل کالج کے قریب، تھالی روڈ</p>
            <div className="flex items-start gap-2 mt-2 text-teal-200">
              <FaClock className="mt-1 flex-shrink-0" />
              <p className="font-medium">Sat | 12:00 PM - 5:00 PM | <span lang="ur">ہفتہ</span></p>
            </div>
            <a href="https://maps.google.com/?q=Diagnostic Interventional Radiology & Cardiac Center, Rahim Yar Khan" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-teal-300 hover:text-teal-200 text-sm font-medium">
              View on Map →
            </a>
          </div>

          {/* Peshawar */}
          <div className="bg-teal-800/30 p-4 rounded-lg hover:bg-teal-800/40 transition-colors">
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FaMapMarkerAlt className="text-teal-300" />
              <span>Peshawar | <span lang="ur">پشاور</span></span>
            </h2>
            <p className="font-medium">Mission Hospital</p>
            <p className="text-teal-100" lang="ur">مشن ہسپتال</p>
            <p>Outside Hilal Ahmar, Balding Dabgari Garden, Peshawar</p>
            <p className="text-teal-100" lang="ur">ہلال احمر کے باہر، بالڈنگ ڈبگری گارڈن، پشاور</p>
            <a href="https://maps.google.com/?q=Mission Hospital, Peshawar" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-teal-300 hover:text-teal-200 text-sm font-medium">
              View on Map →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-teal-700 pt-6 text-center text-sm text-teal-100">
        <p>© {new Date().getFullYear()} Dr. Yousuf Memon. All Rights Reserved.</p>
        <p className="mt-1 text-lgs">Developed by <strong>Muskan Nisar</strong> | <a href="tel:+923182325757" className="hover:text-teal-200">0318-2325757</a></p>
      </div>
    </footer>
  );
}