import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Shaank - Mood-Based Music",
      description: "Your mood-based music companion. Pick a feeling and get a curated Spotify playlist with ambient sounds to match. One tap, one vibe, instant immersion.",
      image: "🎧",
      category: "Full Stack",
      technologies: ["React", "Node.js", "Spotify API", "Express.js"],
      features: ["Mood Detection", "Spotify Integration", "Ambient Sounds", "Curated Playlists"],
      githubUrl: "https://github.com/amishabhagat10",
      liveUrl: "#",
      status: "Completed"
    },
    {
      id: 2,
      title: "WanderScape - Visit Tokyo",
      description: "WanderScape is all about travel that feels. From hidden gems to iconic sights, we craft curated tours and insider tips that bring your dream destinations closer.",
      image: "🏮",
      category: "Frontend",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Maps API"],
      features: ["Interactive Maps", "Travel Guides", "Local Insights", "Trip Planning"],
      githubUrl: "https://github.com/amishabhagat10",
      liveUrl: "#",
      status: "Completed"
    },
    {
      id: 3,
      title: "Krazy Cakes - Recipe App",
      description: "A fun, interactive recipe app that shows ingredients, guides you step-by-step, and keeps you motivated while you bake.",
      image: "🧁",
      category: "Frontend",
      technologies: ["React", "JavaScript", "CSS3", "Recipe API"],
      features: ["Step-by-step Guides", "Ingredient Lists", "Interactive UI", "Recipe Search"],
      githubUrl: "https://github.com/amishabhagat10",
      liveUrl: "#",
      status: "Completed"
    },
    {
      id: 4,
      title: "Seasana - Calm Begins Here",
      description: "Seasana offers guided meditations and wellness tools to help you flow through life with calm, clarity, and ease.",
      image: "🌊",
      category: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      features: ["Guided Meditations", "Wellness Tools", "Progress Tracking", "User Profiles"],
      githubUrl: "https://github.com/amishabhagat10",
      liveUrl: "#",
      status: "Completed"
    },
    {
      id: 5,
      title: "Florabot - ML Flower Classification",
      description: "A machine learning project that classifies iris flowers by species using petal and sepal measurements from the classic Iris dataset.",
      image: "🌸",
      category: "AI/ML",
      technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
      features: ["Species Classification", "Data Visualization", "Model Training", "Accuracy Testing"],
      githubUrl: "https://github.com/amishabhagat10",
      liveUrl: "#",
      status: "Completed"
    },
    {
      id: 6,
      title: "Stock Price Analysis",
      description: "Analyzed stock price data by cleaning, structuring, and visualizing it to uncover key trends and insights.",
      image: "📈",
      category: "AI/ML",
      technologies: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
      features: ["Data Cleaning", "Trend Analysis", "Data Visualization", "Statistical Insights"],
      githubUrl: "https://github.com/amishabhagat10",
      liveUrl: "#",
      status: "Completed"
    }
  ];

  const categories = ['All', 'Frontend', 'Full Stack', 'AI/ML'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of my recent work and projects that demonstrate my skills and expertise in various technologies.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`transition-all duration-300 ${
                  filter === category 
                    ? 'bg-gradient-primary hover:shadow-glow' 
                    : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="glass-card hover-glow transition-all duration-300 group h-full">
              <CardContent className="p-0 h-full flex flex-col">
                {/* Project image/icon */}
                <div className="h-48 bg-gradient-card rounded-t-lg flex items-center justify-center text-6xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
                  <span className="relative z-10">{project.image}</span>
                  
                  {/* Status badge */}
                  <Badge 
                    variant={project.status === 'Completed' ? 'default' : 'secondary'}
                    className="absolute top-4 right-4 z-20"
                  >
                    {project.status}
                  </Badge>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  {/* Project header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6 flex-grow">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github size={14} className="mr-1" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Eye size={14} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            <Github className="mr-2" size={18} />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;