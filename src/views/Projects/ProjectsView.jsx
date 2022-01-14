import React from 'react';

import Projects from './Projects';

import './projects.scss';

const ProjectsView = () => {
    return (
        <div id="Projects" className="projects">
            <h1 className="title">Projects</h1>
            <Projects />
            <div className="seeMore">
                <h2 className="title2">¿Quieres ver todos mis proyectos?</h2>
                <a className="buttonRedirect see" href="https://github.com/Monderks?tab=repositories">
                    Ver más
                </a>
            </div>
        </div>
    );
};

export default ProjectsView;
