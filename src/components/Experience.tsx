import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Web Developer Intern',
      company: 'ApexPlanet Software Pvt Ltd',
      location: 'Kolkata, WB',
      period: '2024 - Present',
      description: 'Currently working as a web developer intern, building modern web applications and gaining hands-on experience with industry-standard practices.',
      achievements: [
        'Developing responsive web applications',
        'Learning industry best practices',
        'Collaborating with development teams',
        'Working on real-world projects'
      ],
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Git']
    },
    {
      type: 'work',
      title: 'Web Development Intern (Advanced)',
      company: 'VaultofCode',
      location: 'Remote',
      period: '2023 - 2024',
      description: 'Completed an advanced web development internship focusing on modern frontend technologies and development workflows.',
      achievements: [
        'Built multiple client projects',
        'Mastered React and modern frameworks',
        'Implemented responsive designs',
        'Gained expertise in version control'
      ],
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Git']
    },
    {
      type: 'work',
      title: 'Data Analysis Intern',
      company: 'Codeveda',
      location: 'Remote',
      period: '2023',
      description: 'Focused on data analysis and visualization, working with various datasets to extract meaningful insights and create compelling visualizations.',
      achievements: [
        'Analyzed complex datasets',
        'Created data visualizations',
        'Implemented statistical models',
        'Generated actionable insights'
      ],
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Data Analysis', 'Machine Learning']
    }
  ];

  const education = [
    {
      type: 'education',
      degree: 'B.Tech in Computer Science and Technology',
      institution: 'University of Engineering and Management, Kolkata',
      location: 'Kolkata, West Bengal',
      period: '2023 - 2027',
      description: 'Currently pursuing B.Tech with a strong focus on software development, algorithms, and emerging technologies.',
      achievements: [
        'Current CGPA: 8.5/10.0',
        'Active member of technical societies',
        'Regular participant in coding competitions',
        'Winner and finalist in multiple tech competitions'
      ]
    }
  ];

  const certifications = [
    'Member of Geeks For Geeks Student Chapter UEMK',
    'Introduction to HTML, CSS, & JavaScript – IBM (Coursera)',
    'Information Theory – The Chinese University of Hong Kong (Coursera)',
    'Advanced System Security Topics – University of Colorado System (Coursera)',
    'Programming in Python – NPTEL Certification',
    'Data Analytics Foundations – LinkedIn Learning'
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and continuous learning path in the world of technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 flex items-center text-foreground">
              <Building className="mr-3 text-primary" size={24} />
              Work Experience
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="glass-card hover-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-primary mb-1">{exp.title}</h4>
                        <p className="text-lg font-semibold text-foreground mb-2">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {exp.period}
                          </span>
                          <span className="flex items-center">
                            <MapPin size={14} className="mr-1" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-foreground mb-2">Key Achievements:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <span className="w-1 h-1 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center text-foreground">
                <GraduationCap className="mr-3 text-primary" size={24} />
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="glass-card hover-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-primary mb-1">{edu.degree}</h4>
                      <p className="font-semibold text-foreground mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {edu.period}
                        </span>
                        <span className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {edu.location}
                        </span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{edu.description}</p>
                      
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <span className="w-1 h-1 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-foreground">Certifications</h3>
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-gradient-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-foreground">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;