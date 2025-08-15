import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Trophy, Cpu, Brain, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "CrowdVision",
      subtitle: "Meta Hackathon Finalist",
      description: "Top 6 out of 300+ teams in 36-hour competition. Integrated real-time CV processing with LLM-powered safety analysis, handling 600+ video frames with RAG-enhanced decision making.",
      tech: ["Python", "TypeScript", "Flask", "React", "LLaMA 4", "RoboFlow"],
      tags: ["Competition-Winner", "AI/ML", "Computer-Vision", "Full-Stack"],
      impact: "Demonstrated production-ready architecture for crowd safety automation",
      icon: <Trophy className="w-6 h-6" />,
      status: "Winner",
      links: {
        demo: "#",
        github: "#",
        writeup: "#"
      }
    },
    {
      title: "Recycling Classifier → Physical Automation",
      subtitle: "ML to Real-World Impact",
      description: "96% multi-class accuracy optimized for embedded deployment. Developing full physical sorting pipeline with automated waste stream classification.",
      tech: ["Python", "PyTorch (MobileNetV2)", "OpenCV", "Raspberry Pi 5", "NumPy", "Pandas", "Matplotlib"],
      tags: ["Machine-Learning", "Computer-Vision", "Embedded-Systems", "Sustainability"],
      impact: "Complete ML pipeline from data collection → model training → physical deployment → waste reduction impact",
      icon: <Cpu className="w-6 h-6" />,
      status: "In Development",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Neural Network from Scratch",
      subtitle: "Mathematical Foundations",
      description: "Implemented forward/backward propagation, gradient descent, and minibatch training from mathematical foundations. Multi-architecture support with sigmoid, tanh, and ReLU activations.",
      tech: ["Python", "NumPy (no ML libraries)"],
      tags: ["Fundamentals", "Mathematical-ML", "Algorithm-Implementation"],
      impact: "Deep understanding of optimization mechanics, gradient flow, and numerical stability",
      icon: <Brain className="w-6 h-6" />,
      status: "Educational",
      links: {
        github: "#",
        documentation: "#"
      }
    },
    {
      title: "myLiftPlan",
      subtitle: "Full-Stack Development",
      description: "Normalized database schema supporting 75+ exercises with secure user authentication. Personalized workout generation serving 10+ active users.",
      tech: ["Flask", "JavaScript", "PostgreSQL", "Bootstrap", "HTML", "CSS"],
      tags: ["Full-Stack", "Database-Design", "Web-Development"],
      impact: "Complete user authentication and session management system",
      icon: <Database className="w-6 h-6" />,
      status: "Live",
      links: {
        github: "#",
        demo: "#"
      }
    }
  ];

  const getStatusColor = (status: string) => {
    if (status.includes("Winner")) return "badge-success";
    if (status.includes("Development")) return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800";
    if (status.includes("Educational")) return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800";
    if (status.includes("Live")) return "badge-primary";
    return "badge-primary";
  };

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ordered by technical depth and uniqueness — showcasing the rare intersection 
            of AI/ML, robotics, and software engineering fundamentals.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-1">{project.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {project.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Technical Stack */}
                <div>
                  <h4 className="font-semibold mb-3">Technical Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div>
                  <h4 className="font-semibold mb-2">Impact & Learning</h4>
                  <p className="text-muted-foreground">{project.impact}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {Object.entries(project.links).map(([type, url]) => (
                    <Button key={type} variant="outline" size="sm" asChild>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {type === 'github' ? <Github className="w-4 h-4 mr-2" /> : <ExternalLink className="w-4 h-4 mr-2" />}
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;