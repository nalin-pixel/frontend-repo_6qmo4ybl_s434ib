import React from 'react';
import { Cpu, PenTool, LineChart, Share2, ShieldCheck, Database, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  { title: 'AI & Automation', icon: Bot, color: 'from-cyan-500 to-blue-600' },
  { title: 'Data Analytics', icon: LineChart, color: 'from-violet-500 to-fuchsia-600' },
  { title: 'UI/UX Design', icon: PenTool, color: 'from-pink-500 to-rose-600' },
  { title: 'Content Writing', icon: PenTool, color: 'from-emerald-500 to-teal-600' },
  { title: 'Robotics & IoT', icon: Cpu, color: 'from-amber-500 to-orange-600' },
  { title: 'Digital Marketing', icon: Share2, color: 'from-indigo-500 to-purple-600' },
  { title: 'Cybersecurity', icon: ShieldCheck, color: 'from-green-500 to-emerald-600' },
];

const SkillCard = ({ title, Icon, color }) => {
  return (
    <motion.div
      whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg"
    >
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${color} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`} />
      <div className="relative z-10 flex items-center gap-4">
        <div className={`grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br ${color} text-white shadow-[0_0_32px_rgba(59,130,246,0.35)]`}>
          <Icon size={22} />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="text-xs text-white/60">Hands-on tasters, real-world prompts</p>
        </div>
      </div>
    </motion.div>
  );
};

const SkillsGrid = () => {
  return (
    <section id="skills" className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Explore Skills You Can Taste</h2>
            <p className="mt-1 text-white/70">A futuristic grid with hover motion and glow effects</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <SkillCard key={s.title} title={s.title} Icon={s.icon} color={s.color} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
