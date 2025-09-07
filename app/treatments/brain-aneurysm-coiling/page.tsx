// pages/treatments/brain-aneurysm-coiling.js
'use client'
import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Activity,
  Stethoscope,
  Syringe,
  Shield,
  HelpCircle,
  Phone,
  MessageCircle,
} from 'lucide-react';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'causes-symptoms', label: 'Causes & Signs' },
  { id: 'procedure', label: 'How Coiling Works' },
  { id: 'expertise', label: 'Dr. Yousuf Memon' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'contact', label: 'Book Consultation' },
];

const BrainAneurysmCoiling = () => {
  const [activeId, setActiveId] = useState('overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0.1 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const faqItems = useMemo(
    () => [
      {
        q: 'Does Brain Aneurysm Coiling completely cure it?',
        a: 'Once the aneurysm is sealed with coils, it is effectively treated. However, regular follow-ups are recommended to ensure long‑term stability.'
      },
      {
        q: 'How long does the procedure take?',
        a: 'Typically 1–3 hours, depending on the aneurysm’s size and location.'
      },
      {
        q: 'Is it painful?',
        a: 'No. It is performed under anesthesia so you do not feel pain during the procedure.'
      },
      {
        q: 'How soon can I return to normal activities?',
        a: 'Most patients in Pakistan resume routine activities within 1–2 weeks (doctor‑advised).' 
      },
      {
        q: 'Is it safer than open surgery?',
        a: 'Yes, especially for deep or delicate aneurysms where traditional surgery carries higher risk.'
      },
    ],
    []
  );

  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 scroll-smooth">
      <Head>
        <title>Brain Aneurysm Coiling in Pakistan | Dr. Yousuf Memon</title>
        <meta
          name="description"
          content="Minimally invasive brain aneurysm coiling treatment in Pakistan. Safe, effective, and performed by Dr. Yousuf Memon – expert in endovascular surgery."
        />
        <meta
          name="keywords"
          content="brain aneurysm treatment Pakistan, brain aneurysm coiling Karachi, brain aneurysm doctor Lahore, minimally invasive brain surgery Pakistan, Dr. Yousuf Memon aneurysm"
        />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              "name": "Brain Aneurysm Coiling",
              "description": "Endovascular brain aneurysm coiling treatment in Pakistan performed by Dr. Yousuf Memon.",
              "provider": {
                "@type": "Physician",
                "name": "Dr. Yousuf Memon",
                "medicalSpecialty": "Interventional Radiology",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Karachi",
                  "addressRegion": "Sindh",
                  "addressCountry": "PK"
                }
              }
            }
          `}
        </script>
      </Head>

      {/* Hero Section (no background image) */}
      <div className="relative bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-20 md:py-24 shadow-lg">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            Brain Aneurysm Coiling in Pakistan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95"
          >
            Safer, minimally invasive care to treat brain aneurysms — performed by Dr. Yousuf Memon.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
           
          </motion.div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-indigo-600 transition">Home</a></li>
            <li><span className="text-gray-400">/</span></li>
            <li><a href="/treatments" className="hover:text-indigo-600 transition">Treatments</a></li>
            <li><span className="text-gray-400">/</span></li>
            <li className="text-indigo-600 font-semibold">Brain Aneurysm Coiling</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sticky Sidebar TOC */}
          <aside className="lg:w-1/4">
            <div className="lg:sticky lg:top-24 rounded-2xl bg-white shadow-md p-5">
              <h3 className="text-sm font-semibold text-gray-900 tracking-wide mb-3">ON THIS PAGE</h3>
              <ul className="space-y-2 text-gray-700">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`block rounded-lg px-3 py-2 transition ${
                        activeId === s.id
                          ? 'bg-indigo-50 text-indigo-700 font-semibold'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Content Cards */}
          <div className="lg:w-3/4 space-y-12">
            {/* Overview */}
            <motion.section
              id="overview"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur rounded-2xl shadow-md p-8 hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-xl bg-indigo-100 text-indigo-700"><Activity className="w-6 h-6" /></div>
                <h2 className="text-3xl font-bold text-gray-900">What is a Brain Aneurysm?</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                A brain aneurysm is a weak, balloon-like bulge in a blood vessel of the brain. Like an overfilled balloon, it can rupture and cause life‑threatening bleeding. Early detection and minimally invasive treatment help prevent complications.
              </p>
            </motion.section>

            {/* Causes & Symptoms */}
            <motion.section
              id="causes-symptoms"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur rounded-2xl shadow-md p-8 hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 rounded-xl bg-purple-100 text-purple-700"><Stethoscope className="w-6 h-6" /></div>
                <h2 className="text-3xl font-bold text-gray-900">Causes & Warning Signs</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-700 mb-3">Common Causes</h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      'High blood pressure damaging arteries',
                      'Atherosclerosis (hardening of blood vessels)',
                      'Genetic weakness or family history',
                      'Trauma or injury',
                      'Rare infections',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-1" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-700 mb-3">Warning Signs</h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      'Sudden severe headache (“worst headache of life”)',
                      'Nausea, vomiting, dizziness',
                      'Blurred or double vision',
                      'Weakness on one side of body',
                      'Loss of consciousness in severe cases',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-1" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Procedure Timeline */}
            <motion.section
              id="procedure"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur rounded-2xl shadow-md p-8 hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-2 rounded-xl bg-indigo-100 text-indigo-700"><Syringe className="w-6 h-6" /></div>
                <h2 className="text-3xl font-bold text-gray-900">How Brain Aneurysm Coiling Works</h2>
              </div>
              <ol className="relative border-s-2 border-indigo-100 pl-6 space-y-8">
                {[
                  'Evaluation – MRI, CT scan, or angiography is done to locate and study the aneurysm.',
                  'Preparation – Patient is given anesthesia and a small incision is made in the groin.',
                  'Catheter Navigation – A thin tube (catheter) is guided through blood vessels to the aneurysm using imaging.',
                  'Coil Placement – Tiny platinum coils are placed inside the aneurysm, causing clotting and sealing it off.',
                  'Monitoring – The patient is observed in ICU for 1–2 days before recovery in a ward.',
                ].map((step, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="relative"
                  >
                    <span className="absolute -left-[37px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-bold shadow">
                      {i + 1}
                    </span>
                    <p className="text-gray-700 leading-relaxed">{step}</p>
                  </motion.li>
                ))}
              </ol>
            </motion.section>

            {/* Expertise */}
            <motion.section
              id="expertise"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur rounded-2xl shadow-md p-8 hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700"><Shield className="w-6 h-6" /></div>
                <h2 className="text-3xl font-bold text-gray-900">Expertise of Dr. Yousuf Memon</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Dr. Yousuf Memon is recognized across Pakistan for expertise in endovascular surgery and interventional radiology. He has successfully performed numerous brain aneurysm coiling procedures, helping patients avoid rupture risks and regain quality of life.
              </p>
              <p className="text-gray-700 leading-relaxed">
                His minimally invasive approach ensures fewer complications, faster recovery, and world‑class standards — right here in Pakistan.
              </p>
            </motion.section>

            {/* FAQs Accordion */}
            <motion.section
              id="faqs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur rounded-2xl shadow-md p-8 hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-xl bg-yellow-100 text-yellow-700"><HelpCircle className="w-6 h-6" /></div>
                <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {faqItems.map((item, i) => (
                  <div key={i} className="py-4">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                      className="w-full flex items-center justify-between text-left"
                      aria-expanded={openFaq === i}
                      aria-controls={`faq-panel-${i}`}
                    >
                      <span className="text-base md:text-lg font-semibold text-gray-900">
                        {item.q}
                      </span>
                      <span className={`ml-4 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${i}`}
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        openFaq === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-gray-700 leading-relaxed pt-3">{item.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* CTA */}
           
          </div>
        </div>
      </div>

      {/* Subtle Footer spacer */}
      <div className="h-4" />
    </div>
  );
};

export default BrainAneurysmCoiling;
