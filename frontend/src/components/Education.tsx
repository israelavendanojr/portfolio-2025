import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strong mathematical and computer science foundations with specialized focus on 
            AI/ML, software engineering, and research methodologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Current Bachelor's Degree */}
          <Card className="hover-lift">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-1">Bachelor of Science in Computer Science</CardTitle>
                    <CardDescription className="text-lg">
                      <span className="font-medium text-primary">Western Washington University</span>
                      <span className="text-muted-foreground ml-2">• Minor: Mathematics</span>
                    </CardDescription>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      Expected June 2026
                    </div>
                  </div>
                </div>
                <Badge className="badge-primary">
                  Current
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">

              {/* Relevant Coursework */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">Relevant Coursework</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium mb-2 text-sm">Computer Science Core</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Data Structures & Algorithms</li>
                      <li>• Machine Learning</li>
                      <li>• Database Systems</li>
                      <li>• Operating Systems</li>
                      <li>• Object-Oriented Design</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-sm">Mathematics Foundation</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Linear Algebra</li>
                      <li>• Probability & Statistics</li>
                      <li>• Multivariable Calculus</li>
                      
                    </ul>
                  </div>
                </div>
              </div>

              {/* Research Interests */}
              <div>
                <h4 className="font-semibold mb-3">Research Interests</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Autonomous Vehicle Safety</Badge>
                  <Badge variant="outline">Human-Robot Interaction</Badge>
                  <Badge variant="outline">Agentic AI Systems</Badge>
                  <Badge variant="outline">AI/ML Applications</Badge>
                  <Badge variant="outline">Robotics Integration</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Associate Degree */}
          <Card className="hover-lift">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-secondary/50 rounded-lg text-secondary-foreground">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-1">Associate of Arts in Science & Engineering</CardTitle>
                    <CardDescription className="text-lg">
                      <span className="font-medium">Skagit Valley College</span>
                    </CardDescription>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      Graduated June 2023
                    </div>
                  </div>
                </div>
                <Badge variant="outline">
                  Completed
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-muted-foreground">
                Strong foundation in mathematics, physics, and computer science fundamentals. 
                Provided solid preparation for advanced computer science studies with emphasis on 
                analytical thinking and problem-solving methodologies.
              </p>
            </CardContent>
          </Card>

          
          
        </div>
      </div>
    </section>
  );
};

export default Education;