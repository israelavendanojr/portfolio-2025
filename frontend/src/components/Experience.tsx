import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "IT Support Specialist",
      company: "ATUS Help Desk",
      location: "Bellingham, WA",
      period: "Oct 2025 – Present",
      type: "Technical",
      status: "Current",
      description: "Providing Tier 1 and 2 IT support for 500+ users weekly with focus on critical issue resolution",
      achievements: [
        "Resolving critical issues to ensure high operational continuity across campus",
        "Providing autonomous troubleshooting and problem-solving for diverse technical challenges",
        "Supporting 500+ users weekly with systematic approach to technical support"
      ]
    },
    {
      title: "Autonomous Vehicle Researcher",
      company: "Huang Research Lab",
      location: "Bellingham, WA",
      period: "Sep 2025 – Present",
      type: "Research",
      status: "Current",
      description: "Developing novel safety mechanism for autonomous vehicles targeting Spring 2026 publication",
      achievements: [
        "Accelerating critical scenario detection for autonomous vehicles",
        "Working with C++, Autoware, and ROS for autonomous vehicle safety research",
        "Targeting publication in Spring 2026 for novel safety mechanism development"
      ]
    },
    {
      title: "Robotics Research Assistant",
      company: "MRRP Lab",
      location: "Bellingham, WA",
      period: "Apr 2025 – Present",
      type: "Research",
      status: "Current",
      description: "Technical Lead developing autonomous UAV agent converting NLP commands to executable flight plans",
      achievements: [
        "Leading development of autonomous UAV agent converting NLP commands to executable flight plans",
        "Establishing novel research framework for Human-Robot Interaction and Agentic Reasoning",
        "Fine-tuned LLM using Ollama and HuggingFace (30% accuracy improvement in multi-agentic LangGraph workflow)",
        "Directed concurrent development of ROS2/Gazebo UAV simulation and C++ embedded flight controller for Crazyflie 2.0 (40% reduction in projected development time)"
      ]
    },
    {
      title: "Information Technology Intern",
      company: "Skagit Valley College",
      location: "Mount Vernon, WA",
      period: "Sep 2022 – Sep 2023",
      type: "Technical",
      status: "Early Career",
      description: "Resolved 100+ technical support tickets with systematic troubleshooting approach",
      achievements: [
        "Implemented access control and security systems for campus infrastructure",
        "Provided comprehensive technical support across diverse hardware and software platforms",
        "Developed systematic approaches to complex technical problem-solving"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Current": return "badge-dark";
      case "Upcoming": return "badge-medium";
      case "Recent": return "badge-light";
      case "Early Career": return "badge-light";
      default: return "badge-medium";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Research": return "text-gray-900 dark:text-gray-100";
      case "Academic": return "text-gray-700 dark:text-gray-300";
      case "Leadership": return "text-gray-700 dark:text-gray-300";
      case "Technical": return "text-gray-700 dark:text-gray-300";
      default: return "text-gray-600 dark:text-gray-400";
    }
  };

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A progression from technical support to research leadership, 
            demonstrating growing expertise and increasing responsibility.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gray-900 dark:bg-gray-100 rounded-full border-4 border-background hidden md:block"></div>

                <Card className="md:ml-20 hover-lift">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-foreground">
                          {exp.company}
                        </CardDescription>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className={getStatusColor(exp.status)}>
                          {exp.status}
                        </Badge>
                        <Badge variant="outline" className={getTypeColor(exp.type)}>
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <TrendingUp className="w-4 h-4 text-gray-900 dark:text-gray-100" />
                        Key Achievements
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;