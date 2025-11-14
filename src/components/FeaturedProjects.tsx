import Image from 'next/image';

const FeaturedProjects = () => {
  const projects = [
    {
      title: 'Fintech Mobile Banking Application',
      description: 'Comprehensive mobile banking solution with advanced \nsecurity features and intuitive \nuser experience.',
      image: '/images/fintech1.png',
      tags: [
        { name: 'React Native', color: '#ff9a0c', bgColor: 'bg-[rgba(255,154,12,0.15)]' },
        { name: 'Figma', color: '#09a433', bgColor: 'bg-[rgba(9,164,51,0.15)]' },
        { name: 'AWS', color: '#de2e2e', bgColor: 'bg-[rgba(222,46,46,0.15)]' },
      ],
    },
    {
      title: 'Fintech Mobile Banking Application',
      description: 'Comprehensive mobile banking solution with advanced \nsecurity features and intuitive \nuser experience.',
      image: '/images/fintech2.png',
      tags: [
        { name: 'React Native', color: '#ff9a0c', bgColor: 'bg-[rgba(255,154,12,0.15)]' },
        { name: 'Figma', color: '#09a433', bgColor: 'bg-[rgba(9,164,51,0.15)]' },
        { name: 'AWS', color: '#de2e2e', bgColor: 'bg-[rgba(222,46,46,0.15)]' },
      ],
    },
    {
      title: 'Fintech Mobile Banking Application',
      description: 'Comprehensive mobile banking solution with advanced \nsecurity features and intuitive \nuser experience.',
      image: '/images/fintech3.png',
      tags: [
        { name: 'React Native', color: '#ff9a0c', bgColor: 'bg-[rgba(255,154,12,0.15)]' },
        { name: 'Figma', color: '#09a433', bgColor: 'bg-[rgba(9,164,51,0.15)]' },
        { name: 'AWS', color: '#de2e2e', bgColor: 'bg-[rgba(222,46,46,0.15)]' },
      ],
    },
  ];

  return (
    <section className="w-full bg-[rgba(238,238,238,0.25)] py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1728px] mx-auto flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div className="text-center">
          <h2 className="font-lato font-bold text-4xl md:text-5xl lg:text-[65px] leading-tight text-[#1316b8] m-0">
            Featured Projects
          </h2>
        </div>

        <p className="font-lato font-normal text-lg md:text-xl lg:text-[24px] leading-[1.46] text-[rgba(0,0,0,0.75)] text-center max-w-4xl mx-auto m-0">
          Showcasing our expertise through successful project implementations
        </p>

        <div className="w-full overflow-hidden relative">
          <div className="flex gap-[34px] animate-scroll px-4 md:px-8 lg:px-12">
            {[...projects, ...projects, ...projects].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-[11px] overflow-hidden flex flex-col flex-shrink-0 w-full max-w-[580px] min-w-[580px] transition-all duration-500 ease-in-out opacity-70 scale-95 hover:opacity-100 hover:scale-100 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-full h-[329px] relative rounded-t-[11px] overflow-hidden">
                  <div className="absolute inset-0 bg-[#1316b8] rounded-t-[11px]"></div>
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                    sizes="580px"
                  />
                </div>

                <div className="p-6 md:p-8 flex flex-col gap-4">
                  <h3 className="font-lato font-bold text-xl md:text-2xl lg:text-[24px] leading-tight text-black m-0">
                    {project.title}
                  </h3>

                  <p className="font-lato font-normal text-base md:text-lg lg:text-[20px] leading-[1.50] text-black m-0 whitespace-pre-line">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className={`${tag.bgColor} rounded-[7px] px-4 py-2 min-w-[143px] flex items-center justify-center`}
                      >
                        <span
                          className="font-lato font-normal text-base md:text-lg lg:text-[20px] leading-[1.50]"
                          style={{ color: tag.color }}
                        >
                          {tag.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

