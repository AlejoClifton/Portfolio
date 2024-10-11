import Link from 'next/link';
import React from 'react';
import style from './header.module.css';

const listHeader = [
    {
        id: 1,
        name: 'Inicio',
        url: '#presentation',
    },
    {
        id: 2,
        name: 'Experiencia',
        url: '#experience',
    },
    {
        id: 3,
        name: 'Proyectos',
        url: '#projects',
    },
    {
        id: 4,
        name: 'Sobre mí',
        url: '#aboutme',
    },
    {
        id: 5,
        name: 'Contacto',
        url: '#contact',
    },
];

const Header = () => {
    return (
        <header className={style.containHeader}>
            <ul className={`${style.listHeader}`}>
                {listHeader.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link href={item.url} className={style.link}>{item.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </header>
    );
};

export default Header;
