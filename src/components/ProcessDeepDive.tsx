'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProcessDeepDive = () => {
  const deepDiveSection = useScrollAnimation();

  const phases = [
    {
      number: '1',
      title: 'Discovery',
      description: 'This foundational phase involves deep-dive sessions to understand your business goals, technical requirements, and user needs.',
      subDescription: 'We conduct stakeholder interviews, competitive analysis, and technical feasibility studies.',
      bullets: [
        'Requirements Gathering: Detailed documentation of functional and non-functional requirements',
        'Stakeholder Interviews: Understanding perspectives from all key project stakeholders.',
        'Technical Assessment: Evaluating existing systems and integration',
      ],
      image: '/assets/discovery-new.png',
      icon: '/icons/process-1-icon-new.svg',
      layout: 'left', // text on left, image on right
      isDiscovery: true, // Special styling for Discovery
    },
    {
      number: '2',
      title: 'Planning and Design',
      description: 'We create detailed project plans, system architecture, and user experience designs. This phase ensures all stakeholders are aligned before development begins.',
      subDescription: undefined, // Optional subDescription for Planning and Design
      bullets: [
        'System Architecture: Scalable and maintainable technical architecture design',
        'UI/UX Design: User-centered design with wireframes and interactive prototypes',
        'Project Roadmap: Detailed timeline with milestones and deliverables',
      ],
      image: '/assets/planning-new.png',
      icon: '/icons/process-2-icon-new.svg',
      layout: 'right', // image on left, text on right
      isPlanning: true, // Special styling for Planning and Design
    },
    {
      number: '3',
      title: 'Development',
      description: 'Our agile development approach ensures regular progress updates and continuous client feedback integration. We follow best practices for code quality and maintainability.',
      bullets: [
        'Agile Sprints: 2-week development cycles with regular demonstrations',
        'Code Reviews: Peer review process ensuring code quality and standards',
        'Continuous Integration: Automated testing and integration throughout development',
      ],
      image: '/assets/development.png',
      icon: '/icons/process-3-icon.svg',
      layout: 'left', // text on left, image on right
      isDevelopment: true, // Special styling for Development
    },
  ];

  return (
    <section 
      ref={deepDiveSection.ref}
      className={`w-full bg-[rgba(9,164,51,0.05)] py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 scroll-animate ${deepDiveSection.isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-[1728px] mx-auto flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <div className="text-center">
          <h2 className="font-lato font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-black m-0 mb-1 sm:mb-2">
            Deep Dive into Each Phase
          </h2>
          <p className="font-lato font-normal text-xs sm:text-sm md:text-base lg:text-lg leading-[1.46] text-[rgba(0,0,0,0.75)] text-center max-w-4xl mx-auto m-0 px-4">
            Understanding what happens at each stage of our development process
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {phases.map((phase, index) => {
            if (phase.layout === 'right') {
              // Planning and Design: image on left, text on right
              const isPlanning = phase.isPlanning;
              
              return (
                <div key={index} className="flex flex-col gap-3 sm:gap-4 md:gap-6">
                  <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6 items-start">
                    <div className="w-full lg:w-[38%] order-1 lg:order-1">
                      <div className="relative w-full aspect-[4/3] rounded-[6px] overflow-hidden max-h-[280px] sm:max-h-[320px] md:max-h-[360px]">
                        <Image 
                          src={phase.image} 
                          alt={phase.title} 
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 38vw"
                        />
                      </div>
                    </div>
                    <div className="flex-1 order-2 lg:order-2">
                      {isPlanning ? (
                        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                          {/* Planning and Design heading at the beginning of text */}
                          <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                            <div className="relative w-[35px] sm:w-[42px] md:w-[48px] h-[35px] sm:h-[42px] md:h-[48px] flex-shrink-0">
                              <Image 
                                src={phase.icon} 
                                alt={`${phase.title} icon`} 
                                width={48} 
                                height={48} 
                                className="object-contain w-full h-full"
                              />
                              <span className="absolute font-lato font-bold text-xs sm:text-sm md:text-base text-white leading-normal left-[14px] top-[10px]">
                                {phase.number}
                              </span>
                            </div>
                            <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight text-black m-0">
                              {phase.title}
                            </h3>
                          </div>
                          {/* Text content */}
                          <div className="font-lato font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-[1.5] sm:leading-[1.6] md:leading-[1.7] text-black">
                            <p className="mb-0">{phase.description}</p>
                            {(phase as any).subDescription && (
                              <p className="mb-0">{(phase as any).subDescription}</p>
                            )}
                            <ul className="list-disc ml-4 sm:ml-5 md:ml-6 mt-2 sm:mt-3 mb-0">
                              {phase.bullets.map((bullet, bulletIndex) => (
                                <li key={bulletIndex} className="mb-0.5 sm:mb-1">
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <>
                          <p className="font-lato font-normal text-xs sm:text-sm md:text-base lg:text-lg leading-[1.5] text-black m-0 mb-2 sm:mb-3">
                            {phase.description}
                          </p>
                          {phase.subDescription && (
                            <p className="font-lato font-normal text-xs sm:text-sm md:text-base lg:text-lg leading-[1.5] text-black m-0 mb-2 sm:mb-3">
                              {phase.subDescription}
                            </p>
                          )}
                          <ul className="list-none p-0 m-0 flex flex-col gap-1.5 sm:gap-2">
                            {phase.bullets.map((bullet, bulletIndex) => (
                              <li key={bulletIndex} className="flex items-start gap-1.5 sm:gap-2">
                                <span className="text-[#130f78] font-bold text-sm sm:text-base mt-0.5 flex-shrink-0">•</span>
                                <span className="font-lato font-normal text-xs sm:text-sm md:text-base lg:text-lg leading-[1.5] text-black">
                                  {bullet}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            } else {
              // Discovery and Development: text on left, image on right
              const isDiscovery = phase.isDiscovery;
              
              return (
                <div key={index} className="flex flex-col gap-3 sm:gap-4 md:gap-6">
                  {!isDiscovery && !(phase as any).isDevelopment && (
                    <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-2.5">
                      <div className="relative w-[35px] h-[35px] flex items-center justify-center flex-shrink-0">
                        <Image 
                          src={phase.icon} 
                          alt={`${phase.title} icon`} 
                          width={35} 
                          height={35} 
                          className="object-contain"
                        />
                      </div>
                      <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight text-black m-0">
                        {phase.title}
                      </h3>
                    </div>
                  )}

                  <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6 items-start">
                    <div className="flex-1 order-1 lg:order-1">
                      {isDiscovery ? (
                        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                          {/* Discovery heading aligned with image */}
                          <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 mt-1.5 sm:mt-2 md:mt-3">
                            <div className="relative w-[35px] sm:w-[42px] md:w-[48px] h-[35px] sm:h-[42px] md:h-[48px] flex-shrink-0">
                              <Image 
                                src={phase.icon} 
                                alt={`${phase.title} icon`} 
                                width={48} 
                                height={48} 
                                className="object-contain w-full h-full"
                              />
                              <span className="absolute font-lato font-bold text-xs sm:text-sm md:text-base text-white leading-normal left-[14px] top-[10px]">
                                {phase.number}
                              </span>
                            </div>
                            <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight text-black m-0">
                              {phase.title}
                            </h3>
                          </div>
                          {/* Text content */}
                          <div className="font-lato font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-[1.5] sm:leading-[1.6] md:leading-[1.7] text-black">
                            <p className="mb-0">{phase.description}</p>
                            <p className="mb-0">{phase.subDescription}</p>
                            <ul className="list-disc ml-4 sm:ml-5 md:ml-6 mt-2 sm:mt-3 mb-0">
                              {phase.bullets.map((bullet, bulletIndex) => (
                                <li key={bulletIndex} className="mb-0.5 sm:mb-1">
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (phase as any).isDevelopment ? (
                        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                          {/* Development heading aligned with image */}
                          <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 mt-1.5 sm:mt-2 md:mt-3">
                            <div className="relative w-[35px] sm:w-[42px] md:w-[48px] h-[35px] sm:h-[42px] md:h-[48px] flex-shrink-0">
                              <Image 
                                src={phase.icon} 
                                alt={`${phase.title} icon`} 
                                width={48} 
                                height={48} 
                                className="object-contain w-full h-full"
                              />
                              <span className="absolute font-lato font-bold text-xs sm:text-sm md:text-base text-white leading-normal left-[14px] top-[10px]">
                                {phase.number}
                              </span>
                            </div>
                            <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight text-black m-0">
                              {phase.title}
                            </h3>
                          </div>
                          {/* Text content */}
                          <div className="font-lato font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-[1.5] sm:leading-[1.6] md:leading-[1.7] text-black">
                            <p className="mb-0">{phase.description}</p>
                            <ul className="list-disc ml-4 sm:ml-5 md:ml-6 mt-2 sm:mt-3 mb-0">
                              {phase.bullets.map((bullet, bulletIndex) => (
                                <li key={bulletIndex} className="mb-0.5 sm:mb-1">
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <>
                          <p className="font-lato font-normal text-xs sm:text-sm md:text-base lg:text-lg leading-[1.5] text-black m-0 mb-2 sm:mb-3">
                            {phase.description}
                          </p>
                          {phase.subDescription && (
                            <p className="font-lato font-normal text-xs sm:text-sm md:text-base lg:text-lg leading-[1.5] text-black m-0 mb-2 sm:mb-3">
                              {phase.subDescription}
                            </p>
                          )}
                          <ul className="list-none p-0 m-0 flex flex-col gap-1.5 sm:gap-2">
                            {phase.bullets.map((bullet, bulletIndex) => (
                              <li key={bulletIndex} className="flex items-start gap-1.5 sm:gap-2">
                                <span className="text-[#130f78] font-bold text-sm sm:text-base mt-0.5 flex-shrink-0">•</span>
                                <span className="font-lato font-normal text-xs sm:text-sm md:text-base lg:text-lg leading-[1.5] text-black">
                                  {bullet}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                    <div className={`w-full lg:w-[38%] order-2 lg:order-2 ${isDiscovery ? 'mt-3 sm:mt-4 md:mt-5' : ''}`}>
                      <div className="relative w-full aspect-[4/3] rounded-[6px] overflow-hidden max-h-[280px] sm:max-h-[320px] md:max-h-[360px]">
                        <Image 
                          src={phase.image} 
                          alt={phase.title} 
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 38vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessDeepDive;

