import { useState } from 'react';
import Project from '../pages/Project';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'project-1',
      description: 'Description for Project 1',
      deployedLink: 'https://yourproject1.com',
      repo: 'https://github.com/yourusername/project1',
    },
    {
      name: 'project-2',
      description: 'Description for Project 2',
      deployedLink: 'https://yourproject2.com',
      repo: 'https://github.com/yourusername/project2',
    },
    {
      name: 'project-3',
      description: 'Description for Project 3',
      deployedLink: 'https://yourproject3.com',
      repo: 'https://github.com/yourusername/project3',
    },
    {
      name: 'project-4',
      description: 'Description for Project 4',
      deployedLink: 'https://yourproject4.com',
      repo: 'https://github.com/yourusername/project4',
    }
  ]);

  return (
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {projects.map(project => (
          <Project
            key={project.name}
            name={project.name}
            description={project.description}
            deployedLink={project.deployedLink}
            repo={project.repo}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
