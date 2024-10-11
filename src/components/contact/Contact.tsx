import Subtitle from '@/utilities/subtitle/Subtitle';
import React from 'react';
import { ContactSvg, WspSvg, InstagramSvg, TiktokSvg, EmailSvg, LinkedinSvg } from '@/assets/SvgContainer';
import LinkButton from '@/utilities/buttons/LinkButton';
import style from './contacto.module.css'

const Contact = () => {
    return (
        <section id='contact' className={style.containContact}>
            <Subtitle text="Medios de contacto" Svg={ContactSvg} />
            <div className={style.containLinks}>
                <LinkButton url={`https://wa.me/541123871729`} type="_blank">
                    <WspSvg className={style.svg} />
                </LinkButton>
                <LinkButton url={`mailto:example@email.com`} type="_blank">
                    <EmailSvg className={style.svg} />
                </LinkButton>
                <LinkButton url={`https://www.instagram.com/alee_tcg/`} type="_blank">
                    <InstagramSvg className={style.svg} />
                </LinkButton>
                <LinkButton url={`https://www.tiktok.com/@alee_tcg?lang=es`} type="_blank">
                    <TiktokSvg className={style.svg} />
                </LinkButton>
                <LinkButton url={`https://www.linkedin.com/in/alejo-clifton/`} type="_blank">
                    <LinkedinSvg className={style.svg} />
                </LinkButton>
            </div>
        </section>
    );
};

export default Contact;
