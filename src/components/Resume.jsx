import React from 'react';

function Resume() {
    return (
        <section>
            <h2>Resume</h2>
            <a href="/path-to-resume.pdf" download>
                Download My Resume
            </a>
            <h3>Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>MySQL</li>
                {/* Add more proficiencies as needed */}
            </ul>
        </section>
    );
}

export default Resume;