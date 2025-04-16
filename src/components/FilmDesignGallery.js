import React from 'react';
import { motion } from 'framer-motion';

const FilmDesignGallery = () => {
  // All images collection
  const designImages = [
    { id: 1, src: "/v1/public/images/designs/home.png", alt: "Clinic Appointment System - Home" },
    { id: 2, src: "/images/designs/patientdashboard.png", alt: "Clinic Appointment System - Booking" },
    { id: 3, src: "/images/designs/doctordashboard.png", alt: "Clinic Appointment System - Dashboard" },
    { id: 4, src: "/images/designs/filmframes-1.jpg", alt: "FilmFrames - Homepage" },
    { id: 5, src: "/images/designs/filmframes-2.jpg", alt: "FilmFrames - Gallery" },
    { id: 6, src: "/images/designs/filmframes-3.jpg", alt: "FilmFrames - Dashboard" },
    { id: 7, src: "/images/designs/mobile-app-1.jpg", alt: "Mobile App - Onboarding" },
    { id: 8, src: "/images/designs/mobile-app-2.jpg", alt: "Mobile App - Discovery" },
    { id: 9, src: "/images/designs/mobile-app-3.jpg", alt: "Mobile App - Profile" },
    { id: 10, src: "/images/designs/web-ui-1.jpg", alt: "Web UI Design" },
    { id: 11, src: "/images/designs/web-ui-2.jpg", alt: "Web UI Components" },
    { id: 12, src: "/images/designs/web-ui-3.jpg", alt: "Web UI Dashboard" }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Design Collection</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {designImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 truncate">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmDesignGallery;
