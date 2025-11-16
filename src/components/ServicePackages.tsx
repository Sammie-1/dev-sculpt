'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ServicePackages = () => {
  const servicePackagesSection = useScrollAnimation();

  const packages = [
    {
      title: 'Startup Package',
      description: 'Perfect for early-stage companies and MVPs',
      features: [
        'MVP Development',
        'Basic UI/UX Design',
        'Cloud Deployment',
        '3 Months Support'
      ],
      highlighted: false
    },
    {
      title: 'Growth Package',
      description: 'Ideal for scaling businesses',
      features: [
        'Full-Stack Development',
        'Advanced UI/UX Design',
        'API Integration',
        '6 Months Support',
        'Performance Optimization'
      ],
      highlighted: true
    },
    {
      title: 'Enterprise Package',
      description: 'Comprehensive solutions for large organizations',
      features: [
        'Enterprise Architecture',
        'Custom Integrations',
        'Security Audits',
        '12 Months Support',
        'Dedicated Team'
      ],
      highlighted: false
    }
  ];

  return (
    <section 
      ref={servicePackagesSection.ref}
      className={`w-full bg-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 scroll-animate ${servicePackagesSection.isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-[1728px] mx-auto flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div className="text-center flex flex-col gap-3 sm:gap-4 md:gap-6">
          <h2 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-tight sm:leading-normal text-black m-0 px-2">
            Service Packages
          </h2>
          <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-[24px] leading-[28px] sm:leading-[35px] text-[rgba(0,0,0,0.75)] text-center max-w-4xl mx-auto m-0 px-2">
            Flexible engagement models designed to meet different project requirements and budgets
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-[34px]">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-[11px] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-3 sm:gap-4 md:gap-6 border border-[rgba(0,0,0,0.1)] transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)] hover:border-2 hover:border-[#1316b8] cursor-pointer"
            >
              <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[28px] sm:leading-[35px] text-black m-0">
                  {pkg.title}
                </h3>
                <p className="font-lato font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[24px] sm:leading-[28px] text-black m-0">
                  {pkg.description}
                </p>
              </div>

              <ul className="list-disc pl-5 sm:pl-6 m-0 space-y-1 sm:space-y-2 flex-1">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="font-lato font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[24px] sm:leading-[28px] text-black">
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-[#1316b8] text-white font-lato font-bold text-sm sm:text-base md:text-lg lg:text-[18px] leading-[24px] sm:leading-[28px] rounded-[11px] px-4 sm:px-6 py-3 sm:py-4 mt-3 sm:mt-4 hover:bg-[#0f1199] transition-colors duration-200">
                Get Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;

