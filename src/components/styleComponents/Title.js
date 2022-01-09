import styled, { css } from 'styled-components';
import { colors } from './theme';

export const TitlePrimary = styled.h1`
    color: ${colors.boton};
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin: 50px 0px 20px 0px;
`;

export const TitleSecond = styled.h2`
    color: ${colors.boton};
    font-size: 1.3rem;
    font-weight: bold;
    text-align: left;
    margin-left: 30px;
    background-color: ${colors.FondoOscuro3};
    padding: 10px;
    ${(props) =>
        props.title &&
        css`
            margin: 50px 30px 0px 30px;
            text-align: center;
        `}
`;
