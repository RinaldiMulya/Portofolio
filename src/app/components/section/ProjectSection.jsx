// Project Section src\app\components\section\ProjectSection.jsx
"use client"
import { useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronRight, Move, ChevronLeft, ChevronRight as RightArrow, Play, X, FolderGit2 } from 'lucide-react';
import Button from "../ui/button";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

import { projects } from '../../../lib/data';

export default function Project() {
    const [panelSize, setPanelSize] = useState(50);
    const [activeProject, setActiveProject] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const currentProject = projects[activeProject];

    const nextProject = () => {
        setActiveProject((prev) => (prev + 1) % projects.length);
        setIsHovered(false);
    };

    const prevProject = () => {
        setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
        setIsHovered(false);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') prevProject();
            else if (e.key === 'ArrowRight') nextProject();
            else if (e.key === 'Escape' && showModal) setShowModal(false);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [showModal]);

    const handleOpenModal = () => {
        if (currentProject.status === "completed") {
            setShowModal(true);
        }
    };

    return (
        <>
            <div id='projects-preview' className="min-h-screen bg-transparent py-16 px-6 lg:px-20 relative font-sans">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] z-[-1]"></div>
                
                <div className="max-w-7xl mx-auto">
                    
                    {/* Header Section */}
                    <div className="text-center mb-16 flex flex-col items-center">
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center bg-white border-2 border-black px-4 py-2 text-sm font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6"
                        >
                            <FolderGit2 size={16} className="mr-2 text-black" />
                            Saved Games
                        </motion.div>

                        <h2 className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter drop-shadow-sm mb-6 font-display">
                            My <span className="text-white text-stroke-black bg-red-500 px-2 ml-2 border-2 border-black inline-block transform rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-display">Projects</span>
                        </h2>
                    </div>

                    {/* Resizable Project Showcase */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
                    >
                        <div className="flex flex-col lg:flex-row h-[600px] relative">
                            {/* Top Console Bar */}
                            <div className="absolute top-0 left-0 right-0 h-8 bg-black flex items-center px-4 z-10 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="ml-4 text-xs font-mono text-white tracking-widest uppercase opacity-80">Portfolio_OS_v1.0</span>
                            </div>

                            {/* Left Panel - Project Info */}
                            <div
                                className="lg:h-full p-8 pt-16 overflow-y-auto bg-yellow-50"
                                style={{ width: `${panelSize}%` }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeProject}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="mb-6">
                                            <span className={`inline-flex items-center px-3 py-1 text-sm font-bold uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${currentProject.status === "completed"
                                                    ? "bg-green-300"
                                                    : currentProject.status === "in-progress"
                                                        ? "bg-blue-300"
                                                        : "bg-purple-300"
                                                }`}>
                                                {currentProject.status === "completed"
                                                    ? "Stage Cleared"
                                                    : currentProject.status === "in-progress"
                                                        ? "In Progress"
                                                        : "Locked"}
                                            </span>
                                        </div>

                                        <h3 className="text-4xl font-black text-black mb-4 uppercase tracking-tight font-display">
                                            {currentProject.title}
                                        </h3>

                                        <p className="text-slate-800 font-sans text-base lg:text-lg mb-6 leading-relaxed bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                            {currentProject.description}
                                        </p>

                                        <div className="mb-8">
                                            <h4 className="text-lg font-bold text-black uppercase tracking-widest mb-3">Inventory Used</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {currentProject.technologies.map((tech, index) => (
                                                    <span key={index} className="bg-white border-2 border-black text-black px-3 py-1 font-mono text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <motion.button
                                                whileHover={currentProject.status === "completed" ? { scale: 1.05, y: -2 } : {}}
                                                whileTap={currentProject.status === "completed" ? { scale: 0.95, y: 2, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" } : {}}
                                                className={`flex items-center gap-2 px-6 py-3 font-bold uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${currentProject.status === "completed" ? 'bg-blue-500 text-white cursor-pointer' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                                                disabled={currentProject.status !== "completed"}
                                                onClick={handleOpenModal}
                                            >
                                                <span>Play</span>
                                                <ExternalLink size={16} />
                                            </motion.button>

                                            <motion.button
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.95, y: 2, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
                                                className="flex items-center gap-2 bg-white text-black px-6 py-3 font-bold uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                                                onClick={() => window.open(currentProject.githubUrl, '_blank')}
                                            >
                                                <span>Source</span>
                                                <Github size={16} />
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Resize Handle */}
                            <div className="relative group pt-8 bg-black z-20">
                                <div
                                    className="w-4 h-full bg-slate-800 border-x-2 border-black cursor-col-resize flex items-center justify-center transition-colors hover:bg-slate-700"
                                    onMouseDown={() => {
                                        const onMouseMove = (e) => {
                                            const container = document.querySelector('.bg-white');
                                            if (!container) return;
                                            const rect = container.getBoundingClientRect();
                                            const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
                                            const clampedPosition = Math.max(30, Math.min(70, newPosition));
                                            setPanelSize(clampedPosition);
                                        };
                                        const onMouseUp = () => {
                                            document.removeEventListener('mousemove', onMouseMove);
                                            document.removeEventListener('mouseup', onMouseUp);
                                        };
                                        document.addEventListener('mousemove', onMouseMove);
                                        document.addEventListener('mouseup', onMouseUp);
                                    }}
                                >
                                    <div className="flex flex-col gap-1">
                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                        <div className="w-1 h-1 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Panel - Interactive Project Visual */}
                            <div
                                className="lg:h-full bg-[linear-gradient(45deg,#1e293b_25%,#0f172a_25%,#0f172a_50%,#1e293b_50%,#1e293b_75%,#0f172a_75%,#0f172a_100%)] bg-[length:20px_20px] flex items-center justify-center p-8 pt-16 overflow-hidden"
                                style={{ width: `${100 - panelSize}%` }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div 
                                        key={activeProject}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full h-full relative"
                                    >
                                        {currentProject.status === "completed" ? (
                                            <div
                                                className="w-full h-full bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative group cursor-pointer"
                                                onMouseEnter={() => setIsHovered(true)}
                                                onMouseLeave={() => setIsHovered(false)}
                                                onClick={handleOpenModal}
                                            >
                                                {currentProject.screenshot ? (
                                                    <Image
                                                        src={currentProject.screenshot}
                                                        alt={`${currentProject.title} Screenshot`}
                                                        fill
                                                        style={{ objectFit: 'cover' }}
                                                        className={`transition-all duration-500 ${isHovered ? 'scale-110 opacity-80 grayscale-0' : 'scale-100 opacity-100 grayscale'}`}
                                                    />
                                                ) : (
                                                    <div className={`w-full h-full bg-slate-200 flex items-center justify-center transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                                                        <span className="text-slate-400 font-mono font-bold uppercase">Insert Coin to View</span>
                                                    </div>
                                                )}

                                                <div className={`absolute inset-0 bg-red-600 bg-opacity-80 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} flex items-center justify-center`}>
                                                    <div className="text-center text-white border-4 border-white p-6 transform -rotate-2">
                                                        <Play className="w-12 h-12 mx-auto mb-2" fill="white" />
                                                        <p className="text-2xl font-black uppercase tracking-widest">START DEMO</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="w-full h-full bg-slate-800 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg overflow-hidden relative flex items-center justify-center">
                                                <div className="text-center text-green-400 font-mono p-6">
                                                    <div className="mb-4 text-6xl opacity-50 animate-pulse">
                                                        {currentProject.status === "in-progress" ? "🚧" : "🔒"}
                                                    </div>
                                                    <div className="text-xl font-bold mb-2 uppercase tracking-widest">&lt;{currentProject.title} /&gt;</div>
                                                    <div className="text-sm opacity-75 uppercase">Status: {currentProject.status}</div>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project Navigation */}
                    <div className="mt-12 flex justify-between items-center bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex items-center gap-6">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={prevProject}
                                className="p-2 bg-black text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(100,116,139,1)] focus:outline-none"
                            >
                                <ChevronLeft size={24} />
                            </motion.button>

                            <div className="flex gap-3">
                                {projects.map((project, index) => (
                                    <button
                                        key={project.id}
                                        onClick={() => setActiveProject(index)}
                                        className={`h-4 transition-all border-2 border-black ${index === activeProject ? 'w-10 bg-red-500 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'w-4 bg-white'}`}
                                    />
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={nextProject}
                                className="p-2 bg-black text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(100,116,139,1)] focus:outline-none"
                            >
                                <RightArrow size={24} />
                            </motion.button>
                        </div>

                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => router.push("/Projects")}
                            className="font-bold uppercase tracking-widest text-black hover:text-blue-600 flex items-center gap-2 group"
                        >
                            <span>Level Select</span>
                            <div className="w-8 h-8 bg-blue-200 border-2 border-black rounded-full flex items-center justify-center group-hover:bg-blue-300 transition-colors">
                                <RightArrow size={16} />
                            </div>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Modal with Live Website */}
            <AnimatePresence>
                {showModal && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-white border-4 border-black w-full max-w-7xl h-[90vh] flex flex-col shadow-[16px_16px_0px_0px_rgba(255,255,255,0.2)]"
                        >
                            {/* Modal Header */}
                            <div className="flex justify-between items-center p-4 border-b-4 border-black bg-blue-500 text-white">
                                <div>
                                    <h3 className="text-2xl font-black uppercase tracking-widest text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">{currentProject.title}</h3>
                                    <p className="text-white/80 text-sm font-mono font-bold mt-1">Live Interactive Demo</p>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setShowModal(false)}
                                    className="p-2 bg-red-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                >
                                    <X className="w-6 h-6 text-white" strokeWidth={3} />
                                </motion.button>
                            </div>

                            {/* Live Website iframe */}
                            <div className="flex-1 p-2 bg-black">
                                <iframe
                                    src={currentProject.liveUrl}
                                    className="w-full h-full border-4 border-slate-700 bg-white"
                                    title={`${currentProject.title} Live Demo`}
                                    loading="lazy"
                                />
                            </div>

                            {/* Modal Footer */}
                            <div className="p-4 border-t-4 border-black bg-yellow-400">
                                <div className="flex justify-between items-center flex-wrap gap-4">
                                    <div className="flex gap-2 flex-wrap">
                                        {currentProject.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-white border-2 border-black font-bold uppercase text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        <a
                                            href={currentProject.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 font-bold uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-blue-700 hover:translate-y-[-2px] transition-all"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Open External
                                        </a>
                                        <a
                                            href={currentProject.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-white text-black px-4 py-2 font-bold uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100 hover:translate-y-[-2px] transition-all"
                                        >
                                            <Github className="w-4 h-4" />
                                            View Source
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
