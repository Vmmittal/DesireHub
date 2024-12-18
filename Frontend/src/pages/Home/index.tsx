import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import CTASection from './CTASection';
import Test from '../Test/test';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Test />
    </div>
  );
};

export default Home;