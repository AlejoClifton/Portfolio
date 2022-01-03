import React, { useState } from 'react';
import NavBarCategory from './NavBarCategory';

const ListNavBar = ({ listCategory }) => {
    const [estado, setEstado] = useState(false);
    const [clase, setClase] = useState('navContainer');
    const menuButton = () => {
        if (!estado) {
            setClase('navContainer scale-up-ver-top displayNav');
            setEstado(true);
        } else {
            setClase('navContainer ');
            setEstado(false);
        }
    };

    return (
        <>
            <h1>
                <a href="/">Alejo Clifton</a>
            </h1>
            <ul className={clase}>
                {listCategory.map((category) => {
                    return <NavBarCategory key={category.id} category={category} />;
                })}
            </ul>
            <i onClick={menuButton} className="fas fa-bars buttonMenu"></i>
        </>
    );
};

export default ListNavBar;
