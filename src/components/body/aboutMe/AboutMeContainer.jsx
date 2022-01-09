import React from 'react';
import AboutMe from './aboutMe/AboutMe';

import { TitlePrimary } from '../../styleComponents/Title';
import { Div } from '../../styleComponents/Divs';

const AboutMeContainer = () => {
    return (
        <div>
            <TitlePrimary>Sobre Mí</TitlePrimary>
            <Div>
                <AboutMe />
            </Div>
        </div>
    );
};

export default AboutMeContainer;
