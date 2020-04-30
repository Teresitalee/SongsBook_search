import React, { useState } from 'react';

const Formulario = () => {

    //state
    const [busqueda, guadarBusqueda] = useState({
        artista: '',
        cancion: ''

    });

    const [error , guardarError] = useState(false);

    // extraer

    const { artista , cancion } = busqueda;


    // funcion a cada input para leer su contenido
    const actualizarState = e => {
        guadarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value

        })
    }

    // consulta a la api
    const buscarInformacion = e => {
        e.preventDefault();

        if(artista.trim() === '' || cancion.trim() === '' ){
            guardarError(true);
            return;

        }
        guardarError(false);


        // pasar al componenenet principal


    }




    return ( 
        <div className="bg-dark">
            <div className="container">
                <div className="row">
                    <form
                      onSubmit={buscarInformacion}
                      className="col card text-white bg-transparent mb-5 pt-5 pb-2"

                    
                    >
                        <fieldset>
                            <legend className="text-center">Busca la letra de tu canción favorita</legend>

                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="form-group">
                                        <label>Artist</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="artista" 
                                            placeholder="Name artist"
                                            onChange={actualizarState}
                                            value={artista}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6 ">
                                    <div className="form-group">
                                        <label>Song</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="cancion" 
                                            placeholder="Name song"
                                            onChange={actualizarState}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-warning float-right text-dark"
                                >
                                Search</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Formulario
;