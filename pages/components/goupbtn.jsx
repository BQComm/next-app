import React, { useState, useEffect } from 'react';

function GoUpBtn() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const isVisible = scrollY > 300;
    setIsVisible(isVisible);
  };

  const handleGoUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`fixed bottom-4 right-4 p-3 rounded-full bg-blue-500 hover:bg-blue-800 text-white shadow-lg transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleGoUp}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

export default GoUpBtn;
