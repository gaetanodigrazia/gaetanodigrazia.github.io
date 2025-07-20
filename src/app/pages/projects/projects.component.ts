import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  techStack: string[];
  date: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Residenz – Real Estate ML System',
      description: 'A full-stack containerized system for predicting real estate prices using a trained ML model.',
      githubUrl: 'https://github.com/gaetanodigrazia/residenz',
      techStack: ['Python', 'FastAPI', 'Docker', 'Scikit-learn'],
      date: '2025'
    },
    {
      title: 'Kafka Event-Driven Architecture Demo',
      description: 'Sample architecture to demonstrate event streaming, topic design, and real-time consumers using Apache Kafka.',
      githubUrl: 'https://github.com/gaetanodigrazia/kafka-demo',
      techStack: ['Java', 'Kafka', 'Spring Boot'],
      date: '2025'
    },
    {
      title: 'Portfolio Website (Angular)',
      description: 'Responsive personal portfolio built with Angular and GitHub Pages.',
      githubUrl: 'https://github.com/gaetanodigrazia/gaetanodigrazia.github.io',
      liveDemoUrl: 'https://gaetanodigrazia.github.io',
      techStack: ['Angular', 'SCSS', 'GitHub Pages'],
      date: '2025'
    }
  ];
}
