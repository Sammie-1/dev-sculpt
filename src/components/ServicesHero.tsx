'use client';

import Image from 'next/image';

const ServicesHero = () => {
  const heroBackgroundImage = '/assets/services-hero.png';
  const heroTitle = 'Our Services';
  const heroDescription = 'Comprehensive software development solutions tailored to transform your business and drive digital innovation.';
  const overlayColor = '#000000';
  const overlayOpacity = 0.5;

  return (
    <section className="relative w-full min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] lg:min-h-[55vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 left-0 right-0 w-full" aria-hidden="true">
        <div className="absolute inset-0">
          <Image 
            src={heroBackgroundImage} 
            alt="Services background" 
            fill
            priority
            className="object-cover object-center"
            quality={90}
            sizes="100vw"
          />
        </div>
        
        <div 
          className="absolute inset-0 z-[1]" 
          style={{ 
            backgroundColor: overlayColor, 
            opacity: overlayOpacity 
          }}
        />
      </div>
      
      {heroTitle && (
        <div className="relative z-[4] max-w-[1150px] w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 flex flex-col items-center text-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
          <h1 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[65px] leading-tight sm:leading-normal text-white text-center m-0 max-w-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] px-2">
            {heroTitle}
          </h1>
          
          {heroDescription && (
            <p className="font-lato font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] leading-[1.4] sm:leading-[1.5] md:leading-[1.55] lg:leading-[1.6] text-white text-center max-w-[900px] mx-auto m-0 px-4 sm:px-6 md:px-8 lg:px-0 drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]">
              {heroDescription}
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default ServicesHero;

