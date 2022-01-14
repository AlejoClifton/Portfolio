import React from 'react';

const Perfil = () => {
    return (
        <div className="perfilAlejo">
            <h1 className="title alejo">Alejo Tomás Clifton Goldney</h1>
            <h2 className="title2 alejo">Full Stack Developer MERN</h2>
            <div>
                <img src="assets/img/mia.jpg" alt="Alejo Clifton"></img>
            </div>
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
            <div>
                <a className="buttonRedirect" href={'/#Contact'}>
                    Contrátame
                </a>
            </div>
        </div>
    );
};

export default Perfil;
