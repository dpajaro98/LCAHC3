import react from "react";
import Plantillacarrito from './Plantillacarrito'
import Asidecarrito from "./Asidecarrito";
import Imagen1 from '../../img/spaguetti.jpg'
import Imagen2 from '../../img/pastas a la veneciana.jpg'
import Imagen3 from '../../img/ganso asado.jpg'
import Imagen4 from '../../img/sopa de res.jpg'

import './carrito.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


class Carrito extends react.Component{

    render(){
        const nPla1 = "Pasta a la Bolognesa";
        const nPla2 = "Pasta a La Veneciana";
        const nPla3 = "Ganso Asado";
        const nPla4 = "Sopa de Res";
        
        var Ppla1 = localStorage.getItem(nPla1);
        var Ppla2 = localStorage.getItem(nPla2);
        var Ppla3 = localStorage.getItem(nPla3);
        var Ppla4 = localStorage.getItem(nPla4);
        
        return(
            <div className="fondomenu">
              <div className="container">
                <br></br>
                <div>
                <h1 className="Titulocarrito">BIENVENIDO AL CARRITO DE COMPRAS</h1>
                <br></br>
                <br></br>
                <h2 className="Titulocarrito">Aqui encontraras tus selecciones del menu</h2>  <Link to="/menu">  <button className="btn btn-primary btn-block">Ir a la seleccion del menu</button></Link>
              </div>
              </div>
              <br></br>
                <div className="container-sm btn-warning">
                  {
                    Ppla1 > 0 ? 
                    
                    <Plantillacarrito identificador="Pasta a la Bolognesa" Nombredeplato= "Pasta a la Bolognesa" Imagendeplato={Imagen1} Descripciondeplato="El escalope vienés o pasta es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." />  : <div></div>
                    
                  }
                  
                </div>
                <div className="container-sm btn-dark">
                {
                    Ppla2 > 0 ?    <Plantillacarrito identificador="Pasta a la Veneciana" Nombredeplato= "Pasta a la Veneciana" Imagendeplato={Imagen2} Descripciondeplato="El escalope vienés o pasta es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." /> : <div></div>
                    
                  }
                </div>
                <div className="container-sm btn-warning">
                {
                    Ppla3 > 0 ?  <Plantillacarrito identificador="Ganso Asado" Nombredeplato= "Ganso Asado" Imagendeplato={Imagen3} Descripciondeplato="El escalope vienés o pasta es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." /> : <div></div>
                    
                  }
                  
                </div>
                <div className="container-sm btn-dark">
                {
                    Ppla4 > 0 ?  <Plantillacarrito identificador="Sopa de Res" Nombredeplato= "Sopa de Res" Imagendeplato={Imagen4} Descripciondeplato="El escalope vienés o pasta es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." /> : <div></div>
                    
                  }
                  
              
                </div>
              
                  
                
                <div>
                  <Asidecarrito />

                </div>


                      
            </div>
        );
    }
}
export default Carrito;