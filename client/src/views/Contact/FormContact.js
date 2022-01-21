import axios from 'axios';
import React, { useState } from 'react';

const FormContact = () => {
    const [valores, setValores] = useState({ name: '', business: '', email: '', message: '' });

    const [errorName, setErrorName] = useState(false);
    const [errorBusiness, setErrorBusiness] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);

    const sendEmail = () => {
        if (valores.name && valores.business && valores.email) {
            axios
                .post('http://localhost:3001/api/form', {
                    nombre: valores.name,
                    business: valores.business,
                    email: valores.email,
                    mensaje: valores.message,
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const fillOutForm = (e) => {
        const { name, value } = e.target;
        setValores({
            ...valores,
            [name]: value,
        });
    };
    const validateForm = (e) => {
        e.preventDefault();

        if (!valores.name) {
            setErrorName(true);
        } else {
            setErrorName(false);
        }
        if (!valores.business) {
            setErrorBusiness(true);
        } else {
            setErrorBusiness(false);
        }
        if (!valores.email) {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }
    };

    return (
        <form method="post" className="formContact" onSubmit={validateForm}>
            <div className="containerText">
                <label htmlFor="name">Nombre</label>
                <input type="text" placeholder="Nombre" name="name" id="name" onChange={fillOutForm} />
                {errorName && <p className="error">El nombre es requerido</p>}
            </div>
            <div className="containerText">
                <label htmlFor="business">Empresa</label>
                <input
                    type="text"
                    placeholder="Empresa"
                    name="business"
                    id="business"
                    onChange={fillOutForm}
                />
                {errorBusiness && <p className="error">La empresa es requerido</p>}
            </div>
            <div className="containerText">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="email" name="email" id="email" onChange={fillOutForm} />
                {errorEmail && <p className="error">El email es requerido</p>}
            </div>
            <div>
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" placeholder="Mensaje" onChange={fillOutForm} />
            </div>
            <div>
                <button onClick={sendEmail}>Enviar</button>
            </div>
        </form>
    );
};

export default FormContact;
