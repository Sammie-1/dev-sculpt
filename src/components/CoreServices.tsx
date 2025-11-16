'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CoreServices = () => {
  const coreServicesSection = useScrollAnimation();

  // Icon images from Figma localhost server
  const customIcon = 'http://localhost:3845/assets/4618ed95baf4f9b8020523958be4ff13f27aff2d.svg';
  const mobileIcon = 'http://localhost:3845/assets/a3c3eb6268731067efc76f00892a60011c1ad7f3.svg';
  const webIcon = 'http://localhost:3845/assets/c374edfb9fae3a1cb8101cfdefc8ba39fcdb46a7.svg';
  const cloudIcon = 'http://localhost:3845/assets/272c901885dd575548b9ba59491e9afe94e2611a.svg';

  const coreServices = [
    {
      title: 'Custom Software Development',
      description: 'Bespoke software solutions designed specifically for your business needs. We build scalable, maintainable applications that grow with your organization.',
      features: [
        'Enterprise Application Development',
        'API Development & Integration',
        'Legacy System Modernization',
        'Microservices Architecture'
      ],
      icon: customIcon,
      iconBg: 'bg-[rgba(9,164,51,0.15)]',
      cardBg: 'bg-[rgba(9,164,51,0.05)]'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business results on iOS and Android platforms.',
      features: [
        'Native iOS & Android Apps',
        'Cross-platform Solutions',
        'App Store Optimization',
        'Mobile UI/UX Design'
      ],
      icon: mobileIcon,
      iconBg: 'bg-[rgba(19,22,184,0.1)]',
      cardBg: 'bg-[rgba(19,22,184,0.1)]'
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications that deliver exceptional user experiences across all devices and platforms.',
      features: [
        'Progressive Web Applications',
        'E-commerce Platforms',
        'Content Management Systems',
        'Single Page Applications'
      ],
      icon: webIcon,
      iconBg: 'bg-[rgba(255,154,12,0.1)]',
      cardBg: 'bg-[rgba(255,154,12,0.15)]'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services that enhance performance, reduce costs, and improve business agility.',
      features: [
        'Cloud Migration & Strategy',
        'AWS & Azure Implementation',
        'DevOps & CI/CD Pipelines',
        'Infrastructure as Code'
      ],
      icon: cloudIcon,
      iconBg: 'bg-[rgba(222,46,46,0.15)]',
      cardBg: 'bg-[rgba(222,46,46,0.15)]'
    }
  ];

  return (
    <section 
      ref={coreServicesSection.ref}
      className={`w-full bg-[rgba(238,238,238,0.25)] py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 scroll-animate ${coreServicesSection.isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-[1728px] mx-auto flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div className="text-center flex flex-col gap-3 sm:gap-4 md:gap-6">
          <h2 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-tight sm:leading-normal text-black m-0 px-2">
            Core Services
          </h2>
          <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-[24px] leading-[28px] sm:leading-[35px] text-[rgba(0,0,0,0.75)] text-center max-w-4xl mx-auto m-0 px-2">
            From concept to deployment, we provide end-to-end solutions that drive business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-[34px]">
          {coreServices.map((service, index) => (
            <div
              key={index}
              className={`${service.cardBg} rounded-[11px] p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col gap-3 md:gap-4 min-h-[280px] sm:min-h-[320px] transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)] cursor-pointer`}
            >
              <div className={`w-[50px] h-[50px] ${service.iconBg} rounded-[4px] flex items-center justify-center flex-shrink-0`}>
                <div className="w-5 h-5 relative">
                  <Image 
                    src={service.icon} 
                    alt="" 
                    fill
                    className="object-contain"
                    sizes="20px"
                  />
                </div>
              </div>

              <h3 className="font-lato font-semibold text-base sm:text-lg md:text-xl lg:text-[22px] leading-[26px] sm:leading-[30px] text-black m-0">
                {service.title}
              </h3>

              <div className="font-lato font-normal text-sm sm:text-base md:text-base lg:text-[16px] leading-[24px] sm:leading-[28px] text-black">
                {service.description.split('. ').filter(s => s.trim()).map((sentence, idx, arr) => (
                  <p key={idx} className={idx === arr.length - 1 ? "m-0 mb-4" : "m-0 mb-2"}>
                    {sentence}{idx < arr.length - 1 ? '.' : ''}
                  </p>
                ))}
                <ul className="list-disc pl-5 sm:pl-6 m-0 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="leading-[26px] sm:leading-[28px] md:leading-[31px]">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;

