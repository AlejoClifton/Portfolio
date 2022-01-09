import React from 'react';

import { IconTechnologies } from '../../styleComponents/Icons';
import { Ulista } from '../../styleComponents/Uls';
import { TitleSecond } from '../../styleComponents/Title';

const Backend = () => {
    return (
        <div>
            <TitleSecond title="title">Backend</TitleSecond>
            <Ulista>
                <li>
                    <IconTechnologies className="fab fa-node-js"></IconTechnologies>
                </li>
                <li>
                    <p>Express</p> <IconTechnologies className="fab fa-js"></IconTechnologies>
                </li>
            </Ulista>
        </div>
    );
};

export default Backend;
