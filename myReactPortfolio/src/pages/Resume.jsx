import resume from '../assets/Collins_Joseph_Resume2.pdf';

const skillIcons = {
  HTML: "fab fa-html5",
  CSS: "fab fa-css3-alt",
  JavaScript: "fab fa-js",
  "Responsive Design": "fas fa-laptop",
  React: "fab fa-react",
  Bootstrap: "fab fa-bootstrap",
  APIs: "fas fa-server",
  Node: "fab fa-node-js",
  Express: "fas fa-code",
  MySQL2: "fas fa-database",
  Sequelize: "fas fa-code-branch",
  MongoDB: "fas fa-leaf",
  GraphQL: "fas fa-project-diagram",
};

function Resume() {
  const skills = [
    { category: 'Front-End', list: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'React', 'Bootstrap'] },
    { category: 'Back-End', list: ['APIs', 'Node', 'Express', 'MySQL2', 'Sequelize', 'MongoDB', 'GraphQL'] }
  ]

  return (
    <section className="container mx-auto p-4 mt-12 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gradient-to-l from-blue-100 via-blue-300 to-blue-500 text-gray-900 rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-bold mb-2">{skill.category}</h2>
            <ul className="list-none text-black font-bold">
              {skill.list.map((item, idx) => (
                <li key={idx} className="flex items-center mb-2">
                  <i className={`${skillIcons[item]} text-xl mr-2`}></i> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Resume</h1>
        <a href={resume} download className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500">
          Download
        </a>
      </div>
    </section>
  );
}

export default Resume;
