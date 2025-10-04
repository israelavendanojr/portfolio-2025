import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Target, BookOpen } from 'lucide-react';

const Research = () => {
  const activeProjects = [
    {
      title: "Autonomous Vehicle Safety Research",
      lab: "Huang Research Lab",
      description: "Developing novel safety mechanism for autonomous vehicles with publication track",
      details: [
        "Novel safety mechanism development for autonomous vehicle systems",
        "C++, Autoware, ROS tech stack implementation",
        "Spring 2026 publication target with accelerated critical scenario detection"
      ],
      icon: <Target className="w-5 h-5" />,
      status: "Publication Track"
    },
    {
      title: "UAV Natural Language Control",
      lab: "MRRP Lab",
      description: "Technical lead position developing autonomous UAV agent converting NLP commands to executable flight plans",
      details: [
        "Leading development of autonomous UAV agent converting NLP commands to executable flight plans",
        "LLM integration with ROS2 for Human-Robot Interaction",
        "Establishing novel research framework for Agentic Reasoning"
      ],
      icon: <Users className="w-5 h-5" />,
      status: "Technical Lead"
    }
  ];


  const getStatusColor = (status: string) => {
    switch (status) {
      case "Publication Track": return "badge-dark";
      case "Technical Lead": return "badge-dark";
      default: return "badge-medium";
    }
  };

  return (
    <section id="research" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Active Research
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading dual-lab research initiatives in autonomous vehicle safety and UAV natural language control, 
            with publication-track work and technical leadership roles.
          </p>
        </div>

        {/* Active Research Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Calendar className="w-6 h-6 mr-3 text-gray-900 dark:text-gray-100" />
            Active Research Projects
          </h3>
          
          <div className="grid gap-6 md:gap-8">
            {activeProjects.map((project, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 rounded-lg">
                        {project.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{project.lab}</span>
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
                        <div className="w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{detail}</span>
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