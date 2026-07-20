// Skill Section src\app\components\section\SkillSection.jsx
"use client"
import { useState, useRef } from 'react';
import { Code, Database, Cpu, Gamepad } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'motion/react';

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState('web');
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const categories = [
        {
            id: 'web',
            title: 'Web Development',
            description: 'Full-stack development, PWA & Architecture',
            icon: Code,
            languages: ['React.js', 'Next.js (App Router)', 'TypeScript', 'JavaScript', 'Tailwind CSS v4', 'Shadcn/Radix UI', 'Zustand / Jotai', 'React Query (TanStack)', 'next-intl (i18n)', 'Playwright (Testing)', 'Node.js / Express.js', 'PostgreSQL / MySQL', 'Prisma ORM (v7)', 'Supabase (Storage & Auth)', 'NextAuth.js v5'],
            tools: ['Feature-Sliced Design (FSD)', 'Backend for Frontend (BFF)', 'Next.js Caching', 'Progressive Web App (PWA)', 'Git / GitHub / GitLab', 'Postman', 'Figma', 'Docker', 'Vercel / Netlify', 'Storybook']
        },
        {
            id: 'data',
            title: 'Data Analytics',
            description: 'Turning raw data into business decisions',
            icon: Database,
            languages: ['SQL', 'Google BigQuery', 'Excel'],
            tools: ['Power BI', 'Tableau', 'Google Data Studio']
        }
    ];

    const activeData = categories.find(cat => cat.id === activeCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <div id="skills-preview" className="bg-yellow-400 relative overflow-hidden py-20 font-sans border-t-4 border-black">
            {/* Retro grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000012_1px,transparent_1px),linear-gradient(to_bottom,#00000012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <section
                ref={sectionRef}
                className="relative z-10 px-6 lg:px-20"
            >
                <motion.div 
                    className="max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div variants={itemVariants} className="inline-flex items-center justify-center bg-white border-2 border-black px-4 py-2 text-sm font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                            <Gamepad size={16} className="mr-2 text-black" />
                            Skill Tree
                        </motion.div>
                        
                        <motion.h2 variants={itemVariants} className="text-5xl lg:text-7xl font-black text-black uppercase tracking-tighter drop-shadow-sm mb-6">
                            My <span className="text-white text-stroke-black bg-blue-600 px-2 ml-2 border-2 border-black inline-block transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Skills</span>
                        </motion.h2>
                        
                        <motion.p variants={itemVariants} className="text-lg font-mono text-black max-w-2xl mx-auto bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            Explore my technical skills across different domains. Click on any category to see the specific technologies and tools I work with.
                        </motion.p>
                    </div>

                    {/* Categories Grid */}
                    <motion.div variants={containerVariants} className="grid md:grid-cols-2 max-w-4xl mx-auto gap-6 mb-16">
                        {categories.map((category) => (
                            <motion.div
                                variants={itemVariants}
                                key={category.id}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className={`bg-white rounded-none p-6 border-4 border-black transition-all cursor-pointer ${
                                    activeCategory === category.id
                                    ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-blue-100 transform -translate-y-2'
                                    : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-slate-50'
                                    }`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                <div className="flex items-center">
                                    <div className={`p-4 border-2 border-black mr-4 ${
                                        activeCategory === category.id ? 'bg-blue-500' : 'bg-gray-200'
                                        }`}>
                                        <category.icon
                                            size={32}
                                            className={`${activeCategory === category.id ? 'text-white' : 'text-black'}`}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black uppercase tracking-widest text-black">
                                            {category.title}
                                        </h3>
                                        <p className="text-black font-mono text-sm mt-1 font-bold">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Dynamic Languages & Frameworks Section */}
                        <motion.div variants={itemVariants} className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                            <div className="absolute top-0 left-0 w-full h-8 bg-black flex items-center px-4">
                                <span className="text-white font-mono text-xs uppercase tracking-widest">Tech_Stack.exe</span>
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-widest text-black mb-6 mt-4 text-center">
                                Languages & Frameworks
                            </h3>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCategory + '-languages'}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex flex-wrap justify-center gap-3"
                                >
                                    {activeData?.languages.map((language, index) => (
                                        <motion.span
                                            key={`${activeCategory}-${language}-${index}`}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.05 }}
                                            whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0] }}
                                            className="px-4 py-2 bg-blue-500 text-white font-bold uppercase tracking-wider text-sm border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-default"
                                        >
                                            {language}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>

                        {/* Dynamic Tools & Technologies Section */}
                        <motion.div variants={itemVariants} className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                            <div className="absolute top-0 left-0 w-full h-8 bg-black flex items-center px-4">
                                <span className="text-white font-mono text-xs uppercase tracking-widest">Tools_Config.ini</span>
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-widest text-black mb-6 mt-4 text-center">
                                Tools & Apps
                            </h3>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCategory + '-tools'}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex flex-wrap justify-center gap-3"
                                >
                                    {activeData?.tools.map((tool, index) => (
                                        <motion.span
                                            key={`${activeCategory}-${tool}-${index}`}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.05 }}
                                            whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0] }}
                                            className="px-4 py-2 bg-green-400 text-black font-bold uppercase tracking-wider text-sm border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-default"
                                        >
                                            {tool}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
