// pages/gallery.js
'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleItems, setVisibleItems] = useState(12);

  // Gallery items data
  const galleryItems = [
    { id: 1, type: 'image', src: '/gallery/treatment-room.jpg', caption: 'State-of-the-art treatment facility', category: 'facility' },
    { id: 2, type: 'image', src: '/gallery/doctor-patient.jpg', caption: 'Specialist consultation', category: 'treatments' },
    { id: 3, type: 'image', src: '/gallery/before-after.jpg', caption: 'Visible results after 3 sessions', category: 'treatments' },
    { id: 4, type: 'video', src: '/gallery/treatment-process.mp4', caption: 'Ozone therapy procedure', category: 'treatments' },
    { id: 5, type: 'image', src: '/gallery/happy-patient.jpg', caption: 'Successful treatment results', category: 'treatments' },
    { id: 6, type: 'image', src: '/gallery/equipment.jpg', caption: 'Medical-grade ozone generators', category: 'facility' },
    { id: 7, type: 'image', src: '/gallery/team.jpg', caption: 'Certified therapy specialists', category: 'facility' },
    { id: 8, type: 'video', src: '/gallery/testimonial.mp4', caption: 'Patient experience', category: 'treatments' },
    { id: 9, type: 'image', src: '/gallery/facility.jpg', caption: 'Sterile treatment environment', category: 'facility' },
    { id: 10, type: 'image', src: '/gallery/eye-treatment.jpg', caption: 'Dry eye treatment', category: 'treatments' },
    { id: 11, type: 'image', src: '/gallery/sinus-treatment.jpg', caption: 'Chronic sinusitis treatment', category: 'treatments' },
    { id: 12, type: 'video', src: '/gallery/facial.mp4', caption: 'Skin rejuvenation therapy', category: 'treatments' },
    { id: 13, type: 'image', src: '/gallery/certificates.jpg', caption: 'Medical accreditations', category: 'facility' },
    { id: 14, type: 'image', src: '/gallery/waiting-area.jpg', caption: 'Comfortable waiting area', category: 'facility' },
    { id: 15, type: 'image', src: '/gallery/technology.jpg', caption: 'Precise ozone delivery', category: 'facility' },
    { id: 16, type: 'image', src: '/gallery/consultation.jpg', caption: 'Detailed consultation', category: 'treatments' },
    { id: 17, type: 'image', src: '/gallery/results.jpg', caption: 'Clinical results', category: 'treatments' },
    { id: 18, type: 'image', src: '/gallery/relaxing.jpg', caption: 'Relaxing environment', category: 'facility' },
  ];

  // Filter items based on active filter
  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'images') return item.type === 'image';
    if (activeFilter === 'videos') return item.type === 'video';
    return item.category === activeFilter;
  });

  // Items to display with load more functionality
  const itemsToShow = filteredItems.slice(0, visibleItems);

  // Handle load more
  const loadMore = () => {
    setVisibleItems(prev => prev + 6);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Gallery | Our Clinic Name</title>
        <meta name="description" content="View our treatment facility, team, and patient results through our gallery" />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Clinic Gallery</h1>
          <p className="text-xl md:text-2xl">Explore our facility, treatments, and patient experiences</p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><span>/</span></li>
            <li className="text-blue-600">Gallery</li>
          </ol>
        </nav>
      </div>

      {/* Gallery Filters */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-wrap justify-center gap-3">
          <button 
            onClick={() => {
              setActiveFilter('all');
              setVisibleItems(12);
            }}
            className={`px-4 py-2 rounded-full transition ${
              activeFilter === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white border border-gray-300 hover:bg-gray-100'
            }`}
          >
            All Media
          </button>
          <button 
            onClick={() => {
              setActiveFilter('images');
              setVisibleItems(12);
            }}
            className={`px-4 py-2 rounded-full transition ${
              activeFilter === 'images' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white border border-gray-300 hover:bg-gray-100'
            }`}
          >
            Images
          </button>
          <button 
            onClick={() => {
              setActiveFilter('videos');
              setVisibleItems(12);
            }}
            className={`px-4 py-2 rounded-full transition ${
              activeFilter === 'videos' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white border border-gray-300 hover:bg-gray-100'
            }`}
          >
            Videos
          </button>
          <button 
            onClick={() => {
              setActiveFilter('facility');
              setVisibleItems(12);
            }}
            className={`px-4 py-2 rounded-full transition ${
              activeFilter === 'facility' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white border border-gray-300 hover:bg-gray-100'
            }`}
          >
            Facility
          </button>
          <button 
            onClick={() => {
              setActiveFilter('treatments');
              setVisibleItems(12);
            }}
            className={`px-4 py-2 rounded-full transition ${
              activeFilter === 'treatments' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white border border-gray-300 hover:bg-gray-100'
            }`}
          >
            Treatments
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-6 py-8">
        {itemsToShow.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {itemsToShow.map((item) => (
              <div 
                key={item.id} 
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="aspect-w-4 aspect-h-3 bg-gray-200 relative">
                  {item.type === 'image' ? (
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      className="object-cover w-full h-full transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <video 
                        src={item.src}
                        className="object-cover w-full h-full"
                        muted
                        loop
                        playsInline
                        autoPlay
                      />
                    </div>
                  )}
                </div>
                
                {/* Caption Overlay - Always visible but more prominent on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                    <p className="font-medium text-sm sm:text-base">{item.caption}</p>
                  </div>
                </div>
                
                {/* Media Type Indicator */}
                <div className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-2">
                  {item.type === 'image' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found for this filter</p>
          </div>
        )}
      </div>

      {/* Load More Button */}
      {visibleItems < filteredItems.length && (
        <div className="container mx-auto px-6 py-12 text-center">
          <button 
            onClick={loadMore}
            className="px-8 py-3 bg-white border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition font-medium"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;