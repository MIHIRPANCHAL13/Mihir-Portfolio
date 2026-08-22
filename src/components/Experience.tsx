import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
  title: 'AI Engineer',
  company: 'Freelance',
  duration: 'May 2026 - Present',
  description:
    'Designing and developing production-ready AI applications and intelligent backend systems to automate workflows and deliver scalable, enterprise-grade AI solutions.',
  achievements: [
    'Designed, developed, and maintained production-ready AI applications using Python, FastAPI, LangChain, LangGraph, and LangSmith',
    'Built scalable backend services and REST APIs to support AI agent workflows and enterprise applications',
    'Developed Retrieval-Augmented Generation (RAG) pipelines to analyze organizational knowledge and deliver accurate, context-aware responses',
    'Integrated Large Language Models (LLMs) with vector databases, document processing pipelines, and external APIs to enhance AI capabilities',
    'Optimized prompt engineering, agent orchestration, memory management, and workflow execution to improve accuracy, scalability, and performance',
    'Collaborated directly with clients to understand business requirements and deliver secure, scalable, and high-quality AI solutions'
  ],
  technologies: [
    'Generative AI',
    'Large Language Models (LLMs)',
    'Python',
    'FastAPI',
    'LangChain',
    'LangGraph',
    'LangSmith',
    'RAG',
    'Vector Databases',
    'Prompt Engineering',
    'AI Agents',
    'REST APIs'
  ],
},
  {
    title: 'AI Engineer',
    company: 'NetWeb Software, Vadodara, Gujarat, India',
    duration: 'Jun 2025 - Apr 2026',
    description:
      'Designing and deploying production-grade generative AI and machine learning solutions to optimize business workflows and deliver intelligent, scalable products.',
    achievements: [
      'Architected and deployed production-ready generative AI solutions using large language models and fine-tuning techniques to enhance customer experience and internal workflows',
      'Developed and optimized machine learning pipelines using TensorFlow and Python, improving model performance through state-of-the-art algorithms and best practices',
      'Collaborated with cross-functional teams to identify AI opportunities, design robust technical solutions, and deliver scalable AI-driven products',
      'Implemented MLOps practices for model versioning, monitoring, and deployment across cloud platforms including AWS and Oracle Cloud Infrastructure'
    ],
    technologies: [
      'Generative AI',
      'Large Language Models (LLMs)',
      'TensorFlow',
      'Python',
      'MLOps',
      'AWS',
      'Oracle Cloud Infrastructure',
      'Prompt Engineering'
    ],
  },  
  {
    title: 'Software Engineer',
    company: 'NetWeb Software, Vadodara, India',
    duration: 'Jul 2024 - May 2025',
    description:
      'Responsible for developing scalable and maintainable enterprise applications by leveraging modern frontend and backend technologies.',
    achievements: [
      'Developed reusable UI components using ReactJS, improving development efficiency by 30%',
      'Integrated RESTful APIs with .NET backend to enable dynamic data flow across modules',
      'Collaborated cross-functionally in Agile teams with designers and testers for sprint planning and delivery',
      'Built OpenAir scripting,Rules and automations for Client'
    ],
    technologies: ['ReactJS', '.NET', 'OpenAir', 'Agile', 'REST API', 'Git'],
  },
  {
    title: 'Software Developer Intern',
    company: 'NetWeb Software, Vadodara, India',
    duration: 'Jan 2024 - Jun 2024',
    description:
      'Worked on full-stack development tasks involving user interfaces, backend logic, and integration of emerging AI technologies.',
    achievements: [
      'Built modular UI features using React and NextJS for internal dashboards',
      'Developed backend services in C# with token-based authentication',
      'Designed and implemented prompt templates for Generative AI text generation tools',
      'Tested and validated models using user input scenarios and prompt evaluations',
      'Participated in daily stand-ups and weekly sprint reviews as part of agile methodology'
    ],
    technologies: ['C#', 'React', 'NextJS', 'Generative AI', 'Figma', 'Postman'],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Asence Pharma Pvt Ltd',
    duration: 'May 2023 - Jul 2023',
    description:
      'Built core HRMS features that digitized internal HR operations, including recruitment and employee data management.',
    achievements: [
      'Developed CRUD modules for leave tracking, payroll, and onboarding in PHP with MySQL backend',
      'Tested workflows manually across multiple edge cases to ensure functional correctness',
      'Streamlined database schema for efficient employee data querying and reporting',
      'Collaborated with HR team to gather requirements and improve usability of the platform',
      'Hosted app locally with XAMPP and migrated final version to intranet server'
    ],
    technologies: ['MySQL', 'PHP', 'XAMPP', 'Manual Testing', 'HRMS', 'Bootstrap'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey building software solutions and leading development teams.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-medium text-foreground mb-2">
                        {exp.company}
                      </p>
                    </div>
                    <Badge variant="outline" className="self-start lg:self-center">
                      {exp.duration}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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
