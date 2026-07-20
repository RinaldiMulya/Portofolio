// Sidebar src\app\components\layout\sidebar.jsx
import React from 'react';
import { Home, User, FolderOpen, Mail, Zap } from 'lucide-react';

const Sidebar = ({ activeSection, onSectionChange }) => {
    // Navigation items
    const navigationItems = [
        { id: 'hero', icon: Home, label: 'Home' },
        { id: 'about-preview', icon: User, label: 'About' },
        { id: 'projects-preview', icon: FolderOpen, label: 'Projects' },
        { id: 'skills-preview', icon: Zap, label: 'Skills' },
        { id: 'contact-preview', icon: Mail, label: 'Contact' }
    ];

    // Handle section click - scroll to section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        onSectionChange(sectionId);
    };

    // Desktop/Tablet Fixed Sidebar - Always visible on desktop/tablet
    return (
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 bg-white border-y-4 border-r-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-col items-center py-6 px-4 space-y-4">
                {navigationItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    
                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`p-3.5 border-2 border-black transition-all duration-150 group relative ${
                                isActive 
                                    ? 'bg-red-500 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-y-[-1px] translate-x-[-1px]' 
                                    : 'bg-white text-black hover:bg-yellow-300 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px]'
                            }`}
                            title={item.label}
                        >
                            <Icon size={20} strokeWidth={2.5} />
                            
                            {/* Tooltip */}
                            <div className="absolute left-full ml-4 px-3 py-1.5 bg-black text-white font-mono text-xs uppercase tracking-widest border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap pointer-events-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                {item.label}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;