import styled from 'styled-components';
import { colors } from './theme';

export const Icon = styled.i`
    width: 15%;
    order: 4;
    border-radius: 50%;
    padding: 10px;
    margin: 0 auto 10px auto;
    text-align: center;
    font-size: 20px;
    color: white;
    &:hover {
        background-color: ${colors.boton};
    }
`;

export const IconTechnologies = styled.i`
    order: 4;
    border-radius: 50%;
    font-size: 60px;
    color: ${colors.boton};
    &:hover {
        background-color: ${colors.boton};
    }
`;
