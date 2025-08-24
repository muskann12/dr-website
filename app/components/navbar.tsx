'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
        setTreatmentsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleNav = () => setIsOpen(!isOpen);
  const toggleServices = (e: React.MouseEvent) => {
    e.stopPropagation();
    setServicesOpen(!servicesOpen);
    setTreatmentsOpen(false);
  };
  const toggleTreatments = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTreatmentsOpen(!treatmentsOpen);
    setServicesOpen(false);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setTreatmentsOpen(false);
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-2xl font-extrabold text-teal-700 hover:text-green-700 transition-colors"
              onClick={closeMobileMenu}
            >
              Dr. Yousuf Memon
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-teal-800font-medium transition-colors px-2 py-1 rounded"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-teal-800 font-medium transition-colors px-2 py-1 rounded"
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                className="text-gray-700 hover:text-teal-800 font-medium flex items-center px-2 py-1 rounded transition-colors"
                onClick={toggleServices}
              >
                Services
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-2 z-50 transition-all duration-200 origin-top ${
                  servicesOpen ? 'scale-y-100 opacity-100' : 'scale-y-95 opacity-0 pointer-events-none'
                }`}
              >
                {[
                  { href: "/services/uterine-fibroid-embolization", text: "Uterine Fibroid Embolization" },
                  { href: "/services/liver-cancer", text: "Liver Cancer Due to Liver Cirrhosis" },
                  { href: "/services/hemorrhoid-embolization", text: "Hemorrhoid (Piles) Embolization" },
                  { href: "/services/hemoptysis-embolization", text: "Hemoptysis (Blood in Sputum) Embolization" },
                  { href: "/services/bleeding-embolization", text: "Embolization for Bleeding from the Anus or Mouth" },
                  { href: "/services/brain-tumor-embolization", text: "Embolization of Brain Tumors" },
                  { href: "/services/lower-limb-angioplasty", text: "Lower Limb Angioplasty for Diabetic Foot" },
                  { href: "/services/ivc-filter-placement", text: "IVC Filter Placement for Deep Vein Thrombosis (DVT)" },
                  { href: "/services/ptc-ptbd-stenting", text: "PTC and PTBD with CBD Stenting" },
                  { href: "/services/permacath-placement", text: "Permacath Placement for Long-Term Dialysis" },
                  { href: "/services/tumor-ablation", text: "Tumor Ablation by Microwave Ablation (MWA)" },
                  { href: "/services/meningioma-treatment", text: "Treatment of Meningioma, Angiofibroma, Cysts, and Endometriotic Cysts" },
                  { href: "/services/picc-line-placement", text: "PICC Line Placement for Long-Term Antibiotics and Chemotherapy" }
                ].map((item, index) => (
                  <Link 
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-teal-800 transition-colors"
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Latest Treatment Dropdown */}
            <div className="relative">
              <button 
                className="text-gray-700 hover:text-teal-800 font-medium flex items-center px-2 py-1 rounded transition-colors"
                onClick={toggleTreatments}
              >
                Latest Treatment
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform ${treatmentsOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50 transition-all duration-200 origin-top ${
                  treatmentsOpen ? 'scale-y-100 opacity-100' : 'scale-y-95 opacity-0 pointer-events-none'
                }`}
              >
                {[
                  { href: "/treatments/ozone-disc-herniation", text: "Ozone Treatment for Intervertebral Disc Herniation" },
                  { href: "/treatments/ozone-joint-treatment", text: "Ozone Treatment for Joints: Knee, Shoulder, Backpain" },
                  { href: "/treatments/eye-treatment", text: "Ozone Treatment for Dry Eyes, Sinuses, Face Wrinkles" },
                  { href: "/treatments/venous-leak", text: "Venous Leak Treatment" },
                 // { href: "/treatments/varicose-veins", text: "Varicose Veins Treatment" },
                  { href: "/treatments/varicocele-embolization", text: "Varicocele Embolization" }
                ].map((item, index) => (
                  <Link 
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-teal-800 transition-colors"
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link 
              href="/gallery" 
              className="text-gray-700 hover:text-teal-800 font-medium transition-colors px-2 py-1 rounded"
            >
              Gallery
            </Link>
            <Link 
              href="/youtube" 
              className="text-gray-700 hover:text-teal-800 font-medium transition-colors px-2 py-1 rounded"
            >
              Youtube
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-teal-800 font-medium transition-colors px-2 py-1 rounded"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleNav}
              className="text-gray-700 hover:text-teal-800 focus:outline-none p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {[
            { href: "/", text: "Home" },
            { href: "/about", text: "About" }
          ].map((item, index) => (
            <Link 
              key={index}
              href={item.href}
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-teal-800 hover:bg-blue-50 transition-colors"
              onClick={closeMobileMenu}
            >
              {item.text}
            </Link>
          ))}
          
          {/* Services Dropdown Mobile */}
          <div className="border-b border-gray-100 pb-2">
            <button 
              onClick={toggleServices}
              className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-teal-800 hover:bg-blue-50 transition-colors"
            >
              Services
              <svg 
                className={`w-4 h-4 ml-1 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              className={`pl-4 space-y-1 transition-all duration-300 overflow-hidden ${
                servicesOpen ? 'max-h-screen opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}
            >
              {[
                { href: "/services/uterine-fibroid-embolization", text: "Uterine Fibroid Embolization" },
                { href: "/services/liver-cancer", text: "Liver Cancer Due to Liver Cirrhosis" },
                { href: "/services/hemorrhoid-embolization", text: "Hemorrhoid (Piles) Embolization" },
                { href: "/services/hemoptysis-embolization", text: "Hemoptysis (Blood in Sputum) Embolization" },
                { href: "/services/bleeding-embolization", text: "Embolization for Bleeding" },
                { href: "/services/brain-tumor-embolization", text: "Embolization of Brain Tumors" },
                { href: "/services/lower-limb-angioplasty", text: "Lower Limb Angioplasty" },
                { href: "/services/ivc-filter-placement", text: "IVC Filter Placement" },
                { href: "/services/ptc-ptbd-stenting", text: "PTC and PTBD with CBD Stenting" },
                { href: "/services/permacath-placement", text: "Permacath Placement" },
                { href: "/services/tumor-ablation", text: "Tumor Ablation (MWA)" },
                { href: "/services/meningioma-treatment", text: "Meningioma Treatment" },
                { href: "/services/picc-line-placement", text: "PICC Line Placement" }
              ].map((item, index) => (
                <Link 
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-teal-800 hover:bg-blue-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Latest Treatment Dropdown Mobile */}
          <div className="border-b border-gray-100 pb-2">
            <button 
              onClick={toggleTreatments}
              className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Latest Treatment
              <svg 
                className={`w-4 h-4 ml-1 transition-transform ${treatmentsOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              className={`pl-4 space-y-1 transition-all duration-300 overflow-hidden ${
                treatmentsOpen ? 'max-h-screen opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}
            >
              {[
                { href: "/treatments/ozone-disc-herniation", text: "Ozone for Disc Herniation" },
                { href: "/treatments/ozone-joint-treatment", text: "Ozone for Joints" },
                { href: "/treatments/eye-treatment", text: "Ozone Treatment for Dry Eyes, Sinuses, Face Wrinkles" },
                { href: "/treatments/venous-leak", text: "Venous Leak Treatment" },
                //{ href: "/treatments/varicose-veins", text: "Varicose Veins Treatment" },
                { href: "/treatments/varicocele-embolization", text: "Varicocele Embolization" }
              ].map((item, index) => (
                <Link 
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-teal-800 hover:bg-blue-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
          
          {[
            { href: "/gallery", text: "Gallery" },
            { href: "/youtube", text: "Youtube" },
            { href: "/contact", text: "Contact" }
          ].map((item, index) => (
            <Link 
              key={index}
              href={item.href}
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-teal-800 hover:bg-blue-50 transition-colors"
              onClick={closeMobileMenu}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;