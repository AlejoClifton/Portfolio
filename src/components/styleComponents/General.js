import styled from 'styled-components';
import { colors } from './theme';

export const Form = styled.form`
    background-color: ${colors.lightGray};
    border-radius: 1rem;
    width: 40%;
    margin: 10px auto 10px auto;
    padding: 3em;
`;

export const Error = styled.p`
    color: ${colors.red};
    color: red;
    font-size: 12px;
    margin-top: 5px;
`;

export const Aproject = styled.a`
    display: block;
    width: 60%;
    margin: 10px auto;
    border: none;
    font-size: 0.9rem;
    background: ${colors.boton};
    color: white;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    border-radius: 1em;
    padding: 15px;
    &:hover {
        background-color: ${colors.textoSecundario};
    }
`;

export const Span = styled.span`
    display: block;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    background-color: ${colors.FondoOscuro3};
    padding: 10px;
    margin: 0px 0px 50px 0px
`;
