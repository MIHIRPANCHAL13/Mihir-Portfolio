
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
                  AI Engineer with 2+ years of experience specializing in generative AI, machine learning, and full-stack development.
Proven track record in developing innovative AI solutions using Python, TensorFlow, and modern web technologies.
Certified in Oracle Cloud Infrastructure Generative AI, AWS Machine Learning, and Microsoft Foundry Fine-tuning.
Passionate about leveraging cutting-edge AI technologies to solve complex real-world problems and drive business impact.
                  </p>
                  <p>
                  I have earned certifications in Python, Pandas, and Gold Badge For SQL on HackerRank, along with completing 
                  Google's Introduction to Generative AI, Introduction to Large Language Models, and Responsible AI courses. Additionally, 
                  I’ve completed Kaggle's Geospatial Analysis course, diving deep into spatial data insights.
                  </p>
                  <p>
                  With a keen interest in generative AI, data science, and geospatial analysis, I am eager to contribute to impactful 
                  projects, collaborate with the Kaggle community, and uncover meaningful insights from data. Let’s connect, learn, and create!!
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
