
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Nexus AI – Multi-Domain Recommendation Engine',
    description: 'An intelligent, AI-powered recommendation system delivering hyper-personalized suggestions across Movies, Books, Video Games, Tech, and Travel. Uses advanced reasoning to match user vibes, preferences, and deal-breakers rather than basic genre-based filtering.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    technologies: ['Generative AI', 'Machine Learning', 'React', 'TypeScript', 'Google Gemini', 'Prompt Engineering'],
    github: 'https://github.com/MIHIRPANCHAL13/Nexus-AI-Recommender',
    featured: true,
  },
  {
    title: 'DocuChat AI – Intelligent Document Assistant',
    description: 'A high-performance AI document workspace that enables real-time interaction with PDFs and text files. Supports contextual question answering with citations, smart summarization, and a streaming chat UI for accurate, human-like document analysis.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    technologies: ['Generative AI', 'RAG', 'Prompt Engineering', 'React 19', 'TypeScript', 'Tailwind CSS', 'Google Gemini'],
    github: 'https://github.com/MIHIRPANCHAL13/DocChat-AI',
    featured: true,
  },
  {
    title: 'YOLO Vision Pro – Real-Time Object Detection',
    description: 'A browser-based computer vision application performing real-time object detection entirely on-device. Built with TensorFlow.js and COCO-SSD for low-latency inference, ensuring offline capability and complete user privacy.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
    technologies: ['Computer Vision', 'TensorFlow.js', 'YOLO', 'React', 'TypeScript', 'HTML5'],
    github: 'https://github.com/MIHIRPANCHAL13/YOLO-Vision-Pro',
    featured: true,
  },      
  {
    title: 'Sign Language Interpreter',
    description: 'This project utilizes advanced technology to seamlessly translate user-input text into expressive sign language gestures performed by a dynamic 3D character. Enhancing communication inclusivity for the deaf and hard of hearing.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    technologies: ['3D Animation', 'Python', 'NLP', 'GENAI', 'Github'],
    github: 'https://github.com/MIHIRPANCHAL13/SIGN_LANGUAGUE_INTERPRETER',
    featured: true,
  },
  {
    title: 'Cabel damage detection',
    description: 'The Cable Damage Detection Project is a computer vision initiative designed to identify and localize damage to cables in both images and videos. This project is crucial for ensuring the integrity and safety of infrastructure, such as power lines, communication cables, and other critical networks. By leveraging advanced image processing and machine learning techniques, the system aims to automate the detection of cable damage, thereby reducing the risk of accidents, improving maintenance efficiency, and minimizing downtime.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
    technologies: ['Computer Vision', 'CV2', 'Python', 'YOLOv8'],
    github: 'https://github.com/MIHIRPANCHAL13/cabel-damage-',
    featured: true,
  },
  {
    title: 'Nuv Vehicle Parking System',
    description: 'The Project described would use Python and the tkinter library to create a GUI that displays a map of the university parking lot and shows the availability of each parking spot in real-time using machine learning. Users would be able to log in with a username and password and reserve a parking spot. The program would keep track of available parking spaces and update the GUI accordingly. Overall, this program would help university students and staff find and reserve parking spaces more efficiently, saving them time and reducing frustration.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80',
    technologies: ['Computer Vision', 'CV2', 'Python', 'Pnadas','Tikinter','PIL'],
    github: 'https://github.com/MIHIRPANCHAL13/NUV-Vehicle-Parking-System',
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've used to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={project.featured ? 'md:col-span-2' : ''}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{project.title}</span>
                    {project.featured && (
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        Featured
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
