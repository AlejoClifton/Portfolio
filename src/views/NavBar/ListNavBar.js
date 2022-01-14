import React from 'react';

import NavBarCategory from './NavBarCategory';

const ListNavBar = ({ listCategories }) => {
    return (
        <div className="aside">
            <h1 className="title4">
                <a href="/">Alejo</a>
            </h1>
            <ul>
                {listCategories.map((category) => {
                    return <NavBarCategory key={category.id} category={category} />;
                })}
            </ul>
        </div>
    );
};

export default ListNavBar;
