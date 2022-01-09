import React from 'react';

import { IconTechnologies } from '../../styleComponents/Icons';
import { Ulista } from '../../styleComponents/Uls';
import { TitleSecond } from '../../styleComponents/Title';

const Others = () => {
    return (
        <div>
            <TitleSecond title="title">Otros</TitleSecond>
            <Ulista>
                <li>
                    <IconTechnologies className="fab fa-git-alt"></IconTechnologies>
                </li>

                <li>
                    <img src="img/styledcomponents.png"></img>
                </li>
            </Ulista>
        </div>
    );
};

export default Others;
