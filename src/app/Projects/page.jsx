// Projects Page src/app/Projects/page.jsx
"use client";
import { useState } from 'react';
import { ExternalLink, Github, FolderGit2, Play, ChevronRight, CircleDot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../../lib/data';

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Web Development', 'Data Analytics', 'Other'];

    const filteredProjects = activeCategory === 'All' 
        ? projects 
        : projects.filter(project => project.category === activeCategory);

    const getCategoryStyles = (category) => {
        switch (category) {
            case 'Data Analytics':
                return 'bg-purple-300 text-black border-black';
            case 'Web Development':
                return 'bg-blue-300 text-black border-black';
            default:
                return 'bg-green-300 text-black border-black';
        }
    };

    return (
        <section id="projects" className="py-16 min-h-screen bg-[#f3f3ee] font-sans relative overflow-hidden">
            {/* Retro grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] z-[0]"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16 flex flex-col items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center bg-white border-2 border-black px-4 py-1.5 text-xs font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6"
                    >
                        <FolderGit2 size={14} className="mr-2 text-black" />
                        Arcade level selection
                    </motion.div>

                    <h2 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter drop-shadow-sm mb-6 font-display">
                        Level <span className="text-white text-stroke-black bg-blue-600 px-3.5 ml-2 border-4 border-black inline-block transform -rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-display">Select</span>
                    </h2>
                    
                    <p className="text-sm font-mono font-bold text-slate-800 max-w-xl mx-auto bg-white border-2 border-black p-3.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] leading-relaxed">
                        Choose a stage to inspect my custom software implementations. Each tile holds full gameplay links and verified open-source cartridges.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex justify-center mb-16">
                    <div className="flex flex-wrap gap-2.5 bg-white border-4 border-black p-2.5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2.5 text-xs font-black uppercase tracking-wider border-2 transition-all cursor-pointer ${
                                    activeCategory === category 
                                        ? 'bg-black text-white border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]' 
                                        : 'bg-white text-black border-transparent hover:border-black hover:bg-yellow-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col hover:translate-y-[-4px] transition-transform duration-200 group relative"
                            >
                                {/* Top Console Banner */}
                                <div className="bg-black text-white px-4 py-2 flex justify-between items-center border-b-2 border-black">
                                    <div className="flex items-center gap-2">
                                        <CircleDot className="w-3 h-3 text-red-500 animate-pulse fill-red-500" />
                                        <span className="font-mono text-xs font-black tracking-widest">{project.stageNum}</span>
                                    </div>
                                    <span className="font-mono text-[10px] uppercase font-black tracking-widest text-yellow-400">
                                        STATUS: {project.status === "completed" ? "CLEARED" : project.status.toUpperCase()}
                                    </span>
                                </div>

                                {/* Cartridge Cover Area */}
                                <div 
                                    className="relative h-64 overflow-hidden border-b-4 border-black cursor-pointer bg-slate-950"
                                    onMouseEnter={() => setHoveredProject(project.id)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >
                                    {project.screenshot ? (
                                        <img
                                            src={project.screenshot}
                                            alt={project.title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-slate-900 flex items-center justify-center font-mono text-slate-500 uppercase text-xs font-black">
                                            No cartridge art loaded
                                        </div>
                                    )}

                                    {/* Interactive Scanlines overlay */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none"></div>

                                    {/* Action Hover Trigger */}
                                    <div className={`absolute inset-0 bg-red-600 bg-opacity-90 transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'} flex items-center justify-center`}>
                                        <div className="text-center text-white border-4 border-white p-6 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                                            <Play className="w-10 h-10 mx-auto mb-2 fill-white" />
                                            <p className="text-xl font-black uppercase tracking-widest">START DEMO</p>
                                        </div>
                                    </div>

                                    {/* Normal HUD labels */}
                                    {hoveredProject !== project.id && (
                                        <div className="absolute bottom-3 left-3 bg-black text-white px-2.5 py-1 font-mono text-[10px] font-black uppercase tracking-widest border border-white">
                                            {project.year} // {project.category}
                                        </div>
                                    )}
                                </div>

                                {/* Information Panel */}
                                <div className="p-6 flex-1 flex flex-col justify-between bg-yellow-50/30">
                                    <div>
                                        <div className="flex justify-between items-start mb-3 gap-4">
                                            <div>
                                                <h3 className="text-2xl font-black text-black uppercase tracking-tight leading-tight font-display">
                                                    {project.title}
                                                </h3>
                                                <p className="text-slate-700 font-mono text-xs font-bold mt-1 uppercase">
                                                    {project.subtitle}
                                                </p>
                                            </div>
                                            <span className={`px-2 py-0.5 border-2 border-black font-mono text-[9px] font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${getCategoryStyles(project.category)}`}>
                                                {project.category}
                                            </span>
                                        </div>

                                        <p className="text-slate-800 font-mono text-xs font-bold leading-relaxed mb-6 bg-white border-2 border-black p-3.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                            {project.description}
                                        </p>

                                        {/* Technology Tags */}
                                        <div className="mb-6">
                                            <h4 className="font-mono text-[10px] uppercase font-black tracking-widest text-slate-500 mb-2">Inventory tags</h4>
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.technologies.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2.5 py-0.5 bg-white border-2 border-black text-black font-mono text-[10px] font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Triggers */}
                                    <div className="flex gap-4 pt-2">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-xs py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-none transition-all"
                                        >
                                            <Play className="w-3.5 h-3.5 fill-white" />
                                            <span>Play Demo</span>
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-black px-4 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-none transition-all"
                                            title="View Source Code"
                                        >
                                            <Github className="w-4 h-4 text-black" strokeWidth={2.5} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Footer Link */}
                <div className="text-center mt-20">
                    <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/RinaldiMulya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black border-4 border-black font-black uppercase tracking-wider text-sm py-4 px-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
                    >
                        <span>More Modules on GitHub</span>
                        <ChevronRight className="w-4 h-4" strokeWidth={3} />
                    </motion.a>
                </div>

            </div>
        </section>
    );
}
