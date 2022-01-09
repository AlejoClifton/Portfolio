import React from 'react';

import { IconTechnologies } from '../../styleComponents/Icons';
import { Ulista } from '../../styleComponents/Uls';
import { TitleSecond } from '../../styleComponents/Title';

const Frontend = () => {
    return (
        <div>
            <TitleSecond title="title">Frontend</TitleSecond>
            <Ulista lista="lista">
                <li>
                    <IconTechnologies className="fab fa-html5"></IconTechnologies>
                </li>
                <li>
                    <IconTechnologies className="fab fa-css3-alt"></IconTechnologies>
                </li>
                <li>
                    <IconTechnologies className="fab fa-sass"></IconTechnologies>
                </li>
                <li>
                    <IconTechnologies className="fab fa-js"></IconTechnologies>
                </li>
                <li>
                    <IconTechnologies className="fab fa-react"></IconTechnologies>
                </li>
            </Ulista>
        </div>
    );
};

export default Frontend;
