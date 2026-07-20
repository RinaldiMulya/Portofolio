// src\app\components\ui\button.jsx
import { 
    Eye, Download, Send, ArrowRight, ExternalLink, 
    Github, Linkedin, Mail, Phone, Calendar,
    Loader2, Check
} from 'lucide-react';

// Main Button Component
export const Button = ({ 
    variant = 'primary', 
    size = 'md', 
    children, 
    icon: Icon,
    iconPosition = 'left',
    disabled = false,
    loading = false,
    onClick,
    href,
    target,
    className = '',
    ...props 
}) => {
    // Base styles
    const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-150 border-2 border-black focus:outline-none";
    
    // Variant styles
    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]",
        secondary: "bg-yellow-400 hover:bg-yellow-500 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]",
        outline: "bg-white hover:bg-slate-50 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]",
        ghost: "border-transparent text-slate-800 hover:border-black hover:bg-slate-50",
        danger: "bg-red-500 hover:bg-red-600 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]",
        success: "bg-green-400 hover:bg-green-500 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]"
    };
    
    // Size styles
    const sizes = {
        sm: "px-4 py-2 text-xs rounded-none gap-2",
        md: "px-6 py-3 text-sm rounded-none gap-3",
        lg: "px-8 py-4 text-base rounded-none gap-3",
        xl: "px-10 py-5 text-lg rounded-none gap-4"
    };
    
    // Disabled styles
    const disabledStyles = disabled || loading 
        ? "opacity-50 cursor-not-allowed hover:scale-100" 
        : "";
    
    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`;
    
    const content = (
        <>
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {!loading && Icon && iconPosition === 'left' && <Icon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />}
            {children}
            {!loading && Icon && iconPosition === 'right' && <Icon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />}
        </>
    );
    
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={`${combinedClassName} group`}
                {...props}
            >
                {content}
            </a>
        );
    }
    
    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={`${combinedClassName} group`}
            {...props}
        >
            {content}
        </button>
    );
};

// Specialized Portfolio Buttons
export const PortfolioButtons = {
    ViewProjects: (props) => (
        <Button variant="primary" icon={Eye} {...props}>
            View My Projects
        </Button>
    ),
    
    DownloadCV: (props) => (
        <Button variant="secondary" icon={Download} iconPosition="right" {...props}>
            Download CV
        </Button>
    ),
    
    ContactMe: (props) => (
        <Button variant="outline" icon={Send} {...props}>
            Contact Me
        </Button>
    ),
    
    HireMe: (props) => (
        <Button variant="primary" icon={ArrowRight} iconPosition="right" {...props}>
            Hire Me
        </Button>
    ),
    
    LetsTalk: (props) => (
        <Button variant="ghost" icon={Phone} {...props}>
            Let's Talk
        </Button>
    ),
    
    ScheduleCall: (props) => (
        <Button variant="success" icon={Calendar} {...props}>
            Schedule a Call
        </Button>
    )
};

// Social Media Buttons
export const SocialButtons = {
    GitHub: (props) => (
        <Button variant="ghost" icon={Github} size="sm" {...props}>
            GitHub
        </Button>
    ),
    
    LinkedIn: (props) => (
        <Button variant="ghost" icon={Linkedin} size="sm" {...props}>
            LinkedIn
        </Button>
    ),
    
    Email: (props) => (
        <Button variant="ghost" icon={Mail} size="sm" {...props}>
            Email
        </Button>
    )
};

// Default export untuk komponen utama
export default Button;