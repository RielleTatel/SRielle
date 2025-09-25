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
    <section className="min-h-screen flex flex-col justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
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
                I specialize in building scalable, user-centric applications that solve real-world problems. 
                From concept to deployment, I handle every aspect of the development lifecycle - crafting intuitive 
                user interfaces, architecting robust backend systems, implementing secure authentication, optimizing 
                database performance, and deploying to cloud infrastructure. My expertise spans modern web technologies, 
                mobile development, API design, and DevOps practices, ensuring that every solution is not just functional, 
                but maintainable, secure, and ready to scale with your business needs.
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