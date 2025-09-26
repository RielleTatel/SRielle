import { Card, CardContent } from "@/components/ui/card";

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Barcode Inventory Management System",
      description: "Real-time inventory tracking system with barcode scanning, automated reordering, and comprehensive analytics dashboard for retail operations.",
      image: "/Barcode.jpg"
    },
    {
      id: 2,
      title: "Mitchlao's Online Ordering Platform",
      description: "Full-stack e-commerce platform with menu management, real-time order tracking, payment integration, and customer loyalty features.",
      image: "/MitchLao.webp"
    },
    {
      id: 3,
      title: "University Healthcare System",
      description: "Comprehensive healthcare management system for universities with appointment scheduling, medical records, and telehealth capabilities.",
      image: "/AdZU Infirmary.jpg"
    }
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-20 relative overflow-hidden">
      {/* Aesthetic blurred containers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Container 1 */}
        <div
          className="absolute w-[350px] h-[300px] rounded-full bg-white blur-[40px] shrink-0"
          style={{ 
            transform: "rotate(-8.5deg)",
            top: "5%",
            left: "2%"
          }}
        />
        
        {/* Container 3 */}
        <div
          className="absolute w-[250px] h-[220px] rounded-full bg-white blur-[32px] shrink-0"
          style={{ 
            transform: "rotate(-35.7deg)",
            bottom: "25%",
            left: "5%"
          }}
        />
        
        {/* Container 4 */}
        <div
          className="absolute w-[300px] h-[270px] rounded-full bg-white blur-[38px] shrink-0"
          style={{ 
            transform: "rotate(41.3deg)",
            bottom: "8%",
            right: "7%"
          }}
        />
        
        {/* Container 5 */}
        <div
          className="absolute w-[190px] h-[170px] rounded-full bg-white blur-[28px] shrink-0"
          style={{ 
            transform: "rotate(-19.2deg)",
            top: "40%",
            right: "1%"
          }}
        />
        
        {/* Container 6 */}
        <div
          className="absolute w-[160px] h-[140px] rounded-full bg-white blur-[22px] shrink-0"
          style={{ 
            transform: "rotate(52.8deg)",
            bottom: "35%",
            left: "1%"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex items-center justify-between mb-12">
          <div className="h-px bg-border flex-1"></div>
          <h2 className="text-accent font-medium px-8 text-lg">Experience</h2>
        </div>

        {/* Content */}
        <div className="space-y-16">
          {/* Section title */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h3 className="text-2xl font-medium text-foreground">Latest Projects</h3>
            <h4 className="text-5xl md:text-6xl font-bold text-foreground">
              Building solutions, shaping impact.
            </h4>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group hover:shadow-card hover:scale-105 hover:-translate-y-2 transition-all duration-500 border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className="rounded-t-xl h-48 mb-6 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h5 className="text-xl font-bold text-accent mb-3 group-hover:text-teal-dark transition-colors">{project.title}</h5>
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Capabilities summary */}
          <div className="bg-card rounded-3xl p-12 shadow-card border border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 hover:scale-105 transition-transform">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h5 className="text-3xl font-bold text-accent">Full-Stack Excellence</h5>
              <p className="text-foreground leading-relaxed">

              I build fullstack applications that are scalable and user-friendly. 
              I work across the development process — from designing intuitive interfaces to building reliable backends, 
              setting up secure authentication, and optimizing databases. My experience covers modern web and mobile technologies, with a focus on creating solutions that are functional, maintainable, 
              and able to grow with business needs.

              </p>
            </div>
          </div>

          {/* Statistics cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000 hover:scale-105 hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-accent mb-2 animate-pulse">4+</div>
                <h6 className="text-xl font-bold text-accent mb-3">Projects Delivered</h6>
                <p className="text-muted-foreground text-sm">
                  Successful full-stack applications serving thousands of users across various industries.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1200 hover:scale-105 hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-accent mb-2 animate-pulse" style={{animationDelay: '200ms'}}>2</div>
                <h6 className="text-xl font-bold text-accent mb-3">Years Experience</h6>
                <p className="text-muted-foreground text-sm">
                  Proven track record in full-stack development, team leadership, and technical innovation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1400 hover:scale-105 hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-accent mb-2 animate-pulse" style={{animationDelay: '400ms'}}>5+</div>
                <h6 className="text-xl font-bold text-accent mb-3">Certifications</h6>
                <p className="text-muted-foreground text-sm">
                  Professional certifications in cloud computing, security, and modern development practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}