import React from 'react';
import { Trophy, Zap, Award, ShieldCheck, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const StatPill = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80">
    <Icon size={14} className="text-cyan-400" />
    <span className="text-white/70">{label}</span>
    <span className="font-semibold text-white">{value}</span>
  </div>
);

const Experience = () => {
  return (
    <section id="how" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Gamified Experience */}
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="mb-4 inline-flex items-center gap-2">
              <Trophy className="text-emerald-400" size={18} />
              <h3 className="text-lg font-semibold">Learn. Play. Win.</h3>
            </div>
            <p className="text-sm text-white/70">Score points across performance, speed and creativity with live challenges.</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-xs text-white/60">Performance</p>
                <p className="mt-1 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-2xl font-extrabold text-transparent">60%</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-xs text-white/60">Speed</p>
                <p className="mt-1 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-2xl font-extrabold text-transparent">20%</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-xs text-white/60">Creativity</p>
                <p className="mt-1 bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-2xl font-extrabold text-transparent">20%</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <StatPill icon={Zap} label="Live Leaderboard" value="On" />
              <StatPill icon={Award} label="League" value="Skilltrainer" />
            </div>
            <p className="mt-4 text-sm italic text-white/70">“Unlock your report. Join the Skilltrainer League.”</p>
          </motion.div>

          {/* Student Report + Cybersecurity */}
          <div className="grid gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-6 backdrop-blur-xl"
            >
              <div className="mb-3 inline-flex items-center gap-2">
                <FileText size={18} className="text-cyan-400" />
                <h3 className="text-lg font-semibold">STAP Skill Report</h3>
              </div>
              <p className="text-sm text-white/70">AI-powered personalized career path + certificate in 24 hours.</p>
              {/* Mocked report card */}
              <div className="mt-5 grid grid-cols-3 gap-3 rounded-xl border border-white/10 bg-black/40 p-4">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/50">Persona Match</p>
                  <p className="mt-1 text-lg font-bold text-white">UX • Data</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/50">Top Skill</p>
                  <p className="mt-1 text-lg font-bold text-white">Analytical</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/50">Cert ETA</p>
                  <p className="mt-1 text-lg font-bold text-white">24 hrs</p>
                </div>
                <div className="col-span-3 mt-2 h-2 rounded bg-white/10">
                  <div className="h-2 rounded bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400" style={{ width: '78%' }} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/5 to-emerald-500/10 p-6 shadow-[0_0_80px_rgba(56,189,248,0.15)]"
            >
              <div className="mb-2 inline-flex items-center gap-2">
                <ShieldCheck size={18} className="text-emerald-400" />
                <h3 className="text-lg font-semibold">Cybersecurity Now Live</h3>
              </div>
              <p className="text-sm text-white/70">Test your digital defense instincts. One-day safe challenge.</p>
              <div className="mt-4 inline-flex gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
                Neon-glow mode • Dark
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
