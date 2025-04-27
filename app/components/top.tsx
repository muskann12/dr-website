import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function TopHeader() {
  return (
    <div className="bg-teal-800 text-white text-sm py-2 px-4 border-b border-teal-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Side - Contact Info */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-teal-300" size={12} />
            <span>+92 336-7889143</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-teal-300" size={12} />
            <span> info@dryousufmemon.pk</span>
          </div>
        </div>

        {/* Right Side - Location/Timing */}
       
        </div>
      </div>
    
  );
}