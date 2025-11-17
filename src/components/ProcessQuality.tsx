'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testingCategories = [
  {
    title: 'Functional Testing',
    bullets: ['Unit Testing', 'Integration Testing', 'System Testing', 'User Acceptance Testing'],
  },
  {
    title: 'Performance Testing',
    bullets: ['Load Testing', 'Stress Testing', 'Performance Optimization', 'Scalability Assessment'],
  },
  {
    title: 'Security Testing',
    bullets: ['Vulnerability Assessment', 'Security Code Review', 'Penetration Testing', 'Compliance Verification'],
  },
];

const ProcessQuality = () => {
  const qualitySection = useScrollAnimation();

  return (
    <section
      ref={qualitySection.ref}
      className={`w-full bg-white py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 scroll-animate ${qualitySection.isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-[1728px] mx-auto flex flex-col gap-8 sm:gap-10">
        <div className="text-center flex flex-col gap-3 sm:gap-4">
          <h2 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-tight text-[#1316b8] m-0">
            Quality Assurance Standard
          </h2>
          <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-[24px] leading-[35px] text-[rgba(0,0,0,0.75)] m-0 max-w-[900px] mx-auto">
            Rigorous testing and quality control measures to ensure exceptional software delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testingCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[rgba(250,250,252,1)] rounded-[16px] shadow-[0px_12px_40px_rgba(0,0,0,0.05)] p-6 sm:p-7 md:p-8 flex flex-col gap-4 border border-transparent transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0px_20px_60px_rgba(0,0,0,0.08)] hover:border-[#1316b8]/20"
            >
              <h3 className="font-lato font-bold text-xl sm:text-2xl md:text-[26px] leading-tight text-black m-0 text-center md:text-left">
                {category.title}
              </h3>
              <ul className="list-disc pl-5 font-lato font-medium text-base sm:text-lg leading-[30px] text-black/80 flex flex-col gap-1.5">
                {category.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessQuality;



