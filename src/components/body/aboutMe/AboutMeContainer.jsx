import React from 'react';
import AboutMe from './aboutMe/AboutMe';

import './aboutMeContainer.scss';

const AboutMeContainer = () => {
    return (
        <div>
            <h1 className="title">Sobre Mí</h1>
            <div className="AboutMeContainer">
                <AboutMe />
            </div>
        </div>
    );
};

export default AboutMeContainer;
