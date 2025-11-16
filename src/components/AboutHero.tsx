'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isVisible };
};

const AboutHero = () => {
  const heroBackgroundImage = '/assets/about-us.png';
  const heroTitle = 'About Dev Sculpt Studio';
  const heroDescription = 'We are passionate creators, dedicated to transforming innovative ideas into powerful digital solutions that drive business success.';
  const overlayColor = '#1316b8';
  const overlayOpacity = 0.5;
  const storyImage = '/assets/our-story.png';

  const storySection = useScrollAnimation();
  const foundationSection = useScrollAnimation();
  const drivesUsSection = useScrollAnimation();
  const teamSection = useScrollAnimation();
  const impactSection = useScrollAnimation();
  const expertiseSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  return (
    <>
      <section className="relative w-full min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] lg:min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 left-0 right-0 w-full" aria-hidden="true">
          <div className="absolute inset-0">
            <Image 
              src={heroBackgroundImage} 
              alt="About Dev Sculpt Studio background" 
              fill
              priority
              className="object-cover object-center"
              quality={90}
              sizes="100vw"
            />
          </div>
          
          <div 
            className="absolute inset-0 z-[1]" 
            style={{ 
              backgroundColor: overlayColor, 
              opacity: overlayOpacity 
            }}
          />
        </div>
        
        {heroTitle && (
          <div className="relative z-[4] max-w-[1150px] w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 flex flex-col items-center text-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
            <h1 className="font-lato font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[65px] xl:text-[65px] leading-normal text-white text-center m-0 max-w-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
              {heroTitle}
            </h1>
            
            {heroDescription && (
              <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] leading-[1.5] sm:leading-[1.55] md:leading-[1.6] text-white text-center max-w-[900px] mx-auto m-0 px-4 sm:px-6 md:px-8 lg:px-0 drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]">
                {heroDescription}
              </p>
            )}
          </div>
        )}
      </section>

      <section 
        ref={storySection.ref}
        className={`w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 scroll-animate ${storySection.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-[1728px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-2 md:gap-3 lg:gap-4 items-start">
            <div className="flex flex-col gap-6 md:gap-8">
              <h2 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-tight text-black m-0">
                Our Story
              </h2>
              <div className="flex flex-col gap-0 font-lato font-medium text-base sm:text-lg md:text-xl lg:text-[24px] leading-[40px] text-black">
                <p className="m-0">
                  Founded in 2018, Dev Sculpt Studio emerged from a simple yet powerful vision: to bridge the gap between complex business challenges and elegant technological solutions. Our name reflects our core philosophy – we don't just write code, we sculpt digital experiences.
                </p>
                <p className="m-0">
                  What started as a small team of passionate developers has grown into a full-service software development company, serving clients across diverse industries. From fintech startups to established healthcare organizations, we've helped businesses transform their ideas into reality.
                </p>
                <p className="m-0">
                  Our approach combines cutting-edge technology with human-centered design, ensuring that every solution we create is not only technically robust but also intuitive and meaningful for end users.
                </p>
              </div>
            </div>

            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-[11px] overflow-hidden relative">
              <Image 
                src={storyImage} 
                alt="Team collaboration at Dev Sculpt Studio" 
                fill
                className="object-cover object-center rounded-[11px]"
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      <section 
        ref={foundationSection.ref}
        className={`w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 scroll-animate ${foundationSection.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-[1728px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-normal text-black m-0">
              Our Foundation
            </h2>
            <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-[24px] leading-[35px] text-[rgba(0,0,0,0.75)] m-0 max-w-[900px]">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-[41px]">
            <div className="bg-[rgba(238,238,238,0.25)] rounded-[11px] p-6 md:p-8 lg:p-10 flex flex-col items-center text-center gap-4 md:gap-6 min-h-[290px]">
              <div className="w-[57px] h-[57px] rounded-full bg-[#FDF2E4] flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 relative">
                  <Image 
                    src="/assets/mission.png" 
                    alt="Mission icon" 
                    fill
                    className="object-contain"
                    sizes="24px"
                  />
                </div>
              </div>
              <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] text-black m-0">
                Mission
              </h3>
              <p className="font-lato font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[35px] text-[rgba(0,0,0,0.75)] m-0">
                To empower businesses through innovative software solutions that solve real-world problems, enhance productivity, and create lasting value for our clients and their customers.
              </p>
            </div>

            <div className="bg-[rgba(238,238,238,0.25)] rounded-[11px] p-6 md:p-8 lg:p-10 flex flex-col items-center text-center gap-4 md:gap-6 min-h-[290px]">
              <div className="w-[57px] h-[57px] relative flex-shrink-0">
                <Image 
                  src="/assets/vision.png" 
                  alt="Vision icon" 
                  fill
                  className="object-contain"
                  sizes="57px"
                />
              </div>
              <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] text-black m-0">
                Vision
              </h3>
              <p className="font-lato font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[35px] text-[rgba(0,0,0,0.75)] m-0">
                To empower businesses through innovative software solutions that solve real-world problems, enhance productivity, and create lasting value for our clients and their customers.
              </p>
            </div>

            <div className="bg-[rgba(238,238,238,0.25)] rounded-[11px] p-6 md:p-8 lg:p-10 flex flex-col items-center text-center gap-4 md:gap-6 min-h-[290px]">
              <div className="w-[57px] h-[57px] relative flex-shrink-0">
                <Image 
                  src="/assets/value%21.png" 
                  alt="Value icon" 
                  fill
                  className="object-contain"
                  sizes="57px"
                />
              </div>
              <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] text-black m-0">
                Value
              </h3>
              <p className="font-lato font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[35px] text-[rgba(0,0,0,0.75)] m-0">
                Innovation, integrity, collaboration, and excellence drive our commitment to delivering exceptional results while building lasting partnerships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section 
        ref={drivesUsSection.ref}
        className={`w-full bg-[rgba(238,238,238,0.25)] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 scroll-animate ${drivesUsSection.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-[1728px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-normal text-[#1316b8] m-0">
              What Drives Us
            </h2>
            <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-[24px] leading-[35px] text-[#1316b8] m-0 max-w-[900px]">
              Our core values shape every decision, every line of code, and every client interaction
            </p>
          </div>

          <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              <div className="bg-white rounded-[11px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.02)] p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6 min-h-[319px]">
                <div className="w-[60px] h-[60px] relative flex-shrink-0">
                  <Image 
                    src="/icons/mobile-dev-icon.png" 
                    alt="Innovation icon" 
                    fill
                    className="object-contain"
                    sizes="60px"
                  />
                </div>
                <h3 className="font-lato font-semibold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] text-black m-0">
                  Innovation
                </h3>
                <p className="font-lato font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[31px] text-black m-0">
                  We stay at the forefront of technology trends, constantly exploring new tools, frameworks, and methodologies to deliver cutting-edge solutions. Our team embraces experimentation and creative problem-solving to turn ambitious ideas into reality.
                </p>
              </div>

              <div className="bg-white rounded-[11px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.02)] p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6 min-h-[319px]">
                <div className="w-[60px] h-[60px] rounded-[4px] bg-[rgba(125,152,6,0.1)] flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 relative">
                    <Image 
                      src="/icons/collaboration-icon.svg" 
                      alt="Collaboration icon" 
                      fill
                      className="object-contain"
                      sizes="24px"
                    />
                  </div>
                </div>
                <h3 className="font-lato font-semibold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] text-black m-0">
                  Collaboration
                </h3>
                <p className="font-lato font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[31px] text-black m-0">
                  True partnership means working together as one team. We believe in transparent communication, regular feedback, and involving our clients in every step of the development process to ensure alignment and shared success.
                </p>
              </div>

              <div className="bg-white rounded-[11px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.02)] p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6 min-h-[319px]">
                <div className="w-[60px] h-[60px] relative flex-shrink-0">
                  <Image 
                    src="/icons/web-dev-icon.png" 
                    alt="Excellence icon" 
                    fill
                    className="object-contain"
                    sizes="60px"
                  />
                </div>
                <h3 className="font-lato font-semibold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] text-black m-0">
                  Excellence
                </h3>
                <p className="font-lato font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[31px] text-black m-0">
                  Quality is non-negotiable. From clean, maintainable code to comprehensive testing and documentation, we maintain the highest standards in everything we deliver. Our commitment to excellence ensures long-term value and reliability.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-[487px] bg-white rounded-[11px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.02)] p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6 min-h-[319px]">
                <div className="w-[60px] h-[60px] relative flex-shrink-0">
                  <Image 
                    src="/icons/cloud-icon.png" 
                    alt="Integrity icon" 
                    fill
                    className="object-contain"
                    sizes="60px"
                  />
                </div>
                <h3 className="font-lato font-semibold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] text-black m-0">
                  Integrity
                </h3>
                <p className="font-lato font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[31px] text-black m-0">
                  Trust is the foundation of lasting partnerships. We operate with complete transparency, honest communication, and ethical practices. Our clients can count on us to deliver on our promises and provide honest guidance throughout every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        ref={teamSection.ref}
        className={`w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 scroll-animate ${teamSection.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-[1728px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-normal text-[#1316b8] m-0">
              Meet Our Team
            </h2>
            <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-[24px] leading-[35px] text-[#1316b8] m-0 max-w-[900px]">
              The talented individuals behind every successful project
            </p>
          </div>

          <div className="flex flex-col gap-8 md:gap-12 lg:gap-[53px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-[32px]">
              <div className="bg-[rgba(238,238,238,0.25)] rounded-[11px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-4 min-h-[464px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)] hover:-translate-y-2 cursor-pointer">
                <div className="w-full h-[274px] rounded-[11px] overflow-hidden relative bg-[#d9d9d9]">
                  <Image 
                    src="/assets/john.png" 
                    alt="John Doe" 
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-normal text-black m-0">
                    John Doe
                  </h3>
                  <p className="font-lato font-medium text-base sm:text-lg md:text-xl lg:text-[20px] leading-normal text-[#1316b8] m-0">
                    CEO & Founder
                  </p>
                  <p className="font-lato font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-normal text-[rgba(0,0,0,0.75)] m-0">
                    With over 12 years in software development and entrepreneurship, John leads our vision of creating transformative digital solutions.
                  </p>
                </div>
              </div>

              <div className="bg-[rgba(238,238,238,0.25)] rounded-[11px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-4 min-h-[464px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)] hover:-translate-y-2 cursor-pointer">
                <div className="w-full h-[274px] rounded-[11px] overflow-hidden relative bg-[#d9d9d9]">
                  <Image 
                    src="/assets/sarah.png" 
                    alt="Sarah Sarah" 
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-normal text-black m-0">
                    Sarah Sarah
                  </h3>
                  <p className="font-lato font-medium text-base sm:text-lg md:text-xl lg:text-[20px] leading-normal text-[#1316b8] m-0">
                    CTO & Co-Founder
                  </p>
                  <p className="font-lato font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-normal text-[rgba(0,0,0,0.75)] m-0">
                    A seasoned architect with expertise in scalable systems, Sarah ensures our technical excellence and innovation in every project we undertake.
                  </p>
                </div>
              </div>

              <div className="bg-[rgba(238,238,238,0.25)] rounded-[11px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-4 min-h-[464px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)] hover:-translate-y-2 cursor-pointer">
                <div className="w-full h-[274px] rounded-[11px] overflow-hidden relative bg-[#d9d9d9]">
                  <Image 
                    src="/assets/david.png" 
                    alt="David David" 
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-normal text-black m-0">
                    David David
                  </h3>
                  <p className="font-lato font-medium text-base sm:text-lg md:text-xl lg:text-[20px] leading-normal text-[#1316b8] m-0">
                    Senior Full-Stack Developer
                  </p>
                  <p className="font-lato font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-normal text-[rgba(0,0,0,0.75)] m-0">
                    Specializing in React, Node.js, and cloud architecture, David brings 8 years of experience in building robust web applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-[53px]">
              <div className="bg-[rgba(238,238,238,0.25)] rounded-[11px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-4 min-h-[464px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)] hover:-translate-y-2 cursor-pointer">
                <div className="w-full h-[274px] rounded-[11px] overflow-hidden relative bg-[#d9d9d9]">
                  <Image 
                    src="/assets/emma.png" 
                    alt="Emma" 
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-normal text-black m-0">
                    Emma
                  </h3>
                  <p className="font-lato font-medium text-base sm:text-lg md:text-xl lg:text-[20px] leading-normal text-[#1316b8] m-0">
                    Lead UX/UI Designer
                  </p>
                  <p className="font-lato font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-normal text-[rgba(0,0,0,0.75)] m-0">
                    Emma crafts intuitive and beautiful user experiences, combining user research with creative design to deliver exceptional digital interfaces.
                  </p>
                </div>
              </div>

              <div className="bg-[rgba(238,238,238,0.25)] rounded-[11px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-4 min-h-[464px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)] hover:-translate-y-2 cursor-pointer">
                <div className="w-full h-[274px] rounded-[11px] overflow-hidden relative bg-[#d9d9d9]">
                  <Image 
                    src="/assets/james.png" 
                    alt="James James" 
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-normal text-black m-0">
                    James James
                  </h3>
                  <p className="font-lato font-medium text-base sm:text-lg md:text-xl lg:text-[20px] leading-normal text-[#1316b8] m-0">
                    Senior Mobile Developer
                  </p>
                  <p className="font-lato font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-normal text-[rgba(0,0,0,0.75)] m-0">
                    With expertise in React Native and native iOS/Android development, James creates high-performance mobile applications that users love.
                  </p>
                </div>
              </div>

              <div className="bg-[rgba(238,238,238,0.25)] rounded-[11px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-4 min-h-[464px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)] hover:-translate-y-2 cursor-pointer">
                <div className="w-full h-[274px] rounded-[11px] overflow-hidden relative bg-[#d9d9d9]">
                  <Image 
                    src="/assets/lisa.png" 
                    alt="Lisa Lisa" 
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-normal text-black m-0">
                    Lisa Lisa
                  </h3>
                  <p className="font-lato font-medium text-base sm:text-lg md:text-xl lg:text-[20px] leading-normal text-[#1316b8] m-0">
                    Senior DevOps Engineer
                  </p>
                  <p className="font-lato font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-normal text-[rgba(0,0,0,0.75)] m-0">
                    Lisa ensures our applications run smoothly with her expertise in cloud infrastructure, CI/CD pipelines, and automated deployment strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        ref={impactSection.ref}
        className={`w-full bg-[#1316b8] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 scroll-animate ${impactSection.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-[1728px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-normal text-white m-0">
              Our Impact in Numbers
            </h2>
            <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-[24px] leading-[35px] text-white m-0 max-w-[900px]">
              Six years of dedicated service and continuous growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
            <div className="flex flex-col items-center text-center gap-4">
              <p className="font-lato font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[55px] leading-[35px] text-white m-0">
                +145
              </p>
              <p className="font-lato font-normal text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] text-white m-0">
                Projects Completed
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <p className="font-lato font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[55px] leading-[35px] text-white m-0">
                +200
              </p>
              <p className="font-lato font-normal text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] text-white m-0">
                Happy Clients
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <p className="font-lato font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[55px] leading-[35px] text-white m-0">
                +8
              </p>
              <p className="font-lato font-normal text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] text-white m-0">
                Team Members
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <p className="font-lato font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[55px] leading-[35px] text-white m-0">
                +3
              </p>
              <p className="font-lato font-normal text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] text-white m-0">
                Years of Excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      <section 
        ref={expertiseSection.ref}
        className={`w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 scroll-animate ${expertiseSection.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-[1728px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-normal text-black m-0">
              Our Technical Expertise
            </h2>
            <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-[24px] leading-[35px] text-black m-0 max-w-[900px]">
              We work with cutting-edge technologies to deliver modern, scalable solutions
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[181px] items-start justify-center">
            <div className="flex flex-col gap-4 md:gap-6">
              <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] text-black m-0">
                Front-End Technologies
              </h3>
              <div className="font-lato font-medium text-base sm:text-lg md:text-xl lg:text-[18px] leading-[35px] text-black">
                <p className="m-0">React & Next.js</p>
                <p className="m-0">Vue.js & Nuxt.js</p>
                <p className="m-0">TypeScript & JavaScript</p>
                <p className="m-0">Tailwind CSS & Styled Components</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] text-black m-0">
                Backend & Database
              </h3>
              <div className="font-lato font-medium text-base sm:text-lg md:text-xl lg:text-[18px] leading-[35px] text-black">
                <p className="m-0">Node.js & Express</p>
                <p className="m-0">Python & Django</p>
                <p className="m-0">PostgreSQL & MongoDB</p>
                <p className="m-0">Firebase & Supabase</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] text-black m-0">
                Cloud & DevOps
              </h3>
              <div className="font-lato font-medium text-base sm:text-lg md:text-xl lg:text-[18px] leading-[35px] text-black">
                <p className="m-0">AWS & Azure</p>
                <p className="m-0">Docker & Kubernetes</p>
                <p className="m-0">CI/CD Pipelines</p>
                <p className="m-0">Monitoring & Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        ref={ctaSection.ref}
        className={`w-full bg-[rgba(19,22,184,0.1)] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 scroll-animate ${ctaSection.isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-[1728px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-normal text-black m-0">
              Ready to Start Your Project?
            </h2>
            <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-[24px] leading-[35px] text-black m-0 max-w-[900px]">
              Let's discuss how we can help transform your ideas into powerful digital solutions
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center justify-center">
            <button className="bg-[#1316b8] text-white font-lato font-bold text-base sm:text-lg md:text-xl lg:text-[20px] leading-[35px] rounded-[11px] px-6 md:px-10 lg:px-12 py-4 md:py-6 lg:py-8 min-h-[80px] w-full sm:w-auto min-w-[250px] md:min-w-[320px] lg:min-w-[380px] hover:opacity-90 transition-opacity">
              Get in Touch
            </button>

            <button className="bg-white border-2 border-[#1316b8] text-[#1316b8] font-lato font-bold text-base sm:text-lg md:text-xl lg:text-[20px] leading-[35px] rounded-[11px] px-6 md:px-10 lg:px-12 py-4 md:py-6 lg:py-8 min-h-[80px] w-full sm:w-auto min-w-[250px] md:min-w-[320px] lg:min-w-[380px] hover:bg-[rgba(19,22,184,0.05)] transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
