import Image from 'next/image';

const Contact = () => {
  const mailIcon = '/icons/mail-icon.png';

  return (
    <section id="contact" className="w-full bg-[#1316b8] py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1728px] mx-auto flex flex-col gap-12 md:gap-16 lg:gap-20">
        <div className="text-center">
          <h2 className="font-lato font-bold text-4xl md:text-5xl lg:text-[65px] leading-tight text-white m-0">
            Ready to sculpt your next digital masterpiece?
          </h2>
        </div>

        <p className="font-lato font-normal text-lg md:text-xl lg:text-[24px] leading-[1.46] text-white text-center max-w-4xl mx-auto m-0">
          Let's discuss your project and explore how we can bring your vision to life
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="flex gap-4">
              <div className="w-[60px] h-[60px] bg-[rgba(255,255,255,0.35)] rounded-[6px] flex items-center justify-center flex-shrink-0">
                <Image src={mailIcon} alt="" width={30} height={30} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-lato font-semibold text-xl md:text-2xl lg:text-[24px] leading-[1.46] text-white m-0">
                  Email Us
                </h3>
                <p className="font-lato font-normal text-base md:text-lg lg:text-[18px] leading-[1.94] text-white m-0">
                  DevSculpt@gmail.com
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-[60px] h-[60px] bg-[rgba(255,255,255,0.35)] rounded-[6px] flex items-center justify-center flex-shrink-0">
                <Image src={mailIcon} alt="" width={30} height={30} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-lato font-semibold text-xl md:text-2xl lg:text-[24px] leading-[1.46] text-white m-0">
                  Call Us
                </h3>
                <p className="font-lato font-normal text-base md:text-lg lg:text-[18px] leading-[1.94] text-white m-0">
                  +234 806 381 8645
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-[60px] h-[60px] bg-[rgba(255,255,255,0.35)] rounded-[6px] flex items-center justify-center flex-shrink-0">
                <Image src={mailIcon} alt="" width={30} height={30} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-lato font-semibold text-xl md:text-2xl lg:text-[24px] leading-[1.46] text-white m-0">
                  Visit Us
                </h3>
                <p className="font-lato font-normal text-base md:text-lg lg:text-[18px] leading-[1.22] text-white m-0 whitespace-pre-line">
                  No 4b Ogudu Express Way,{'\n'}Lagos Nigeria
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[11px] p-6 md:p-8 lg:p-10">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-lato font-normal text-base md:text-lg lg:text-[18px] leading-[1.94] text-black">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full h-[63px] border border-[#EEEEEE] rounded-[11px] px-4 font-lato font-normal text-base md:text-lg text-[rgba(0,0,0,0.25)] focus:outline-none focus:border-[#130f78]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-lato font-normal text-base md:text-lg lg:text-[18px] leading-[1.94] text-black">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full h-[63px] border border-[#EEEEEE] rounded-[11px] px-4 font-lato font-normal text-base md:text-lg text-[rgba(0,0,0,0.25)] focus:outline-none focus:border-[#130f78]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-lato font-normal text-base md:text-lg lg:text-[18px] leading-[1.94] text-black">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-[63px] border border-[#EEEEEE] rounded-[11px] px-4 font-lato font-normal text-base md:text-lg text-[rgba(0,0,0,0.25)] focus:outline-none focus:border-[#130f78]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-lato font-normal text-base md:text-lg lg:text-[18px] leading-[1.94] text-black">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Enter your company name"
                  className="w-full h-[63px] border border-[#EEEEEE] rounded-[11px] px-4 font-lato font-normal text-base md:text-lg text-[rgba(0,0,0,0.25)] focus:outline-none focus:border-[#130f78]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="font-lato font-normal text-base md:text-lg lg:text-[18px] leading-[1.94] text-black">
                    Project Description
                  </label>
                  <span className="font-lato font-normal text-[14px] text-black">
                    (Max of 500 words)
                  </span>
                </div>
                <textarea
                  placeholder="Describe your project requirements..."
                  rows={5}
                  className="w-full h-[149px] border border-[#EEEEEE] rounded-[11px] px-4 py-3 font-lato font-normal text-base md:text-lg text-[rgba(0,0,0,0.25)] focus:outline-none focus:border-[#130f78] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1316b8] text-white rounded-[11px] py-4 font-lato font-semibold text-base md:text-lg lg:text-[18px] leading-[1.94] cursor-pointer transition-all duration-200 hover:bg-[#0f1199] active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

