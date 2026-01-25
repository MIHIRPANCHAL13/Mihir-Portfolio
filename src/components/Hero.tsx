
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Mihir Panchal
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
          AI Engineer & Data Science Enthusiast
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I craft exceptional digital experiences through clean code and thoughtful design. 
          Passionate about creating scalable applications that make a difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('#projects')}
            className="px-8 py-3 text-lg"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('#contact')}
            className="px-8 py-3 text-lg"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center space-x-6"
        >
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="h-12 w-12"
          >
            <a
              href="https://github.com/MIHIRPANCHAL13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" className="h-12 w-12">
          <a href="https://www.linkedin.com/in/mihir-panchal-86588b1b2/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="outline" size="sm" className="ml-4" asChild>
          <a
            href="/Mihir_Resume.pdf"
            download
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </a>
        </Button>
        </motion.div>
      </div>
    </section>
  );
}
