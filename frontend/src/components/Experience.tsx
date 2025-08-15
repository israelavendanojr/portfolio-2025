import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Research Fellow",
      company: "Western Washington University",
      location: "Bellingham, WA",
      period: "Fall 2025 – Spring 2026",
      type: "Research",
      status: "Upcoming",
      description: "Selected for CSCI 490 Senior Research: Software Reliability & Safety based on Human Errors and AI",
      achievements: [
        "Collaborating with Dr. Fuqun Huang on interdisciplinary research combining human error theory, eye-tracking, and AI",
        "Targeting publication in refereed conference/journal Spring 2026",
        "Leading 3-person research team on novel software dependability methods"
      ]
    },
    {
      title: "Robotics Research Assistant",
      company: "Western Washington University",
      location: "Bellingham, WA",
      period: "Apr 2025 – Present",
      type: "Research",
      status: "Current",
      description: "Early-stage research on natural language processing for autonomous UAV control systems",
      achievements: [
        "Exploring LLM integration with ROS2 for intuitive robotic task planning",
        "Developing natural language to temporal logic translation systems",
        "Contributing to cutting-edge autonomous systems research"
      ]
    },
    {
      title: "Computer Science Tutor",
      company: "Western Washington University",
      location: "Bellingham, WA",
      period: "Jan 2025 – Jun 2025",
      type: "Academic",
      status: "Recent",
      description: "Provided 35+ hours of technical mentorship across data structures, algorithms, and systems",
      achievements: [
        "Improved student assignment completion rates through targeted debugging assistance",
        "Developed teaching materials for complex CS concepts",
        "Mentored 10+ students in core computer science fundamentals"
      ]
    },
    {
      title: "Community Outreach Coordinator",
      company: "Latin Men in Higher Education",
      location: "Bellingham, WA",
      period: "Ongoing",
      type: "Leadership",
      status: "Current",
      description: "Delivered end-to-end targeted outreach campaigns promoting cultural and academic events",
      achievements: [
        "Organized annual lowrider event drawing 200+ attendees and 50+ cars",
        "Demonstrated ability to engage and mobilize large, diverse student audiences",
        "Boosted visibility and engagement among underrepresented students in higher education",
        "Promoted 15+ cultural and academic events with strategic outreach campaigns"
      ]
    },
    {
      title: "Information Technology Intern",
      company: "Skagit Valley College",
      location: "Mount Vernon, WA",
      period: "Sep 2020 – Sep 2021",
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
      case "Current": return "badge-success";
      case "Upcoming": return "badge-primary";
      case "Recent": return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800";
      case "Early Career": return "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900/20 dark:text-gray-300 dark:border-gray-800";
      default: return "badge-primary";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Research": return "text-purple-600 dark:text-purple-400";
      case "Academic": return "text-blue-600 dark:text-blue-400";
      case "Leadership": return "text-green-600 dark:text-green-400";
      case "Technical": return "text-orange-600 dark:text-orange-400";
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
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

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
                        <TrendingUp className="w-4 h-4 text-primary" />
                        Key Achievements
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
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