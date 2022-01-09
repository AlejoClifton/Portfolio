import React from 'react';

import { Ulista } from '../../styleComponents/Uls';
import { TitleSecond } from '../../styleComponents/Title';

const Database = () => {
    return (
        <div>
            <TitleSecond title="title">Bases de Datos</TitleSecond>
            <Ulista database="database">
                <li>
                    <img src="img/mongodb.png"></img>
                </li>
                <li>
                    <img src="img/sqlserver.png"></img>
                </li>
                <li>
                    <img src="img/postgresql.png"></img>
                </li>
                <li>
                    <img src="img/mysql.png"></img>
                </li>
            </Ulista>
        </div>
    );
};

export default Database;
