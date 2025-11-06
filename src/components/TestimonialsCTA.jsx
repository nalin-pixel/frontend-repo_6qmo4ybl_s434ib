import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Aarav',
    role: 'B.Tech, 3rd Year',
    quote: 'The one-day taste made it obvious I should pursue Data + Product. So focused, so fun.',
  },
  {
    name: 'Diya',
    role: 'Design Student',
    quote: 'Loved the leaderboard energy. The report nailed my strengths and gave a clear path.',
  },
  {
    name: 'Kabir',
    role: 'Early Professional',
    quote: '6 hours well spent. Cybersecurity challenge was thrilling yet beginner-friendly.',
  },
];

const TestimonialsCTA = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const current = testimonials[index];

  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        {/* Testimonials Slider */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="mb-3 flex items-center gap-2 text-cyan-300">
            <Quote size={18} />
            <span className="text-sm font-medium">What learners say</span>
          </div>
          <p className="text-lg text-white/90">“{current.quote}”</p>
          <div className="mt-4 flex items-center justify-between text-sm text-white/70">
            <div>
              <span className="font-semibold text-white">{current.name}</span>
              <span className="ml-2">• {current.role}</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                aria-label="Previous"
                onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
                className="rounded-full border border-white/10 bg-white/5 p-2 hover:border-cyan-400/40"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Next"
                onClick={() => setIndex((index + 1) % testimonials.length)}
                className="rounded-full border border-white/10 bg-white/5 p-2 hover:border-cyan-400/40"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div id="enroll" className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-emerald-500/10 p-8 text-center shadow-[0_0_80px_rgba(56,189,248,0.15)]">
          <h3 className="text-2xl font-bold">Your Next Step Starts Here.</h3>
          <p className="mt-2 text-white/70">Enroll now and get a sample report preview in your inbox.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500 px-6 py-3 text-sm font-semibold text-white transition [background-size:200%] hover:[background-position:right]"
            >
              Enroll Now
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-cyan-500/40 hover:text-white"
            >
              Get Sample Report
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 grid grid-cols-2 items-center gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:grid-cols-4">
          <div>
            <p className="font-semibold text-white">Skilltrai</p>
            <div className="mt-2 flex gap-1 text-amber-300">
              <Star size={14} />
              <Star size={14} />
              <Star size={14} />
              <Star size={14} />
              <Star size={14} />
            </div>
          </div>
          <div className="space-y-2">
            <p className="font-medium text-white">About</p>
            <a href="#" className="block hover:text-cyan-300">Our Story</a>
            <a href="#" className="block hover:text-cyan-300">Careers</a>
          </div>
          <div className="space-y-2">
            <p className="font-medium text-white">Contact</p>
            <a href="#" className="block hover:text-cyan-300">Support</a>
            <a href="#" className="block hover:text-cyan-300">Email</a>
          </div>
          <div className="space-y-2">
            <p className="font-medium text-white">Legal</p>
            <a href="#" className="block hover:text-cyan-300">Terms</a>
            <a href="#" className="block hover:text-cyan-300">Privacy</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default TestimonialsCTA;
