function Footer() {
    const icons = [
        {
            name: "My GitHub",
            link: "https://github.com/collinsjosephj",
            label: "GitHub"
        },
        {
            name: "My LinkedIn",
            link: "https://www.linkedin.com/in/joseph-collins-953994139/",
            label: "LinkedIn"
        }
    ];

    return (
        <footer className="flex justify-center items-center p-4 bg-gray-800 text-white">
            <div className="flex space-x-4">
                {icons.map(icon => (
                    <a
                        href={icon.link}
                        key={icon.name}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
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
