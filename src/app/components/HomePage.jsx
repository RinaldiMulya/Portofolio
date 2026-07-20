// src\app\components\HomePage.jsx
import About from "./section/AboutSection";
import Contact from "./section/ContactSection";
import Hero from "./section/HeroSection";
import Skill from "./section/SkillSection";
import Project from "./section/ProjectSection";

export default function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Project />
            <Skill />
            <Contact />
        </>
    );
}
