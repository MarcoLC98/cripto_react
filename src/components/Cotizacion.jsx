import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
  color: black;
  font-family: "Cairo", sans-serif; ;
`;

const Info = styled.p`
  font-size: 20px;
  span {
    font-weight: bold;
  }
  &.high {
    color: green;
  }
  &.low {
    color: red;
  }
`;
const Precio = styled.p`
    font-size: 40px;

    span {
        font-weight:bold;
    }
`

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;

    console.log(resultado)

    return (
      <ResultadoDiv>
        <Precio>
          <span>{resultado.PRICE}</span>{" "}
        </Precio>
        
        <hr/>
        <Info className= "high">
          Precio más alto del día: <span>{resultado.HIGHDAY}</span>{" "}
        </Info>
        <Info className= "low">
          Precio más bajo del día: <span>{resultado.LOWDAY}</span>{" "}
        </Info>
        <Info>
          Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span>{" "}
        </Info>
        <Info>
          Última Actualización: <span>{resultado.LASTUPDATE}</span>{" "}
        </Info>
        <hr />
      </ResultadoDiv>
    );
}
 
export default Cotizacion;