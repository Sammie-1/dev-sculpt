import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute inset-0 z-[1]">
          <Image 
            src="/background.jpg" 
            alt="" 
            fill
            priority
            className="object-cover object-center"
            quality={90}
            sizes="100vw"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-[#1316b8] z-[2] opacity-30"></div>
      </div>
      
      <div className="relative z-[4] max-w-[1150px] w-full px-6 md:px-8 lg:px-12 py-6 md:py-8 flex flex-col items-center text-center gap-4 md:gap-6 lg:gap-8">
        <h1 className="font-lato font-[800] text-3xl sm:text-4xl md:text-5xl lg:text-[80px] leading-tight text-white text-center m-0 max-w-full">
          <span className="block whitespace-nowrap">Shaping Digital Ideas into</span>
          <span className="block text-[#daff35] relative inline-block">
            Scalable Solutions
              <Image 
                src="/vector-2.png" 
                alt="" 
                width={300}
                height={18}
                className="absolute bottom-[-15px] sm:bottom-[-20px] md:bottom-[-25px] lg:bottom-[-35px] left-[60%] sm:left-[65%] md:left-[70%] lg:left-[74%] w-[180px] sm:w-[220px] md:w-[260px] lg:w-auto h-auto max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[300px]"
                unoptimized
              />
          </span>
        </h1>
        
        <p className="font-lato font-[600] text-base sm:text-lg md:text-xl lg:text-[20px] leading-[1.46] text-white text-center max-w-[1150px] m-0 px-4 md:px-6">
          At Dev Sculpt Studio, we craft innovative software solutions tailored to empower businesses and individuals.{' '}
          From concept to execution, we sculpt technology into tools that drive growth and efficiency.
        </p>
        
        <button className="bg-[#daff35] text-black border-none rounded-[11px] px-6 py-4 md:px-10 md:py-5 lg:px-[200px] lg:py-[16px] font-lato font-bold text-base md:text-lg lg:text-[20px] cursor-pointer transition-all duration-300 whitespace-nowrap mt-2 hover:bg-[#c4ef00] hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(218,255,53,0.3)] active:translate-y-0">
          Let's Build Together
        </button>
      </div>
    </section>
  );
};

export default Hero;
