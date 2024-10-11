import {
    NextJSSvg,
    CssSvg,
    AstroSvg,
    ScssSvg,
    NodeJSSvg,
    ExpressJSSvg,
    MysqlSvg,
    ReactSvg,
    WordpressSvg,
    GitSvg,
    VisualCodeSvg,
    FigmaSvg,
    JestSvg,
    JavaSpringBootSvg,
} from '@/assets/SvgContainer';
import style from './technologies.module.css';

const technologyIcons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    'next.js': NextJSSvg,
    'astro.js': AstroSvg,
    wordpress: WordpressSvg,
    'react.js': ReactSvg,
    'react native': ReactSvg,
    css: CssSvg,
    scss: ScssSvg,
    'node.js': NodeJSSvg,
    'express.js': ExpressJSSvg,
    mysql: MysqlSvg,
    git: GitSvg,
    'visual code': VisualCodeSvg,
    figma: FigmaSvg,
    jest: JestSvg,
    'java spring boot': JavaSpringBootSvg,
};

const TechnologyIcons = ({ technologies }: { technologies: string[] }) => {
    return (
        <div className={style.containTechnologies}>
            {technologies.map((tech) => {
                const Icon = technologyIcons[tech.toLowerCase()];
                const techClass = style[tech.replace(/[.\s]+/g, '').toLowerCase()];

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
