import React from 'react';

export const AIFeatures: React.FC = () => {
  return (
    <section className="bg-[rgba(246,247,251,1)] flex min-h-[772px] w-full flex-col items-stretch justify-center max-md:max-w-full">
      <h2 className="text-[#202437] text-center text-[40px] font-semibold leading-none max-md:max-w-full">
        Power Your Agency with AI
      </h2>
      <div className="flex w-full items-center gap-10 justify-center flex-wrap mt-[50px] max-md:max-w-full max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/ce27dcf6914469ccead2436ff53217406a96369a?placeholderIfAbsent=true"
          className="aspect-[1.11] object-contain w-[580px] self-stretch min-w-60 my-auto rounded-[20px] max-md:max-w-full hover:scale-105 transition-transform cursor-pointer"
          alt="AI feature demonstration 1"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/bf80393665bd493d7f62b18cc9057e3eecde73c6?placeholderIfAbsent=true"
          className="aspect-[1.11] object-contain w-[580px] self-stretch min-w-60 my-auto rounded-[20px] max-md:max-w-full hover:scale-105 transition-transform cursor-pointer"
          alt="AI feature demonstration 2"
        />
      </div>
    </section>
  );
};
