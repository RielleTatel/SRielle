import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "tech", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />
      
      <div id="home">
        <HeroSection />
      </div>
      
      <div id="about">
        <AboutSection />
      </div>
      
      <div id="projects">
        <ProjectsSection />
      </div>
      
      <div id="tech">
        <TechStackSection />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
