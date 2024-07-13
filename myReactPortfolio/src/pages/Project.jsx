import { removeHyphensAndCapitalize } from '../utils/helpers';
import PropTypes from 'prop-types';

function Project({ name, image, deployedLink, repo }) {
    return (
        <div className="bg-white-gradient rounded-lg shadow-lg overflow-hidden">
            <img src={image} alt={name} className="w-full h-96-auto object-cover"/>
            <div className="p-2">
                <h2 className="text-xl font-bold mb-2 font-black">{removeHyphensAndCapitalize(name)}</h2>
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
    image: PropTypes.string.isRequired,
    deployedLink: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
};

export default Project;
