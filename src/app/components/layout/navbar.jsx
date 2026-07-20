// Navbar Component src\app\components\layout\navbar.jsx
"use client";
import { useState } from "react";
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Home, User, Briefcase, Code, Mail, ArrowLeft } from "lucide-react";

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Check if we're on homepage
    const isHomePage = pathname === '/';

    // Get page title based on current path
    const getPageTitle = () => {
        switch (pathname) {
            case '/About':
                return 'About';
            case '/Projects':
                return 'Projects';
            case '/Skill':
                return 'Skills';
            case '/Contact':
                return 'Contact';
            default:
                return 'RinaldiM';
        }
    };

    // Main navigation items
    const mainNavItems = [
        { id: "home", label: "Home", href: "/", icon: Home },
        { id: "about", label: "About", href: "/About", icon: User },
        { id: "projects", label: "Projects", href: "/Projects", icon: Briefcase },
    ];

    const handleNavigation = (href) => {
        router.push(href);
        console.log(`Navigate to: ${href}`);
        setIsDesktopMenuOpen(false);
        setIsMobileMenuOpen(false);
    };

    const handleBackClick = () => {
        router.back();
    };

    return (
        <nav className="bg-white border-b-4 border-black sticky top-0 z-50 font-sans">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left side - Back arrow + Logo/Title */}
                    <div className="flex items-center gap-3">
                        {/* Back Arrow - Only show on non-home pages */}
                        {!isHomePage && (
                            <button
                                onClick={handleBackClick}
                                className="inline-flex items-center justify-center p-2 border-2 border-black bg-white hover:bg-yellow-300 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] active:translate-y-[1px] active:shadow-none transition-all"
                                aria-label="Go back"
                            >
                                <ArrowLeft size={18} strokeWidth={2.5} />
                            </button>
                        )}

                        {/* Logo/Title */}
                        <h1 className="text-2xl font-black uppercase tracking-tight text-black flex items-center gap-2">
                            <span className="bg-red-500 text-white px-2.5 py-0.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg] inline-block">Rinaldi</span>
                            <span className="text-slate-800 font-mono text-sm tracking-widest hidden sm:inline">&lt; {getPageTitle()} /&gt;</span>
                        </h1>
                    </div>

                    {/* Desktop Hamburger Menu (md and up) */}
                    <div className="hidden md:block relative">
                        <button
                            onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
                            className="inline-flex items-center justify-center p-2.5 border-2 border-black bg-white hover:bg-blue-300 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] active:translate-y-[1px] active:shadow-none transition-all relative"
                        >
                            {isDesktopMenuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
                        </button>

                        {/* Desktop Dropdown Menu */}
                        {isDesktopMenuOpen && (
                            <>
                                {/* Backdrop */}
                                <div
                                    className="fixed inset-0 z-40"
                                    onClick={() => setIsDesktopMenuOpen(false)}
                                />

                                {/* Dropdown */}
                                <div className="absolute right-0 top-12 bg-white border-4 border-black p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-48 z-50">
                                    {mainNavItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => handleNavigation(item.href)}
                                            className="w-full text-left px-3 py-2.5 mb-1 last:mb-0 text-black border-2 border-transparent hover:border-black hover:bg-yellow-300 font-bold uppercase text-xs tracking-widest transition-colors flex items-center gap-3"
                                        >
                                            <item.icon size={16} strokeWidth={2.5} />
                                            <span>{item.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Mobile Hamburger (mobile only) */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2.5 border-2 border-black bg-white hover:bg-blue-300 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] transition-all"
                        >
                            {isMobileMenuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (mobile only) */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-yellow-100 border-t-4 border-black p-4 space-y-2">
                    {mainNavItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavigation(item.href)}
                            className="w-full text-left px-4 py-3 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 transition-all font-bold uppercase text-xs tracking-widest flex items-center gap-3"
                        >
                            <item.icon size={16} strokeWidth={2.5} />
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;