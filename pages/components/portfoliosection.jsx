
import React from 'react';


function PortfolioSection() {
  return (
    <section id="portfolio" className="body-font">
    <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
        <h1 className="text-5xl lg:text-4xl font-bold text-center mb-8">My Portfolio</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor tortor a diam placerat cursus. Suspendisse nec metus eu mauris faucibus eleifend.</p>
        </div>
        <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative"> 
             <a href="#">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://picsum.photos/id/237/601/361"></img>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Title 1</h1>
                    <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor tortor a diam placerat cursus. Suspendisse nec metus eu mauris faucibus eleifend.</p>
                </div>
             </a>
            </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
            <a href="#">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://picsum.photos/seed/picsum/601/361"></img>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Title 2</h1>
                    <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor tortor a diam placerat cursus. Suspendisse nec metus eu mauris faucibus eleifend.</p>
                </div>
            </a>
            </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
             <a href="#">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://picsum.photos/id/3/601/361"></img>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Title 3</h1>
                    <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor tortor a diam placerat cursus. Suspendisse nec metus eu mauris faucibus eleifend.</p>
                </div>
             </a>
            </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
             <a href="">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://picsum.photos/id/14/601/361"></img>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Title 4</h1>
                    <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor tortor a diam placerat cursus. Suspendisse nec metus eu mauris faucibus eleifend.</p>
                </div>
             </a>
            </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
             <a href="#">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://picsum.photos/id/22/601/361"></img>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Title 5</h1>
                    <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor tortor a diam placerat cursus. Suspendisse nec metus eu mauris faucibus eleifend.</p>
                </div>
             </a>
            </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
             <a href="#">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://picsum.photos/id/43/601/361"></img>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Title 6</h1>
                    <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor tortor a diam placerat cursus. Suspendisse nec metus eu mauris faucibus eleifend.</p>
                </div>
             </a>
            </div>
        </div>
        </div>
    </div>
    </section>
    );
}

export default PortfolioSection;