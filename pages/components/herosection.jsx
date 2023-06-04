import React from 'react';
import Image from 'next/image';

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <h1 className="text-6xl lg:text-6xl font-bold mb-4">Welcome to the Hero Section</h1>
          <p className="text-lg sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="bg-white text-blue-500 font-semibold hover:font-bold py-2 px-4 mt-4 rounded shadow">
            Get Started
          </button>
        </div>
        <div className="flex justify-center">
        <Image src='/profile.png' alt="Profile_pic" width={350} height={350} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
