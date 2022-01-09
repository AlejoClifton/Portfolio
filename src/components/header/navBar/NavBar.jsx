import React, { useState, useEffect } from 'react';
import { getCategories } from '../../items/items';
import ListNavBar from './listNavBar/ListNavBar';

import '../../../global/animations.scss';
import { DivHeader } from '../../styleComponents/Divs';

const NavBar = () => {
    const [listCategories, setListCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((res) => {
                setListCategories(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <DivHeader>
            <ListNavBar listCategory={listCategories} />
        </DivHeader>
    );
};

export default NavBar;
