import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const achievements = [
    "Meta Hackathon Finalist (Top 6/300+)",
    "Publication-Track Senior Research", 
    "Autonomous Systems Research",
  ];

  // Shared style for social buttons:
  const socialBtn =
    "bg-white text-black border border-black hover:bg-gray-100 " +
    "dark:bg-transparent dark:text-white dark:border-white " +
    "dark:hover:bg-white dark:hover:text-gray-900";

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
      <div className="section-container relative z-10 text-center text-white px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Achievement Badges */}
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-8 fade-in">
            {achievements.map((achievement, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="badge-success text-xs px-2 sm:px-3 py-1 text-center break-words max-w-full"
              >
                {achievement}
              </Badge>
            ))}
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in leading-tight">
            <span className="block">Israel Avendano Jr</span>
          </h1>

          {/* Title & Subtitle */}
          <div className="space-y-4 mb-8 fade-in px-2">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-blue-200 leading-tight">
              Software Engineer & Researcher
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 font-mono leading-relaxed">
              Applied AI/ML • Full-Stack Development • Autonomous Robotics
            </p>
          </div>

          {/* Meta Information */}
          <div className="text-base sm:text-lg text-gray-300 mb-8 fade-in px-2">
            <p className="mb-2 leading-relaxed">Western Washington University • Graduating June 2026</p>
            <p className="text-blue-200 font-semibold">
              Seeking Summer 2026 Roles
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col gap-4 justify-center items-center mb-12 fade-in px-2">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto"
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
            
            {/* Social Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              <Button variant="outline" size="lg" className={`${socialBtn} flex-1 sm:flex-none`} asChild>
                <a 
                  href="https://github.com/israelavendanojr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>

              <Button variant="outline" size="lg" className={`${socialBtn} flex-1 sm:flex-none`} asChild>
                <a 
                  href="https://www.linkedin.com/in/israelavendanojr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>

              <Button variant="outline" size="lg" className={`${socialBtn} flex-1 sm:flex-none`} asChild>
                <a href="mailto:israelavendanojr@gmail.com" onClick={handleEmailClick}>
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;