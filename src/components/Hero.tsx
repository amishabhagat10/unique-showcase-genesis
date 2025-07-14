import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl float-animation" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/10 rounded-full blur-3xl float-animation" style={{
        animationDelay: '4s'
      }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 fade-in">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-hero p-1 pulse-glow">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-6xl font-bold text-primary">
                AB
              </div>
            </div>
          </div>

          {/* Main heading */}
          <div className="slide-in-bottom">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Amisha Bhagat</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-4">
              <span className="typing-animation">Web Developer & AI/ML Enthusiast</span>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">Passionate about creating exceptional digital experiences through innovative web solutions. I specialize in React, Node.js, and modern web technologies to bring ideas to life and I am passionate about AI/ML.</p>
          </div>

          {/* Action buttons */}
          <div className="slide-in-bottom flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={{
          animationDelay: '0.2s'
        }}>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105" onClick={() => scrollToSection('#projects')}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
              <Download className="mr-2" size={18} />
              Download CV
            </Button>
          </div>

          {/* Social links */}
          <div className="slide-in-bottom flex justify-center space-x-6 mb-12" style={{
          animationDelay: '0.4s'
        }}>
            <a href="https://github.com/amishabhagat10" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-primary hover-glow">
                <Github size={24} />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/amisha-bhagat-5094b628a" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-primary hover-glow">
                <Linkedin size={24} />
              </Button>
            </a>
            <a href="mailto:amishabhagat2005@gmail.com">
              <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-primary hover-glow">
                <Mail size={24} />
              </Button>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="fade-in absolute bottom-20 left-1/2 transform -translate-x-1/2" style={{
          animationDelay: '1s'
        }}>
            <button onClick={() => scrollToSection('#about')} className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group">
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown size={20} className="animate-bounce group-hover:text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;