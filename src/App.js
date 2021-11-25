import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: rgb(0,0,0);
  text-align:left;
  font-weight: 700;
  font-size: 70px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #A63C00;
    display:block;
  }
`;

function App() {

  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {

    const cotizarCriptomoneda = async () => {
      // evitamos la ejecución la primera vez
      if (moneda === '') return;

      // consultar la api para obtener la cotizacion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

      const resultado = await axios.get(url);

      // mostrar el spinner
      guardarCargando(true);

      // ocultar el spinner y mostrar el resultado
      setTimeout(() => {

        // cambiar el estado de cargando
        guardarCargando(false);

        // guardar cotizacion
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
      }, 3000);


    }
    cotizarCriptomoneda();
  }, [moneda, criptomoneda]);

  // Mostrar spinner o resultado
  const componente = (cargando) ? <Spinner /> : <Cotizacion resultado={resultado} />

  return (
    <Contenedor>
      <div className="images">
        
        <img className="eth" src="./eth.png" alt="etherum"></img>
        <img className="bitcoin" src="./bitcoin.png" alt="bitcoin" ></img>
        <img className="cardano" src="./cardano.png" alt="cardano"></img>
        <img className="tether" src="./tether.png" alt="tether"></img>
        <img className="xrp" src="./xrp.png" alt="xrp" ></img>
        <img className="ripple" src="./ripple.png" alt="ripple"></img>
  
      </div>

      <div>
        <Heading>Cotizacion cripto</Heading>

        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />
        {componente}

      </div>
    </Contenedor>
  );
}

export default App;
