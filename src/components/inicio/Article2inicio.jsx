import React from "react";
import imagen1 from '../../img/spaguetti.jpg'
import imagen2 from '../../img/pastas a la veneciana.jpg';
import imagen3 from '../../img/ganso asado.jpg';
import imagen4 from '../../img/sopa de res.jpg';
import imagen5 from '../../img/menu-3206749_1280.jpg';
import {
   
    Link
  } from "react-router-dom";

const Article2inicio = () =>{
  return(
    <div className="container">
        <br></br>
        <h3 className="TituloArticle2">RECOMENDACIONES DEL CHEF</h3>
        <br></br>
        <div className="row">
            <div className="col-1"></div>
            <div className="col-2">
                <div className="ContenedorRecomendacion">
                    <h6 className="TituloRecomendaciones">Pastas</h6>
                        <img src={imagen1} width="196px"></img>
            </div>
            <br></br>
            <div className="ContenedorRecomendacion">
                <h6 className="TituloRecomendaciones"> Pasta a la Veneciana</h6>
                <img src={imagen3} width="196px"></img>
            </div>
        </div>
        <div className="col-1"></div>
        <div className="col-2">
            <div className="ContenedorRecomendacion">
                <h6 className="TituloRecomendaciones">ganso asado</h6>
                <img src={imagen2} width="196px"></img>
            </div>
            <br></br>
           <div className="ContenedorRecomendacion">
                <h6 className="TituloRecomendaciones">Sopa de res</h6>
                <img src={imagen4} width="196px"></img>
            </div>
        </div>
        <div className="col-2"></div>
        <div className="col-4">
            <img src={imagen5} width="200px"></img>
            <br></br>
            <div className="container">
                <br></br>
                <Link to="/Menu"><button type="button" class="btn btn-warning">Visita Nuestro Menu</button></Link>
            </div>

            
        </div>
    </div>
</div>
    
  )}
export default Article2inicio;
