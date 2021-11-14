import React from "react";
import brand from "./../../img/La cocina de Alicia Logo.svg"
import cpr from "./../../img/62392824-icono-de-carrito-de-compras-icono-de-vector-de-mejor-diseño-plano.jpg"
import usrl from "./../../img/16363.png"
import './../../css/nv.css'
import {  
  Link
} from "react-router-dom";
class navbarg extends React.Component{
    render(){
        return (
          
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
              <div class="container-fluid">
              
               
                
              <Link to="/" class="navbar-brand">
              <img src={brand} alt="" width="160" height="60" />

              </Link>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav  ms-auto text-end" >
                    <Link class="nav-link active" aria-current="page" to="/inicio">
                      Inicio
                    </Link>
                    <Link class="nav-link" to="/menu">
                      El Menú
                    </Link>
                    
                    
                    
                    <div class="d-flex justify-content-around">

                    <Link id="btccp" class="btn btn-light ms-1" to="/carrito" role="button">
                      <img id="cprl" src={cpr} height="30px" alt="Logo" width="30px" class="rounded-circle"></img>
                        Carrito de Compras
                    </Link>
                                            
                    <Link id="btlg" class="btn btn-light ms-2" to="/login" role="button">
                      <img id="usrl" src={usrl} height="30px" alt="Logo" width="30px" class="rounded-circle"></img>
                        Login
                    </Link>


                    </div>
                    
                  </div>
                </div>
              </div>
            </nav>
          
        );
    }
}
export default navbarg;