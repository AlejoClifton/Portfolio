import React from 'react';

const Perfil = () => {
    return (
        <div>
            <img src="img/mia.jpg" alt="Alejo Clifton"></img>
            <h1>Alejo Tomás Clifton Goldney</h1>
            <h2>Full Stack Developer MERN</h2>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/alejo-clifton">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Monderks">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
            </ul>
            <button>
                <a href={'/#Contacto'}>Contrátame</a>
            </button>
        </div>
    );
};

export default Perfil;
