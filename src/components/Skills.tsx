import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript", level: 95 },
        { name: "HTML5/CSS3", level: 98 }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 80 },
        { name: "Java", level: 80 }
      ]
    },
    {
      title: "Tools & AI/ML",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 95 },
        { name: "Figma", level: 85 },
        { name: "Google Colab", level: 90 },
        { name: "Canva", level: 80 },
        { name: "Machine Learning", level: 75 },
        { name: "Artificial Intelligence", level: 70 }
      ]
    }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Next.js", "Express.js", "PostgreSQL",
    "MongoDB", "Tailwind CSS", "Git", "Figma", "Python", "JavaScript", 
    "HTML5", "CSS3", "Webpack", "Java", "C", "Machine Learning", "Artificial Intelligence", "Google Colab", "Canva"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and skills I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="glass-card hover-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-gradient-card border border-border text-foreground hover:scale-105 transition-transform duration-200 px-4 py-2 text-sm"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-2xl">
              🚀
            </div>
            <h4 className="text-lg font-semibold mb-2 text-foreground">Performance</h4>
            <p className="text-sm text-muted-foreground">Optimizing applications for speed and efficiency</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-secondary rounded-full flex items-center justify-center text-2xl">
              📱
            </div>
            <h4 className="text-lg font-semibold mb-2 text-foreground">Responsive Design</h4>
            <p className="text-sm text-muted-foreground">Creating seamless experiences across all devices</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-2xl">
              🔧
            </div>
            <h4 className="text-lg font-semibold mb-2 text-foreground">Problem Solving</h4>
            <p className="text-sm text-muted-foreground">Analyzing complex problems and implementing solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;