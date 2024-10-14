import Image from 'next/image';
import React from 'react';
import Subtitle from '@/utilities/subtitle/Subtitle';
import style from './aboutme.module.css';
import { AboutMeSvg } from '@/assets/SvgContainer';

const AboutMe = () => {
    return (
        <section id="aboutme">
            <Subtitle text="Sobre Mí" Svg={AboutMeSvg} />
            <div className={`${style.containAboutme}`}>
                <div className={style.containImage}>
                    <Image src={'/alejosobremi.png'} alt={'Alejo Clifton Sobre mí'} className={style.image} width={255} height={400} priority />
                </div>
                <div className={style.description}>
                    <p className={style.text}>
                        ¡Hola! Me llamo <span className="trem">Alejo Tomás Clifton Goldney</span>, tengo 24 años y soy un apasionado de la
                        tecnología desde que tengo memoria. Una divertida anécdota de mis inicios: a los 8 años, borré el{' '}
                        <span className="trem">System32</span> de mi computadora, lo que resultó en un "pequeño desastre", pero a partir de
                        ese momento nació mi curiosidad por este mundo increíble.
                    </p>
                    <p className={style.text}>
                        Llevo más de <span className="trem">9 años reparando computadoras</span>, lo que me dio una base sólida para
                        entender cómo funcionan a nivel técnico. Hace unos <span className="trem">4 años descubrí la programación</span> y,
                        desde entonces, no he parado de aprender y perfeccionar mis habilidades. Me encanta explorar nuevas tecnologías,
                        buscar siempre formas de mejorar, y estar al día con las tendencias del desarrollo.
                    </p>
                    <p className={style.text}>
                        Actualmente, soy desarrollador <span className="trem">Fullstack</span> con experiencia en tecnologías como{' '}
                        <span className="trem">Next.js, React.JS, TypeScript, CSS, SCSS, Nest.JS, Node.JS, Mysql y PostgreSQL</span> y sigo
                        ampliando mis conocimientos día a día. Creo firmemente en la mejora continua, tanto como{' '}
                        <span className="trem">programador</span> como en el ámbito <span className="trem">personal</span>.
                    </p>
                    <p className={style.text}>
                        Mi objetivo es seguir creciendo en este campo, asumir nuevos desafíos y, por supuesto,{' '}
                        <span className="trem">disfrutar cada paso del camino</span>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
