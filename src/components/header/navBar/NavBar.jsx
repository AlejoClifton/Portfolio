import React, { useState, useEffect } from 'react';
import { getCategories } from '../../items/items';
import ListNavBar from './listNavBar/ListNavBar';
import './navBar.scss';

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
        <div className="navBar">
            <ListNavBar listCategory={listCategories} />
        </div>
    );
};

export default NavBar;
