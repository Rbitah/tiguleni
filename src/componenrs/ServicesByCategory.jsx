import React, { useState, useEffect } from "react";
import services from "./services.json"; 

const ServicesByCategory = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  
  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    updateScreenSize(); 
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const displayedServices = isSmallScreen && !showAll ? services.slice(0, 4) : services;

  return (
    <div className="max-w-4xl mx-auto py-8 lg:py-[100px] lg:mx-[250px]">
      <div className="ml-0 lg:ml-[-185px]">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <div className="bg-red-500 rounded-md h-[50px] w-[27px]"></div>
            <h2 className="mt-3 text-xl font-bold text-red-500">Local Services</h2>
          </div>
        </div>
        <h3 className="text-2xl lg:text-4xl font-bold lg:ml-[400px] mb-6">Services By Categories</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {displayedServices.map((service, index) => (
          <div
            key={index}
            className="border hover:cursor-pointer hover:bg-red-500 border-gray-300 p-4 flex flex-col items-center"
          >
            <div className="text-4xl mb-2">{service.icon}</div>
            <h3 className="text-lg font-medium text-center">{service.name}</h3>
          </div>
        ))}
      </div>

      {isSmallScreen && (
        <div className="flex justify-center mt-4">
          {showAll ? (
            <button
              onClick={() => setShowAll(false)}
              className="bg-red-500 text-white py-2 px-4 rounded-md"
            >
              View Few
            </button>
          ) : (
            <button
              onClick={() => setShowAll(true)}
              className="bg-red-500 text-white py-2 px-4 rounded-md"
            >
              View All
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ServicesByCategory;
