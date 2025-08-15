import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const achievements = [
    "Meta Hackathon Finalist (Top 6/300+)",
    "Publication-Track Senior Research", 
    "Autonomous Systems Research",
    
  ]

  const handleEmailClick = () => {
    navigator.clipboard.writeText('israelavendanojr@gmail.com');
    // You could add a toast notification here
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="section-container relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Achievement Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 fade-in">
            {achievements.map((achievement, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="badge-success text-xs px-3 py-1"
              >
                {achievement}
              </Badge>
            ))}
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in">
            <span className="block">Israel Avendano Jr</span>
          </h1>

          {/* Title & Subtitle */}
          <div className="space-y-4 mb-8 fade-in">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-200">
              Software Engineer & Researcher
            </h2>
            <p className="text-lg md:text-xl text-gray-200 font-mono">
              Applied AI/ML • Full-Stack Development • Autonomous Robotics
            </p>
          </div>

          {/* Meta Information */}
          <div className="text-lg text-gray-300 mb-8 fade-in">
            <p className="mb-2">Western Washington University • Graduating June 2026</p>
            <p className="text-blue-200 font-semibold">
              Seeking Summer 2026 Roles
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white"
              asChild
            >
              <a 
                href="https://drive.google.com/file/d/1aQAlPaApBrpjEFNfYhax3YcZooGM118S/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FileText className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white hover:text-gray-900"
                asChild
              >
                <a 
                  href="https://github.com/israelavendanojr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white hover:text-gray-900"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/israelavendanojr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white hover:text-gray-900"
                asChild
              >
                <a href="mailto:israelavendanojr@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;