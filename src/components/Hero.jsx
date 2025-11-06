import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient glow overlay for depth without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(147,51,234,0.25),transparent_40%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Rocket size={16} className="text-cyan-400" />
          <span className="text-xs font-medium tracking-wide text-white/80">Skill Taste Assessment Program (STAP)</span>
        </div>

        <h1 className="mt-6 bg-gradient-to-br from-white via-white to-cyan-200 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
          Find Your Skill Fit in a Single Day
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          Join India’s fastest skill-taste workshop. Discover your best-fit skill—like AI, Cybersecurity, Data, Design & more—in just 6 hours.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#enroll"
            className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(34,211,238,0.25)] transition [background-size:200%] hover:[background-position:right]"
          >
            Book Your STAP Slot
          </a>
          <a
            href="#how"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-cyan-500/40 hover:text-white"
          >
            See How It Works
          </a>
        </div>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur">
          <Users size={16} className="text-emerald-400" />
          Trusted by 5,000+ learners
        </div>
      </div>
    </section>
  );
};

export default Hero;
