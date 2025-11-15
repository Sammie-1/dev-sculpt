'use client';

import Image from 'next/image';

const AboutHero = () => {
  // ============================================
  // IMAGE CONFIGURATION
  // ============================================
  // Export your images from Figma and place them in: public/images/
  // Then update these paths to match your exported image filenames
  
  // Main background image - using about-us.png from assets folder
  const heroBackgroundImage = '/assets/about-us.png';
  
  // Optional decorative elements (set to null if not needed)
  // For patterns, textures, or decorative graphics
  const heroPatternImage = null; // e.g., '/images/about-hero-pattern.png'
  const heroDecorativeImage = null; // e.g., '/images/about-hero-decorative.svg'
  
  // ============================================
  // CONTENT CONFIGURATION
  // ============================================
  const heroTitle = 'About Dev Sculpt Studio';
  const heroDescription = 'We are passionate creators, dedicated to transforming innovative ideas into powerful digital solutions that drive business success.';
  
  // Overlay color and opacity (adjust to match Figma design)
  const overlayColor = '#1316b8'; // Dark blue
  const overlayOpacity = 0.5; // 0-1 range
  
  // Image for the "Our Story" section
  const storyImage = '/assets/our-story.png';

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] lg:min-h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 left-0 right-0 w-full" aria-hidden="true">
          {/* Main Background Image */}
          <div className="absolute inset-0">
            <Image 
              src={heroBackgroundImage} 
              alt="About Dev Sculpt Studio background" 
              fill
              priority
              className="object-cover object-center"
              quality={90}
              sizes="100vw"
              unoptimized
              onError={(e) => {
                // Log error if image fails to load
                if (typeof window !== 'undefined') {
                  console.error('Hero background image failed to load:', heroBackgroundImage);
                }
              }}
            />
          </div>
          
          {/* Optional Pattern/Texture Overlay */}
          {heroPatternImage && (
            <div className="absolute inset-0 opacity-30">
              <Image 
                src={heroPatternImage} 
                alt="" 
                fill
                className="object-cover object-center mix-blend-overlay"
                quality={90}
                sizes="100vw"
                unoptimized
              />
            </div>
          )}
          
          {/* Optional Decorative Element */}
          {heroDecorativeImage && (
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <Image 
                src={heroDecorativeImage} 
                alt="" 
                fill
                className="object-contain object-center"
                quality={90}
                sizes="100vw"
                unoptimized
              />
            </div>
          )}
          
          {/* Color Overlay - Adjust opacity and color to match Figma */}
          <div 
            className="absolute inset-0 z-[1]" 
            style={{ 
              backgroundColor: overlayColor, 
              opacity: overlayOpacity 
            }}
          ></div>
        </div>
        
        {/* Content Container */}
        {heroTitle && (
          <div className="relative z-[4] max-w-[1150px] w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 flex flex-col items-center text-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
            {/* Main Heading */}
            <h1 className="font-lato font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[65px] xl:text-[65px] leading-normal text-white text-center m-0 max-w-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
              {heroTitle}
            </h1>
            
            {/* Description Text */}
            {heroDescription && (
              <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] leading-[1.5] sm:leading-[1.55] md:leading-[1.6] text-white text-center max-w-[900px] mx-auto m-0 px-4 sm:px-6 md:px-8 lg:px-0 drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]">
                {heroDescription}
              </p>
            )}
          </div>
        )}
      </section>

      {/* Our Story Section */}
      <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1728px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-2 md:gap-3 lg:gap-4 items-start">
            {/* Left Section - Text Content */}
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

            {/* Right Section - Image */}
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

      {/* Our Foundation Section */}
      <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1728px] mx-auto">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-normal text-black m-0">
              Our Foundation
            </h2>
            <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-[24px] leading-[35px] text-[rgba(0,0,0,0.75)] m-0 max-w-[900px]">
              The principles that guide everything we do
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-[41px]">
            {/* Mission Card */}
            <div className="bg-[rgba(238,238,238,0.25)] rounded-[11px] p-6 md:p-8 lg:p-10 flex flex-col items-center text-center gap-4 md:gap-6 min-h-[290px]">
              <div className="w-[57px] h-[57px] rounded-full bg-[#FDF2E4] flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 relative">
                  <svg className="w-6 h-6 text-[#E89F3B]" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="4" y="4" width="6" height="6" rx="1" fill="currentColor"/>
                    <rect x="14" y="4" width="6" height="6" rx="1" fill="currentColor"/>
                    <rect x="9" y="14" width="6" height="6" rx="1" fill="currentColor"/>
                    <path d="M7 7h2v2H7zm10 0h2v2h-2zm-5 10h2v2h-2z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] text-black m-0">
                Mission
              </h3>
              <p className="font-lato font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[35px] text-[rgba(0,0,0,0.75)] m-0">
                To empower businesses through innovative software solutions that solve real-world problems, enhance productivity, and create lasting value for our clients and their customers.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-[rgba(238,238,238,0.25)] rounded-[11px] p-6 md:p-8 lg:p-10 flex flex-col items-center text-center gap-4 md:gap-6 min-h-[290px]">
              <div className="w-[57px] h-[57px] rounded-full bg-[#EAF7ED] flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 relative">
                  <svg className="w-6 h-6 text-[#5CB85C]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] text-black m-0">
                Vision
              </h3>
              <p className="font-lato font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[35px] text-[rgba(0,0,0,0.75)] m-0">
                To empower businesses through innovative software solutions that solve real-world problems, enhance productivity, and create lasting value for our clients and their customers.
              </p>
            </div>

            {/* Value Card */}
            <div className="bg-[rgba(238,238,238,0.25)] rounded-[11px] p-6 md:p-8 lg:p-10 flex flex-col items-center text-center gap-4 md:gap-6 min-h-[290px]">
              <div className="w-[57px] h-[57px] rounded-full bg-[#EEF0FA] flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 relative">
                  <svg className="w-6 h-6 text-[#6C5CE7]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
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

      {/* What Drives Us Section */}
      <section className="w-full bg-[rgba(238,238,238,0.25)] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1728px] mx-auto">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-normal text-[#1316b8] m-0">
              What Drives Us
            </h2>
            <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-[24px] leading-[35px] text-[#1316b8] m-0 max-w-[900px]">
              Our core values shape every decision, every line of code, and every client interaction
            </p>
          </div>

          {/* Cards Grid - 3 cards top row, 1 centered below */}
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
            {/* Top Row - 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              {/* Innovation Card */}
              <div className="bg-white rounded-[11px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.02)] p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6 min-h-[319px]">
                <div className="w-[60px] h-[60px] rounded-[4px] bg-[rgba(19,22,184,0.1)] flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 relative">
                    <Image 
                      src="/icons/mobile-dev-icon.png" 
                      alt="Innovation icon" 
                      fill
                      className="object-contain"
                      sizes="24px"
                    />
                  </div>
                </div>
                <h3 className="font-lato font-semibold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] text-black m-0">
                  Innovation
                </h3>
                <p className="font-lato font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[31px] text-black m-0">
                  We stay at the forefront of technology trends, constantly exploring new tools, frameworks, and methodologies to deliver cutting-edge solutions. Our team embraces experimentation and creative problem-solving to turn ambitious ideas into reality.
                </p>
              </div>

              {/* Collaboration Card */}
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

              {/* Excellence Card */}
              <div className="bg-white rounded-[11px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.02)] p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6 min-h-[319px]">
                <div className="w-[60px] h-[60px] rounded-[4px] bg-[rgba(255,154,12,0.1)] flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 relative">
                    <Image 
                      src="/icons/web-dev-icon.png" 
                      alt="Excellence icon" 
                      fill
                      className="object-contain"
                      sizes="24px"
                    />
                  </div>
                </div>
                <h3 className="font-lato font-semibold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] text-black m-0">
                  Excellence
                </h3>
                <p className="font-lato font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[31px] text-black m-0">
                  Quality is non-negotiable. From clean, maintainable code to comprehensive testing and documentation, we maintain the highest standards in everything we deliver. Our commitment to excellence ensures long-term value and reliability.
                </p>
              </div>
            </div>

            {/* Bottom Row - Integrity Card Centered */}
            <div className="flex justify-center">
              <div className="w-full max-w-[487px] bg-white rounded-[11px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.02)] p-6 md:p-8 lg:p-10 flex flex-col gap-4 md:gap-6 min-h-[319px]">
                <div className="w-[60px] h-[60px] rounded-[4px] bg-[rgba(252,234,43,0.1)] flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 relative">
                    <Image 
                      src="/icons/cloud-icon.png" 
                      alt="Integrity icon" 
                      fill
                      className="object-contain"
                      sizes="24px"
                    />
                  </div>
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

      {/* Meet Our Team Section */}
      <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1728px] mx-auto">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-normal text-[#1316b8] m-0">
              Meet Our Team
            </h2>
            <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-[24px] leading-[35px] text-[#1316b8] m-0 max-w-[900px]">
              The talented individuals behind every successful project
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-[53px]">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-[32px]">
              {/* John Doe */}
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

              {/* Sarah Sarah */}
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

              {/* David David */}
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

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-[53px]">
              {/* Emma */}
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

              {/* James James */}
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

              {/* Lisa Lisa */}
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

      {/* Our Impact in Numbers Section */}
      <section className="w-full bg-[#1316b8] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1728px] mx-auto">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-normal text-white m-0">
              Our Impact in Numbers
            </h2>
            <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-[24px] leading-[35px] text-white m-0 max-w-[900px]">
              Six years of dedicated service and continuous growth
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
            {/* Projects Completed */}
            <div className="flex flex-col items-center text-center gap-4">
              <p className="font-lato font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[55px] leading-[35px] text-white m-0">
                +145
              </p>
              <p className="font-lato font-normal text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] text-white m-0">
                Projects Completed
              </p>
            </div>

            {/* Happy Clients */}
            <div className="flex flex-col items-center text-center gap-4">
              <p className="font-lato font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[55px] leading-[35px] text-white m-0">
                +200
              </p>
              <p className="font-lato font-normal text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] text-white m-0">
                Happy Clients
              </p>
            </div>

            {/* Team Members */}
            <div className="flex flex-col items-center text-center gap-4">
              <p className="font-lato font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[55px] leading-[35px] text-white m-0">
                +8
              </p>
              <p className="font-lato font-normal text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] text-white m-0">
                Team Members
              </p>
            </div>

            {/* Years of Excellence */}
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

      {/* Our Technical Expertise Section */}
      <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1728px] mx-auto">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-normal text-black m-0">
              Our Technical Expertise
            </h2>
            <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-[24px] leading-[35px] text-black m-0 max-w-[900px]">
              We work with cutting-edge technologies to deliver modern, scalable solutions
            </p>
          </div>

          {/* Technology Columns */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[181px] items-start justify-center">
            {/* Front-End Technologies */}
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

            {/* Backend & Database */}
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

            {/* Cloud & DevOps */}
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

      {/* Ready to Start Your Project Section */}
      <section className="w-full bg-[rgba(19,22,184,0.1)] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1728px] mx-auto">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-normal text-black m-0">
              Ready to Start Your Project?
            </h2>
            <p className="font-lato font-normal text-base sm:text-lg md:text-xl lg:text-[24px] leading-[35px] text-black m-0 max-w-[900px]">
              Let's discuss how we can help transform your ideas into powerful digital solutions
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center justify-center">
            {/* Primary Button */}
            <button className="bg-[#1316b8] text-white font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] rounded-[11px] px-8 md:px-12 lg:px-16 py-6 md:py-8 lg:py-[40px] min-h-[115px] w-full sm:w-auto min-w-[300px] md:min-w-[400px] lg:min-w-[492px] hover:opacity-90 transition-opacity">
              Get in Touch
            </button>

            {/* Secondary Button */}
            <button className="bg-white border-2 border-[#1316b8] text-[#1316b8] font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[35px] rounded-[11px] px-8 md:px-12 lg:px-16 py-6 md:py-8 lg:py-[40px] min-h-[115px] w-full sm:w-auto min-w-[300px] md:min-w-[400px] lg:min-w-[492px] hover:bg-[rgba(19,22,184,0.05)] transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;

