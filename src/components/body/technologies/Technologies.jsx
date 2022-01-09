import React from 'react';

import ListTechnologies from './ListTechnologies';
import { TitlePrimary } from '../../styleComponents/Title';

const Technologies = () => {
    return (
        <div>
            <TitlePrimary>Tecnologías</TitlePrimary>
            <ListTechnologies />
        </div>
    );
};

export default Technologies;
