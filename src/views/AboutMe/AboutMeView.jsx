import React from 'react';

import AboutMe from './AboutMe';
import './aboutMe.scss';

const AboutMeView = () => {
    return (
        <div id="aboutMe" className="aboutMe">
            <h1 className="title">Sobre mí</h1>
            <AboutMe />
        </div>
    );
};

export default AboutMeView;
