import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const links = [
        { path: '/', name: 'Home' },
        { path: '/aboutme', name: 'About Me' },
        { path: '/portfolio', name: 'Portfolio' },
        { path: '/contact', name: 'Contact' },
        { path: '/resume', name: 'Resume' },
    ];

    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link to="/">My Story So Fa</Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`hover:text-blue-400 ${location.pathname === link.path ? 'text-blue-400' : ''
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="block p-2 hover:bg-gray-700"
                            onClick={toggleMenu}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}

export default Header;
