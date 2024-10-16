import Subtitle from '@/utilities/subtitle/Subtitle';
import React from 'react';
import { ContactSvg, WspSvg, InstagramSvg, TiktokSvg, EmailSvg, LinkedinSvg, GithubSvg } from '@/assets/SvgContainer';
import LinkButton from '@/utilities/buttons/LinkButton';
import style from './contacto.module.css';

const Contact = () => {
    return (
        <section id="contact" className={style.containContact}>
            <Subtitle text="Medios de contacto" Svg={ContactSvg} />
            <div className={style.containLinks}>
                <LinkButton url={`https://wa.me/541170627863`} type="_blank" ariaLabel="Whatsapp">
                    <WspSvg className={style.svg} />
                </LinkButton>
                <LinkButton url={`https://www.instagram.com/alee_tcg/`} type="_blank" ariaLabel="Instagram">
                    <InstagramSvg className={style.svg} />
                </LinkButton>
                <LinkButton url={`https://www.tiktok.com/@alee_tcg?lang=es`} type="_blank" ariaLabel="Tiktok">
                    <TiktokSvg className={style.svg} />
                </LinkButton>
                <LinkButton url={`https://github.com/AlejoClifton`} type="_blank" ariaLabel="Linkedin">
                    <GithubSvg className={style.svg} />
                </LinkButton>
                <LinkButton url={`https://www.linkedin.com/in/alejo-clifton/`} type="_blank" ariaLabel="Linkedin">
                    <LinkedinSvg className={style.svg} />
                </LinkButton>
                <LinkButton url={`mailto:contacto@alejoclifton.com`} type="_blank" ariaLabel="Email">
                    <EmailSvg className={style.svg} />
                </LinkButton>
            </div>
        </section>
    );
};

export default Contact;
