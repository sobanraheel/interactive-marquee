import React from "react";
import { Marquee } from "./components/Marquee";
import {
  LOGOS,
  GALLERY_IMAGES,
  STATS,
  TESTIMONIALS,
  TECH_CHIPS,
} from "./constants";

const App: React.FC = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 space-y-16 max-w-7xl mx-auto">
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Marquee Mastery
        </h1>
      </header>

      {/* Option 1: Modern Logo Wall */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center gap-2 text-indigo-400">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            1. Trusted By Logo Wall
          </h2>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            Brand Social Proof
          </span>
        </div>
        <div className="relative group rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/20 py-8">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950/80 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950/80 to-transparent z-10"></div>
          <Marquee speed={40} direction="right">
            {LOGOS.map((logo, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-8 py-3 bg-slate-900 border border-slate-800/50 rounded-xl grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer shadow-xl"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg ${logo.color} text-white`}
                >
                  {logo.name[0]}
                </div>
                <span className="text-slate-200 font-bold">{logo.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Option 2: Customer Testimonials */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center gap-2 text-pink-400">
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
            2. Customer Testimonials
          </h2>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            User Trust
          </span>
        </div>
        <Marquee speed={30} direction="left" className="py-4">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="w-[350px] p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50 flex flex-col gap-4 shadow-lg hover:border-pink-500/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-indigo-500 flex items-center justify-center font-bold text-white text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-100">{t.name}</p>
                  <p className="text-[10px] text-slate-500 font-mono">
                    {t.role}
                  </p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 h-3 text-amber-500 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm text-slate-400 italic">"{t.text}"</p>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Option 3: Creative Image Gallery */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center gap-2 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            3. Creative Image Gallery
          </h2>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            Portfolio Strip
          </span>
        </div>
        <div className="h-64 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/30 p-2">
          <Marquee speed={35} direction="left" className="h-full">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className="h-56 w-48 relative overflow-hidden rounded-xl group/img"
              >
                <img
                  src={img}
                  alt={`Gallery ${i}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                    Project {i + 1}
                  </span>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Option 4: Interactive Tech Chips */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center gap-2 text-sky-400">
            <span className="w-2 h-2 rounded-full bg-sky-500"></span>
            4. Tech Stack Chips
          </h2>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            Skills & Tags
          </span>
        </div>
        <div className="py-4">
          <Marquee speed={20} direction="left">
            {TECH_CHIPS.map((chip, i) => (
              <div
                key={i}
                className="px-5 py-2 rounded-full bg-slate-900 border border-sky-500/20 text-sky-400 text-sm font-medium hover:border-sky-500 hover:bg-sky-500/10 transition-all cursor-pointer whitespace-nowrap mx-1 shadow-sm"
              >
                #{chip}
              </div>
            ))}
          </Marquee>
          <Marquee speed={25} direction="right" className="mt-4">
            {TECH_CHIPS.reverse().map((chip, i) => (
              <div
                key={i}
                className="px-5 py-2 rounded-full bg-slate-900 border border-indigo-500/20 text-indigo-400 text-sm font-medium hover:border-indigo-500 hover:bg-indigo-500/10 transition-all cursor-pointer whitespace-nowrap mx-1 shadow-sm"
              >
                {chip}.js
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Option 5: Stats & Metrics Strip */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center gap-2 text-amber-400">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            5. Stats & Growth Strip
          </h2>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            Real-time Metrics
          </span>
        </div>
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl py-8">
          <Marquee speed={20} direction="left" pauseOnHover={false}>
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center min-w-[200px] gap-1 px-12 border-r border-amber-500/20 last:border-0"
              >
                <span className="text-3xl font-black text-amber-400 tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default App;
