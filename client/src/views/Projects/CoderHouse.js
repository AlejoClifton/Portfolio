import React from 'react';

const CoderHouse = () => {
    return (
        <div className="project-Unit">
            <h2 title="title">Proyecto CoderHouse</h2>
            <img src="assets/img/proyectoCoderHouse.png" alt="Proyecto CoderHouse"></img>
            <figcaption>
                <em>CoderHouse</em> Proyecto Realizado en CoderHouse.
            </figcaption>
            <p>Lenguajes usados:</p>
            <ul>
                <li>React JS</li>
                <li>Firebase</li>
            </ul>
            <div className="divRedirect">
                <a
                    className="buttonRedirect"
                    href="https://github.com/Monderks/studiogoldney_clifton_goldney"
                >
                    Ir al Repositorio
                </a>
            </div>
        </div>
    );
};

export default CoderHouse;
