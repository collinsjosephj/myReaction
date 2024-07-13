import resume from '../assets/Collins_Joseph_Resume2.pdf';

function Resume() {
  const skills = [
    { category: 'Frontend', list: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'React', 'Bootstrap', 'Handlebars'] },
    { category: 'Backend', list: ['APIs', 'Node', 'Express', 'MySQL2', 'Sequelize', 'MongoDB', 'Mongoose', 'GraphQL'] }
  ];

  return (
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Resume</h1>
      <div className="mb-4 text-center">
        <a href={resume} download className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Download Resume
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold text-black mb-2">{skill.category}</h2>
            <ul className="list-disc list-inside text-black">
              {skill.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Resume;
