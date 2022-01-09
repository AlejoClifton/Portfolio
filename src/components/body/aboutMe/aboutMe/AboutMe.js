import React from 'react';

import { DivText } from '../../../styleComponents/Divs';
import { UlDedicacion } from '../../../styleComponents/Uls';
import { TitleSecond } from '../../../styleComponents/Title';

const aboutMe = () => {
    return (
        <DivText>
            <p>
                Me llamo Alejo Tomás Clifton Goldney, tengo 21 años y soy
                <strong className="strong"> Frontend Developer </strong>y Técnico Universitario en Programación.
            </p>
            <TitleSecond>Actualmente me dedico a:</TitleSecond>
            <UlDedicacion lista="lista">
                <li>
                    <p>Reforzar conocimientos sobre el stack tecnológico MERN y otras tecnologías</p>
                </li>
                <li>
                    <p>Afianzar e investigar principios</p>
                </li>
                <li>
                    <p>Realizar buenas prácticas y metodologías de desarrollo Realizar proyectos full stack</p>
                </li>
            </UlDedicacion>
        </DivText>
    );
};

export default aboutMe;
