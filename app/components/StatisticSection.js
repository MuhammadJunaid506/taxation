"use client"

import { useEffect, useState } from 'react';

const StatisticsSection = () => {
  const [countAnimation, setCountAnimation] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setCountAnimation(true);
  }, []);

  return (
    <div className="bg-gray-900 py-12 w-full">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
          <div className={`bg-gray-800 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300 ${countAnimation ? 'animate-pulse' : ''}`}>
            <div className="text-4xl font-bold text-gray-200 mb-2">120+</div>
            <div className="text-lg text-gray-300">Team Members</div>
          </div>
          <div className={`bg-gray-800 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300 ${countAnimation ? 'animate-pulse' : ''}`}>
            <div className="text-4xl font-bold text-gray-200 mb-2">3500+</div>
            <div className="text-lg text-gray-300">Clients Using Our Services</div>
          </div>
          <div className={`bg-gray-800 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300 ${countAnimation ? 'animate-pulse' : ''}`}>
            <div className="text-4xl font-bold text-gray-200 mb-2">6</div>
            <div className="text-lg text-gray-300">Locations</div>
          </div>
          <div className={`bg-gray-800 rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300 ${countAnimation ? 'animate-pulse' : ''}`}>
            <div className="text-4xl font-bold text-gray-200 mb-2">1</div>
            <div className="text-lg text-gray-300">Team</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
