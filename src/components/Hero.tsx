
import React from 'react';
import { DemoRequestModal } from './DemoRequestModal';

export const Hero: React.FC = () => {
  return (
    <section className="relative flex w-full flex-col items-center text-white justify-center max-md:max-w-full">
      <div className="flex min-h-[400px] w-[1200px] max-w-full items-center gap-9 justify-between flex-wrap">
        <article className="self-stretch flex min-w-60 flex-col items-stretch w-[584px] my-auto max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <h1 className="text-[50px] font-bold leading-[60px] max-md:max-w-full max-md:text-[40px] max-md:leading-[53px]">
              The All-In-One Solution For Estate Agents
            </h1>
            <p className="text-base font-medium leading-5 mt-5 max-md:max-w-full">
              Grow your business and manage every step, from lead generation
              to rent collection, with one powerful platform.
            </p>
          </div>
          <div className="flex items-center gap-5 text-base font-bold text-center leading-none mt-[30px]">
            <DemoRequestModal>
              <button className="self-stretch border min-h-[50px] w-[180px] my-auto rounded-[100px] border-white border-solid hover:bg-white hover:text-black transition-colors flex items-center justify-center">
                Book a Demo
              </button>
            </DemoRequestModal>
            <button className="self-stretch bg-[rgba(27,202,150,1)] min-h-[50px] w-[180px] my-auto rounded-[100px] hover:bg-[rgba(27,202,150,0.9)] transition-colors flex items-center justify-center">
              Sign up
            </button>
          </div>
        </article>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/a9075f00420aa3b64d73a2e03b38d2389759d632?placeholderIfAbsent=true"
          className="aspect-[1.45] object-contain w-[580px] self-stretch min-w-60 my-auto max-md:max-w-full"
          alt="LoftyWorks platform dashboard preview"
        />
      </div>
    </section>
  );
};
