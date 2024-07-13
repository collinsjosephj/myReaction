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
                        <i className={`${icon.name} text-2xl`}></i>
                    </a>
                ))}
            </div>
        </footer>
    );
}

export default Footer;
