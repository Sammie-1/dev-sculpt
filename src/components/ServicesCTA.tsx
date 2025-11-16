'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ServicesCTA = () => {
  const servicesCTASection = useScrollAnimation();

  return (
    <section 
      ref={servicesCTASection.ref}
      className={`w-full bg-[#1316b8] py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 scroll-animate ${servicesCTASection.isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-[1728px] mx-auto flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
        <div className="text-center flex flex-col gap-3 sm:gap-4 md:gap-6">
          <h2 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-tight sm:leading-normal text-white m-0 px-2">
            Ready to Start Your Project?
          </h2>
          <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-[24px] leading-[28px] sm:leading-[35px] text-white text-center max-w-4xl mx-auto m-0 px-2">
            Let's discuss your requirements and find the perfect solution for your business
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center justify-center w-full max-w-[943px]">
          <button className="bg-white text-[#1316b8] font-lato font-semibold text-base sm:text-lg md:text-xl lg:text-[24px] leading-[28px] sm:leading-[35px] rounded-[11px] px-6 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 lg:py-[40px] min-h-[80px] sm:min-h-[109px] w-full sm:w-auto flex-1 max-w-[451px] hover:bg-[rgba(255,255,255,0.95)] transition-colors duration-200">
            Get Free Consultation
          </button>
          <button className="bg-[#1316b8] border-2 border-white text-white font-lato font-semibold text-base sm:text-lg md:text-xl lg:text-[24px] leading-[28px] sm:leading-[35px] rounded-[11px] px-6 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 lg:py-[40px] min-h-[80px] sm:min-h-[109px] w-full sm:w-auto flex-1 max-w-[451px] hover:bg-[rgba(19,22,184,0.9)] transition-colors duration-200">
            View Our Process
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;

