import React from 'react';

import { Div } from '../../styleComponents/Divs';
import Frontend from './Frontend';
import Backend from './Backend';
import Database from './Database';
import DatabaseCloud from './DatabaseCloud';
import Others from './Others';

const ListTechnologies = () => {
    return (
        <Div>
            <Frontend />
            <Backend />
            <Database />
            <DatabaseCloud />
            <Others />
        </Div>
    );
};

export default ListTechnologies;
