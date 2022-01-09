import styled, { css } from 'styled-components';
import { colors } from './theme';

export const Ul = styled.ul`
    list-style: none;
    display: none;
    flex-direction: column;
    align-items: center;
    padding-right: 40px;
    li {
        padding: 8px;
        margin-left: 10px;
        a {
            font-size: 1rem;
        }
    }
    ${(props) =>
        props.nav &&
        css`
            display: flex;
        `};
`;

export const UlDedicacion = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 40px;
    color: white;
    li {
        margin-left: 10px;
        p {
            padding: 0px;
            text-align: left;
            font-size: 1rem;
        }
    }
`;

export const Ulista = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;
    justify-content: space-evenly;
    padding-left: 0;
    li {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: white;
        font-size: 1rem;
        padding: 10px;
        i {
            font-size: 3rem;
            color: white;
        }
        img {
            width: 50px;
            height: 50px;
        }
    }

    ${(props) =>
        props.database &&
        css`
            background-color: white;
        `}
`;
