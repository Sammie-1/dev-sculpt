import Image from 'next/image';

const Industries = () => {
  const industries = [
    {
      name: 'Transport & Logistics',
      color: '#ff9a0c',
      bgColor: 'bg-[rgba(255,154,12,0.15)]',
      icon: '/icons/transport-icon.png',
    },
    {
      name: 'Finance and Fintech',
      color: '#0f6878',
      bgColor: 'bg-[rgba(15,104,120,0.15)]',
      icon: '/icons/finance-icon.png',
    },
    {
      name: 'Education',
      color: '#09a433',
      bgColor: 'bg-[rgba(9,164,51,0.15)]',
      icon: '/icons/education-icon.png',
    },
    {
      name: 'Health Care',
      color: '#de2e2e',
      bgColor: 'bg-[rgba(222,46,46,0.15)]',
      icon: '/icons/healthcare-icon.png',
    },
    {
      name: 'Retail & E-commerce',
      color: '#1316b8',
      bgColor: 'bg-[rgba(19,22,184,0.15)]',
      icon: '/icons/retail-icon.png',
    },
    {
      name: 'Startups & SMEs',
      color: '#1eadd4',
      bgColor: 'bg-[rgba(30,173,212,0.15)]',
      icon: '/icons/startup-icon.png',
    },
  ];

  return (
    <section className="w-full bg-[rgba(19,22,184,0.05)] py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1728px] mx-auto flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div className="text-center">
          <h2 className="font-lato font-bold text-4xl md:text-5xl lg:text-[65px] leading-tight text-black m-0">
            Industries We Serve
          </h2>
        </div>

        <p className="font-lato font-normal text-lg md:text-xl lg:text-[24px] leading-[1.46] text-[rgba(0,0,0,0.75)] text-center max-w-4xl mx-auto m-0">
          We bring our expertise to diverse industries, delivering solutions that understand your sector's unique challenges and opportunities.
        </p>

        <div className="flex flex-wrap justify-center gap-[22px] md:gap-[30px]">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`${industry.bgColor} rounded-[11px] px-8 py-6 flex items-center gap-3 min-h-[83px] min-w-[280px] md:min-w-[339px]`}
            >
              <Image src={industry.icon} alt="" width={24} height={24} className="flex-shrink-0" />
              <p 
                className="font-lato font-normal text-base md:text-lg lg:text-[24px] leading-[1.46] text-center m-0"
                style={{ color: industry.color }}
              >
                {industry.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;

