import React, { useState } from 'react';
import NavBarCategory from './NavBarCategory';

import { Ul } from '../../../styleComponents/Uls';
import { Icon } from '../../../styleComponents/Icons';

const ListNavBar = ({ listCategory }) => {
    const [estado, setEstado] = useState(false);
    const [clase, setClase] = useState('');
    const [nav, setNav] = useState('');
    const menuButton = () => {
        if (!estado) {
            setClase('scale-up-ver-top');
            setNav('nav');
            setEstado(true);
        } else {
            setClase('');
            setNav('');
            setEstado(false);
        }
    };

    return (
        <>
            <h1>
                <a href="/">Alejo Clifton</a>
            </h1>
            <Ul className={clase} nav={nav}>
                {listCategory.map((category) => {
                    return <NavBarCategory lista="" key={category.id} category={category} />;
                })}
            </Ul>
            <Icon onClick={menuButton} className="fas fa-bars buttonMenu"></Icon>

            {/* <a href="/curriculum/CV_Alejo_Tomás_Clifton_Goldney.pdf" className="aboutMeButton">
                CV
            </a> */}
        </>
    );
};

export default ListNavBar;
