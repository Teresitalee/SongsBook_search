import React from 'react';

const Formulario = () => {
    return ( 
        <div className="bg-dark">
            <div className="container">
                <div className="row">
                    <form
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
                                        />
                                    </div>
                                </div>
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-warning float-right"
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