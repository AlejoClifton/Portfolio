const NavBarCategory = ({ category }) => {
    return (
        <li>
            <a href={`/#${category.buscador}`}>{category.name}</a>
        </li>
    );
};

export default NavBarCategory;
