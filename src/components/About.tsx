import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices and industry standards."
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful and intuitive user interfaces with attention to detail and user experience."
    },
    {
      icon: Rocket,
      title: "Fast Performance",
      description: "Optimizing applications for speed and performance across all devices and platforms."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively with cross-functional teams to deliver exceptional results."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "Technologies" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by passion for technology and innovation, I create digital solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Hello! I'm John Smith</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Developer with over 3 years of experience in creating 
                exceptional digital experiences. My journey started with a curiosity about how websites work, 
                and it has evolved into a deep love for crafting clean, efficient, and user-friendly applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in modern web technologies including React, Node.js, TypeScript, and cloud platforms. 
                My approach combines technical expertise with creative problem-solving to deliver solutions that 
                not only meet requirements but exceed expectations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community through blogs and workshops.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile image and highlights */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-lg bg-gradient-hero p-1 hover-glow">
                <div className="w-full h-full rounded-lg bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <p className="text-sm text-muted-foreground">Your Photo Here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="glass-card hover-glow transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;