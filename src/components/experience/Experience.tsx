import React from 'react';
import Subtitle from '@/utilities/subtitle/Subtitle';
import TechnologyIcons from '@/utilities/technologies/Technologies';
import style from './experience.module.css';
import { WorkSvg } from '@/assets/SvgContainer';
import { experience } from './experienceJson';

const Experience = () => {
    return (
        <section id="experience">
            <Subtitle text="Experiencia Laboral" Svg={WorkSvg} />
            <div className={`${style.containExperience}`}>
                {experience.map((exp) => (
                    <div key={exp.id} className={`${style.containProject} dFlexRow faCenter fjStart fWrap posRelative`}>
                        <span className={style.punto}>•</span>
                        <h3 className={style.job}>{exp.job}</h3>
                        <h3 className={style.company}>{exp.company}</h3>
                        <p className={style.time}>{exp.time}</p>
                        <div className={style.containDescription}>
                            {exp.paragraph.map((txt) => {
                                if (txt.type === 'title') {
                                    return (
                                        <h4 key={txt.id} className={style.txtTitle}>
                                            {txt.text}
                                        </h4>
                                    );
                                }
                                return (
                                    <p key={txt.id} className={style.txtLi}>
                                        {txt.text}
                                    </p>
                                );
                            })}
                        </div>
                        <div className={style.containTechnologies}>
                            <h4 className={style.titleTech}>Herramientas/Tecnologías:</h4>
                            <TechnologyIcons technologies={exp.technologies} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
