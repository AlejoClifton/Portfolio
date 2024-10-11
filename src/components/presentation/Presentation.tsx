import LinkButton from '@/utilities/buttons/LinkButton';
import React from 'react';
import style from './presentation.module.css';
import Image from 'next/image';

const Presentation = () => {
    return (
        <section id='presentation' className={`${style.containPresentation} dFlexRowDefault fWrap`}>
            <div className={style.containTitle}>
                <h1 className={style.title}>Alejo Tomás Clifton Goldney</h1>
                <h2 className={style.subtitle}>
                    +3 años de experiencia.
                    <span className="tremb">Fullstack Developer, Técnico Universitario en Programación y Creador de Contenido</span> sobre
                    Programación de Buenos Aires, Argentina. Especializado en páginas y aplicaciones web.
                </h2>
                <LinkButton url="#contact">Contáctame</LinkButton>
            </div>
            <div className={style.containImage}>
                <Image src={'/alejo.png'} alt='Alejo Clifton' className={style.image} width={260} height={300} priority/>
            </div>
        </section>
    );
};

export default Presentation;
