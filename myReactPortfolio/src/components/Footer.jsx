function Footer() {
    const icons = [
        {
            name: "fab fa-github",
            link: "https://github.com/collinsjosephj",
            label: "GitHub"
        },
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/joseph-collins-953994139/",
            label: "LinkedIn"
        },
        {
            name: "oregon",
            link: "https://www.uoregon.edu/",
            label: "University of Oregon",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Oregon_Ducks_logo.svg" // Update this with the correct URL
        }
    ];

    return (
        <footer className="flex justify-center items-center p-4 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 text-gray-900">
            <div className="flex space-x-4">
                {icons.map(icon => (
                    <a
                        href={icon.link}
                        key={icon.name}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-700"
                        aria-label={icon.label}
                    >
                        {icon.name === 'oregon' ? (
                            <img src={icon.image} alt={icon.label} className="w-6 h-6 mt-1" />
                        ) : (
                            <i className={`${icon.name} text-2xl`}></i>
                        )}
                    </a>
                ))}
            </div>
        </footer>
    );
}

export default Footer;
