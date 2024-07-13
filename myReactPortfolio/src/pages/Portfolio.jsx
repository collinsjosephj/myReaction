import { useState } from 'react';
import Project from '../components/Project';
// import project1Img from '../assets/imgs/project1.png';
// import project2Img from '../assets/imgs/project2.png';
// import project3Img from '../assets/imgs/project3.png';
// import project4Img from '../assets/imgs/project4.png';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'Plates with Purpose',
      description: 'Group project using Restful APIs/MVC paradigm',
      image: '/src/assets/imgs/plates.png',
      deployedLink: 'https://plates-with-purpose-383e0dfd259c.herokuapp.com/',
      repo: 'https://github.com/collinsjosephj/PlatesWithPurpose',
    },
    {
      name: 'PokeSimulator',
      description: 'Front-End app for Pokemon',
      image: '/src/assets/imgs/pokeapp.png',
      deployedLink: 'https://collinsjosephj.github.io/PokeSimulator/',
      repo: 'https://github.com/collinsjosephj/PokeSimulator',
    },
    {
      name: 'NoteTaker',
      description: 'Express.js/JSON',
      image: '/src/assets/imgs/notetaker.png',
      deployedLink: 'https://expressjs-notetaker-54eb66328c8f.herokuapp.com/',
      repo: 'https://github.com/collinsjosephj/expressNoteTaker',
    },
    {
      name: 'Weather Forecast',
      description: '3rd party APIs',
      image: '/src/assets/imgs/weatherapp.png',
      deployedLink: 'https://collinsjosephj.github.io/weatherForecast/',
      repo: 'https://github.com/collinsjosephj/weatherForecast',
    }
  ]);

  return (
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {projects.map(project => (
          <Project
            key={project.name}
            name={project.name}
            description={project.description}
            image={project.image}
            deployedLink={project.deployedLink}
            repo={project.repo}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
