// Contact Section src\app\components\section\ContactSection.jsx
"use client"
import { useState, useRef } from 'react';
import { Mail, Github, Instagram, Linkedin, MapPin, Phone, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { motion, useInView } from 'motion/react';

export default function Contact() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const socialLinks = [
        {
            name: 'Email',
            icon: Mail,
            url: 'mailto:rinaldimulyatam@gmail.com',
            color: 'bg-red-400'
        },
        {
            name: 'GitHub',
            icon: Github,
            url: 'https://github.com/RinaldiMulya',
            color: 'bg-gray-300'
        },
        {
            name: 'Instagram',
            icon: Instagram,
            url: 'https://www.instagram.com/rinaldy_mulya/',
            color: 'bg-pink-400'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://www.linkedin.com/in/rinaldi-mulya-pratama11/',
            color: 'bg-blue-400'
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <div id="contact-preview" className="bg-red-500 relative overflow-hidden font-sans border-t-4 border-black">
            {/* Retro dots background */}
            <div className="absolute inset-0 bg-[radial-gradient(#000_2px,transparent_2px)] bg-[size:30px_30px] opacity-20"></div>

            <section
                ref={sectionRef}
                className="relative z-10 py-20 min-h-screen flex items-center"
            >
                <motion.div 
                    className="max-w-7xl mx-auto px-6 lg:px-20 w-full"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Side - Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <motion.div variants={itemVariants} className="inline-flex items-center justify-center bg-white border-2 border-black px-4 py-2 text-sm font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                                    <MessageSquare size={16} className="mr-2 text-black" />
                                    Multiplayer Setup
                                </motion.div>

                                <motion.h2 variants={itemVariants} className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] mb-6">
                                    Get In <span className="text-white text-stroke-black bg-black px-2 ml-2 border-4 border-white inline-block transform rotate-2 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">Touch</span>
                                </motion.h2>

                                <motion.p variants={itemVariants} className="text-lg font-mono text-black font-bold bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    Ready for a co-op mission? Feel free to contact me if you have any questions or just want to say hi!
                                </motion.p>
                            </div>

                            {/* Contact Details */}
                            <motion.div variants={containerVariants} className="space-y-6">
                                <motion.div variants={itemVariants} whileHover={{ x: 10 }} className="flex items-center bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <div className="p-3 bg-red-200 border-2 border-black mr-4 shadow-inner">
                                        <Mail size={24} className="text-black" />
                                    </div>
                                    <div>
                                        <p className="font-black uppercase tracking-widest text-black text-sm">Email_Address</p>
                                        <p className="text-black font-mono font-bold">rinaldimulyatam@gmail.com</p>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants} whileHover={{ x: 10 }} className="flex items-center bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <div className="p-3 bg-green-200 border-2 border-black mr-4 shadow-inner">
                                        <MapPin size={24} className="text-black" />
                                    </div>
                                    <div>
                                        <p className="font-black uppercase tracking-widest text-black text-sm">Respawn_Point</p>
                                        <p className="text-black font-mono font-bold">Jakarta, Indonesia</p>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants} whileHover={{ x: 10 }} className="flex items-center bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <div className="p-3 bg-yellow-200 border-2 border-black mr-4 shadow-inner">
                                        <Phone size={24} className="text-black" />
                                    </div>
                                    <div>
                                        <p className="font-black uppercase tracking-widest text-black text-sm">Whatsapp_Channel</p>
                                        <p className="text-black font-mono font-bold">+62 81212 923 623</p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div variants={itemVariants} className="pt-4">
                                <p className="text-sm font-black uppercase tracking-widest text-white mb-4 bg-black inline-block px-4 py-2 border-2 border-white">Add to friend list:</p>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social) => (
                                        <motion.a
                                            key={social.name}
                                            whileHover={{ scale: 1.1, y: -5, rotate: [-5, 5, -5, 0] }}
                                            whileTap={{ scale: 0.9, y: 0 }}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${social.color} text-black transition-colors hover:bg-white`}
                                        >
                                            <social.icon size={28} />
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side - Contact Image */}
                        <motion.div variants={itemVariants} className="flex justify-center relative">
                            <motion.div 
                                animate={{ rotate: [-2, 2, -2] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="relative"
                            >
                                <div className="rounded-none overflow-hidden border-8 border-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transform rotate-3 hover:rotate-0 transition-transform duration-500 bg-white p-4">
                                    <div className="border-4 border-black relative overflow-hidden">
                                        <Image
                                            src="/images/Contact.jpg"
                                            alt="Contact illustration"
                                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                            width={500}
                                            height={500}
                                        />
                                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_50%,transparent_50%)] bg-[length:100%_4px] mix-blend-overlay pointer-events-none"></div>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <p className="font-mono font-bold uppercase tracking-widest text-black">Awaiting Connection...</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
