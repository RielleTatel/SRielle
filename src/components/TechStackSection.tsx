import { Code, Database, Cloud, Smartphone, Globe, Shield, Zap, Layers } from "lucide-react";

export function TechStackSection() {
  const techItems = [
    { title: "Frontend Development", icon: Code, description: "React, Vue.js, Angular & modern frameworks" },
    { title: "Backend Architecture", icon: Database, description: "Node.js, Python, API design & microservices" },
    { title: "Cloud Infrastructure", icon: Cloud, description: "AWS, Docker, Kubernetes & DevOps" },
    { title: "Mobile Development", icon: Smartphone, description: "React Native & cross-platform solutions" },
    { title: "Full-Stack Solutions", icon: Globe, description: "End-to-end application development" },
    { title: "Security & Performance", icon: Shield, description: "Authentication, optimization & best practices" },
    { title: "Real-time Systems", icon: Zap, description: "WebSockets, live updates & data streaming" },
    { title: "System Integration", icon: Layers, description: "Third-party APIs & enterprise solutions" }
  ];


  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center justify-between mb-16">
          <div className="h-px bg-border flex-1"></div>
          <h2 className="text-accent font-medium px-8 text-lg">Tech stack</h2>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Tech list */}
          <div className="space-y-8">
            {techItems.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-start gap-6 animate-in fade-in slide-in-from-left-4 duration-700 hover:translate-x-2 transition-transform"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-teal-light rounded-full p-3 shadow-soft flex-shrink-0 hover:scale-110 hover:rotate-12 transition-all duration-300">
                    <IconComponent className="h-6 w-6 text-teal-dark" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg text-foreground font-medium mb-1">{tech.title}</h4>
                    <p className="text-muted-foreground text-sm">{tech.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right side - Engineering Toolkit */}
          <div className="space-y-12">
            <h3 className="text-5xl md:text-6xl font-bold text-foreground animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
              Engineering<br />
              Toolkit
            </h3>

            {/* Tech icons grid */}
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-700 delay-500">
              {/* Technology stack visualization */}
              <div className="grid grid-cols-4 gap-4">
                {/* React */}
                <div className="bg-teal-light rounded-2xl p-4 shadow-soft flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-pulse" style={{animationDelay: '0ms'}}>
                  <div className="text-2xl font-bold text-teal-dark">⚛️</div>
                </div>
                {/* TypeScript */}
                <div className="bg-teal-light rounded-2xl p-4 shadow-soft flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-pulse" style={{animationDelay: '200ms'}}>
                  <div className="text-2xl font-bold text-teal-dark">TS</div>
                </div>
                {/* Node.js */}
                <div className="bg-teal-light rounded-2xl p-4 shadow-soft flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-pulse" style={{animationDelay: '400ms'}}>
                  <div className="text-2xl font-bold text-teal-dark">🟢</div>
                </div>
                {/* Python */}
                <div className="bg-teal-light rounded-2xl p-4 shadow-soft flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-pulse" style={{animationDelay: '600ms'}}>
                  <div className="text-2xl font-bold text-teal-dark">🐍</div>
                </div>
                {/* AWS */}
                <div className="bg-teal-light rounded-2xl p-4 shadow-soft flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-pulse" style={{animationDelay: '800ms'}}>
                  <div className="text-2xl font-bold text-teal-dark">☁️</div>
                </div>
                {/* Docker */}
                <div className="bg-teal-light rounded-2xl p-4 shadow-soft flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-pulse" style={{animationDelay: '1000ms'}}>
                  <div className="text-2xl font-bold text-teal-dark">🐳</div>
                </div>
                {/* PostgreSQL */}
                <div className="bg-teal-light rounded-2xl p-4 shadow-soft flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-pulse" style={{animationDelay: '1200ms'}}>
                  <div className="text-2xl font-bold text-teal-dark">🐘</div>
                </div>
                {/* Git */}
                <div className="bg-teal-light rounded-2xl p-4 shadow-soft flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-pulse" style={{animationDelay: '1400ms'}}>
                  <div className="text-2xl font-bold text-teal-dark">📦</div>
                </div>
                {/* MongoDB */}
                <div className="bg-teal-light rounded-2xl p-4 shadow-soft flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-pulse" style={{animationDelay: '1600ms'}}>
                  <div className="text-2xl font-bold text-teal-dark">🍃</div>
                </div>
                {/* Next.js */}
                <div className="bg-teal-light rounded-2xl p-4 shadow-soft flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-pulse" style={{animationDelay: '1800ms'}}>
                  <div className="text-lg font-bold text-teal-dark">▲</div>
                </div>
                {/* GraphQL */}
                <div className="bg-teal-light rounded-2xl p-4 shadow-soft flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-pulse" style={{animationDelay: '2000ms'}}>
                  <div className="text-2xl font-bold text-teal-dark">◆</div>
                </div>
                {/* Kubernetes */}
                <div className="bg-teal-light rounded-2xl p-4 shadow-soft flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-pulse" style={{animationDelay: '2200ms'}}>
                  <div className="text-2xl font-bold text-teal-dark">⚙️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}