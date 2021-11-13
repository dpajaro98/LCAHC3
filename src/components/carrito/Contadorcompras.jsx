import React from "react";
import Localstoragecarrito from './Localstoragecarrito'

class Contadorcompras extends React.Component{
    render(props){
        return(
            <div className="container">
                <label><input type="number" min="0" defaultValue={this.props.valorinicial} id={this.props.Identificadordeplato}></input>     Unidades a solicitar</label>
                <h3>
                
              

                <Localstoragecarrito Identificadordeplato ={this.props.Identificadordeplato} />

                </h3>
            </div>
        );
    }
}
  
export default Contadorcompras;