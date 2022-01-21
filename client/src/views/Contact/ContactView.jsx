import React from 'react';

import FormContact from './FormContact';

import './contactView.scss';

const ContactView = () => {
    return (
        <div id="Contact" className="contact">
            <h1 className="title">Contacto</h1>
            <FormContact />
        </div>
    );
};

export default ContactView;
