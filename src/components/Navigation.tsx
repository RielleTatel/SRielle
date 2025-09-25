import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const sections = [
    { id: "home", label: "SRielle" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-card/90 backdrop-blur-md rounded-full px-2 py-2 shadow-soft border border-border/50">
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full p-2 hover:bg-muted"
            onClick={() => onSectionChange("home")}
          >
            <Zap className="h-4 w-4" />
          </Button>
          {sections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "secondary" : "ghost"}
              size="sm"
              className="rounded-full px-4 py-2 text-sm font-medium transition-all duration-300"
              onClick={() => onSectionChange(section.id)}
            >
              {section.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}