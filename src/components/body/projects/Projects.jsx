import React from 'react';

import { TitlePrimary } from '../../styleComponents/Title';
import ListProyects from './ListProyects';

const Projects = () => {
    return (
        <div>
            <TitlePrimary>Proyectos</TitlePrimary>
            <ListProyects />
        </div>
    );
};

export default Projects;
