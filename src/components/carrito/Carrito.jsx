import react from "react";
import Plantillacarrito from './Plantillacarrito'
import Asidecarrito from "./Asidecarrito";
import Imagen1 from '../../Images/plato1.jpg'
import Imagen2 from '../../Images/plato2.jpg'
import Imagen3 from '../../Images/plato3.jpg'
import Imagen4 from '../../Images/plato4.jpg'
import Imagen5 from '../../Images/plato5.jpg'
import Imagen6 from '../../Images/plato6.jpg'
import Imagen7 from '../../Images/plato7.jpg'
import Imagen8 from '../../Images/plato8.jpg'
import Imagen9 from '../../Images/plato9.jpg'
import Imagen10 from '../../Images/plato10.jpg'
import Imagen11 from '../../Images/plato11.jpg'
import Imagen12 from '../../Images/plato12.jpg'
import './carrito.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


class Carrito extends react.Component{

    render(){
        const nPla1 = "Wiener schnitzel";
        const nPla2 = "Asado de cerdo";
        const nPla3 = "Kartoffelsalat";
        const nPla4 = "Backhendlt";
        const nPla5 = "Frittatensuppet";
        const nPla6 = "Gulash estilo austríaco";
        const nPla7 = "Semmelknödelt";
        const nPla8 = "Tafelspitz";
        const nPla9 = "Brettljause";
        const nPla10 = "Vanillekipferl";
        const nPla11 = "Powidl";
        const nPla12 = "Krautfleckerlo";
        var Ppla1 = localStorage.getItem(nPla1);
        var Ppla2 = localStorage.getItem(nPla2);
        var Ppla3 = localStorage.getItem(nPla3);
        var Ppla4 = localStorage.getItem(nPla4);
        var Ppla5 = localStorage.getItem(nPla5);
        var Ppla6 = localStorage.getItem(nPla6);
        var Ppla7 = localStorage.getItem(nPla7);
        var Ppla8 = localStorage.getItem(nPla8);
        var Ppla9 = localStorage.getItem(nPla9);
        var Ppla10 = localStorage.getItem(nPla10);
        var Ppla11 = localStorage.getItem(nPla11);
        var Ppla12 = localStorage.getItem(nPla12);
         

        return(
            <div className="fondomenu">
              <div className="container">
                <br></br>
                <div>
                <h1 className="Titulocarrito">BIENVENIDO AL CARRITO DE COMPRAS</h1>
                <br></br>
                <br></br>
                <h2 className="Titulocarrito">Aqui encontraras tus selecciones del menu</h2>  <Link to="/menu">  <button className="btn btn-primary btn-block">Ir ala seleccion del menu</button></Link>
              </div>
              </div>
              <br></br>
                <div className="container-sm btn-warning">
                  {
                    Ppla1 > 0 ? 
                    
                    <Plantillacarrito identificador="Wiener schnitzel" Nombredeplato= "Wiener schnitzel" Imagendeplato={Imagen1} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." />  : <div></div>
                    
                  }
                  
                </div>
                <div className="container-sm btn-dark">
                {
                    Ppla2 > 0 ?    <Plantillacarrito identificador="Asado de cerdo" Nombredeplato= "Asado de cerdo" Imagendeplato={Imagen2} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." /> : <div></div>
                    
                  }
                </div>
                <div className="container-sm btn-warning">
                {
                    Ppla3 > 0 ?  <Plantillacarrito identificador="Kartoffelsalat" Nombredeplato= "Kartoffelsalat" Imagendeplato={Imagen3} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." /> : <div></div>
                    
                  }
                  
                </div>
                <div className="container-sm btn-dark">
                {
                    Ppla4 > 0 ?  <Plantillacarrito identificador="Backhendlt" Nombredeplato= "Backhendlt" Imagendeplato={Imagen4} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." /> : <div></div>
                    
                  }
                  
              
                </div>
                <div className="container-sm btn-warning">
                {
                    Ppla5 > 0 ? <Plantillacarrito identificador="Frittatensuppeto" Nombredeplato= "Frittatensuppeto" Imagendeplato={Imagen5} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." /> : <div></div>
                    
                  }
                  
           
                </div>
                <div className="container-sm btn-dark">
                {
                    Ppla6 > 0 ? <Plantillacarrito identificador="Gulash estilo austríaco" Nombredeplato= "Gulash estilo austríaco" Imagendeplato={Imagen6} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." /> : <div></div>
                    
                  }
                  
           
                </div>
                <div className="container-sm btn-warning">
                {
                    Ppla7 > 0 ? <Plantillacarrito identificador="Semmelknödelt" Nombredeplato= "Semmelknödelt" Imagendeplato={Imagen7} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." /> : <div></div>
                    
                  }
                  
          
                </div>
                <div className="container-sm btn-dark">
                {
                    Ppla8 > 0 ? <Plantillacarrito identificador="Tafelspitz" Nombredeplato= "Tafelspitz" Imagendeplato={Imagen8} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." /> : <div></div>
                    
                  }
                  
              
                </div>
                <div className="container-sm btn-warning">
                {
                    Ppla9 > 0 ? <Plantillacarrito identificador="Brettljause" Nombredeplato= "Brettljause" Imagendeplato={Imagen9} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." /> : <div></div>
                    
                  }
                  
                  
                </div>
                <div className="container-sm btn-dark">
                {
                    Ppla10 > 0 ? <Plantillacarrito identificador="Vanillekipferl" Nombredeplato= "Vanillekipferl" Imagendeplato={Imagen10} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." /> : <div></div>
                    
                  }
                </div>
                <div className="container-sm btn-warning">
                {
                    Ppla11 > 0 ? <Plantillacarrito identificador="Powidl" Nombredeplato= "Powidl" Imagendeplato={Imagen11} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." /> : <div></div>
                    
                  }
                  
               
                </div>
                <div className="container-sm btn-dark">
                {
                    Ppla12 > 0 ? <Plantillacarrito identificador="Krautfleckerlo" Nombredeplato= "Krautfleckerlo" Imagendeplato={Imagen12} Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." />  : <div></div>
                    
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