import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { Code2, Package, Wrench, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6" />,
      color: "text-accent-green",
      chartColor: "hsl(var(--accent-green))",
      skills: [
        { name: "Python", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Java", level: 85 },
        { name: "C#", level: 85 },
        { name: "C", level: 80 },
        { name: "C++", level: 80 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Package className="w-6 h-6" />,
      color: "text-accent-green",
      chartColor: "hsl(var(--accent-green))",
      skills: [
        { name: "React", level: 85 },
        { name: "Flask", level: 95 },
        { name: "PyTorch", level: 90 },
        { name: "Scikit-Learn", level: 85 },
        { name: "OpenCV", level: 90 },
        { name: "NumPy", level: 90 },
        { name: "Pandas", level: 90 },
        { name: "Matplotlib", level: 85 },
        { name: "SeaBorn", level: 80 },
        { name: "LangChain", level: 80 },
        { name: "Ollama", level: 80 },
        { name: "HuggingFace", level: 80 },
        { name: "Tailwind", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "Unity", level: 95 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      color: "text-accent-green",
      chartColor: "hsl(var(--accent-green))",
      skills: [
        { name: "GitHub", level: 95 },
        { name: "GitLab", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Visual Studio", level: 80 },
        { name: "Docker", level: 80 },
        { name: "Linux/Unix", level: 95 },
        { name: "Jupyter", level: 90 },
        { name: "PostgreSQL", level: 95 },
        { name: "SQLite", level: 95},
        { name: "ROS2", level: 80 },
        { name: "Autoware", level: 80 },
        { name: "Gazebo", level: 80 }
      ]
    }
  ];

  // Create spider chart data for each category
  const createSpiderData = (skills) => {
    // Include all skills in the spider chart
    return skills.map(skill => ({
      skill: skill.name.length > 15 ? skill.name.substring(0, 15) + '...' : skill.name,
      fullName: skill.name,
      level: skill.level,
      maxLevel: 100
    }));
  };


  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical proficiency across languages, frameworks, and tools
            with authentic skill levels based on real project experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="text-gray-900 dark:text-gray-100">
                    {category.icon}
                  </div>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Spider Chart */}
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={createSpiderData(category.skills)} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                      <PolarGrid 
                        stroke="currentColor" 
                        className="opacity-20"
                      />
                      <PolarAngleAxis 
                        dataKey="skill" 
                        tick={{ fontSize: 10, fill: 'currentColor' }}
                        className="text-muted-foreground"
                      />
                      <PolarRadiusAxis 
                        angle={90} 
                        domain={[0, 100]} 
                        tick={false}
                        axisLine={false}
                      />
                      <Radar
                        name="Skill Level"
                        dataKey="level"
                        stroke={category.chartColor}
                        fill={category.chartColor}
                        fillOpacity={0.15}
                        strokeWidth={2}
                        dot={{ fill: category.chartColor, strokeWidth: 1, r: 3 }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                {/* Skill List */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm mb-3">All Skills</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {category.skills
                      .sort((a, b) => b.level - a.level)
                      .map((skill, skillIndex) => (
                        <div key={skillIndex} className="text-sm">
                          <span className="font-medium">{skill.name}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Skills;