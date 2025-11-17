'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';

const COMM_IMAGE = 'http://localhost:3845/assets/8de6d3f7761f14eb9cad6450ed5c5d15def10e26.png';

const highlights = [
  {
    title: 'Weekly Status Reports',
    description: 'Detailed progress updates with achievements, challenges, and next steps.',
  },
  {
    title: 'Sprint Demos',
    description: 'Live demonstrations of completed features every two weeks.',
  },
  {
    title: 'Direct Communication',
    description: 'Dedicated project manager and direct access to the development team.',
  },
];

const ProcessCommunication = () => {
  const commSection = useScrollAnimation();

  return (
    <section
      ref={commSection.ref}
      className={`w-full bg-[rgba(238,238,238,0.25)] py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 scroll-animate ${commSection.isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-[1728px] mx-auto flex flex-col gap-8 sm:gap-10 md:gap-12">
        <div className="text-center flex flex-col gap-3 sm:gap-4">
          <h2 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-tight text-black m-0">
            Communication & Collaboration
          </h2>
          <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-[24px] leading-[35px] text-[rgba(0,0,0,0.75)] m-0 max-w-[1000px] mx-auto">
            Transparent communication and collaborative partnership throughout the entire project lifecycle
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center lg:items-start">
          <div className="flex-1 w-full">
            <div className="flex flex-col gap-4 sm:gap-5">
              <h3 className="font-lato font-bold text-2xl sm:text-3xl md:text-[36px] leading-tight text-black m-0">
                Regular Updates & Reporting
              </h3>
              <div className="flex flex-col gap-4 sm:gap-5">
                {highlights.map((item) => (
                  <div key={item.title} className="flex flex-col gap-1.5">
                    <p className="font-lato font-semibold text-lg sm:text-xl md:text-2xl text-black m-0">
                      {item.title}
                    </p>
                    <p className="font-lato font-medium text-sm sm:text-base md:text-lg leading-[30px] text-[rgba(0,0,0,0.75)] m-0">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="w-full rounded-[11px] overflow-hidden shadow-[0px_24px_80px_rgba(0,0,0,0.15)]">
              <div className="relative w-full aspect-[4/2.8] sm:aspect-[4/2.5] md:aspect-[16/9]">
                <Image
                  src={COMM_IMAGE}
                  alt="Team collaboration workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessCommunication;



