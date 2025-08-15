import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code2, Brain, Cog, FlaskConical } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Programming",
      icon: <Code2 className="w-6 h-6" />,
      color: "text-blue-600",
      skills: [
        { name: "Python", level: 95, proficiency: "Advanced" },
        { name: "TypeScript", level: 80, proficiency: "Proficient" },
        { name: "C/C++", level: 70, proficiency: "Intermediate" },
        { name: "Java", level: 70, proficiency: "Intermediate" },
        { name: "SQL", level: 80, proficiency: "Proficient" }
      ]
    },
    {
      title: "AI/ML & Research",
      icon: <Brain className="w-6 h-6" />,
      color: "text-green-600",
      skills: [
        { name: "PyTorch", level: 90, proficiency: "Advanced" },
        { name: "OpenCV", level: 90, proficiency: "Advanced" },
        { name: "scikit-learn", level: 80, proficiency: "Proficient" },
        { name: "LLMs/Ollama", level: 75, proficiency: "Research-level" },
        { name: "ROS2", level: 70, proficiency: "Research-level" },
        { name: "Computer Vision", level: 90, proficiency: "Advanced" }
      ]
    },
    {
      title: "Development & Systems",
      icon: <Cog className="w-6 h-6" />,
      color: "text-purple-600",
      skills: [
        { name: "React", level: 80, proficiency: "Proficient" },
        { name: "Flask", level: 90, proficiency: "Advanced" },
        { name: "Git/GitHub", level: 95, proficiency: "Advanced" },
        { name: "Linux/Unix", level: 80, proficiency: "Proficient" },
        { name: "Embedded Systems", level: 70, proficiency: "Intermediate" }
      ]
    },
    {
      title: "Research Methods",
      icon: <FlaskConical className="w-6 h-6" />,
      color: "text-orange-600",
      skills: [
        { name: "Experimental Design", level: 85, proficiency: "Advanced" },
        { name: "Technical Writing", level: 80, proficiency: "Proficient" },
        { name: "Data Analysis", level: 90, proficiency: "Advanced" },
        { name: "Algorithm Implementation", level: 85, proficiency: "Advanced" },
        { name: "Cross-functional Collaboration", level: 90, proficiency: "Advanced" }
      ]
    }
  ];

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case "Advanced": return "text-green-600 dark:text-green-400";
      case "Proficient": return "text-blue-600 dark:text-blue-400";
      case "Research-level": return "text-purple-600 dark:text-purple-400";
      case "Intermediate": return "text-orange-600 dark:text-orange-400";
      default: return "text-gray-600 dark:text-gray-400";
    }
  };

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Authentic proficiency levels across the unique intersection of 
            programming, AI/ML research, and systems engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className={`${category.color}`}>
                    {category.icon}
                  </div>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className={`text-sm font-medium ${getProficiencyColor(skill.proficiency)}`}>
                        {skill.proficiency}
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Strengths Highlight */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-8">
              <h3 className="text-xl font-bold mb-6">Key Technical Strengths</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-600">Foundation-First Learning</h4>
                  <p className="text-muted-foreground">
                    Building neural networks from scratch, implementing algorithms mathematically before using libraries
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-green-600">Research-to-Production</h4>
                  <p className="text-muted-foreground">
                    Translating academic research into working systems, from ML models to physical automation
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-600">Cross-Disciplinary Integration</h4>
                  <p className="text-muted-foreground">
                    Combining AI/ML, robotics, and software engineering in novel applications
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;