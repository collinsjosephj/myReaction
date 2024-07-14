import { useState } from 'react';
import Project from '../pages/Project';
import image1 from '../assets/imgs/plates.png';
import image2 from '../assets/imgs/pokeapp.png';
import image3 from '../assets/imgs/notes.png';
import image4 from '../assets/imgs/weather.png';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'Plates with Purpose',
      image: image1,
      deployedLink: 'https://plates-with-purpose-383e0dfd259c.herokuapp.com/',
      repo: 'https://github.com/collinsjosephj/PlatesWithPurpose',
    },
    {
      name: 'PokeSimulator',
      image: image2,
      deployedLink: 'https://collinsjosephj.github.io/PokeSimulator/',
      repo: 'https://github.com/collinsjosephj/PokeSimulator',
    },
    {
      name: 'NoteTaker',
      image: image3,
      deployedLink: 'https://expressjs-notetaker-54eb66328c8f.herokuapp.com/',
      repo: 'https://github.com/collinsjosephj/expressNoteTaker',
    },
    {
      name: 'Weather Forecast',
      image: image4,
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
