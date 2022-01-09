import React from 'react';

import { Ulista } from '../../styleComponents/Uls';
import { TitleSecond } from '../../styleComponents/Title';

const DatabaseCloud = () => {
    return (
        <div>
            <TitleSecond title="title">Bases de Datos en Nube</TitleSecond>
            <Ulista>
                <li>
                    <img src="img/firebase.png"></img>
                </li>
            </Ulista>
        </div>
    );
};

export default DatabaseCloud;
