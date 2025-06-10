import React from 'react';

export const CTASection: React.FC = () => {
  return (
    <section className="flex flex-col relative min-h-[415px] w-full items-stretch text-base text-white text-center justify-center px-60 py-[81px] max-md:max-w-full max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/325ca83438eef0eae59d3b87a80917398a777929?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Background image"
      />
      <div className="relative flex w-full max-w-[959px] flex-col items-stretch max-md:max-w-full">
        <h2 className="text-[40px] font-semibold leading-none max-md:max-w-full">
          The Power of 4X
        </h2>
        <p className="font-normal mt-[29px] max-md:max-w-full">
          LoftyWorks is a powerful all-in-one platform where data and
          processes flow seamlessly between agent teams.
        </p>
        <div className="self-center flex min-h-[50px] gap-[29px] mt-[29px]" />
        <button className="self-center border min-h-[50px] w-[260px] max-w-full text-white font-bold mt-[29px] rounded-[100px] border-white border-solid hover:bg-white hover:text-black transition-colors flex items-center justify-center">
          Let's Talk
        </button>
      </div>
    </section>
  );
};
