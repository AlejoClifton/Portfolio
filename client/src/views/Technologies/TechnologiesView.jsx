import React from 'react';

import Technologies from './Technologies';
import './technologies.scss';

const TechnologiesView = () => {
    return (
        <div id="Technologies" className="technologies">
            <h1 className="title">Tecnologias</h1>
            <Technologies />
        </div>
    );
};

export default TechnologiesView;
