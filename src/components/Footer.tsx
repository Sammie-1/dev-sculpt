import Image from 'next/image';

const Footer = () => {
  const services = [
    'Custom Development',
    'Mobile Applications',
    'Web Development',
    'Cloud Studios',
  ];

  const companyLinks = [
    'About Us',
    'Our Process',
    'Portfolio',
    'Contact',
  ];

  const linkedinIcon = '/icons/linkedin-icon.png';
  const githubIcon = '/icons/github-icon.png';
  const twitterIcon = '/icons/twitter-icon.png';
  const lineIcon = '/icons/footer-line.svg';

  return (
    <footer className="w-full bg-black py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1728px] mx-auto flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="flex flex-col gap-6">
            <div className="w-[60px] h-[60px] bg-[#130f78] rounded-[4px] flex items-center justify-center">
              <span className="text-white text-[20px] font-bold font-lato">
                DS
              </span>
            </div>

            <p className="font-lato font-bold text-base md:text-lg lg:text-[18px] leading-[1.67] text-white m-0">
              Shaping digital ideas into scalable solutions. We craft innovative software that empowers businesses to thrive in the digital age.
            </p>

            <div className="flex gap-4 mt-2">
              <Image src={linkedinIcon} alt="LinkedIn" width={50} height={50} className="cursor-pointer hover:opacity-80 transition-opacity duration-200" />
              <Image src={githubIcon} alt="GitHub" width={50} height={50} className="cursor-pointer hover:opacity-80 transition-opacity duration-200" />
              <Image src={twitterIcon} alt="Twitter" width={50} height={50} className="cursor-pointer hover:opacity-80 transition-opacity duration-200" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-lato font-bold text-lg md:text-xl lg:text-[20px] text-white m-0">
              Services
            </h3>
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={`#${service.toLowerCase().replace(' ', '-')}`}
                    className="font-lato font-normal text-base text-[rgba(255,255,255,0.75)] leading-[1.88] hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-lato font-bold text-lg md:text-xl lg:text-[20px] text-white m-0">
              Company
            </h3>
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="font-lato font-normal text-base text-[rgba(255,255,255,0.75)] leading-[1.88] hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full h-px relative">
          <Image src={lineIcon} alt="" fill className="object-cover" />
        </div>

        <div className="text-center">
          <p className="font-lato font-bold text-base md:text-lg lg:text-[18px] leading-[1.67] text-white m-0">
            © 2024 Dev Sculpt Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

