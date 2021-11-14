import React from "react"; 
import PlatinllaMenu from './PlatinllaMenu'
import Primerasidemenu from "./Primerasidemenu";
import Segundoasidemenu from "./Segundoasidemenu";
import carrito from '../../img/62392824-icono-de-carrito-de-compras-icono-de-vector-de-mejor-diseño-plano.jpg'
import "./menu.css"


class Menu extends React.Component{
    render(){
        return(
                <div className="fondomenu">
                    <div>
                        <Primerasidemenu TituloPrimerasidemenu="BIENVENIDO AL MENU" />
                    </div>
                    <div>
                        <PlatinllaMenu />
                    </div>
                    <div>
                        <Segundoasidemenu carrito={carrito} />
                
                    </div>    
  
                </div>
            
        )
    }
}
export default Menu;