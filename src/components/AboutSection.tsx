export function AboutSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-20 relative overflow-hidden">
      {/* Aesthetic blurred containers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Container 1 */}
        <div
          className="absolute w-[400px] h-[350px] rounded-full bg-white/15 blur-[45px] shrink-0"
          style={{ 
            transform: "rotate(12.3deg)",
            top: "8%",
            left: "3%"
          }}
        />
        
        {/* Container 2 */}
        <div
          className="absolute w-[280px] h-[240px] rounded-full bg-white/20 blur-[35px] shrink-0"
          style={{ 
            transform: "rotate(-28.7deg)",
            top: "25%",
            right: "5%"
          }}
        />
        
        {/* Container 3 */}
        <div
          className="absolute w-[320px] h-[280px] rounded-full bg-white/12 blur-[40px] shrink-0"
          style={{ 
            transform: "rotate(45.1deg)",
            bottom: "20%",
            left: "8%"
          }}
        />
        
        {/* Container 4 */}
        <div
          className="absolute w-[220px] h-[200px] rounded-full bg-white/18 blur-[30px] shrink-0"
          style={{ 
            transform: "rotate(-15.8deg)",
            bottom: "10%",
            right: "10%"
          }}
        />
        
        {/* Container 5 */}
        <div
          className="absolute w-[180px] h-[160px] rounded-full bg-white/25 blur-[25px] shrink-0"
          style={{ 
            transform: "rotate(33.4deg)",
            top: "50%",
            left: "1%"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
              <div className="bg-gradient-to-tr from-tealLight via-tealMedium to-goldSoft rounded-2xl h-48 p-8 flex flex-col justify-center shadow-card animate-in fade-in slide-in-from-left-4 duration-700 delay-300 hover:scale-105 hover:shadow-lg transition-all">
                <h5 className="text-2xl font-bold text-card mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Problem Solver</h5>
                <p className="text-card leading-relaxed bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  I excel at breaking down complex technical challenges into manageable solutions, 
                  always considering scalability and user experience in every decision.
                </p>
              </div>
              <div className="bg-gradient-to-r from-tealLight via-goldSoft to-tealMedium rounded-2xl flex-1 p-8 flex flex-col justify-center shadow-card animate-in fade-in slide-in-from-left-4 duration-700 delay-500 hover:scale-105 hover:shadow-lg transition-all">
                <h5 className="text-2xl font-bold text-card mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Innovation Driver</h5>
                <p className="text-card leading-relaxed bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  Passionate about exploring emerging technologies and implementing cutting-edge solutions 
                  that push boundaries and deliver exceptional value to users and stakeholders.
                </p>
              </div>
            </div>

            {/* Right column - large block with text */}
            <div className="col-span-7">
              <div className="bg-gradient-to-bl from-tealLight via-tealMedium to-goldSoft rounded-2xl h-full p-12 flex flex-col justify-center shadow-card animate-in fade-in slide-in-from-right-4 duration-700 delay-300 hover:scale-105 hover:shadow-lg transition-all">
                <h4 className="text-4xl md:text-5xl font-bold text-card leading-tight mb-6 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  Building solutions,<br />
                  shaping impact.
                </h4>
                <p className="text-card text-lg leading-relaxed bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
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
              <div className="bg-gradient-to-r from-tealLight via-goldSoft to-tealMedium rounded-2xl h-full p-8 flex flex-col justify-center shadow-card animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 hover:scale-105 hover:shadow-lg transition-all">
                <h5 className="text-2xl font-bold text-card mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Leadership Philosophy</h5>
                <p className="text-card leading-relaxed bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  I believe in leading by example, empowering team members to reach their full potential, 
                  and creating an environment where innovation flourishes through open communication and shared vision.
                </p>
              </div>
            </div>

            {/* Right column - two stacked smaller blocks */}
            <div className="col-span-4 space-y-6">
              <div className="bg-gradient-to-tr from-tealLight via-tealMedium to-goldSoft rounded-2xl h-36 p-6 flex flex-col justify-center shadow-card animate-in fade-in slide-in-from-bottom-4 duration-700 delay-900 hover:scale-105 hover:shadow-lg transition-all">
                <h6 className="text-lg font-bold text-card mb-2 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Strategic Thinking</h6>
                <p className="text-card text-sm bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Turning vision into actionable roadmaps</p>
              </div>
              <div className="bg-gradient-to-tr from-tealLight via-goldSoft to-tealMedium rounded-2xl flex-1 p-6 flex flex-col justify-center shadow-card animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000 hover:scale-105 hover:shadow-lg transition-all">
                <h6 className="text-lg font-bold text-card mb-2 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Team Mentorship</h6>
                <p className="text-card text-sm bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Developing talent and fostering growth mindsets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
