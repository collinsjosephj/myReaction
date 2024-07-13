import { removeHyphensAndCapitalize } from '../utils/helpers';
import PropTypes from 'prop-types';

function Project({ name, description, image, deployedLink, repo }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={image} alt={name} className="w-full h-48 object-cover"/>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2 font-black">{removeHyphensAndCapitalize(name)}</h2>
                <p className="mb-2">{description}</p>
                <div className="flex justify-between items-center">
                    <a href={repo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                    <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Demo</a>
                </div>
            </div>
        </div>
    );
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    deployedLink: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
};

export default Project;
