// pages/treatments/varicocele-embolization.js
import React from 'react';
import Head from 'next/head';

const VaricoceleEmbolization = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Varicocele Treatment by Dr. Yousuf Memon | Pakistan</title>
        <meta
          name="description"
          content="Dr. Yousuf Memon provides varicocele treatment in Pakistan: Minimally invasive embolization and surgical options for male infertility, scrotal pain, and swelling. Consultation in Karachi, Lahore & Hyderabad."
        />
        <meta
          name="keywords"
          content="varicocele treatment Pakistan, varicocele embolization Karachi, male infertility Pakistan, testicular vein treatment Hyderabad, varicocelectomy Lahore, Dr Yousuf Memon"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.yourdomain.com/treatments/varicocele-embolization" />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Varicocele Treatment in Pakistan</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Dr. Yousuf Memon provides expert care with minimally invasive embolization and surgical solutions for scrotal pain, swelling, and male infertility — available in Karachi, Lahore & Hyderabad.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Column */}
          <div className="lg:w-2/3 space-y-12">

            {/* About Section */}
            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Varicocele?</h2>
              <p className="text-gray-700 mb-4">
                A <strong>varicocele</strong> is an enlargement of veins inside the scrotum, similar to varicose veins in the legs. This condition may cause male infertility, testicular pain, or reduced sperm production.
              </p>
              <p className="text-gray-700">
                <strong>Dr. Yousuf Memon</strong> provides effective treatment in Pakistan, including <strong>minimally invasive embolization</strong> and <strong>surgical varicocelectomy</strong>, performed with advanced techniques for maximum safety and faster recovery.
              </p>
            </section>

            {/* Symptoms Section */}
            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Common Symptoms</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Dull or sharp scrotal pain</li>
                <li>Swelling or enlarged veins in the testicles</li>
                <li>Discomfort that worsens with standing or activity</li>
                <li>Reduced sperm quality affecting fertility</li>
                <li>Heaviness or dragging sensation in the scrotum</li>
              </ul>
            </section>

            {/* Causes Section */}
            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Causes of Varicocele</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Malfunctioning valves in the scrotal veins</li>
                <li>Genetics or family history of varicose veins</li>
                <li>Hormonal imbalance affecting testicular blood flow</li>
                <li>Poor circulation or increased abdominal pressure</li>
              </ul>
            </section>

            {/* Treatment Options */}
            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Treatment Options by Dr. Yousuf Memon</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Surgical Varicocelectomy</h3>
              <p className="text-gray-700 mb-4">
                Performed under anesthesia, surgical varicocelectomy by Dr. Yousuf Memon involves tying off affected veins to restore normal blood flow. This method offers long-term results and ensures careful handling of surrounding tissues.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Minimally Invasive Embolization</h3>
              <p className="text-gray-700 mb-4">
                Dr. Yousuf Memon performs embolization using a catheter to block refluxing veins. This minimally invasive procedure provides faster recovery, minimal pain, same-day treatment, and excellent success rates.
              </p>
            </section>

            {/* Fertility Section */}
            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Varicocele and Male Fertility</h2>
              <p className="text-gray-700">
                Varicocele is a leading cause of male infertility in Pakistan. Treatments by Dr. Yousuf Memon can significantly improve sperm count, motility, and overall fertility. Early consultation ensures the best possible outcomes for patients seeking fatherhood.
              </p>
            </section>

            {/* Doctor Expertise Section */}
            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Dr. Yousuf Memon?</h2>
              <p className="text-gray-700 mb-4">
                Dr. Yousuf Memon is one of Pakistan's leading specialists in interventional radiology and urology. With years of experience in minimally invasive procedures, he ensures personalized care, precision, and high success rates.
              </p>
              <p className="text-gray-700 mb-2">
                Treatment is available in Karachi, Lahore, Islamabad, Rawalpindi, and Hyderabad. Dr. Memon emphasizes comfort, safety, and effective recovery for all his patients.
              </p>
              <p className="text-gray-700">
                Patients can expect comprehensive consultation, advanced diagnostics, and evidence-based treatment plans tailored to their individual needs.
              </p>
            </section>

          </div>

          {/* Sidebar / CTA */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Book Your Consultation with Dr. Yousuf Memon</h3>
              <p className="mb-6 opacity-90">
                Schedule an appointment to discuss the best varicocele treatment tailored for you.
              </p>
              <button className="w-full bg-white text-teal-700 font-semibold py-3 px-4 rounded-lg hover:bg-teal-50 transition duration-300">
                Book Appointment
              </button>
              <p className="text-sm mt-4 opacity-90 text-center">
                or call <a href="tel:+923367889143" className="underline">+92 336-7889143</a>
              </p>
              <p className="text-sm mt-2 opacity-90 text-center">
                <a href="https://wa.me/923199246838" className="underline">Chat on WhatsApp</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VaricoceleEmbolization;
