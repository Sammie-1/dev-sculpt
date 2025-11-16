'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Processes = () => {
  const processesSection = useScrollAnimation();
  const processes = [
    {
      number: '1',
      title: 'Discovery',
      description: 'We start by understanding your business objectives, target audience, and technical requirements through comprehensive analysis.',
      duration: '1-2 weeks',
      icon: '/icons/process-1-icon.svg',
      bgColor: 'rgba(9,164,51,0.05)',
    },
    {
      number: '2',
      title: 'Planning and Design',
      description: 'Detailed project roadmap creation, system architecture design, and user experience planning to ensure optimal outcomes.',
      duration: '1-3 weeks',
      icon: '/icons/process-2-icon.svg',
      bgColor: 'rgba(255,154,12,0.05)',
    },
    {
      number: '3',
      title: 'Development',
      description: 'Agile development with regular iterations, continuous integration, and transparent progress tracking throughout the build phase.',
      duration: '4-16 weeks',
      icon: '/icons/process-3-icon.svg',
      bgColor: 'rgba(252,234,43,0.05)',
    },
    {
      number: '4',
      title: 'Testing and QA',
      description: 'Comprehensive testing including functionality, performance, security, and user acceptance testing to ensure quality delivery.',
      duration: '1-2 weeks',
      icon: '/icons/process-4-icon.svg',
      bgColor: 'rgba(222,46,46,0.05)',
    },
    {
      number: '5',
      title: 'Deployment',
      description: 'Seamless production deployment with careful monitoring, rollback strategies, and performance optimization for go-live success.',
      duration: '1 week',
      icon: '/icons/process-5-icon.svg',
      bgColor: 'rgba(30,173,212,0.05)',
    },
    {
      number: '6',
      title: 'Support and Growth',
      description: 'Ongoing maintenance, performance monitoring, feature enhancements, and scaling support to ensure continued success.',
      duration: 'Ongoing',
      icon: '/icons/process-6-icon.svg',
      bgColor: 'rgba(19,22,184,0.05)',
    },
  ];

  return (
    <section 
      ref={processesSection.ref}
      className={`w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 scroll-animate ${processesSection.isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-[1728px] mx-auto flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <div className="text-center">
          <h2 className="font-lato font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-black m-0 mb-1 sm:mb-2">
            How We Work
          </h2>
        </div>

        <p className="font-lato font-normal text-xs sm:text-sm md:text-base lg:text-lg leading-[1.46] text-[rgba(0,0,0,0.75)] text-center max-w-5xl mx-auto m-0 px-4">
          Our structured approach combines agile methodologies with proven project management practices to deliver exceptional results
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {processes.map((process, index) => (
            <div 
              key={index} 
              className="flex flex-col gap-3 sm:gap-4 md:gap-5 p-4 sm:p-6 md:p-8 rounded-[8px] h-full"
              style={{ backgroundColor: process.bgColor }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="relative w-[50px] sm:w-[52px] md:w-[55px] h-[50px] sm:h-[52px] md:h-[55px] flex-shrink-0">
                  <Image 
                    src={process.icon} 
                    alt={`Process ${process.number} icon`} 
                    width={55} 
                    height={55} 
                    className="object-contain w-full h-full"
                  />
                  <span className="absolute inset-0 flex items-center justify-center font-lato font-bold text-base sm:text-lg md:text-xl text-white leading-normal pointer-events-none">
                    {process.number}
                  </span>
                </div>

                <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight text-black m-0 pt-1">
                  {process.title}
                </h3>
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2">
                <p className="font-lato font-normal text-xs sm:text-sm md:text-base lg:text-lg leading-[1.5] sm:leading-[1.6] md:leading-[1.7] text-black m-0">
                  {process.description}
                </p>
                <p className="font-lato font-bold text-xs sm:text-sm md:text-base leading-[1.5] sm:leading-[1.6] text-black m-0">
                  Duration: {process.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Processes;

