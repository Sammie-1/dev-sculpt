import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AboutUsPage() {
  const meetingImage = '/images/about-meeting.jpg';
  
  const innovationIconBg = '/icons/innovation-icon-bg.svg';
  const innovationIcon = '/icons/innovation-icon.svg';
  const collaborationIconBg = '/icons/collaboration-icon-bg.svg';
  const collaborationIcon1 = '/icons/collaboration-icon-1.svg';
  const collaborationIcon2 = '/icons/collaboration-icon-2.svg';
  const excellenceIcon = '/icons/excellence-icon.png';
  const integrityIcon = '/icons/integrity-icon.png';

  const coreValues = [
    {
      title: 'Innovation',
      description: 'Turning bold ideas into real-world solutions.',
      iconBg: innovationIconBg,
      icon: innovationIcon,
      iconType: 'single'
    },
    {
      title: 'Collaboration',
      description: 'Partnering with clients for lasting impact.',
      iconBg: collaborationIconBg,
      icon1: collaborationIcon1,
      icon2: collaborationIcon2,
      iconType: 'double'
    },
    {
      title: 'Excellence',
      description: 'Delivering top-notch solutions with precision.',
      icon: excellenceIcon,
      iconType: 'single'
    },
    {
      title: 'Integrity',
      description: 'Building trust through transparency.',
      icon: integrityIcon,
      iconType: 'single'
    }
  ];

  return (
    <>
      <Header />
      <main>
        <section className="bg-[rgba(245,245,245,0.42)] w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 relative">
          <div className="max-w-[1728px] mx-auto flex flex-col gap-8 md:gap-12 lg:gap-16">
            <div className="text-center flex flex-col gap-4 md:gap-6">
              <h1 className="font-lato font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-tight text-[#130f78] m-0 text-center">
                About Dev Sculpt Studio
              </h1>
              <p className="font-lato font-normal text-lg md:text-xl lg:text-[24px] leading-[1.46] text-[rgba(0,0,0,0.75)] text-center max-w-[1000px] mx-auto m-0">
                Dev Sculpt Studio is a forward-thinking software development company committed to transforming complex problems into simple, powerful, and user-friendly solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              <div className="font-lato font-normal text-base md:text-lg lg:text-[24px] leading-[2.17] text-[rgba(0,0,0,0.75)]">
                <p className="m-0 mb-4">Our name reflects our process: just like a sculptor shapes raw material into art, we shape raw ideas into robust digital products. With a focus on quality, innovation, and scalability, we help organizations stay ahead in today's fast-changing digital world.</p>
                <p className="m-0 mb-4">Founded with a vision to bridge the gap between innovative ideas and practical solutions, Dev Sculpt Studio has been at the forefront of digital transformation. We combine technical expertise with creative problem-solving to deliver solutions that not only meet but exceed our clients' expectations.</p>
                <p className="m-0">Our team of experienced developers, designers, and strategists work collaboratively to ensure every project is executed with precision and care. We believe in building long-term partnerships with our clients, understanding their unique needs, and delivering solutions that drive real business value.</p>
              </div>
              <div className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-[11px] overflow-hidden relative">
                <Image 
                  src={meetingImage} 
                  alt="Team meeting at Dev Sculpt Studio" 
                  fill
                  className="object-cover object-center rounded-[11px]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 items-center">
              <h2 className="font-lato font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[35px] leading-tight text-[#130f78] text-center underline underline-offset-2 m-0">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full max-w-[1400px]">
                {coreValues.map((value, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-[11px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.02)] p-5 md:p-6 lg:p-8 flex flex-col items-center text-center min-h-[160px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[222px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_8px_16px_0px_rgba(0,0,0,0.1)]"
                  >
                    <div className="flex flex-col items-center gap-4 w-full">
                      <div className="relative w-12 h-12 flex items-center justify-center mb-2">
                        {value.iconType === 'double' && value.iconBg ? (
                          <>
                            <div className="absolute inset-0 w-full h-full">
                              <Image src={value.iconBg} alt="" fill className="object-contain" />
                            </div>
                            <div className="relative w-6 h-6 flex items-center justify-center z-[1] gap-1">
                              {value.icon1 && <Image src={value.icon1} alt="" width={24} height={24} className="object-contain" />}
                              {value.icon2 && <Image src={value.icon2} alt="" width={24} height={24} className="object-contain" />}
                            </div>
                          </>
                        ) : value.title === 'Excellence' || value.title === 'Integrity' ? (
                          <div className="relative w-full h-full flex items-center justify-center">
                            {value.icon && <Image src={value.icon} alt="" width={48} height={48} className="object-contain" />}
                          </div>
                        ) : value.iconBg ? (
                          <>
                            <div className="absolute inset-0 w-full h-full">
                              <Image src={value.iconBg} alt="" fill className="object-contain" />
                            </div>
                            <div className="relative w-6 h-6 flex items-center justify-center z-[1]">
                              {value.icon && <Image src={value.icon} alt="" width={24} height={24} className="object-contain" />}
                            </div>
                          </>
                        ) : null}
                      </div>
                      <h3 className="font-lato font-bold text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[2.17] text-black m-0">{value.title}</h3>
                      <p className="font-lato font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[1.83] text-[rgba(0,0,0,0.75)] m-0 text-center">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[11px] p-6 md:p-8 lg:p-12 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.02)]">
              <div className="flex flex-col gap-6 md:gap-8">
                <h2 className="font-lato font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight text-[#130f78] m-0 text-center">
                  Our Mission
                </h2>
                <p className="font-lato font-normal text-base md:text-lg lg:text-[20px] leading-[1.6] text-[rgba(0,0,0,0.75)] text-center max-w-4xl mx-auto m-0">
                  To empower businesses and individuals by transforming their digital visions into reality. We strive to create software solutions that are not only technically superior but also intuitive, scalable, and aligned with our clients' long-term goals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


