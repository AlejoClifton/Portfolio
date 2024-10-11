import { NextJSSvg, CssSvg, AstroSvg, ScssSvg, NodeJSSvg, ExpressJSSvg, MysqlSvg } from '@/assets/SvgContainer';
import style from './technologies.module.css';

const technologyIcons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    'next.js': NextJSSvg,
    css: CssSvg,
    'astro.js': AstroSvg,
    scss: ScssSvg,
    'node.js': NodeJSSvg,
    'express.js': ExpressJSSvg,
    mysql: MysqlSvg,
};

const TechnologyIcons = ({ technologies }: { technologies: string[] }) => {
    return (
        <div className={style.containTechnologies}>
            {technologies.map((tech) => {
                const Icon = technologyIcons[tech.toLowerCase()];
                const techClass = style[tech.replace('.', '').toLowerCase()];

                return Icon ? (
                    <div key={tech} className={`dFlexRowDefault fGap ${style.svgContain} ${techClass}`}>
                        <Icon className={style.svg} />
                        <p className={style.txtSvg}>{tech.toLowerCase()}</p>
                    </div>
                ) : null;
            })}
        </div>
    );
};

export default TechnologyIcons;
