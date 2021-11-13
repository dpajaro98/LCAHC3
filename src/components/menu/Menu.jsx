import React from "react"; 
import PlatinllaMenu from './PlatinllaMenu'
import Primerasidemenu from "./Primerasidemenu";
import Segundoasidemenu from "./Segundoasidemenu";
import carrito from '../../Images/carrito.jpgU'
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