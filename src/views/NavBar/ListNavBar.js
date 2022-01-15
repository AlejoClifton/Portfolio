import React, { useState } from 'react';

import NavBarCategory from './NavBarCategory';

const ListNavBar = ({ listCategories }) => {
    const [estado, setEstado] = useState(false);
    const [clase, setClase] = useState('');
    const menuButton = () => {
        if (!estado) {
            setClase('scale-up-ver-top public');
            setEstado(true);
        } else {
            setClase('');
            setEstado(false);
        }
    };

    return (
        <div className="aside">
            <h1 className="title4">
                <a href="/">Alejo</a>
            </h1>
            <ul className={clase}>
                {listCategories.map((category) => {
                    return <NavBarCategory key={category.id} category={category} />;
                })}
            </ul>
            <i onClick={menuButton} className="fas fa-bars"></i>
        </div>
    );
};

export default ListNavBar;
