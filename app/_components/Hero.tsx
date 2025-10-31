import Image from 'next/image';
import Navbar from './Navbar';

export default function HeroSection() {
  return (
    <section className="relative m-2 h-screen overflow-hidden rounded">
      <div className="absolute inset-0 rounded">
        <Image
          src="/images/b1.webp"
          alt="Hero background showcasing travel destination"
          fill
          priority
          className="object-cover rounded"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/30 rounded"></div>
         <div className="absolute top-0 left-0 right-0 z-20">
      <Navbar />
    </div>
      </div>
     {/* Left Side -  Info */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 lg:p-10">
        <div className="mt-auto max-w-2xl">
          <button className="mb-6 px-6 py-2 bg-[#717475] backdrop-blur-lg border border-transparent rounded-4xl text-white text-sm font-medium">
            Destination
          </button>
          <h1 className="text-white text-4xl md:text-5xl lg:text-4xl leading-tight mb-4">
            Exploring the Wonders of Hiking
          </h1>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
            An iconic landmarks,this post unveils the secrets <br/>that make this destination a travelers paradise.
          </p>
          <div className="flex items-center space-x-1" role="tablist" aria-label="Carousel navigation">
            <button
              className="w-3 h-3 rounded-full bg-white"
              aria-label="Slide 1"
              aria-selected="true"
              role="tab"
            ></button>
            <button
              className="w-3 h-3 rounded-full border-2 border-white bg-transparent"
              aria-label="Slide 2"
              aria-selected="false"
              role="tab"
            ></button>
            <button
              className="w-3 h-3 rounded-full border-2 border-white bg-transparent"
              aria-label="Slide 3"
              aria-selected="false"
              role="tab"
            ></button>
          </div>
        </div>

       <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-23 lg:right-8">
          <div className="flex flex-col space-y-2">
            {/* Profile Icon and Name - Same Row */}
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-1 h-1 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <span className="text-white font-medium text-sm whitespace-nowrap">Theodore Reginald</span>
            </div>
            
            {/* Date and Time - Next Row */}
            <div className="flex items-center space-x-2 text-white/80 text-xs pl-0">
              <time dateTime="2010-01-24">24 Jan 2010</time>
              <span className="w-1 h-1 rounded-full bg-white"></span>
              <span>10 minutes ago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}