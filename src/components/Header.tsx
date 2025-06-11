
import React, { useState } from 'react';
import { DemoRequestModal } from './DemoRequestModal';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex min-h-[60px] w-full flex-col items-stretch justify-center px-[120px] max-md:max-w-full max-md:px-5">
      <nav className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <div className="self-stretch flex gap-[7px] my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/b921dd9b57e4d899b875aab4e1eb06eda0fb055d?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 shrink-0"
            alt="LoftyWorks logo icon"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/6f5a0f8981de9446274f00d959d69dcce8cc7ed3?placeholderIfAbsent=true"
            className="aspect-[2.53] object-contain w-[53px] shrink-0"
            alt="LoftyWorks logo text"
          />
        </div>
        
        <div className="self-stretch flex min-w-60 min-h-6 items-center gap-[30px] text-base text-white font-semibold whitespace-nowrap flex-wrap w-[485px] my-auto max-md:max-w-full">
          <button className="self-stretch my-auto hover:text-gray-200 transition-colors">
            Products
          </button>
          <button className="self-stretch my-auto hover:text-gray-200 transition-colors">
            Solutions
          </button>
          <button className="self-stretch my-auto hover:text-gray-200 transition-colors">
            Resources
          </button>
          <button className="self-stretch my-auto hover:text-gray-200 transition-colors">
            Partners
          </button>
          <button className="self-stretch my-auto hover:text-gray-200 transition-colors">
            Company
          </button>
        </div>
        
        <div className="self-stretch flex items-center gap-[30px] text-sm text-white font-semibold text-center leading-none my-auto">
          <button className="self-stretch my-auto hover:text-gray-200 transition-colors">
            Sign In
          </button>
          <DemoRequestModal>
            <button className="self-stretch border gap-2.5 w-[142px] my-auto px-[15px] py-2 rounded-[43px] border-white border-solid hover:bg-white hover:text-black transition-colors">
              Request a Demo
            </button>
          </DemoRequestModal>
        </div>
      </nav>
    </header>
  );
};
