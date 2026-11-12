// Hero Section src\app\components\section\HeroSection.jsx
"use client"
import { useState, useEffect, useRef } from 'react';
import { Download, Eye, Github, Linkedin, Mail, Gamepad2, Sparkles, Terminal } from 'lucide-react';
import { Button, PortfolioButtons } from '../ui/button';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { animate, stagger, createTimeline, splitText, utils } from 'animejs';

export default function Hero() {
    const textRef = useRef(null);

    useEffect(() => {
        // AnimeJS text glitch/reveal effect on load
        if (textRef.current) {
            const cleanText = textRef.current.textContent.trim().replace(/\s+/g, " ");
            textRef.current.textContent = "";
            const letters = cleanText.split("");
            letters.forEach((letter) => {
                const span = document.createElement("span");
                if (letter === " ") {
                    span.innerHTML = "&nbsp;";
                    span.style.width = "0.25em";
                    span.className = "inline-block";
                } else {
                    span.textContent = letter;
                    span.className = "inline-block";
                }
                span.style.opacity = 0;
                textRef.current.appendChild(span);
            });

            animate(textRef.current.querySelectorAll("span"), {
                opacity: [0, 1],
                translateY: [-20, 0],
                rotateZ: [10, 0],
                delay: stagger(50, { start: 300 }),
                easing: "easeOutElastic(1, .8)",
            });
        }
    }, []);



    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden font-sans">
            {/* Retro grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <section id="hero" className="relative z-10 min-h-screen flex items-center px-6 lg:px-20 pt-20">
                <div className="max-w-8xl mx-auto w-full">
                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="lg:col-span-2 space-y-8"
                        >
                            {/* Headline */}
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring" }}
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-flex items-center bg-white border-2 border-black rounded-sm px-4 py-2 text-sm text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-mono uppercase tracking-widest cursor-default"
                                >
                                    <span className="w-3 h-3 bg-green-500 rounded-sm mr-2 animate-pulse"></span>
                                    Player 1 Ready
                                </motion.div>

                                <h1 className="text-xl lg:text-3xl xl:text-3xl text-slate-900 leading-tight">
                                    <span className="text-slate-900 relative font-mono uppercase tracking-widest bg-yellow-300 px-2">
                                        Rinaldi Mulya
                                    </span>
                                </h1>

                                <div
                                    className="border-4 border-black text-4xl lg:text-7xl text-slate-900 font-black uppercase drop-shadow-sm flex items-center gap-4 py-2 px-4"
                                    style={{ wordSpacing: "0.3rem", letterSpacing: "-0.01em" }}
                                >
                                    <span ref={textRef}>
                                        Full-Stack Software Engineer (Web & Mobile)
                                    </span>
                                </div>
                            </div>

                            {/* Subheadline */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-md relative"
                            >
                                <div className="absolute -top-3 -right-3 bg-blue-500 text-white p-2 rounded-full border-2 border-black">
                                    <Terminal size={20} />
                                </div>
                                <p className="text-lg lg:text-xl text-slate-800 leading-relaxed font-mono">
                                    Hi! I'm Rinaldi — a Full-Stack Software Engineer building scalable, high-performance web & mobile applications. Experienced in{' '}
                                    <span className="bg-blue-100 text-blue-700 px-1 border border-blue-200 rounded font-semibold">Next.js 15/16</span>,{' '}
                                    <span className="bg-cyan-100 text-cyan-800 px-1 border border-cyan-200 rounded font-semibold">React 19</span>,{' '}
                                    <span className="bg-sky-100 text-sky-700 px-1 border border-sky-200 rounded font-semibold">Flutter / Dart</span>, and{' '}
                                    <span className="bg-indigo-100 text-indigo-700 px-1 border border-indigo-200 rounded font-semibold">PostgreSQL / Prisma</span>.
                                    Passionate about interactive 3D with{' '}
                                    <span className="bg-purple-100 text-purple-700 px-1 border border-purple-200 rounded font-semibold">Three.js</span>,
                                    reliable cloud SaaS architecture, and automation with{' '}
                                    <span className="bg-emerald-100 text-emerald-700 px-1 border border-emerald-200 rounded font-semibold">Python</span>.
                                </p>
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-col sm:flex-row gap-6 pt-4"
                            >
                                <motion.a
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95, y: 2, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
                                    href="#contact-preview"
                                    className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 font-bold uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                                >
                                    <Gamepad2 size={24} />
                                    Start Game
                                </motion.a>

                                <motion.a
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95, y: 2, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
                                    href="/files/Resume_Rinaldi_Software_Developer.pdf"
                                    download="Resume_Rinaldi_Software_Developer.pdf"
                                    className="flex items-center justify-center gap-2 bg-yellow-400 text-black px-8 py-4 font-bold uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                                >
                                    <Download size={24} />
                                    Download Save File
                                </motion.a>
                            </motion.div>
                        </motion.div>

                        {/* Right Content - Photo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                            className="flex justify-center lg:justify-end relative"
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="relative group z-10"
                            >
                                {/* Profile image container with retro borders */}
                                <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-yellow-200 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden transform rotate-3 transition-transform duration-300 hover:rotate-0">
                                    <Image src="/images/My.jpeg" alt="Rinaldi Mulya Pratama" layout="fill" objectFit="cover" className="grayscale hover:grayscale-0 transition-all duration-500" />
                                </div>

                                {/* Floating badges */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                                    className="absolute -top-6 -right-6 w-16 h-16 bg-red-500 border-2 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20"
                                >
                                    <Sparkles className="text-white" size={24} />
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                    className="absolute -bottom-6 -left-6 bg-green-400 border-2 border-black px-4 py-2 font-mono font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 transform -rotate-6"
                                >
                                    Lv. 99
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="flex flex-col items-center text-slate-500 cursor-pointer font-mono text-sm uppercase tracking-widest"
                    >
                        <span className="mb-2 bg-white px-2 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">Scroll Down</span>
                        <div className="w-6 h-10 border-2 border-black rounded-full relative bg-white">
                            <div className="w-2 h-2 bg-black rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"></div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}