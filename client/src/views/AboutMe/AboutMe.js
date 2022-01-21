import React from 'react';

const AboutMe = () => {
    return (
        <div className="aboutMeDescription">
            <img src="assets/img/mia.jpg" alt="Alejo Clifton"></img>
            <div>
                <p>
                    Me llamo Alejo Tomás Clifton Goldney, tengo 21 años y soy
                    <strong className="strong"> FullStack Developer </strong>y Técnico Universitario en
                    Programación.
                </p>
                <h2 className="title2 aboutme">Actualmente me dedico a:</h2>
                <ul>
                    <li>
                        <p>Reforzar conocimientos sobre el stack tecnológico MERN y otras tecnologías</p>
                    </li>
                    <li>
                        <p>Afianzar e investigar principios</p>
                    </li>
                    <li>
                        <p>
                            Realizar buenas prácticas y metodologías de desarrollo Realizar proyectos
                            full stack
                        </p>
                    </li>
                </ul>

                <a
                    className="buttonRedirect cv"
                    href="assets/curriculum/CV_Alejo_Tomás_Clifton_Goldney.pdf"
                    download="CV_Alejo_Tomás_Clifton_Goldney.pdf"
                >
                    Descargar CV
                </a>
            </div>
        </div>
    );
};

export default AboutMe;
