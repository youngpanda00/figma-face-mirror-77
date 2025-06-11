import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FeatureCards } from '@/components/FeatureCards';
import { PartnerLogos } from '@/components/PartnerLogos';
import { AIFeatures } from '@/components/AIFeatures';
import { CustomerFeatures } from '@/components/CustomerFeatures';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="bg-white flex min-h-[1080px] flex-col overflow-hidden items-center">
      <div className="flex flex-col relative min-h-[700px] h-[700px] w-full max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/b7536598065f4e65a807787a2ac37040/46ad1b57fd4bfdbb03c09085359ae23e772768d2?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Hero background Test OK"
        />
        <Header />
        <Hero />
        <FeatureCards />
      </div>
      
      <div className="self-stretch flex min-h-[200px] w-full max-md:max-w-full" />
      
      <PartnerLogos />
      
      <AIFeatures />
      
      <CustomerFeatures />
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Index;
