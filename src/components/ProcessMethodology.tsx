'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ICONS = {
  agile: 'http://localhost:3845/assets/c3e7c365d2d4f3bf6f8444ae5229953d50c47b31.svg',
  devops: 'http://localhost:3845/assets/f3408a29363be101b7e4253e98cdbdfbaf7fad49.svg',
  ux: 'http://localhost:3845/assets/62e22d5e61687c76c604b8cdbe39020e581763e2.svg',
  qa: 'http://localhost:3845/assets/085d9d47328f8e09f1c78ccb54157f282d6f964c.svg',
};

const methodologyItems = [
  {
    title: 'Agile Development',
    description: 'Iterative development with regular feedback and continuous improvement.',
    cardColor: 'rgba(19,22,184,0.05)',
    iconBg: 'rgba(19,22,184,0.15)',
    icon: ICONS.agile,
  },
  {
    title: 'DevOps Integration',
    description: 'Continuous integration and deployment for faster, reliable releases.',
    cardColor: 'rgba(9,164,51,0.05)',
    iconBg: 'rgba(9,164,51,0.15)',
    icon: ICONS.devops,
  },
  {
    title: 'User-Centered Design',
    description: 'Designing with the end-user in mind for optimal user experience.',
    cardColor: 'rgba(222,46,46,0.05)',
    iconBg: 'rgba(222,46,46,0.15)',
    icon: ICONS.ux,
  },
  {
    title: 'Quality Assurance',
    description: 'Comprehensive testing strategy ensuring robust, secure applications.',
    cardColor: 'rgba(30,173,212,0.05)',
    iconBg: 'rgba(30,173,212,0.15)',
    icon: ICONS.qa,
  },
];

const ProcessMethodology = () => {
  const methodologySection = useScrollAnimation();

  return (
    <section
      ref={methodologySection.ref}
      className={`w-full bg-white py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 scroll-animate ${methodologySection.isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-[1728px] mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10">
        <div className="text-center flex flex-col gap-3 sm:gap-4">
          <h2 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-tight text-black m-0">
            Our Methodology
          </h2>
          <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-[24px] leading-[35px] text-[rgba(0,0,0,0.75)] m-0 max-w-[900px] mx-auto">
            We combine proven methodologies with modern practices to ensure project success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {methodologyItems.map((item) => (
            <div
              key={item.title}
              className="rounded-[11px] p-6 sm:p-7 md:p-8 flex flex-col gap-4 sm:gap-6 h-full shadow-[0px_4px_24px_rgba(0,0,0,0.04)]"
              style={{ backgroundColor: item.cardColor }}
            >
              <div
                className="w-[58px] h-[58px] sm:w-[65px] sm:h-[65px] rounded-[6px] flex items-center justify-center"
                style={{ backgroundColor: item.iconBg }}
              >
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className="w-6 h-6 sm:w-[26px] sm:h-[26px]"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl leading-tight text-black m-0">
                  {item.title}
                </h3>
                <p className="font-lato font-medium text-sm sm:text-base md:text-lg leading-[28px] text-black/80 m-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessMethodology;


