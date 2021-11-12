import React,{Component} from "react";
import brand from "../img/La cocina de Alicia Logo.svg"
import cpr from "../img/62392824-icono-de-carrito-de-compras-icono-de-vector-de-mejor-diseño-plano.jpg"

export class NavBar extends Component{
    render(){
        return (
          <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container-fluid">
              <a class="navbar-brand" href="">
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
                  <div class="navbar-nav ms-auto">
                    <a class="nav-link active" aria-current="page" href="">
                      Inicio
                    </a>
                    <a class="nav-link" href="">
                      El Menú
                    </a>
                    <a class="nav-link" href="" ml-auto>
                      Servicios
                    </a>
                    <a class="nav-link">Contacto</a>
                    <a class="nav-link">Reservas</a>
                    <a class="nav-link">
                        <img src={cpr} height="30px" alt="Logo" width="30px" class="rounded-circle"></img>

                        Carrito de Compras

                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </React.Fragment>
        );
    }
}