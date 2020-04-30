import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';

function App() {

  // Definir el state

  const [ busquedaletra, guardarBusquedaLetra ] = useState({});

  useEffect(() => {
    if(Object.keys(busquedaletra).length === 0 ) 
      return;

      const consultarApiLetra = async () => {
        const { artista , letra } = busquedaletra;
        const url = `https://api.lyrics.ovh/v1/${artista}/${letra}`;

      }
      consultarApiLetra();
  }, [busquedaletra]);



  return (

    <Fragment>
      <Formulario
          guardarBusquedaLetra={guardarBusquedaLetra}
      
      />
    </Fragment>
  
  );
}

export default App;
