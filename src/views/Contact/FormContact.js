import React from 'react';

const FormContact = () => {
    return (
        <form className="formContact">
            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor="lastName">Apellido</label>
                <input type="text" id="lastName" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
            </div>
            <div>
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" />
            </div>
            <div>
                <button>Enviar</button>
            </div>
        </form>
    );
};

export default FormContact;
