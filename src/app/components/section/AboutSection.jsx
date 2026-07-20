// About Section src\app\components\section\AboutSection.jsx
"use client"
import { useState, useRef } from 'react';
import { User, Award, Code, Database, ChevronDown, ChevronUp } from 'lucide-react';
import Button from "../ui/button";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { personalInfo, projects, experiences } from '../../../lib/data';

export default function About() {
    const [isExpanded, setIsExpanded] = useState(false);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const router = useRouter();

    const fullDescription = personalInfo.bio;

    const previewDescription = fullDescription.substring(0, 100) + '...';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <div className="bg-slate-50 relative overflow-hidden font-sans border-t-4 border-black">
            {/* Retro grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <section
                ref={sectionRef}
                id="about-preview"
                className="relative z-10 min-h-screen flex items-center px-6 lg:px-20 py-20"
            >
                <motion.div 
                    className="max-w-7xl mx-auto w-full"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                {/* Section Tag */}
                                <motion.div 
                                    variants={itemVariants}
                                    className="inline-flex items-center bg-white border-2 border-black px-4 py-2 text-sm font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                >
                                    <User size={16} className="mr-2 text-black" />
                                    Character Profile
                                </motion.div>

                                {/* Main Heading */}
                                <motion.div variants={itemVariants} className="space-y-4">
                                    <h1 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter drop-shadow-sm font-display">
                                        ABOUT 
                                        <span className="text-white text-stroke-black bg-blue-600 px-2 ml-2 border-2 border-black inline-block transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-display"> ME</span>
                                    </h1>
                                </motion.div>
                            </div>

                            {/* Description */}
                            <motion.div variants={itemVariants} className="bg-white border-2 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                                <div className="absolute -top-3 -left-3 w-6 h-6 bg-yellow-400 border-2 border-black rounded-full"></div>
                                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-red-400 border-2 border-black rounded-full"></div>
                                
                                <p className="text-lg lg:text-xl text-slate-800 leading-relaxed font-sans">
                                    {isExpanded ? fullDescription : previewDescription}
                                </p>
                                
                                {/* Expanded content */}
                                {isExpanded && (
                                    <motion.div 
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="flex flex-col gap-4 text-sm font-bold uppercase mt-6 pt-6 border-t-2 border-dashed border-black"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-blue-200 border-2 border-black">
                                                <Code size={16} className="text-blue-800" />
                                            </div>
                                            <span>3+ Quests Completed</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-green-200 border-2 border-black">
                                                <Database size={16} className="text-green-800" />
                                            </div>
                                            <span>Data-Driven Stats</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-purple-200 border-2 border-black">
                                                <Award size={16} className="text-purple-800" />
                                            </div>
                                            <span>Always Grinding XP</span>
                                        </div>
                                    </motion.div>
                                )}
                                
                                {/* Tombol Read More/Less */}
                                <button 
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="flex items-center font-bold uppercase tracking-widest text-blue-700 hover:text-blue-900 transition-colors duration-300 mt-6 group"
                                >
                                    {isExpanded ? (
                                        <>
                                            <span className="group-hover:-translate-y-1 transition-transform">Read Less</span>
                                            <ChevronUp size={20} className="ml-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    ) : (
                                        <>
                                            <span className="group-hover:translate-y-1 transition-transform">Read More</span>
                                            <ChevronDown size={20} className="ml-1 group-hover:translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </motion.div>

                            {/* CTA Button */}
                            <motion.div variants={itemVariants} className="pt-4">
                                <motion.button 
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95, y: 2, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
                                    onClick={() => router.push("/About")}
                                    className="bg-black text-white px-8 py-4 font-bold uppercase tracking-wider border-2 border-black shadow-[6px_6px_0px_0px_rgba(100,116,139,1)] hover:bg-slate-800 transition-colors"
                                >
                                    View Full Inventory
                                </motion.button>
                            </motion.div>
                        </div>

                        {/* Right Content - Photo */}
                        <motion.div variants={itemVariants} className="flex justify-center lg:justify-start relative">
                            <motion.div 
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                className="relative group"
                            >
                                {/* Photo Container - Game boy style */}
                                <div className="relative w-80 h-96 lg:w-96 lg:h-[450px] bg-slate-200 border-8 border-slate-300 rounded-t-3xl rounded-b-xl shadow-[16px_16px_0px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-start p-4">
                                    <div className="w-full h-3/4 bg-slate-800 border-4 border-slate-900 rounded-sm relative overflow-hidden mb-6">
                                        <Image src="/images/Formal.jpg" alt="Rinaldi Mulya Pratama" layout="fill" objectFit="cover" className="grayscale group-hover:grayscale-0 transition-all duration-700" />
                                        
                                        {/* Scanline effect */}
                                        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
                                    </div>
                                    
                                    {/* Decorative game console buttons */}
                                    <div className="w-full flex justify-between px-4">
                                        <div className="w-16 h-16 relative">
                                            <div className="absolute top-1/2 left-0 w-full h-4 bg-slate-400 transform -translate-y-1/2"></div>
                                            <div className="absolute top-0 left-1/2 w-4 h-full bg-slate-400 transform -translate-x-1/2"></div>
                                        </div>
                                        <div className="flex gap-2 items-center transform rotate-12">
                                            <div className="w-8 h-8 rounded-full bg-red-500 shadow-inner"></div>
                                            <div className="w-8 h-8 rounded-full bg-blue-500 shadow-inner -mt-8"></div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Stats Row */}
                    <motion.div 
                        variants={itemVariants}
                        className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {[
                            { number: `${projects.length}+`, label: 'Levels Beaten', icon: Code, color: 'bg-blue-300' },
                            { number: '1+', label: 'Years EXP', icon: Award, color: 'bg-yellow-300' },
                            { number: `${personalInfo.skills.length}+`, label: 'Tech Skills', icon: Database, color: 'bg-green-300' },
                            { number: '100%', label: 'HP', icon: User, color: 'bg-red-300' }
                        ].map((stat, index) => (
                            <motion.div 
                                key={stat.label}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className={`flex flex-col items-center justify-center p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${stat.color} relative overflow-hidden`}
                            >
                                <div className="absolute -right-4 -top-4 w-16 h-16 bg-white opacity-20 rounded-full"></div>
                                <stat.icon size={32} className="text-black mb-2 relative z-10" />
                                <div className="text-3xl lg:text-4xl font-black text-black mb-1 relative z-10 font-mono tracking-tighter">{stat.number}</div>
                                <div className="text-sm font-bold uppercase tracking-widest text-black relative z-10">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}
