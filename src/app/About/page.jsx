// About Section src/app/About/page.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Skill from "./../components/section/SkillSection";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { experiences } from "../../lib/data";
import {
  Award,
  Code,
  Coffee,
  Briefcase,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Compass,
  Gamepad2,
  BookOpen,
  Mail,
  Star,
} from "lucide-react";

const ExperienceItem = ({ exp, index, isVisible }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative mb-16 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} flex flex-col lg:flex gap-8 items-center`}
    >
      {/* Timeline dot / Quest Node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-400 border-4 border-black rotate-45 z-10 hidden lg:flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        <span className="text-[10px] font-black font-mono text-black -rotate-45">
          {index + 1}
        </span>
      </div>

      {/* Content card */}
      <div
        className={`w-full lg:w-[45%] ${isEven ? "lg:text-right" : "lg:text-left"}`}
      >
        <div className="inline-block bg-black text-white px-4 py-1.5 font-mono text-xs uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4">
          {exp.period}
        </div>
      </div>

      <div className="w-full lg:w-[45%]">
        <div className="bg-white border-4 border-black py-6 px-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group hover:translate-y-[-2px] transition-all">
          {/* Retro console title-bar decoration */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-red-500 border-b-2 border-black"></div>

          <span className="absolute top-3 right-3 text-[10px] font-black font-mono bg-blue-100 text-blue-800 border border-black px-2 py-0.5 uppercase">
            {exp.type}
          </span>

          <h3 className="text-2xl font-black text-black uppercase tracking-tight mt-2 mb-1 font-display">
            {exp.company}
          </h3>

          <div className="flex items-center gap-2 mb-4 justify-start">
            <Briefcase className="w-4 h-4 text-red-500" />
            <span className="font-bold text-slate-800 text-sm font-mono uppercase">
              {exp.position}
            </span>
          </div>

          <p className="text-slate-800 font-sans text-base leading-relaxed mb-6 bg-amber-50/50 p-3 border border-black">
            {exp.description}
          </p>

          {/* Technologies / Inventory */}
          <div className="mb-6">
            <h4 className="font-bold text-black uppercase text-xs tracking-widest mb-3 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-yellow-400 border border-black"></span>
              Inventory Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-white border-2 border-black text-black px-2.5 py-0.5 font-mono text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="font-bold text-black uppercase text-xs tracking-widest mb-3 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-400 border border-black"></span>
              Quest Outcomes
            </h4>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, achIndex) => (
                <li
                  key={achIndex}
                  className="flex items-start gap-2 text-slate-800 font-sans text-sm"
                >
                  <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function About() {
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const router = useRouter();

  const stats = [
    {
      icon: Code,
      label: "Projects Cleared",
      value: "5+",
      color: "bg-blue-400",
    },
    {
      icon: Coffee,
      label: "Elixir / Coffee",
      value: "100+",
      color: "bg-amber-400",
    },
    {
      icon: Award,
      label: "Level (Years Exp)",
      value: "1+",
      color: "bg-purple-400",
    },
  ];

  const hobbies = [
    {
      icon: Compass,
      title: "Mountain Hiking",
      desc: "Climbed several mountain peaks which keeps me grounded and refreshed.",
    },
    {
      icon: Gamepad2,
      title: "Adventure Gaming",
      desc: "Huge fan of open-world and souls-like games like Wuthering Waves and Elden Ring.",
    },
    {
      icon: BookOpen,
      title: "Curious Reading",
      desc: "Love finding quiet spaces in libraries to read books that spark curiosity.",
    },
  ];

  const displayedExperiences = showAllExperiences
    ? experiences
    : experiences.slice(0, 2);

  return (
    <div id="about" className="min-h-screen bg-[#f3f3ee] font-sans pb-12">
      {/* Player Info Section */}
      <section className="relative py-16 px-6 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] z-[-1]"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content - Player Biography */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex flex-col items-start">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center bg-white border-2 border-black px-4 py-1.5 text-xs font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6"
                >
                  <Star
                    size={14}
                    className="mr-2 text-yellow-500 fill-yellow-500"
                  />
                  Player Profile: ACTIVE
                </motion.div>

                <h1 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter drop-shadow-sm mb-4 font-display">
                  Who Am{" "}
                  <span className="text-white text-stroke-black bg-yellow-400 px-3.5 ml-1.5 border-4 border-black inline-block transform -rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-display">
                    I ?
                  </span>
                </h1>
              </div>

              <div className="space-y-6 text-base font-sans text-slate-800 bg-white border-4 border-black p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] leading-relaxed relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400 border-b-2 border-black"></div>
                <p className="text-base text-black">
                  Hi! I'm{" "}
                  <span className="bg-yellow-300 text-black px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1 font-black">
                    RINALDI MULYA
                  </span>
                  , a{" "}
                  <span className="bg-cyan-300 text-black px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block font-black">
                    Frontend Developer
                  </span>{" "}
                  with a strong passion for building responsive, user-friendly, and modern web applications.
                </p>

                <p className="text-slate-800">
                  My journey started through intensive bootcamps (RevoU, Dicoding x DBS Foundation) and a hands-on internship, where I built real-world projects using:
                  <span className="block mt-3 bg-purple-200 text-black p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold">
                    🚀 React, Next.js, JavaScript, TypeScript, & Tailwind CSS
                  </span>
                </p>

                <p className="text-slate-800">
                  While my primary focus is frontend development, I also work with{" "}
                  <span className="bg-emerald-300 text-black px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold inline-block">
                    data analysis (SQL, Power BI, Tableau)
                  </span>{" "}
                  — a skill set I'm actively growing to bridge web development with data-driven finance & reporting solutions.
                </p>

                <p className="text-slate-800">
                  Outside of coding, I adapt and learn quickly. I'm currently focused on combining my technical background with{" "}
                  <span className="bg-rose-300 text-black px-2 py-0.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold inline-block">
                    accounting & tax reporting (SPT)
                  </span>{" "}
                  knowledge, aiming to build accurate, integrated financial data solutions.
                </p>
              </div>
            </div>

            {/* Right Content - Character Photo Cards */}
            <div className="lg:col-span-5 relative flex flex-col items-center">
              <motion.div
                animate={{ rotate: [-1, 1, -1] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="w-full max-w-[360px]"
              >
                <div className="bg-white border-4 border-black p-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative transform rotate-2">
                  {/* Console Ribbon */}
                  <div className="absolute -top-3 -right-3 bg-red-500 text-white border-2 border-black font-mono text-[9px] font-black uppercase px-2 py-1 tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-12">
                    LV. 99 FRONTEND
                  </div>

                  <div className="border-4 border-black aspect-[3/4] overflow-hidden bg-slate-900 relative">
                    <Image
                      src="/images/Formal.jpg"
                      alt="Professional headshot"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    {/* Vintage game filter lines overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none"></div>
                  </div>
                  <div className="mt-4 text-center font-mono font-black text-black text-sm uppercase tracking-wider flex items-center justify-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></div>
                    <span>RinaldiM.exe [ONLINE]</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating secondary smaller shots */}
              <div className="absolute -bottom-8 -left-8 w-28 h-28 hidden md:block">
                <div className="bg-white border-2 border-black p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-6 relative w-full h-full">
                  <Image
                    src="/images/MYPAV.jpeg"
                    alt="My foto"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="border border-black"
                  />
                </div>
              </div>
              <div className="absolute top-1/2 -right-12 w-28 h-28 hidden md:block">
                <div className="bg-white border-2 border-black p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-12 relative w-full h-full">
                  <Image
                    src="/images/My.jpeg"
                    alt="My foto"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="border border-black"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character Stats section */}
      <section className="py-12 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-yellow-400 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="grid md:grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border-2 border-black p-5 flex items-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] transition-all"
                  >
                    <div
                      className={`p-3 border-2 border-black ${stat.color} shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
                    >
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <div className="text-11px font-black uppercase tracking-wider text-slate-500 font-mono leading-none">
                        {stat.label}
                      </div>
                      <div className="text-3xl font-black text-black font-sans leading-none mt-1.5">
                        {stat.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Side Quest / Hobbies section */}
      <section className="py-16 px-6 lg:px-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-white text-black px-4 py-1 border-2 border-black font-mono text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4">
              Side Quests & Hobbies
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-black uppercase tracking-tight">
              How I Spend My Downtime
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-red-100 border-2 border-black flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-black mb-3">
                      {hobby.title}
                    </h3>
                    <p className="text-slate-700 font-mono text-xs font-bold leading-relaxed">
                      {hobby.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience / Quest Log Section */}
      <section className="py-16 px-6 lg:px-20 border-t-4 border-black bg-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-white text-black px-4 py-1 border-2 border-black font-mono text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4">
              Timeline_Logs.log
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-black uppercase tracking-tighter drop-shadow-sm mb-6 font-display">
              Quest{" "}
              <span className="text-white text-stroke-black bg-red-500 px-3 border-4 border-black inline-block transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-display">
                Logs
              </span>
            </h2>
            <p className="text-base font-sans text-slate-800 max-w-xl mx-auto bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              My developmental path across cohorts and internship missions.
              Successfully cleared stages, gathered items, and solved complex
              design puzzles.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black hidden lg:block"></div>

            {displayedExperiences.map((exp, index) => (
              <ExperienceItem
                key={exp.id}
                exp={exp}
                index={index}
                isVisible={true}
              />
            ))}
          </div>

          {/* Show More/Less Button */}
          {experiences.length > 2 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllExperiences(!showAllExperiences)}
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black border-4 border-black font-black uppercase tracking-wider text-sm py-3.5 px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                {showAllExperiences ? (
                  <>
                    <ChevronUp className="w-5 h-5 text-black" strokeWidth={3} />
                    Collapse Logs
                  </>
                ) : (
                  <>
                    <ChevronDown
                      className="w-5 h-5 text-black"
                      strokeWidth={3}
                    />
                    Reveal More ({experiences.length - 2} more)
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* In-page Skill Tree Integration */}
      <Skill />

      {/* Retro co-op mission CTA */}
      <section className="py-16 px-6 lg:px-20 border-t-4 border-black bg-red-500">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tight drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] font-display">
            Initiate Co-Op Mission?
          </h2>
          <p className="text-base font-sans text-white max-w-xl mx-auto bg-black/40 p-4 border-2 border-white">
            I am currently accepting recruits and contract proposals for
            high-priority coding projects. Let's join squads and build robust,
            high-performance software systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="https://mail.google.com/mail/?view=cm&to=rinaldimulyatam@gmail.com"
              className="bg-yellow-400 hover:bg-yellow-500 text-black border-4 border-black font-black uppercase tracking-wider px-8 py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" strokeWidth={2.5} />
              Send Message
            </a>
            <button
              onClick={() => router.push("/Projects")}
              className="bg-white hover:bg-slate-50 text-black border-4 border-black font-black uppercase tracking-wider px-8 py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-none transition-all w-full sm:w-auto"
            >
              Select Stages
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
