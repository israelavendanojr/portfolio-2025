import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Target, BookOpen } from 'lucide-react';

const Research = () => {
  const upcomingProjects = [
    {
      title: "Senior Research Project: Software Reliability & Safety",
      course: "CSCI 490",
      timeline: "Fall 2025",
      description: "Focus: Human error patterns in software development using eye-tracking and AI analysis",
      details: [
        "3-person interdisciplinary collaboration with Dr. Fuqun Huang",
        "Developing novel methods for software dependability",
        "Targeting publication Spring 2026"
      ],
      icon: <BookOpen className="w-5 h-5" />,
      status: "Research Track"
    },
    {
      title: "Physical Recycling Automation",
      course: "Independent Project",
      timeline: "Fall 2025",
      description: "Expanding ML classifier to full sorting pipeline",
      details: [
        "Deploying trained model to Raspberry Pi 5 with physical sorting mechanisms",
        "End-to-end automation: real-time classification → robotic sorting → waste stream optimization"
      ],
      icon: <Target className="w-5 h-5" />,
      status: "Applied Research"
    },
    {
      title: "Robotics Research: Natural Language to Temporal Logic",
      course: "Research Assistant",
      timeline: "Ongoing",
      description: "Early-stage research in LLM integration with ROS2 for intuitive robotic control",
      details: [
        "Natural language processing for autonomous UAV systems",
        "Exploring LLM integration with ROS2 for intuitive robotic task planning"
      ],
      icon: <Users className="w-5 h-5" />,
      status: "Early Stage"
    }
  ];

  const leadership = [
    {
      role: "Community Outreach Coordinator",
      organization: "Latin Men in Higher Education",
      description: "Delivered end-to-end targeted outreach campaigns for 15+ cultural and academic events",
      achievements: [
        "Organized annual lowrider event drawing 200+ attendees and 50+ cars",
        "Demonstrated ability to mobilize large, diverse audiences",
        "Boosted engagement among underrepresented students"
      ]
    },
    {
      role: "Computer Science Tutor",
      organization: "Western Washington University",
      description: "Mentored 10+ students in data structures, algorithms, and systems programming (35+ hours)",
      achievements: [
        "Guided peers through complex debugging and project completion",
        "Improved student assignment completion rates"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Research Track": return "badge-primary";
      case "Applied Research": return "badge-success";
      case "Early Stage": return "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800";
      default: return "badge-primary";
    }
  };

  return (
    <section id="research" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Research & Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading interdisciplinary research projects and community initiatives that bridge 
            AI/ML, robotics, and software safety while mentoring the next generation of technologists.
          </p>
        </div>

        {/* Upcoming Research Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Calendar className="w-6 h-6 mr-3 text-primary" />
            Upcoming Research & Engineering Projects
            <Badge className="ml-4 badge-primary">Fall 2025</Badge>
          </h3>
          
          <div className="grid gap-6 md:gap-8">
            {upcomingProjects.map((project, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {project.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{project.course}</span>
                          <span>•</span>
                          <span>{project.timeline}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {project.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic & Community Leadership */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Users className="w-6 h-6 mr-3 text-primary" />
            Academic & Community Leadership
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((item, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg">{item.role}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {item.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;