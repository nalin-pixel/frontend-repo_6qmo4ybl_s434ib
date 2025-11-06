import React from 'react';
import Hero from './components/Hero';
import SkillsGrid from './components/SkillsGrid';
import Experience from './components/Experience';
import TestimonialsCTA from './components/TestimonialsCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white antialiased">
      <Hero />
      <SkillsGrid />
      <Experience />
      <TestimonialsCTA />
    </div>
  );
}

export default App;
