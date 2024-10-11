import Subtitle from '@/utilities/subtitle/Subtitle';
import React from 'react';
import { AboutMeSvg } from '@/assets/SvgContainer';

const AboutMe = () => {
    return (
        <div>
            <Subtitle text="Sobre Mí" Svg={AboutMeSvg} />
        </div>
    );
};

export default AboutMe;
