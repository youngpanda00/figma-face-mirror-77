import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black min-h-[229px] w-full pt-[50px] pb-[30px] px-[120px] max-md:max-w-full max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <div className="flex w-full gap-[40px_103px] flex-wrap max-md:max-w-full">
          <div className="min-w-60 text-xs text-white font-light leading-loose grow shrink w-[206px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/9d1a385061000f0b6b328c398dfa54ac72eed041?placeholderIfAbsent=true"
              className="aspect-[5.46] object-contain w-[164px] max-w-full"
              alt="LoftyWorks footer logo"
            />
            <p className="text-white mt-2.5">
              Intelligent solutions for the property sector
            </p>
          </div>
          
          <nav className="flex min-w-60 items-center gap-[35px] text-base text-white font-semibold whitespace-nowrap">
            <button className="self-stretch my-auto hover:text-gray-300 transition-colors">
              Home
            </button>
            <button className="self-stretch my-auto hover:text-gray-300 transition-colors">
              Software
            </button>
            <button className="self-stretch my-auto hover:text-gray-300 transition-colors">
              Service
            </button>
          </nav>
          
          <div className="flex items-center gap-2.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/75952a9044edc06f21b2a741f83aa06727670fcf?placeholderIfAbsent=true"
              className="aspect-[2.76] object-contain w-[94px] self-stretch shrink-0 my-auto rounded-md"
              alt="App store badge"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/212713f958d906c6e7ce5fc8f441eaef3f2100d9?placeholderIfAbsent=true"
              className="aspect-[2.65] object-contain w-[90px] self-stretch shrink-0 my-auto"
              alt="Google play badge"
            />
          </div>
          
          <address className="text-xs text-white font-light leading-loose grow shrink w-[171px] not-italic">
            <p className="text-white">
              phone (whatsapp): +44 330 321 3500
            </p>
            <p className="text-white">
              sales@rentancy.com
            </p>
            <p className="text-white">
              ico registration company #12239915
            </p>
          </address>
        </div>
        
        <hr className="border min-h-0 w-full mt-[35px] border-[rgba(255,255,255,0.1)] border-solid max-md:max-w-full" />
        
        <div className="flex w-full items-center text-sm text-white font-normal flex-wrap mt-[35px] max-md:max-w-full">
          <div className="self-stretch flex items-center gap-1.5 whitespace-nowrap my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/5078b7a29e4c4dd0443d6cda736ed937e7adafe8?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
              alt="US flag"
            />
            <span className="text-white self-stretch my-auto">US</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/2d9f8b87ae5ec5e5b143fa59de701b95b2f06cd4?placeholderIfAbsent=true"
              className="aspect-[2] object-contain w-2 self-stretch shrink-0 my-auto"
              alt="Dropdown arrow"
            />
          </div>
          
          <nav className="self-stretch flex min-w-60 items-center gap-[30px] my-auto">
            <button className="text-white self-stretch my-auto hover:text-gray-300 transition-colors">
              Terms & Conditions
            </button>
            <button className="text-white self-stretch my-auto hover:text-gray-300 transition-colors">
              Privacy Policy
            </button>
            <button className="text-white self-stretch my-auto hover:text-gray-300 transition-colors">
              Cookie Settings
            </button>
          </nav>
          
          <p className="text-white text-right self-stretch my-auto">
            © Rentancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
