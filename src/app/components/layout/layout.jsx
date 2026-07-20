// Layout Component src\app\components\layout\layout.jsx
'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './navbar';
import Sidebar from './sidebar';

const Layout = ({ children }) => {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState('hero');
    const [isClient, setIsClient] = useState(false);

    // Check if we're on homepage
    const isHomePage = pathname === '/';

    // Handle hydration
    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleSectionChange = (sectionId) => {
        setActiveSection(sectionId);
    };

    // Enhanced Intersection Observer for automatic section detection (only on homepage)
    useEffect(() => {
        if (!isHomePage || !isClient) return;

        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: [0, 0.1, 0.5, 0.9, 1]
        };

        const observerCallback = (entries) => {
            let bestEntry = null;
            let highestRatio = 0;

            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio > highestRatio) {
                    highestRatio = entry.intersectionRatio;
                    bestEntry = entry;
                }
            });

            if (bestEntry) {
                setActiveSection(bestEntry.target.id);
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const sections = [
            'hero',
            'about-preview',
            'projects-preview',
            'skills-preview',
            'contact-preview'
        ];

        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((sectionId) => {
                const element = document.getElementById(sectionId);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [isHomePage, isClient]);

    return (
        <div className="min-h-screen bg-[#f3f3ee] text-slate-900 selection:bg-yellow-400">
            {/* Navigation */}  
            <Navbar />

            {/* Layout Container - Conditional Padding based on homepage */}
            <div className={`min-h-[calc(100vh-64px)] ${isHomePage ? 'md:pl-24 relative' : ''}`}>
                {/* Desktop/Tablet Sidebar - Only show on homepage after client hydration */}
                {isHomePage && isClient && (
                    <div className="hidden md:block">
                        <Sidebar
                            activeSection={activeSection}
                            onSectionChange={handleSectionChange}
                        />
                    </div>
                )}

                {/* Main Content Area */}
                <main className={`flex-1 ${isHomePage ? 'md:overflow-x-hidden' : ''}`}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;