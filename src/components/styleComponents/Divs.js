import styled from 'styled-components';
import { colors } from './theme';

export const DivHeader = styled.div`
    background-color: ${colors.FondoOscuro};
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    h1 {
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        margin: 0;
        padding: 15px;
    }
    a {
        color: ${colors.texto};
        text-decoration: none;
        font-weight: bold;
        padding: 10px;
        margin: 0;
        &:hover {
            color: ${colors.boton};
        }
    }
`;

export const Div = styled.div`
    background-color: ${colors.FondoOscuro2};
    padding: 20px;
`;

export const DivText = styled.div`
    border-radius: 1rem;
    background-color: ${colors.FondoOscuro3};
    p {
        font-weight: 700;
        color: white;
        text-align: justify;
        word-spacing: -2px;
        font-size: 1.2rem;
        padding: 30px;
    }
    .strong {
        color: ${colors.boton};
        font-size: 1.2rem;
    }
    .aboutMeButton {
        width: 30%;
        margin: 0 auto;
        border: none;
        background: $boton;
        border-radius: 1em;
        font-size: 1.2em;
        padding: 10px 0px 10px 0px;
        text-align: center;
        text-decoration: none;
        margin-bottom: 30px;
    }
`;

export const DivProyect = styled.div`
    background-color: ${colors.FondoOscuro2};
    padding: 20px;
    img {
        width: 20rem;
        height: 15rem;
        padding: 0px;
        text-align: center;
        object-fit: contain;
    }
`;
