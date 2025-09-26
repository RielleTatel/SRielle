import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-20 relative overflow-hidden">
      {/* Aesthetic blurred containers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Container 1 */}
        <div
          className="absolute w-[320px] h-[280px] rounded-full bg-white blur-[38px] shrink-0"
          style={{ 
            transform: "rotate(-14.3deg)",
            top: "10%",
            left: "5%"
          }}
        />
        
        {/* Container 2 */}
        <div
          className="absolute w-[260px] h-[230px] rounded-full bg-white blur-[32px] shrink-0"
          style={{ 
            transform: "rotate(26.7deg)",
            top: "20%",
            right: "8%"
          }}
        />
      

      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex items-center justify-between mb-16">
          <div className="h-px bg-border flex-1"></div>
          <h2 className="text-accent font-medium px-8 text-lg">Contact</h2>
        </div>

        {/* Content */}
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <h3 className="text-5xl md:text-6xl font-bold text-foreground">
              Let's create something<br />
              extraordinary together
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your vision into reality? I'm here to help bring your ideas to life
              with thoughtful design and robust development.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Mail className="h-8 w-8 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Email</h4>
                <p className="text-muted-foreground"> tatzkiebuy@gmail </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Phone className="h-8 w-8 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                <p className="text-muted-foreground"> 0966 782 5566 </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="p-8 text-center">
                <MapPin className="h-8 w-8 text-accent mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Location</h4>
                <p className="text-muted-foreground"> Philippines </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA button */}
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full text-lg font-medium"
            >
              Start a conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}