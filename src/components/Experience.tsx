import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Led development of scalable web applications serving 100K+ users. Implemented CI/CD pipelines and mentored junior developers.',
      achievements: [
        'Increased application performance by 40%',
        'Led team of 5 developers',
        'Implemented microservices architecture',
        'Reduced deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Digital Innovations Inc.',
      location: 'Austin, TX',
      period: '2021 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to implement pixel-perfect interfaces.',
      achievements: [
        'Delivered 15+ client projects',
        'Improved code quality with testing',
        'Reduced bug reports by 50%',
        'Implemented responsive designs'
      ],
      technologies: ['React', 'Vue.js', 'Express.js', 'MongoDB', 'TypeScript']
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2020 - 2021',
      description: 'Built responsive web applications and collaborated with UX designers to create engaging user experiences.',
      achievements: [
        'Built 3 major web applications',
        'Increased user engagement by 30%',
        'Implemented modern UI frameworks',
        'Optimized for mobile devices'
      ],
      technologies: ['React', 'JavaScript', 'Sass', 'REST APIs', 'Git']
    }
  ];

  const education = [
    {
      type: 'education',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      location: 'California, USA',
      period: '2016 - 2020',
      description: 'Graduated Magna Cum Laude with focus on software engineering and web development.',
      achievements: [
        'GPA: 3.8/4.0',
        'Dean\'s List for 6 semesters',
        'Computer Science Society President',
        'Winner of Hackathon 2019'
      ]
    },
    {
      type: 'education',
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'CodeAcademy Pro',
      location: 'Online',
      period: '2020',
      description: 'Intensive 6-month program covering modern web development technologies and best practices.',
      achievements: [
        'Top 5% of class',
        'Completed 10+ real-world projects',
        'Mentored 15+ students',
        'Certificate of Excellence'
      ]
    }
  ];

  const certifications = [
    'AWS Certified Developer - Associate',
    'Google Cloud Professional Developer',
    'MongoDB Certified Developer',
    'React Advanced Certification',
    'Node.js Certified Developer'
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