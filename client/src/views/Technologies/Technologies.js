import React from 'react';

import Frontend from './Frontend';
import Backend from './Backend';
import Database from './Database';
import Others from './Others';

const Technologies = () => {
    return (
        <div className="container-Grid">
            <Frontend />
            <Backend />
            <Database />
            <Others />
        </div>
    );
};

export default Technologies;
