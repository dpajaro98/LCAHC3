import React,{Component} from "react";
import brand from "../img/La cocina de Alicia Logo.svg"
import cpr from "../img/62392824-icono-de-carrito-de-compras-icono-de-vector-de-mejor-diseño-plano.jpg"
import usrl from "../img/16363.png"
import '../css/nv.css'
export class NavBar extends Component{
    render(){
        return (
          <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
              <div class="container-fluid">
              <a class="navbar-brand" href="/#">
               <img src={brand} alt="" width="160" height="60" />
                
              </a>
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
                    <a class="nav-link active" aria-current="page" href="/#">
                      Inicio
                    </a>
                    <a class="nav-link" href="/#">
                      El Menú
                    </a>
                    <a class="nav-link" href="/#">
                      Servicios
                    </a>
                    <a class="nav-link" href="/#">Contacto</a>
                    <a class="nav-link" href="/#">Reservas</a>
                    <div class="d-flex justify-content-around">

                    <a id="btccp" class="btn btn-light ms-1" href="/#" role="button">
                      <img id="cprl" src={cpr} height="30px" alt="Logo" width="30px" class="rounded-circle"></img>
                        Carrito de Compras
                    </a>
                   
                        

                        
                    <a id="btlg" class="btn btn-light ms-2" href="/#" role="button">
                      <img id="usrl" src={usrl} height="30px" alt="Logo" width="30px" class="rounded-circle"></img>
                        Login
                    </a>


                    </div>
                    
                  </div>
                </div>
              </div>
            </nav>
          </React.Fragment>
        );
    }
}