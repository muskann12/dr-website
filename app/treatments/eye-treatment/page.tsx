// pages/treatments/ozone-dry-eyes-sinuses-wrinkles.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const OzoneDryEyesSinusesWrinkles = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Ozone Therapy for Dry Eyes, Sinuses & Wrinkles | Your Clinic Name</title>
        <meta name="description" content="Ozone treatment for dry eye relief, chronic sinus issues, and facial rejuvenation. Reduce inflammation and improve appearance naturally." />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ozone Therapy for Dry Eyes, Sinuses & Wrinkles</h1>
          <p className="text-xl md:text-2xl">Natural solutions for eye comfort, sinus relief, and youthful skin</p>
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
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">About Ozone Therapy</h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-6">
                      Ozone therapy is a versatile treatment that uses medical-grade ozone (O₃) to address various conditions. For dry eyes, it can reduce inflammation and improve tear quality. For sinuses, it helps combat infections and reduce inflammation. For facial wrinkles, it stimulates collagen production for a more youthful appearance.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">How It Works</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Reduces inflammation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Fights infections</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>Stimulates healing</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Treatment Areas</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span>Ocular surface (eyes)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span>Sinus cavities</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-indigo-600 mr-2">•</span>
                            <span>Facial skin</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 relative h-64">
                    <Image 
                      src="/images/ozone-multi-treatment.jpg" 
                      alt="Ozone therapy for eyes, sinuses and face" 
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Dry Eyes Section */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Ozone for Dry Eyes</h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-6">
                      Dry eye syndrome occurs when eyes don't produce enough tears or tears evaporate too quickly. Ozone therapy offers a potential solution by addressing inflammation and improving ocular surface health.
                    </p>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Procedure</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Eye area is cleaned and numbing drops may be applied</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Ozone is applied topically or through controlled gas</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Treatment takes about 15-20 minutes</span>
                        </li>
                      </ul>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Benefits</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Reduces dry eye symptoms</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Improves tear quality</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Non-invasive treatment</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-2">Considerations</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span>Possible mild irritation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span>May require multiple sessions</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span>Results vary by individual</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 relative h-64">
                    <Image 
                      src="/images/ozone-dry-eyes.jpg" 
                      alt="Ozone treatment for dry eyes" 
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Sinuses Section */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Ozone for Sinus Issues</h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-6">
                      Chronic sinusitis can be debilitating. Ozone therapy helps by reducing inflammation and fighting infections in the sinus cavities, offering relief when traditional treatments fail.
                    </p>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Procedure</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Nasal passages are prepared for treatment</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Ozone administered via nasal insufflation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Session lasts about 20-30 minutes</span>
                        </li>
                      </ul>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Benefits</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Reduces sinus inflammation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Fights bacterial/viral infections</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>May reduce antibiotic dependence</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-2">Considerations</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span>Temporary nasal fullness</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span>Possible mild irritation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span>Multiple sessions often needed</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 relative h-64">
                    <Image 
                      src="/images/ozone-sinus-treatment.jpg" 
                      alt="Ozone treatment for sinuses" 
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Wrinkles Section */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Ozone for Facial Wrinkles</h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-6">
                      Ozone therapy stimulates collagen production and improves skin elasticity, offering a non-invasive approach to reducing facial wrinkles and improving skin texture.
                    </p>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Procedure</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Facial skin is cleaned and prepared</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Ozone applied via oils, gas, or creams</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>Treatment takes 30-45 minutes</span>
                        </li>
                      </ul>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Benefits</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Reduces fine lines and wrinkles</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Improves skin texture and tone</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Stimulates collagen production</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-2">Considerations</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span>Temporary redness possible</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span>Multiple sessions recommended</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span>Results develop gradually</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 relative h-64">
                    <Image 
                      src="/images/ozone-facial-treatment.jpg" 
                      alt="Ozone treatment for facial wrinkles" 
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Summary Section */}
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Summary</h2>
                <p className="text-gray-700 mb-6">
                  Ozone treatment shows promise for dry eyes, sinus issues, and facial wrinkles through its anti-inflammatory, antimicrobial, and tissue-repair stimulating properties. While many patients report positive outcomes, results can vary and more research is needed to fully establish efficacy.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-yellow-700">
                    <strong>Note:</strong> Consult with a healthcare provider to determine if ozone treatment is appropriate for your specific condition and to understand potential benefits and risks.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-6 space-y-6">
              {/* Quick Facts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Treatment At a Glance</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Procedure Time</h4>
                    <p className="text-gray-600">15-45 minutes (varies by treatment)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Anesthesia</h4>
                    <p className="text-gray-600">Topical or none</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Recovery Time</h4>
                    <p className="text-gray-600">Minimal to none</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Results Duration</h4>
                    <p className="text-gray-600">Varies; may require maintenance</p>
                  </div>
                </div>
              </div>

              {/* Ideal Candidates */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Ideal Candidates</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Chronic dry eye sufferers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Those with recurrent sinusitis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Seeking non-surgical facial rejuvenation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Wanting to reduce medication dependence</span>
                  </li>
                </ul>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Related Treatments</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">PRP for Dry Eyes</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Sinus Irrigation Therapy</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Medical Facials</a>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Interested in Ozone Therapy?</h3>
                <p className="text-gray-700 mb-6">Our specialists can evaluate if ozone treatment is right for your needs.</p>
                <button className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OzoneDryEyesSinusesWrinkles;