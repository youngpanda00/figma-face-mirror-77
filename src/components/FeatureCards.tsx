import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  hasRightBorder?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, hasRightBorder = true }) => {
  return (
    <article className={`items-center self-stretch flex min-w-60 min-h-[306px] grow shrink w-60 my-auto px-10 max-md:px-5 ${hasRightBorder ? 'border-r-[color:var(--solid-black-f-6-f-7-fb,#F6F7FB)] border-r border-solid' : ''}`}>
      <div className="self-stretch w-[220px] my-auto">
        <div className="w-full">
          <div className="w-full">
            <h3 className="text-xl font-semibold">
              {title}
            </h3>
            <p className="text-base font-normal leading-6 mt-2.5">
              {description}
            </p>
          </div>
        </div>
        <button className="flex w-[97px] items-center gap-2.5 text-sm font-normal leading-6 justify-between mt-9 hover:text-blue-600 transition-colors group">
          <span className="self-stretch my-auto">Learn More</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/a8b6d847a566d83cbf684abe5f48ecbfa1b397a5?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-3.5 self-stretch shrink-0 my-auto group-hover:translate-x-1 transition-transform"
            alt="Arrow icon"
          />
        </button>
      </div>
    </article>
  );
};

export const FeatureCards: React.FC = () => {
  const features = [
    {
      title: "Sales CRM",
      description: "Automate marketing, track leads, and convert prospects into deals, driving successful transactions."
    },
    {
      title: "Lettings",
      description: "Easily manage lettings, day-to-day property tasks, and renewals with a modern, integrated platform."
    },
    {
      title: "Website",
      description: "Showcase your brand and capture more qualified leads with a custom, performance-driven website."
    },
    {
      title: "Payment Processing",
      description: "Manage rent collection, payments, and statements with reliable automation and full transparency."
    }
  ];

  return (
    <section className="relative flex w-full flex-col items-center text-[#202437] justify-center max-md:max-w-full">
      <div className="bg-white shadow-[0px_5px_5px_rgba(0,0,0,0.05)] flex min-h-[346px] w-[1200px] max-w-full items-center flex-wrap rounded-[20px]">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            hasRightBorder={index < features.length - 1}
          />
        ))}
      </div>
    </section>
  );
};
