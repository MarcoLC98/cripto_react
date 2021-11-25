import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.p`
    border-radius: 5px;
    background-color: #b7322c;
    padding: 1rem;
    color: #FFF;
    font-size: 25px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`;

const Error = ({mensaje}) => {
    return (  
        <MensajeError>{mensaje}</MensajeError>
    );
}
 
export default Error;