import Image from 'next/image';
import LinkButton from '@/utilities/buttons/LinkButton';
import React from 'react';
import Subtitle from '@/utilities/subtitle/Subtitle';
import TechnologyIcons from '@/utilities/technologies/Technologies';
import style from './freelancer.module.css';
import { ProjectSvg, LinkSvg } from '@/assets/SvgContainer';
import { projects } from './projects';

const Freelancer = () => {
    return (
        <section id='projects'>
            <Subtitle text="Proyectos Freelancer" Svg={ProjectSvg} />
            <div>
                {projects.map((project, index) => (
                    <div key={index} className={`${style.containProject} dFlexRowDefault fWrap`}>
                        <div className={style.containImage}>
                            <Image src={project.image} alt={project.image} className={style.image} width={400} height={200} priority />
                        </div>
                        <div className={style.containTexts}>
                            <h3 className={style.title}>{project.title}</h3>
                            <TechnologyIcons technologies={project.technologies} />
                            <p className={style.txt}>{project.text}</p>
                            <LinkButton url={project.link} type="_blank">
                                <LinkSvg className={style.svg} />
                                <p>Ver Proyecto</p>
                            </LinkButton>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Freelancer;
