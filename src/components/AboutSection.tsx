export function AboutSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center justify-between mb-12">
          <div className="h-px bg-border flex-1"></div>
          <h2 className="text-accent font-medium px-8 text-lg">About me</h2>
        </div>

        {/* Main content */}
        <div className="space-y-16">
          {/* Beyond code heading */}
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h3 className="text-5xl md:text-6xl font-bold text-foreground">
              Beyond code
            </h3>
          </div>

          {/* Grid layout with geometric blocks */}
          <div className="grid grid-cols-12 gap-6 h-[600px]">
            {/* Left column - two stacked blocks */}
            <div className="col-span-5 space-y-6">
              <div className="bg-teal-medium rounded-2xl h-48 p-8 flex flex-col justify-center shadow-card animate-in fade-in slide-in-from-left-4 duration-700 delay-300 hover:scale-105 hover:shadow-lg transition-all">
                <h5 className="text-2xl font-bold text-card mb-4">Problem Solver</h5>
                <p className="text-card leading-relaxed">
                  I excel at breaking down complex technical challenges into manageable solutions, 
                  always considering scalability and user experience in every decision.
                </p>
              </div>
              <div className="bg-teal-medium rounded-2xl flex-1 p-8 flex flex-col justify-center shadow-card animate-in fade-in slide-in-from-left-4 duration-700 delay-500 hover:scale-105 hover:shadow-lg transition-all">
                <h5 className="text-2xl font-bold text-card mb-4">Innovation Driver</h5>
                <p className="text-card leading-relaxed">
                  Passionate about exploring emerging technologies and implementing cutting-edge solutions 
                  that push boundaries and deliver exceptional value to users and stakeholders.
                </p>
              </div>
            </div>

            {/* Right column - large block with text */}
            <div className="col-span-7">
              <div className="bg-teal-light rounded-2xl h-full p-12 flex flex-col justify-center shadow-card animate-in fade-in slide-in-from-right-4 duration-700 delay-300 hover:scale-105 hover:shadow-lg transition-all">
                <h4 className="text-4xl md:text-5xl font-bold text-card leading-tight mb-6">
                  Building solutions,<br />
                  shaping impact.
                </h4>
                <p className="text-card text-lg leading-relaxed">
                  Natural-born leader with a passion for innovation and team empowerment. 
                  I thrive on transforming complex challenges into elegant solutions while 
                  fostering collaborative environments that bring out the best in everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom grid */}
          <div className="grid grid-cols-12 gap-6 h-80">
            {/* Large left block */}
            <div className="col-span-8">
              <div className="bg-teal-light rounded-2xl h-full p-8 flex flex-col justify-center shadow-card animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 hover:scale-105 hover:shadow-lg transition-all">
                <h5 className="text-2xl font-bold text-card mb-4">Leadership Philosophy</h5>
                <p className="text-card leading-relaxed">
                  I believe in leading by example, empowering team members to reach their full potential, 
                  and creating an environment where innovation flourishes through open communication and shared vision.
                </p>
              </div>
            </div>

            {/* Right column - two stacked smaller blocks */}
            <div className="col-span-4 space-y-6">
              <div className="bg-teal-medium rounded-2xl h-36 p-6 flex flex-col justify-center shadow-card animate-in fade-in slide-in-from-bottom-4 duration-700 delay-900 hover:scale-105 hover:shadow-lg transition-all">
                <h6 className="text-lg font-bold text-card mb-2">Strategic Thinking</h6>
                <p className="text-card text-sm">Turning vision into actionable roadmaps</p>
              </div>
              <div className="bg-teal-medium rounded-2xl flex-1 p-6 flex flex-col justify-center shadow-card animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000 hover:scale-105 hover:shadow-lg transition-all">
                <h6 className="text-lg font-bold text-card mb-2">Team Mentorship</h6>
                <p className="text-card text-sm">Developing talent and fostering growth mindsets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}