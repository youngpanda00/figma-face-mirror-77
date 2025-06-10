import React from 'react';

export const PartnerLogos: React.FC = () => {
  const partners = [
    { src: "https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/4f66dbc0d6507865f15d7c42aa029fd84c2274e9?placeholderIfAbsent=true", width: "210px", aspectRatio: "6.99" },
    { src: "https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/ea714e49f4457e05608b292f3843b27c23d2cb00?placeholderIfAbsent=true", width: "95px", aspectRatio: "3.52" },
    { src: "https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/f5b9b90b4f50431dee9ee401415e39e5978df4fe?placeholderIfAbsent=true", width: "89px", aspectRatio: "2.12" },
    { src: "https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/6dbd7ac31c269974728532d47be6eb90a53ccdeb?placeholderIfAbsent=true", width: "98px", aspectRatio: "2.33" },
    { src: "https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/7ed25df602b70cb637f1392cbbfc006ff4c3e6fd?placeholderIfAbsent=true", width: "213px", aspectRatio: "5.32" },
    { src: "https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/19fda6f442d36eed2becab06a2845ba6712b4a9b?placeholderIfAbsent=true", width: "133px", aspectRatio: "2.66" }
  ];

  return (
    <section className="overflow-x-auto flex min-h-[200px] w-full items-center gap-[40px_60px] overflow-hidden justify-center flex-wrap max-md:max-w-full">
      {partners.map((partner, index) => (
        <img
          key={index}
          src={partner.src}
          className={`aspect-[${partner.aspectRatio}] object-contain w-[${partner.width}] self-stretch shrink-0 my-auto opacity-60 hover:opacity-100 transition-opacity`}
          alt={`Partner logo ${index + 1}`}
        />
      ))}
    </section>
  );
};
