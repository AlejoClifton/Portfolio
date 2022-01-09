import React from 'react';

import { Aproject } from '../../styleComponents/General';

const References = ({ text, href }) => {
    const reference = 'https://github.com/Monderks/' + href;
    return (
        <>
            <Aproject href={reference}>{text}</Aproject>
        </>
    );
};

export default References;
