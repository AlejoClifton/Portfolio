import React, { useState, useEffect } from 'react';
import ListNavBar from './ListNavBar';
import { getCategories } from '../../items/category/category';
import './navBar.scss';

const NavBarView = () => {
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
            <ListNavBar listCategories={listCategories} />
        </div>
    );
};

export default NavBarView;
