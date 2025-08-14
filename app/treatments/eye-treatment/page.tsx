// pages/treatments/ozone-dry-eyes-sinuses-wrinkles.js
import React from 'react';
import Head from 'next/head';

const OzoneDryEyesSinusesWrinkles = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Ozone Therapy for Dry Eyes & Sinus in Pakistan | Natural Wrinkle Treatment</title>
        <meta name="description" content="Best ozone therapy in Pakistan for dry eyes, chronic sinus issues & facial wrinkles. Safe, natural treatments available in Karachi, Lahore, Hyderabad & Rahim Yar Khan." />
        <meta name="keywords" content="ozone therapy Pakistan, dry eye treatment Karachi, sinus relief Lahore, facial rejuvenation Islamabad, natural skin treatments, Dr. Yousuf Memon" />
        
        {/* Pakistan-specific schema markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "Dr. Yousuf Memon",
              "description": "Specializing in ozone therapy treatments for dry eyes, sinus issues and facial rejuvenation in Pakistan",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Depot Lines, Muhammad Ali Jinnah Rd Saddar",
                "addressLocality": "Karachi",
                "addressRegion": "Sindh",
                "postalCode": "",
                "addressCountry": "PK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "24.8607",
                "longitude": "67.0011"
              },
              "telephone": "+92-336-7889143",
              "openingHours": "Mo,Th 14:00-16:00",
              "medicalSpecialty": "Ozone Therapy"
            }
          `}
        </script>
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ozone Therapy for Dry Eyes, Sinuses & Wrinkles</h1>
          <p className="text-xl md:text-2xl">Natural solutions available at our clinics across Pakistan</p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><span>/</span></li>
            <li><a href="/treatments" className="hover:text-blue-600">Treatments</a></li>
            <li><span>/</span></li>
            <li className="text-blue-600">Ozone Therapy</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Overview */}
            <section className="mb-12">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">About Ozone Therapy in Pakistan</h2>
                <p className="text-gray-700 mb-6">
                  Ozone therapy is gaining popularity in Pakistan as a versatile treatment that uses medical-grade ozone (O₃) to address various conditions. At our clinics in Karachi, Lahore, Hyderabad, and Rahim Yar Khan, we offer ozone treatments for dry eyes, sinus issues, and facial rejuvenation with proven results.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">How It Works</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Reduces inflammation in treated areas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Fights bacterial and viral infections common in Pakistan's climate</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Stimulates natural healing processes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Enhances oxygen utilization in tissues</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                    <h3 className="text-xl font-semibold text-indigo-700 mb-3">Available at Our Clinics</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        <span><strong>Karachi:</strong> Orthopaedic and Medical Institute (OMI)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        <span><strong>Lahore:</strong> Ihsan Mumtaz Hospital</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        <span><strong>Hyderabad:</strong> Isra Hospital</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        <span><strong>Rahim Yar Khan:</strong> Diagnostic Interventional Radiology & Cardiac Center</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Dry Eyes Section */}
            <section className="mb-12">
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Ozone for Dry Eyes</h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Dry eye syndrome is common in Pakistan due to pollution and dry climate. Ozone therapy offers an effective solution by addressing inflammation and improving ocular surface health without the need for constant eye drops.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Treatment Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-2 mr-3">
                        <span className="font-bold">1</span>
                      </div>
                      <p className="text-gray-700">Eye area is cleaned and numbing drops may be applied for comfort</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-2 mr-3">
                        <span className="font-bold">2</span>
                      </div>
                      <p className="text-gray-700">Medical-grade ozone is applied topically or through controlled gas application</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-2 mr-3">
                        <span className="font-bold">3</span>
                      </div>
                      <p className="text-gray-700">Treatment takes about 15-20 minutes per session</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-3 text-lg">Benefits</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Reduces dry eye symptoms like burning and irritation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Improves tear film quality and stability</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Non-invasive with minimal downtime</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>May reduce dependence on artificial tears</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-red-700 mb-3 text-lg">Considerations</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Possible mild irritation immediately after treatment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Typically requires 3-6 sessions for optimal results</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Results vary based on individual conditions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Not suitable for all dry eye types</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Sinuses Section */}
            <section className="mb-12">
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Ozone for Sinus Issues</h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Chronic sinusitis is particularly common in Pakistan's polluted urban areas. Ozone therapy helps by reducing inflammation and fighting infections in the sinus cavities, offering relief when traditional treatments fail.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Treatment Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-indigo-100 text-indigo-600 rounded-full p-2 mr-3">
                        <span className="font-bold">1</span>
                      </div>
                      <p className="text-gray-700">Nasal passages are gently cleaned and prepared</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-indigo-100 text-indigo-600 rounded-full p-2 mr-3">
                        <span className="font-bold">2</span>
                      </div>
                      <p className="text-gray-700">Ozone is carefully administered via nasal insufflation</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-indigo-100 text-indigo-600 rounded-full p-2 mr-3">
                        <span className="font-bold">3</span>
                      </div>
                      <p className="text-gray-700">Session lasts about 20-30 minutes with immediate relief possible</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-3 text-lg">Benefits</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Reduces chronic sinus inflammation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Effective against resistant bacterial and fungal infections</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>May reduce dependence on antibiotics and steroids</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Helps with post-nasal drip and congestion</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-red-700 mb-3 text-lg">Considerations</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Temporary nasal fullness or mild irritation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Typically requires 4-8 sessions for chronic conditions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Not recommended during acute sinus infections</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>May need periodic maintenance treatments</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Wrinkles Section */}
            <section className="mb-12">
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Ozone for Facial Wrinkles</h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Ozone therapy stimulates collagen production and improves skin elasticity, offering a non-invasive approach to reducing facial wrinkles and improving skin texture - a popular alternative to surgical procedures in Pakistan.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Treatment Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-purple-100 text-purple-600 rounded-full p-2 mr-3">
                        <span className="font-bold">1</span>
                      </div>
                      <p className="text-gray-700">Facial skin is thoroughly cleaned and prepared</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-purple-100 text-purple-600 rounded-full p-2 mr-3">
                        <span className="font-bold">2</span>
                      </div>
                      <p className="text-gray-700">Ozone is applied via specialized facial techniques</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-purple-100 text-purple-600 rounded-full p-2 mr-3">
                        <span className="font-bold">3</span>
                      </div>
                      <p className="text-gray-700">Treatment takes 30-45 minutes with no downtime</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-3 text-lg">Benefits</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Reduces fine lines and deeper wrinkles</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Improves skin texture, tone, and elasticity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Stimulates natural collagen production</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Enhances overall facial radiance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-red-700 mb-3 text-lg">Considerations</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Temporary redness may occur</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>5-8 sessions recommended for visible results</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Results develop gradually over weeks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span>Maintenance treatments needed for lasting effects</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Pakistan Patient Testimonials */}
            <section className="mb-12">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Patient Experiences in Pakistan</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Karachi Patient */}
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <span className="font-bold">AK</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Ayesha K., Karachi</h4>
                        <div className="flex text-yellow-400 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"After years of suffering from dry eyes in Karachi's polluted environment, ozone therapy at Dr. Memon's clinic gave me lasting relief. The treatment was comfortable and the staff was very professional."</p>
                  </div>
                  
                  {/* Lahore Patient */}
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <span className="font-bold">SR</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Sohail R., Lahore</h4>
                        <div className="flex text-yellow-400 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"My chronic sinus issues that persisted for years in Lahore's weather were significantly improved after just 4 ozone therapy sessions. I can finally breathe properly again!"</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Summary Section */}
            <section className="mb-12">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Treatment Summary</h2>
                <p className="text-gray-700 mb-6">
                  Ozone treatment shows excellent results for dry eyes, sinus issues, and facial wrinkles through its anti-inflammatory, antimicrobial, and tissue-repair stimulating properties. At our clinics across Pakistan, we've helped hundreds of patients find relief.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">What to Expect at Our Pakistan Clinics</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>First Visit:</strong> Comprehensive evaluation and treatment plan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Follow-ups:</strong> Regular sessions based on your condition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Results:</strong> Typically noticeable within weeks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Maintenance:</strong> Periodic treatments may be recommended</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-6">
                  <p className="text-yellow-700">
                    <strong>Important Note:</strong> Consult with Dr. Yousuf Memon to determine if ozone treatment is appropriate for your specific condition. While generally considered safe when administered properly, ozone therapy may not be suitable for everyone.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-6 space-y-6">
              {/* Quick Facts */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Treatment At a Glance</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Procedure Time</h4>
                    <p className="text-gray-600">15-45 minutes (varies by treatment)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Discomfort Level</h4>
                    <p className="text-gray-600">Minimal to none</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Recovery Time</h4>
                    <p className="text-gray-600">Immediate return to normal activities</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Results Duration</h4>
                    <p className="text-gray-600">Varies; maintenance sessions may be needed</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Cost in Pakistan</h4>
                    <p className="text-gray-600">Affordable compared to surgical alternatives</p>
                  </div>
                </div>
              </div>

              {/* Clinic Locations */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Clinic Locations</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-gray-700">Karachi</h4>
                    <p className="text-gray-600 text-sm">Orthopaedic and Medical Institute (OMI)</p>
                    <p className="text-gray-600 text-sm">Depot Lines, Muhammad Ali Jinnah Rd Saddar</p>
                    <p className="text-gray-600 text-sm">Mon & Thu | 2:00 PM - 4:00 PM</p>
                    <a href="#" className="text-blue-600 text-sm hover:underline">View on Map →</a>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-gray-700">Lahore</h4>
                    <p className="text-gray-600 text-sm">Ihsan Mumtaz Hospital</p>
                    <p className="text-gray-600 text-sm">71-E Jauhar Town Maulana Shaukat Ali Road</p>
                    <a href="#" className="text-blue-600 text-sm hover:underline">View on Map →</a>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-gray-700">Hyderabad</h4>
                    <p className="text-gray-600 text-sm">Isra Hospital, Cath Lab Cardiology</p>
                    <p className="text-gray-600 text-sm">Fri | 12:00 PM - 2:00 PM</p>
                    <a href="#" className="text-blue-600 text-sm hover:underline">View on Map →</a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Rahim Yar Khan</h4>
                    <p className="text-gray-600 text-sm">Diagnostic Interventional Radiology & Cardiac Center</p>
                    <p className="text-gray-600 text-sm">Near Govt. Technical College, Thali Road</p>
                    <p className="text-gray-600 text-sm">Sat | 12:00 PM - 5:00 PM</p>
                    <a href="#" className="text-blue-600 text-sm hover:underline">View on Map →</a>
                  </div>
                </div>
              </div>

              {/* Ideal Candidates */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Ideal Candidates in Pakistan</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Chronic dry eye sufferers in Pakistan's dry climate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Patients with recurrent sinus infections common in urban areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Those seeking non-surgical facial rejuvenation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Individuals preferring natural treatment approaches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Generally healthy adults (consultation required)</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Ready to Experience Ozone Therapy?</h3>
                <p className="mb-6 opacity-90">Dr. Yousuf Memon can evaluate if ozone treatment is right for your needs and create a personalized plan.</p>
                <button className="w-full bg-white text-blue-600 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition duration-300">
                  Schedule Your Consultation
                </button>
                <p className="text-sm mt-4 opacity-80 text-center">or call us at <a href="tel:+923367889143" className="underline">+92 336-7889143</a></p>
                <p className="text-sm mt-2 opacity-80 text-center"><a href="https://wa.me/923199246838" className="underline">Chat on WhatsApp</a></p>
              </div>

              {/* FAQ Preview */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Common Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Is ozone therapy painful?</h4>
                    <p className="text-gray-600 text-sm mt-1">Most Pakistan patients report minimal discomfort, often described as mild pressure or warmth.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">How many sessions will I need?</h4>
                    <p className="text-gray-600 text-sm mt-1">Typically 4-8 sessions depending on your condition and response.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Are there any side effects?</h4>
                    <p className="text-gray-600 text-sm mt-1">Possible mild irritation that resolves quickly. Serious side effects are rare when administered properly.</p>
                  </div>
                </div>
                <a href="#" className="text-blue-600 hover:underline text-sm mt-4 inline-block">View all FAQs →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default OzoneDryEyesSinusesWrinkles;