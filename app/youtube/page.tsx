'use client'
import Head from 'next/head';
import { useState } from 'react';

type Video = {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
};

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Corrected video data with proper YouTube IDs
  const videos: Video[] = [
    {
      id: '1',
      title: 'Peshawar KPK Mein Aurton Ki Reham Me Rasoli Ka Jadeed Ilaj Shuro',
      description: 'Peshawar KPK mein aurton ke liye reham ki rasoli ka naya aur jadid, minimally invasive ilaj ab dastiyab.',
      youtubeId: '_HrEqJ2qEmk'
    },
    {
      id: '2',
      title: 'Reham Me Rasoli Ka Bagair Operation Ilaaj Ab South Punjab Pakistan Mein Bhi',
      description: 'South Punjab mein reham ki rasoli ka bagair operation ilaj, interventional radiology ke zariye.',
      youtubeId: 'GAiChlgDhq8'
    },
    {
      id: '3',
      title: 'Manly & Womanly Diseases & Treatments',
      description: 'Mardon aur khawateen ki aam bemariyon aur unke ilaj ke hawale se tafseeli maloomat.',
      youtubeId: 'Qsg-2npY8kA'
    },
    {
      id: '4',
      title: 'Q&A Session: Common Questions About Heart Health',
      description: 'Dil ki sehat aur cardiovascular bemariyon se mutaliq aam sawalon ke jawabat Dr. Memon se janiye.',
      youtubeId: '6PHJh3-Mwgc'
    },
    {
      id: '6',
      title: 'Erectile Dysfunction Due to Venous Leak and It’s Cure',
      description: 'Venous leak ki wajah se hone wali erectile dysfunction ka jadid ilaj aur uski wazahat.',
      youtubeId: 'BdPuuSfp8gQ'
    }
  ];

  const playVideo = (videoId: string) => {
    setActiveVideo(videoId);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Head>
        <title>Videos - Dr. Yousuf Memon</title>
        <meta name="description" content="Medical videos by Dr. Yousuf Memon on cardiology and interventional radiology" />
      </Head>

      <header className="bg-teal-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <div className="bg-white p-2 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Dr. Yousuf Memon</h1>
             
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-800 mb-4">Dr Yousuf YouTube</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch  videos by Dr. Yousuf Memon on cardiology, interventional radiology, and patient care.
          </p>
        </div>

        {/* Featured Video Player */}
        {activeVideo && (
          <div className="mb-10">
            <div className="relative pt-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map(video => (
            <div 
              key={video.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => playVideo(video.youtubeId)}
            >
              <div className="relative pt-[56.25%] h-0">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                  alt={video.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-teal-800">{video.title}</h3>
                <p className="text-gray-600 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://youtube.com/@Dr.YousufMemon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Visit YouTube Channel
          </a>
        </div>
      </main>
    </div>
  );
}
