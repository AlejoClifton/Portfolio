import React from 'react';

import { DivProyect } from '../../styleComponents/Divs';
import { Span } from '../../styleComponents/General';
import { TitleSecond } from '../../styleComponents/Title';

import References from './References';

const CoderHouse = () => {
    return (
        <DivProyect>
            <TitleSecond title="title">Proyecto CoderHouse</TitleSecond>
            <img src="img/proyectoCoderHouse.png"></img>
            <Span>Proyecto Realizado en CoderHouse, realizado en React JS y Firebase.</Span>
            <References text="Ir al Repositorio" href="studiogoldney_clifton_goldney" />
            <References text="Ver más" href="" />
        </DivProyect>
    );
};

export default CoderHouse;
