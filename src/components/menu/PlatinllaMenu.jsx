import React from "react";
import SeccionMenu from './SeccionMenu'
import Imagen1 from '../../img/spaguetti.jpg'
import Imagen2 from '../../img/pastas a la veneciana.jpg'
import Imagen3 from '../../img/ganso asado.jpg'
import Imagen4 from '../../img/sopa de res.jpg'


class PlatinllaMenu extends React.Component{
    render(){
  
        return(
            <React.Fragment>
                <br></br>
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-4">
                    <div id="i1"  class="col bg-info" ><SeccionMenu Nombredeplato= "Pasta a la Bolognesa" Imagendeplato={Imagen1} Identificadordeplato="Pasta a la Bolognesa" Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." /></div>
                    <div id="i2" class="col bg-info"><SeccionMenu Nombredeplato= "Pasta a la Veneciana" Imagendeplato={Imagen2} Identificadordeplato="Pasta a la Veneciana" Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." /></div>
                    <div id="i3" class="col bg-info"><SeccionMenu Nombredeplato= "Ganso Asado" Imagendeplato={Imagen3} Identificadordeplato="Ganso Asado" Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." /></div>
                    <div id="i4" class="col bg-info"><SeccionMenu Nombredeplato= "Sopa de Res" Imagendeplato={Imagen4} Identificadordeplato="Sopa de Res" Descripciondeplato="El escalope vienés o wiener schnitzel es uno de los platos más conocidos de la cocina de Austria. Se prepara con un fino filete de carne de ternera que se ablanda con un mazo de cocina y se reboza antes de freír." /></div>
                        
                    </div>
                </div>
                
                
            </React.Fragment>
        );
    }
}
export default PlatinllaMenu;