'use client';

import Image from 'next/image';

const ServicesHero = () => {
  const heroBackgroundImage = '/assets/services-hero.png';
  const heroTitle = 'Our Services';
  const heroDescription = 'Comprehensive software development solutions tailored to transform your business and drive digital innovation.';

  return (
    <section className="relative w-full min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] lg:min-h-[55vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 left-0 right-0 w-full" aria-hidden="true">
        <div className="absolute inset-0">
          <Image 
            src={heroBackgroundImage} 
            alt="Services background" 
            fill
            priority
            className="object-cover object-center opacity-25"
            quality={90}
            sizes="100vw"
          />
        </div>
      </div>
      
      {heroTitle && (
        <div className="relative z-[4] max-w-[1150px] w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 flex flex-col items-center text-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
          <h1 className="font-lato font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[65px] xl:text-[65px] leading-normal text-white text-center m-0 max-w-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
            {heroTitle}
          </h1>
          
          {heroDescription && (
            <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] leading-[1.5] sm:leading-[1.55] md:leading-[1.6] text-white text-center max-w-[900px] mx-auto m-0 px-4 sm:px-6 md:px-8 lg:px-0 drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]">
              {heroDescription}
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default ServicesHero;

