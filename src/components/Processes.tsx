'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Processes = () => {
  const processesSection = useScrollAnimation();
  const processes = [
    {
      number: '1',
      title: 'Discovery',
      description: 'Understanding your business needs and \nproject requirements.',
      icon: '/icons/process-1-icon.png',
    },
    {
      number: '2',
      title: 'Design',
      description: 'Crafting intuitive user experiences and \nsystem architecture.',
      icon: '/icons/process-2-icon.png',
    },
    {
      number: '3',
      title: 'Development',
      description: 'Coding scalable, reliable solutions using \nbest practices.',
      icon: '/icons/process-3-icon.png',
    },
    {
      number: '4',
      title: 'Testing and Quality Assurance',
      description: 'Ensuring functionality and security through \nrigorous testing.',
      icon: '/icons/process-4-icon.png',
    },
    {
      number: '5',
      title: 'Deployment',
      description: 'Seamless go-live with comprehensive support \nand monitoring.',
      icon: '/icons/process-5-icon.png',
    },
    {
      number: '6',
      title: 'Support and Growth',
      description: 'Long-term partnership for continuous success and \nevolution.',
      icon: '/icons/process-6-icon.png',
    },
  ];

  return (
    <section 
      ref={processesSection.ref}
      className={`w-full bg-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 scroll-animate ${processesSection.isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-[1728px] mx-auto flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div className="text-center">
          <h2 className="font-lato font-bold text-4xl md:text-5xl lg:text-[65px] leading-tight text-[#1316b8] m-0">
            Our Processes
          </h2>
        </div>

        <p className="font-lato font-normal text-lg md:text-xl lg:text-[24px] leading-[1.46] text-[rgba(0,0,0,0.75)] text-center max-w-4xl mx-auto m-0">
          A proven methodology that ensures successful project delivery from start to finish
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 relative">
          {processes.map((process, index) => (
            <div 
              key={index} 
              className={`flex flex-col gap-4 ${
                index === 1 ? 'md:mt-12' : index === 4 ? 'md:mt-12' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="relative w-[61px] h-[61px] flex items-center justify-center flex-shrink-0">
                  <Image src={process.icon} alt="" width={61} height={61} className="object-contain" />
                </div>

                <h3 className="font-lato font-bold text-xl md:text-2xl lg:text-[24px] leading-tight text-black m-0 pt-1">
                  {process.title}
                </h3>
              </div>

              <p className="font-lato font-normal text-base md:text-lg lg:text-[18px] leading-[1.78] text-black m-0 ml-[85px] whitespace-pre-line">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Processes;

