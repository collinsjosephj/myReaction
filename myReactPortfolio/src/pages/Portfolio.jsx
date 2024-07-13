import { useState } from 'react';
import Project from '../pages/Project';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'Plates with Purpose',
      image: '/src/assets/imgs/plates.png',
      deployedLink: 'https://plates-with-purpose-383e0dfd259c.herokuapp.com/',
      repo: 'https://github.com/collinsjosephj/PlatesWithPurpose',
    },
    {
      name: 'PokeSimulator',
      image: '/src/assets/imgs/pokeapp.png',
      deployedLink: 'https://collinsjosephj.github.io/PokeSimulator/',
      repo: 'https://github.com/collinsjosephj/PokeSimulator',
    },
    {
      name: 'NoteTaker',
      image: '/src/assets/imgs/notes.png',
      deployedLink: 'https://expressjs-notetaker-54eb66328c8f.herokuapp.com/',
      repo: 'https://github.com/collinsjosephj/expressNoteTaker',
    },
    {
      name: 'Weather Forecast',
      image: '/src/assets/imgs/weather.png',
      deployedLink: 'https://collinsjosephj.github.io/weatherForecast/',
      repo: 'https://github.com/collinsjosephj/weatherForecast',
    }
  ]);

  return (
    <section className="container mx-auto p-4 animate-fade-in font-montserrat">
      <h1 className="p-4 text-6xl font-bold mb-16 text-center">Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {projects.map(project => (
          <Project
            key={project.name}
            name={project.name}
            image={project.image}
            deployedLink={project.deployedLink}
            repo={project.repo}
            className="transform transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
