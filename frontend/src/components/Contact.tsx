import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Github, Linkedin, FileText, Copy, CheckCircle, MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const { toast } = useToast();

  const email = "israelavendanojr@gmail.com";

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      toast({
        title: "Email copied!",
        description: "Email address has been copied to your clipboard.",
      });
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please manually copy the email address.",
        variant: "destructive",
      });
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: email,
      action: handleEmailCopy,
      description: "Best for formal inquiries and detailed discussions"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/israelavendanojr",
      href: "https://github.com/israelavendanojr",
      description: "View my code, projects, and contributions"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/israelavendanojr",
      href: "https://www.linkedin.com/in/israelavendanojr",
      description: "Professional network and recommendations"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      label: "Resume",
      value: "Download PDF",
      href: "https://drive.google.com/file/d/1F9xxL17S5oqesfZs1XPBCa_TZntTdPpw/view?usp=sharing",
      description: "Detailed technical background and project summaries"
    }
  ];

  const availability = [
    {
      period: "Summer 2026",
      type: "Internship and New Grad Roles",
      focus: "SWE, AI/ML, Robotics",
      status: "Actively Seeking"
    },
    
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm actively seeking opportunities that leverage my unique intersection of 
            AI/ML expertise, robotics research, and software engineering fundamentals.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Availability Status */}
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 text-gray-900 dark:text-gray-100" />
                Current Availability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                {availability.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-center gap-2">
                      <Badge className="badge-success">{item.status}</Badge>
                      <span className="font-medium">{item.period}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{item.type}</h4>
                      <p className="text-sm text-muted-foreground">{item.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover-lift group">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 rounded-lg group-hover:bg-gray-900 group-hover:text-white dark:group-hover:bg-gray-100 dark:group-hover:text-gray-900 transition-colors">
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold mb-1">{method.label}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                      
                      {method.action ? (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={method.action}
                          className="w-full justify-start"
                        >
                          {emailCopied ? (
                            <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4 mr-2" />
                          )}
                          <span className="truncate">{method.value}</span>
                        </Button>
                      ) : (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild
                          className="w-full justify-start"
                        >
                          <a href={method.href} target="_blank" rel="noopener noreferrer">
                            <span className="truncate">{method.value}</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Location & Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-900 dark:text-gray-100" />
                Location & Work Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold mb-2">Current Location</h4>
                  <p className="text-muted-foreground">Greater Seattle Area</p>
                  <p className="text-sm text-muted-foreground">Pacific Northwest</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Work Preference</h4>
                  <p className="text-muted-foreground">Open to Relocation</p>
                  <p className="text-sm text-muted-foreground">Friendly to remote work</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Visa Status</h4>
                  <p className="text-muted-foreground">US Citizen</p>
                  <p className="text-sm text-muted-foreground">No sponsorship needed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What I'm Looking For */}
          <Card>
            <CardHeader>
              <CardTitle>What I'm Looking For</CardTitle>
              <CardDescription>
                Opportunities that leverage my unique technical background and research experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Ideal Roles</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      AI/ML Engineering
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Software Engineering
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Robotics and Autonomous Systems
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Research and Development
                    </li>
                    
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Company Culture</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Values technical depth and continuous learning
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Supports mentorship and knowledge sharing
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Focuses on creating solutions that solve meaningful, real-world problems.
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;