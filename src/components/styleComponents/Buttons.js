import styled from 'styled-components';
import { colors } from './theme';

export const Button = styled.button`
    display: block;
    width: 50%;
    margin: 30px auto;
    border: none;
    font-size: 0.9rem;
    background: ${colors.boton};
    color: white;
    font-weight: bold;
    border-radius: 1em;
    padding: 15px;
    &:hover {
        background-color: $textoSecundario;
    }
`;
