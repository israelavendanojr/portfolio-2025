import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Trophy, Cpu, Brain, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

const Projects = () => {
  const projects = [
    {
      title: "KELP - Environmental Risk Terrain Visualizer",
      subtitle: "DubHacks 2025 Project",
      description: "AI-powered geospatial platform that transforms environmental policy questions into instant predictive 3D models. Two-stage LLM pipeline generates county-specific climate predictions grounded in real baseline data, rendering them as interactive WebGL terrain visualizations across all 39 Washington State counties.",
      tech: ["React", "TypeScript", "FastAPI", "Deck.gl", "Mapbox GL", "Gemini AI", "Python", "WebGL", "Tailwind CSS"],
      tags: ["AI/ML", "Geospatial-Computing", "Full-Stack", "Data-Visualization", "REST-API", "3D-Graphics"],
      impact: "Reduces environmental impact assessment time from weeks to seconds with AI-powered predictive modeling and real-time 3D visualization",
      icon: <Brain className="w-6 h-6" />,
      status: "Hackathon",
      links: {
        demo: "https://devpost.com/software/kelp?ref_content=user-portfolio&ref_feature=in_progress",
        github: "https://github.com/israelavendanojr/dubhacks-2025",
      }
    },
    {
      title: "CrowdVision",
      subtitle: "Meta Hackathon Finalist",
      description: "Top 6 teams out of 300+ participants in 36-hour competition. Integrated real-time CV processing with LLM-powered safety analysis, handling 600+ video frames with RAG-enhanced decision making.",
      tech: ["Python", "TypeScript", "Flask", "React", "LLaMA 4", "RoboFlow"],
      tags: ["Competition-Winner", "AI/ML", "Computer-Vision", "Full-Stack"],
      impact: "Demonstrated production-ready architecture for crowd safety automation",
      icon: <Trophy className="w-6 h-6" />,
      status: "Winner",
      links: {
        demo: "https://www.youtube.com/watch?v=bUo0xOwCAI0",
        github: "https://github.com/israelavendanojr/crowd-vision",
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
        github: "https://github.com/israelavendanojr/recycling-classifier",
        // robot_repo: "https://github.com/israelavendanojr/recycling-robot"
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
        github: "https://github.com/israelavendanojr/neural-network",
      }
    },
    {
      title: "VentureMap",
      subtitle: "AI Agent Powered Real-Time Activity Finder",
      description: "Full-stack web app integrating RESTful APIs, AI agents, and geospatial services to deliver real-time, personalized activity recommendations. Developed in a 6-hour hackathon to address decision fatigue with intelligent, location-aware suggestions.",
      tech: ["Python", "Flask", "React", "TypeScript", "Tailwind CSS", "Google Maps API", "Gemini AI"],
      tags: ["Full-Stack", "REST-API", "Agentic-AI", "Geospatial-Computing"],
      impact: "Showcases end-to-end system design combining AI reasoning, API orchestration, and responsive UI for a location-based service.",
      icon: <ExternalLink className="w-6 h-6" />,
      status: "Hackathon",
      links: {
        github: "https://github.com/Jeffrey-F-Guo/VentureMap",
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
        github: "https://github.com/israelavendanojr/workout-generator",
        demo: "https://www.myliftplan.com/"
      }
    },
    {
      title: "Single User Relational Database",
      subtitle: "Database Engine & Query Processing",
      description: "Java-based relational database engine implementing core relational algebra operations and SQL-like query parsing, with robust QA testing and schema design.",
      tech: ["Java", "SQL", "Database Design", "IntelliJ"],
      tags: ["Systems-Programming", "Database-Internals", "Query-Processing", "Relational Algebra"],
      impact: "Demonstrates low-level understanding of database execution pipelines, relational theory, and QA methodology.",
      icon: <Database className="w-6 h-6" />,
      status: "Educational",
      links: {
        github: "https://github.com/israelavendanojr/single-user-database"
      }
    }
  ];

  const getStatusColor = (status: string) => {
    if (status.includes("Winner")) return "badge-green";
    if (status.includes("Development")) return "badge-medium";
    if (status.includes("Educational")) return "badge-light";
    if (status.includes("Live")) return "badge-green-soft";
    if (status.includes("Hackathon")) return "badge-light";
    return "badge-medium";
  };

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A curated selection of projects demonstrating technical range, innovation, and practical application.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={cn(
                      "p-3 rounded-lg transition-colors",
                      project.status === "Winner" 
                        ? "bg-[hsl(var(--accent-green-soft))] text-accent-green group-hover:bg-[hsl(var(--accent-green))] group-hover:text-white"
                        : "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 group-hover:bg-gray-900 group-hover:text-white dark:group-hover:bg-gray-100 dark:group-hover:text-gray-900"
                    )}>
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
                    <Button key={type} variant="outline" size="sm" className="hover:border-accent-green hover:text-accent-green group" asChild>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {type === 'github' ? <Github className="w-4 h-4 mr-2 group-hover:text-accent-green" /> : <ExternalLink className="w-4 h-4 mr-2 group-hover:text-accent-green" />}
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