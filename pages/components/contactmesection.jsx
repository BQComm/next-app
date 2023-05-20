import React from 'react';

function ContactMeSection() {
  return (
    <section id="contact-me" className="py-16 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-8xl lg:text-7xl font-bold text-center text-white mb-8">Contact Me</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-semibold text-white text-xl mb-2">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold text-white text-xl mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold text-white text-xl mb-2">Message</label>
              <textarea id="message" className="w-full px-4 py-2 border border-gray-300 rounded" rows="4"></textarea>
            </div>
            <button type="submit" className="bg-white text-blue-500  hover:font-bold text-xl font-semibold py-2 px-4 mt-8 rounded shadow">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactMeSection;
