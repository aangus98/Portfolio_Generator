import React from 'react';

function Portfolio() {
    const projects = [
        {
            title: 'Project 1',
            liveLink: 'https://project1-live-link.com',
            repoLink: 'https://github.com/your-profile/project1',
        },
        // Add more projects as needed
    ];

    return (
        <section>
            <h2>Portfolio</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <h3>{project.title}</h3>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            Live Application
                        </a>
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                            GitHub Repository
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
