import Project from './Project';

const projects = [
  {
    name: 'Project 1',
    githubLink: 'https://github.com/yourusername/project1',
    deployedLink: 'https://yourproject1.com',
    imgSrc: 'https://via.placeholder.com/300x200'
  },
  {
    name: 'Project 2',
    githubLink: 'https://github.com/yourusername/project2',
    deployedLink: 'https://yourproject2.com',
    imgSrc: 'https://via.placeholder.com/300x200'
  },
  {
    name: 'Project 3',
    githubLink: 'https://github.com/yourusername/project3',
    deployedLink: 'https://yourproject3.com',
    imgSrc: 'https://via.placeholder.com/300x200'
  },
  {
    name: 'Project 4',
    githubLink: 'https://github.com/yourusername/project4',
    deployedLink: 'https://yourproject4.com',
    imgSrc: 'https://via.placeholder.com/300x200'
  }
];

function ProjectsList() {
  return (
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {projects.map(project => (
          <Project
            key={project.name}
            name={project.name}
            githubLink={project.githubLink}
            deployedLink={project.deployedLink}
            imgSrc={project.imgSrc}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsList;
