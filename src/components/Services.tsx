'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Services = () => {
  const servicesSection = useScrollAnimation();
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored solutions that fit your unique needs and business\nrequirements.',
      icon: '/icons/custom-icon.png',
    },
    {
      title: 'Mobile App Development',
      description: 'Engaging Android & iOS apps that scale with your \nbusiness growth.',
      icon: '/icons/mobile-dev-icon.png',
    },
    {
      title: 'Web Development',
      description: 'Modern, secure, and user-focused websites and web \napplications.',
      icon: '/icons/web-dev-icon.png',
    },
    {
      title: 'Cloud Solutions',
      description: 'Cloud migration, deployment, and optimization for \nscalable infrastructure.',
      icon: '/icons/cloud-icon.png',
    },
    {
      title: 'Cybersecurity',
      description: 'Protecting your business with robust security measures \nand protocols.',
      icon: '/icons/cybersecurity-icon.png',
    },
    {
      title: 'Data Analytics',
      description: 'Unlock insights and make smarter business decisions \nwith data-driven solutions.',
      icon: '/icons/analytics-icon.png',
    },
  ];

  return (
    <section 
      ref={servicesSection.ref}
      className={`w-full bg-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 scroll-animate ${servicesSection.isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-[1728px] mx-auto flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div className="text-center">
          <h2 className="font-lato font-bold text-4xl md:text-5xl lg:text-[65px] leading-tight text-[#1316b8] m-0">
            Our Services
          </h2>
        </div>

        <p className="font-lato font-normal text-lg md:text-xl lg:text-[24px] leading-[1.46] text-[rgba(0,0,0,0.75)] text-center max-w-4xl mx-auto m-0">
          We offer comprehensive software development services to help businesses thrive in the digital landscape.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[34px]">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[rgba(238,238,238,0.25)] rounded-[11px] p-6 md:p-8 flex flex-col gap-4 min-h-[231px] transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)] cursor-pointer"
            >
              <div className="w-[60px] h-[60px] flex items-center justify-center flex-shrink-0">
                <Image src={service.icon} alt="" width={48} height={48} className="object-contain" />
              </div>

              <h3 className="font-lato font-semibold text-xl md:text-2xl lg:text-[24px] leading-[1.46] text-black m-0">
                {service.title}
              </h3>

              <p className="font-lato font-normal text-base md:text-lg lg:text-[18px] leading-[1.72] text-black m-0 whitespace-pre-line">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

