import { Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-br from-hero-bg to-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight">
            GABRIELLE TATEL
          </h1>
          <h2 className="text-3xl md:text-4xl font-light text-muted-foreground">
            Visionary
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-lg text-foreground leading-relaxed">
            Full-stack developer with a vision to craft meaningful experiences. I believe in technology's power to{" "}
            <span className="font-semibold">transform organizations, empower people, and create impact</span>{" "}
            that reaches beyond boundaries.
          </p>
        </div>

        {/* Call to action */}
        <div className="flex justify-center">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-soft border border-border/50">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Open to new challenges, new ideas, and new horizons
            </p>
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 pt-8">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            View my github!
          </Button>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Brand mark */}
      <div className="absolute bottom-8 right-8">
        <h3 className="text-2xl font-bold text-accent tracking-wider">
          SRIELLE
        </h3>
      </div>
    </section>
  );
}