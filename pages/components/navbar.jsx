import React from 'react';

function NavBar() {
  return (
<nav className="bg-white sticky top-0 z-50">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between">

      <div className="flex space-x-4">
        {/*logo*/}
        <div>
          <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
            <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span className="font-bold">Welcome to my site!</span>
          </a>
        </div>

        {/*primary nav*/}
        <div className="hidden md:flex items-center space-x-1">
          <a href="#about" className="py-5 px-3 text-gray-700 transition:delay-75 duration-300 ease-in-out hover:font-bold">About Me</a>
          <a href="#portfolio" className="py-5 px-3 text-gray-700 transition:delay-75 duration-300 ease-in-out hover:font-bold">Portfolio</a>
          <a href="#contact-me" className="py-5 px-3 text-gray-700 transition:delay-75 duration-300 ease-in-out hover:font-bold">Contact Me</a>
        </div>
      </div>

    </div>
  </div>

</nav>
  );
}



export default NavBar;