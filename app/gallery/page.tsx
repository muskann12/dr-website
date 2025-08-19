// pages/gallery.tsx
'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FiX, FiChevronLeft, FiChevronRight, FiDownload } from 'react-icons/fi';

const Gallery = () => {
  const [visibleItems, setVisibleItems] = useState(12);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 13 images from /gallery/event1.jpeg to /gallery/event13.jpeg
  const galleryItems = Array.from({ length: 13 }, (_, i) => ({
    id: i + 1,
    src: `/gallery/event${i + 1}.jpeg`,
  }));

  const itemsToShow = galleryItems.slice(0, visibleItems);

  const loadMore = () => setVisibleItems(prev => prev + 6);

  const openImage = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentIndex(index);
  };

  const navigate = (direction: 'prev' | 'next') => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    } else {
      newIndex = (currentIndex + 1) % galleryItems.length;
    }
    setSelectedImage(galleryItems[newIndex].src);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Gallery | Dr. Yousuf</title>
        <meta name="description" content="Professional gallery of Dr. Yousuf" />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-24">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dr. Yousuf Gallery</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">Capturing professional excellence and memorable moments</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {itemsToShow.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => openImage(item.src, index)}
            >
              <div className="aspect-w-4 aspect-h-3 relative bg-gray-100">
                <Image
                  src={item.src}
                  alt="Professional moment"
                  fill
                  className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      {visibleItems < galleryItems.length && (
        <div className="container mx-auto px-6 py-8 text-center">
          <button
            onClick={loadMore}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 font-medium flex items-center mx-auto shadow-md hover:shadow-lg"
          >
            Load More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl p-2 hover:bg-white/10 rounded-full transition"
          >
            <FiX size={28} />
          </button>

          <button
            onClick={() => navigate('prev')}
            className="absolute left-6 text-white p-3 hover:bg-white/10 rounded-full transition z-10"
          >
            <FiChevronLeft size={32} />
          </button>

          <div className="relative max-w-6xl w-full max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Selected"
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-lg"
              priority
            />
          </div>

          <button
            onClick={() => navigate('next')}
            className="absolute right-6 text-white p-3 hover:bg-white/10 rounded-full transition z-10"
          >
            <FiChevronRight size={32} />
          </button>

          <a 
            href={selectedImage} 
            download 
            className="absolute bottom-6 right-6 bg-white/90 hover:bg-white text-blue-900 p-3 rounded-full shadow-lg transition"
          >
            <FiDownload size={24} />
          </a>
        </div>
      )}
    </div>
  );
};

export default Gallery;