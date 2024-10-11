import React from 'react';
import style from './subtitle.module.css';

interface SubtitleProps {
    text: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Subtitle: React.FC<SubtitleProps> = ({ text, Svg }) => {
    return (
        <div className={style.containSubtitle}>
            <Svg className={style.svg}/>
            <h3 className={style.subtitle}>{text}</h3>
        </div>
    );
};

export default Subtitle;
