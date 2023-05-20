import React from 'react';

function AboutMeSection() {
    return (  
        <section id="about" className="py-32 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-4xl text-center font-bold mb-9">About Me</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <h3 className="text-3xl lg:text-2xl font-semibold m-5">Subtitle</h3>
              <p className="text-xl mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor tortor a diam placerat cursus. Suspendisse nec metus eu mauris faucibus eleifend.
              </p>
              <p className="text-xl mb-4">
                Vestibulum vel fermentum mauris. Aenean lobortis purus augue, vitae maximus ipsum dignissim eu. Fusce pulvinar leo sit amet eleifend fringilla.
              </p>
              <p className="text-xl mb-4">
                Nulla facilisi. Nam dignissim magna et velit facilisis sagittis. Donec sit amet nunc vel ipsum efficitur iaculis vitae at lorem.
              </p>
              <button className="bg-blue-500 hover:font-bold text-white font-semibold py-2 px-4 rounded shadow my-10">
                Contact Me
              </button>
            </div>
            <div>
              <h3 className="text-3xl lg:text-2xl font-semibold mb-4">These are my skills:</h3>
                <button className="bg-white text-blue-500 font-semibold py-2 px-4 m-2 rounded shadow">Next.js</button>
                <button className="bg-white text-blue-500 font-semibold py-2 px-4 m-2 rounded shadow">React.js</button>
                <button className="bg-white text-blue-500 font-semibold py-2 px-4 m-2 rounded shadow">Javascript</button>
                <button className="bg-white text-blue-500 font-semibold py-2 px-4 m-2 rounded shadow">TailwindCSS</button>
                <button className="bg-white text-blue-500 font-semibold py-2 px-4 m-2 rounded shadow">GIT</button>
                <button className="bg-white text-blue-500 font-semibold py-2 px-4 m-2 rounded shadow">Wordpress</button>
                <button className="bg-white text-blue-500 font-semibold py-2 px-4 m-2 rounded shadow">Shopify</button>
                <button className="bg-white text-blue-500 font-semibold py-2 px-4 m-2 rounded shadow">UX/UI</button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutMeSection;