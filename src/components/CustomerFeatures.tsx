import React, { useState } from 'react';

interface FeatureItemProps {
  title: string;
  description?: string;
  isActive: boolean;
  onClick: () => void;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, isActive, onClick }) => {
  return (
    <div className="w-full">
      <button
        onClick={onClick}
        className={`flex w-full items-center gap-[40px_100px] font-semibold justify-between flex-wrap mt-6 max-md:max-w-full text-left hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : 'text-[#202437]'}`}
      >
        <span className="self-stretch my-auto text-2xl">
          {title}
        </span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/a6bd6d00bef78fbffc46cd1197f53a93cb5856a2?placeholderIfAbsent=true"
          className={`aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto transition-transform ${isActive ? 'rotate-90' : ''}`}
          alt="Expand icon"
        />
      </button>
      {isActive && description && (
        <div className="text-[#202437] text-base font-normal mt-[15px] max-md:max-w-full">
          {description}
        </div>
      )}
      {isActive && (
        <button className="self-stretch bg-[rgba(93,81,226,1)] min-h-10 w-40 max-w-full text-white font-bold text-center mt-[15px] rounded-[100px] hover:bg-[rgba(93,81,226,0.9)] transition-colors flex items-center justify-center">
          Get Started
        </button>
      )}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/54a65708f28cec8011f3bb9bbe1469b3882c0e76?placeholderIfAbsent=true"
        className="aspect-[500] object-contain w-[500px] stroke-[1px] stroke-[#EBECF1] max-w-full mt-6"
        alt="Divider line"
      />
    </div>
  );
};

export const CustomerFeatures: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "AI Lead Automation",
      description: "Respond and nurture leads while you are on the road"
    },
    {
      title: "Website Builder"
    },
    {
      title: "Secure Payments"
    },
    {
      title: "Inbox Hub"
    },
    {
      title: "Task Management"
    }
  ];

  return (
    <section className="bg-white flex min-h-[751px] w-full max-w-[1439px] flex-col items-stretch text-[#202437] justify-center px-[120px] py-20 max-md:max-w-full max-md:px-5">
      <h2 className="text-[#202437] text-center text-[40px] font-semibold leading-none self-center max-md:max-w-full">
        Why customers love LoftyWorks
      </h2>
      <div className="flex w-full items-center gap-[39px] text-2xl justify-between flex-1 flex-wrap h-full mt-[50px] max-md:max-w-full max-md:mt-10">
        <article className="bg-white self-stretch min-w-60 min-h-[500px] w-[580px] my-auto px-10 py-[17px] rounded-[20px] max-md:max-w-full max-md:px-5">
          <div className="w-full text-base max-md:max-w-full">
            {features.map((feature, index) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                description={feature.description}
                isActive={activeFeature === index}
                onClick={() => setActiveFeature(index)}
              />
            ))}
          </div>
        </article>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/f9bb3b7dca4ba81dcb44a0ffbe9dadc7a950e257?placeholderIfAbsent=true"
          className="aspect-[1.16] object-contain w-[580px] self-stretch min-w-60 my-auto rounded-[20px] max-md:max-w-full"
          alt="Customer features demonstration"
        />
      </div>
    </section>
  );
};
