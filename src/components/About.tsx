
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = [
  // Programming Languages
  'Python',
  'JavaScript',
  'SQL',

  // AI / Machine Learning
  'Machine Learning',
  'Deep Learning',
  'TensorFlow',
  'Scikit-learn',
  'Pandas',
  'Data Science',
  'Natural Language Processing (NLP)',

  // Generative AI
  'Large Language Models (LLMs)',
  'Prompt Engineering',
  'Fine-tuning',
  'Retrieval-Augmented Generation (RAG)',

  // Web Technologies
  'React',

  // Cloud & MLOps
  'AWS (SageMaker, Lambda, S3)',
  'Oracle Cloud Infrastructure',
  'Azure',
  'MLOps',

  // Databases
  'MySQL',
  'PostgreSQL',
  'SQL Server',

  // Tools & Platforms
  'Git',
  'VS Code',
  'Kaggle',
  'Geospatial Analysis',

  // Responsible AI
  'Responsible AI'
];


export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate AI developer with a keen eye for detail and a love for creating 
            seamless user experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-6">My Story</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                 I'm an AI Engineer who thrives on picking up new technologies fast and turning them into working solutions quickly. My focus is on Generative AI — building RAG (Retrieval-Augmented Generation) applications, Langchain, Langgraph, intelligent chatbots, and prompt engineering frameworks that solve real business problems. My background in software engineering means I don't just prototype — I ship things that work in production.
                  </p>
                  <p>
                 What I bring:
 • Rapid prototyping — going from idea to working AI solution fast
 • RAG applications and chatbot development for enterprise use cases
 • Prompt engineering, NLP, and machine learning
 • A strong drive to learn new tools, frameworks, and techniques as the field evolves
                  </p>
                  <p>
                  Certified in Generative AI (Oracle Cloud Infrastructure 2025), AWS Machine Learning (Foundations & NLP), Python, and SQL. Currently freelancing on AI integration and automation projects for startups and businesses, while actively pursuing full-time AI Engineering roles.
                 Always happy to connect with the AI/ML and Kaggle community.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <Badge variant="secondary" className="px-3 py-1 text-sm">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
